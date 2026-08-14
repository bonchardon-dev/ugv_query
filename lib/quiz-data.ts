export type NrkId =
  | "ratel-s"
  | "d21"
  | "maul"
  | "bufalo"
  | "t700"
  | "ravlyk"
  | "terrikon"
  | "tanchik"
  | "gnom-l2"
  | "gnom-nd"
  | "gnom-m5"
  | "termit"
  | "dropla"
  | "guliver"
  | "konyk"

export type Nrk = {
  id: NrkId
  name: string
  index: string
  category: string
  image: string
  tagline: string
  description: string
  traits: string[]
  specs: { label: string; value: string }[]
}

export const NRKS: Record<NrkId, Nrk> = {
  "ratel-s": {
    id: "ratel-s",
    name: "Ratel S",
    index: "НРК-01",
    category: "Малий ударний / штурмовий",
    image: "/nrk/ratel-s.png",
    tagline: "Швидкий, юркий, з одним точним ударом.",
    description:
      "Ти — вістря списа. Компактний і найшвидший серед побратимів: бачиш ціль — виконуєш завдання, поки інші ще зважують. Рішучість і швидкість реакції — твоя головна зброя.",
    traits: ["Рішучість", "Швидкість реакції", "Безстрашність", "Точність удару"],
    specs: [
      { label: "Навантаження", value: "35 кг" },
      { label: "Швидкість", value: "26 км/год" },
      { label: "Запас ходу", value: "10 км" },
      { label: "Роль", value: "ударний" },
    ],
  },
  d21: {
    id: "d21",
    name: "D-21",
    index: "НРК-02",
    category: "Бойовий модуль / вогнева підтримка",
    image: "/nrk/d21.png",
    tagline: "Холодний розрахунок і точний вогонь.",
    description:
      "Ти — боєць першої лінії. Несеш бойовий модуль і працюєш там, де потрібна вогнева міць та витримка. Не поспішаєш даремно, але коли б'єш — б'єш точно.",
    traits: ["Вогнева міць", "Холоднокровність", "Точність", "Дисципліна"],
    specs: [
      { label: "Навантаження", value: "200 кг" },
      { label: "Швидкість", value: "10 км/год" },
      { label: "Запас ходу", value: "40 км" },
      { label: "Тип", value: "бойовий модуль" },
    ],
  },
  maul: {
    id: "maul",
    name: "МАУЛ",
    index: "НРК-03",
    category: "Швидкісний дальнобійний",
    image: "/nrk/maul.png",
    tagline: "Стрімкий ривок на всю глибину.",
    description:
      "Ти — гонщик. Дизельний двигун і швидкість до 50 км/год роблять тебе найдинамічнішим у строю. Там, де важлива стрімкість і дальність, рівних тобі немає.",
    traits: ["Стрімкість", "Дальність", "Напір", "Енергія"],
    specs: [
      { label: "Навантаження", value: "200 кг" },
      { label: "Швидкість", value: "50 км/год" },
      { label: "Запас ходу", value: "90 км" },
      { label: "Двигун", value: "дизельний" },
    ],
  },
  bufalo: {
    id: "bufalo",
    name: "BUFALO",
    index: "НРК-04",
    category: "Важкий колісний броньований",
    image: "/nrk/bufalo.png",
    tagline: "Незламна сила, що тягне будь-що.",
    description:
      "Ти — важковаговик. Броньований корпус тримає стрілецький вогонь, а тонна вантажу тобі не тягар. Логістика, евакуація техніки, розмінування — там, де треба міць, кличуть тебе.",
    traits: ["Міць", "Захищеність", "Вантажопідйомність", "Незламність"],
    specs: [
      { label: "Навантаження", value: "1000 кг" },
      { label: "Швидкість", value: "16 км/год" },
      { label: "Запас ходу", value: "100 км" },
      { label: "Двигун", value: "дизельний" },
    ],
  },
  t700: {
    id: "t700",
    name: "Т-700 «Логіст»",
    index: "НРК-05",
    category: "Важка далекобійна логістика",
    image: "/nrk/t700.png",
    tagline: "Дійде туди, куди інші не дотягнуть.",
    description:
      "Ти — далекобійний тягач. 700 кг вантажу й 80 км ходу дозволяють працювати на глибині: не швидкістю, а вмінням дійти й повернутися. Витримка й планування — твій стиль.",
    traits: ["Витривалість", "Вантажопідйомність", "Автономність", "Далекий горизонт"],
    specs: [
      { label: "Навантаження", value: "700 кг" },
      { label: "Швидкість", value: "15 км/год" },
      { label: "Запас ходу", value: "80 км" },
      { label: "Кліренс", value: "320 мм" },
    ],
  },
  ravlyk: {
    id: "ravlyk",
    name: "УМП-2 «Равлик»",
    index: "НРК-06",
    category: "Важка універсальна платформа",
    image: "/nrk/ravlyk.png",
    tagline: "Могутній універсал, що витягне будь-що.",
    description:
      "Ти — надійна робоча сила. Пів тонни вантажу, гнучкий зв'язок і адаптація під різні модулі роблять тебе універсалом для найважчих завдань. На тебе завжди можна навантажити ще.",
    traits: ["Універсальність", "Сила", "Адаптивність", "Надійність"],
    specs: [
      { label: "Навантаження", value: "500 кг" },
      { label: "Швидкість", value: "12 км/год" },
      { label: "Запас ходу", value: "40 км" },
      { label: "Привід", value: "електричний" },
    ],
  },
  terrikon: {
    id: "terrikon",
    name: "TERRIKON-X",
    index: "НРК-07",
    category: "Гусеничний всюдихід",
    image: "/nrk/terrikon.png",
    tagline: "Пройде там, де застрягнуть інші.",
    description:
      "Ти — витривалий всюдихід. Гусениці й високий кліренс дають прохідність на найважчому ґрунті. Не женешся за швидкістю — тебе цінують за здатність дійти будь-де.",
    traits: ["Прохідність", "Витривалість", "Стійкість", "Наполегливість"],
    specs: [
      { label: "Навантаження", value: "400 кг" },
      { label: "Швидкість", value: "9 км/год" },
      { label: "Запас ходу", value: "40 км" },
      { label: "Шасі", value: "гусеничне" },
    ],
  },
  tanchik: {
    id: "tanchik",
    name: "«Танчик» GEN 2",
    index: "НРК-08",
    category: "Гусеничний робочий кінь",
    image: "/nrk/tanchik.png",
    tagline: "Надійний роботяга без зайвих слів.",
    description:
      "Ти — робочий кінь передової. Гусеничне шасі, спокійна вдача й готовність тягнути щоденну рутину. Без гучних гасел робиш свою справу так, що на тебе завжди можна покластися.",
    traits: ["Надійність", "Стабільність", "Прохідність", "Спокій"],
    specs: [
      { label: "Навантаження", value: "250 кг" },
      { label: "Швидкість", value: "15 км/год" },
      { label: "Запас ходу", value: "35 км" },
      { label: "Шасі", value: "гусеничне" },
    ],
  },
  "gnom-l2": {
    id: "gnom-l2",
    name: "Гном-Л2",
    index: "НРК-09",
    category: "Компактний логіст",
    image: "/nrk/gnom-l2.png",
    tagline: "Спритний кур'єр передової.",
    description:
      "Ти — легкий і спритний. Колісно-гусеничне шасі й скромні габарити дають тобі змогу прослизнути туди, куди великим зась. Твоя суперсила — доставити потрібне швидко й тихо.",
    traits: ["Спритність", "Мобільність", "Тиха робота", "Турбота про своїх"],
    specs: [
      { label: "Навантаження", value: "210 кг" },
      { label: "Швидкість", value: "12 км/год" },
      { label: "Запас ходу", value: "55 км" },
      { label: "Шасі", value: "колісно-гусеничне" },
    ],
  },
  "gnom-nd": {
    id: "gnom-nd",
    name: "Гном-НД",
    index: "НРК-10",
    category: "Носій дронів",
    image: "/nrk/gnom-nd.png",
    tagline: "Тихий розвідник із небом у рюкзаку.",
    description:
      "Ти — новатор. Малий, непомітний носій дронів, що розширює очі підрозділу далеко вперед. Працюєш головою: там, де інші ломляться напролом, ти піднімаєш дрон і бачиш усе наперед.",
    traits: ["Кмітливість", "Непомітність", "Технологічність", "Координація"],
    specs: [
      { label: "Навантаження", value: "32 кг" },
      { label: "Швидкість", value: "9 км/год" },
      { label: "Запас ходу", value: "22 км" },
      { label: "Роль", value: "носій дронів" },
    ],
  },
  "gnom-m5": {
    id: "gnom-m5",
    name: "Гном-М5",
    index: "НРК-11",
    category: "Мінер / сапер",
    image: "/nrk/gnom-m5.png",
    tagline: "Жодного зайвого руху, жодної помилки.",
    description:
      "Ти — точний сапер. Малий, зосереджений і надзвичайно акуратний: працюєш там, де ціна помилки надто висока. Терпіння й методичність — твоя броня.",
    traits: ["Точність", "Обережність", "Методичність", "Терпіння"],
    specs: [
      { label: "Навантаження", value: "60 кг" },
      { label: "Швидкість", value: "9 км/год" },
      { label: "Запас ходу", value: "30 км" },
      { label: "Роль", value: "мінер" },
    ],
  },
  termit: {
    id: "termit",
    name: "TerMIT 2.0",
    index: "НРК-12",
    category: "Мінувальник-логіст",
    image: "/nrk/termit.png",
    tagline: "Універсальний спеціаліст із чітким планом.",
    description:
      "Ти — гусеничний універсал зі спеціалізацією сапера й логіста. Багатоканальний зв'язок і міноскидач роблять тебе тим, хто виконує складне завдання точно за протоколом.",
    traits: ["Універсальність", "Точність", "Витримка", "Системність"],
    specs: [
      { label: "Навантаження", value: "398 кг" },
      { label: "Швидкість", value: "15 км/год" },
      { label: "Запас ходу", value: "40 км" },
      { label: "Шасі", value: "гусеничне" },
    ],
  },
  dropla: {
    id: "dropla",
    name: "Dropla Logic 1.0",
    index: "НРК-13",
    category: "Легкий колісний логіст",
    image: "/nrk/dropla.png",
    tagline: "Практичний мінімаліст, що завжди на місці.",
    description:
      "Ти — практичний і невибагливий. Легка колісна платформа зі Starlink Mini, що просто робить свою справу без зайвого пафосу. Там, де потрібно швидко довезти й допомогти, ти вже їдеш.",
    traits: ["Практичність", "Простота", "Готовність", "Турбота про своїх"],
    specs: [
      { label: "Навантаження", value: "200 кг" },
      { label: "Швидкість", value: "15 км/год" },
      { label: "Запас ходу", value: "40 км" },
      { label: "Зв'язок", value: "Starlink Mini" },
    ],
  },
  guliver: {
    id: "guliver",
    name: "ГУЛІВЕР",
    index: "НРК-14",
    category: "Універсальний модульний",
    image: "/nrk/guliver.png",
    tagline: "Готовий до всього, під будь-яку задачу.",
    description:
      "Ти — майстер на всі руки. Модульна платформа, що сьогодні возить вантаж, а завтра мінує чи несе обладнання. Гнучкість і готовність перелаштуватися — твоя головна риса.",
    traits: ["Гнучкість", "Багатозадачність", "Адаптивність", "Готовність"],
    specs: [
      { label: "Навантаження", value: "320 кг" },
      { label: "Швидкість", value: "15 км/год" },
      { label: "Запас ходу", value: "40 км" },
      { label: "Привід", value: "електричний" },
    ],
  },
  konyk: {
    id: "konyk",
    name: "Konyk ONE",
    index: "НРК-15",
    category: "Універсальний командний",
    image: "/nrk/konyk.png",
    tagline: "З'єднує всіх у єдину мережу.",
    description:
      "Ти — координатор. Вбудований блок Mesh-мережі та LTE робить тебе вузлом зв'язку, що тримає підрозділ разом. Гнучко реагуєш на ситуацію й даєш іншим працювати злагоджено.",
    traits: ["Координація", "Гнучкість", "Зв'язність", "Універсальність"],
    specs: [
      { label: "Навантаження", value: "300 кг" },
      { label: "Швидкість", value: "15 км/год" },
      { label: "Запас ходу", value: "40 км" },
      { label: "Зв'язок", value: "Mesh + LTE" },
    ],
  },
}

export type Option = {
  label: string
  weights: Partial<Record<NrkId, number>>
}

export type Question = {
  id: number
  prompt: string
  options: Option[]
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    prompt: "Отримано наказ. Твоя перша реакція?",
    options: [
      { label: "Уже рухаюся до цілі — деталі з'ясую дорогою", weights: { "ratel-s": 2, maul: 1 } },
      { label: "Прораховую кожен крок, перш ніж рушити", weights: { "gnom-m5": 2, termit: 1 } },
      { label: "Питаю, кому потрібна підтримка, і їду туди", weights: { dropla: 2, "gnom-l2": 1 } },
      { label: "Прикидаю, наскільки далеко доведеться тягнути", weights: { t700: 2, ravlyk: 1 } },
    ],
  },
  {
    id: 2,
    prompt: "Яка твоя роль у строю?",
    options: [
      { label: "Вістря атаки", weights: { d21: 2, "ratel-s": 1 } },
      { label: "Надійний тил, що все довезе", weights: { bufalo: 2, t700: 1 } },
      { label: "Універсал, що зв'язує всіх докупи", weights: { konyk: 2, guliver: 1 } },
      { label: "Вузький спеціаліст", weights: { "gnom-m5": 2, termit: 1 } },
    ],
  },
  {
    id: 3,
    prompt: "Твоя головна суперсила?",
    options: [
      { label: "Швидкість і напір", weights: { maul: 2, "ratel-s": 1 } },
      { label: "Витривалість на дистанції", weights: { terrikon: 2, t700: 1 } },
      { label: "Точність і холодний розум", weights: { "gnom-m5": 2, d21: 1 } },
      { label: "Сила тягнути багато", weights: { bufalo: 2, ravlyk: 1 } },
    ],
  },
  {
    id: 4,
    prompt: "Попереду серйозна перешкода. Що робиш?",
    options: [
      { label: "З розгону — і вона позаду", weights: { maul: 2, d21: 1 } },
      { label: "Обираю обхід, навіть якщо довший", weights: { t700: 2, terrikon: 1 } },
      { label: "Розбираю її методично, крок за кроком", weights: { termit: 2, "gnom-m5": 1 } },
      { label: "Шукаю, кому по дорозі допомогти", weights: { dropla: 2, "gnom-l2": 1 } },
    ],
  },
  {
    id: 5,
    prompt: "Ідеальний підсумок дня — це коли…",
    options: [
      { label: "Ціль уражено швидко й чисто", weights: { "ratel-s": 2, maul: 1 } },
      { label: "Усі побратими повернулися живими", weights: { "gnom-l2": 2, dropla: 1 } },
      { label: "Вантаж дійшов, куди треба", weights: { t700: 2, bufalo: 1 } },
      { label: "Жодної помилки в роботі", weights: { termit: 2, konyk: 1 } },
    ],
  },
  {
    id: 6,
    prompt: "Твоя стихія?",
    options: [
      { label: "Відкрите поле для швидкого маневру", weights: { maul: 2, konyk: 1 } },
      { label: "Глибокий тил ворога", weights: { terrikon: 2, t700: 1 } },
      { label: "Важке бездоріжжя і багнюка", weights: { tanchik: 2, ravlyk: 1 } },
      { label: "Маршрут до найближчого пораненого", weights: { "gnom-l2": 2, dropla: 1 } },
    ],
  },
  {
    id: 7,
    prompt: "На кого ти більше схожий?",
    options: [
      { label: "Того, хто діє першим", weights: { "ratel-s": 2, d21: 1 } },
      { label: "Того, на кого завжди можна покластися", weights: { tanchik: 2, bufalo: 1 } },
      { label: "Того, хто все прораховує наперед", weights: { "gnom-m5": 2, termit: 1 } },
      { label: "Того, хто витягне будь-яку ситуацію", weights: { ravlyk: 2, guliver: 1 } },
    ],
  },
  {
    id: 8,
    prompt: "Твій девіз?",
    options: [
      { label: "«Побачив — зробив»", weights: { d21: 2, maul: 1 } },
      { label: "«Нікого не залишаємо»", weights: { "gnom-l2": 2, dropla: 1 } },
      { label: "«Дійду до кінця»", weights: { terrikon: 2, t700: 1 } },
      { label: "«Готовий до всього»", weights: { guliver: 2, konyk: 1 } },
    ],
  },
  {
    id: 9,
    prompt: "Твоє ставлення до ризику?",
    options: [
      { label: "Ризик — це і є моя робота", weights: { "ratel-s": 2, minuvalnyk: 1 } },
      { label: "Іду на нього заради інших", weights: { elektronoshi: 2, "ratel-h": 1 } },
      { label: "Мінімізую його розрахунком", weights: { d12: 2, "ratel-m": 1 } },
      { label: "Беру стільки, скільки витримаю", weights: { ravlyk: 2, konyk: 1 } },
    ],
  },
  {
    id: 10,
    prompt: "Чим ти найбільше пишаєшся?",
    options: [
      { label: "Виконано без жодної секунди зволікання", weights: { maul: 2, "ratel-s": 1 } },
      { label: "Побратими нагодовані й у безпеці", weights: { "gnom-l2": 2, dropla: 1 } },
      { label: "Пройдено рекордну відстань", weights: { t700: 2, terrikon: 1 } },
      { label: "Усе спрацювало точно, як за таблицею", weights: { termit: 2, "gnom-m5": 1 } },
    ],
  },
  {
    id: 11,
    prompt: "Як ти відновлюєш ресурс після виходу?",
    options: [
      { label: "Швидка підзарядка — і знову в бій", weights: { "ratel-s": 2, maul: 1 } },
      { label: "Ґрунтовне обслуговування, щоб пройти ще далі", weights: { terrikon: 2, tanchik: 1 } },
      { label: "Перевірка кожного вузла за протоколом", weights: { "gnom-m5": 2, termit: 1 } },
      { label: "Головне — щоб команда була в мережі й порядку", weights: { "gnom-nd": 2, konyk: 1 } },
    ],
  },
  {
    id: 12,
    prompt: "Що для тебе найважливіше в спорядженні?",
    options: [
      { label: "Легкість і швидкість", weights: { "ratel-s": 2, maul: 1 } },
      { label: "Місткість і вантажопідйомність", weights: { bufalo: 2, ravlyk: 1 } },
      { label: "Оптика й датчики", weights: { "gnom-nd": 2, d21: 1 } },
      { label: "Запас палива й ходу", weights: { t700: 2, terrikon: 1 } },
    ],
  },
  {
    id: 13,
    prompt: "Твій стиль ухвалення рішень?",
    options: [
      { label: "Миттєво, за інстинктом", weights: { "ratel-s": 2, "gnom-nd": 1 } },
      { label: "Зважено, за розрахунком", weights: { d21: 2, t700: 1 } },
      { label: "Обережно, крок за кроком", weights: { "gnom-m5": 2, termit: 1 } },
      { label: "Гнучко, залежно від ситуації", weights: { guliver: 2, konyk: 1 } },
    ],
  },
  {
    id: 14,
    prompt: "Яке завдання дає тобі найбільше задоволення?",
    options: [
      { label: "Прорив до складної цілі", weights: { d21: 2, maul: 1 } },
      { label: "Доставка туди, куди ніхто не дійде", weights: { terrikon: 2, bufalo: 1 } },
      { label: "Порятунок побратима з-під вогню", weights: { "gnom-l2": 2, dropla: 1 } },
      { label: "Знешкодження загрози без жодної помилки", weights: { termit: 2, "gnom-m5": 1 } },
    ],
  },
  {
    id: 15,
    prompt: "Що тебе найбільше дратує?",
    options: [
      { label: "Зволікання й довгі наради", weights: { maul: 2, "ratel-s": 1 } },
      { label: "Коли хтось лишається без допомоги", weights: { dropla: 2, "gnom-l2": 1 } },
      { label: "Неточність і халатність", weights: { "gnom-m5": 2, termit: 1 } },
      { label: "Коли недооцінюють мою витривалість", weights: { terrikon: 2, tanchik: 1 } },
    ],
  },
  {
    id: 16,
    prompt: "Обери свою суперсилу.",
    options: [
      { label: "Блискавична реакція", weights: { "ratel-s": 2, maul: 1 } },
      { label: "Залізна витримка", weights: { terrikon: 2, tanchik: 1 } },
      { label: "Незламна міць", weights: { bufalo: 2, ravlyk: 1 } },
      { label: "Розумний зв'язок і координація", weights: { konyk: 2, "gnom-nd": 1 } },
    ],
  },
]

const CALLSIGN_POOLS: Record<NrkId, string[]> = {
  "ratel-s": ["Клинок", "Іскра", "Стилет", "Блискавка"],
  d21: ["Молот", "Приціл", "Бастіон", "Залізо"],
  maul: ["Вихор", "Комета", "Ривок", "Спалах"],
  bufalo: ["Титан", "Атлант", "Граніт", "Ведмідь"],
  t700: ["Обрій", "Кордон", "Марафон", "Далина"],
  ravlyk: ["Валет", "Кремінь", "Домкрат", "Важіль"],
  terrikon: ["Скеля", "Терикон", "Валун", "Хребет"],
  tanchik: ["Кремінь", "Опора", "Броня", "Кувалда"],
  "gnom-l2": ["Стриж", "Кур'єр", "Шершень", "Тінь"],
  "gnom-nd": ["Око", "Беркут", "Радар", "Сокіл"],
  "gnom-m5": ["Скальпель", "Пінцет", "Годинник", "Сапер"],
  termit: ["Протокол", "Розряд", "Циркуль", "Майстер"],
  dropla: ["Крапля", "Човник", "Провід", "Стежка"],
  guliver: ["Універсал", "Конструктор", "Модуль", "Флагман"],
  konyk: ["Вузол", "Диспетчер", "Маяк", "Мережа"],
}

// Deterministic callsign from the result and the full answer pattern, so the
// same run always yields the same callsign but different runs vary.
export function generateCallsign(resultId: NrkId, answers: number[]): string {
  const pool = CALLSIGN_POOLS[resultId]
  const seed = answers.reduce((acc, val, i) => acc + (val + 1) * (i + 1), 0)
  const word = pool[seed % pool.length]
  const number = ((seed * 7) % 99) + 1
  return `${word}-${String(number).padStart(2, "0")}`
}

export function computeResult(answers: number[]): NrkId {
  const scores: Record<string, number> = {}
  answers.forEach((optionIndex, qIndex) => {
    const option = QUESTIONS[qIndex]?.options[optionIndex]
    if (!option) return
    for (const [id, weight] of Object.entries(option.weights)) {
      scores[id] = (scores[id] ?? 0) + (weight ?? 0)
    }
  })

  let best: NrkId = "konyk"
  let bestScore = -1
  // Iterate in fixed order so ties resolve deterministically.
  ;(Object.keys(NRKS) as NrkId[]).forEach((id) => {
    const score = scores[id] ?? 0
    if (score > bestScore) {
      bestScore = score
      best = id
    }
  })
  return best
}
