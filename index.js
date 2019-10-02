const express = require('express')
const app = express()
const cors = require('cors')
const corsMiddleware = cors()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const adRouter = require('./advertisement/router')
const port = process.env.PORT || 4000
const Advertisement = require('./advertisement/model')
const db = require('./db')

listenOnPort = () => {
    console.log(`Listening on port: ${port}`)
}


db
    .sync({force: true})
    .then(() => {
        console.log('Database schema created')
        Advertisement.create({
            title: 'Skateboard',
            description:'Perfect for the park',
            url: 'http://pngimg.com/uploads/skateboard/skateboard_PNG11713.png',
            price: 100,
            email: 'theskateboardshop@gmail.com',
            phone: '0031628744563'
        })
        Advertisement.create({
            title: 'Painting',
            description:'Artist: Kandinsky',
            url: 'https://www.wpclipart.com/art/Paintings/Kandinsky/Kandinsky__Small_Worlds_II.png',
            price: 3000000,
            email: 'kandinskylover@hotmail.com',
            phone: '0031628321563'
        })
        Advertisement.create({
            title: 'Sony Xperia XA2',
            description:'The Best Android Phone Ever (not)',
            url: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/6/4/9/2/9200000087062946.jpg',
            price: 300,
            email: 'theandroidshopp@msn.com',
            phone: '0031628741210'
        })
    })
    .catch(err => console.log(err))


app.use(corsMiddleware)
app.use(jsonParser)
app.use(adRouter)

app.listen(port, listenOnPort)
