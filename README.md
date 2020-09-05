This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Simple Game, Mark I

## Working:

1. set up the background grid, make colors work
2. set up the map/level
3. set up movement controls


WORKING NOTES

1. Need to set up github-pages-react!







Setting up a grid:

The grid should appear within a container.
The grid needs to have state. ...

~~~

totoal layout could be...
stats on top,  
grid in middle,  
controls and more stats on bottom... 
...maybe instructions too  

Movement:

Player starts as an object within center of grid...   
bootstrap has 12 columns so maybe not exact center...
...eventually need to replace that with a pixelated version...  
...but that can be the necxt game
Player needs to be able to move side to side and up and down...
So there must be a state with player location?

--should screen scroll?
...not for fist game. Probably for second. Maybe add that in later  
...or wait to figure out what the game is...


Since screen is stationary we can simply have state changes change the players location.
movement buttons and keys (WASD || Arrows) will call a function to change coordinates.

// now what is the game about? We need to add something in there in order to make it a game...
It could just be a kobold picking up coins for all I care, lets make movement work and worry about details later!
-Gorm, thats a terrible idea, you know this.
Too late, doing it.


css transition animations as a reach goal...

--- ---

I am sort of turning this into a minimap app...


















## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
