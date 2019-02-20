// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You're the greatest cookie baker in the world, and you're competing against the best of the best.",
            choices: [
                {
                    text: "Compete in the competition",
                    nextLevel: "baking",
                },

                {
                    text: "Step down from your pedestal",
                    nextLevel: "loser",
                },
            ]
        },

        baking: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You've forgotten your classic chocolate chip cookie recipe! Time to make it up.",
            choices: [
                {
                    text: "Use only baking soda",
                    nextLevel: "flour",
                },
                
                {
                    text: "Use only baking powder",
                    nextLevel: "undercooked",
                },
                
                {
                    text: "Use both",
                    nextLevel: "flour",
                },
            ]
        },
        
        flour: {
            message: "Good choice, you're picking up momentum!",
            choices: [
                {
                    text: "Use three cups of flour",
                    nextLevel: "undercooked",
                },
                
                {
                    text: "Use a cup of flour",
                    nextLevel: "sugar",
                },
            ]
        },
        
        sugar: {
            message: "Your cookies are taking shape!",
            choices: [
                {
                    text: "Use both types of sugar",
                    nextLevel: "winner",
                },
                
                {
                    text: "Use only granulated sugar",
                    nextLevel: "crispy_fail",
                },
                
                {
                    text: "Use only brown sugar",
                    nextLevel: "crispy_fail",
                },
            ]
        },
        
        undercooked: {
            message: "Your cookies are undercooked because of your decision. They're all ooey and gooey.", 
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        crispy_fail: {
            message: "Are you making cookies or crackers? Your cookies turned out crunchy.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },  
            ]
        },
        
        winner: {
            message: "You've put your skills to the test and now you've won! Congrats cookie master.",
        },

        loser: {
            message: "Some baker you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
