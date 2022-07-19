const path = require('path');
const fs = require('fs').promises;

const db = require('./db');
const Pet = require('./Pet');

const seed = async () => {
    await db.sync({ force: true});

    //Get path to external API location (json file)

    //Asynchronously reads the content in the file

    //creates show and puts it into our show table

    //The promise.all() method takes an iterable of promises as an input, and return a single promise that resolves to an array of the results of the input promises.

    console.log('database info populated!');
}

seed();