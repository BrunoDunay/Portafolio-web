// Spanish texts for every project, by id. The English source stays in core/data/*.ts.
// When a project is added there, add its Spanish here too (missing ids simply show in English).
import { DesignProject } from '../interfaces/design-project';
import { DevelopmentProject } from '../interfaces/development-project';
import { Lang } from './lang.service';

type DevText = Partial<Pick<DevelopmentProject, 'title' | 'type' | 'shortDescription' | 'problem' | 'solution'>>;
type DesignText = Partial<Pick<DesignProject, 'title' | 'category' | 'shortDescription' | 'objective' | 'deliverables'>>;

const DEMO = {
  basic: 'Sitio demo · Paquete Básico',
  pro: 'Sitio demo · Paquete Profesional',
  premium: 'Sitio demo · Paquete Premium',
};

const ES: Record<string, DevText & DesignText> = {
  // ---------------------------------------------------------------- desarrollo
  uia: {
    title: 'Sitio de la Universidad Internacional',
    type: 'Sitio en producción',
    shortDescription: 'Sitio institucional con una experiencia moderna y adaptable a cualquier pantalla.',
    problem: 'La universidad necesitaba un sitio moderno, con mejor navegación y acceso más fácil a su información.',
    solution: 'Desarrollé una aplicación en Angular conectada a un backend en Node.js con base de datos PostgreSQL.',
  },
  'fitness-platform': {
    title: 'Plataforma de coaching Fitness by Evidence',
    type: 'Aplicación full stack',
    shortDescription:
      'Plataforma de coaching con sitio público, panel del coach para planes de entrenamiento, nutrición y agenda de sesiones, y un portal privado para cada cliente.',
    problem:
      'Un coach de fitness en línea armaba a mano, en hojas de cálculo, el plan de entrenamiento y de nutrición de cada cliente, y sus clientes no tenían un lugar donde ver su plan o reportar su avance.',
    solution:
      'Construí el sitio con render en servidor, el panel del coach y el portal del cliente en Angular, sobre una API REST en Express y PostgreSQL. Calcula calorías, macros y volumen de entrenamiento, agenda sesiones por videollamada a las que el cliente entra desde su portal y explica cada ejercicio con una figura animada en código. El logo está dibujado en SVG y se arma solo al cargar.',
  },
  'armando-ovalle': {
    type: 'Sitio web full stack',
    shortDescription:
      'Sitio de un fotógrafo de bodas y eventos, en línea con su trabajo real: nueve páginas de servicios con galerías y paquetes, calendario de disponibilidad y un panel de administración que él mismo maneja.',
    problem:
      'Jorge Armando Ovalle cubre bodas, XV años, pedidas de mano y sesiones en estudio en Aguascalientes y en todo México. Necesitaba un sitio que vendiera con sus fotos, respondiera las preguntas de siempre y mostrara qué fechas tiene libres, con contenido que pudiera cambiar sin depender de un programador.',
    solution:
      'Un sitio con render en servidor y panel de administración en Angular, sobre una API REST en Express y PostgreSQL. Desde el panel edita servicios, galerías, paquetes, preguntas frecuentes, páginas legales y el calendario, sube fotos y videos directo a Cloudinary y administra reservas con contratos y correos de confirmación. Los temas de temporada (Día de Muertos, Navidad, Fiestas Patrias y más) cambian el estilo del sitio solos según la fecha.',
  },
  pokedex: {
    type: 'Aplicación frontend',
    shortDescription: 'Pokédex con filtros por tipo, paginación y estadísticas detalladas de cada Pokémon.',
    problem: 'Recorrer más de 1,300 Pokémon de una API pública requiere una navegación rápida y una forma clara de leer los datos de cada uno.',
    solution:
      'Desarrollé una aplicación de una sola página en Angular sobre PokéAPI, con filtros y paginación en la URL, caché de respuestas, tema claro y oscuro y transiciones animadas entre la lista y el detalle.',
  },
  cafecito: {
    title: 'Punto de venta Cafecito Feliz',
    type: 'Aplicación full stack',
    shortDescription: 'Sistema de punto de venta para administrar productos, clientes y ventas del día.',
    problem: 'Los negocios pequeños necesitan una forma sencilla de controlar su inventario y sus ventas.',
    solution: 'Desarrollé una aplicación de punto de venta con inicio de sesión, inventario y registro de ventas.',
  },
  funko: {
    title: 'Tienda en línea Funko',
    type: 'Tienda en línea',
    shortDescription: 'Tienda en línea con inicio de sesión y administración de productos.',
    problem: 'Construir una tienda en línea completa, con los procesos reales de un negocio.',
    solution: 'Creé una aplicación full stack con inicio de sesión, administración de productos y carrito de compras.',
  },

  // ---------------------------------------------------------------- demos
  'demo-brio': {
    title: 'Brío · Gimnasio de barrio',
    type: DEMO.basic,
    shortDescription:
      'Sitio de una sola página para un gimnasio de barrio: áreas, horario semanal de clases, planes, coaches, opiniones y un formulario de reserva por WhatsApp.',
    problem:
      'Un gimnasio local que vive en Instagram necesita una página rápida y clara que responda las preguntas de siempre (horario, precios, clases) y convierta las visitas en mensajes de WhatsApp. Marca ficticia hecha como plantilla del paquete Básico.',
    solution:
      'Una sola página pensada primero para celular, con movimiento ligero: elementos que aparecen al bajar, horario de clases día por día, tarjetas de precios claras y un formulario que escribe el mensaje de WhatsApp por el visitante. Prerenderizada para que cargue rápido y aparezca en Google.',
  },
  'demo-forja': {
    title: 'Forja · Box de entrenamiento funcional',
    type: DEMO.pro,
    shortDescription:
      'Sitio con diseño propio para un box estilo CrossFit, con logo animado, historia que se cuenta al bajar, cronómetro de entrenamiento y un glosario de ejercicios con figuras animadas.',
    problem:
      'Un box con una comunidad fuerte necesita un sitio con carácter: que se sienta como el box y explique disciplinas, horarios y membresías a quien nunca ha probado el entrenamiento funcional. Marca ficticia hecha como plantilla del paquete Profesional.',
    solution:
      'Un diseño industrial y contundente con animaciones al bajar (GSAP), intro con logo animado, selector de disciplinas, horario semanal con el entrenamiento del día y un cronómetro que funciona, glosario de ejercicios dibujado y animado en código, carruseles de coaches y testimonios, páginas legales y formulario de reserva por WhatsApp.',
  },
  'demo-umbral': {
    title: 'Umbral · Club boutique de fitness',
    type: DEMO.premium,
    shortDescription:
      'Sitio de varias páginas para un club boutique premium: intro cinematográfica, un día en el club del amanecer a la noche, recorrido por los espacios al bajar, tarjetas de membresía en 3D y una línea de mercancía.',
    problem:
      'Un club de alto nivel vende una experiencia, no una membresía de gimnasio. Su sitio debe sentirse tan tranquilo y exclusivo como el lugar y guiar al visitante por disciplinas, espacios y planes antes de que lo visite. Marca ficticia hecha como plantilla del paquete Premium.',
    solution:
      'Cinco páginas con movimiento avanzado: intro en forma de arco, una línea del día en el club cuyo cielo y luces cambian según la hora, recorrido fijo por los espacios al bajar, tarjeta de socio que gira en 3D, comparador de planes, galería con visor, preguntas frecuentes, sección de mercancía y formulario de WhatsApp con vista previa del mensaje. SEO completo y páginas prerenderizadas.',
  },
  'demo-nido': {
    title: 'Nido · Fotografía newborn y familiar',
    type: DEMO.pro,
    shortDescription:
      'Sitio para una fotógrafa de recién nacidos y familias, armado como un álbum: intro de cuarto oscuro, páginas que dan vuelta al bajar, capítulos por sesión, una hoja de contactos con lupa y un formulario de reserva para completar.',
    problem:
      'Una fotógrafa vende confianza y emociones, no una lista de precios. Los papás necesitan ver su trabajo, entender cómo es una sesión con un recién nacido y apartar la fecha correcta (de 5 a 15 días después del nacimiento) sin tantas vueltas. Marca ficticia hecha como plantilla del paquete Profesional.',
    solution:
      'Un álbum editorial con GSAP y Lenis: intro de cuarto oscuro donde la primera foto se revela de negativo a positivo, portada cuya foto da vuelta como página de álbum, cuatro capítulos con diseño de revista, hoja de contactos con lupa de 2.4× y gestos de deslizar, el día de la sesión cosido con hilo rojo, tarifas impresas y una frase de reserva que se convierte en mensaje de WhatsApp.',
  },
  'demo-astor': {
    title: 'Astor · Fotografía de bodas y eventos',
    type: DEMO.premium,
    shortDescription:
      'Sitio Premium para un fotógrafo de bodas y eventos: una mesa de fotos impresas que puedes aventar, una galería 3D que se recorre como exposición, una cámara colgante con física real y una tarjeta de presentación en 3D.',
    problem:
      'Un fotógrafo de bodas compite con emociones, y las parejas comparan decenas de portafolios que se ven iguales. El sitio debe ser memorable desde el primer segundo, mostrar cientos de fotos sin cansar y convertir el interés en una consulta de fecha. Marca ficticia hecha como plantilla del paquete Premium.',
    solution:
      'Piezas interactivas hechas en código: en el inicio, una mesa de copias de cuarto oscuro que arrastras, avientas y acercas en 3D; una galería en Three.js con cinco salas de pantallas LED, siluetas y transiciones con shaders que avanza al bajar, seguida de un archivo de fotos con filtros; un rollo de película con clips de eventos en blanco y negro o a color; una cámara réflex hiperrealista colgando de su correa con física Verlet; una tarjeta de presentación en 3D con cuatro colores; un calendario para apartar la fecha, opiniones estilo Instagram y formulario de WhatsApp.',
  },
  'demo-alero': {
    title: 'Alero · Inmobiliaria',
    type: DEMO.basic,
    shortDescription:
      'Sitio inmobiliario con buscador de propiedades, fichas con galería de fotos, calculadora de hipoteca, el proceso de compra y asesores que responden por WhatsApp.',
    problem:
      'Una inmobiliaria pequeña necesita más que un folleto: los compradores quieren filtrar casas, ver todas las fotos y saber qué les alcanza antes de llamar. Marca ficticia hecha como plantilla del paquete Básico.',
    solution:
      'Una página limpia pensada primero para celular, con buscador que funciona por operación, tipo y zona, tarjetas de propiedad que muestran una segunda foto al pasar el cursor, fichas que en celular se abren como hoja inferior (deslizar hacia abajo para cerrar y de lado para cambiar de foto), calculadora de hipoteca con la mensualidad en vivo y favoritos. Movimiento con CSS e IntersectionObserver, prerenderizada para Google.',
  },
  'demo-tilde': {
    title: 'Tilde · Cafetería de barrio',
    type: DEMO.basic,
    shortDescription:
      'Sitio de cafetería con una herramienta para armar tu taza, el menú completo en pizarrón, una línea en vivo de "lo que acaba de salir del horno" y pedidos para llevar por WhatsApp.',
    problem:
      'Una cafetería de barrio recibe pedidos por mensajes de Instagram y llamadas. Necesita una página con personalidad donde la gente vea el menú, sepa qué está recién hecho y mande un pedido para llevar claro. Marca ficticia hecha como plantilla del paquete Básico.',
    solution:
      'Una página estilo fachada: un toldo que se enrolla al bajar, un letrero de abierto o cerrado que cambia con la hora real, un armador de tazas que le pone nombre y precio a la bebida, menú en pizarrón, una línea de panadería que se compara con la hora del visitante y una bolsa lateral (se cierra deslizando) que escribe el pedido de WhatsApp. Movimiento con CSS e IntersectionObserver.',
  },
  'demo-marfil': {
    title: 'Marfil · Clínica dental',
    type: DEMO.pro,
    shortDescription:
      'Sitio de clínica dental con un diente 3D en tiempo real al centro de un arco de tratamientos, íconos 3D de esmalte, simulador de brillo para blanqueamiento, reseñas en un mazo de tarjetas y calendario de citas del mes completo.',
    problem:
      'Las clínicas dentales compiten por confianza: los pacientes quieren saber en qué consiste un tratamiento y cuánto cuesta antes de sentarse en el sillón. La mayoría de las clínicas locales no tienen sitio o usan una plantilla igual a la de las demás. Marca ficticia hecha como plantilla del giro de salud, paquete Profesional.',
    solution:
      'Un diseño en azul clínico con tarjetas de vidrio. Un diente modelado en código con Three.js está al centro de un arco de tratamientos, cada uno con su ficha de vidrio y un mapa dental desplegable; las tarjetas de confianza llevan íconos 3D extruidos en esmalte. Un control de brillo aclara solo los dientes de una foto (máscara generada a partir de la imagen), los pasos de la primera visita van en flechas, las reseñas son un mazo de tarjetas que se pasan con un toque y un calendario del mes completo escribe el mensaje de WhatsApp. Al hacer clic en cualquier parte caen unos dientitos. Microinteracciones adaptadas de transitions.dev y transiciones entre páginas con la API View Transitions.',
  },
  'demo-claro': {
    title: 'Claro · Consultorio de psicología',
    type: DEMO.pro,
    shortDescription:
      'Sitio en collage editorial para una psicóloga: un garabato de ansiedad que se desenreda en espiral, ilustraciones a mano, un ejercicio de respiración guiada y una agenda en hoja de cuaderno.',
    problem:
      'Quien busca terapia llega con ansiedad y sin saber por dónde empezar; una página fría y clínica lo empeora. Una psicóloga necesita un sitio que se sienta humano, explique cómo son las sesiones y facilite mandar el primer mensaje. Marca ficticia hecha como plantilla del giro de salud, paquete Profesional.',
    solution:
      'Un collage de papel: fotos en tonos azules con orillas rasgadas y cinta, letras condensadas enormes y notas a mano. La intro dibuja una línea enredada que se transforma en una espiral tranquila (GSAP MorphSVG), y la misma maraña sobre la foto de portada se desenreda al bajar. El visitante elige lo que siente y ve una hoja de cuaderno que explica cómo se trabaja, sigue una espiral de respiración de un minuto, voltea notas de mitos y agenda en un calendario mensual de cuaderno con vista previa del mensaje de WhatsApp. Un lápiz sigue al cursor y permite rayar la página (los trazos se borran en un segundo), los enlaces se encierran a mano al pasar el cursor y la tarjeta de presentación se voltea para escribir tu próxima cita. Incluye la línea nacional de crisis. Los dibujos se generan en código con una semilla fija.',
  },

  // ---------------------------------------------------------------- diseño
  fitness: {
    category: 'Identidad de marca',
    shortDescription: 'Identidad de marca moderna para una empresa de fitness.',
    objective: 'Crear una marca de fitness reconocible.',
    deliverables: ['Diseño de logo', 'Paleta de colores'],
  },
  dalia: {
    category: 'Identidad de marca',
    shortDescription: 'Identidad visual completa para una marca personal.',
    objective: 'Diseñar una marca personal coherente.',
    deliverables: ['Logo', 'Íconos', 'Tipografía', 'Colores de marca'],
  },
  banished: {
    category: 'Branding para esports',
    shortDescription: 'Identidad visual para un equipo de esports.',
    objective: 'Construir una marca de esports con presencia.',
    deliverables: ['Logo', 'Mockups de jersey', 'Colores de marca'],
  },
  reyes: {
    title: 'Transportes Reyes',
    category: 'Diseño publicitario',
    shortDescription: 'Piezas publicitarias para medios impresos y digitales.',
    objective: 'Promocionar servicios de transporte.',
    deliverables: ['Volantes', 'Historias', 'Insignias'],
  },
  'uia-brand': {
    category: 'Diseño publicitario',
    shortDescription: 'Gráficos institucionales para comunicación digital.',
    objective: 'Mantener una identidad visual consistente.',
    deliverables: ['Redes sociales', 'Presentaciones', 'Variaciones de logo'],
  },
};

/** The project with its texts in the chosen language (English is the source, so it comes back untouched). */
export function localize<T extends { id: string }>(project: T, lang: Lang): T {
  if (lang === 'en') return project;
  const text = ES[project.id];
  return text ? ({ ...project, ...text } as T) : project;
}
