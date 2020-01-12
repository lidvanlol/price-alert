<template>
  <div class="container row justify-content-center">
    <ul>
      <li v-for="(alert, index) in alerts" v-bind:key="index">
        <template v-if="alert.condition === '>'">
          <div class="alert alert-danger" role="alert">
            Bitcoin's price just went above {{alert.amount}} {{alert.currency}}!
          </div>
        </template>
        <template v-if="alert.condition === '<'">
          <div class="alert alert-danger" role="alert">
            Bitcoin's price just went below {{alert.amount}} {{alert.currency}}!
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import {bus} from '../main'

export default {
  data () {
    return {
        alerts: {}
    }
  },
  methods: {
      
  },
  created(){
    bus.$on('alertsTriggered', (triggeredAlerts) => {
      this.alerts = triggeredAlerts;
    })
  }
}
</script>

<style scoped>
ul{
  list-style-type: none;
}

.container{
  margin-top: 15px;
}
</style>