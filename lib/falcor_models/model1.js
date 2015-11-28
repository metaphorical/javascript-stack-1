const Falcor = require('falcor');
module.exports = new Falcor.Model({
    cache: {
        ingredientsById: {
            1: {
                name: 'chickpeas',
                description: 'common arabic kind of dry pea like thingy'
            },
            2: {
                name: 'chicken breast',
                description: 'best part of chicken'
            },
            3: {
                name: 'pork',
                description: "it's a pig meat..."
            }
        },
        recipes: [
            {
                name: "Chicken, good!!! (in Mila Jovovic voice)",
                instructions: "add chickpeas",
                ingredients: [
                    //here we say it is a reference to another part of the model, with direct address to it
                    {$type: 'ref', value: ["ingredientsById", 2]},
                    {$type: 'ref', value: ["ingredientsById", 1]}
                ],
                authors: {$type: 'atom', value: ['Rastko']}
            },
            {
                name: "You pig",
                instructions: "also add chickpeas",
                ingredients: [
                    {$type: 'ref', value: ["ingredientsById", 3]},
                    {$type: 'ref', value: ["ingredientsById", 1]}
                ],
                authors: {$type: 'atom', value: ['Rastko']}
            }
        ]
    }
});