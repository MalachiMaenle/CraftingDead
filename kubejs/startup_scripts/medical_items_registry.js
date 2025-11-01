StartupEvents.registry('item', event => {

  // === Bandage ===
  event.create('bandage')
    .displayName('Bandage')
    .texture('kubejs:item/healing_items/bandage')
    .tooltip('Stops the bleeding, mostly.\nRegenerates 4 health over 5 seconds')
    .food(food => {
      food
        .alwaysEdible()
        .fastToEat()
        .effect('minecraft:regeneration', 100, 1, 1.0)
    })
    .maxStackSize(16)
    .useAnimation('eat')

  // === Morphine Injector ===
  event.create('morphine')
    .displayName('Morphine Injector')
    .texture('kubejs:item/healing_items/morphine')
    .tooltip('Takes the pain away... all of it.\nInstantly gives 4 health\nRegenerates 8 health over 5 seconds\nGives nausea and weakness')
    .unstackable()
    .food(food => {
      food
        .alwaysEdible()
        .fastToEat()
        .effect('minecraft:instant_health', 1, 0, 1.0)
        .effect('minecraft:regeneration', 100, 2, 1.0)
        .effect('minecraft:weakness', 300, 0, 1.0)
        .effect('minecraft:nausea', 100, 0, 1.0)
        .eaten(ctx => {
          const player = ctx.player
          if (player) {
            player.give(Item.of('kubejs:empty_syringe'))
          }
        })
    })
    .useAnimation('drink')

  // === Empty Syringe ===
  event.create('empty_syringe')
    .displayName('Empty Syringe')
    .texture('kubejs:item/healing_items/empty_syringe')
    .tooltip('Used. Handle with care.')
    .maxStackSize(16)

  // === Health Pack ===
  event.create('health_pack')
    .displayName('Health Pack')
    .texture('kubejs:item/healing_items/health_pack')
    .tooltip('Makes you feel like a new person.\nInstantly gives 8 Health\nRegenerates 16 health over 10 seconds')
    .unstackable()
    .maxDamage(4)
    .food(food => {
      food
        .alwaysEdible()
        .effect('minecraft:instant_health', 1, 1, 1.0)
        .effect('minecraft:regeneration', 200, 2, 1.0)
    })
    .useAnimation('drink')

  // === Combat Stim ===
  event.create('combat_stim')
    .displayName('Combat Stim')
    .texture('kubejs:item/healing_items/combat_stim')
    .tooltip('Makes you feel like a new person.')
    .unstackable()
    .maxDamage(4)
    .food(food => {
      food
        .alwaysEdible()
        .effect('minecraft:instant_health', 3, 3, 1.0)
        .effect('minecraft:regeneration', 300, 2, 1.0)
        .effect('minecraft:resistance', 300, 2, 1.0)
        .effect('minecraft:speed', 300, 1, 1.0)
        .effect('minecraft:strength', 300, 1, 1.0)
    })
    .useAnimation('drink')
})
