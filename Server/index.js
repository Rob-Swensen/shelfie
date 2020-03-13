require('dotenv').config();
const ctrl = require('./controller');
const express = require('express'),
massive = require('massive'),
{SERVER_PORT, CONNECTION_STRING} = process.env;


const app = express();

app.use(express.json());
const port = SERVER_PORT;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
    .then(db => {
        app.set('db', db)
        app.listen(port, () => console.log(`Server is running on port: ${port}`));
        console.log('DB Connected')
    })
    .catch(error => console.log(error));

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.createProduct)
app.delete('/api/inventory/:id', ctrl.deleteProduct)
app.put('/api/inventory/:id', ctrl.updateProduct)

