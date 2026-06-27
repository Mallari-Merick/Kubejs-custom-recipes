ServerEvents.recipes(event => {
    // Blast Furnace Function
    let blastFurnaceRecipe = (input, output, slagCount, time) => {
        event.custom({
            "type" : "immersiveengineering:blast_furnace",
            "input" : {
                "item" : input
            },
            "result": {
                "item" : output
            },
            "slag" : {
                "item" : "immersiveengineering:slag",
                "count" : slagCount
            },
            "time" : time
        }).id("kubejs:blast_furnace/" + input.split(":") [1])
    }
    // Remove the original steel recipe
    event.remove({
        output: "immersiveengineering:ingot_steel",
        type: "immersiveengineering:blast_furnace"
    })

    event.remove({
        output:'immersiveengineering:storage_steel',
        type:'immersiveengineering:blast_furnace'
    })

    // Blast Furnace Recipes
    blastFurnaceRecipe(
        "minecraft:iron_ingot",
        "immersiveengineering:ingot_steel",
        1,
        200
    )
    blastFurnaceRecipe(
        "minecraft:iron_block",
        "immersiveengineering:storage_steel",
        9,
        1600
    )
})