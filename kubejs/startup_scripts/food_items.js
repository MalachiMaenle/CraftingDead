StartupEvents.registry('item', event => {
    // kubejs/startup_scripts/strange_foods.js

    event.create('leather_canteen_full')
        .displayName('Water Containing Leather Canteen')
        .texture('kubejs:item/leather_canteen_full')
        .unstackable()

    // === Gross & Basic Foods ===
    event.create('rotten_apple')
        .displayName('Rotten Apple')
        .tooltip('A soft, mushy apple with a hint of regret.')
        .texture('kubejs:item/rotten_apple')
        .food(f => {
            f
                .hunger(3)
                .saturation(0.3)
                .effect('minecraft:hunger', 100, 0, 0.7)
        })

    event.create('strange_meat')
        .displayName('Strange Meat')
        .tooltip('You’re not sure what creature this came from.')
        .texture('kubejs:item/strange_meat')
        .food(f => {
            f
                .hunger(3)
                .saturation(0.4)
                .effect('minecraft:nausea', 100, 0, 0.5)
        })

    event.create('human_finger_cheese')
        .displayName('Human Finger Cheese')
        .tooltip('Aged in despair. Slightly tangy.')
        .texture('kubejs:item/human_finger_cheese')
        .food(f => {
            f
                .hunger(7)
                .saturation(0.4)
                .effect('minecraft:weakness', 100, 0, 0.7)
        })

    event.create('hairy_finger')
        .displayName('Hairy Finger')
        .tooltip('Still has a ring on it.')
        .texture('kubejs:item/hairy_finger')
        .food(f => {
            f
                .hunger(3)
                .saturation(0.4)
                .effect('minecraft:nausea', 100, 0, 1.0)
        })

    event.create('moldy_bread')
        .displayName('Moldy Bread')
        .tooltip('Green’s a color, not a flavor.')
        .texture('kubejs:item/moldy_bread')
        .food(f => {
            f
                .hunger(4)
                .saturation(0.5)
                .effect('minecraft:hunger', 100, 0, 0.8)
        })

    event.create('soggy_cracker')
        .displayName('Soggy Cracker')
        .tooltip('It was crunchy once.')
        .texture('kubejs:item/soggy_cracker')
        .food(f => {
            f
                .hunger(1)
                .saturation(0.4)
                .fastToEat()
        })

    // event.create('finger_cheese_fondue')
    //     .displayName('Finger Cheese Fondue')
    //     .tooltip('Melted to perfection — bone fragments included.')
    //     .texture('kubejs:item/finger_cheese_fondue')
    //     .food(f => {
    //         f
    //             .hunger(7)
    //             .saturation(0.9)
    //     })

    // event.create('ratatouille_a_la_rat')
    //     .displayName('Ratatouille à la Rat')
    //     .tooltip('Exactly what it sounds like.')
    //     .texture('kubejs:item/ratatouille_a_la_rat')
    //     .food(f => {
    //         f
    //             .hunger(8)
    //             .saturation(0.8)
    //             .effect('minecraft:luck', 300, 0, 1.0)
    //     })

    event.create('canned_beans')
        .displayName('Canned Beans')
        .tooltip('Expired long ago.')
        .texture('kubejs:item/canned_beans')
        .food(f => {
            f
                .hunger(6)
                .saturation(0.4)
                .effect('minecraft:hunger', 100, 0, 0.4)
        })

    event.create('canned_fish')
        .displayName('Canned Fish')
        .tooltip('Smells like low tide, but fills you up.')
        .texture('kubejs:item/canned_fish')
        .food(f => {
            f
                .hunger(6)
                .saturation(0.5)

        })

    event.create('canned_noodles')
        .displayName('Canned Noodles')
        .tooltip('Cold, slimy, and oddly nostalgic.')
        .texture('kubejs:item/canned_noodles')
        .food(f => {
            f
                .hunger(5)
                .saturation(0.6)
        })

    event.create('fried_roaches')
        .displayName('Fried Roaches')
        .tooltip('Extra crunchy with bunker dust seasoning.')
        .texture('kubejs:item/fried_roaches')
        .food(f => {
            f
                .hunger(2)
                .saturation(0.3)
                .fastToEat()
        })

    event.create('chewy_brain')
        .displayName('Chewy Brain')
        .tooltip('Lightly salted and gets in your teeth.')
        .texture('kubejs:item/chewy_brain')
        .food(f => {
            f
                .hunger(4)
                .saturation(0.4)
                .fastToEat()
                .effect('minecraft:night_vision', 200, 0, 1.0)
                .effect('minecraft:weakness', 100, 0, 0.6)
        })

    event.create('eye_candy')
        .displayName('Chewy Eye Candy')
        .tooltip('Looks back at you lovingly.')
        .texture('kubejs:item/eye_candy')
        .food(f => {
            f
                .hunger(2)
                .saturation(0.5)
                .fastToEat()
                .effect('minecraft:night_vision', 0, 200, 1.0)
                .effect('minecraft:slowness', 100, 0, 0.6)
        })

    event.create('strange_meat_jerky')
        .displayName('Strange Meat Jerky')
        .tooltip('Dried something. Don’t ask what.')
        .texture('kubejs:item/strange_meat_jerky')
        .food(f => {
            f
                .hunger(5)
                .saturation(0.6)
                .fastToEat()
                .effect('minecraft:strength', 200, 0, 1.0)
                .effect('minecraft:hunger', 100, 0, 0.6)
        })

})