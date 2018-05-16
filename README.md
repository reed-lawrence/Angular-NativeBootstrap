# BootstrapApp

This project is a minimum verifyable example of native bootstrap code working in an Angular app 

Below are steps to reproduce from an empty project

## Required Packages

Run `npm install jquery --save`

Run `npm install popper.js --save`

Run `npm install bootstrap --save`

## Installing Typings

Run `npm install @types/jquery --save`

Run `npm install @types/bootstrap --save`

## Adding Scripts and Styles

Add to your `.angular-cli.json` under `scripts`: 
`"../node_modules/jquery/dist/jquery.js"` 
`"../node_modules/popper.js/dist/umd/popper.min.js"`
`"../node_modules/bootstrap/dist/js/bootstrap.js"`

Under `styles` add:
`"../node_modules/bootstrap/dist/css/bootstrap.min.css"`

## Adding import statements

In the `app.module.ts` file, add the import statements:

`import * as $ from 'jquery';`

`import * as bootstrap from 'bootstrap';`

