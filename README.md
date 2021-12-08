# Civic Duty Wellness

HTMLephant Senior Project
Sac State 2021

This application supports the [Getting Started with Java on Heroku](https://devcenter.heroku.com/articles/getting-started-with-java) article - check it out.

## Setup
Make sure you have Java and Maven installed.
Install the Heroku CLI.
Install node (recommended to install via nvm).
Install postgresql (for consistency, download version 13).

Maven: https://maven.apache.org/

Heroku CLI: https://cli.heroku.com/

nvm for windows users: https://github.com/coreybutler/nvm-windows
nvm for mac users: https://github.com/nvm-sh/nvm

Postgresql: https://www.postgresqltutorial.com/install-postgresql/

```sh
$ nvm install lts
$ nvm use 14.18.1
$ npm install
```
## Run After Each Pull
```sh
$ npm install
```

## Running Locally

```sh
$ npm run local
```
which runs the following commands
```sh
$ webpack --mode development
$ mvn clean install
$ heroku local
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

If you're going to use a database, ensure you have a local `.env` file that reads something like this:

```
JDBC_DATABASE_URL=jdbc:postgresql://localhost:5432/database_name_here?user=username_here&password=password_here
```

The password is the one used when installing postgresql and connecting to the default local postgres database.

## Deploying to Heroku

```sh
$ git checkout master
$ git pull
$ npm run build-deploy
```
delete the line `src/main/resources/static` from .gitignore
```sh
$ mvn clean install
$ git add .
$ git commit -m "deploy"
$ git push -f heroku master
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
