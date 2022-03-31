const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

/**
 * handle parsing request body
 */
app.use(express.json());

/**
 * handle requests for static files
 */
app.use(express.static(path.join(__dirname, "./public")));

//* Get Requests
app.get("/express_backend", (req, res) => {
  //Line 9
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Line 10
}); //Line 11

// Homepage request from launching site
app.get("/", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "./public/index.html"))
);

// Game page request from pressing play.
app.get("/play", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "./public/game.html"))
);

// catch-all route handler for any requests to an unknown route
app.use("*", (req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);

  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start Server
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;

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
