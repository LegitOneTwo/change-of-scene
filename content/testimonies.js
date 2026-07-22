// ==================== BILINGUAL DATA ====================
const testimoniesData = {
    en: [
        {
                "id": 0,
                "title": "The Lost Traveler",
                "rating": 8,
                "text": "I was walking through a mall after closing. Suddenly the corridor became longer. It smelled like cinnamon. A door with the inscription \"Change Of Scene\" glowed dim orange. I ordered \"Portal №3\" — after the second sip I found myself at a train station that no longer exists. But I managed to finish my coffee and return.<br>— <strong>anonymous entry</strong>"
        },
        {
                "id": 1,
                "title": "The Night Owl",
                "rating": 9,
                "text": "Sometimes I come here at 3:15 AM. The light is always the same — dim, warm. The waitress nods, though we never speak. I order \"Déjà vu Syndrome\", and as I drink, I remember moments that never actually happened. That's what's most precious.<br>— <strong>regular guest</strong>"
        },
        {
                "id": 2,
                "title": "The Architect",
                "rating": 9,
                "text": "I've been studying liminal spaces for years. Change Of Scene is the only one that feels... intentional. The geometry shifts when you're not looking, but the coffee is always perfect.<br>— <strong>Dr. E. V.</strong>"
        },
        {
                "id": 3,
                "title": "The Musician",
                "rating": 10,
                "text": "The jukebox played a song I'd been trying to write for months — a melody I'd never heard before. I asked the bartender where it came from. He smiled: 'LegitPlayer composed it. He says it was waiting for someone to hear it.' I finally knew how to end my album.<br>— <strong>M.K., composer</strong>"
        },
        {
                "id": 4,
                "title": "The Dreamer",
                "rating": 6,
                "text": "I ordered 'Hatred' on a dare. For three days, I could see the strings holding reality together. Beautiful and terrifying. I'm never ordering it again, but I'm grateful for the glimpse.<br>— <strong>anonymous</strong>"
        },
        {
                "id": 5,
                "title": "The Timekeeper",
                "rating": 10,
                "text": "I've been coming here since 1997. Time flows differently at the corner table. The staff never ages. The espresso is worth the temporal confusion. I once saw LegitPlayer at the piano. He nodded at me and played a chord that sounded like my grandmother's voice.<br>— <strong>oldest regular</strong>"
        },
        {
                "id": 6,
                "title": "The Seeker",
                "rating": 9,
                "text": "The barista told me: 'You don't find Change Of Scene. It finds you when you're ready to change.' I finally understand what that means. I heard a melody from the back room that made me cry — and for the first time, I felt ready to let go.<br>— <strong>L.N.</strong>"
        },
        {
                "id": 7,
                "title": "The Euphoric",
                "rating": 10,
                "text": "I tried 'Love' last week. I'm still smiling. For three days, I saw beauty in everything. And somewhere, a piano played a melody that felt like being held.<br>— <strong>first to try Love</strong>"
        },
        {
                "id": 8,
                "title": "The Skeptic",
                "rating": 4,
                "text": "I don't believe in liminal spaces. My friend dragged me here. The coffee was good, I'll admit. But the corridor outside was definitely longer when I left. I measured it. 47 steps in, 89 steps out. I'll be back tomorrow to measure again.<br>— <strong>M. Chen, physicist</strong>"
        },
        {
                "id": 9,
                "title": "The Caffeine Addict",
                "rating": 7,
                "text": "Best espresso I've ever had. Period. The fact that the barista knew my order before I said it is mildly concerning, but after the third \"Echo Chamber\" I stopped caring. Also, my watch now runs backwards. 7/10 would recommend.<br>— <strong>J.D., software engineer</strong>"
        },
        {
                "id": 10,
                "title": "The Poet",
                "rating": 10,
                "text": "The walls whisper in iambic pentameter. The steam from my latte forms sonnets. I came here with writer's block and left with a chapbook. LegitPlayer's piano doesn't play notes — it plays feelings. I've never been more creatively alive.<br>— <strong>V. Hart, poet laureate</strong>"
        },
        {
                "id": 11,
                "title": "The Runaway",
                "rating": 8,
                "text": "I was running from something. I don't remember what anymore. The café appeared exactly when I needed it. Three cups of 'Cocoa on the Border' later, I realized I wasn't running from anything — I was running toward this. I've been here every Tuesday since.<br>— <strong>E. Rivers</strong>"
        },
        {
                "id": 12,
                "title": "The Collector",
                "rating": 6,
                "text": "I've visited 847 cafés across 42 countries. This one doesn't exist on any map. The napkins have coordinates that lead to places that aren't there. The menu has items I've never seen anywhere else. I give it a 6 because I can't prove I was actually here.<br>— <strong>Prof. A. Wander</strong>"
        },
        {
                "id": 13,
                "title": "The Regular",
                "rating": 10,
                "text": "I don't remember how I first found this place. I just know it's where I belong. The corner booth knows my shape. My coffee is always waiting. Sometimes I think the café chose me, not the other way around. There's no rating high enough for that feeling.<br>— <strong>just another guest</strong>"
        },
        {
                "id": 14,
                "title": "The Insomniac",
                "rating": 9,
                "text": "I haven't slept in 72 hours. This is the only place open. Or maybe it's always open. The barista didn't ask — just poured a 'Midnight Sun' and nodded. I think I saw the sun rise twice in one hour. The coffee helps. I think.<br>— <strong>D. Kross, night shift</strong>"
        },
        {
                "id": 15,
                "title": "The Cartographer",
                "rating": 7,
                "text": "I tried to map the café. The floor plan changes every time I look at it. The hallway to the restroom was 12 meters this morning and 31 meters after lunch. I've drawn 47 versions. None of them match. I'm having the time of my life.<br>— <strong>M. Atlas</strong>"
        },
        {
                "id": 16,
                "title": "The Expat",
                "rating": 8,
                "text": "I'm from a dimension three layers over. This place reminds me of home — not the home I have, but the home I almost had. The 'Liminal Fog' tastes like my grandmother's kitchen. I don't know how. I don't need to know.<br>— <strong>Visitor from L-β</strong>"
        },
        {
                "id": 17,
                "title": "The Detective",
                "rating": 5,
                "text": "I came looking for a missing person. Found them here, three weeks later, completely fine, drinking a 'Portal №3'. They said they 'just needed a break from reality.' Case closed, I guess. The coffee is good. Still have questions.<br>— <strong>Det. K. Morrow</strong>"
        },
        {
                "id": 18,
                "title": "The Philosopher",
                "rating": 9,
                "text": "If a café exists between worlds, does it exist at all? I've spent six hours contemplating this over a single espresso. The espresso never got cold. The question never got answered. I'll be back tomorrow with better questions.<br>— <strong>Prof. S. Kierk</strong>"
        },
        {
                "id": 19,
                "title": "The Glitch",
                "rating": 10,
                "text": "I ordered a 'Glitch Brew'. My reflection in the window blinked when I didn't. The foam on my drink formed binary code. It spelled 'WELCOME HOME'. I've never felt more seen in my life.<br>— <strong>N. N.</strong>"
        },
        {
                "id": 20,
                "title": "The Chef",
                "rating": 8,
                "text": "I'm a Michelin-starred chef. I cannot replicate anything from this menu. The 'Non-Euclidean Brownie' defies pastry physics. The 'Infinite Risotto' is literally infinite — we measured. I'm humbled. I'm inspired. I'm coming back with my entire kitchen staff.<br>— <strong>Chef A. Laurent</strong>"
        },
        {
                "id": 21,
                "title": "The Historian",
                "rating": 9,
                "text": "The archive section mentions events from 1994. I was there in 1994. I remember the door. I remember the smell of cinnamon. I wrote one of the first entries in the guestbook. Finding this website felt like finding myself. Full circle.<br>— <strong>Elena (the first guest)</strong>"
        },
        {
                "id": 22,
                "title": "The Gambler",
                "rating": 6,
                "text": "I bet my friend 5000₽ that this place wasn't real. I lost. The barista overheard and served us both 'The Threshold' on the house. Now I owe my friend 5000₽ and reality feels... optional. Worth it? Debatable.<br>— <strong>V. Royale</strong>"
        },
        {
                "id": 23,
                "title": "The Synesthete",
                "rating": 10,
                "text": "I taste colors here. The mauve walls taste like lavender honey. The peach accents taste like — well, peaches. But the music... the music tastes like starlight. I've never experienced anything like this. Every sense is alive.<br>— <strong>L. Chroma</strong>"
        },
        {
                "id": 24,
                "title": "The Time Traveler",
                "rating": 7,
                "text": "I came here in 2024. Or was it 2028? The calendar on the wall shows different dates depending on where you sit. I ordered a coffee and when I finished it, the clock had gone back 15 minutes. I got an extra break. Not complaining.<br>— <strong>T. Tempus</strong>"
        },
        {
                "id": 25,
                "title": "The Journalist",
                "rating": 8,
                "text": "I'm writing an exposé on unexplained phenomena. This café is the most unexplainable thing I've ever encountered. I've filled three notebooks. My editor thinks I've lost my mind. I think I've finally found it.<br>— <strong>R. Scoop, Daily Anomaly</strong>"
        },
        {
                "id": 26,
                "title": "The Pair",
                "rating": 10,
                "text": "We came here on our first date. The café played our song — a song we'd never told anyone about. We've been married five years now. We still come back every anniversary. The booth remembers us. The coffee tastes like that first night.<br>— <strong>A. & M.</strong>"
        },
        {
                "id": 27,
                "title": "The Bartender",
                "rating": 10,
                "text": "I've worked here for six years. I still don't know where the back room leads. I don't know where the ingredients come from. I don't know how the piano plays itself at 3 AM. I just know this is the best job in any dimension.<br>— <strong>Staff member #4</strong>"
        },
        {
                "id": 28,
                "title": "The Student",
                "rating": 7,
                "text": "I came here to study for finals. Ended up reading a book from the shelf that doesn't exist — it was about the history of a country that never was. Aced my history exam anyway. Correlation or causation? The café doesn't answer questions like that.<br>— <strong>Yuki, university student</strong>"
        },
        {
                "id": 29,
                "title": "The Paranormal Investigator",
                "rating": 5,
                "text": "EMF readings are off the charts. EVP recordings capture piano music that wasn't playing. Thermal imaging shows cold spots in the shape of chairs. My equipment works perfectly. This place is either deeply haunted or deeply bored by my investigation.<br>— <strong>Ghost Hunters Inc.</strong>"
        },
        {
                "id": 30,
                "title": "The Artist",
                "rating": 9,
                "text": "I've painted this café 23 times. Every painting looks different. The lighting never repeats. The shadows fall in ways that shouldn't be possible. My gallery show is next month — all 23 paintings, titled 'Variations on a Place That Isn't'.<br>— <strong>I. Canvas</strong>"
        },
        {
                "id": 31,
                "title": "The Delivery Driver",
                "rating": 8,
                "text": "GPS couldn't find this place. I drove in circles for 40 minutes. Then suddenly — there it was, right where I'd already passed three times. The staff tipped me in coins from a currency I don't recognize. Best delivery of my career.<br>— <strong>M. Ridez</strong>"
        },
        {
                "id": 32,
                "title": "The Therapist",
                "rating": 10,
                "text": "I send my most difficult patients here. Not as therapy — just as a suggestion. Every single one has come back changed. Calmer. More centered. One said the café 'listened better than I ever did.' I'm not offended. I'm curious.<br>— <strong>Dr. F. Hearth</strong>"
        },
        {
                "id": 33,
                "title": "The Child",
                "rating": 10,
                "text": "My mom brought me here. The hot chocolate had marshmallows shaped like stars. The stars moved. A nice man played piano and the notes looked like floating lights. I told my teacher about it and she said I have a 'vivid imagination.' I know what I saw.<br>— <strong>Leo, age 8</strong>"
        }
],
    ru: [
        { id: 0, title: "Заблудший путник", rating: 8, text: "Я шёл по торговому центру после закрытия. Вдруг коридор стал длиннее. Запахло корицей. Дверь с надписью \"Change Of Scene\" светилась тускло-оранжевым. Я заказал \"Портал №3\" - после второго глотка я оказался на станции, которой больше не существует. Но я успел допить кофе и вернуться.<br>- <strong>анонимно</strong>" },
        { id: 1, title: "Ночная сова", rating: 9, text: "Иногда я прихожу сюда в 3:15 ночи. Свет всегда одинаковый - приглушённый, тёплый. Официантка кивает, хотя мы никогда не говорим. Я заказываю \"Синдром дежавю\", и пока пью, вспоминаю моменты, которых на самом деле не было.<br>- <strong>постоянный гость</strong>" },
        { id: 2, title: "Архитектор", rating: 9, text: "Я изучаю лиминальные пространства годами. Change Of Scene - единственное, которое кажется намеренным. Геометрия смещается, когда не смотришь, но кофе всегда идеален.<br>- <strong>Др. Е. В.</strong>" },
        { id: 3, title: "Музыкант", rating: 10, text: "Музыкальный автомат играл песню, которую я пытался написать месяцами - мелодию, которую никогда раньше не слышал. Я спросил бармена, откуда она. Он улыбнулся: 'LegitPlayer сочинил её. Он говорит, она ждала, когда её услышат.' Я наконец понял, как закончить альбом.<br>- <strong>М.К., композитор</strong>" },
        { id: 4, title: "Сновидец", rating: 6, text: "Я заказал 'Ненависть' на спор. Три дня я видел нити, скрепляющие реальность. Красиво и ужасающе. Больше никогда не закажу, но благодарен за взгляд.<br>- <strong>анонимно</strong>" },
        { id: 5, title: "Хранитель времени", rating: 10, text: "Я прихожу сюда с 1997 года. Время течёт иначе за угловым столиком. Персонал не стареет. Эспрессо стоит временной путаницы. Однажды я видел LegitPlayer за пианино. Он кивнул мне и сыграл аккорд, который звучал как голос моей бабушки.<br>- <strong>старейшая гостья</strong>" },
        { id: 6, title: "Искатель", rating: 9, text: "Бармен сказал мне: 'Ты не находишь Change Of Scene. Оно находит тебя, когда ты готов измениться.' Теперь я понимаю. Из задней комнаты донеслась мелодия, которая заставила меня плакать - и впервые я почувствовал, что готов отпустить.<br>- <strong>Л.Н.</strong>" },
        { id: 7, title: "Эйфоричный", rating: 10, text: "Я попробовал 'Любовь' на прошлой неделе. До сих пор улыбаюсь. Три дня я видел красоту во всём. И где-то вдалеке пианино играло мелодию, которая ощущалась как объятие.<br>- <strong>первый, кто попробовал Любовь</strong>" },
        { id: 8, title: "Скептик", rating: 4, text: "Я не верю в лиминальные пространства. Мой друг затащил меня сюда. Кофе был хорош, признаю. Но коридор снаружи определённо стал длиннее, когда я уходил. Я измерил. 47 шагов туда, 89 обратно. Завтра приду с рулеткой.<br>- <strong>М. Чен, физик</strong>" },
        { id: 9, title: "Кофейный маньяк", rating: 7, text: "Лучший эспрессо в моей жизни. Точка. То, что бариста знал мой заказ до того, как я его сделал, слегка напрягает, но после третьей \"Камеры Эха\" мне стало всё равно. Кстати, мои часы теперь идут назад. 7/10, рекомендую.<br>- <strong>Дж.Д., программист</strong>" },
        { id: 10, title: "Поэт", rating: 10, text: "Стены шепчут ямбом. Пар от моего латте складывается в сонеты. Я пришёл с творческим кризисом, ушёл со сборником стихов. Пианино LegitPlayer играет не ноты - оно играет чувства. Никогда не был так творчески жив.<br>- <strong>В. Харт, поэт-лауреат</strong>" },
        { id: 11, title: "Беглец", rating: 8, text: "Я бежал от чего-то. Уже не помню от чего. Кафе появилось именно тогда, когда было нужно. Три чашки \"Какао на границе\" спустя, я понял - я не убегал, я бежал к этому месту. Теперь я здесь каждый вторник.<br>- <strong>Е. Риверс</strong>" },
        { id: 12, title: "Коллекционер", rating: 6, text: "Я посетил 847 кафе в 42 странах. Этого нет ни на одной карте. На салфетках координаты мест, которых не существует. В меню позиции, которых я нигде не видел. Ставлю 6, потому что не могу доказать, что я здесь был.<br>- <strong>Проф. А. Вандер</strong>" },
        { id: 13, title: "Завсегдатай", rating: 10, text: "Я не помню, как впервые нашёл это место. Просто знаю, что здесь моё место. Угловой диван знает мои очертания. Мой кофе всегда ждёт. Иногда мне кажется, что это кафе выбрало меня, а не наоборот. Для такого чувства нет достаточно высокой оценки.<br>- <strong>просто ещё один гость</strong>" },
        { id: 14, title: "Бессонник", rating: 9, text: "Я не спал 72 часа. Это единственное открытое место. Или оно всегда открыто. Бариста не спросил - просто налил 'Полночное солнце' и кивнул. Кажется, я видел рассвет дважды за час. Кофе помогает. Наверное.<br>- <strong>Д. Кросс, ночная смена</strong>" },
        { id: 15, title: "Картограф", rating: 7, text: "Я пытался составить карту кафе. План меняется каждый раз, когда смотришь. Коридор в туалет был 12 метров утром и 31 после обеда. Я нарисовал 47 версий. Ни одна не совпадает. Лучшее время в моей жизни.<br>- <strong>М. Атлас</strong>" },
        { id: 16, title: "Экспат", rating: 8, text: "Я из измерения тремя слоями дальше. Это место напоминает мне о доме - не о том, что есть, а о том, что почти был. 'Лиминальный туман' на вкус как кухня моей бабушки. Не знаю как. И не нужно знать.<br>- <strong>Гость из L-β</strong>" },
        { id: 17, title: "Детектив", rating: 5, text: "Я искал пропавшего человека. Нашёл его здесь три недели спустя, абсолютно нормального, пьющего 'Портал №3'. Сказал, что 'просто нужна была пауза от реальности'. Дело закрыто, полагаю. Кофе хорош. Вопросы остались.<br>- <strong>Дет. К. Морроу</strong>" },
        { id: 18, title: "Философ", rating: 9, text: "Если кафе существует между мирами, существует ли оно вообще? Я провёл шесть часов, размышляя над этим за одним эспрессо. Эспрессо не остыл. Ответ не нашёлся. Завтра приду с вопросами получше.<br>- <strong>Проф. С. Кьерк</strong>" },
        { id: 19, title: "Глитч", rating: 10, text: "Я заказал 'Глитч-завар'. Моё отражение в окне моргнуло, хотя я не моргал. Пенка сложилась в двоичный код. Он гласил: 'ДОБРО ПОЖАЛОВАТЬ ДОМОЙ'. Никогда не чувствовал себя более увиденным.<br>- <strong>Н. Н.</strong>" },
        { id: 20, title: "Шеф-повар", rating: 8, text: "Я шеф-повар со звездой Мишлен. Я не могу воспроизвести ничего из этого меню. 'Неевклидов брауни' нарушает законы кондитерской физики. 'Бесконечное ризотто' буквально бесконечно - мы измеряли. Я унижен. Я вдохновлён. Я возвращаюсь со всей кухонной бригадой.<br>- <strong>Шеф А. Лоран</strong>" },
        { id: 21, title: "Историк", rating: 9, text: "В архиве упоминаются события 199█ года. Я была там в 199█. Я помню дверь. Помню запах корицы. Я написала одну из первых записей в гостевой книге. Найти этот сайт - как найти себя. Круг замкнулся.<br>- <strong>Елена (первая гостья)</strong>" },
        { id: 22, title: "Игрок", rating: 6, text: "Я поспорил с другом на 5000₽, что этого места не существует. Проиграл. Бариста услышал и угостил нас обоих 'Порогом'. Теперь я должен другу 5000₽, а реальность кажется... опциональной. Стоило ли? Спорно.<br>- <strong>В. Рояль</strong>" },
        { id: 23, title: "Синестет", rating: 10, text: "Я чувствую цвета на вкус. Сиреневые стены - лавандовый мёд. Персиковые акценты - ну, персики. Но музыка... музыка на вкус как звёздный свет. Никогда не испытывал ничего подобного. Все чувства живы.<br>- <strong>Л. Хрома</strong>" },
        { id: 24, title: "Путешественник во времени", rating: 7, text: "Я пришёл сюда в 2024. Или в 2028? Календарь на стене показывает разные даты в зависимости от того, где сидишь. Заказал кофе, а когда допил - часы ушли на 15 минут назад. Получил лишний перерыв. Не жалуюсь.<br>- <strong>Т. Темпус</strong>" },
        { id: 25, title: "Журналист", rating: 8, text: "Я пишу разоблачение о необъяснимых явлениях. Это кафе - самое необъяснимое из всего, что я встречал. Исписал три блокнота. Редактор думает, что я сошёл с ума. А я думаю, что наконец его обрёл.<br>- <strong>Р. Скуп, Daily Anomaly</strong>" },
        { id: 26, title: "Пара", rating: 10, text: "Мы пришли сюда на первое свидание. Кафе сыграло нашу песню - песню, о которой мы никому не говорили. Мы женаты пять лет. До сих пор приходим на каждую годовщину. Диван помнит нас. Кофе на вкус как тот первый вечер.<br>- <strong>А. и М.</strong>" },
        { id: 27, title: "Бармен", rating: 10, text: "Я работаю здесь шесть лет. До сих пор не знаю, куда ведёт задняя комната. Не знаю, откуда берутся ингредиенты. Не знаю, как пианино играет само в 3 часа ночи. Просто знаю, что это лучшая работа в любом измерении.<br>- <strong>Сотрудник №4</strong>" },
        { id: 28, title: "Студентка", rating: 7, text: "Пришла готовиться к экзаменам. В итоге прочла книгу с полки, которой не существует - об истории страны, которой никогда не было. Сдала историю на отлично. Корреляция или причинность? Кафе на такие вопросы не отвечает.<br>- <strong>Юки, студентка</strong>" },
        { id: 29, title: "Охотники за привидениями", rating: 5, text: "ЭМП-датчики зашкаливают. EVP-записи ловят фортепианную музыку, которая не играла. Тепловизор показывает холодные пятна в форме стульев. Оборудование работает идеально. Это место либо глубоко населено призраками, либо глубоко равнодушно к нашему расследованию.<br>- <strong>Ghost Hunters Inc.</strong>" },
        { id: 30, title: "Художник", rating: 9, text: "Я написал это кафе 23 раза. Каждая картина выглядит иначе. Освещение никогда не повторяется. Тени падают так, как невозможно. Моя выставка в следующем месяце - все 23 картины, 'Вариации на тему места, которого нет'.<br>- <strong>И. Канвас</strong>" },
        { id: 31, title: "Курьер", rating: 8, text: "GPS не мог найти это место. Кружил 40 минут. Потом внезапно - вот оно, там, где я уже проезжал трижды. Сотрудники дали чаевые монетами неизвестной мне валюты. Лучшая доставка в карьере.<br>- <strong>М. Райдез</strong>" },
        { id: 32, title: "Терапевт", rating: 10, text: "Я отправляю сюда самых сложных пациентов. Не как терапию - просто как предложение. Каждый вернулся изменившимся. Спокойнее. Собраннее. Один сказал, что кафе 'слушало лучше, чем я когда-либо'. Я не обижен. Мне любопытно.<br>- <strong>Др. Ф. Харт</strong>" },
        { id: 33, title: "Ребёнок", rating: 10, text: "Меня привела мама. Горячий шоколад был с маршмеллоу в форме звёзд. Звёзды двигались. Добрый дядя играл на пианино, и ноты выглядели как летающие огоньки. Я рассказал учительнице, она сказала, что у меня 'живое воображение'. Я знаю, что я видел.<br>- <strong>Лёва, 8 лет</strong>" }
]
};
