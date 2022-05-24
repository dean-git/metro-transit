# Metro Transit App

## Prerequisites 

install nodejs:
### https://nodejs.org/en/

### disable cors to run locally
In order to run locally you will need to account for cors.  This can be done with a proxy.  An easy \
way is to disable it for the browser you are using.  There are browser extensions, settings that can be used \
depending on the browser.  Here are some instructions on a couple of options:

- Chrome: install `Cors Unblock` add-on ** application verified with this option
- Safari:  enable the develop menu by going to Preferences > Advanced; \
         select “Disable Cross-Origin Restrictions” from the develop menu;
- Firefox: install `CORS Everywhere` plugin

## Steps to build and run the application

Clone the project from github:
### `git clone https://github.com/dean-git/metro-transit.git`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  Press 'a' to run the full test suite with watcher running. Follow provided intructions for other options.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Assumptions
- Latest version of React was used.
- Node LTS version used.
- Sass was used for css
- React bootstrap was added for styling - https://react-bootstrap.github.io/
- As React 18 was used React Testing Library was used for tests

## Required steps
- Select a bus route from a list of available routes - done
- Select a direction for a bus route - done
- For a give route and direction, display the stops - done
- Respond reasonably to browser back and forward buttons - done
