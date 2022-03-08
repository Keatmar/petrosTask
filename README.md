### How do I get set up? ###

* Clone repo locally
* Run <b>npm install</b>
* Start with <b> npm start </b>


### Migrate ###

* Use jss instead of css files, more info on https://cssinjs.org/?v=v10.6.0#react-jss-example *
* Using functional instead of class components (hooks)
* Using hooks instead of connect HOC on redux. https://react-redux.js.org/api/hooks

* src/components - Reusable components like buttons etc *
* src/pages - Each file in this folder represents a level 1 page. Every component used in a specific page creates a subfolder i.e src/pages/Welcome/Welcome.jsx and src/pages/Welcome/TestComponent/TestComponent.jsx *
* src/modules - Redux modules, sagas, reducers etc
