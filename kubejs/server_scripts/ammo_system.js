let maxAmmo = {
  "tacz:9mm": 300,
  "tacz:50ae": 100,
  "tacz:12g": 80,
  "tacz:556mm": 200,
  "tacz:762mm": 150
}

ItemEvents.canPickUp('tacz:ammo', event => {
  const { item, player } = event
  const id = item.id

  if (!id.startsWith('tacz:ammo')) return

  const tag = item.nbt
  const ammoId = tag.AmmoId
  const key = `ammo_${ammoId.replace(':', '_')}`
  const max = maxAmmo[ammoId]
  const current = player.persistentData[key] ?? 0
  const stackCount = item.count
  const canAdd = Math.min(max - current, stackCount)

  if (canAdd <= 0) {
    event.cancel()
  }
  
  player.playSound('minecraft:entity.item.pickup', 1.0, 1.0)
  
  player.persistentData[key] = current + canAdd
  item.count = stackCount - canAdd

  // player.tell(`§ePicked up: \n§bID: ${id}\nTag: ${tag}\nAmmo ID: ${ammoId}\nKey: ${key}\nStack Count: ${stackCount}\nCurrent Ammo: ${current + canAdd}\nMax Ammo: ${max}\nCan Add: ${canAdd}`)

  event.cancel()
})

ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event
  event.register(
    Commands.literal('ammo')
      .executes(ctx => {
        const player = ctx.source.player
        if (player) {
          for (const [ammoId, max] of Object.entries(maxAmmo)) {
            let key = `ammo_${ammoId.replace(':', '_')}`
            let current = player.persistentData[key] ?? 0
            player.tell(`${ammoId}: ${current}/${max}`)
          }
        }
        return 1
      })
  )
  event.register(
    Commands.literal('resetAmmo')
      .executes(ctx => {
        const player = ctx.source.player
        if (player) {
          for (const [ammoId, max] of Object.entries(maxAmmo)) {
            let key = `ammo_${ammoId.replace(':', '_')}`
            player.persistentData[key] = 0
            player.tell(`Reset ${ammoId}, Max: ${max}`)
          }
        }
        return 1
      })
  )
})

ServerEvents.tick(event => {
  const players = event.server.players;
  for (const player of players) {
    const ammo9mm = player.persistentData.ammo_tacz_9mm ?? 0;
    const ammo50ae = player.persistentData.ammo_tacz_50ae ?? 0;
    const ammo12g = player.persistentData.ammo_tacz_12g ?? 0;

    player.sendData('ammo_sync', {ammo9mm: ammo9mm});
    player.sendData('ammo_sync', {ammo50ae: ammo50ae});
    player.sendData('ammo_sync', {ammo12g: ammo12g});
  }
});

