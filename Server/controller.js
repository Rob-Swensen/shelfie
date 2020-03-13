

module.exports = {

    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => {
            res.status(500).send({errorMessage: 'Oops, something went wrong'});
            console.log(error)
        })
    },

    createProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, imgurl} = req.body;

        db.create_product([name, price, imgurl])
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
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: 'Oops, something went wrong'});
            console.log(error)
        })
    },

    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
        const {id} = req.params

        db.update_product([name, price, img, id])
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: 'Oops, something went wrong'});
            console.log(error)
        })

    }

}