ServerEvents.recipes(event => {
  event.remove({ type: 'minecraft:crafting_shaped' });
  event.remove({ type: 'minecraft:crafting_shapeless' });
  event.remove({ type: 'minecraft:campfire_cooking' });

  event.campfireCooking(
    { item: 'kubejs:leather_canteen_full' },
    { item: 'thirstcanteen:leather_canteen_full' }
  )
    .cookingTime(80);
});