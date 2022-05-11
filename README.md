# Backend as a service 

Final assignment from Coursera Server-side Development with NodeJS with focus on Mongoose Population
In this assignment, you will be extending the router to support the ability to save and retrieve a list of favorite dishes by each of the registered users. All registered users in the system should have the ability to save any dish as their favorite dish, retrieve all their favorite dishes and remove one or all their favorite dishes. At the end of this assignment, your should have completed the following:

Allowed users to select a dish as their favorite, and add it to the list of favorites that are saved on the server.
Allowed users to retrieve the list of their favorite dishes from the server
Delete one or all of their favorite dishes from their favorites list on the server.
Assignment Requirements

In this assignment, you will be supporting a new route `https://localhost:3443/favorite`, where the users can do a GET to retrieve all their favorite dishes, a POST to add a dish to their favorites, and a DELETE to delete the list of their favorites. In addition, the users should have the ability to issue a DELETE request to `https://localhost:3443/favorite/dishId` and delete the specific dish from the list of their favorite dishes.

Furthermore, when the user's token is checked in verifyOrdinaryUser() function, it will load a new property named decoded to the request object. From this req object, you can obtain the user's ObjectId by using the following expression. 

    
This assignment consists of the following three tasks:

- Task 1

In this task you will be implementing a new Mongoose schema named `favoriteSchema`, and a model named Favorites in the file named `favoriteRoute.js` in the models folder. This schema should take advantage of the mongoose population support to populate the information about the user and the list of dishes when the user does a GET operation.

- Task 2

In this task, you will implement the Express router() for the '/favorites' URI such that you support GET, POST and DELETE operations

When the user does a GET operation on `'/favorite'`, you will populate the user information and the dishes information before returning the favorites to the user.
When the user does a POST operation on `'/favorite'` by including {"_id":"dish ObjectId"} in the body of the message, you will (a) create a favorites document if such a document corresponding to this user does not already exist in the system, (b) add the dish specified in the body of the message to the list of favorite dishes for the user, if the dish does not already exists in the list of favorites.
When the user performs a DELETE operation on `'/favorite'`, you will delete the list of favorites corresponding to the user
When the user performs a DELETE operation on `'/favorite/dishId'`, then you will remove the specified dish from the list of the user's favorite dishes.
- Task 3

You will update app.js to support the new `'/favorite'` route.