1. Set the `secretOrKey` of PassportJWT 
```
# middleware/auth.js
secretOrKey: 'jwtSecret_xxxxxxxx'
```

2. Set the URL of MongoDB
```
# add a .env file
MONGO_URI=mongodb://........
```