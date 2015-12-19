##Playing with *"Bleeding edge"* Front End stack

Me playing with technologies and concepts... Most of the code will be documented (at least I'll try) since sole purpose is education...

Server is built in Express and will utilize open movie db API and maybe more similar APIs. Most of core stuff are written in ES6.

Client side structure is based around components with every component having it's js, html and css bundled together. This is achieved through usage of css modules.

###Research conclusions

####Falcor
Really useful and highly versatile library that can fully change and even improve a way you handle data in your app, especially when you are working in microservices (like) architecture with several services providing data.

####CSS Modules
Great way to approach React based view architecture - when you build component you can have your js logic in js file, your html structure in jsx file and your css in css file all connected inside js file. Every component in separate folder etc... **Big problem** at this point is server side rendering which is still crucial for SEO, and may be one of performance factors for your app. Doing server side rendering with this architecture can be a pain and require some suboptimal code manipulation and architectural compromises.


###Stack

Stuff that I am piling up inside this playground

####Frameworks, libraries and stuff

* React
* Falcor
* Express.js
* JADE templating engine (for now - it is plan to remove it and do everything in jsx)

####Build, transpile, compile, compress

* Webpack
* Babel

###Useful links

[ReactJS](http://facebook.github.io/react/)

[React dev tools](http://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html)

[Falcor](http://netflix.github.io/falcor/)

[Webpack](http://webpack.github.io/)

[Express](http://expressjs.com/en/index.html)

[Repo for Express server boilerplate](https://github.com/metaphorical/quantum-boilerplate)


####Usefull read/watch - lots of solutions/inspirations for solutions in this repo come from here:

[Structuring React project](http://reactjsnews.com/structuring-react-projects/)

[React - Complementary Tools](https://github.com/facebook/react/wiki/Complementary-Tools)

[Developing With Webpack](http://survivejs.com/webpack_react/developing_with_webpack/)

[Netflix JS talks - Falcor](https://www.youtube.com/watch?v=z8UgDZ4rXBU)

[CSS Modules](http://glenmaddern.com/articles/css-modules)

[CSS Modules 2](http://www.sitepoint.com/understanding-css-modules-methodology/)

[Backend Apps Aith Webpack](http://jlongster.com/Backend-Apps-with-Webpack--Part-I)



####StackOverflow etc

[React server side render Babel 6x](http://stackoverflow.com/questions/33472258/react-serverside-rendering-unexpected-token-jsx-and-babel)
