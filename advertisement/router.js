const { Router } = require('express')
const router  = new Router()
const Advertisement = require('./model')

//create an advertisement
router.post('/advertisement', (req, res, next) => {
    Advertisement.create(req.body)
    .then(advertisement => { 
        res.send(advertisement) 
    })
    .catch(next)
})

//get all advertisments(AdList)
router.get('/advertisement', (req, res, next) => {
    Advertisement.findAll()
    .then(advertisements => {
        res.send(advertisements)
    })
    .catch(next)
})

//see specific advertisement(AdDetails)
router.get('/advertisement/:id', (req, res, next) => {
    console.log('oh hi?', req.params)
    Advertisement.findByPk(req.params.id)
    .then(advertisement => {
        console.log(advertisement)
        res.send(advertisement)
    })
    .catch(next)
})

//update an advertisement(AdDetailsContainer)
router.put('/advertisement/:id', (req, res, next) => {
    Advertisement.findByPk(req.params.id)
    .then(advertisement => {
        if(!advertisement) {
            return res.status(404).send('404, Advertisment not found')
        } else {
            advertisement.update(req.body)
            .then(res.send(advertisement))
        }
    })
    .catch(next)
})

//delete Ad
router.delete('/advertisement/:id', (req, res, next) => {
    Advertisement.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(numDeleted => {
        if (numDeleted) {
            return res.status(204).end()
        }
        return res.status(404).end()
    })
    .catch(next)
})

module.exports = router