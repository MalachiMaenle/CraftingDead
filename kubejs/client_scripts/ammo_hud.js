let clientAmmo = {
  "9mm": 0,
  "50ae": 0,
  "12g": 0
};


ClientEvents.loggedIn(event => {
  const xShift = 5
  const yShift = 50
  const itemScale = 16
  const textScale = 1
  const player = event.player
  let i = 0

  player.paint({
    item_1: {
      type: 'atlas_texture',
      texture: "kubejs:item/ammo/9mm",
      x: xShift, y: yShift + 40,
      alignX: 'left', alignY: 'top',
      draw: 'ingame',
      overlay: false,
      w: itemScale,
      h: itemScale
    },
    text_1: {
      type: 'text',
      text: '0/300',
      x: xShift + 20, y: yShift + 45,
      alignX: 'left', alignY: 'top',
      draw: 'ingame',
      shadow: true,
      scale: textScale,
      color: '#FFD54F'
    },
    item_2: {
      type: 'atlas_texture',
      texture: "kubejs:item/ammo/50ae",
      x: xShift, y: yShift + 60,
      alignX: 'left', alignY: 'top',
      draw: 'ingame',
      overlay: false,
      w: itemScale,
      h: itemScale
    },
    text_2: {
      type: 'text',
      text: '0/100',
      x: xShift + 20, y: yShift + 65,
      alignX: 'left', alignY: 'top',
      draw: 'ingame',
      shadow: true,
      scale: textScale,
      color: '#FFD54F'
    },
    item_3: {
      type: 'atlas_texture',
      texture: "kubejs:item/ammo/12g",
      x: xShift, y: yShift + 80,
      alignX: 'left', alignY: 'top',
      draw: 'ingame',
      overlay: false,
      w: itemScale,
      h: itemScale
    },
    text_3: {
      type: 'text',
      text: '0/80',
      x: xShift + 20, y: yShift + 85,
      alignX: 'left', alignY: 'top',
      draw: 'ingame',
      shadow: true,
      scale: textScale,
      color: '#FFD54F'
    }
  })
})

// listen for network sync
NetworkEvents.dataReceived('ammo_sync', event => {
  const data = event.data;
  clientAmmo["9mm"] = data.ammo9mm ?? clientAmmo["9mm"];
  clientAmmo["50ae"] = data.ammo50ae ?? clientAmmo["50ae"];
  clientAmmo["12g"] = data.ammo12g ?? clientAmmo["12g"];
});

// render HUD
ClientEvents.tick(() => {
  const player = Client.player;
  if (!player) return;
  player.paint({
    text_1: { text: `${clientAmmo["9mm"]}/300`, visible: true },
    text_2: { text: `${clientAmmo["50ae"]}/100`, visible: true },
    text_3: { text: `${clientAmmo["12g"]}/80`, visible: true },
  });
});