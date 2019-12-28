# Twitter Clone

## What technology does this app use
This project uses Docker to containerize certain functions of the app.  

### App Structure

There are four docker containers in this project. These are:

* Auth container - handles authentication
* Api container - handles application's backend
* Client container - handles the frontend (what the user sees)
* Database container - handles the application data

### Client
* React
* Typescript

### API Server
* Node.js
* Express

### Authentication Server
* JWT
  

### Database
* MySQL




## Authentication
This app uses JWT and OAuth to verify it's users.

First it uses a vendor OAuth component in the front-end to get the data of the user.

Then it sends a POST request to the auth server to create an access token and a refresh token. It stores the newly generated refresh token to the database for future use.

```
POST http://auth-server/login
```


Then in the auth server it calls to the api server to add the user in the database if the user is not yet registered.

```
POST http://api-server/register
{
    token: 'JWT token here'
}
```
