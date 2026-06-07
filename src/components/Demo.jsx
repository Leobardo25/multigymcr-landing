import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause,
  Volume2, 
  VolumeX, 
  CheckCircle2,
  FastForward,
  Rewind,
  Maximize,
  Minimize
} from 'lucide-react';
import { ThumbnailCard, modulesData } from './ThumbnailCard';

const Demo = () => {
  const [activeTab, setActiveTab] = useState(modulesData[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControlsMobile, setShowControlsMobile] = useState(false);
  const [isFastForwarding, setIsFastForwarding] = useState(false);
  const videoRef = useRef(null);
  const playerContainerRef = useRef(null);
  const wasPlayingBeforeScrollRef = useRef(false);
  const controlsTimeoutRef = useRef(null);
  const pressTimerRef = useRef(null);
  const isLongPressRef = useRef(false);
  const pressStartCoordsRef = useRef({ x: 0, y: 0 });

  const currentModule = modulesData.find(module => module.id === activeTab);

  // Sincronizar barra de progreso con el avance real del video
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = videoRef.current.currentTime / videoRef.current.duration;
      setVideoProgress(isNaN(progress) ? 0 : progress);
    }
  };

  // Sincronizar estado de pantalla completa
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFull = !!document.fullscreenElement;
      setIsFullscreen(isFull);
      
      // Si salió de fullscreen (ej. con ESC o botón atrás del cel), desbloquear rotación
      if (!isFull) {
        if (window.screen && window.screen.orientation && window.screen.orientation.unlock) {
          window.screen.orientation.unlock();
        }
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Cargar video nuevo al cambiar de pestaña
  useEffect(() => {
    setIsPlaying(false);
    setHasStarted(false);
    setVideoProgress(0);
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [activeTab]);

  // Pausar y reanudar automáticamente según visibilidad del scroll
  // SOLO actúa si el usuario ya le dio play manualmente antes
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.25) {
          // Entró a la vista → reanudar si estaba reproduciéndose antes de salir
          if (wasPlayingBeforeScrollRef.current && videoElement.paused) {
            videoElement.play().catch(() => {});
          }
        } else if (entry.intersectionRatio <= 0.05) {
          // Salió de la vista → pausar y recordar que estaba reproduciéndose
          if (!videoElement.paused) {
            wasPlayingBeforeScrollRef.current = true;
            videoElement.pause();
          }
        }
      },
      { threshold: [0.05, 0.25] }
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setVideoProgress(0);
    setIsMuted(false); // Desmutear para escuchar el audio alto del video
    wasPlayingBeforeScrollRef.current = true; // Activar indicador de que el video se reproducirá
    
    // Auto-scroll suave al reproductor de video (útil en dispositivos móviles)
    setTimeout(() => {
      const playerContainer = document.getElementById('demo-player-container');
      if (playerContainer) {
        playerContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 50);

    // Intentar reproducir desmuteado de forma automática tras el renderizado de la pestaña
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch((err) => {
          console.error("Autoplay desmuteado bloqueado por el navegador:", err);
        });
      }
    }, 150);
  };

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (!videoRef.current.paused) {
        videoRef.current.pause();
        wasPlayingBeforeScrollRef.current = false; // Pausa manual: no reanudar al hacer scroll
      } else {
        // Forzar desmuteo al interactuar manualmente con el botón de play
        videoRef.current.muted = false;
        setIsMuted(false);
        wasPlayingBeforeScrollRef.current = true; // Reproducción manual: sí reanudar al hacer scroll
        
        videoRef.current.play().catch((err) => {
          console.error("Error al reproducir el video:", err);
        });
      }
    }
  };

  const handlePointerDown = (e) => {
    if (!hasStarted || !isPlaying) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    
    pressStartCoordsRef.current = { x: e.clientX, y: e.clientY };
    isLongPressRef.current = false;
    
    // Si toca a la izquierda o derecha (los bordes de 25%)
    const isEdge = x < rect.width * 0.25 || x > rect.width * 0.75;

    if (isEdge) {
      pressTimerRef.current = setTimeout(() => {
        isLongPressRef.current = true;
        if (videoRef.current) {
          videoRef.current.playbackRate = 2.0;
          setIsFastForwarding(true);
        }
      }, 300); // 300ms de presión para considerarlo long press
    }
  };

  const handlePointerUp = (e) => {
    if (pressTimerRef.current) clearTimeout(pressTimerRef.current);
    
    if (isLongPressRef.current) {
      if (videoRef.current) {
        videoRef.current.playbackRate = playbackRate; // Restaurar a la original
      }
      setIsFastForwarding(false);
      isLongPressRef.current = false;
      return; // Fin del long press, no interpretarlo como click
    }

    // Tolerancia al movimiento para considerarlo click (tap)
    const dx = Math.abs(e.clientX - pressStartCoordsRef.current.x);
    const dy = Math.abs(e.clientY - pressStartCoordsRef.current.y);
    if (dx < 15 && dy < 15) {
      handleVideoClickInternal(e);
    }
  };

  const handlePointerLeave = () => {
    if (pressTimerRef.current) clearTimeout(pressTimerRef.current);
    if (isLongPressRef.current) {
      if (videoRef.current) {
        videoRef.current.playbackRate = playbackRate;
      }
      setIsFastForwarding(false);
      isLongPressRef.current = false;
    }
  };

  const handleVideoClickInternal = (e) => {
    if (!hasStarted) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const isCenter = 
      x > rect.width * 0.25 && x < rect.width * 0.75 &&
      y > rect.height * 0.25 && y < rect.height * 0.75;

    if (isCenter) {
      handlePlayToggle();
    } else {
      setShowControlsMobile((prev) => {
        const newState = !prev;
        if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        if (newState) {
          controlsTimeoutRef.current = setTimeout(() => {
            setShowControlsMobile(false);
          }, 3500);
        }
        return newState;
      });
    }
  };

  const handleMuteToggle = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleSpeed = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    let newRate = 1;
    if (playbackRate === 1) newRate = 1.5;
    else if (playbackRate === 1.5) newRate = 2;
    else newRate = 1;
    
    videoRef.current.playbackRate = newRate;
    setPlaybackRate(newRate);
  };

  const skipForward = (e) => {
    e.stopPropagation();
    if (videoRef.current) videoRef.current.currentTime += 5;
  };

  const skipBackward = (e) => {
    e.stopPropagation();
    if (videoRef.current) videoRef.current.currentTime -= 5;
  };

  const toggleFullscreen = async (e) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      if (playerContainerRef.current) {
        try {
          await playerContainerRef.current.requestFullscreen();
          // Forzar landscape en móviles usando Screen Orientation API
          if (window.screen && window.screen.orientation && window.screen.orientation.lock) {
            await window.screen.orientation.lock('landscape').catch((err) => {
              console.log("La orientación forzada no está soportada en este navegador/dispositivo:", err);
            });
          }
        } catch (err) {
          console.error(`Error al entrar en pantalla completa: ${err.message}`);
        }
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    }
  };

  // Reproducción automática en cadena (Playlist) al terminar un video
  const handleVideoEnded = () => {
    const currentIndex = modulesData.findIndex(module => module.id === activeTab);
    const nextIndex = (currentIndex + 1) % modulesData.length;
    setActiveTab(modulesData[nextIndex].id);
    setVideoProgress(0);
    
    // Esperar un breve momento para cargar el video y darle play manteniéndose desmuteado
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = isMuted; // Mantener estado de audio actual en cadena
        wasPlayingBeforeScrollRef.current = true; // El video en cadena se reproducirá automáticamente
        videoRef.current.play().catch((err) => {
          console.error("Error de autoplay en cadena:", err);
        });
      }
    }, 150);
  };

  return (
    <section id="demo" className="relative py-20 lg:py-24 bg-surface-950 overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/30 to-surface-950 pointer-events-none" />
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" style={{
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
      }} />
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
      }} />

      {/* Dynamic Ambilight Glow Behind Player (GPU Accelerated & Desktop Only) */}
      <div 
        className="absolute top-[20%] left-1/2 w-[60%] h-[40%] rounded-full opacity-10 pointer-events-none transition-all duration-1000 ease-in-out hidden lg:block"
        style={{ 
          backgroundColor: currentModule.glowHex,
          filter: 'blur(90px)',
          transform: 'translate3d(-50%, 0, 0)',
          willChange: 'transform, background-color'
        }}
      />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Vea el Sistema
            <br />
            <span className="text-gradient">Completo en Acción</span>
          </motion.h2>

        </div>

        {/* 1. Cinema Player Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Video Player Box */}
          <div id="demo-player-container" className="lg:col-span-8 flex flex-col justify-center scroll-mt-24">
            <div ref={playerContainerRef} className={`relative rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-surface-800 bg-black group ${isFullscreen ? 'w-full h-full rounded-none border-none aspect-auto' : 'aspect-video'}`}>
              
              <video
                ref={videoRef}
                className="w-full h-full object-contain cursor-pointer select-none"
                style={{ WebkitTouchCallout: 'none' }}
                src={currentModule.videoSrc}
                preload="metadata"
                playsInline
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerLeave}
                onContextMenu={(e) => e.preventDefault()}
                onEnded={handleVideoEnded}
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => { setIsPlaying(true); setHasStarted(true); }}
                onPause={() => setIsPlaying(false)}
              />

              {/* Indicador de 2x Velocidad Mini */}
              <AnimatePresence>
                {isFastForwarding && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-4 right-4 z-40 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1 pointer-events-none"
                  >
                    <span className="text-white text-[11px] font-black tracking-wider">2x</span>
                    <FastForward className="w-3 h-3 text-brand-400 animate-pulse" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Play Overlay Screen */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    onClick={handlePlayToggle}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 flex flex-col justify-center items-center cursor-pointer z-20"
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Anillo pulsante exterior */}
                      <div className="absolute w-28 h-28 rounded-full border-2 border-white/20 animate-ping" style={{ animationDuration: '2.5s' }} />
                      <div className="absolute w-28 h-28 rounded-full border border-white/10" />

                      {/* Glow del color del módulo detrás */}
                      <div className={`absolute w-24 h-24 rounded-full blur-2xl opacity-40 bg-gradient-to-br ${currentModule.color}`} />

                      {/* Botón principal */}
                      <div className="relative w-20 h-20 rounded-full bg-white/[0.12] backdrop-blur-lg border border-white/20 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40 group-hover:shadow-[0_8px_40px_rgba(255,255,255,0.15)]">
                        {/* Triángulo SVG centrado ópticamente */}
                        <svg
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-8 h-8 ml-1 drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]"
                        >
                          <path d="M6.5 4.207v15.586a1 1 0 0 0 1.504.864l13.034-7.793a1 1 0 0 0 0-1.728L8.004 3.343a1 1 0 0 0-1.504.864Z" />
                        </svg>
                      </div>
                    </div>

                    {/* Label inferior */}
                    <motion.span
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="text-white/90 text-[11px] font-semibold tracking-[0.2em] uppercase mt-6 bg-white/[0.08] backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10"
                    >
                      Reproducir Demo
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Full Player Controls */}
              {hasStarted && (
                <div 
                  className={`absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 flex flex-col gap-3 transition-opacity duration-300 ${isPlaying ? (showControlsMobile ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100') : 'opacity-100'}`}
                  onClick={(e) => e.stopPropagation()}
                >
                   {/* Progress Bar */}
                 <input 
                   type="range" 
                   min="0" max="1" step="0.001" 
                   value={videoProgress}
                   onChange={(e) => {
                     e.stopPropagation();
                     if (!videoRef.current) return;
                     const pos = parseFloat(e.target.value);
                     videoRef.current.currentTime = pos * videoRef.current.duration;
                     setVideoProgress(pos);
                   }}
                   onMouseDown={() => {
                     // Pause temporarily while dragging for smoother scrub if desired, but default is fine
                   }}
                   onClick={(e) => e.stopPropagation()}
                   className="w-full h-1.5 bg-surface-800/80 rounded-full appearance-none cursor-pointer accent-brand-500 hover:h-2 transition-all duration-200 focus:outline-none focus:ring-0"
                 />
                   
                   {/* Buttons */}
                   <div className="flex items-center justify-between mt-1">
                     <div className="flex items-center gap-5 text-white/80">
                       <button onClick={handlePlayToggle} className="hover:text-white transition-colors transform hover:scale-110 active:scale-95" title={isPlaying ? "Pausar" : "Reproducir"}>
                          {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                       </button>
                       <button onClick={skipBackward} className="hover:text-white transition-colors transform hover:scale-110 active:scale-95" title="-5 Segundos">
                          <Rewind className="w-5 h-5 fill-current" />
                       </button>
                       <button onClick={skipForward} className="hover:text-white transition-colors transform hover:scale-110 active:scale-95" title="+5 Segundos">
                          <FastForward className="w-5 h-5 fill-current" />
                       </button>
                       <button onClick={(e) => handleMuteToggle(e)} className="hover:text-white transition-colors transform hover:scale-110 active:scale-95" title={isMuted ? "Activar audio" : "Silenciar"}>
                          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                       </button>
                     </div>
                     
                     <div className="flex items-center gap-3">
                       <button 
                         onClick={toggleSpeed} 
                         className="text-[11px] font-black px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 transform hover:scale-105 active:scale-95"
                         title="Velocidad de reproducción"
                       >
                          {playbackRate}x
                       </button>
                       <button onClick={toggleFullscreen} className="hover:text-white transition-colors transform hover:scale-110 active:scale-95 text-white/80" title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}>
                          {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                       </button>
                     </div>
                   </div>
                </div>
              )}
            </div>
          </div>

          {/* Info Card */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 md:p-8 border border-surface-800/80 h-full flex flex-col justify-between relative overflow-hidden"
              >
                <div className={`absolute -top-20 -right-20 w-44 h-44 rounded-full blur-[70px] opacity-10 pointer-events-none ${currentModule.glowColor}`} />

                <div>
                  <div className="flex items-center gap-3">
                    <span className={`p-2.5 rounded-xl bg-surface-900 border border-surface-800 ${currentModule.accentColor}`}>
                      <currentModule.icon className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-surface-500">Módulo del Sistema</span>
                  </div>

                  <h3 className="text-2xl font-black text-white mt-4 tracking-tight leading-none">{currentModule.title}</h3>
                  <p className="text-surface-400 mt-3.5 text-[14px] leading-relaxed font-medium">{currentModule.description}</p>
                  
                  {/* Key points */}
                  <div className="mt-6 space-y-4">
                    {currentModule.keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${currentModule.accentColor}`} />
                        <div>
                          <h5 className={`font-bold text-[14px] leading-tight ${currentModule.accentColor}`}>{point.title}</h5>
                          <p className="text-[12px] text-surface-400 mt-0.5 leading-relaxed">{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-surface-800/80 pt-5 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-surface-500 tracking-widest uppercase">MultiGymCR</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* 2. Grid de Miniaturas de Visibilidad Total (Reemplaza el Carrusel) */}
        <div className="mt-12 lg:mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 px-1 gap-2 border-b border-surface-800/50 pb-4">
            <div>
              <h4 className="text-[14px] font-black text-brand-400 uppercase tracking-widest flex items-center gap-1.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                Selecciona un Módulo para Cargar la Demo en Vivo 🕹️
              </h4>
              <p className="text-xs text-surface-400 font-medium mt-1">
                Todos los apartados están listos para probar. Haz clic en cualquiera de los botones de abajo para cargarlo al instante en el reproductor.
              </p>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3.5 py-1.5 rounded-full self-start sm:self-center">
              7 Módulos Integrados
            </span>
          </div>

          {/* Grid responsivo */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {modulesData.map((module) => (
              <ThumbnailCard
                key={module.id}
                module={module}
                isActive={module.id === activeTab}
                videoProgress={videoProgress}
                onClick={() => handleTabChange(module.id)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Demo;