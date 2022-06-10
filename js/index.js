
const ResultFields = {
    Themes: document.getElementById("theme"),
    Genre: document.getElementById("genre"),
    Location: document.getElementById("location"),
    Mechanic: document.getElementById("mechanic")
}


const Generators = [
    {
        Themes: ["Summer", "Winter", "Sci-Fi", "Autumn", "Spring", "Tropical", "Fantasy", "Steampunk", "Middle Ages"],
        Genre: ["Action", "Rhythm", "Platformer", "Stealth", "Shooter", "Horror", "Survival", "Fighting", "RPG", "MMORPG", "Turn-Based", "Sports", "Social"],
        Location: ["Deep Ocean", "Islands", "Floating Islands", "Park", "Open Ocean", "Beach", "City", "Town"],
        Mechanic: ["Building", "Swimming", "Puzzle Solving", "Teams", "Voting", "Trivia", "Jumping", "Running", "Throwing", "Interacting", "Environment", "Speed"]
    }
]

// Methods
function Generate()
{
    let Generator = Generators[0]
    for (let key in Generator)
    {
        console.log(Generator[key])
        let Random = Math.floor(Math.random() * Generator[key].length)
        ResultFields[key].innerHTML = Generator[key][Random];
    }
}

// Events
document.body.onkeydown = function(e)
{
    if (e.keyCode != 32) { return; }
    Generate();
}

document.body.onmousedown = function()
{
    Generate();
}

document.body.ontouchstart = function()
{
    Generate();
}