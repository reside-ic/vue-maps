# vue-maps
A library of Vue map components for model visualisation and exploration.

## Installation
* Install from npm:
  ```
  npm install @reside-ic/vue-maps
  ```
* Import into your project and register components globally or locally:
  ```
  import {BubblePlot} from "@reside-ic/vue-maps"
  
  // global
  Vue.component("bubble-plot", BubblePlot)
  
  // or local
  new Vue({
    el: '#app',
    components: {
      BubblePlot
    }
  })
  
  ```
  
  ### Browser
  
  //TODO: !!
  
  To use the dynamic form component directly in the browser, 
  just include `dist/js/vue-maps.min.js` on the page, after Vue and Leaflet:
  
  ```
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script type="text/javascript" src="node_modules/@reside-ic/vue-charts/dist/vue-maps.min.js"></script>
  ```
  
  In this case the component will be automatically registered.
  
  ## Components
  ### BubblePlot
  
  //TODO: !!
  
  For a full example see [examples/bubbleplot.html](examples/bubbleplot.html).
  
  ## Testing, building and publishing
  * To run unit tests with jest: `npm test`
  * To build distribution files: `npm build`
  * To publish to npm: 
      * first iterate the version in `package.json`
      * then `npm publish --access public`