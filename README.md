# AngularWeatherWidget

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Features

- The app consists of a grid of 9 panels. Every panel shows the weather data of one city. Initially, all panels are empty. 
- On clicking on an empty panel, a text box is shown on the panel itself, asking the user to enter the city name. On entering the name, the panel now shows weather data for that city. 
- Every panel should have an “Edit” button - on clicking this, the user should be able to change the city shown in that panel. 
- If there was an error in getting the data (eg. wrong city name), the panel itself shows the error and the user can re-enter the city name. 
- Every panel have icons that describes the weather at the city - eg. sunny/rainy/cloudy. 
- The panels are in a grid and responsive - the panels align themselves in a row with respect to the screen size: for small screens - less number of panels in a row and for large screens - more number of panels in a row.  
- **The weather data updated regularly - data displayed was no more than 30 seconds old. And this is not done by using a manual refresh button.**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
