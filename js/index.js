
var LastTouch = new Date();
const ResultFields = {
    Themes: document.getElementById("theme"),
    Genre: document.getElementById("genre"),
    Location: document.getElementById("location"),
    Mechanic: document.getElementById("mechanic")
}


const Generators = [
    {
        Themes: ["Fantasy", "Horror", "Warfare", "Cartoony", "Futuristic"],
        Genre: ["Shooter", "Strategy", "Simulator"],
        Location: ["Jungle", "Ocean", "Swamp", "Deep Ocean"],
        Mechanic: ["Open-World", "Gambling"]
    }
]

// Methods
function Generate() 
{
    let Generator = Generators[0]
    for (let key in Generator)
    {
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

document.body.ontouchstart = function()
{
    let CurrentTouch = new Date();

    if (LastTouch.getTime() - CurrentTouch.getTime() > 0.5) 
    { 
        return;
    } else {
        LastTouch = CurrentTouch
        Generate();
    }
}

// Initial Refresh
Generate();