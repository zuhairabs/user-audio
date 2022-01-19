# Audio File

### Steps to run

```
    git clone repo
```

**Demo Video in /demo/**

**API Routes** -

- /users
- /users/:id
- /uploadFile
  - formData -> ('file', file, 'userId', userId)

**Data - Run command below to add user data**

```mongodb
db.users.insertMany(
 [[
  {
    "balance": "$3,946.45",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "name": "Bird Ramsey",
    "gender": "male",
    "company": "NIMON",
    "email": "birdramsey@nimon.com",
    "audio": "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
  },
  {
    "balance": "$2,499.49",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "name": "Lillian Burgess",
    "gender": "female",
    "company": "LUXURIA",
    "email": "lillianburgess@luxuria.com",
    "audio": "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
  },
  {
    "balance": "$2,820.18",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "name": "Kristie Cole",
    "gender": "female",
    "company": "QUADEEBO",
    "email": "kristiecole@quadeebo.com",
    "audio": "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
  },
  {
    "balance": "$3,277.32",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "name": "Leonor Cross",
    "gender": "female",
    "company": "GRONK",
    "email": "leonorcross@gronk.com",
    "audio": "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
  },
  {
    "balance": "$1,972.47",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "name": "Marsh Mccall",
    "gender": "male",
    "company": "ULTRIMAX",
    "email": "marshmccall@ultrimax.com",
    "audio": "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
  }
])
```

Or in data folder users.json

- **Server**

```
    add mongodb uri to env
    add base url to env
    yarn or npm i
    nodemon app.js
```

- **Incomplete API Docs**
  - `http://localhost:3000/api-docs`

Client uses vite instead create-react-app which is faster

- **Client**

```
    yarn or npm i
    visit localhost:port
```

**Note: edit upload is incomplete on frontend**
