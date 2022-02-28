// NEED:
/* 
[] drop
    - drop piece in first empty row. will scan board to find the next open spot. or quicker would be for the last drop piece to send the new location.
    - second row() find all spots where the next piece can fit. put them in an array and randomly choose that spot.
    - if statement that says if there are no more spots for that piece on that row (check for on row above). 
        - an array of pieces both rottated and normal.
    - then drop and repeat




*/

//* Structure
//hook up html to js page.
// create divs on html page and then with react
// each div need id,
// var length and width of the board.
//create matrecie full of zeros.

//* Create pieces

////////////* MOVEMENT

// Pick random tetrimino
// obj of the available pieces and what they need to fit into a spot. find

////////* Find Spot

//* First row

// find the first instance of 0s and place piece.
//isFirstRow boolean var

//* Find Spot

// Find the spots that don't have a spot. find spot randomley starting from end. then front. then middle or a random one each time.

//////////////*

//* place

// Have a array of objects that refrence each row and have a value for what each bottom corresponds to each top. making it super easy to place pieces

//* Drop

// every y value will loose a value with every drop.

//////////////* TREE FOR REACT APP */////////////

/*    
<APP></APP>
----->
    <Canvas> </Canvas>
        ---->
            --->  <BlockRain></BlockRain> ---> {for loop to create matrice, state width & length}, () Methods: {drop piece, }

            --->  <Container`></Container`> --> {Logo/Title, play btn. stats btn. high scores btn. about btn. 2p/ 1p slider. }

                    --->
                        <Logo></Logo>
*/

//.............. Other Pages/Popups

//* TOP SCORES

//* User Stats

//* Choose your name:
// Have a ready button you click and turns bright with sound when you click ready.
// searches to make sure the name is available that you choose.

/********************* BACKEND */

// Giant object that stores user names and passcodes. and past results w/ detail of who they played. how the other person did, date/&Time, time alive, level, score, ability to sort score based on thes factors?
// Mehods. search find retrieve data, delete user, if exists or wrong passcode statements. is new user message. and display create user.
// disregard games that were ended under 1 min. 1

/*  
SUDO CODE
*/
