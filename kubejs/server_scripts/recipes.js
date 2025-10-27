// kubejs/server_scripts/disable_crafting.js

ServerEvents.recipes(event => {
  // Remove *all* crafting table recipes
  event.remove({ type: 'minecraft:crafting_shaped' })
  event.remove({ type: 'minecraft:crafting_shapeless' })

  // event.keep({ output: 'minecraft:torch' })
})