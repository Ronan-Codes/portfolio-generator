const inquirer = require('inquirer');
//            const fs = require('fs');
//            const generatePage = require('./src/page-template.js');

//            const pageHTML = generatePage(name, github);

// process.argv replaced by inquirer npm
//const profileDataArgs = process.argv.slice(2);
/* Same as
const profileDataArgs = process.argv.slice(2, process.argv.length); */

/*
const name = profileDataArgs[0];
const github = profileDataArgs[1];
Same as below */
// this is part of process.argv so it's removed as well
//const [name, github] = profileDataArgs;

// generatePage() was here before being exported

//            fs.writeFile('./index.html', pageHTML, err => {
//                if (err) throw err;

// this was replaced b/c of generatePage(name, github)
/* fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error (err); */
/* also,
    if (err) throw new Error (err); is the same as one used above */


//                console.log('Portfolio complete! Check out index.html to see the output!');
//            });

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

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
