// ==================== CAFÉ STATE ====================
// Display text for the two rhythms the café follows:
//   - the Cycle  — slow, seasonal (spring / summer / autumn-winter)
//   - the Scene  — fast, hourly (the current form of the room)
// cafeRhythm holds the rules that decide which one is "now"; it never changes.

const sceneData = {
    en: {
        cycles: {
            echoes: {
                icon: "🪞",
                name: "The Cycle of Echoes",
                desc: "Mirrors show the past, music leans to minor keys. Time for nostalgia."
            },
            thresholds: {
                icon: "🚪",
                name: "The Cycle of Thresholds",
                desc: "New doors, new passages, experimental menu. Time for decisions."
            },
            stillness: {
                icon: "🕯️",
                name: "The Cycle of Stillness",
                desc: "The café contracts, the light warms, the menu shrinks. Time for rest."
            }
        },
        scenes: {
            dawn: {
                icon: "🌅",
                name: "Dawn Shift",
                desc: "Pale light, empty chairs, the first espresso of the day."
            },
            day: {
                icon: "🎲",
                name: "Diner Hours",
                desc: "Chrome accents, checkered floors, a jukebox from decades ahead."
            },
            evening: {
                icon: "📖",
                name: "Evening Reading",
                desc: "Velvet armchairs, gas lamps, the smell of old books and Earl Grey."
            },
            night: {
                icon: "🌙",
                name: "Night Sessions",
                desc: "After 2 AM the piano starts on its own. No one records it."
            }
        }
    },
    ru: {
        cycles: {
            echoes: {
                icon: "🪞",
                name: "Цикл Эха",
                desc: "Зеркала показывают прошлое, музыка тяготеет к минору. Время ностальгии."
            },
            thresholds: {
                icon: "🚪",
                name: "Цикл Порогов",
                desc: "Новые двери, новые проходы, экспериментальное меню. Время решений."
            },
            stillness: {
                icon: "🕯️",
                name: "Цикл Тишины",
                desc: "Кафе сжимается, свет теплеет, меню сокращается. Время покоя."
            }
        },
        scenes: {
            dawn: {
                icon: "🌅",
                name: "Утренняя смена",
                desc: "Бледный свет, пустые стулья, первый эспрессо дня."
            },
            day: {
                icon: "🎲",
                name: "Дневные часы",
                desc: "Хромированные акценты, клетчатый пол, музыкальный автомат из будущего."
            },
            evening: {
                icon: "📖",
                name: "Вечернее чтение",
                desc: "Бархатные кресла, газовые лампы, запах старых книг и Эрл Грея."
            },
            night: {
                icon: "🌙",
                name: "Ночные сессии",
                desc: "После двух ночи пианино начинает играть само. Никто не записывает."
            }
        }
    }
};

// Rules: which Cycle a month belongs to, which Scene an hour belongs to.
const cafeRhythm = {
    cycles: [
        { key: 'echoes', months: [3, 4, 5] },                              // spring
        { key: 'thresholds', months: [6, 7, 8] },                          // summer
        { key: 'stillness', months: [9, 10, 11, 12, 1, 2] }                // autumn/winter
    ],
    scenes: [
        { key: 'dawn', from: 5, to: 9 },
        { key: 'day', from: 9, to: 17 },
        { key: 'evening', from: 17, to: 22 },
        { key: 'night', from: 22, to: 5 }
    ]
};
