const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema');
//const connectDB = require('../config/db');
const port = process.env.PORT || 5000;


const app = express();
app.use(cors());


//connectDB();
app.use( 
    '/graphql',
    graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
})
);

app.use(express.static('public'));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
})

app.listen(port, console.log(`server on port ${port}`));