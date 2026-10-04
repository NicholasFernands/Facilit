module.exports =  {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "Facilit",
    "autoLoadEntities": true,
    "synchronize": true,
    "logging": false,
    "entities": ["dist/**/*entity.js"],
    "migrations": ["dist/migration/*.js"],
    cli: {
      migrationsDir: 'src/migrations/*.ts'
    },
    "subscribers": ["src/subscriber/**/*.ts"]
 }
