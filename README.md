# CRUD (Create, Read, Update, Delete) fullstack JS app [DEMO](https://crud-fullstack.vercel.app/)  
Fullstack Rest API app where you can create cards with your favorite characters  

## API request map
```
GET /api - return all characters in JSON
POST /api - make new character, accept Image URL, Title, Description
PUT /api - updates character info
DELETE /api - delete character
```

# ToDo
- Add success, error notifications
- Add confirm modals

## Used Techologies  
### Backend
- Native NodeJS
- nodemon
- Sequelize for database manipulation
- mysql2  
### After Refactoring 28.02.2021  
- Express JS
- Nodemon
- MongoDB (mongoose)
- TypeScript
- Cors  
- JWT Token

### Frontend
- ReactJS (Create-react-app)
- Styled Components
- react-redux
- redux-form
- redux-thunk  
### After Refactoring 28.02.2021   
- TypeScript
- Axios  

## How to test it local
Clone repository with command  
`git clone https://github.com/master-bogdan/crud-fullstack.git`  
Go to directory with `cd crud-fullstack/`  
Then `cd server/ && npm install`  
Then `cd client/ && npm install`  
Back to `/server` directory and run `npm run dev`  


## Available Scripts
In the project directory, you can run:

`npm run start`
This just start NodeJS server

`npm run dev`
Runs the app and server in the development mode.  
http://localhost:3000 - for frontend  
http://localhost:3001 - for API backend  

The page will reload if you make edits.
You will also see any lint errors in the console.

## Deployment
Frontend deployed on Vercel  
Backend deployed on Heroku
