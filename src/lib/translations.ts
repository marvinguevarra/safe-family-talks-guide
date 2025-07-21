export type Language = "en" | "es";

export interface Translations {
  // Header
  appTitle: string;
  appSubtitle: string;
  
  // Navigation Cards
  talkingToChildren: {
    title: string;
    description: string;
    littleOnes: string;
    elementaryAge: string;
    teenagers: string;
    ageRanges: {
      littleOnes: string;
      elementary: string;
      teens: string;
    };
  };
  
  talkingToFamily: {
    title: string;
    description: string;
    parentsGrandparents: string;
    brothersSisters: string;
    extendedFamily: string;
  };
  
  someoneDetained: {
    title: string;
    description: string;
    findThem: string;
    getLegalHelp: string;
    knowYourRights: string;
  };
  
  familyPreparedness: {
    title: string;
    description: string;
    makeSafetyPlan: string;
    knowYourRights: string;
    talkToTeachers: string;
    findCommunitySupport: string;
  };
  
  // Additional Resources
  youAreNotAlone: string;
  supportMessage: string;
  printGuide: string;
  shareResources: string;
  
  // Installation
  useOffline: string;
  installMessage: string;
  installApp: string;
  installInstructions: string;
  
  // Language Toggle
  switchLanguageLabel: string;
  
  // Disclaimer
  disclaimerText: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    appTitle: "Together We Talk",
    appSubtitle: "A safe space for families to navigate difficult conversations with love, understanding, and practical guidance.",
    
    talkingToChildren: {
      title: "Talking to Children",
      description: "Age-appropriate ways to discuss difficult family situations",
      littleOnes: "Little Ones",
      elementaryAge: "Elementary Age",
      teenagers: "Teenagers",
      ageRanges: {
        littleOnes: "Ages 4-7",
        elementary: "Ages 8-11",
        teens: "Ages 12+"
      }
    },
    
    talkingToFamily: {
      title: "Talking to Family",
      description: "Having honest conversations with family members",
      parentsGrandparents: "Parents & Grandparents",
      brothersSisters: "Brothers & Sisters",
      extendedFamily: "Extended Family"
    },
    
    someoneDetained: {
      title: "Someone Was Detained",
      description: "Immediate steps when a family member is detained",
      findThem: "Find Them",
      getLegalHelp: "Get Legal Help",
      knowYourRights: "Know Your Rights"
    },
    
    familyPreparedness: {
      title: "Family Preparedness",
      description: "Planning ahead to keep your family safe and informed",
      makeSafetyPlan: "Make a Safety Plan",
      knowYourRights: "Know Your Rights",
      talkToTeachers: "Talk to Teachers",
      findCommunitySupport: "Find Community Support"
    },
    
    youAreNotAlone: "You Are Not Alone",
    supportMessage: "This resource was created with love by families who understand what you're going through. Every conversation matters, every family deserves support, and together we can help each other through difficult times.",
    printGuide: "📄 Print This Guide",
    shareResources: "💝 Share Resources",
    
    useOffline: "📱 Use Offline",
    installMessage: "Install this app on your phone for private, offline access anytime.",
    installApp: "Install App",
    installInstructions: "To install: tap your browser menu and select 'Add to Home Screen'",
    
    switchLanguageLabel: "Switch to Spanish",
    
    disclaimerText: "🚨 IMPORTANT: This app is for educational purposes only and does not replace legal advice. If you're in immediate danger, call 911. For non-emergency support, contact local legal aid organizations."
  },
  
  es: {
    appTitle: "Juntos Hablamos",
    appSubtitle: "Un espacio seguro para que las familias naveguen conversaciones difíciles con amor, comprensión y guía práctica.",
    
    talkingToChildren: {
      title: "Hablando con Niños",
      description: "Maneras apropiadas para la edad de discutir situaciones familiares difíciles",
      littleOnes: "Pequeñitos",
      elementaryAge: "Edad Escolar",
      teenagers: "Adolescentes",
      ageRanges: {
        littleOnes: "Edades 4-7",
        elementary: "Edades 8-11",
        teens: "Edades 12+"
      }
    },
    
    talkingToFamily: {
      title: "Hablando con la Familia",
      description: "Teniendo conversaciones honestas con miembros de la familia",
      parentsGrandparents: "Padres y Abuelos",
      brothersSisters: "Hermanos y Hermanas",
      extendedFamily: "Familia Extendida"
    },
    
    someoneDetained: {
      title: "Alguien Fue Detenido",
      description: "Pasos inmediatos cuando un miembro de la familia es detenido",
      findThem: "Encontrarlos",
      getLegalHelp: "Obtener Ayuda Legal",
      knowYourRights: "Conozca Sus Derechos"
    },
    
    familyPreparedness: {
      title: "Preparación Familiar",
      description: "Planificando con anticipación para mantener a su familia segura e informada",
      makeSafetyPlan: "Hacer un Plan de Seguridad",
      knowYourRights: "Conozca Sus Derechos",
      talkToTeachers: "Hablar con Maestros",
      findCommunitySupport: "Encontrar Apoyo Comunitario"
    },
    
    youAreNotAlone: "No Estás Solo",
    supportMessage: "Este recurso fue creado con amor por familias que entienden por lo que estás pasando. Cada conversación importa, cada familia merece apoyo, y juntos podemos ayudarnos mutuamente en tiempos difíciles.",
    printGuide: "📄 Imprimir Esta Guía",
    shareResources: "💝 Compartir Recursos",
    
    useOffline: "📱 Usar Sin Conexión",
    installMessage: "Instala esta aplicación en tu teléfono para acceso privado y sin conexión en cualquier momento.",
    installApp: "Instalar Aplicación",
    installInstructions: "Para instalar: toca el menú de tu navegador y selecciona 'Agregar a Pantalla de Inicio'",
    
    switchLanguageLabel: "Cambiar a Inglés",
    
    disclaimerText: "🚨 IMPORTANTE: Esta aplicación es solo para propósitos educativos y no reemplaza el consejo legal. Si estás en peligro inmediato, llama al 911. Para apoyo que no sea de emergencia, contacta organizaciones locales de asistencia legal."
  }
};