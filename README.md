# <p align="center">![2022-07-14_06-23](https://user-images.githubusercontent.com/89748211/178892285-f27c41ee-8e10-4dbd-a07a-4c73920618ef.png)</p>


## About the project

Spoint is an interactive online game that uses google maps to challenge the user to guess random locations on earth.
<br>
The idea was that we can help people improve their geographic skills while they have some fun.
The game beggins by 'dropping' the player in an unknown location on google street view. The player can roam free
searching for clues (landmarks, street signs, buildings, etc.) to guess the location. At the same time a google world map is 
present in the corner of the screen where the player can mark their guess.

## Features

- Landing page, where you can go to login/register pages, change light/night mode, see some details about the app and some reviews from the users.

 ![2022-07-14_06-23_1](https://user-images.githubusercontent.com/89748211/178892606-227716f7-9831-4918-bed5-04154aab9e50.png)

- Login page

 ![2022-07-14_06-27](https://user-images.githubusercontent.com/89748211/178892715-ec50e394-8243-46b8-a50b-390d8c06c9cd.png)

- User's gameplay page, where you can choose a type of game

 ![2022-07-14_06-27_1](https://user-images.githubusercontent.com/89748211/178892777-3ddadb77-9342-47e0-8679-d551a3c2fdce.png)

- User dropdown menu

 ![2022-07-14_06-27_2](https://user-images.githubusercontent.com/89748211/178892849-69ff5943-8291-4107-b13b-065a87e4ed56.png)

- Guessing location page

 ![2022-07-14_06-31](https://user-images.githubusercontent.com/89748211/178892923-e093a72b-5434-4e41-9590-116dbbec406d.png)

- Result page, where you receive the distance between location and your guess

 ![2022-07-14_06-32](https://user-images.githubusercontent.com/89748211/178893036-9f525320-0e9d-469c-9e76-33fed4570ca1.png)

## Security

Integration with Spring Security and add other filter for jwt token process.
The secret key is stored in application.properties.

## Database
It uses a PostgreSQL database (for easy local test without losing test data after every restart), can be changed easily in the application.properties for any other database.

## Getting started

You'll need Java 17 installed.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Try it out with Docker

You'll need Docker installed.
