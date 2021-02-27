# CRUD(Create, Read, Update, Delete) fullstack JS app project with pure NodeJS server and ReactJS frontend

# ToDo
- Add success, error notifications
- Add confirm modals
- Add auth with token

## Used Techologies  
### Backend
- Native NodeJS
- nodemon
- Sequelize for database manipulation
- mysql2
(After Refactoring)
- Express
- Nodemon
- MongoDB (mongoose)
- TypeScript
- Cors

### Project Architecture
```
📦client
 ┣ 📂public
 ┣ 📂src
 📦server
 ┣ 📂models
 ┣ 📂routes
 ┣ 📜index.ts
```
### Frontend
- ReactJS (Create-react-app)
- Styled Components
- react-redux
- redux-form
- redux-thunk  
(Add after Refactoring)
- TypeScript
- Axios
## How to test it
Clone repository with command  
`git clone https://github.com/master-bogdan/crud-fullstack.git`  
Go to directory with `cd /crud-fullstack`  
Run `npm init` to install dependencies  
You must have local server for database.  
In `./server/db/` folder you can find `crud.sql` database dump file. Also there is sequelize migration, watch official sequelize documentation  
Run `npm run prod` for start server

## Available Scripts
In the project directory, you can run:

`npm run server`
This just start NodeJS server

`npm run prod`
This command start production build

`npm run dev`
Runs the app and server in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

`npm test`
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

