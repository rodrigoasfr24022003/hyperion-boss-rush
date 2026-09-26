let hbrBossTick = (tile, pushTo, allow) => {
    for (let i = 0; i < tile.entities.length; i++) {
        let entity = tile.entities[i];
        if (pushTo == "right" && 
            allow == "blitz" && 
            Config.blitz &&
            entity.isBoss && 
            !entity.control.fire
        ) {
            entity.x += 2 / 0.9;
        }
    }
}
let addTileToBossSpawnTile = (tile, room) => {
    if (!room.spawnable["bossSpawnTile"]) room.spawnable["bossSpawnTile"] = [];
    room.spawnable["bossSpawnTile"].push(tile);
}
tileClass.hbrBossSpawn = new Tile({
    COLOR: "#CBC9FF",
    NAME: "Boss Spawn",
    INIT: (tile, room) => {
        if (!Config.blitz && !Config.fortress && !Config.citadel) addTileToBossSpawnTile(tile, room);
    },
    TICK: (tile, room) => hbrBossTick(tile, "right", "blitz")
});