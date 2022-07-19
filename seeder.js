const path = require('path');
const fs = require('fs').promises;

const db = require('./db');
const Animals = require('./Pet');

const seed = async () => {
    await db.sync({ force: true});

    //If server is not running then delete 'root' path
    const animalsSeedPath = path.join(__dirname, 'root', 'animals.json');

    const animalsBuffer = await fs.readFile(animalsSeedPath);

    const animals = JSON.parse(String(animalsBuffer));

    const animalsPromises = animals.map((animal) =>Animals.create(animal));

    await Promise.all(animalsPromises);

    console.log('Animals database info populated!');
}

seed();