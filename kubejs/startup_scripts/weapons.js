// kubejs/startup_scripts/weapons.js
// ===========================================================
// ===               MELEE WEAPONS & TOOLS                 ===
// ===========================================================

StartupEvents.registry('item', event => {

    // === BOWIE KNIFE ===
    event.create('bowie_knife', 'sword')
        .displayName('Bowie Knife')
        .tooltip('Sharp, reliable, and surprisingly clean.')
        .tier('iron')
        .attackDamageBaseline(5.0)
        .speedBaseline(0)
        .maxDamage(35)
        .texture('kubejs:item/weapons/bowie_knife')
    // 🖼️ texture path: kubejs/assets/kubejs/textures/item/weapons/bowie_knife.png

    // === KATANA ===
    event.create('katana', 'sword')
        .displayName('Katana')
        .tooltip('Makes you feel like a samurai')
        .tier('iron')
        .attackDamageBaseline(6.0)
        .speedBaseline(0.1)
        .maxDamage(50)
        .texture('kubejs:item/weapons/katana')
    // 🖼️ texture path: kubejs/assets/kubejs/textures/item/weapons/katana.png

    // === CROWBAR ===
    event.create('crowbar', 'axe')
        .displayName('Crowbar')
        .tooltip('Not elegant, but effective.')
        .tier('iron')
        .attackDamageBaseline(5.0)
        .speedBaseline(0)
        .maxDamage(50)
        .texture('kubejs:item/weapons/crowbar')
    // 🖼️ texture path: kubejs/assets/kubejs/textures/item/weapons/crowbar.png

    // === HATCHET ===
    event.create('hatchet', 'axe')
        .displayName('Hatchet')
        .tooltip('Good for trees and skulls alike.')
        .tier('iron')
        .attackDamageBaseline(7.0)
        .speedBaseline(0)
        .maxDamage(40)
        .texture('kubejs:item/weapons/hatchet')
    // 🖼️ texture path: kubejs/assets/kubejs/textures/item/weapons/hatchet.png

    // === BASEBALL BAT ===
    event.create('baseball_bat', 'sword')
        .displayName('Baseball Bat')
        .tooltip('America’s favorite problem solver.')
        .tier('wood')
        .attackDamageBaseline(5.0)
        .speedBaseline(0)
        .maxDamage(25)
        .texture('kubejs:item/weapons/baseball_bat')
    // 🖼️ texture path: kubejs/assets/kubejs/textures/item/weapons/baseball_bat.png

    // === BROKEN CHAINSAW ===
    event.create('broken_chainsaw', 'sword')
        .displayName('Broken Chainsaw')
        .tooltip('It doesn’t start, but still hurts like a bitch.')
        .tier('iron')
        .attackDamageBaseline(12.0)
        .speedBaseline(0)
        .maxDamage(25)
        .texture('kubejs:item/weapons/broken_chainsaw')
    // 🖼️ texture path: kubejs/assets/kubejs/textures/item/weapons/broken_chainsaw.png

    // === Small Bomb ===
    event.create('small_bomb')
        .displayName('Cherry Bomb')
        .texture('kubejs:item/weapons/cherry_bomb')
        .tooltip('A compact hand-thrown explosive. Minimal collateral damage.')

    // === Large Bomb ===
    event.create('large_bomb')
        .displayName('Large Bomb')
        .texture('kubejs:item/weapons/large_bomb')
        .tooltip('Big blast. Stand clear!')
})