# NodeJS-Boilerplate-with-Prisma
This boilerplate is a good to go start for any kind of project. Its follows all standard practices, secure and it is very much scalable.

## Features
- **Database:** any database is configurable with Prisma/ORM
- **Validation:** request data validation using Joi
- **Locales:** support multi-language out of box using i18n
- **Pathing:** absolute pathing for clean coding experience (module-alias)
- **Process management:** advanced production process management using PM2
- **Error handling:** centralized error handling mechanism
- **Dependency management:** with Npm
- **CORS:** Cross-Origin Resource-Sharing enabled using cors
- **Security:** set security HTTP headers using helmet
- **Santizing:** sanitize request data against xss and query injection
- **Code quality:** with eslint
- **Git hooks:** with husky
- **Linting:** with ESLint and Prettier
- **Editor config:** consistent editor configuration using EditorConfig

## Installation
- clone the project
- npm install
- change .env with your database credentials, currently it is set for mysql. if you intent to your other db, lets say postgres, you need to change provider in schema.prisma file as well.
- npx prisma migrate dev
- nodemon src/app.js

## Project Structure

```
src\
 |--controllers\    # Route controllers (controller layer)
 |--middlewares\    # Custom express middlewares
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--locales\        # Multilanguage translations
 |--prisma\         # Prisma schema, migrations and configurations (db layer)
 |--utils\          # Utility classes and functions
 |--validators\     # Request data validation schemas
 |--app.js          # Express app
```

## Linting
Linting:

```bash
# run ESLint
npm lint

# fix ESLint errors
npm lint:fix

# run prettier
npm prettier

# fix prettier errors
npm prettier:fix
```

## Contributing

Contributions are more than welcome!
