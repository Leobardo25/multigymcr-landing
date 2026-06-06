import React, { useEffect, useRef } from 'react';

const painPoints = [
  "Fugas de Dinero",
  "Caos Administrativo",
  "Accesos Inseguros",
  "Pérdida de Tiempo",
  "Clientes Molestos",
  "Excel Desactualizado",
  "Mensualidades Vencidas",
  "Control Manual",
  "Falta de Métricas",
  "Pagos Atrasados",
  "Suscripciones Canceladas",
  "Retención Baja",
  "Inventario Perdido",
  "Descontrol de Rutinas",
  "Gestión de Entrenadores",
  "Ventas Estancadas",
  "Usuarios Inactivos",
  "WhatsApp Colapsado",
  "Gastos Ocultos",
  "Falta de Seguimiento"
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
      constructor(isPainPoint = false, isHunter = false) {
        this.isPainPoint = isPainPoint;
        this.isHunter = isHunter;
        this.label = isHunter ? "MultiGymCR" : (isPainPoint ? getRandomPainPointText() : "");
        
        if (isHunter) {
          this.x = width / 2;
          this.y = height / 2;
          this.baseVx = (Math.random() - 0.5) * 2;
          this.baseVy = (Math.random() - 0.5) * 2;
          this.vx = this.baseVx;
          this.vy = this.baseVy;
        } else if (isPainPoint) {
          this.spawnFromEdges();
        } else {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.baseVx = (Math.random() - 0.5) * 0.8;
          this.baseVy = (Math.random() - 0.5) * 0.8;
          this.vx = this.baseVx;
          this.vy = this.baseVy;
        }

        this.radius = isHunter ? 8 : (isPainPoint ? Math.random() * 2 + 4 : Math.random() * 1.5 + 0.5);
        this.color = isHunter ? '#10b981' : (isPainPoint ? '#f43f5e' : '#6366f1'); 
        this.glow = isHunter ? '#34d399' : (isPainPoint ? '#fb7185' : 'transparent');
        
        // Animación de aparición gradual
        this.opacity = (isPainPoint || isHunter) ? 0 : 1;
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
        // Aumentar drásticamente el tiempo para que no saturen la pantalla
        this.respawnTime = Date.now() + 6000 + Math.random() * 6000;
        
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

      spawnFromEdges() {
         // Spawnea en las esquinas de la pantalla para evitar estorbar arriba/abajo en móvil
         const corner = Math.floor(Math.random() * 4); // 0: TL, 1: TR, 2: BR, 3: BL
         const centerX = width / 2;
         const centerY = height / 2;
         
         const isMobile = width < 768;
         const marginX = isMobile ? 20 : 60;
         const marginY = isMobile ? 20 : 60;

         if (corner === 0) { // Top-Left
             this.x = marginX;
             this.y = marginY;
         } else if (corner === 1) { // Top-Right
             this.x = width - marginX;
             this.y = marginY;
         } else if (corner === 2) { // Bottom-Right
             this.x = width - marginX;
             this.y = height - marginY;
         } else { // Bottom-Left
             this.x = marginX;
             this.y = height - marginY;
         }
         
         // Direccionarla suavemente hacia el centro, con ligera variación para que no sea un láser perfecto
         let dx = (centerX + (Math.random() - 0.5) * 100) - this.x;
         let dy = (centerY + (Math.random() - 0.5) * 100) - this.y;
         let dist = Math.sqrt(dx*dx + dy*dy) || 1;
         
         const speed = Math.random() * 0.4 + 0.2; // Lento para que no sature
         this.baseVx = (dx / dist) * speed;
         this.baseVy = (dy / dist) * speed;
         this.vx = this.baseVx;
         this.vy = this.baseVy;
      }

      draw() {
        if (this.opacity <= 0) return; // No dibujar si es invisible
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Efecto "Glow" optimizado para alto rendimiento (sin usar shadowBlur)
        if (this.isPainPoint || this.isHunter) {
          // Glow exterior más suave y grande
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * (this.isHunter ? 3 : 4), 0, Math.PI * 2);
          ctx.fillStyle = this.glow + '30'; // 20% opacity approx en hex
          ctx.fill();
          
          // Glow interior
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * (this.isHunter ? 1.5 : 2), 0, Math.PI * 2);
          ctx.fillStyle = this.glow + '60'; // 40% opacity approx en hex
          ctx.fill();
        }

        // Círculo principal
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Dibujar etiqueta si es un punto de dolor o hunter
        if ((this.isPainPoint || this.isHunter) && this.label) {
          ctx.font = this.isHunter ? "bold 13px Inter, sans-serif" : "bold 11px Inter, sans-serif";
          ctx.fillStyle = this.isHunter ? "#34d399" : "rgba(255, 255, 255, 0.9)";
          if (this.isHunter) {
            // Un poco de sombra al texto del hunter para que resalte más
            ctx.shadowColor = "#000000";
            ctx.shadowBlur = 4;
          }
          ctx.fillText(this.label, this.x + 12, this.y + 5);
          ctx.shadowBlur = 0;
        }
        ctx.restore();
      }

      update() {
        // Manejo de Renacimiento (Despertar de punto simple a punto de dolor)
        if (this.isSleeping && Date.now() > this.respawnTime) {
          this.isSleeping = false;
          this.isPainPoint = true;
          this.label = getRandomPainPointText();
          this.spawnFromEdges(); // Nace desde los bordes de la pantalla
          
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
        }
        
        // Lógica de "Hunter" (Misil guiado hacia los puntos de dolor)
        if (this.isHunter) {
           let nearest = null;
           let minDist = Infinity;
           for(let p of particles) {
               if (p.isPainPoint && p.opacity > 0) {
                   let dx = p.x - this.x;
                   let dy = p.y - this.y;
                   let dist = Math.sqrt(dx*dx + dy*dy);
                   if (dist < minDist) {
                       minDist = dist;
                       nearest = p;
                   }
               }
           }
           
           if (nearest) {
               // Acelerar hacia el objetivo (misil guiado lento y constante)
               let dx = nearest.x - this.x;
               let dy = nearest.y - this.y;
               let dist = Math.sqrt(dx*dx + dy*dy);
               this.vx += (dx / dist) * 0.1;
               this.vy += (dy / dist) * 0.1;
               
               // Límite de velocidad del cazador (drásticamente reducido)
               const maxSpeed = 1.8;
               const currentSpeed = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
               if (currentSpeed > maxSpeed) {
                  this.vx = (this.vx / currentSpeed) * maxSpeed;
                  this.vy = (this.vy / currentSpeed) * maxSpeed;
               }

               // Colisión / Destrucción!
               if (minDist < this.radius + nearest.radius + 15) {
                   nearest.shatter(particles);
                   // El cazador rebota de felicidad suavemente
                   this.vx *= -0.3;
                   this.vy *= -0.3;
               }
           } else {
               // Patrullar suavemente si no hay dolor
               this.vx = this.vx * 0.98 + (Math.random() - 0.5) * 0.2;
               this.vy = this.vy * 0.98 + (Math.random() - 0.5) * 0.2;
               const currentSpeed = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
               if (currentSpeed > 1.0) {
                  this.vx = (this.vx / currentSpeed) * 1.0;
                  this.vy = (this.vy / currentSpeed) * 1.0;
               }
           }
        } else if (!this.isDebris) {
          // Fluctuación constante de la velocidad base para simular gravedad fluida (Solo no-hunters)
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
      
      // Puntos de dolor (nacen desde los bordes sin sector estricto)
      const numPainPoints = isMobile ? 4 : 6;
      for (let i = 0; i < numPainPoints; i++) {
         particles.push(new Particle(true));
      }
      
      // El Cazador (MultiGym)
      particles.push(new Particle(false, true));
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Limpiar basura (debris muertos)
      particles = particles.filter(p => !p.dead);

      // Dibujar líneas y procesar colisiones
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) { // Optimización 1: j = i + 1 (evita duplicados y auto-chequeos)
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distSq = dx * dx + dy * dy;
          
          // Optimización 2: Saltarse el costoso Math.sqrt si las partículas están muy lejos (> 160px)
          if (distSq > 25600) continue; 
          
          let distance = Math.sqrt(distSq);
          
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
