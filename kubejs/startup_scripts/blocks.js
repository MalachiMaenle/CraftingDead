StartupEvents.registry('block', event => {
  event.create('ammo_refill_station')
    .displayName('Ammo Refill Station')
    .material('metal')
    .hardness(3.0)
    .requiresTool(true)
    .soundType('metal');
});