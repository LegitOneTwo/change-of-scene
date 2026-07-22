// ==================== BILINGUAL DATA ====================
const archiveData = {
    en: [
        {
                "date": "17/03/1994",
                "title": "The First Door",
                "text": "A door appears in an abandoned building downtown. Those who find it describe a warm light and the smell of cinnamon. The first written record: 'The door opened by itself. I'm not sure if I found it or it found me.' A woman named Elena claims she walked through and found herself in a café that 'shouldn't exist.' She stayed for tea and left a sketch of the counter — the same dark oak that stands today.",
                "tag": "Origin",
                "quote": "Some doors were always there. You just weren't ready to see them."
        },
        {
                "date": "03/06/1994",
                "title": "The First Guest",
                "text": "Elena returns — this time with a friend. They spend four hours in the café, though only twenty minutes pass outside. Her friend Maria leaves a drawing in the guestbook: a cup of coffee with steam rising in the shape of a question mark.",
                "tag": "Guests",
                "quote": "Time flows differently here. You just get used to it."
        },
        {
                "date": "22/11/1997",
                "title": "The First Menu",
                "text": "The café operates quietly, known only to a handful of regulars. Original menu: 'Déjà vu Syndrome' (latte with salted caramel), 'Portal №3' (black coffee with ginger), and regular black coffee. A guestbook appears at the counter. The first entry reads: 'Best coffee I've had. The view from window №7 changes every time. I saw Paris in the rain, then a street I've never seen before.'",
                "tag": "Menu",
                "quote": "Coffee tastes different when reality bends around you."
        },
        {
                "date": "14/02/1999",
                "title": "Night Concert",
                "text": "LegitPlayer plays the piano in the main hall for guests for the first time. Seven people were present. According to accounts, the music changed the color of the walls — from gray to pale gold. One guest, a professional pianist, tried to transcribe the melody, but on paper it 'dissolved into nonsense.' The recording did not survive.",
                "tag": "Music",
                "quote": "Some things only exist in the moment of their sounding."
        },
        {
                "date": "05/08/2001",
                "title": "Window №7",
                "text": "The Window №7 anomaly is first documented. A guest from Tokyo saw in the window a version of his city where all signs were written in an unknown language. Another visitor that same day saw a snow-covered forest, though it was August outside. The window becomes an object of study for the regulars.",
                "tag": "Window №7",
                "quote": "The window doesn't show what's outside. It shows what's inside."
        },
        {
                "date": "31/10/2003",
                "title": "The Vanishing",
                "text": "The first recorded disappearance. A man orders 'Static Noise,' walks toward the service exit, and does not return. A week later, a postcard arrives from an address that does not exist: 'Everything is fine. I just decided to stay. The coffee is better here.' The postmark is from a city abandoned since 1986.",
                "tag": "Mystery",
                "quote": "Some guests never leave. They become part of the walls."
        },
        {
                "date": "19/04/2005",
                "title": "The Second Vanishing",
                "text": "A young couple enters the café late at night. The next morning, their table is empty, but the cups are still warm. A new entry appears in the guestbook: 'We found the way. Thank you for the coffee. Don't look for us — we are where we should be.' The search yielded no results.",
                "tag": "Mystery",
                "quote": "Some find not coffee here, but an exit."
        },
        {
                "date": "07/03/2008",
                "title": "Scene Change",
                "text": "The first 'Scene Change.' The walls shift from beige to pale green. New lamps appear overnight. Music begins playing from invisible speakers. Regulars notice the changes only a week later. The barista says: 'It happens. The café has moods.' A new section appears on the menu: cold cocktails.",
                "tag": "Evolution",
                "quote": "The café breathes. Sometimes it needs a new coat of paint."
        },
        {
                "date": "23/12/2010",
                "title": "Winter Anomaly",
                "text": "For three days, the café exists simultaneously in two locations across the city. Guests entering through a door on Old Arbat exit through a door in a residential district on the outskirts. No one notices the switch until a regular recognizes the barista in a completely different location. LegitPlayer comments: 'The café expands. This is normal.'",
                "tag": "Anomaly",
                "quote": "Space is just a suggestion. It can be rewritten."
        },
        {
                "date": "15/06/2012",
                "title": "Window №7: New Horizons",
                "text": "Window №7 begins showing impossible views. One guest sees a version of Tokyo where all signs are written in an unknown language. Another sees a city floating in clouds. The window becomes a pilgrimage spot. LegitPlayer leaves a note: 'It shows you what you need to see, not what you want to see.'",
                "tag": "Window №7",
                "quote": "Look long enough, and it will show you home."
        },
        {
                "date": "01/04/2015",
                "title": "The Investor",
                "text": "The café receives investment from Studio 666 — a private organization with interests in liminal spaces. Funding allows for expansion of the menu and renovation of the interior. The secret menu appears: 'Liminal Cola' (sparkling with ozone and vanilla). Studio 666 representatives never appeared in person — all negotiations were conducted through notes left on the bar counter.",
                "tag": "Investment",
                "quote": "New doors open when old ones close."
        },
        {
                "date": "09/09/2017",
                "title": "Night Symphony",
                "text": "On the night of September 9-10, all musical instruments in the café — the piano, a guitar on the wall, even the bell on the entrance door — begin playing simultaneously, without human intervention. The melody lasted exactly 23 minutes. Those present describe it as 'the most beautiful music they had ever heard.' No recording was made — no microphone could capture the sound.",
                "tag": "Music",
                "quote": "Sometimes the café decides what we need to hear."
        },
        {
                "date": "28/02/2019",
                "title": "The Anomaly",
                "text": "An expedition of spatial researchers maps the café. Their conclusion: the interior space is 17% larger than the exterior volume. Two members of the expedition remain as staff. One says: 'I was looking for anomalies. I found peace.' The maps drawn by the expedition are stored in Studio 666's archive.",
                "tag": "Geometry",
                "quote": "The café is bigger on the inside. Always has been."
        },
        {
                "date": "13/05/2020",
                "title": "Silence",
                "text": "In the midst of the global lockdown, the café remains open. Guests come in masks, sit at a distance — though the distance between tables is different each time. LegitPlayer plays the piano every evening. A guestbook entry appears: 'The only place where the world still makes sense.' Attendance during this period is the highest in history.",
                "tag": "Resilience",
                "quote": "When the world closes, some doors remain open."
        },
        {
                "date": "17/08/2022",
                "title": "The Shifting",
                "text": "The 'Scene Change' phenomenon intensifies. The café now shifts every few months. Guests report different experiences depending on when they visit. Some describe a 1950s diner aesthetic. Others see neon lights and mirrors. The coffee remains constant. A new rule is added: 'If you hear \"Scene change in 3 minutes\" — just keep drinking.'",
                "tag": "Liminality",
                "quote": "Change is the only constant. Drink your coffee."
        },
        {
                "date": "03/01/2024",
                "title": "The Digital Door",
                "text": "Digital presence established. This website is part of an experiment to expand the café's influence into the digital liminal space. Studio 666 supports the initiative. The 'Love' modification is created — a radiant counterpart to 'Hatred,' offered as an exclusive menu item. The first digital guest is registered 47 seconds after launch.",
                "tag": "Digital",
                "quote": "The web is a door. We opened it."
        },
        {
                "date": "21/06/2025",
                "title": "Attendance Record",
                "text": "On the summer solstice, the café welcomes 347 guests — an absolute record. Remarkably, the physical space of the hall did not change, yet no one felt cramped. The barista worked a 19-hour shift and, according to him, 'wasn't tired at all.' 512 cups of coffee were served that day. Not a single cup went cold.",
                "tag": "Records",
                "quote": "There is always exactly enough space for the guests."
        },
        {
                "date": "12/03/2026",
                "title": "Present Day",
                "text": "Present day. The café continues to exist between floors. New guests find it through dreams, through doors that weren't there before, through moments of transition. The menu has expanded, but the core remains: good coffee, strange light, and the feeling that you've been here before. LegitPlayer's music still drifts through the speakers. Studio 666 remains a silent partner, funding operations from the shadows.",
                "tag": "Present",
                "quote": "You found this page. Maybe the music led you here."
        },
        {
                "date": "██/██/████",
                "title": "The Fourth Cycle",
                "text": "An undated entry in the guestbook, written in an unidentifiable handwriting: 'Today all three Cycles aligned. The café became more than a café. I saw rooms not on any floor plan. I spoke with people from places that don't exist. The menu included dishes that cannot be described. I don't know how long I've been here. I'm not sure I want to leave.' This is the only possible mention of the Fourth Cycle.",
                "tag": "Unconfirmed",
                "quote": "Some things don't need to be proven. It's enough that they were."
        }
],
    ru: [
    { date: "17/03/1994", title: "Первая дверь", text: "Дверь появляется в заброшенном здании в центре города. Те, кто её находит, описывают тёплый свет и запах корицы. Первая письменная запись: 'Дверь открылась сама. Не уверен, нашёл ли я её или она нашла меня.' Женщина по имени Елена утверждает, что прошла сквозь и оказалась в кафе, которого 'не должно существовать'. Она осталась на чай и оставила набросок стойки - той самой, из тёмного дуба, что стоит до сих пор.", tag: "Происхождение", quote: "Некоторые двери всегда были здесь. Ты просто не был готов их увидеть." },
    { date: "03/06/1994", title: "Первый гость", text: "Елена возвращается - на этот раз с подругой. Они проводят в кафе четыре часа, хотя снаружи проходит всего двадцать минут. Подруга, Мария, оставляет в гостевой книге рисунок: чашка кофе, над которой поднимается пар в форме вопросительного знака.", tag: "Гости", quote: "Время здесь течёт иначе. Ты просто привыкаешь." },
    { date: "22/11/1997", title: "Первое меню", text: "Кафе работает тихо, известно лишь горстке постоянных гостей. Оригинальное меню: 'Синдром дежавю' (латте с солёной карамелью), 'Портал №3' (чёрный кофе с имбирём) и обычный чёрный кофе. Появляется гостевая книга у стойки. Первая запись: 'Лучший кофе, который я пил. Вид из окна №7 меняется каждый раз. Я видел Париж под дождём, потом улицу, которой никогда раньше не видел.'", tag: "Меню", quote: "Кофе на вкус иначе, когда реальность изгибается вокруг тебя." },
    { date: "14/02/1999", title: "Ночной концерт", text: "LegitPlayer впервые играет на пианино в зале при гостях. Присутствовало семь человек. По свидетельствам, музыка меняла цвет стен - с серого на бледно-золотой. Один из гостей, профессиональный пианист, попытался записать мелодию нотами, но на бумаге она распадалась в бессмыслицу. Запись не сохранилась.", tag: "Музыка", quote: "Некоторые вещи существуют только в момент своего звучания." },
    { date: "05/08/2001", title: "Окно №7", text: "Впервые задокументирована аномалия Окна №7. Гость из Токио увидел в окне версию своего города, где все вывески написаны на неизвестном языке. Другой посетитель в тот же день видел заснеженный лес, хотя за окном был август. Окно становится объектом изучения постоянных гостей.", tag: "Окно №7", quote: "Окно показывает не то, что снаружи. Оно показывает то, что внутри." },
    { date: "31/10/2003", title: "Исчезновение", text: "Первое задокументированное исчезновение. Мужчина заказывает 'Статичный шум', направляется к служебному выходу и не возвращается. Спустя неделю приходит открытка из несуществующего адреса: 'Всё в порядке. Я просто решил остаться. Кофе здесь лучше.' Почтовый штемпель из города, заброшенного с 1986 года.", tag: "Тайна", quote: "Некоторые гости никогда не уходят. Они становятся частью стен." },
    { date: "19/04/2005", title: "Второе исчезновение", text: "Молодая пара заходит в кафе поздно вечером. На следующее утро их столик пуст, но чашки всё ещё тёплые. В гостевой книге появляется запись: Мы нашли дорогу. Спасибо за кофе. Не ищите нас - мы там, где должны быть. Поиски не дали результатов.", tag: "Тайна", quote: "Некоторые находят здесь не кофе, а выход." },
    { date: "07/03/2008", title: "Смена сцены", text: "Первая 'Смена сцены'. Стены меняют цвет с бежевого на бледно-зелёный. За ночь появляются новые светильники. Музыка начинает играть из невидимых колонок. Постоянные гости замечают изменения только через неделю. Бармен говорит: 'Так бывает. У кафе есть настроение.' В меню появляется новый раздел: холодные коктейли.", tag: "Эволюция", quote: "Кафе дышит. Иногда ему нужен новый слой краски." },
    { date: "23/12/2010", title: "Зимняя аномалия", text: "В течение трёх дней кафе существует одновременно в двух точках города. Гости, входящие через дверь на Старом Арбате, выходят через дверь в спальном районе на окраине. Никто не замечает подмены, пока один из постоянных гостей не узнаёт бармена в совершенно другом месте. LegitPlayer комментирует: Кафе расширяется. Это нормально.", tag: "Аномалия", quote: "Пространство - это всего лишь предложение. Его можно переписать." },
    { date: "15/06/2012", title: "Окно №7: новые горизонты", text: "Окно №7 начинает показывать невозможные виды. Один гость видит версию Токио, где все вывески написаны на неизвестном языке. Другой видит город, парящий в облаках. Окно становится местом паломничества. LegitPlayer оставляет записку: 'Оно показывает то, что тебе нужно увидеть, а не то, что ты хочешь.'", tag: "Окно №7", quote: "Смотри достаточно долго, и оно покажет тебе дом." },
    { date: "01/04/2015", title: "Инвестор", text: "Кафе получает инвестиции от Студии 666 - частной организации, интересующейся лиминальными пространствами. Финансирование позволяет расширить меню и провести ремонт интерьера. Появляется секретное меню: 'Liminal Cola' (газировка с озоном и ванилью). Представители Студии 666 ни разу не появились лично - все переговоры велись через записки, оставленные на барной стойке.", tag: "Инвестиции", quote: "Новые двери открываются, когда старые закрываются." },
    { date: "09/09/2017", title: "Ночная симфония", text: "В ночь с 9 на 10 сентября все музыкальные инструменты в кафе - пианино, гитара со стены, даже колокольчик на входной двери - начинают играть одновременно, без участия людей. Мелодия длилась ровно 23 минуты. Присутствовавшие описывают её как самую красивую музыку, которую они когда-либо слышали. Запись не велась - ни один микрофон не смог уловить звук.", tag: "Музыка", quote: "Иногда кафе само решает, что нам нужно услышать." },
    { date: "28/02/2019", title: "Аномалия", text: "Экспедиция исследователей пространства составляет карту кафе. Вывод: внутреннее пространство на 17% больше внешнего объёма. Двое участников экспедиции остаются персоналом. Один говорит: 'Я искал аномалии. Я нашёл покой.' Карты, составленные экспедицией, хранятся в архиве Студии 666.", tag: "Геометрия", quote: "Кафе больше изнутри. Так было всегда." },
    { date: "13/05/2020", title: "Тишина", text: "В разгар глобального локдауна кафе остаётся открытым. Гости приходят в масках, рассаживаются на расстоянии - хотя расстояние между столиками каждый раз разное. LegitPlayer играет на пианино каждый вечер. В гостевой книге появляется запись: Единственное место, где мир всё ещё имеет смысл. Посещаемость в этот период - рекордная за всю историю.", tag: "Устойчивость", quote: "Когда мир закрывается, некоторые двери остаются открытыми." },
    { date: "17/08/2022", title: "Перемены", text: "Феномен 'Смены сцены' усиливается. Кафе теперь меняется каждые несколько месяцев. Гости сообщают о разном опыте в зависимости от времени визита. Некоторые описывают эстетику закусочной 50-х. Другие видят неоновые огни и зеркала. Кофе остаётся неизменным. Добавляется новое правило: 'Если вы слышите \"Смена сцены через 3 минуты\" - просто продолжайте пить.'", tag: "Лиминальность", quote: "Перемены - единственная константа. Пей свой кофе." },
    { date: "03/01/2024", title: "Цифровая дверь", text: "Установлено цифровое присутствие. Этот сайт - часть эксперимента по расширению влияния кафе в цифровое лиминальное пространство. Студия 666 поддерживает инициативу. Создана модификация 'Любовь' - сияющий аналог 'Ненависти', предлагаемый как эксклюзивная позиция меню. Первый цифровой гость зарегистрирован через 47 секунд после запуска.", tag: "Цифровое", quote: "Сеть - это дверь. Мы её открыли." },
    { date: "21/06/2025", title: "Рекорд посещаемости", text: "В день летнего солнцестояния кафе принимает 347 гостей - абсолютный рекорд. Примечательно, что физическое пространство зала не изменилось, но никто не чувствовал тесноты. Бармен отработал 19-часовую смену и, по его словам, совершенно не устал. В этот день было подано 512 чашек кофе. Ни одна чашка не остыла.", tag: "Рекорды", quote: "Пространства всегда ровно столько, сколько нужно гостям." },
    { date: "12/03/2026", title: "Наши дни", text: "Настоящее время. Кафе продолжает существовать между этажами. Новые гости находят его через сны, через двери, которых раньше не было, через моменты перехода. Меню расширилось, но основа осталась: хороший кофе, странный свет и ощущение, что ты уже был здесь. Музыка LegitPlayer всё ещё слышна из колонок. Студия 666 остаётся молчаливым партнёром, финансируя работу из тени.", tag: "Настоящее", quote: "Ты нашёл эту страницу. Возможно, музыка привела тебя сюда." },
    { date: "██/██/████", title: "Четвёртый цикл", text: "Запись в гостевой книге без даты, написанная почерком, который не удалось идентифицировать: Сегодня все три Цикла совпали. Кафе стало больше, чем кафе. Я видел комнаты, которых нет в плане. Я говорил с людьми из мест, которых не существует. Меню включало блюда, которые невозможно описать. Я не знаю, сколько времени я здесь. Я не уверен, что хочу уходить. Это единственное возможное упоминание Четвёртого Цикла.", tag: "Неподтверждённое", quote: "Некоторые вещи не должны быть доказаны. Достаточно, что они были." }
]
};
