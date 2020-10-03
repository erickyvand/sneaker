[![Build Status](https://travis-ci.org/erickyvand/sneaker.svg?branch=develop)](https://travis-ci.org/erickyvand/sneaker)
[![Coverage Status](https://coveralls.io/repos/github/erickyvand/sneaker/badge.svg?branch=develop)](https://coveralls.io/github/erickyvand/sneaker?branch=develop)
# SNEAKER CITY

## How to get started with this API
This project was developed in NodeJs, in order to test it you have to follow these steps:

- Install `node` if you don't have it in your computer
- On your computer open terminal or CMD
- Run git clone `https://github.com/erickyvand/sneaker.git` to get the project on your computer
- Run cd `sneaker` to move to the location of the project
- Once your in `sneaker` folder, run `npm install` to install packages.
- Install postgres database if you don't have it.
- Once installed create a database, the database name should be on your choice but you can name your database `sneakercity` if you wish.
- Inside the project folder structure find `.en.example` file you will find `DATABASE_URL=postgres://database_username:database_password@host:5432/database_name`, replace `database_username` with your `postgres username`, `database_password` with your `postgres password` (Note: if your database does not required a password leave that place empty), host with your `host` and `database_name` with the database you created.
- Create `.env` file in your project and add a connection to database.
- Remember in your terminal we are still in `sneaker` folder
- Run `npm run pretest` to run migration and create tables in your database and insert data into your tables.

## How to test the functionality
- Install Postman if you don't have it
- Open your terminal or CMD navigate to the project folder and run `npm run dev-server` to start the server.
- Once the server started it will listen on port 5000.
- Open postman and start testing the functionalities of the endpoints.

## List of endpoints
- /GET `/api/sneakers`: this endpoint view a list of latest sneakers
- /GET `/api/sneakers/:sneakerId`: this endpoint select a sneaker to view size availability
- /POST `/api/sneakers/:sneakerId/add/:size`: this endpoint add to cart selected sneaker and size
- /GET `/api/sneakers/cart/view`: this endpoint view all cart.
- /GET `/api/sneakers/:cartId/cart`: this endpoint view sneaker that are in cart
- /POST `/api/payments/:cartId`: this endpoint make payment of sneaker that is in cart.
- /GET `/api/payments/:cartId/payment`: this endpoint get specific payment.
- /GET `/api/descriptions`: this endpoint view all descriptions

Note: You can run `npm test` to check the test coverage.