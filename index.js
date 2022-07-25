const express = require('express')
const app = express()
const { create } = require('express-handlebars')
const session = require('express-session')
const path = require('path')
const MongoDBStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash')

require('dotenv').config()

const hbs = create({
    extname: "hbs",
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoMethodsByDefault: true,
    }
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(flash())

require('./helper/db')()


// MongoDB connect
const store = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: 'mySession',
    expires: 1000 * 10
})

app.use(session({
    secret: 'SECRETKEY',
    resave: false,
    saveUninitialized: false,
    store
}))


const homeRouter = require('./routes/home')
const userRouter = require('./routes/user')
const authMid = require('./middleware/auth')

app.use(homeRouter)
app.use('/user', authMid, userRouter)





const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server working on port ' + PORT)
})

// MONGO_URI='mongodb+srv://Ozodbek:q0w9e8r7@cluster0.2834q.mongodb.net/MyLinks'