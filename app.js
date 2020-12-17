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

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter you GitHub Username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your github!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({confirmAbout}) => {
                if (confirmAbout) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    ]);

  // replaced by promptUser().then below
  //.then(answers => console.log(answers));
};
// replaced again by the function call below promptUser().then.then.then
//promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {
    console.log('=================Add a New Project=================');

    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter project description!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'JQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter your project github link!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData)
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    })
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });


   // console.log(portfolioData.projects)
