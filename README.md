
Conway's Game of Life in React
=========

This is a React example for Conway's Game of Life as a code exercise.

* details:
    - TypeScript
    - functional components (not classes)

Rules:
---------

see [here](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

Todo:
---------

link - https://medium.com/@pongsatt/how-to-use-redux-in-typescript-ad0b5fe77933

* goal: no `js` or `jsx` files
* simple: render fixed grid in config
* better: render dynamic grid in config
* better: tick based on a timer ?
* more tick tests
* set fields to private
* X: simple: tick based on a button click
* X: write a function that allow manual seeding
* X: write a clear-grid function
* X: allow a random seed on initialization
* X: course-correct: Grid components should use store for the grid
* X: setup basic store
* X: IdService should return a map of <Neighbour, Cell> and not number[]
* X: why does a Cell contain neighbours?
* X: build empty world without any UI
* X: seed world without any UI
* X: play round without any UI

Notes:
---------

* to setup: `./install.sh`
* to run: `./run.sh`
* to test: `./test.sh`
* to build: `./build.sh`

### project creation

* versions:
```
$ node --version
v16.13.2
$ npm --version
8.1.2
$ npx --version
8.1.2
```

* commands:
```
npx create-react-app my-app --template typescript
npm install redux
npm install react-redux
npm install react-router-dom@5
npm install "@reduxjs/toolkit"
npm install --save @types/react-router-dom
npm install -D @types/react-redux
npm install -D typesafe-actions
```

### useful references

* https://medium.com/@pongsatt/how-to-use-redux-in-typescript-ad0b5fe77933
*  https://redux.js.org/usage/usage-with-typescript

