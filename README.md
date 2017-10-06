# NTP Scaffold

NTP Scaffold is Node.js, Typescript, PostgreSQL starter kit integrated with PgAdmin4.

## Tech Stack 

* [Doker][docker], [Node.js][node], [NPM][npm], [Typescript][typescript] - core platform and dev tools
* [Express][express], [cors][cors] etc. — common HTTP-server features
* [PostgreSQL][pg], [Knex][knex], [pg][nodepg], [PgAdmin][pgadmin] — DB, db libs and tools



## Directory Layout

```bash
.
├── /config/                    # Application's configuration files
│   ├── /database.ts			      # Database configuration file
│   ├── /express.ts				      # Express middlewares configuration file
│   ├── /routes.ts				      # Routes configuration file
├── /migrations/                # Database schema migrations
├── /seeds/                     # Scripts with reference/sample data
├── /src/                       # Node.js application source files
│   ├── /constants/           	# Application's constants
│   ├── /controllers/           # Application's controllers
│   ├── /interfaces/           	# Application's interfaces
│   ├── /services/           	  # Application's services
│   ├── /models/                # Application's models
├── .dockerignore              	# Doker ignore file
├── .editorconfig              	# Editor config file
├── .gitignore              	  # Doker ignore file
├── docker-compose.yml          # Defines Docker services, networks and volumes
├── Dockerfile                  # Commands for building a Docker image for production
├── knexfile.js              	  # Knex configuration
├── package.json                # The list of project dependencies
├── server.ts              		  # Node.js server (entry point)
├── tsconfig.json              	# Typescript config file
├── tslint.json              	  # Typescript linter configuration
```

## Prerequisites

* [Docker][docker] Community Edition v17 or higher

## Getting Started

Clone the repository

```
git clone git@github.com:aYo-dev/node-scaffold.git
```
Install dependencies

```
cd node_scaffold
npm install
```


> **Note!** If **Postgres** is running on your host machine is possible to use the same port as the Postgres container, so you have to stop it before to run the build

Build and run the project

```
docker-compose up
```

To reach out the API navigate to `http://127.0.0.1:8080`

To reach out PgAdmin4 navigate to `http://127.0.0.1:5050`


[npm]: https://www.npmjs.com/
[typescript]: https://github.com/kriasoft/react-starter-kit
[node]: https://nodejs.org
[express]: http://expressjs.com/
[cors]: https://github.com/expressjs/cors
[pg]: https://www.postgresql.org/
[nodepg]: https://github.com/brianc/node-postgres
[docker]: https://www.docker.com/community-edition
[knex]: http://knexjs.org/
[pgadmin]: https://www.pgadmin.org/
