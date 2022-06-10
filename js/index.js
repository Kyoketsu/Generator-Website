
const ResultFields = {
    Genre: document.getElementById("genre"),
    Location: document.getElementById("location"),
    Mechanic: document.getElementById("mechanic")
}


const Generators = [
    {
        Genre: ["Action", "Rhythm", "Platformer", "Stealth", "Shooter", "Horror", "Survival"],
        Location: ["Deep Ocean", "World"],
        Mechanic: ["Building", "Hi"]
    }
]

// Events
document.body.onkeydown = function(e)
{
    if (e.keyCode != 32) { return; }

    let Generator = Generators[0]
    for (let key in Generator)
    {
        console.log(Generator[key])
        let Random = Math.floor(Math.random() * Generator[key].length)
        if (Random < 0) {Random = 0}
        console.log(Math.random() * Generator[key].length)
        console.log(Random)
        ResultFields[key].innerHTML = Generator[key][Random];
    }
}
