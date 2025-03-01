## Overview of application

This it the backend portion of an application that allows a user to interact with a database that stores information about toppings and pizzas. Specifically, they are able to read, update, create and delete records from said database.

The backend creates a server that listens for incoming requests to interact with the database and properly responds to them given that they come from an website that has been approved as being safe to respond to. 

## How to build, test, and run the application locally

To build, test, and run the application locally, you must first install its dependencies. First, open a terminal and navigate to the root directory of this project. Afterwards, run the following command on the terminal to install the dependencies: 

```
npm i
```

Next, you have to make one change to prevent the server from rejecting the local host as a safe website to interact with. Open up the corsOptions.js file and change line 5 to 

```
if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
```

Since local host typically returns an undefined origin, changing this line automatically approves the website for CORS. After this, you can start the server with 

```
 npm start
 ```

 and then test out the API routes however you prefer to.

 ## Technical Choices

The first technical choice I made was which database to go with. For this application, I decided to go with MongoDB because it was free and highly available with no slow start in comparision to other databases like AWS RDS or Azure SQL whose free tier were more limited in either how long you can use it for free or had a slow start that required warming them up after long periods of inactivity.

I also made sure each error gave a custom message to inform the user what is wrong with their request because I thought it would more helpful for the frontend to be told outright instead of trying to reason it out themselves. This is especially the case if the backend code ever changes to where there's multiple instances of returning errors with the same status code, it can be used to differentiate between them.

In regards to CORS, I made a file that described which origins are allowed because the backend interacts with the MongoDB database directly, which meant that it would be risky and unsecure if I let it approve every website that asked for information. As such, I limited it to just the frontend that I created, since its intended purpose is to make changes to the database and if I ever wanted to add in authentication/authorization in the future, I could make sure sensitive tokens are only used by users of the website with some more setup.

Another technical choice I made was defining a pizza as being unique through its name. As these are pizza recipes, I figured that there could always be the case where two different types of pizzas use the same toppings, but with different crust or another property. Since there is no current plan for adding on other properties, I figured it was best to just have the name be the differentiating matter between any similar pizzas as the user would know best what kind of pizza it is despite the same toppings. That being the case, I also made toppings optional when creating a new pizza in the event they wanted no toppings at all.