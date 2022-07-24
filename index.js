const express = require('express')
const app = express()
const { create } = require('express-handlebars')
const path = require('path')

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

const homeRouter = require('./routes/home')

app.use(homeRouter)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server working on port ' + PORT)
})