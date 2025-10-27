StartupEvents.registry('item', event => {

  // === Bandage ===
  event.create('bandage')
    .displayName('Bandage')
    .texture('kubejs:item/bandage')
    .tooltip('Stops the bleeding, mostly.')
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
    .texture('kubejs:item/morphine')
    .tooltip('Takes the pain away... all of it.')
    .unstackable()
    .food(food => {
      food
        .alwaysEdible()
        .fastToEat()
        .effect('minecraft:instant_health', 0, 0, 1.0)
        .effect('minecraft:regeneration', 120, 2, 1.0)
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
    .texture('kubejs:item/empty_syringe')
    .tooltip('Used. Handle with care.')
    .maxStackSize(16)

  // === Health Pack ===
  event.create('health_pack')
    .displayName('Health Pack')
    .texture('kubejs:item/health_pack')
    .tooltip('Makes you feel like a new person.')
    .unstackable()
    .maxDamage(4)
    .food(food => {
      food
        .alwaysEdible()
        .effect('minecraft:instant_health', 1, 1, 1.0)
        .effect('minecraft:regeneration', 300, 2, 1.0)
    })
    .useAnimation('drink')

  // === Combat Stim ===
  event.create('combat_stim')
    .displayName('Combat Stim')
    .texture('kubejs:item/combat_stim')
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
