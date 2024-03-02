// // En este archivo irán todas las variables globales del sistema

require('dotenv').config();

module.exports =  {
    app:{
        port: process.env.PORT,    
    },

    mysql:{
        host: process.env.DB_HOST || 'localhost',  
        user: process.env.DB_USER || 'root',
        passwd: process.env.DB_PASS || '',
        database: process.env.DB || 'db_tres_en_raya'
    }

}