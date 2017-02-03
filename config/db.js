// Update with your config settings.
module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './dev.sqlite'
        },
        useNullAsDefault: true,
        migrations: {
            tableName: 'knex_migrations',
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds'
        }
    }
    // development: {
    //     client: 'mysql',
    //     connection: {
    //         host: 'localhost:3306',//process.env.MYSQL_CSQA_HOST,
    //         user: 'lebowski',//process.env.MYSQL_CSQA_USER,
    //         password: 'dude',//process.env.MYSQL_CSQA_PASSWORD,
    //         database: 'models',//process.env.MYSQL_CSQA_DATABASE
    //     },
    //     useNullAsDefault: true,
    //     migrations: {
    //         tableName: 'knex_migrations',
    //         directory: __dirname + '/db/migrations'
    //     },
    //     seeds: {
    //         directory: __dirname + '/db/seeds'
    //     }
    // }
};