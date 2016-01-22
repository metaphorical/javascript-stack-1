#Full JavaScript stack application demo
#####[Express.js, React, Falcor, ES6, Webpack, CSS
Modules, PostCSS]
[![bitHound Overall Score](https://www.bithound.io/github/metaphorical/javascript-stack-1/badges/score.svg)](https://www.bithound.io/github/metaphorical/javascript-stack-1)   [![bitHound Code](https://www.bithound.io/github/metaphorical/javascript-stack-1/badges/code.svg)](https://www.bithound.io/github/metaphorical/javascript-stack-1)


##How to run it

```
npm install
npm run watch
```

##What is it (notes on the app, stack and learning stuff)

Me playing with technologies and concepts... Most of the code will be documented (at least I'll try) since sole purpose is education...

Server is built in Express and will utilize open movie db API and maybe more similar APIs. Most of core stuff are written in ES6.

Client side structure is based around components with every component having it's js, html and css bundled together. This is achieved through usage of css modules.

###Research conclusions

####React
React allows us access to full range of cutting edge web UI concepts plus it allows us different conceptual approach to separation of concerns (full separation of concerns vs separation of technologies which is only real separation present in most other approaches).

It also allows us to render components on server side, giving us space to accomodate for any specification.

####Falcor
Really useful and highly versatile library that can fully change and even improve a way you handle data in your app, especially when you are working in microservices (like) architecture with several services providing data.

Apart from being data fetching library it includes special approaches that are allowing us to threat all the data as if it is available offline.

####CSS Modules
Great way to approach React based view architecture - when you build component you can have your js logic in js file, your html structure in jsx file and your css in css file all connected inside js file. Every component in separate folder etc...
For performance and better SEO, I also solved server side rendering... This part is little crude and webpack config needs to be dried, but everything performs really good.

####Routing

Route I took with routing (:laughing:) is rather established know-how approach then new stuff approach. I picked backbone router for client side and will implement server side routing with fully reusable (isomorphic) code in expressjs router...

I am considering doing same router on both sides ( probably flatiron director ), but at this point this can be considered production ready paradygm.

I went away from react-router that is going towards being goto solution for this because of syntax which is opposite of what I want to use and also I already had knowledge of solution with same versatility (even bigger since it accepts json which can be used to configure backend routers).

###Stack

Stuff that I am piling up inside this playground

####Frameworks, libraries and stuff

* React
* Falcor
* Backbone.js router
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

[Backbone](http://backbonejs.org/)

[Atom react plugin](https://orktes.github.io/atom-react/)

[Sublime Text ES6/Babel/react plugin](https://github.com/babel/babel-sublime)

[Expressjs compression middleware](https://www.npmjs.com/package/compression)

[Webpack dev middleware](https://webpack.github.io/docs/webpack-dev-middleware.html)


####Usefull read/watch - lots of solutions/inspirations for solutions in this repo come from here:

[Structuring React project](http://reactjsnews.com/structuring-react-projects/)

[React - Complementary Tools](https://github.com/facebook/react/wiki/Complementary-Tools)

[Developing With Webpack](http://survivejs.com/webpack_react/developing_with_webpack/)

[Netflix JS talks - Falcor](https://www.youtube.com/watch?v=z8UgDZ4rXBU)

[CSS Modules](http://glenmaddern.com/articles/css-modules)

[CSS Modules 2](http://www.sitepoint.com/understanding-css-modules-methodology/)

[Backend Apps With Webpack](http://jlongster.com/Backend-Apps-with-Webpack--Part-I)

[Netflix JavaScript Talks - Async JavaScript with Reactive Extensions](https://www.youtube.com/watch?v=FAZJsxcykPs&list=PLfXiENmg6yyU5kEHyo1kYkq7HEzBOoiTT&index=4)


####StackOverflow etc

[React server side render Babel 6x](http://stackoverflow.com/questions/33472258/react-serverside-rendering-unexpected-token-jsx-and-babel)
