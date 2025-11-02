BlockEvents.rightClicked('kubejs:ammo_refill_station', event => {
    const { player } = event;
    let refilled = false;

    player.playSound('minecraft:block.note_block.pling', 1.0, 1.0);

    if (event.hand.name() !== 'MAIN_HAND') return; // Ignore offhand
    if (player.isCrouching()) return;

    const config = JsonIO.read('kubejs/config/ammo_config.json');

    for (let [ammoId, amount] of Object.entries(config)) {
      let key = `ammo_${ammoId.replace(':', '_')}`;
      const current = player.persistentData[key] ?? 0;

      if (current < amount) {
        player.persistentData[key] = amount;
        player.tell(`${key}`);
        player.tell(`${amount}`);
        refilled = true;
      }
    }

    if (refilled) {
        event.server.runCommandSilent(`execute at ${player.username} run playsound minecraft:block.anvil.use player ${player.username} ~ ~ ~ 1 0.2`);
        player.displayClientMessage(Text.of("§aAmmo Refilled"), true);
    } else {
        player.tell(`${player.username}`)
        event.server.runCommandSilent(`execute at ${player.username} run playsound minecraft:block.note_block.didgeridoo player ${player.username} ~ ~ ~ 1 0.2`);
        player.displayClientMessage(Text.of("§eAmmo already full."), true);
    }
});

//execute at @a run playsound minecraft:block.note_block.bass player @a 1 0.7