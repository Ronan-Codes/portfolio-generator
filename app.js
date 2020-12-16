const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
/* Same as
const profileDataArgs = process.argv.slice(2, process.argv.length); */

/*
const name = profileDataArgs[0];
const github = profileDataArgs[1];
Same as below */
const [name, github] = profileDataArgs;

// generatePage() was here

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error (err);
/* Same as
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err; */


    console.log('Portfolio complete! Check out index.html to see the output!');
});

/*
// Notice the lack of parentheses around the 'profileDataArr' parameter?
const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('================')

    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
*/
