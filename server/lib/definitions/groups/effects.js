const timer = (run, duration) => {
    let timer = setInterval(() => run(), 31.25);
    setTimeout(() => {
        clearInterval(timer);
    }, duration * 1000);
};
const damageOnTick = (body, instance, multiplier, duration, stopAtSetHealth, hitsOwnTeam) => {
    if (!instance) return
    if (!instance.damageOnTicking && !instance.godmode && !instance.invuln && (instance.type == "tank" || instance.type == "food" || instance.type == "miniboss" || instance.type == "crasher") && instance.team != body.team) {
        instance.damageOnTicking = true;
        setTimeout(() => {
            instance.damageOnTicking = false;
        }, 2 * duration * 1000);
        timer(() => {
            if (instance.damageOnTicking && instance.health.amount > stopAtSetHealth && instance.health.amount - (multiplier * 0.5) > stopAtSetHealth) {
                instance.health.amount -= multiplier * 0.5;
            } //else {if (instance.health.amount - (multiplier * 0.5) < stopAtSetHealth) {instance.health.amount === stopAtSetHealth}}
        }, 2 * duration);
    }
};
const iceOnTick = (body, instance, multiplier, duration, hitsOwnTeam) => {
    if (!instance) return
    if (!instance.invuln && !instance.godmode && (instance.type == "tank" || instance.type == "food" || instance.type == "miniboss" || instance.type == "crasher") && instance.team != body.team) timer(() => {
        instance.velocity.x /= 1.05 * multiplier;
        instance.velocity.y /= 1.05 * multiplier;
    }, 1.5 * duration);
};
Class.effectBulletDeco = {}
Class.poisonbullet = {
    PARENT: "bullet",
      TURRETS: [{
        POSITION: [5.5, 0, 0, 0, 0, 1],
        TYPE: ["effectBulletDeco", { color: "green" }]
      }],
      ON: [{
        event: "damage",
        handler: ({ body, damageTool }) => {
             damageOnTick(body, damageTool[0], 1, 1, 1, true);
         }
    }]
}
Class.icebullet = {
    PARENT: "bullet",
    TURRETS: [{
        POSITION: [5.5, 0, 0, 0, 0, 1],
        TYPE: ["effectBulletDeco", { color: "#28B1DE" }]
    }],
    ON: [{
        event: "damage",
        handler: ({ body, damageTool }) => {
            iceOnTick(body, damageTool[0], 1, 1, true);
        }
    }]
}
Class.poisonplusbullet = {
    PARENT: "bullet",
      TURRETS: [{
        POSITION: [5.5, 0, 0, 0, 0, 1],
        TYPE: ["effectBulletDeco", { color: "green" }]
      }],
      ON: [{
        event: "damage",
        handler: ({ body, damageTool }) => {
             damageOnTick(body, damageTool[0], 1, 2, 1, true);
         }
    }]
}
Class.iceplusbullet = {
    PARENT: "bullet",
    TURRETS: [{
        POSITION: [5.5, 0, 0, 0, 0, 1],
        TYPE: ["effectBulletDeco", { color: "#28B1DE" }]
    }],
    ON: [{
        event: "damage",
        handler: ({ body, damageTool }) => {
            iceOnTick(body, damageTool[0], 1, 2, true);
        }
    }]
}
Class.poison2bullet = {
    PARENT: "bullet",
      TURRETS: [{
        POSITION: [5.5, 0, 0, 0, 0, 1],
        TYPE: ["effectBulletDeco", { color: "green" }]
      }],
      ON: [{
        event: "damage",
        handler: ({ body, damageTool }) => {
             damageOnTick(body, damageTool[0], 2, 1, 1, true);
         }
    }]
}
Class.ice2bullet = {
    PARENT: "bullet",
    TURRETS: [{
        POSITION: [5.5, 0, 0, 0, 0, 1],
        TYPE: ["effectBulletDeco", { color: "#28B1DE" }]
    }],
    ON: [{
        event: "damage",
        handler: ({ body, damageTool }) => {
            iceOnTick(body, damageTool[0], 2, 1, true);
        }
    }]
}

module.exports = {damageOnTick, iceOnTick}