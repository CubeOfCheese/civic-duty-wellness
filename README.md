# Civic Duty Wellness

HTMLephant Senior Project
Sac State 2021

This application supports the [Getting Started with Java on Heroku](https://devcenter.heroku.com/articles/getting-started-with-java) article - check it out.

## Setup
Make sure you have Java and Maven installed.
Install the Heroku CLI.
Install node (recommended to install via nvm).

Maven: https://maven.apache.org/

Heroku CLI: https://cli.heroku.com/

nvm for windows users: https://github.com/coreybutler/nvm-windows
nvm for mac users: https://github.com/nvm-sh/nvm

```sh
$ nvm install lts
$ nvm use 14.18.1
$ npm install
```

## Running Locally

```sh
$ npm run-script watch
$ mvn install
$ heroku local:start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

If you're going to use a database, ensure you have a local `.env` file that reads something like this:

```
JDBC_DATABASE_URL=jdbc:postgresql://localhost:5432/java_database_name
```

## Deploying to Heroku

```sh
$ git checkout master
$ git pull
$ npm run-script watch
```
delete the line `src/main/resources/static` from .gitignore
```sh
$ mvn clean install
$ git commit -m "deploy"
$ git push heroku master
$ heroku open
```

Clean up from deploying
```sh
$ git reset --hard HEAD~1
```

## Documentation

For more information about using Java on Heroku, see these Dev Center articles:

- [Java on Heroku](https://devcenter.heroku.com/categories/java)

## Contributors
Akash Chand
Billy T. Hernandez
Daniel Kiksman
Evarista Veliz
Francisco Fernandez
Katrina Etchison
Lisbeth Lopez
Tanner Fleming
