# crud-app

## OverView
```
A vue CRUD App to Add/Delete/Update Users using Json-server.
```
## Installed Dependencies 
```
* axios
* json-server
* uid
* vuex
```
## Feature Explanation
```
* When users page is created , it dispatches an action to fetch data from json server and store it in vuex.
* While Adding a new user , if the post request is sucess than it will consequently dispatch the same action to fetch all updated users.
* When selecting a single user to edit it , instead of passing the user value as props , its id is fetched from the url params and using created lifecycle method , single user data is fetched from json server.

```



## Project setup
```
Run "npm install" to install all dependencies and packages 
```
## Load JSON Server
```
Run "npm run users" to start the json-server  ( Note : Load the JSON Server first so that there's no issue while loading the front-end)
```

### Compiles and hot-reloads for development
```
Run "npm run serve" to load the frontend Server.
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
