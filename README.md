# Projet Aston - Angular

# Installation

1. of course : clone this repository

## I. Install nodes-modules

1. open project in VSCode
2. delete the ../package-lock.json
3. open Gitbash terminal in VSCode and run "npm install", then wait until process is done
4. rename this terminal tab : "node"
5. in package.json in scripts, line 10 : add 
   1. "start:db": "json-server --watch db/db.json --port3000"

## II. Install json-server
1. open a new terminal tab
2. run "npm install -g json-server"
3. then run "json-server --watch db/db.json"
4. rename this tab "json-server"
5. 5. your json db is reachable here : http://localhost:3000/
6. on the URL you should read : "Resources : /films & albums

## III. Run the Mediatheque 
1. in node terminal tab
2. run "ng serve -o", URL of the website is : http://localhost:4200/home

# Mediatheque is based on

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
