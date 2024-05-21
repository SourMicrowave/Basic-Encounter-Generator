//randomly generate an encounter
//three variables:
//an action (such as robbed), an object/subject (such as lion) - maybe split into people and animals

//actions: robbed, kidnapped, attacked, stalked, harassed, insulted, complimented, seducted.
//people-types: caveman, politician, cop, child, knight, princess, mechanic, plumber, gymnast, stripper.
//races: dwarf, elf, human, pixie, werewolf, halfling, dragon, orc, demon.



//types of events: weather, animal/creature, individual, or group

//Weather: You encounted a (weather-type) that lasted (number) (time-unit).
//Animal: You were (action) by a (descriptor) (animal-type)
//Individual: You were (action) by a (race) (people-type).
//Group: You were (action) by (number) (race) (people-type-plural) 


//Make arrays for each variable type.

//Function:
// 1. Determine if event is weather, animal, individual, or group
// 2. Randomly select each variable for the selected encounter-type
// 3. Construct the sentence


const encounterText = document.querySelector('.encounterText')
const generateBtn = document.querySelector('button')


const weather = ["rainstorm", "tornado", "snowstorm", "sandstorm", "heatwave", "cold snap", "tropical storm"];
const timeUnit = ["seconds", "minutes", "hours", "days"]

const animal = ["tiger", "pig", "cyclops", "squirrel", "frog", "slug", "elephant", "fox", "spider", "sheep", "ogre", "bison", "chimera", "sphinx", "cat", "dog", "rat", "mole"];
const descriptor = ["hench", "thicc", "fat", "sexy", "hairy", "fluffy", "wet", "tiny", "hungry", "horny", "blind", "injured", "deaf", "pink", "confused", "timid", "incel", "clothed", "man-eating"];
const animalAction = ["ravaged", "scared", "hugged", "attacked", "smiled at", "waved at", "lauged at", "hit"]

const peopleAction = ["robbed", "kidnapped", "attacked", "stalked", "harassed", "insulted", "complimented", "seduced"];
const race = ["dwarf", "elf", "human", "pixie", "werewolf", "halfling", "dragon", "orc", "demon"];
const peopleType = ["caveman", "politician", "cop", "child", "knight", "princess", "mechanic", "plumber", "gymnast", "stripper"];

const peopleTypePlural = ["cavemen", "politicians", "cops", "children", "knights", "princesses", "mechanics", "plumbers", "gymnasts", "strippers"];

const aOrAn = ["a", "an"]



function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isVowel(char) {
    let vowels = ["a", "e", "i", "o", "u"];
    let isVowel = false;
    for (i in vowels) {
        if (vowels[i] == char) {
            isVowel = true;
        }
    }
    return isVowel
}

let weatherGen = () => {
    let weatherType = weather[Math.floor(Math.random() * weather.length)];
    let number = randomInteger(1, 60);
    let unit = timeUnit[Math.floor(Math.random() * timeUnit.length)]
    return `You encounted a ${weatherType} that lasted ${number} ${unit}.`
}

let animalGen = () => {
    let action = animalAction[Math.floor(Math.random() * animalAction.length)];
    let descript = descriptor[Math.floor(Math.random() * descriptor.length)];
    let animalType = animal[Math.floor(Math.random() * animal.length)];
    return `You were ${action} by a ${descript} ${animalType}.`
}

let individualGen = () => {
    let action = peopleAction[Math.floor(Math.random() * peopleAction.length)];
    let raceType = race[Math.floor(Math.random() * race.length)];
    let people = peopleType[Math.floor(Math.random() * peopleType.length)];
    let aAn = 'a'
    if (isVowel(raceType[0])) {
        aAn = 'an'
    }
    return `You were ${action} by ${aAn} ${raceType} ${people}.`
}

let groupGen = () => {
    let action = animalAction[Math.floor(Math.random() * animalAction.length)];
    let number = randomInteger(1, 20);
    let raceType = race[Math.floor(Math.random() * race.length)];
    let people = peopleTypePlural[Math.floor(Math.random() * peopleTypePlural.length)];
    return `You were ${action} by ${number} ${raceType} ${people}.`
}



function encounterGen() {
    let encounterType = randomInteger(0, 3);
    let encounter = 0
    if (encounterType === 0) {
        encounter = weatherGen()
    } else if (encounterType === 1) {
        encounter = animalGen()
    } else if (encounterType === 2) {
        encounter = individualGen()
    } else {
        encounter = groupGen()
    }
    return encounter
}


let displayEncounter = () => {
    let encounter = encounterGen();
    encounterText.textContent = `${encounter}`;
}

generateBtn.addEventListener('click', () => {
    return displayEncounter();
});



