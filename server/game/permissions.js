// PERMISSION LEVELS
// - level: 0 // Player
// - level: 1 // Arena Conductor // basic stuff
// - level: 2 // Arena Supervisor // level 1 + advanced stuff
// - level: 3 // Arena Operator // level 2 + everything else

// todo: be more specific here

module.exports = [
    {
        key: process.env.BETA_TESTER1,
        level: 2,
        class: "menu_betaTester",
        nameColor: "#3300ff",
        note: "note here"
    },
    {
        key: process.env.BETA_TESTER2,
        level: 2,
        class: "menu_betaTester",
        nameColor: "#4d4d4d",
        note: "note here"
    },
    {
        key: process.env.BETA_TESTER3,
        level: 2,
        class: "menu_betaTester",
        nameColor: "#fe7e6e",
        note: "note here"
    },
    {
        key: process.env.DEVELOPER,
        administrator: true,
        level: 3,
        class: "menu_special",
        nameColor: "#003153",
        note: "note here"
    }
]
