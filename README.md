# Movie showing on a Cinema API

## About
This is an API made with _NodeJS Express_ that basically stores a key-value. <br/>
Database: _MongoDB_


## Methods
### POST
POST new data to https://vault-dragon-test.herokuapp.com/v1/cinema.<br/>
Example JSON body: `{ "cinema4":"Aquaman" }` <br/>
You can update the current movie of a cinema by sending another POST request using the same key(cinema).

### GET
* Get All cinema and movie from https://vault-dragon-test.herokuapp.com/v1/cinema
* Get All recorded data (history) from https://vault-dragon-test.herokuapp.com/v1/cinema/all_history
* Get movie of a specific cinema from `https://vault-dragon-test.herokuapp.com/v1/cinema/<key>` <br/>
  Example: https://vault-dragon-test.herokuapp.com/v1/cinema/cinema4
* Get movie of a specific cinema and timestamp from `https://vault-dragon-test.herokuapp.com/v1/cinema/<key>/<timestamp>` <br/>
  Example: https://vault-dragon-test.herokuapp.com/v1/cinema/cinema1/1546996439373
  

## Test
Below are the instructions for running the test in this API locally:
1. Clone this repo.
2. Run `npm start` or `npm run start`
3. Run `npm test` or `npm run test`
