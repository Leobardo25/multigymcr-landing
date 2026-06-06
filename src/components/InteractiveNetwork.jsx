import React, { useEffect, useRef } from 'react';

const painPoints = [
  "Fugas de Dinero",
  "Caos Administrativo",
  "Accesos Inseguros",
  "Pérdida de Tiempo",
  "Clientes Molestos",
  "Excel Desactualizado",
  "Suscripciones Vencidas",
  "Control Manual",
  "Falta de Métricas"
];

const InteractiveNetwork = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    let width = 0;
    let height = 0;
    
    // Banco rotativo de textos para no repetir
    let activeTexts = new Set();
    const getRandomPainPointText = () => {
      const available = painPoints.filter(p => !activeTexts.has(p));
      if (available.length === 0) return painPoints[Math.floor(Math.random() * painPoints.length)];
      const chosen = available[Math.floor(Math.random() * available.length)];
      activeTexts.add(chosen);
      return chosen;
    };
    // Configuración interactiva
    let mouse = { x: null, y: null, radius: 100 };

    const resize = () => {
      // Usar el tamaño de la ventana pero tener en cuenta el DPR para dispositivos móviles
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      initParticles();
    };

    class Particle {
      constructor(isPainPoint = false, sector = null) {
        this.isPainPoint = isPainPoint;
        this.sector = sector;
        this.label = isPainPoint ? getRandomPainPointText() : "";
        
        if (isPainPoint) {
          this.spawnFromSafeZone();
        } else {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.baseVx = (Math.random() - 0.5) * 0.8;
          this.baseVy = (Math.random() - 0.5) * 0.8;
          this.vx = this.baseVx;
          this.vy = this.baseVy;
        }

        this.radius = isPainPoint ? Math.random() * 2 + 4 : Math.random() * 1.5 + 0.5;
        this.color = isPainPoint ? '#f43f5e' : '#6366f1'; 
        this.glow = isPainPoint ? '#fb7185' : 'transparent';
        
        // Animación de aparición gradual
        this.opacity = isPainPoint ? 0 : 1;
        this.targetOpacity = 1;
        this.spawnDelay = isPainPoint ? Math.random() * 4000 : 0; 
        this.createdAt = Date.now();
        
        // Lógica de destrucción
        this.isSleeping = false;
        this.respawnTime = 0;
        this.isDebris = false;
        this.dead = false;
      }

      shatter(particlesArray) {
        this.isSleeping = true;
        this.isPainPoint = false;
        this.opacity = 0;
        activeTexts.delete(this.label);
        this.respawnTime = Date.now() + 1500 + Math.random() * 2000;
        
        // Crear 12 bolitas pequeñas de escombros
        for (let i = 0; i < 12; i++) {
          const debris = new Particle(false);
          debris.x = this.x + (Math.random() - 0.5) * 10;
          debris.y = this.y + (Math.random() - 0.5) * 10;
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 10 + 5;
          debris.vx = Math.cos(angle) * speed;
          debris.vy = Math.sin(angle) * speed;
          debris.color = this.color;
          debris.glow = this.glow;
          debris.radius = Math.random() * 2 + 1;
          debris.opacity = 1;
          debris.isDebris = true;
          particlesArray.push(debris);
        }
      }

      spawnFromSafeZone() {
        // En lugar de nacer exactamente en el centro (detrás del texto), 
        // nacen en los bordes de la zona segura central
        const safeMarginX = width < 768 ? 140 : 280;
        const safeMarginY = width < 768 ? 120 : 180;
        const centerY = height / 2 - (width < 768 ? 50 : 80);
        
        let speedX = Math.random() * 1.5 + 0.5;
        let speedY = Math.random() * 1.5 + 0.5;
        
        // Posicionar y direccionar según sector
        if (this.sector === 'left') {
            this.x = width / 2 - safeMarginX;
            this.y = centerY + (Math.random() - 0.5) * 100;
            this.baseVx = -speedX;
            this.baseVy = (Math.random() - 0.5) * 1.5;
        } else if (this.sector === 'right') {
            this.x = width / 2 + safeMarginX;
            this.y = centerY + (Math.random() - 0.5) * 100;
            this.baseVx = speedX;
            this.baseVy = (Math.random() - 0.5) * 1.5;
        } else if (this.sector === 'top') {
            this.x = width / 2 + (Math.random() - 0.5) * 100;
            this.y = centerY - safeMarginY;
            this.baseVx = (Math.random() - 0.5) * 1.5;
            this.baseVy = -speedY;
        } else if (this.sector === 'bottom') {
            this.x = width / 2 + (Math.random() - 0.5) * 100;
            this.y = centerY + safeMarginY;
            this.baseVx = (Math.random() - 0.5) * 1.5;
            this.baseVy = speedY;
        } else {
            this.x = width / 2;
            this.y = height / 2;
            this.baseVx = (Math.random() - 0.5) * 1.5;
            this.baseVy = (Math.random() - 0.5) * 1.5;
        }
        
        this.vx = this.baseVx;
        this.vy = this.baseVy;
      }

      draw() {
        if (this.opacity <= 0) return; // No dibujar si es invisible
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Efecto "Glow" optimizado para alto rendimiento (sin usar shadowBlur)
        if (this.isPainPoint) {
          // Glow exterior
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = this.glow + '30'; // 20% opacity approx en hex
          ctx.fill();
          
          // Glow interior
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = this.glow + '60'; // 40% opacity approx en hex
          ctx.fill();
        }

        // Círculo principal
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Dibujar etiqueta si es un punto de dolor
        if (this.isPainPoint && this.label) {
          ctx.font = "bold 13px Inter, sans-serif";
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.fillText(this.label, this.x + 12, this.y + 5);
        }
        ctx.restore();
      }

      update() {
        // Manejo de Renacimiento (Despertar de punto simple a punto de dolor)
        if (this.isSleeping && Date.now() > this.respawnTime) {
          this.isSleeping = false;
          this.isPainPoint = true;
          this.label = getRandomPainPointText();
          this.spawnFromSafeZone(); // Nace desde los bordes de la zona segura
          
          this.color = '#f43f5e';
          this.glow = '#fb7185';
          this.radius = Math.random() * 2 + 4;
          this.targetOpacity = 1;
          this.opacity = 0; // Para que aparezca con fade in
          this.createdAt = Date.now();
          this.spawnDelay = 0;
        }

        // Fade in logic (Solo cuando está naciendo o despertando)
        if (this.opacity < this.targetOpacity) {
          if (Date.now() - this.createdAt > this.spawnDelay) {
            this.opacity += 0.015;
            if (this.opacity > this.targetOpacity) this.opacity = this.targetOpacity;
          }
        }

        if (this.isDebris) {
          this.opacity -= 0.03; // Desvanecer rápido
          if (this.opacity <= 0) {
             this.dead = true;
          }
        }

        // Interacción con mouse/dedo (Repulsión)
        if (mouse.x != null && mouse.y != null && this.opacity > 0 && !this.isDebris) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            // Acelerar si es tocado/movido cerca (Repulsión centrífuga suave)
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius; 
            const directionX = forceDirectionX * force * 5;
            const directionY = forceDirectionY * force * 5;
            
            this.vx -= directionX;
            this.vy -= directionY;
          }
        }
        
        // Zona de Exclusión Central y Fuerza de Retención de Sector
        if (this.isPainPoint && !this.isDebris) {
          const centerX = width / 2;
          const centerY = height / 2 - (width < 768 ? 50 : 80); 
          const dxCenter = centerX - this.x;
          const dyCenter = centerY - this.y;
          const distCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
          const safeRadius = width < 768 ? 160 : 400; 
          
          if (distCenter < safeRadius) {
            // Fuerza repulsiva mucho más fuerte para crear un "campo de fuerza" real
            const repulsion = (safeRadius - distCenter) / safeRadius;
            this.vx -= (dxCenter / distCenter) * repulsion * 2;
            this.vy -= (dyCenter / distCenter) * repulsion * 2;
          }
          
          // Atracción magnética hacia el centro de su propio territorio para evitar aglomeración central
          let targetX = this.x;
          let targetY = this.y;
          
          if (this.sector === 'left') targetX = width * 0.15;
          else if (this.sector === 'right') targetX = width * 0.85;
          else if (this.sector === 'top') targetY = height * 0.15;
          else if (this.sector === 'bottom') targetY = height * 0.85;

          if (this.sector) {
            this.vx += (targetX - this.x) * 0.0008;
            this.vy += (targetY - this.y) * 0.0008;
          }
        }
        
        // Fricción y movimiento errático (Browniano) para que no se queden quietas
        if (!this.isDebris) {
          // Fluctuación constante de la velocidad base para simular gravedad fluida
          if (this.isPainPoint) {
            this.baseVx += (Math.random() - 0.5) * 0.15;
            this.baseVy += (Math.random() - 0.5) * 0.15;
            // Limitar velocidad base
            const limit = 2.0;
            this.baseVx = Math.max(Math.min(this.baseVx, limit), -limit);
            this.baseVy = Math.max(Math.min(this.baseVy, limit), -limit);
          }

          this.vx = this.vx * 0.98 + this.baseVx * 0.02;
          this.vy = this.vy * 0.98 + this.baseVy * 0.02;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Rebote en bordes (Edge Padding) para evitar que el texto se corte
        const paddingRight = this.isPainPoint ? (width < 768 ? 130 : 160) : 0; // Margen para el texto
        let hitEdge = false;
        
        if (this.x < 0) {
          this.x = 0;
          this.vx = Math.abs(this.vx);
          this.baseVx = Math.abs(this.baseVx);
          hitEdge = true;
        } else if (this.x > width - paddingRight) {
          this.x = width - paddingRight;
          this.vx = -Math.abs(this.vx);
          this.baseVx = -Math.abs(this.baseVx);
          hitEdge = true;
        }
        
        if (this.y < 0) {
          this.y = 0;
          this.vy = Math.abs(this.vy);
          this.baseVy = Math.abs(this.baseVy);
        } else if (this.y > height) {
          this.y = height;
          this.vy = -Math.abs(this.vy);
          this.baseVy = -Math.abs(this.baseVy);
        }
        
        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      activeTexts.clear();
      const isMobile = width < 768;
      const numStandardParticles = isMobile ? 40 : 80; 
      
      // Partículas estándar
      for (let i = 0; i < numStandardParticles; i++) {
        particles.push(new Particle(false));
      }
      
      // Puntos de dolor (limitados y separados por sectores)
      const numPainPoints = isMobile ? 4 : 6;
      for (let i = 0; i < numPainPoints; i++) {
         let sector;
         if (isMobile) {
            sector = i % 2 === 0 ? 'top' : 'bottom';
         } else {
            sector = i % 2 === 0 ? 'left' : 'right';
         }
         particles.push(new Particle(true, sector));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Limpiar basura (debris muertos)
      particles = particles.filter(p => !p.dead);

      // Dibujar líneas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          // Colisión y Repulsión Fuerte entre dos Puntos de Dolor para evitar apelotonamiento
          if (i !== j && particles[i].isPainPoint && particles[j].isPainPoint) {
            const minDistance = 160; // Distancia mínima segura
            if (distance < minDistance && distance > 0) {
              // Fuerza repulsiva muy alta (0.8) para evitar que el giroscopio los junte
              const pushForce = (minDistance - distance) / minDistance * 0.8;
              const pushX = (dx / distance) * pushForce;
              const pushY = (dy / distance) * pushForce;
              
              particles[i].vx += pushX;
              particles[i].vy += pushY;
              particles[j].vx -= pushX;
              particles[j].vy -= pushY;
            }
          }
          
            const maxDist = 120;
          if (distance < maxDist) {
            // Opacidad basada en distancia y en la opacidad actual de las partículas
            const distOpacity = 1 - (distance / maxDist);
            const lineOpacity = distOpacity * Math.min(particles[i].opacity, particles[j].opacity);
            
            if (lineOpacity <= 0) continue; // No dibujar si están invisibles
            
            ctx.beginPath();
            // Si ambas son pain points, línea más fuerte de color alerta
            if (particles[i].isPainPoint || particles[j].isPainPoint) {
               ctx.strokeStyle = `rgba(244, 63, 94, ${lineOpacity * 0.4})`; // rose
               ctx.lineWidth = 1.5;
            } else {
               ctx.strokeStyle = `rgba(99, 102, 241, ${lineOpacity * 0.2})`; // brand
               ctx.lineWidth = 0.8;
            }
            
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      particles.forEach(p => p.update());
      animationFrameId = requestAnimationFrame(animate);
    };

    // Eventos
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.radius = 150; // Mayor radio en touch para mejor interacción
      }
    };
    
    const handleTouchEnd = () => {
      mouse.x = null;
      mouse.y = null;
      mouse.radius = 100;
    };

    const handleCanvasClick = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || 0;
      const clickY = e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY) || 0;
      
      const x = clickX - rect.left;
      const y = clickY - rect.top;
      
      // Encontrar si tocó algún punto de dolor
      for (let p of particles) {
        if (p.isPainPoint && p.opacity > 0) {
          let dx = x - p.x;
          let dy = y - p.y;
          // Hitbox generoso (35px) para que sea fácil tocarlo en móviles
          if (Math.sqrt(dx * dx + dy * dy) < p.radius + 35) {
            p.shatter(particles);
            break; // Destruir solo uno por tap
          }
        }
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    if (canvas) {
      canvas.addEventListener('click', handleCanvasClick);
      canvas.addEventListener('touchstart', handleCanvasClick, { passive: true });
    }
    
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      if (canvas) {
        canvas.removeEventListener('click', handleCanvasClick);
        canvas.removeEventListener('touchstart', handleCanvasClick);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
      style={{ background: 'transparent', touchAction: 'pan-y' }}
    />
  );
};

export default InteractiveNetwork;
