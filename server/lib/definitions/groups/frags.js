const { combineStats, makeAuto, weaponArray, weaponMirror } = require('../facilitators.js');
const g = require('../gunvals.js');
const {base, statnames} = require('../constants.js')

Class.frag1bullet = {
    PARENT: "bullet",
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 4
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
                TYPE: ['bullet', {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true
            }
        }
    ]
};

Class.frag2bullet = {
    PARENT: "bullet",
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 4,
                ANGLE: 90
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
                TYPE: ['bullet', {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 4,
                ANGLE: 270
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
                TYPE: ['bullet', {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true
            }
        }
    ]
};

Class.weakFrag2bullet = {
    PARENT: "bullet",
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 4,
                ANGLE: 90
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowPower]),
                TYPE: ['bullet', {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 4,
                ANGLE: 270
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowPower]),
                TYPE: ['bullet', {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true
            }
        }
    ]
};

Class.frag3_2bullet = {
    PARENT: "bullet",
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 4,
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
                TYPE: ['weakFrag2bullet', {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 4,
                ANGLE: 120
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
                TYPE: ['weakFrag2bullet', {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 4,
                ANGLE: 240
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
                TYPE: ['weakFrag2bullet', {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true
            }
        }
    ]
}