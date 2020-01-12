<template>
  <div>
      <form id="forma" @submit.prevent="saveAlert">
          <div class="row">
              <div class="col">
                <select class="form-control" name="currencies" v-model="alert.currency" required>
                    
                    <option value="ETH">ETH</option>
                    <option value="XRP">XRP</option>
                    <option value="BCH">BCH</option>
                    <option value="LTC">LTC</option>
                    <option value="USD">USD</option>
                </select>
              </div>
              <div class="col">
                <select class="form-control" name="conditions" v-model="alert.condition" required>
                    <option value="<">&lt;</option>
                    <option value=">">&gt;</option>
                </select>
              </div>
              <div class="col">
                <input type="number" class="form-control" min="0" required name="amount" v-model="alert.amount">
              </div>
              <div class="col">
                <button class="btn btn-outline-primary" id="saveButton">Save</button>
              </div>
          </div>
      </form>
  </div>
</template>

<script>
import {bus} from '../main'

export default {
  data () {
    return {
        alert: {
            currency: '',
            condition: '',
            amount: 0
        }
    }
  },
  methods: {
      saveAlert: function(){
          this.$http.post('api/save-alert', {
              currency: this.alert.currency,
              condition: this.alert.condition,
              amount: this.alert.amount
          }).then(function(){
              bus.$emit('alertsChanged');
              this.alert = {
                currency: '',
                condition: '',
                amount: 0
              };
          })
      }
  }
}
</script>

<style scoped>
h2{
    color: black;
}

#forma{
    margin-top: 15px;
}

#saveButton{
    margin-left: 15px;
}
</style>