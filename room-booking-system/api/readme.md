1. Set the `secretOrKey` of PassportJWT 
```
# middleware/auth.js
secretOrKey: 'jwtSecret_xxxxxxxx'
```

2. Set the URL of MongoDB
```
# add a .env file
MONGO_URI=mongodb://.........@cluster0-shard-00-00.enocw.mongodb.net:27017,cluster0-shard-00-01.enocw.mongodb.net:27017,cluster0-shard-00-02.enocw.mongodb.net:27017/.........
JWT_SECRET="..........."
JWT_ALGORITHM="HS256"
NODE_ENV=dev
```