class HyperionBossRush  {
    constructor() {
        this.room = global.gameManager.room;
        this.waves = [ran.choose([[[2,"hyperion_mk0"]],["hyperion_mkhalf","hyperion_mk1"]]),
        ["crius_mk1","not_crius_mk1"],
        ["orthogon_mk1",[2,"hyperion_mk0"]],
        [[2,"hyperion_mk1f"]],
        ["hyperion_mk1r","hyperion_mk1g","hyperion_mk1b"],
        [[6,"hyperion_mk1f"]],
        [[2,"hyperion_mk1r"],[2,"hyperion_mk1g"],[2,"hyperion_mk1b"]],
        [[4,"not_crius_mk1"],[3,"hyperion_mk1r"]],
        ran.choose([[[12,"hyperion_mk0"]],[[2,"hyperion_mk2"]],[[6,"hyperion_mk1"]]]),
        ran.choose([[[1,"hyperion_mk2r"],[2,"hyperion_mk1r"]],[[1,"hyperion_mk2g"],[2,"hyperion_mk1g"]],[[1,"hyperion_mk2b"],[2,"hyperion_mk1b"]],[[3,"hyperion_mk1r"],[3,"hyperion_mk1g"],[3,"hyperion_mk1b"]]]),
        [[4,"hyperion_mk2"],[3,"hyperion_mk1"],[1,"not_crius_mk1a"]]
        ];
    }
    defineProperties() {
        this.length = Config.wave_cap;
        this.waveId = -1;
        this.gameActive = false;
        this.timer = 0;
        this.remainingEnemies = 0;
    }
    playerWin() {
        if (this.gameActive) {
            this.gameActive = false;
            global.gameManager.socketManager.broadcast('Your team has won the game!');
            setTimeout(() => {global.gameManager.closeArena()}, 1500);
        }
    }
    spawnEnemyWrapper(loc, type) {
        let enemy = new Entity(loc);
        enemy.define(type);
        enemy.team = TEAM_ENEMIES;
        enemy.refreshSkills();
        enemy.refreshBodyAttributes();
        enemy.isBoss = true;
        this.remainingEnemies++;
        enemy.on('dead', () => {
            if (!this.gameActive) return;
            if (!--this.remainingEnemies) {
                global.gameManager.socketManager.broadcast(`Wave ${this.waveId + 1} has been defeated!`);
                global.gameManager.socketManager.broadcast(`The next wave will start shortly.`);
            }
        })
        return enemy;
    }
    spawnWave(waveId) {
        global.gameManager.socketManager.broadcast(`Wave ${waveId + 1} has started!`);
        util.log(`Wave ${waveId + 1} has started!`);
        for (let boss of this.waves[waveId]) {
            if (Array.isArray(boss)){
                for (let i=0; i < boss[0]; i++){
                    let spot = ran.choose(global.gameManager.room.spawnable["bossSpawnTile"]).randomInside();
                    let enemy = this.spawnEnemyWrapper(spot,boss[1]);
                    enemy.define({DANGER:25 + enemy.SIZE/5});
                }
            } else {
                let spot = ran.choose(global.gameManager.room.spawnable["bossSpawnTile"]).randomInside();
                let enemy = this.spawnEnemyWrapper(spot,boss);
                enemy.define({DANGER:25 + enemy.SIZE/5});
            }
        }
    }
    start(){
        this.gameActive = true;
        for (let tile of this.room.spawnable[TEAM_BLUE]) {
            this.color = tile.bluePrint.color;
        }
    }
    reset() {
        this.defineProperties();
    }
    redefine(theshit) {
        this.room = theshit.room;
        this.defineProperties();
    }
    loop() {
        if (global.gameManager.arenaClosed) this.gameActive = false;
        if (!this.gameActive) return;
        if (this.timer <= 0) {
            this.timer = 18;
            this.waveId++;
            if (this.waves[this.waveId]) {
                this.spawnWave(this.waveId);
            } else {
                this.playerWin();
            }
        } else if (!this.remainingEnemies) {
            this.timer--;
        }
    }
}

module.exports = {HyperionBossRush}