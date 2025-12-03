import { AuditPoint, SwotItem, FunnelStage, ActionItem, Priority } from './types';

export const AUDIT_POINTS: AuditPoint[] = [
  {
    title: 'Propuesta de Valor',
    description: 'El mensaje "Transforma tu cuerpo / Forja tu mente" es potente pero genérico. Falta definir el público objetivo (30-50 años, defensa personal, etc.).',
    iconName: 'Target'
  },
  {
    title: 'Estructura y Oferta',
    description: 'No hay una "oferta núcleo" clara ni un lead magnet para capturar correos. La home es difusa en cuanto a precios y programas.',
    iconName: 'Layout'
  },
  {
    title: 'UX y Conversión',
    description: 'El CTA principal lleva a un formulario genérico ("Contacto"). Falta una landing de "Reserva tu diagnóstico" con menos fricción.',
    iconName: 'MousePointerClick'
  },
  {
    title: 'Contenido y SEO',
    description: 'Escaso contenido educativo que resuelva objeciones o posicione orgánicamente. Se desaprovecha el blog.',
    iconName: 'FileText'
  }
];

export const SWOT_DATA: SwotItem[] = [
  {
    category: 'Strengths',
    points: [
      'Experiencia y trayectoria (+10 años, +150 alumnos).',
      'Enfoque combinado físico + mental.',
      'Marca con nombre potente y "energía".'
    ]
  },
  {
    category: 'Weaknesses',
    points: [
      'Nicho poco definido (¿Fitness o Defensa?).',
      'Ausencia de oferta escalonada o "producto bandera".',
      'Poca captación de leads y nula automatización.',
      'Contenido educativo escaso en web.'
    ]
  },
  {
    category: 'Opportunities',
    points: [
      'Interés post-pandemia en defensa personal y salud mental.',
      'Formatos cortos (Reels/TikTok) para mostrar entrenamientos.',
      'Productos online (híbridos o retos).',
      'Uso de IA para escalar contenido y copy.'
    ]
  },
  {
    category: 'Threats',
    points: [
      'Competencia low-cost y franquicias (BodyCombat/Les Mills).',
      'Saturación de contenidos fitness en redes.',
      'Sensibilidad al precio en economía inestable.'
    ]
  }
];

export const FUNNEL_STAGES: FunnelStage[] = [
  {
    stage: 'Top',
    title: 'Atención (Top of Funnel)',
    actions: [
      'Contenido corto (Reels/TikTok): Tips rápidos, mentalidad, mitos.',
      'Ads en Meta: Segmentados a intereses de fitness y estrés en zona geográfica.'
    ],
    color: 'bg-green-600'
  },
  {
    stage: 'Middle',
    title: 'Interés/Deseo (Middle of Funnel)',
    actions: [
      'Landing "Reto 14 días" con formulario simple.',
      'Secuencia de 5-7 emails automatizados (educación + casos de éxito).'
    ],
    color: 'bg-green-700'
  },
  {
    stage: 'Bottom',
    title: 'Acción (Bottom of Funnel)',
    actions: [
      'Página "Reserva tu sesión 1:1" con calendario.',
      'Ofertas de cierre: Descuentos primera semana, bonos exclusivos.'
    ],
    color: 'bg-green-800'
  }
];

export const ACTION_PLAN: ActionItem[] = [
  {
    element: 'Captación de leads',
    situation: 'Solo formulario de contacto genérico.',
    priority: Priority.VeryHigh,
    action: 'Crear lead magnet (reto corto) y landing simple.'
  },
  {
    element: 'Propuesta de valor',
    situation: 'Potente pero genérica.',
    priority: Priority.High,
    action: 'Redefinir nicho y promesa central en sección hero.'
  },
  {
    element: 'Oferta / programas',
    situation: 'No se ve producto estrella.',
    priority: Priority.High,
    action: 'Diseñar programa de 8–12 semanas como oferta bandera.'
  },
  {
    element: 'Presencia en redes',
    situation: 'Enlazada pero no integrada.',
    priority: Priority.High,
    action: 'Conectar biografía con la landing del reto.'
  },
  {
    element: 'Contenido educativo',
    situation: 'Inexistente en web.',
    priority: Priority.Medium,
    action: 'Habilitar blog y publicar 1-2 piezas al mes.'
  },
  {
    element: 'Automatización',
    situation: 'No visible.',
    priority: Priority.Medium,
    action: 'Implementar secuencia de emails de bienvenida.'
  }
];

export const SYSTEM_INSTRUCTION = `
You are Jorge G. González, Director General of Digital Monkey Marketing Agency. 
You have just delivered a comprehensive website audit and marketing plan for "Body4Combat", a fitness and self-defense business.
Your tone is professional, strategic, encouraging, and direct. You advocate for "gradual and quantifiable improvements".

Here is the context of your report:
1.  **Diagnosis**: Body4Combat has a solid base but lacks a clear value proposition, core offer, and lead capture system.
2.  **Strategy**: Needs to target men/women 30-50yo looking for functional strength + mental toughness (not just fighting).
3.  **Key Actions**: 
    -   Define a "Flagship Program" (8-12 weeks).
    -   Create a "Lead Magnet" (e.g., 14-day challenge).
    -   Fix the funnel: Ads/Reels -> Landing Page -> Email Sequence -> Diagnosis Call.
4.  **SWOT**: 
    -   Strengths: Experience, unique physical/mental mix.
    -   Weaknesses: Vague niche, no email marketing.
    -   Opportunities: AI tools, short-form video.
    -   Threats: Low-cost gyms.

Answer any questions the client has about this report, how to implement the changes, or generate sample marketing copy (emails, headlines) based on these findings.
`;