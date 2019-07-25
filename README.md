# Area 51 Casualty Counter

## ***DATABASE***

- users
```sql
create table users(
    user_id serial primary key,
    username varchar(32) not null,
    password text not null,
    email text not null
);
```

- user profile
```sql
create table profile(
    profile_id serial primary key,
    picture text default 'https://res.cloudinary.com/saturnslist/image/upload/q_auto/v1561159141/kcopfm6ygbyzgdu2mzxb.jpg',
    alive boolean default true,
    distance float,
    user_id integer references users(user_id)
);
```
## ***SERVER***

### dependencies
- express
- massive
- dotenv
- express-session
- bcrypt

### server file structure
- server/
    - index.js
    - middlewares
        - middleware.js
    - controller
        - killCountController.js

### endpoints
***auth***
- login: => /api/login
- logout: => /api/logout
- register: => /api/register
- userSession: => /api/user_session

**killCount Endpoints**
- getAllUsers: => /api/users
- killUser: => /api/killUser
- updateDistance: => /api/distance
- deleteUser: => /api/obliterate

## ***CLIENT***

### *dependencies*
- axios
- react-router-dom (BrowserRouter)
- redux
- react-redux
- node-sass
- react-icons/fa
- http-proxy-middleware
- redux-promise-middleware

### *routes*
- home => / => login
- profile => /profile => Profile.js
- map => /kill_map => KillMap.js

### *file-structure*
- src/
    - components/
        - profile
            - Profile.js
            - Profile.css / .scss
        - killMap
            - KillMap.js
            - KillMap.css / .scss
        - Home
            - Login.js
            - Login.css / .scss
    - App.js
    - App.css
    - reset.css
    - index.js
    - redux
        - store.js
        - reducer.js
    - setupProxy.js        