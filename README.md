# rmp
PetStar

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## :blue_book: Description

This is a full-stack web application for users with pets who are able to log in and create a profile for their pet. They are able to rate their own pet along with being able to rate and view other user's pets. 

## :bookmark_tabs: Table of Contents

- [Description](#description)
- [Visuals](#visuals)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## :eye: Visuals

![localhost_3001_(iPhone SE) (3)](https://user-images.githubusercontent.com/118075347/226147029-d5cf190e-e104-45b7-81c4-e187a9388fee.png)

[Click here for Webpage](https://murmuring-garden-13240.herokuapp.com/)

## :hammer_and_wrench: Installation

You will first need to install some dependencies. In VS Code, open the Terminal. On the command line, type the folling command:

npm i

You will also need to use the MySQL2 package to connect to the MySQL database.

On the command line, type the folling commands:

npm i mysql

You can create the database in MySQL by: source db/schema.sql;

You can then seed the data by running: node seeds/seeds.js

Then, the application will be invoked by using one of the following commands:

1.) node server.js 2.) npm start

## :zap: Usage

https://murmuring-garden-13240.herokuapp.com/

![localhost_3001_(iPhone SE) (3)](https://user-images.githubusercontent.com/118075347/226147029-d5cf190e-e104-45b7-81c4-e187a9388fee.png)

When you open the application, you will be on the homepage. You can either "Create an Account" shown on the bottom of the screen or "Login" which is both on the bottom of the screen and on the Navigation bar above.

![localhost_3001_oops](https://user-images.githubusercontent.com/118075347/226147052-1c9b6c0a-ca36-46af-bfe1-5fae51f8fb1d.png)

Without logging in or having an account, unfortunately, you will not be able to view the "Rate Our Pets" page.

![localhost_3001_login](https://user-images.githubusercontent.com/118075347/226147059-d16ca51c-2cc0-4029-af2b-b6a7c4fe4a17.png)

After you have created an account, you can log in with your email and password credentials that you have created.

![localhost_3001_signup(iPhone SE)](https://user-images.githubusercontent.com/118075347/226147085-2afbea71-7916-4b16-8ae5-edc4e1cedf49.png)

Once logged in, you will be directed to your "Pet Dashboard". This is where all your pets will be displayed. You can add a pet by clicking on the "Add a New Pet!" button on the right hand side and filling out the appropriate inputs.

![localhost_3001_user](https://user-images.githubusercontent.com/118075347/226147044-c5476f36-b5d2-4762-9a3a-581626bb8ee2.png)

You also have the option of adding a photo of your pet as well.

![localhost_3001_user (1)](https://user-images.githubusercontent.com/118075347/226147158-37f0c481-b3fa-485a-b315-0994e528306c.png)

![localhost_3001_ratings](https://user-images.githubusercontent.com/118075347/226147103-76ab0de2-8dea-4815-a056-34baa7ed5121.png)

If you are logged in, you may also browse other user's pets by clicking on the "Rate Our Pets" and clicking through the pets' photos. You are able to give them a rating of 1 - 5 , by choosing the number of corresponding heart emojis you think a pet deserves. If you accidentally close your browser, the application will save your session. If you want to log out, you simply need to click the "Logout" button on the navigation bar. 

## :lock: License

This project is cover under the MIT License.

## :handshake: Contribution
Collaborators:
Jacob Jeffries
Nick Herman
Ellie Hess

## :chart_with_upwards_trend: Tests

Use Insomnia Core to test API GET and POST routes. 

## :question: Questions
Github Usernames: 
    @Jacob-Jeffries
    @nwherman1724
    @elliehess

Github Repo: https://github.com/Jacob-Jeffries/rmp

Email Address:

    nwherman1724@gmail.com
    elhess03@gmail.com
    jeffrij85@gmail.com

Email us if you have additional questions!
