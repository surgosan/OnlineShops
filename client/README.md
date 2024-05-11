# Client

Client is made in VueJS
___
## Working on Client
All the src code is in the src directory.
Everything for the web app is here.

___
## Viewing the Application
*Using Terminal*

### Move to client directory if not already there
    
    cd client

### If not already done, install the packages used for VueJS

    npm install

### Start the Web Application

    npm run serve

This will generate the link for you to click on.
It will open in your default web client.

___
## Building for Production
*Using Terminal*

### Move to client directory if not already there

    cd client

### If not already done, install the packages used for VueJS

    npm install

### Build the Web Application

    npm run build

This will create the HTML & JavaScript files needed for the official website.

If not defined in `client > vue.config.js`, then building will out put to the `client > dist`

Otherwise, it will output wherever it is defined