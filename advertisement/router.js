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
    Advertisement.findByPK(req.params.id)
    .then(advertisement => {
        res.send(advertisement)
    })
    .catch(next)
})

module.exports = router