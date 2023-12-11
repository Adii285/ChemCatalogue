# Full Stack Web Application

We have 30 chemical compounds with you and their details.
Details Include:
1) Name
2) Image
3) Description

A webapp for where anyone can directly look into the compounds and its details.
Editing of details also possible in case someone wants to change the information.

## Tech stack
Backend - Node.js, Express, Sequelize, MySQL.

Frontend - Angular CLI 16.0.0, HTML, CSS.

## Front End Tasks
1) Make a card view with all the compound names and their images as separate cards.
2) Use Pagination.
3) (Use Routing) On click of each card change the route to a page to display the relevant compound details.
   
## Backend Tasks
1) Make CRUD API to access/edit Compound list and details.
2) Make db table to access/store the given data (data provided in csv format from easy Import).


## Steps to run this project
1. Clone the repository to your local machine.
2. Create a MySQL database and make a table named 'compounds' with query -
   `CREATE TABLE compounds (id INT, compoundName TEXT, compoundDescription TEXT, imageSource TEXT, imageAttribution TEXT, dateModified DATE); `
3. Update the `dgconfig.js` file in `/backend_node/configs` and also upload the csv file to the created table.
4. Navigate to the `backend_node` directory and run `npm install` to install ExpressJS and Sequelize dependencies.
5. Navigate to the `frontend` directory and run `npm install` to install Angular dependencies.
6. Start the Express server using `nodemon server.js` and Angular app using the script `npm start`.
7. The `proxy.conf.json` file in frontend directory makes the angular app make its api calls to port no. 8080 and therefore integrates the backend with frontend running on port no. 4200.

There are currently 5 API calls in this app-

1. GET /apii/compound: Retrieve all compounds with pagination.
2. GET /api/compound/:id: Get compound by ID.
3. POST /api/compound/: Add a new compound.
4. PUT /api/compound/:id: Update details of a compound with a specific ID.
5. DELETE /api/compound/:id: Delete a compound with a specific ID.
