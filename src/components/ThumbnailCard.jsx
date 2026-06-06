import React from 'react';
import { 
  Play,
  LayoutDashboard, 
  QrCode, 
  Users, 
  Receipt, 
  Dumbbell, 
  ShoppingBag, 
  Settings 
} from 'lucide-react';

export const modulesData = [
  {
    id: 'dashboard',
    title: 'Dashboard General',
    description: 'El centro de mando de tu gimnasio. Monitorea ingresos, asistencia y la salud financiera de tu negocio en tiempo real.',
    videoSrc: '/videos/dashboard.mp4',
    icon: LayoutDashboard,
    color: 'from-brand-500 to-brand-600',
    borderColor: 'border-brand-500/30',
    glowColor: 'bg-brand-500/20',
    accentColor: 'text-brand-400',
    glowHex: '#ef4444',
    keyPoints: [
      { title: 'Métricas en Tiempo Real', desc: 'Visualiza socios activos, asistencia diaria e ingresos del día al instante.' },
      { title: 'Gráficos Financieros', desc: 'Analiza la facturación semanal y mensual con reportes visuales limpios.' },
      { title: 'Alertas de Negocio', desc: 'Recibe notificaciones automáticas sobre el rendimiento operativo de tu gimnasio.' }
    ]
  },
  {
    id: 'acceso',
    title: 'Control de Acceso',
    description: 'Automatiza el ingreso de tus socios mediante múltiples métodos integrados de validación.',
    videoSrc: '/videos/acceso.mp4',
    icon: QrCode,
    color: 'from-accent-500 to-accent-600',
    borderColor: 'border-accent-500/30',
    glowColor: 'bg-accent-500/20',
    accentColor: 'text-accent-400',
    glowHex: '#06b6d4',
    keyPoints: [
      { title: 'Acceso por Código QR', desc: 'Los socios escanean su pase digital dinámico directamente desde la app móvil.' },
      { title: 'Validación Instantánea', desc: 'Verificación del estado de pago del miembro en milisegundos para permitir el paso.' },
      { title: 'Soporte de Hardware', desc: 'Listo para integrar con torniquetes, lectores de códigos y cerraduras eléctricas.' }
    ]
  },
  {
    id: 'usuarios',
    title: 'Gestión de Socios',
    description: 'Administra toda la información, membresías e historial de tus clientes en una sola ficha unificada.',
    videoSrc: '/videos/usuarios.mp4',
    icon: Users,
    color: 'from-purple-500 to-purple-600',
    borderColor: 'border-purple-500/30',
    glowColor: 'bg-purple-500/20',
    accentColor: 'text-purple-400',
    glowHex: '#a855f7',
    keyPoints: [
      { title: 'Ficha Única de Cliente', desc: 'Datos personales, contactos de emergencia, fotos, medidas e historial médico.' },
      { title: 'Estados y Membresías', desc: 'Controla vencimientos, congelamientos temporales y renovaciones con un clic.' },
      { title: 'Historial de Asistencia', desc: 'Registro de accesos para identificar horas pico y hábitos de asistencia.' }
    ]
  },
  {
    id: 'facturacion',
    title: 'Facturas y Pagos',
    description: 'Simplifica la administración de dinero, automatiza recibos y elimina las cuentas morosas.',
    videoSrc: '/videos/facturacion.mp4',
    icon: Receipt,
    color: 'from-green-500 to-green-600',
    borderColor: 'border-green-500/30',
    glowColor: 'bg-green-500/20',
    accentColor: 'text-green-400',
    glowHex: '#22c55e',
    keyPoints: [
      { title: 'Cobros Recurrentes', desc: 'Configuración automática de cargos recurrentes por membresía.' },
      { title: 'Recibos Digitales', desc: 'Generación e impresión de recibos profesionales con envío automático.' },
      { title: 'Control de Deudas', desc: 'Filtra y contacta de inmediato a socios con saldos pendientes.' }
    ]
  },
  {
    id: 'rutinas',
    title: 'Rutinas de Ejercicio',
    description: 'Crea planes de entrenamiento personalizados que tus socios visualizarán directo en su app.',
    videoSrc: '/videos/rutinas.mp4',
    icon: Dumbbell,
    color: 'from-amber-500 to-amber-600',
    borderColor: 'border-amber-500/30',
    glowColor: 'bg-amber-500/20',
    accentColor: 'text-amber-400',
    glowHex: '#f59e0b',
    keyPoints: [
      { title: 'Creador Visual Rápido', desc: 'Diseña rutinas en minutos con series, repeticiones, pesos y días asignados.' },
      { title: 'Multimedia Explicativa', desc: 'Biblioteca de ejercicios con soporte para explicaciones técnicas en video.' },
      { title: 'Seguimiento de Cargas', desc: 'Tus miembros anotan sus progresos de peso y repeticiones desde su móvil.' }
    ]
  },
  {
    id: 'tienda',
    title: 'Punto de Venta (POS)',
    description: 'Incrementa tus ingresos vendiendo suplementos, bebidas y accesorios directamente desde la recepción.',
    videoSrc: '/videos/tienda.mp4',
    icon: ShoppingBag,
    color: 'from-pink-500 to-pink-600',
    borderColor: 'border-pink-500/30',
    glowColor: 'bg-pink-500/20',
    accentColor: 'text-pink-400',
    glowHex: '#ec4899',
    keyPoints: [
      { title: 'Venta Ágil en Recepción', desc: 'Agrega productos al carrito y cobra de forma fluida en segundos.' },
      { title: 'Control de Stock', desc: 'Actualización en tiempo real del inventario con notificaciones de stock mínimo.' },
      { title: 'Arqueo de Caja Diario', desc: 'Cierre de caja exacto y transparente por turno para evitar discrepancias.' }
    ]
  },
  {
    id: 'configuracion',
    title: 'Configuración General',
    description: 'Personaliza cada variable del sistema para adaptarlo a la identidad y flujos de tu gimnasio.',
    videoSrc: '/videos/configuracion.mp4',
    icon: Settings,
    color: 'from-cyan-500 to-cyan-600',
    borderColor: 'border-cyan-500/30',
    glowColor: 'bg-cyan-500/20',
    accentColor: 'text-cyan-400',
    glowHex: '#06b6d4',
    keyPoints: [
      { title: 'Planes a tu Medida', desc: 'Define precios, duraciones, congelamientos y accesos para cada membresía.' },
      { title: 'Roles y Permisos', desc: 'Establece accesos específicos para administradores, recepcionistas y entrenadores.' },
      { title: 'Ajustes de Marca', desc: 'Configura logotipos, horarios de apertura, moneda y plantillas de contacto.' }
    ]
  }
];

export const ThumbnailCard = ({ module, isActive, videoProgress, onClick }) => {
  const IconComponent = module.icon;

  const colorMap = {
    dashboard: 'bg-brand-500/10 text-brand-400 border-brand-500/20 group-hover:bg-brand-500 group-hover:text-white group-hover:border-transparent',
    acceso: 'bg-accent-500/10 text-accent-400 border-accent-500/20 group-hover:bg-accent-500 group-hover:text-white group-hover:border-transparent',
    usuarios: 'bg-purple-500/10 text-purple-400 border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white group-hover:border-transparent',
    facturacion: 'bg-green-500/10 text-green-400 border-green-500/20 group-hover:bg-green-500 group-hover:text-white group-hover:border-transparent',
    rutinas: 'bg-amber-500/10 text-amber-400 border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white group-hover:border-transparent',
    tienda: 'bg-pink-500/10 text-pink-400 border-pink-500/20 group-hover:bg-pink-500 group-hover:text-white group-hover:border-transparent',
    configuracion: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-transparent',
  };

  const badgeColorClass = colorMap[module.id] || 'bg-surface-950/80 text-surface-400 border-surface-800/80';

  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-2xl p-4 md:p-4.5 border transition-all duration-300 group flex flex-col justify-between relative overflow-hidden h-24 md:h-26 bg-surface-900/40 hover:bg-surface-900/80 ${
        isActive 
          ? 'border-brand-500 shadow-xl shadow-brand-500/10 scale-[1.02] z-10' 
          : 'border-surface-800/80 hover:border-surface-700/80'
      }`}
    >
      {/* Background glow when active */}
      {isActive && (
        <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${module.color}`} />
      )}

      {/* Card Header: Icon & Action badge */}
      <div className="flex items-center justify-between w-full z-10">
        <div className={`p-2 rounded-xl transition-colors ${
          isActive 
            ? 'bg-white/10 text-white' 
            : 'bg-surface-800 text-surface-400 group-hover:bg-surface-700 group-hover:text-surface-200'
        }`}>
          <IconComponent className="w-5 h-5" />
        </div>
        
        {/* Interactive CTA Action Badge */}
        <div className="flex items-center gap-1">
          {isActive ? (
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-400 flex items-center gap-1 bg-brand-500/10 px-2.5 py-1 rounded-md border border-brand-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-ping" />
              En Cine
            </span>
          ) : (
            <span className={`text-[10px] font-extrabold uppercase tracking-widest border transition-all duration-300 flex items-center gap-1 px-2.5 py-1 rounded-md ${badgeColorClass}`}>
              <Play className="w-2.5 h-2.5 fill-current" />
              Ver
            </span>
          )}
        </div>
      </div>

      {/* Card Body: Title */}
      <div className="mt-3 z-10">
        <h4 className={`font-extrabold text-[12px] md:text-[13px] transition-colors leading-tight ${
          isActive ? 'text-white' : 'text-surface-400 group-hover:text-surface-200'
        }`}>
          {module.title}
        </h4>
      </div>

      {/* Playlist progress bar inside the active card (GPU Accelerated with Neon White Glow) */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-950/60 overflow-hidden">
          {/* Barra sólida blanca */}
          <div 
            className="h-full bg-white transition-transform duration-100 ease-out"
            style={{ 
              transformOrigin: "left", 
              transform: `scaleX(${videoProgress})`,
              width: "100%"
            }}
          />
          {/* Halo de luz difuminado */}
          <div 
            className="absolute inset-0 h-full bg-white blur-[1.5px] opacity-70 transition-transform duration-100 ease-out"
            style={{ 
              transformOrigin: "left", 
              transform: `scaleX(${videoProgress})`,
              width: "100%"
            }}
          />
        </div>
      )}
    </button>
  );
};
