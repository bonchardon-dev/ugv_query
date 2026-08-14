export type NrkId =
  | "ratel-s"
  | "ratel-h"
  | "ratel-m"
  | "ravlyk"
  | "d12"
  | "konyk"
  | "elektronoshi"
  | "minuvalnyk"

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
    name: "Ратель-С",
    index: "НРК-01",
    category: "Ударний / камікадзе-мінер",
    image: "/nrk/ratel-s.png",
    tagline: "Швидкий, рішучий, з одним точним ударом.",
    description:
      "Ти — вістря списа. Компактний колісний комплекс, який не любить довгих нарад: бачиш ціль — виконуєш завдання. Там, де інші зважують, ти вже під'їхав упритул. Рішучість — твоя головна зброя, а швидкість реакції рятує там, де зволікання коштує занадто дорого.",
    traits: ["Рішучість", "Швидкість реакції", "Безстрашність", "Точність удару"],
    specs: [
      { label: "Маса", value: "≈75 кг" },
      { label: "Швидкість", value: "до 20 км/год" },
      { label: "Корисне навантаження", value: "до 20 кг" },
      { label: "Дальність керування", value: "1,5–3 км" },
    ],
  },
  "ratel-h": {
    id: "ratel-h",
    name: "Ратель-Н",
    index: "НРК-02",
    category: "Логістика та евакуація",
    image: "/nrk/ratel-h.png",
    tagline: "Привозить необхідне і вивозить найдорожче.",
    description:
      "Ти — той, на кого можна покластися. Возиш боєкомплект, воду й харчі туди, куди страшно йти людині, а назад забираєш поранених. Тиха, але критично важлива робота: без тебе передова просто зупиниться. Надійність для тебе — не гасло, а щоденна норма.",
    traits: ["Надійність", "Турбота про побратимів", "Вантажопідйомність", "Спокій під тиском"],
    specs: [
      { label: "Корисне навантаження", value: "400–500 кг" },
      { label: "Швидкість", value: "≈8 км/год" },
      { label: "Запас ходу", value: "до 55 км" },
      { label: "Радіус застосування", value: "4,5–6 км" },
    ],
  },
  "ratel-m": {
    id: "ratel-m",
    name: "Ратель-М",
    index: "НРК-03",
    category: "Далекобійна логістика",
    image: "/nrk/ratel-m.png",
    tagline: "Дійде туди, куди інші не дотягнуть.",
    description:
      "Ти — марафонець. Там, де інші розряджаються на півдорозі, ти лише розігріваєшся. Найбільший запас ходу серед побратимів дозволяє тобі працювати на глибині, де важлива не швидкість, а вміння дійти й повернутися. Витримка й наполегливість — твій стиль.",
    traits: ["Витривалість", "Наполегливість", "Автономність", "Далекий горизонт планування"],
    specs: [
      { label: "Корисне навантаження", value: "300–400 кг" },
      { label: "Швидкість", value: "≈8 км/год" },
      { label: "Запас ходу", value: "70–80 км" },
      { label: "Шасі", value: "колісне" },
    ],
  },
  ravlyk: {
    id: "ravlyk",
    name: "УМП «Равлик»",
    index: "НРК-04",
    category: "Важка універсальна платформа 6×6",
    image: "/nrk/ravlyk.png",
    tagline: "Один за багатьох: тягне, везе і б'є.",
    description:
      "Ти — універсальний важковаговик. Сьогодні везеш пів тонни вантажу, завтра несеш бойовий модуль чи ПТРК. Тебе не лякає ані вага, ані бездоріжжя — шість коліс проходять там, де застрягне будь-хто. Ти той, кому доручають найрізноманітніші завдання, бо знають: витягне.",
    traits: ["Універсальність", "Потужність", "Прохідність", "Готовність тягнути на собі"],
    specs: [
      { label: "Корисне навантаження", value: "300–500 кг" },
      { label: "Швидкість", value: "до 12 км/год" },
      { label: "Запас ходу", value: "35–55 км" },
      { label: "Озброєння", value: "ПТРК / кулемет 12,7 мм" },
    ],
  },
  d12: {
    id: "d12",
    name: "Бойовий модуль D-12",
    index: "НРК-05",
    category: "Дистанційна вогнева точка",
    image: "/nrk/d12.png",
    tagline: "Все прораховано. Ціль вже під контролем.",
    description:
      "Ти — холодний розрахунок. Огляд на 360°, балістична таблиця в голові, день і тепловізор — ти помічаєш те, що інші проґавлять. Тебе легко інтегрувати в будь-яку команду: ти підсилюєш кожного поруч. Пильність і точність — ось на чому тримається твій авторитет.",
    traits: ["Точність", "Пильність", "Холоднокровність", "Аналітичність"],
    specs: [
      { label: "Озброєння", value: "Browning M2, 12,7 мм" },
      { label: "Огляд", value: "360°" },
      { label: "Оптика", value: "день + тепловізор" },
      { label: "Особливість", value: "балістичний обчислювач" },
    ],
  },
  konyk: {
    id: "konyk",
    name: "«Коник» One",
    index: "НРК-06",
    category: "Легка універсальна платформа",
    image: "/nrk/konyk.png",
    tagline: "Малий, спритний і завжди в потрібному місці.",
    description:
      "Ти — легкий та адаптивний. Модульна конструкція дозволяє тобі перевтілюватися під завдання: сьогодні розвідка, завтра логістика, післязавтра — ретрансляція. Ти цінуєш гнучкість і швидко знаходиш спільну мову з будь-якою командою. Там, де потрібна кмітливість, кличуть саме тебе.",
    traits: ["Гнучкість", "Кмітливість", "Мобільність", "Командна робота"],
    specs: [
      { label: "Клас", value: "легка платформа" },
      { label: "Конструкція", value: "модульна" },
      { label: "Ролі", value: "розвідка / логістика / зв'язок" },
      { label: "Перевага", value: "мобільність" },
    ],
  },
  elektronoshi: {
    id: "elektronoshi",
    name: "Ратель «Електроноші»",
    index: "НРК-07",
    category: "Медична евакуація",
    image: "/nrk/elektronoshi.png",
    tagline: "Тихо приходить першим по того, кому найважче.",
    description:
      "Ти — рятівник. Твоя місія проста і священна: дістатися до пораненого й винести його з-під вогню, не наражаючи на ризик санітарів. Ти працюєш тихо, без гучних перемог, але саме завдяки тобі хтось повертається додому. Самовідданість — твоя суть.",
    traits: ["Самовідданість", "Емпатія", "Обережність", "Відповідальність"],
    specs: [
      { label: "Призначення", value: "евакуація поранених" },
      { label: "Шасі", value: "колісне" },
      { label: "Оснащення", value: "ноші" },
      { label: "Пріоритет", value: "збереження життя" },
    ],
  },
  minuvalnyk: {
    id: "minuvalnyk",
    name: "Мінувальник",
    index: "НРК-08",
    category: "Інженерно-саперний комплекс",
    image: "/nrk/minuvalnyk.png",
    tagline: "Терпіння і точність там, де немає права на помилку.",
    description:
      "Ти — інженер із залізними нервами. Мінування й розмінування не пробачають поспіху, тож ти дієш методично, крок за кроком, звіряючи кожен рух. Гусениці несуть тебе через будь-який ґрунт, а холодний розум утримує від зайвого ризику. Твоя робота непомітна, доки все йде правильно — а завдяки тобі так і буде.",
    traits: ["Методичність", "Терпіння", "Незворушність", "Увага до деталей"],
    specs: [
      { label: "Шасі", value: "гусеничне" },
      { label: "Призначення", value: "мінування / розмінування" },
      { label: "Прохідність", value: "висока" },
      { label: "Стиль", value: "методичний" },
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
    prompt: "Надійшло бойове завдання. Твоя перша реакція?",
    options: [
      { label: "Уже рухаюся до цілі — деталі з'ясую дорогою", weights: { "ratel-s": 2, konyk: 1 } },
      { label: "Прораховую всі ризики, перш ніж зробити крок", weights: { d12: 2, minuvalnyk: 1 } },
      { label: "Питаю, кому потрібна підтримка, і їду туди", weights: { "ratel-h": 2, elektronoshi: 1 } },
      { label: "Прикидаю, наскільки далеко доведеться йти", weights: { "ratel-m": 2, ravlyk: 1 } },
    ],
  },
  {
    id: 2,
    prompt: "Яка роль у команді тобі найближча?",
    options: [
      { label: "Вістря атаки", weights: { "ratel-s": 2, d12: 1 } },
      { label: "Тил, що годує і рятує", weights: { "ratel-h": 2, elektronoshi: 1 } },
      { label: "Універсал на всі випадки", weights: { ravlyk: 2, konyk: 1 } },
      { label: "Спеціаліст вузького профілю", weights: { minuvalnyk: 2, d12: 1 } },
    ],
  },
  {
    id: 3,
    prompt: "Обери свою головну сильну сторону.",
    options: [
      { label: "Швидкість і рішучість", weights: { "ratel-s": 2, konyk: 1 } },
      { label: "Витривалість на довгій дистанції", weights: { "ratel-m": 2, "ratel-h": 1 } },
      { label: "Точність і холодний розум", weights: { d12: 2, minuvalnyk: 1 } },
      { label: "Сила й здатність тягнути багато", weights: { ravlyk: 2, "ratel-h": 1 } },
    ],
  },
  {
    id: 4,
    prompt: "Як ти долаєш перешкоду на шляху?",
    options: [
      { label: "З розгону — і вона позаду", weights: { "ratel-s": 2, ravlyk: 1 } },
      { label: "Обираю обхід, навіть якщо він довший", weights: { "ratel-m": 2, konyk: 1 } },
      { label: "Розбираю її методично, крок за кроком", weights: { minuvalnyk: 2, d12: 1 } },
      { label: "Шукаю, кому по дорозі допомогти", weights: { elektronoshi: 2, "ratel-h": 1 } },
    ],
  },
  {
    id: 5,
    prompt: "Що для тебе означає «успішна місія»?",
    options: [
      { label: "Ціль уражено — швидко й чисто", weights: { "ratel-s": 2, d12: 1 } },
      { label: "Усі повернулися живими", weights: { elektronoshi: 2, "ratel-h": 1 } },
      { label: "Вантаж дійшов, куди треба", weights: { "ratel-m": 2, ravlyk: 1 } },
      { label: "Жодної помилки в роботі", weights: { minuvalnyk: 2, konyk: 1 } },
    ],
  },
  {
    id: 6,
    prompt: "Яка місцевість тобі найкомфортніша?",
    options: [
      { label: "Відкрите поле для швидкого маневру", weights: { "ratel-s": 2, konyk: 1 } },
      { label: "Глибокий тил ворога", weights: { "ratel-m": 2, d12: 1 } },
      { label: "Важке бездоріжжя і багнюка", weights: { ravlyk: 2, minuvalnyk: 1 } },
      { label: "Маршрут до найближчого пораненого", weights: { elektronoshi: 2, "ratel-h": 1 } },
    ],
  },
  {
    id: 7,
    prompt: "Друзі описали б тебе як…",
    options: [
      { label: "Того, хто діє першим", weights: { "ratel-s": 2, konyk: 1 } },
      { label: "Того, на кого завжди можна покластися", weights: { "ratel-h": 2, "ratel-m": 1 } },
      { label: "Того, хто все прораховує наперед", weights: { d12: 2, minuvalnyk: 1 } },
      { label: "Того, хто витягне будь-яку ситуацію", weights: { ravlyk: 2, elektronoshi: 1 } },
    ],
  },
  {
    id: 8,
    prompt: "Обери девіз, під яким готовий підписатися.",
    options: [
      { label: "«Побачив — зробив»", weights: { "ratel-s": 2, d12: 1 } },
      { label: "«Нікого не залишаємо»", weights: { elektronoshi: 2, "ratel-h": 1 } },
      { label: "«Дійду до кінця»", weights: { "ratel-m": 2, minuvalnyk: 1 } },
      { label: "«Готовий до будь-чого»", weights: { ravlyk: 2, konyk: 1 } },
    ],
  },
  {
    id: 9,
    prompt: "Як ти ставишся до ризику?",
    options: [
      { label: "Ризик — це і є моя робота", weights: { "ratel-s": 2, minuvalnyk: 1 } },
      { label: "Іду на нього заради інших", weights: { elektronoshi: 2, "ratel-h": 1 } },
      { label: "Мінімізую його розрахунком", weights: { d12: 2, "ratel-m": 1 } },
      { label: "Беру стільки, скільки витримаю", weights: { ravlyk: 2, konyk: 1 } },
    ],
  },
  {
    id: 10,
    prompt: "Що завершує твій ідеальний бойовий день?",
    options: [
      { label: "Виконане завдання і жодної секунди зволікання", weights: { "ratel-s": 2, konyk: 1 } },
      { label: "Усі побратими нагодовані й у безпеці", weights: { "ratel-h": 2, elektronoshi: 1 } },
      { label: "Пройдено рекордну відстань", weights: { "ratel-m": 2, ravlyk: 1 } },
      { label: "Усе спрацювало точно, як за таблицею", weights: { d12: 2, minuvalnyk: 1 } },
    ],
  },
  {
    id: 11,
    prompt: "Як ти відновлюєш ресурс після важкого виходу?",
    options: [
      { label: "Швидка підзарядка — і знову в бій", weights: { "ratel-s": 2, konyk: 1 } },
      { label: "Ґрунтовне ТО, щоб пройти ще далі", weights: { "ratel-m": 2, ravlyk: 1 } },
      { label: "Перевірка кожного вузла за протоколом", weights: { minuvalnyk: 2, d12: 1 } },
      { label: "Головне — щоб побратими були в порядку", weights: { elektronoshi: 2, "ratel-h": 1 } },
    ],
  },
  {
    id: 12,
    prompt: "Що для тебе найважливіше в спорядженні?",
    options: [
      { label: "Легкість і швидкість", weights: { konyk: 2, "ratel-s": 1 } },
      { label: "Місткість і вантажопідйомність", weights: { ravlyk: 2, "ratel-h": 1 } },
      { label: "Оптика й точні прилади", weights: { d12: 2, minuvalnyk: 1 } },
      { label: "Запас палива й ходу", weights: { "ratel-m": 2, elektronoshi: 1 } },
    ],
  },
  {
    id: 13,
    prompt: "Твій стиль ухвалення рішень?",
    options: [
      { label: "Миттєво, за інстинктом", weights: { "ratel-s": 2, ravlyk: 1 } },
      { label: "Зважено, за розрахунком", weights: { d12: 2, "ratel-m": 1 } },
      { label: "Обережно, крок за кроком", weights: { minuvalnyk: 2, elektronoshi: 1 } },
      { label: "Гнучко, залежно від ситуації", weights: { konyk: 2, "ratel-h": 1 } },
    ],
  },
  {
    id: 14,
    prompt: "Яке завдання дає тобі найбільше задоволення?",
    options: [
      { label: "Прорив до складної цілі", weights: { "ratel-s": 2, d12: 1 } },
      { label: "Доставка туди, куди ніхто не дійде", weights: { "ratel-m": 2, ravlyk: 1 } },
      { label: "Порятунок побратима з-під вогню", weights: { elektronoshi: 2, "ratel-h": 1 } },
      { label: "Знешкодження загрози без жодної помилки", weights: { minuvalnyk: 2, konyk: 1 } },
    ],
  },
  {
    id: 15,
    prompt: "Що тебе найбільше дратує?",
    options: [
      { label: "Зволікання й довгі наради", weights: { "ratel-s": 2, konyk: 1 } },
      { label: "Коли хтось лишається без допомоги", weights: { elektronoshi: 2, "ratel-h": 1 } },
      { label: "Неточність і халатність", weights: { d12: 2, minuvalnyk: 1 } },
      { label: "Коли недооцінюють мою витривалість", weights: { "ratel-m": 2, ravlyk: 1 } },
    ],
  },
  {
    id: 16,
    prompt: "Обери свою суперсилу.",
    options: [
      { label: "Блискавична реакція", weights: { "ratel-s": 2, konyk: 1 } },
      { label: "Залізна витримка", weights: { "ratel-m": 2, minuvalnyk: 1 } },
      { label: "Незламна надійність", weights: { "ratel-h": 2, ravlyk: 1 } },
      { label: "Гострий зір і точність", weights: { d12: 2, elektronoshi: 1 } },
    ],
  },
]

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
