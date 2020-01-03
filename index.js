//INIT EXPRESS
const express = require('express')

//INIT BODY PARSER
const bodyParser = require('body-parser')
require('express-group-routes')


const app = express()
const port = process.env.PORT || 5000

//allow this app to receive incoming json request
app.use(bodyParser.json())

//enable CORS 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});


// //import controller
const { authenticated } = require('./middleware')
const AuthController = require('./controllers/auth')
const CategoryController = require('./controllers/categoriesControllers')
const EventController = require('./controllers/eventsControllers')
const UserController = require('./controllers/usersControllers')
const OrderControllers = require('./controllers/orderControllers')



app.group("/api/v1", (router) => {

    //auth API
    router.post('/login', AuthController.login) // for login
    router.post('/register', AuthController.register) //for register
    // CATEGORY ROUTER
    router.get('/categories', CategoryController.index) //get all


    //router FAVORITES
    router.get('/user/:id', UserController.showFavorites)

    //router event
    router.get('/events', EventController.showByToday) //get event by start_time
    router.get('/category/:id/events', EventController.showByCategory) //get event by category
    router.get('/event/:id/events', EventController.showById) //get by event id
    router.get('/events/:title', EventController.showByKeyword) //get by keyword
    router.post('/post/event', authenticated, EventController.addEvent) //get event by id event

    router.post('/post/order', OrderControllers.addOrder)
    router.get('/orders/:status', OrderControllers.showOrderByStatus)
    router.put('/order/:id', OrderControllers.updateOrderStatus)

    //ROUTER USER
    router.get('/profile/:id', UserController.showById)



})
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => console.log(`Listening on port ${port}!`))