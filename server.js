const app = require('./app')

// This has to come first in order to Parse the .env files.
require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    
    console.log(`Currently Listening to port: ${ PORT }`);

})