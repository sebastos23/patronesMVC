let express = require('express');
let app = express();
let indexRouter = require('./routes/indexRouter')
let productsRouter = require('./routes/productsRouter')

app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log('Servidor levantado');
})
app.use('/index', indexRouter)
app.use('/product', productsRouter)