const lessons = [
  {
    level: 'A1',
    label: 'Lo esencial',
    title: 'Saludos y frases útiles',
    cards: [
      ['Hello', '/he·lóu/', 'Hola', 'Hello, how are you?', 'Hola, ¿cómo estás?', 'SALUDOS'],
      ['Good morning', '/gud mór·ning/', 'Buenos días', 'Good morning, nice to meet you.', 'Buenos días, mucho gusto.', 'SALUDOS'],
      ['Please', '/plís/', 'Por favor', 'A coffee, please.', 'Un café, por favor.', 'CORTESÍA'],
      ['Thank you', '/zank iú/', 'Gracias', 'Thank you for your help.', 'Gracias por tu ayuda.', 'CORTESÍA'],
      ['How are you?', '/hau ar iú/', '¿Cómo estás?', 'Hi! How are you today?', '¡Hola! ¿Cómo estás hoy?', 'CONVERSACIÓN'],
      ['I’m fine', '/aim fain/', 'Estoy bien', 'I’m fine, thank you.', 'Estoy bien, gracias.', 'CONVERSACIÓN'],
      ['See you soon', '/sí iú sun/', 'Hasta pronto', 'See you soon, María!', '¡Hasta pronto, María!', 'DESPEDIDAS'],
      ['Good night', '/gud nait/', 'Buenas noches', 'Good night, sleep well.', 'Buenas noches, duerme bien.', 'DESPEDIDAS']
    ]
  },
  {
    level: 'B2',
    label: 'Almacén',
    title: 'Inglés para el almacén',
    cards: [
      ['It’s on the right', '/its on de ráit/', 'Está a la derecha', 'The packing station is on the right, beside aisle three.', 'La estación de embalaje está a la derecha, junto al pasillo tres.', 'UBICACIONES'],
      ['It’s on the left', '/its on de left/', 'Está a la izquierda', 'The forklift is on the left, near receiving.', 'La carretilla elevadora está a la izquierda, cerca de recepción.', 'UBICACIONES'],
      ['It’s over there', '/its óuver der/', 'Está por allá', 'The spare pallets are over there, beside the loading bay.', 'Los palés de repuesto están por allá, junto al muelle de carga.', 'UBICACIONES'],
      ['Please bring me that box', '/plís bring mi dat box/', 'Por favor, tráeme esa caja', 'Please bring me that box before the truck leaves.', 'Por favor, tráeme esa caja antes de que se vaya el camión.', 'INSTRUCCIONES'],
      ['Move this pallet to aisle five', '/muv dis pálet tu ail fáiv/', 'Mueve este palé al pasillo cinco', 'Could you move this pallet to aisle five?', '¿Podrías mover este palé al pasillo cinco?', 'INSTRUCCIONES'],
      ['We’re running low on packing tape', '/wir ráning lóu on páking téip/', 'Se nos está acabando la cinta de embalaje', 'We’re running low on packing tape; check the supply cabinet.', 'Se nos está acabando la cinta de embalaje; revisa el armario de suministros.', 'SUMINISTROS'],
      ['Check the quantity against the packing slip', '/chek de kuántiti agénst de páking slip/', 'Compara la cantidad con el albarán', 'Please check the quantity against the packing slip before signing.', 'Por favor, compara la cantidad con el albarán antes de firmar.', 'CONTROL DE PEDIDOS'],
      ['Put the fragile items on the top shelf', '/put de fráyil áitems on de top shelf/', 'Pon los artículos frágiles en el estante superior', 'Put the fragile items on the top shelf so they stay safe.', 'Pon los artículos frágiles en el estante superior para que estén seguros.', 'SEGURIDAD']
    ]
  },
  {
    level: 'B1',
    label: 'Conversación natural',
    title: 'Habla con más naturalidad',
    cards: [
      ['I see where you’re coming from', '/ai sí uér yor cóming from/', 'Entiendo tu punto de vista', 'I see where you’re coming from, but we should compare both options.', 'Entiendo tu punto de vista, pero deberíamos comparar ambas opciones.', 'OPINIONES'],
      ['I’m on the fence', '/aim on de fens/', 'Aún no me decido', 'I’m on the fence about moving to another city.', 'Aún no me decido sobre mudarme a otra ciudad.', 'DECISIONES'],
      ['That slipped my mind', '/dat slípt mai máind/', 'Se me olvidó', 'I’m sorry, that slipped my mind completely.', 'Lo siento, se me olvidó por completo.', 'CONVERSACIÓN'],
      ['Would you mind clarifying that?', '/wud yu máind klérifáiing dat/', '¿Te importaría aclararlo?', 'Would you mind clarifying what you meant by “soon”?', '¿Te importaría aclarar qué quisiste decir con «pronto»?', 'CORTESÍA'],
      ['Let me get back to you', '/let mi get bak tu yu/', 'Déjame responderte más tarde', 'I need to check my calendar. Let me get back to you tomorrow.', 'Tengo que revisar mi calendario. Te respondo mañana.', 'CONVERSACIÓN'],
      ['I’m running a little behind', '/aim ráning a lírol bijáind/', 'Voy con un poco de retraso', 'I’m running a little behind, but I’ll be there in ten minutes.', 'Voy con un poco de retraso, pero llegaré en diez minutos.', 'TIEMPO'],
      ['It depends on what you mean', '/it dipénds on wat yu mín/', 'Depende de a qué te refieras', 'It depends on what you mean by “affordable.”', 'Depende de a qué te refieras con «asequible».', 'MATICES'],
      ['I didn’t catch the last part', '/ai dídent kach de last part/', 'No entendí la última parte', 'I didn’t catch the last part. Could you say it again?', 'No entendí la última parte. ¿Podrías repetirla?', 'CONVERSACIÓN']
    ]
  },
  {
    level: 'B2',
    label: 'Matices y argumentos',
    title: 'Expresa ideas con precisión',
    cards: [
      ['Having said that, …', '/jáving sed dat/', 'Dicho eso, …', 'The plan is ambitious. Having said that, it could work.', 'El plan es ambicioso. Dicho eso, podría funcionar.', 'CONECTORES'],
      ['As far as I’m concerned, …', '/az far az aim consérnd/', 'En lo que a mí respecta, …', 'As far as I’m concerned, we should give them another chance.', 'En lo que a mí respecta, deberíamos darles otra oportunidad.', 'OPINIONES'],
      ['I’d rather not jump to conclusions', '/aid ráder not yamp tu conclúshons/', 'Preferiría no sacar conclusiones apresuradas', 'We don’t have all the facts, so I’d rather not jump to conclusions.', 'No tenemos todos los datos, así que preferiría no sacar conclusiones apresuradas.', 'MATICES'],
      ['The sooner, the better', '/de súner, de béter/', 'Cuanto antes, mejor', 'Please send me the draft today—the sooner, the better.', 'Por favor, envíame el borrador hoy; cuanto antes, mejor.', 'ESTRUCTURAS'],
      ['If I had known, I would have told you', '/if ai jad nóun, ai wud jav tóuld yu/', 'Si lo hubiera sabido, te lo habría dicho', 'If I had known about the change, I would have told you.', 'Si hubiera sabido del cambio, te lo habría dicho.', 'CONDICIONALES'],
      ['It’s not so much X as Y', '/its not so mach eks az uái/', 'No es tanto X como Y', 'It’s not so much the price as the lack of support that worries me.', 'No me preocupa tanto el precio como la falta de apoyo.', 'ESTRUCTURAS'],
      ['For the time being, …', '/for de táim bíing/', 'Por el momento, …', 'For the time being, let’s keep the current schedule.', 'Por el momento, mantengamos el horario actual.', 'CONECTORES'],
      ['I couldn’t agree more', '/ai cúdent agrí mor/', 'Estoy totalmente de acuerdo', 'I couldn’t agree more—clear communication saves time.', 'Estoy totalmente de acuerdo: una comunicación clara ahorra tiempo.', 'OPINIONES']
    ]
  },
  {
    level: 'C1',
    label: 'Inglés profesional',
    title: 'Comunícate con confianza',
    cards: [
      ['I was under the impression that …', '/ai waz ánder di impréshon dat/', 'Tenía entendido que …', 'I was under the impression that the deadline had been extended.', 'Tenía entendido que se había ampliado la fecha límite.', 'REUNIONES'],
      ['Could you elaborate on …?', '/kud yu iláboréit on/', '¿Podrías dar más detalles sobre …?', 'Could you elaborate on how this affects the launch date?', '¿Podrías dar más detalles sobre cómo afecta esto a la fecha de lanzamiento?', 'PREGUNTAS'],
      ['Let’s get everyone on the same page', '/lets get évriwan on de séim péich/', 'Asegurémonos de que todos estemos alineados', 'Before we move ahead, let’s get everyone on the same page.', 'Antes de avanzar, asegurémonos de que todos estemos alineados.', 'COLABORACIÓN'],
      ['This is still a work in progress', '/dis iz stil a werk in prógres/', 'Esto todavía está en desarrollo', 'The new proposal is still a work in progress.', 'La nueva propuesta todavía está en desarrollo.', 'PROYECTOS'],
      ['Let’s take a step back', '/lets téik a step bak/', 'Demos un paso atrás', 'Let’s take a step back and look at the bigger picture.', 'Demos un paso atrás y veamos el panorama general.', 'REUNIONES'],
      ['I appreciate you bringing this to my attention', '/ai apríshieit yu brínging dis tu mai aténshon/', 'Te agradezco que me lo hayas señalado', 'I appreciate you bringing this to my attention; I’ll look into it today.', 'Te agradezco que me lo hayas señalado; lo revisaré hoy.', 'CORTESÍA'],
      ['In light of the latest findings, …', '/in láit ov de léitest fáindingz/', 'A la luz de los últimos hallazgos, …', 'In light of the latest findings, we recommend delaying the rollout.', 'A la luz de los últimos hallazgos, recomendamos retrasar el lanzamiento.', 'PRESENTACIONES'],
      ['The proposal is viable, provided that …', '/de propóuzal iz váiebl, prováidid dat/', 'La propuesta es viable, siempre que …', 'The proposal is viable, provided that we secure the required funding.', 'La propuesta es viable, siempre que consigamos la financiación necesaria.', 'NEGOCIACIÓN']
    ]
  }
];

let currentLesson = 0;
let currentCard = 0;
let known = JSON.parse(localStorage.getItem('littleStepsKnown') || '[]');
const progressVersion = 'warehouse-lesson-2';
if (localStorage.getItem('littleStepsDeckVersion') !== progressVersion) {
  known = [...new Set(known.filter(Number.isInteger).map(index => index >= 8 ? index + 8 : index))];
  localStorage.setItem('littleStepsKnown', JSON.stringify(known));
  localStorage.setItem('littleStepsDeckVersion', progressVersion);
}
let revealed = false;
const $ = id => document.getElementById(id);

function lessonStart(index) {
  return lessons.slice(0, index).reduce((total, lesson) => total + lesson.cards.length, 0);
}

function render() {
  const lesson = lessons[currentLesson];
  const card = lesson.cards[currentCard];
  const start = lessonStart(currentLesson);
  const end = start + lesson.cards.length;
  const learnedInLesson = known.filter(index => index >= start && index < end).length;

  $('lessonNumber').textContent = `Lección ${currentLesson + 1} · ${lesson.label}`;
  $('lessonTitle').textContent = lesson.title;
  $('lessonBadge').textContent = lesson.level;
  $('cardNumber').textContent = currentCard + 1;
  $('cardTotal').textContent = lesson.cards.length;
  $('word').textContent = card[0];
  $('pronunciation').textContent = card[1];
  $('translation').textContent = card[2];
  $('example').textContent = card[3];
  $('exampleTranslation').textContent = card[4];
  document.querySelector('.category').textContent = card[5];
  $('revealHint').classList.toggle('hidden', revealed);
  $('translation').classList.toggle('hidden', !revealed);
  $('progressLabel').textContent = `${learnedInLesson} / ${lesson.cards.length} aprendidas`;
  $('progressFill').style.width = `${learnedInLesson / lesson.cards.length * 100}%`;
}

function reveal() {
  revealed = true;
  render();
}

function next() {
  const globalIndex = lessonStart(currentLesson) + currentCard;
  if (!known.includes(globalIndex)) {
    known.push(globalIndex);
    localStorage.setItem('littleStepsKnown', JSON.stringify(known));
  }
  currentCard = (currentCard + 1) % lessons[currentLesson].cards.length;
  revealed = false;
  render();
  toast('¡Muy bien! Un paso más ✦');
}

function changeLesson(direction) {
  currentLesson = (currentLesson + direction + lessons.length) % lessons.length;
  currentCard = 0;
  revealed = false;
  render();
}

function toast(message) {
  $('toast').textContent = message;
  $('toast').classList.add('show');
  setTimeout(() => $('toast').classList.remove('show'), 1800);
}

function speak() {
  if (!('speechSynthesis' in window)) return;
  const utterance = new SpeechSynthesisUtterance(lessons[currentLesson].cards[currentCard][0]);
  utterance.lang = 'en-US';
  utterance.rate = .8;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

$('flashcard').onclick = event => {
  if (!event.target.closest('button')) reveal();
};
$('flashcard').onkeydown = event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    reveal();
  }
};
$('knowBtn').onclick = next;
$('againBtn').onclick = () => {
  revealed = false;
  render();
  toast('La veremos otra vez ✦');
};
$('previousLessonBtn').onclick = () => changeLesson(-1);
$('nextLessonBtn').onclick = () => changeLesson(1);
$('soundBtn').onclick = event => {
  event.stopPropagation();
  speak();
};
$('resetBtn').onclick = () => {
  if (confirm('¿Reiniciar todo el progreso?')) {
    known = [];
    localStorage.removeItem('littleStepsKnown');
    currentLesson = 0;
    currentCard = 0;
    revealed = false;
    render();
    toast('Progreso reiniciado');
  }
};

render();
