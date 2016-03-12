# Koa-Sequelize-Template

I found I was often writing the same code over again for Node projects so I made this template to ease the repetition.

The template uses the following...

<b>Koa</b> as a web framework.

<b>Sequelize</b> as the data storage.

<b>Handlebars</b> for views.

<b>Passport</b> for authentication.

## Installation

A Vagrant file is included.

<b>Option A:</b> Use docker-compose to file up Node, MariaDB and Redis server instances.

<b>Option B:</b> `npm install` in the working directory and setup the config.js file.

A sample project is included for simple authentication and registration.

## Usage

Custom js and scss files should go in the wwwsrc folder. Following the format `wwwsrc/<js|scss>/<name>/`. 

Use the provided `gulpfile.js` to compile the js/scss files. Browsersync is also provided for easier development.

Assets such as images, fonts, and third-party libs should go into the `assets` folder

## License

MIT
