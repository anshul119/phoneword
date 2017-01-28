# Phoneword

Simple webapp made with love to convert digits to their equivalent words
([Phonewords](https://en.wikipedia.org/wiki/Phoneword))

>DEMO: [My Phoneword Webapp](http://ansul.xyz/phoneword)

##Stack

The app uses **ReactJS** as view layer, **Redux** for state management and **NodeJS** on the server side with
**Express**. For Module bundling, transpiling ES6 and sass compilation app is using **Webpack 1.x**.

App uses **EcmaScript6** standards with some Stage 2 features like spread operators. The app also uses **Morgan** for logging,
all the access logs can be found in `access.log`

## API

Phoneword comes with a **CORS enabled API**, The query string has 2 variables, `number` which accepts a set of digits and
`dictionary` which accepts 0 or 1. api responds with an array of all possible matches equivalent to entered number and
only meaningful matches if the dictionary is true. Here is how you can use that:

> /api?number=456&dictionary=0

this will return all the possible matches with th digit '456'.

##Project Setup

To setup the project simply clone the repo:

```
git clone https://github.com/anshul119/phoneword.git
```

and then:

```
npm i
```

#####development build: `npm run build`
#####Production build: `npm run build-prod`
#####Fire app: `npm run start`

This will start the app at your `localhost` on port `8080`.

