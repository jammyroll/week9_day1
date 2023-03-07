// https://excalidraw.com/#json=moBmm7qB4lnE39m_rHpDu,4A6DNkNX3TCaw6ZzZcoTlg


// create router is responsible for the routes for the games resourse but is turned to gamesRouter in the server


// the client is only responsible for the dom the server is responible for the db


// server.js connects to mongo and prefills the db as well as setting up the base route for the website and the port it'll use


// gamesRouter is responsible for the restful routes of the games resourse

// they use express and the metch method to communicate with the server

// fetch takes an init object and is used to control different settings such as the method, headers or to strigify the body

// it uses 'http://localhost:9000/api/games/' and the 'http://localhost:9000/api/games/id'

// mongoddb is the database we're using to give permiance to our web app