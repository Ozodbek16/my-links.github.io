const express = require('express')
const app = express()
const { create } = require('express-handlebars')
const session = require('express-session')
const path = require('path')
const MongoDBStore = require('connect-mongodb-session')(session)

require('dotenv').config()

const hbs = create({
    extname: "hbs",
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoMethodsByDefault: true,
    }
})

app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');


require('./helper/db')()


// MongoDB connect
const store = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: 'mySession',
    expires: 1000 * 300
})

app.use(session({
    secret: 'SECRETKEY',
    resave: false,
    saveUninitialized: false,
    store
}))


const homeRouter = require('./routes/home')

app.use(homeRouter)




const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server working on port ' + PORT)
})