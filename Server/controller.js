

module.exports = {

    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => {
            res.status(500).send({errorMessage: 'Oops, something went wrong'});
            console.log('error')
        })
    },

    createProduct: (req, res) => {
        console.log(req.body)
        const db = req.app.get('db')
        const {name, price, img} = req.body;

        db.create_product([name, price, img])
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: 'Oops, something went wrong'});
            console.log(error)
        })
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params;

        db.delete_product(id)
        .then(products => res.status(200).send(products))
        .catch(error => {
            res.status(500).send({errorMessage: 'Oops, something went wrong'});
            console.log(error)
        })
    },

    updateProduct: (req, res) => {
        console.log(req.body, req.params)
        const db = req.app.get('db')
        const {name, price, img} = req.body
        const {id} = req.params

        db.update_product([name, +price, img, id])
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: 'Oops, something went wrong'});
            console.log(error)
        })

    },

    getProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.get_product(id)
        .then(product => res.status(200).send(product))
        .catch(error => {
            res.status(500).send({errorMessage: 'Oops, something went wrong'});
            console.log(error)
        })
    }

}