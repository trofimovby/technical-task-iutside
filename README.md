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
```
