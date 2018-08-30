# VueClap

A simple Medium-styled clapper (very very alpha-ish) clone for Vue.js inspired by:

@greensin of Vue Land (Discord) and the following article:

https://medium.com/@yonatandoron/how-i-implemented-the-medium-clap-from-scratch-4a16ac90ad3b

# Usage

```html
<template>
  <div id="app">
    <vue-clap icon-class="fa fa-hand-paper-o" />
  </div>
</template>

<script>
import VueClap from 'vue-clap'

export default {
  name: 'App',
  components: {
    VueClap
  }
}
</script>
```

# Notes

```bash
yarn add GastroGeek/vue-clap#master --save
```
This was an almost literal conversion - i.e. no useful code optimization/refactoring took place.

Currently you are required to manually include font-awesome css files in your Vue project.
