const path = require("path");
const express = require("express");
const app = express();
// const PORT = 3000;

//* Get Requests

// Homepage request from launching site
app.get("/", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "./public/index.html"))
);

// Game page request from pressing play.
app.get("/play", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "./public/index.html"))
); // needs proper route

// get requests for login popup

//* METHODS

//* Account

// createUser()
/*
        { 
            username: 
            password: //4 digits
            results:{

            }

        }


    */

// verifyUser()

//* Results

// addResults() -
//updateTopScores()

/*
    
    {
        date:
        win: //true, false
        score:
        level:
        timeAlive:
        enemy: //name
        enemyScore:
    }
    
    
    
    */

// showUserResults() - GET request

// showTopScores() - GET requests
// compare new result with top 100 || 1000+ to see if it fits in it. adds itself in correct location.
//
