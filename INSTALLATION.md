# Installation

#### Context

For me, installing tailwind is always a bit challenging, since there are the version 3 and 4 that use very different project config files. 

## Step Vite : 
[Guide / Docs](https://vite.dev/guide/)
Vite template with React, plain JS. :
`npm create vite@latest`
Vite is your virtual environment.

## Step Tailwind :
[Guide / Docs for vite](https://tailwindcss.com/docs/installation/using-vite)
[Guide / Docs](https://tailwindcss.com/blog/tailwindcss-v4)
In the V4 version of tailwind, we do not need autoprefixer. We do not need to create a tailwind config file either, modifying the vite config file is enough.
`npm i tailwindcss @tailwindcss/vite;`

In the vite config file, add in the plugins key the `tailwindcss()` entry, you will need to import it in the vite file, so add the line `import tailwindcss from "@tailwindcss/vite";`

## React Router
[Guide / Docs](https://reactrouter.com/start/data/installation)
Will be usefull to navigate between pages. As of today, this should install React-Router V7.
`npm i react-router`

## React Aria
[Guide / Docs](https://react-spectrum.adobe.com/react-aria/getting-started.html)
Will provide style-less prebuilt components that already populates them with aria data.
`npm i react-aria-components`

There is a list of prebuilt components that you can explore with :
[Link](https://react-spectrum.adobe.com/react-aria/components.html)

## Daisy UI
[Guide / Docs](https://daisyui.com/docs/install/vite/)
To facilitate the creation of dynamic and stylistic components. Assumes you have installed vite for your environment beforehand. Install with :
`npm install daisyui@latest`

## Phone gestures + Animation 
[Use-Gesture Docs](https://use-gesture.netlify.app/docs/)
[React Spring Docs](https://www.react-spring.dev/)

Spring is a styling library, used mostly for animation. We want to explore a tiny bit with it to see if it is interesting. Use-gesture provide a list of gestures, used like hooks, that will trigger an action on:
- Drag
- Pinch
- Horizontal wheel
- Vertical wheel
- Hover
- Gestures (combination)

Install each with :
`npm install @use-gesture/react`
Spring is not on React v19 yet, so we will not use it for now.
`npm i @react-spring/web`  


## React Query 
[Guide / Docs](https://tanstack.com/query/latest/docs/framework/react/installation)
In prevision for backend connectivity. Install with 
`npm i @tanstack/react-query`


## React Forms
[Guide / Docs](https://react-hook-form.com/get-started)
Hooks for easier management of forms. Install with :
`npm install react-hook-form`

## JWT
[Libraries](https://jwt.io/libraries)
The frontend only uses jwt-decode to render the base64URL into a readable json token. Install with: 
`npm install jwt-decode`


## Leaflet
[Docs](https://react-leaflet.js.org/docs/start-introduction/) 
For maps. Will provide a neat component that does not depend on API calls or keys and allow some decent level of customization. A bit old fashioned but is a good placeholder map for now.
`react-leaflet leaflet`

## Gasp
[Docs](https://gsap.com/resources/React)
Useful for animation, some gestures.
`npm install @gsap/react`