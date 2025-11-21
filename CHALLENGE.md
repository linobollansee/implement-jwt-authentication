Coding Challenge: Implement JWT Authentication
The current application has no securty layer. Every person who knows about the endpoints, can use them. It is time to implement jwt tokens to make the API more secure.

Requirements
Use JWT
Use Guards
If not already solved. Add a password to the user.
Implement a login logic
Implement a Authentication Layer and ensure that only the GET method routes of /login, /quotes, /quotes/:id are public available. Everyone should be able to read quotes but not manage them. User routes in general need authentication
Try to document everything within postman.
Additional Requirements
Add user interface to manage users and quotes
Implement an authorization layer to define which user can create, read or update quotes.
