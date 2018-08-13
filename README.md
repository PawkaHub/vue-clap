# VueClap

A simple Medium-styled clapper (very very alpha-ish) clone for Vue.js inspired by:

greensin of Discord and the article:

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

This currently requires you to manually include font-awesome css files in your Vue project.
