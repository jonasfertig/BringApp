const express = require('express')
const bodyParser = require('body-parser');
const deliveryRouter = require('./3_routes/delivery.routes.js')
const itemRouter = require('./3_routes/item.routes.js')
const userRouter = require('./3_routes/user.routes.js')
const delivery_referenceRouter = require('./3_routes/delivery_reference.routes.js')
const app = express()
const port = 3001

//Keycloak config -------------------------------------------------------------------
const session = require('express-session')
var cors = require('cors')
var memoryStore = new session.MemoryStore()
app.use(cors())

app.use(session({
secret: 'some secret',
resave: false,
saveUninitialized: true,
store: memoryStore
}));
//----------------------------------------------------------------------------------

let con = null;


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.get('/connect', function (req, res){
  
  })

app.use(bodyParser.json());

app.use('/delivery', deliveryRouter)
app.use('/item', itemRouter)
app.use('/user', userRouter)
app.use('/reference', delivery_referenceRouter)
app.listen(port, () => {
  console.log(`Example app listening at Portyport ${port}`)
})