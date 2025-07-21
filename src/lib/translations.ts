export type Language = "en" | "es";

export interface Translations {
  // Header
  appTitle: string;
  appSubtitle: string;
  
  // Navigation
  backToHome: string;
  
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

  // Child Pages
  elementary: {
    title: string;
    ageRange: string;
    ageAppropriateHonesty: string;
    keyMessages: string;
    keyMessagesList: string[];
    supportingThem: string;
    supportingThemList: string[];
    commonConcerns: string;
    atSchool: string;
    atSchoolText: string;
    feelings: string;
    feelingsText: string;
    futurePlans: string;
    futurePlansText: string;
    theirRole: string;
    theirRoleText: string;
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
  selectLanguage: string;
  
  // Disclaimer
  disclaimerText: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    appTitle: "Together We Talk",
    appSubtitle: "A safe space for families to navigate difficult conversations with love, understanding, and practical guidance.",
    
    backToHome: "Back to Home",
    
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

    elementary: {
      title: "Talking to Elementary Age Children",
      ageRange: "Ages 8-11",
      ageAppropriateHonesty: "Age-Appropriate Honesty",
      keyMessages: "Key Messages:",
      keyMessagesList: [
        "Immigration officers took [family member] because of laws about who can stay in our country.",
        "This doesn't mean they did something bad - it's about paperwork and rules.",
        "We have lawyers and people helping us figure this out.",
        "Your job is to keep being a kid - going to school, playing, learning."
      ],
      supportingThem: "Supporting Them:",
      supportingThemList: [
        "Encourage them to talk to trusted adults like teachers or counselors",
        "Help them understand their feelings are normal and important",
        "Keep school routines consistent when possible",
        "Prepare them for possible questions from friends"
      ],
      commonConcerns: "Common Concerns",
      atSchool: "At School",
      atSchoolText: "If kids ask questions, you can say 'My family is dealing with some grown-up legal stuff' and change the subject.",
      feelings: "Feelings",
      feelingsText: "It's normal to feel scared, angry, or confused. These are big feelings about a big situation.",
      futurePlans: "Future Plans",
      futurePlansText: "We're working with lawyers and have plans to keep our family together and safe.",
      theirRole: "Their Role",
      theirRoleText: "Your most important job is to focus on school and being a kid. Adults will handle the legal stuff."
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
    selectLanguage: "Select Language",
    
    disclaimerText: "🚨 IMPORTANT: This app is for educational purposes only and does not replace legal advice. If you're in immediate danger, call 911. For non-emergency support, contact local legal aid organizations."
  },
  
  es: {
    appTitle: "Juntos Hablamos",
    appSubtitle: "Un espacio seguro para que las familias naveguen conversaciones difíciles con amor, comprensión y guía práctica.",
    
    backToHome: "Volver al Inicio",
    
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

    elementary: {
      title: "Hablando con Niños de Edad Escolar",
      ageRange: "Edades 8-11",
      ageAppropriateHonesty: "Honestidad Apropiada para la Edad",
      keyMessages: "Mensajes Clave:",
      keyMessagesList: [
        "Los oficiales de inmigración se llevaron a [miembro de la familia] debido a las leyes sobre quién puede quedarse en nuestro país.",
        "Esto no significa que hicieron algo malo - se trata de papeles y reglas.",
        "Tenemos abogados y personas que nos ayudan a resolver esto.",
        "Tu trabajo es seguir siendo un niño - ir a la escuela, jugar, aprender."
      ],
      supportingThem: "Apoyándolos:",
      supportingThemList: [
        "Animarlos a hablar con adultos de confianza como maestros o consejeros",
        "Ayudarles a entender que sus sentimientos son normales e importantes",
        "Mantener las rutinas escolares consistentes cuando sea posible",
        "Prepararlos para posibles preguntas de amigos"
      ],
      commonConcerns: "Preocupaciones Comunes",
      atSchool: "En la Escuela",
      atSchoolText: "Si los niños hacen preguntas, puedes decir 'Mi familia está lidiando con algunos asuntos legales de adultos' y cambiar el tema.",
      feelings: "Sentimientos",
      feelingsText: "Es normal sentirse asustado, enojado o confundido. Estos son sentimientos grandes sobre una situación grande.",
      futurePlans: "Planes Futuros",
      futurePlansText: "Estamos trabajando con abogados y tenemos planes para mantener a nuestra familia unida y segura.",
      theirRole: "Su Papel",
      theirRoleText: "Tu trabajo más importante es enfocarte en la escuela y ser un niño. Los adultos se encargarán de los asuntos legales."
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
    selectLanguage: "Seleccionar Idioma",
    
    disclaimerText: "🚨 IMPORTANTE: Esta aplicación es solo para propósitos educativos y no reemplaza el consejo legal. Si estás en peligro inmediato, llama al 911. Para apoyo que no sea de emergencia, contacta organizaciones locales de asistencia legal."
  }
};