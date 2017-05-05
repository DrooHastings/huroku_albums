Steps from Client/Server Review:
===


Set up Node + Express to use Body-Parser
---
[x] npm init
[x] npm install express --save
[x] npm install body-parser --save

Client side setup
---
[x] created public folder
[x] create vendors folder in public
[x] create views folder in public
[x] create index.html and styles.css in views folder
[x] place jquery js file in vendors
[x] create cripts folder in public
[x] create client.js in scripts
[x] src jquery, then albums.js
[x] link styles.css
[x] add .gitignore file
[x] gitignore .DS_Store and node_modules

Server setup
---
[x] create'app.js'
[x] require the following:
 - express
 - path
 - body-parser
[x] set app to be an express app: var app = express() ;
[x] set up uses:
 [x] bodyParser.urlencoded
 [x] express.static for public folder
[x] add spin up server code (app.listen)
[x] test server up
[x] add serve the html file code
[x] restart server
[x] open page in browser

AJAX get
---
- add AJAX get call function in client.js
 - makes a GET call to a route
 - console logs out the response
- run this function on doc ready
- add get route to app.js
 - logs out (in terminal) that states that the route has been hit
 - responds with a simple object
- restart server
- reload page
- check the function is running on page load
- check the terminal that the get route's console log is showing correctly
- check the browser console that the server response is logging correctly

Routes:

GET Route -- gets albums from db and appends to DOM
POST Route -- grabs data off input fields on DOM, and sends to db
DELETE Route -- deletes album via button on the DOM and sends Delete to db

Database


[x] Define Schema

{
  artist: ,
  imageURL: ,
  name: (album),
  releaseYear:
}

[x]  create var album = new mongoose.model('album', albumSchema);

[x] Dummy Data
