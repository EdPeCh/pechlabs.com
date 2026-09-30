/* PECH Labs — EN/ES toggle.
 * English lives in index.html (works without JS and is what crawlers index).
 * Spanish lives here, keyed by data-i18n / data-i18n-attr. Strings are static and trusted.
 * Choice order: ?lang=xx → saved choice → browser language → English.
 */
(function () {
  'use strict';

  var ES = {
    'meta.title': 'PECH Labs — Agencia AI-first para pequeñas empresas del Bay Area',
    'meta.desc': 'PECH Labs es una agencia digital AI-first para pequeñas y medianas empresas del Bay Area — consultorios médicos y dentales, contratistas de servicios y escuelas privadas. Trabajadores de IA que operan tus procesos rutinarios por una tarifa mensual fija.',

    'skip': 'Saltar al contenido',
    'nav.label': 'Principal',
    'nav.verticals': 'A quién servimos',
    'nav.pricing': 'Planes',
    'nav.contact': 'Contacto',
    'nav.cta': 'Agendar llamada',
    'lang.label': 'Idioma',

    'hero.kick': 'Agencia AI-first · PyMEs del Bay Area',
    'hero.h1': 'Recupera tu tiempo. Haz crecer tu negocio mientras tu sistema se vuelve más <span class="o">inteligente</span>.',
    'hero.sub': 'PECH Labs es una agencia digital AI-first para pequeñas y medianas empresas del Área de la Bahía de San Francisco. Desplegamos trabajadores de IA — AIgents — que operan tus procesos rutinarios 24/7 por una tarifa mensual fija. Sin contratar personal. Sin proyectos de software de seis meses. Recibes un resumen diario y recuperas tus tardes.',
    'hero.cta1': 'Agenda tu diagnóstico operativo gratis →',
    'hero.cta2': 'Ve para quién trabajamos',
    'hero.briefnote': 'Ejemplo ilustrativo de un resumen diario — no son datos reales de clientes.',

    'how.kick': 'Cómo funciona',
    'how.h2': 'No es otra app que aprender. Es un trabajador que llega listo.',
    'how.sub': 'Nosotros configuramos, supervisamos y mejoramos cada AIgent — nunca tendrás que tocar un panel que no pediste.',
    'how.1.h': 'Encontramos la fuga',
    'how.1.p': 'Un diagnóstico operativo gratuito de 15 minutos. Identificamos qué proceso rutinario te está costando más en silencio — prospectos, seguimiento, administración, soporte o visibilidad.',
    'how.2.h': 'Desplegamos el AIgent',
    'how.2.p': 'Tu trabajador de IA entra en operación sobre las herramientas que ya usas. Lo configuramos nosotros, ajustado a tu tono y tus reglas, y lo supervisamos en producción.',
    'how.3.h': 'Recibes el resumen',
    'how.3.p': 'Un resumen diario en lenguaje claro: qué resolvió tu AIgent, qué necesita tu atención y cómo se movieron los números. Tú decides; él opera.',

    'verts.kick': 'Para quién trabajamos',
    'verts.h2': 'Tres tipos de negocio del Bay Area. Un mismo problema: demasiada rutina y pocas horas.',
    'verts.sub': 'Nos enfocamos en tres verticales para que cada AIgent parta de cómo opera realmente tu tipo de negocio — no de una plantilla genérica.',
    'verts.1.tag': 'Salud',
    'verts.1.h': 'Consultorios médicos y dentales',
    'verts.1.p': 'Tu recepción hace malabares entre llamadas, recordatorios y preguntas de seguros mientras los pacientes esperan. Los AIgents les quitan la capa repetitiva.',
    'verts.1.l1': 'Consultas de pacientes nuevos respondidas y canalizadas en segundos',
    'verts.1.l2': 'Recordatorios, confirmaciones de citas y seguimiento de revisiones',
    'verts.1.l3': 'Preguntas frecuentes de recepción atendidas a toda hora',
    'verts.1.note': 'Privacidad del paciente: <span class="todo">[TODO: Ed] confirmar postura HIPAA / BAA antes de publicar cualquier afirmación aquí</span>',
    'verts.2.tag': 'Servicios en campo',
    'verts.2.h': 'Contratistas de servicios',
    'verts.2.p': 'Mientras estás en una obra, el siguiente trabajo está sonando sin respuesta. Los AIgents se aseguran de que cada prospecto reciba una respuesta rápida y profesional.',
    'verts.2.l1': 'Respuesta inmediata a prospectos por web, teléfono y texto — a cualquier hora',
    'verts.2.l2': 'Seguimiento de cotizaciones que no se detiene tras el primer intento',
    'verts.2.l3': 'Agenda y detalles de cada trabajo sincronizados entre tus herramientas',
    'verts.3.tag': 'Educación',
    'verts.3.h': 'Escuelas privadas',
    'verts.3.p': 'Admisiones y comunicación con padres viven de picos de temporada. Los AIgents mantienen informada a cada familia sin saturar a tu equipo.',
    'verts.3.l1': 'Solicitudes de admisión respondidas y visitas agendadas',
    'verts.3.l2': 'Secuencias de seguimiento para solicitud e inscripción',
    'verts.3.l3': 'Preguntas rutinarias de padres respondidas en inglés y español',
    'verts.3.note': 'Datos de estudiantes: <span class="todo">[TODO: Ed] confirmar política FERPA / datos de estudiantes antes de publicar cualquier afirmación aquí</span>',

    'agents.kick': 'Los AIgents',
    'agents.h2': 'Cinco procesos que en silencio frenan a los negocios en crecimiento. Cinco trabajadores de IA que los resuelven.',
    'agents.1.h': 'AIgent de Respuesta a Prospectos',
    'agents.1.pain': 'El prospecto que ya pagaste — enfriándose.',
    'agents.1.p': 'Responde a cada prospecto entrante en segundos, a cualquier hora, lo califica con unas cuantas preguntas inteligentes y agenda la reunión o te avisa de los más calientes.',
    'agents.2.h': 'AIgent de Seguimiento',
    'agents.2.pain': 'El seguimiento que se detiene tras un intento.',
    'agents.2.p': 'Mantiene una cadencia persistente y cordial de varios contactos por correo y texto, se detiene en cuanto alguien responde o agenda, y te pasa las respuestas interesadas.',
    'agents.3.h': 'AIgent de Operaciones',
    'agents.3.pain': 'El impuesto de la silla giratoria — administración de copiar y pegar.',
    'agents.3.p': 'Mueve y concilia datos entre tus sistemas automáticamente, para que nadie en tu nómina sea un puente humano de copiar y pegar.',
    'agents.4.h': 'AIgent de Soporte',
    'agents.4.pain': 'La bandeja de entrada que te controla.',
    'agents.4.p': 'Responde al instante las preguntas repetitivas, 24/7, con tu tono, y escala los casos realmente complicados a una persona con todo el contexto.',
    'agents.5.h': 'AIgent de Información',
    'agents.5.pain': 'Volar a ciegas.',
    'agents.5.p': 'Toma datos de las herramientas que ya usas y te da una foto en lenguaje claro cuando la pidas — qué sube, qué baja y qué necesita atención.',

    'start.kick': 'Empieza aquí',
    'start.h2': 'Tres pasos de entrada. Cada uno se gana el siguiente.',
    'start.sub': 'Empieza gratis, ve exactamente dónde tiene fugas tu negocio y luego pon un AIgent sobre la peor.',
    'start.1.stage': 'Paso 1 · Diagnostica',
    'start.1.per': 'descarga gratuita',
    'start.1.h': 'La Guía Gratuita',
    'start.1.p': '"5 Operations Quietly Killing Your Business Right Now" (en inglés) — úsala como lista de verificación.',
    'start.1.cta': 'Descargar',
    'start.2.stage': 'Paso 2 · Planea',
    'start.2.per': 'pago único',
    'start.2.h': 'El AIgent Playbook',
    'start.2.p': 'Qué AIgent desplegar primero — el mismo marco que usamos con clientes de pago.',
    'start.2.cta': 'Obtén el Playbook — $67',
    'start.2.note': 'pago seguro con Stripe · garantía de reembolso de 30 días',
    'start.3.stage': 'Paso 3 · Despliega',
    'start.3.per': 'al mes · Foundation',
    'start.3.h': 'Tu primer AIgent',
    'start.3.p': 'Un trabajador de IA operando sobre tu peor fuga — configurado, supervisado y mejorado por nosotros, con un resumen diario para ti.',
    'start.3.cta': 'Ver Foundation ↓',

    'pricing.kick': 'Planes',
    'pricing.h2': 'Tarifa mensual fija. Sin nómina. Sin facturas sorpresa.',
    'pricing.sub': 'Todo empieza con un diagnóstico gratuito, así que solo pagas por un AIgent dirigido a una fuga que ya encontramos.',
    'pricing.per': 'USD al mes',
    'pricing.cta': 'Empieza con un diagnóstico',
    'pricing.1.l1': '1 AIgent operando un proceso clave',
    'pricing.1.l2': 'Configurado, supervisado y mejorado por nosotros',
    'pricing.1.l3': 'Resumen diario para el dueño',
    'pricing.1.l4': 'Soporte por correo',
    'pricing.2.l1': 'Hasta 3 AIgents trabajando en conjunto',
    'pricing.2.l2': 'Traspasos entre procesos (prospecto → seguimiento → cita)',
    'pricing.2.l3': 'Resumen diario + revisión semanal de desempeño',
    'pricing.2.l4': 'Soporte prioritario',
    'pricing.3.l1': 'Flota completa de AIgents en toda tu operación',
    'pricing.3.l2': 'Integraciones a la medida con tus herramientas',
    'pricing.3.l3': 'Canal de operaciones dedicado',
    'pricing.3.l4': 'Sesión de estrategia trimestral',

    'cero.h2': 'No vendemos lo que no usamos.',
    'cero.p1': 'PECH Labs es parte de <b>PECH Group LLC</b> — y PECH Group es nuestro primer cliente. Le llamamos <b>Cliente Cero</b>. Los AIgents que desplegamos para ti operan primero la prospección, los reportes, el monitoreo y las operaciones de nuestro propio grupo.',
    'cero.p2': 'Eso significa que cada sistema que compras ya sobrevivió a producción en un negocio real — el nuestro — antes de tocar el tuyo. Si no es suficientemente bueno para nosotros, no lo vendemos.',
    'cero.p3': '<span class="todo">[TODO: Ed] Agregar un resultado verificable de Cliente Cero (qué opera, desde cuándo, cifra real antes/después) — o eliminar esta línea.</span>',

    'guide.kick': 'Guía gratuita',
    'guide.h2': '5 procesos que están frenando tu negocio en silencio',
    'guide.sub': 'Cómo se ve cada fuga, cuánto te está costando realmente y cómo un solo AIgent te la quita de encima. Incluye la autoevaluación de 5 puntos.',
    'guide.cta': 'Descargar el PDF (en inglés) →',

    'contact.kick': 'Siguiente paso',
    'contact.h2': 'Elige la fuga que más te cuesta. Te mostramos cómo un AIgent la cierra.',
    'contact.p': 'Gratis, sin presentación de ventas, 15 minutos. Sales con un diagnóstico de cualquier forma. ¿Prefieres correo? Escríbenos — en inglés o en español.',
    'contact.cta1': 'Agenda tu diagnóstico operativo gratis →',
    'contact.cta2': 'Escríbenos',
    'contact.wa': 'WhatsApp — próximamente',

    'foot.tag': '<b>PECH Labs</b> · Agencia AI-first para pequeñas y medianas empresas del Bay Area · una empresa de PECH Group LLC',
    'foot.socials': 'Redes sociales (próximamente)',
    'foot.privacy': 'Privacidad',
    'soon': 'pronto'
  };

  var KEY = 'pechlabs-lang';
  var doc = document;
  var metaDesc = doc.querySelector('meta[name="description"]');
  var nodes = doc.querySelectorAll('[data-i18n]');
  var attrNodes = doc.querySelectorAll('[data-i18n-attr]');
  var EN = {
    'meta.title': doc.title,
    'meta.desc': metaDesc ? metaDesc.getAttribute('content') : ''
  };

  // Snapshot English from the DOM so it only lives in one place (index.html).
  nodes.forEach(function (el) { EN[el.getAttribute('data-i18n')] = el.innerHTML; });
  attrNodes.forEach(function (el) {
    var parts = el.getAttribute('data-i18n-attr').split(':');
    EN[parts[1]] = el.getAttribute(parts[0]);
  });

  function apply(lang) {
    var dict = lang === 'es' ? ES : EN;
    var t = function (k) { return dict[k] != null ? dict[k] : EN[k]; };
    doc.documentElement.lang = lang;
    doc.title = t('meta.title');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.desc'));
    nodes.forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n')); });
    attrNodes.forEach(function (el) {
      var parts = el.getAttribute('data-i18n-attr').split(':');
      el.setAttribute(parts[0], t(parts[1]));
    });
    doc.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
  }

  function store(lang) { try { localStorage.setItem(KEY, lang); } catch (e) {} }
  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

  var param = null;
  try { param = new URLSearchParams(location.search).get('lang'); } catch (e) {}
  var initial = (param === 'es' || param === 'en') ? param
    : (saved() === 'es' || saved() === 'en') ? saved()
    : (/^es\b/i.test(navigator.language || '') ? 'es' : 'en');

  if (initial !== 'en') apply(initial);

  doc.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      var lang = b.getAttribute('data-lang');
      apply(lang);
      store(lang);
    });
  });
})();
