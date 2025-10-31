ItemEvents.canPickUp(event => {
    const item = event.item;
    const player = event.player;

    if (item.id === 'kubejs:leather_canteen_full') {
        const tag = item.nbt;
        const contain = tag.Contain;

        player.give(Item.of('thirstcanteen:leather_canteen_full', { Contain: contain, Purity: 2 }));

        item.count = 0;

        event.cancel();
    }
});

EntityEvents.spawned(event => {
    const entity = event.entity;
    if (entity.type !== 'minecraft:item') return;

    const stack = entity.item;
    if (stack.id === 'thirstcanteen:leather_canteen_full' && stack.nbt?.Contain !== undefined) {
        entity.persistentData.containValue = stack.nbt.Contain;
    }
});

EntityEvents.spawned(event => {
    const entity = event.entity;
    if (entity.type !== 'minecraft:item') return;

    const stack = entity.item;
    if (stack.id === 'kubejs:leather_canteen_full') {
        const nearby = entity.level.getEntitiesWithin(
            entity.x, entity.y, entity.z, 1,
            e => e.type === 'minecraft:item' && e.persistentData?.containValue
        );

        if (nearby.length > 0) {
            const source = nearby[0];
            entity.persistentData.contain = source.persistentData.containValue;
        }
    }
});