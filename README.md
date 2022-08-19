# technical-task-outside

Technical task to outside digital

### Environment variables

File .env at the root of the project.

###### Template

```
NODE_ENV=<string>
PORT=<number>
MORGAN_FORMAT=<string> // devDefault: 'dev', default: 'common'
DB_USERNAME=<string> // default: 'postgres'
DB_PASSWORD=<string>
DB_HOST=<string> // devDefault: 'localhost'
DB_PORT=<number> // default: 5432
DB_NAME=<string> // default: 'outside'
JWT_SECRET_OR_KEY=<string>
JWT_EXPIRATION_TIME=<string> // default: '30m'
```

###### Example

```
NODE_ENV="development"
PORT=5000
MORGAN_FORMAT="dev"
DB_USERNAME="postgres"
DB_PASSWORD="postgres"
DB_HOST="localhost"
DB_PORT=5432
DB_NAME="outside"
JWT_SECRET_OR_KEY="41F0e5F8E5E51336cF31A147A53fa5A869f5b16b"
JWT_EXPIRATION_TIME="30m"
```
