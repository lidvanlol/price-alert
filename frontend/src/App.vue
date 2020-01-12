<template>
  <div class="wrap">
    <list></list>
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  metaInfo: {
    title: 'Price Alert App',
    link: {rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T", crossorigin: "anonymous"}
  },
  components: {
    'list': List
  },
  data () {
    return {
      title: 'Price Alert App'
    }
  },
}
</script>

<style>
/* .wrap{
  max-width: 1300px;
  margin: 0 auto;
}
 */
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

body, button{
  font-family: 'Montserrat', sans-serif;
}
</style>
