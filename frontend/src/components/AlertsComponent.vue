<template>
  <div class="container">
      <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="(localAlert, localIndex) in localAlerts" v-bind:key="localIndex">
            <div class="row">
                <div class="col row align-items-center" id="active-alert">{{localAlert.currency}}, {{localAlert.condition}}{{localAlert.amount}}</div>
                <div class="col row justify-content-end"><button type="button" class="btn btn-outline-danger" id="delete-active-alert" v-on:click.prevent="deleteAlert(localAlert._id.toString())">Delete</button></div>
            </div>
          </li>
      </ul>
      <div class="row justify-content-center">
        <button type="button" id="newAlertButton" class="btn btn-outline-success" v-on:click="showNewAlert = !showNewAlert">Create New</button>
      </div>
      <new-alert-component v-if="showNewAlert"></new-alert-component>
  </div>
</template>

<script>
import NewAlertComponent from './NewAlertComponent.vue'
import {bus} from '../main'

export default {
    components: {
        'new-alert-component': NewAlertComponent
    },
  data () {
    return {
        showNewAlert: false,
        localAlerts: {}
    }
  },
  methods: {
      deleteAlert: function(alertId){
          this.$http.delete('api/alerts/'+alertId).then((data) => {
              console.log(data.body);
              bus.$emit('alertsChanged');
          });
      },
      getAlerts: function(){
        this.$http.get('api/alerts').then((data) => {
          this.localAlerts = data.body;
        });
      }
  },
  created(){
      this.$http.get('api/alerts').then((alerts) => {
          this.localAlerts = alerts.body;
      });
      bus.$on('alertsChanged', () => {
          this.getAlerts();
      })
  }
}
</script>

<style scoped>
ul, h2{
    color: black;
}

#newAlertButton{
    margin-top: 15px;
}
</style>