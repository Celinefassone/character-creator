# Summary

This application is a **Character Creator** in which users can customize their character. Users will be able to change the hairstyle and clothes of the avatar. To do so, users will click on a button which will allow them to see and select the different options.

## Requirements

In order to run the application, you will need **Node.js** and **Mongodb** installed. These should be installed globally.

### Node.js

To install Node.js, use the following link and follow their recommendations for your operating system.

https://nodejs.org/en

> We recommend using Homebrew for your Mac packagae management or for Windows, use Chocolatey.

With homebrew

https://formulae.brew.sh/formula/node

### Mongodb

To install Mongodb, use the following link and follow their recommendations for your operating system.

https://www.mongodb.com/try/download/compass

## How to run the application

Open Terminal and change the working directory to the location where you want the project to be installed by accessing the folder with the command `cd` to change directory.

Then run

`git clone git@github.com:Celinefassone/character-creator.git`

And cd in to the directory /character-creator.

Make sure to do `npm install` first to install the latest dependencies.

Run the frontend (in another terminal tab) with

`npm run serve`

## Vue

This application uses Vue, a progressive framework for building user interfaces. It provides a set of features for building reactive and composable user interfaces, such as templates, components, computed properties, and more. Vue.js is popular because of its simplicity and flexibility, making it easy to integrate with existing projects.

This application also uses Vuex, a state management pattern and library for Vue.js applications. To use Vuex, a store folder has to be created. To use it, it has to be imported first in main.js and used by adding .use(store).Then, in the /store directory, import createStore from vuex anad then export from this file a default createStore({}).
