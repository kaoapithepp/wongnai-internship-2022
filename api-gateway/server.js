const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../json-server/db.json');
const middlewares = jsonServer.defaults();

// routes
server.use(jsonServer.rewriter({
    // for GET all reviews
    '/api/reviews/' : '/trips',
    // for queary only the selection
    '/api/search/:keyword' : '/trips?q=:keyword'
}));

// configuring running port
const port = process.env.PORT || 5000 ;

// calling middlewares and database
server.use(middlewares)
server.use(router)
server.use(jsonServer.bodyParser)

// starting a server
try {
  server.listen(port, () => {
    console.log('JSON Server is running at port ' + port);
  });
} catch(err) {
  if(err){
    console.log(`Response status : ${err.status}\nmsg : ${err.message}`);
  }
}
