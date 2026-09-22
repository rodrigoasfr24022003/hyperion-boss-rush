const {combineStats, makeMenu, makeTurret} = require('../../../../facilitators.js')
const {base, statnames} = require('../../../../constants.js')
const g = require('../../../../gunvals.js')
const {damageOnTick, iceOnTick} = require("../../../effects.js")

Class.awp_sqrt_2_base = {
    PARENT: "miniboss",
    LABEL: "Hyperion Base",
    COLOR: 13,
    SIZE: 36,
    SHAPE: 7,
    VALUE: 1e5,
    SKILL: [5, 9, 9, 9, 5, 1, 0, 9, 1, 0],
    BODY: {
        FOV: 1.5,
        SPEED: 0.15 * base.SPEED,
        HEALTH: (2+2/9)* 9 * base.HEALTH,
        DAMAGE: 4.5 * base.DAMAGE,
        REGEN: 0.5 * base.REGEN
    },
    FACING_TYPE: 'toTarget'
}

Class.awp_sqrt_2_triangle_body_1 = {
    SHAPE: 3,
    COLOR: 13,
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: {
                LENGTH: 25,
                WIDTH: 7,
                Y: -10,
                X: -10
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 15,
                Y: -10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.turret]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}

Class.awp_sqrt_2_triangle_body_2 = {
    SHAPE: 3,
    COLOR: 13,
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: {
                LENGTH: 32,
                WIDTH: 8,
                ANGLE: 180
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.turret]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 13,
                WIDTH: 8,
                ASPECT: -2.2,
                ANGLE: 180
            }
        }
    ],
    TURRETS: [{
        POSITION: [10, 0, 0, 180, 60, 1],
        TYPE: ["autoTurret", {INDEPENDENT: true}]
    }]
}

Class.awp_sqrt_2 = {
    PARENT: 'awp_sqrt_2_base',
    LABEL: "AWP-sqrt(2)",
    UPGRADE_TOOLTIP: "Not the one made by Kot",
    UPGRADE_LABEL: "AWP-sqrt(2)",
    UPGRADE_COLOR: 13,
    TOOLTIP: "Not the one made by Kot",
    FACING_TYPE: ["spin", {speed: 0.02}],
    BODY: {
        FOV: 2
    },
    STAT_NAMES: statnames.mixed,
    GUNS: [
        /*
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 6
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunterSecondary, g.noRecoil]),
                TYPE: 'bullet'
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.noRecoil]),
                TYPE: 'bullet'
            }
        }
        */
    ],
    TURRETS: []
}

for (let i=0; i<7; i++){
    Class.awp_sqrt_2.TURRETS.push({
        POSITION: [7, 12.5, 0, (360/14)*(2*i-1), 0, 0],
        TYPE: "awp_sqrt_2_triangle_body_1",
    },{
        POSITION: [7, -15.75, -5.25, (360/14)*(2*i-1)+180, 0, 0],
        TYPE: "awp_sqrt_2_triangle_body_2",
    })
}

Class.menu_awp_sqrt_2_variants = makeMenu("AWP-sqrt(2) Variants", {upgrades: [
    'awp_sqrt_2'
]});

Class.menu_awp_sqrt_2_variants.UPGRADE_COLOR = 13