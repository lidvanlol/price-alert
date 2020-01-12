<template>
  <div class="container">
    <div class="row">
  <div class="col-12">

 
     
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Price Alert App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">
                          <button v-on:click.prevent=""  type="button" class="btn btn-danger" data-toggle="modal" data-target="#alertsModalScrollable">Alerts</button>

          <span class="sr-only">(current)</span></a>
      </li>
    
    </ul>
    
  </div>
</nav>
 </div>



    </div>
      <triggered-alerts></triggered-alerts>
     
       
        <details-component v-if="showDetails"></details-component>
        <div class="kontenjer row justify-content-center">
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Currency</b></div>
            <div class="col-12">{{BTC.currency}}</div>
          </div>
          <div class="col-12 col-md-2 element row align-items-center">
            <div class="col-12"><b>Market Cap</b></div>
            <div class="col-12">{{BTC.market_cap}} BTC</div>
          </div>
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Price</b></div>
            <div class="col-12">{{BTC.price}} BTC</div>
          </div>
          <div class="col-12 col-md-2 element row align-items-center">
            <div class="col-12"><b>Volume(24h)</b></div>
            <div class="col-12">{{BTC.volume_24h}} BTC</div>
          </div>
          <div class="col-12 col-md-3 element row align-items-center">
            <div class="col-12"><b>Circulating Supply</b></div>
            <div class="col-12">{{BTC.circulating_supply}} BTC</div>
          </div>
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Change(24h)</b></div>
            <div class="col-12">{{BTC.change_24h}}%</div>
          </div>
          <div class="col-12 col-md element row justify-content-center align-items-center">
            <button class="details-button btn btn-info" type="button" v-on:click.prevent="showDetailsBTC = !showDetailsBTC">Info</button>
          </div>
        </div>
        <details-component-BTC v-if="showDetailsBTC"></details-component-BTC>
        <div class="kontenjer row justify-content-center">
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Currency</b></div>
            <div class="col-12">{{ETH.currency}}</div>
          </div>
          <div class="col-12 col-md-2 element row align-items-center">
            <div class="col-12"><b>Market Cap</b></div>
            <div class="col-12">{{ETH.market_cap}} ETH</div>
          </div>
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Price</b></div>
            <div class="col-12">{{ETH.price}} ETH</div>
          </div>
          <div class="col-12 col-md-2 element row align-items-center">
            <div class="col-12"><b>Volume(24h)</b></div>
            <div class="col-12">{{ETH.volume_24h}} ETH</div>
          </div>
          <div class="col-12 col-md-3 element row align-items-center">
            <div class="col-12"><b>Circulating Supply</b></div>
            <div class="col-12">{{ETH.circulating_supply}} BTC</div>
          </div>
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Change(24h)</b></div>
            <div class="col-12" v-bind:class="changeETH">{{ETH.change_24h}}%</div>
          </div>
          <div class="col-12 col-md element row justify-content-center align-items-center">
            <button type="button" class="btn btn-info details-button"  disabled>Info</button>
          </div>
        </div>
        <div class="kontenjer row justify-content-center">
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Currency</b></div>
            <div class="col-12">{{XRP.currency}}</div>
          </div>
          <div class="col-12 col-md-2 element row align-items-center">
            <div class="col-12"><b>Market Cap</b></div>
            <div class="col-12">{{XRP.market_cap}} XRP</div>
          </div>
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Price</b></div>
            <div class="col-12">{{XRP.price}} XRP</div>
          </div>
          <div class="col-12 col-md-2 element row align-items-center">
            <div class="col-12"><b>Volume(24h)</b></div>
            <div class="col-12">{{XRP.volume_24h}} XRP</div>
          </div>
          <div class="col-12 col-md-3 element row align-items-center">
            <div class="col-12"><b>Circulating Supply</b></div>
            <div class="col-12">{{XRP.circulating_supply}} BTC</div>
          </div>
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Change(24h)</b></div>
            <div class="col-12" v-bind:class="changeXRP">{{XRP.change_24h}}%</div>
          </div>
          <div class="col-12 col-md element row justify-content-center align-items-center">
            <button type="button" class="btn btn-info details-button"  disabled>Info</button>
          </div>
        </div>
        <div class="kontenjer row justify-content-center">
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Currency</b></div>
            <div class="col-12">{{BCH.currency}}</div>
          </div>
          <div class="col-12 col-md-2 element row align-items-center">
            <div class="col-12"><b>Market Cap</b></div>
            <div class="col-12">{{BCH.market_cap}} BCH</div>
          </div>
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Price</b></div>
            <div class="col-12">{{BCH.price}} BCH</div>
          </div>
          <div class="col-12 col-md-2 element row align-items-center">
            <div class="col-12"><b>Volume(24h)</b></div>
            <div class="col-12">{{BCH.volume_24h}} BCH</div>
          </div>
          <div class="col-12 col-md-3 element row align-items-center">
            <div class="col-12"><b>Circulating Supply</b></div>
            <div class="col-12">{{BCH.circulating_supply}} BTC</div>
          </div>
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Change(24h)</b></div>
            <div class="col-12" v-bind:class="changeBCH">{{BCH.change_24h}}%</div>
          </div>
          <div class="col-12 col-md element row justify-content-center align-items-center">
            <button type="button" class="btn btn-info details-button" disabled>Info</button>
          </div>
        </div>
        <div class="kontenjer row justify-content-center">
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Currency</b></div>
            <div class="col-12">{{LTC.currency}}</div>
          </div>
          <div class="col-12 col-md-2 element row align-items-center">
            <div class="col-12"><b>Market Cap</b></div>
            <div class="col-12">{{LTC.market_cap}} LTC</div>
          </div>
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Price</b></div>
            <div class="col-12">{{LTC.price}} LTC</div>
          </div>
          <div class="col-12 col-md-2 element row align-items-center">
            <div class="col-12"><b>Volume(24h)</b></div>
            <div class="col-12">{{LTC.volume_24h}} LTC</div>
          </div>
          <div class="col-12 col-md-3 element row align-items-center">
            <div class="col-12"><b>Circulating Supply</b></div>
            <div class="col-12">{{LTC.circulating_supply}} BTC</div>
          </div>
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Change(24h)</b></div>
            <div class="col-12" v-bind:class="changeLTC">{{LTC.change_24h}}%</div>
          </div>
          <div class="col-12 col-md element row justify-content-center align-items-center">
            <button type="button" class="btn btn-info details-button" disabled>Info</button>
          </div>
        </div>
    
      <div class="kontenjer row justify-content-center">
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Currency</b></div>
            <div class="col-12">{{USD.currency}}</div>
          </div>
          <div class="col-12 col-md-2 element row align-items-center">
            <div class="col-12"><b>Market Cap</b></div>
            <div class="col-12">${{USD.market_cap}}</div>
          </div>
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Price</b></div>
            <div class="col-12">${{USD.price}}</div>
          </div>
          <div class="col-12 col-md-2 element row align-items-center">
            <div class="col-12"><b>Volume(24h)</b></div>
            <div class="col-12">${{USD.volume_24h}}</div>
          </div>
          <div class="col-12 col-md-3 element row align-items-center">
            <div class="col-12"><b>Circulating Supply</b></div>
            <div class="col-12">{{USD.circulating_supply}} BTC</div>
          </div>
          <div class="col-12 col-md element row align-items-center">
            <div class="col-12"><b>Change(24h)</b></div>
            <div class="col-12" v-bind:class="changeUSD">{{USD.change_24h}}%</div>
          </div>
          <div class="col-12 col-md element row justify-content-center align-items-center">
          </div>
        </div>

      <!-- Modal -->
      <div class="modal fade" id="alertsModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalScrollableTitle">Created Alerts</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <alerts-component></alerts-component>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import DetailsComponent from './DetailsComponent.vue'
import DetailsComponentBTC from './DetailsComponentBTC.vue'

import AlertsComponent from './AlertsComponent.vue'
import TriggeredAlerts from './TriggeredAlerts.vue'
import {bus} from '../main'

export default {
  components: {
    'details-component': DetailsComponent,
    'details-component-BTC': DetailsComponentBTC,
    
    'alerts-component': AlertsComponent,
    'triggered-alerts': TriggeredAlerts
  },
  data () {
    return {
        USD: {
          currency: '',
          market_cap: 0,
          price: 0,
          volume_24h: 0,
          circulating_supply: 0,
          change_24h: 0,
        },
        BTC: {
          currency: '',
          market_cap: 0,
          price: 0,
          volume_24h: 0,
          circulating_supply: 0,
          change_24h: 0,
        },
        ETH: {
          currency: '',
          market_cap: 0,
          price: 0,
          volume_24h: 0,
          circulating_supply: 0,
          change_24h: 0,
        },
        XRP: {
          currency: '',
          market_cap: 0,
          price: 0,
          volume_24h: 0,
          circulating_supply: 0,
          change_24h: 0,
        },
        BCH: {
          currency: '',
          market_cap: 0,
          price: 0,
          volume_24h: 0,
          circulating_supply: 0,
          change_24h: 0,
        },
        LTC: {
          currency: '',
          market_cap: 0,
          price: 0,
          volume_24h: 0,
          circulating_supply: 0,
          change_24h: 0,
        },
        showDetails: false,
        showDetailsBTC: false,
       
        showAlerts: true,
        triggeredAlerts: {},
        changeUSD: '',
        changeETH: '',
        changeXRP: '',
        changeBCH: '',
        changeLTC: '',
        
    }
  },
  methods: {
      
      refreshList: function(){
          this.getUSD();
          this.getBTC();
          this.getETH();
          this.getXRP();
          this.getBCH();
          this.getLTC();
          this.checkAlerts();
      },
      checkAlerts: function(){
        this.$http.get('api/alerts').then((alerts) => {
        
          this.triggeredAlerts = {};
          alerts.body.forEach((alert) => {

              
            
            if(alert.currency === 'ETH'){
              switch (alert.condition) {
              case '<':
                if(this.ETH.price < alert.amount){
                  this.triggeredAlerts[alert._id] = {
                    currency: alert.currency,
                    condition: alert.condition,
                    amount: alert.amount,
                    date: new Date()
                  };
                }
                break;

              case '>':
                if(this.ETH.price > alert.amount){
                  this.triggeredAlerts[alert._id] = {
                    currency: alert.currency,
                    condition: alert.condition,
                    amount: alert.amount,
                    date: new Date()
                  };
                }
                break;
            
              default:
                break;
            }}else if(alert.currency === 'XRP'){
              switch (alert.condition) {
              case '<':
                if(this.XRP.price < alert.amount){
                  this.triggeredAlerts[alert._id] = {
                    currency: alert.currency,
                    condition: alert.condition,
                    amount: alert.amount,
                    date: new Date()
                  };
                }
                break;

              case '>':
                if(this.XRP.price > alert.amount){
                  this.triggeredAlerts[alert._id] = {
                    currency: alert.currency,
                    condition: alert.condition,
                    amount: alert.amount,
                    date: new Date()
                  };
                }
                break;
            
              default:
                break;
            }}else if(alert.currency === 'BCH'){
              switch (alert.condition) {
              case '<':
                if(this.BCH.price < alert.amount){
                  this.triggeredAlerts[alert._id] = {
                    currency: alert.currency,
                    condition: alert.condition,
                    amount: alert.amount,
                    date: new Date()
                  };
                }
                break;

              case '>':
                if(this.BCH.price > alert.amount){
                  this.triggeredAlerts[alert._id] = {
                    currency: alert.currency,
                    condition: alert.condition,
                    amount: alert.amount,
                    date: new Date()
                  };
                }
                break;
            
              default:
                break;
            }}else if(alert.currency === 'LTC'){
              switch (alert.condition) {
              case '<':
                if(this.LTC.price < alert.amount){
                  this.triggeredAlerts[alert._id] = {
                    currency: alert.currency,
                    condition: alert.condition,
                    amount: alert.amount,
                    date: new Date()
                  };
                }
                break;

              case '>':
                if(this.LTC.price > alert.amount){
                  this.triggeredAlerts[alert._id] = {
                    currency: alert.currency,
                    condition: alert.condition,
                    amount: alert.amount,
                    date: new Date()
                  };
                }
                break;
            
              default:
                break;
            }}
            bus.$emit('alertsTriggered', this.triggeredAlerts);
          })
        })
      },
      getUSD: function(){
        this.$http.get('api/btc').then((data) => {
              this.USD.currency = data.body.currency;
              this.USD.market_cap = data.body.market_cap.toFixed(2);
              this.USD.price = data.body.price.toFixed(2);
              this.USD.volume_24h = data.body.volume_24h.toFixed(2);
              this.USD.circulating_supply = data.body.circulating_supply;
              this.USD.change_24h = data.body.change_24h.toFixed(2);
              if(this.USD.change_24h > 0){
                this.changeUSD = 'green';
              }else if(this.USD.change_24h < 0){
                this.changeUSD = 'red';
              }

              this.checkAlerts();
          });
      },
      getBTC: function(){
        this.$http.get('api/btc-btc').then((data) => {
              this.BTC.currency = data.body.currency;
              this.BTC.market_cap = data.body.market_cap;
              this.BTC.price = data.body.price;
              this.BTC.volume_24h = data.body.volume_24h.toFixed(2);
              this.BTC.circulating_supply = data.body.circulating_supply;
              this.BTC.change_24h = data.body.change_24h;

              this.checkAlerts();
          });
      },
      getETH: function(){
        this.$http.get('api/btc-eth').then((data) => {
              this.ETH.currency = data.body.currency;
              this.ETH.market_cap = data.body.market_cap.toFixed(2);
              this.ETH.price = data.body.price.toFixed(2);
              this.ETH.volume_24h = data.body.volume_24h.toFixed(2);
              this.ETH.circulating_supply = data.body.circulating_supply;
              this.ETH.change_24h = data.body.change_24h.toFixed(2);
              if(this.ETH.change_24h > 0){
                this.changeETH = 'green';
              }else if(this.ETH.change_24h < 0){
                this.changeETH = 'red';
              }

              this.checkAlerts();
          });
      },
      getXRP: function(){
        this.$http.get('api/btc-xrp').then((data) => {
              this.XRP.currency = data.body.currency;
              this.XRP.market_cap = data.body.market_cap.toFixed(2);
              this.XRP.price = data.body.price.toFixed(2);
              this.XRP.volume_24h = data.body.volume_24h.toFixed(2);
              this.XRP.circulating_supply = data.body.circulating_supply;
              this.XRP.change_24h = data.body.change_24h.toFixed(2);
              if(this.XRP.change_24h > 0){
                this.changeXRP = 'green';
              }else if(this.XRP.change_24h < 0){
                this.changeXRP = 'red';
              }

              this.checkAlerts();
          });
      },
      getBCH: function(){
        this.$http.get('api/btc-bch').then((data) => {
              this.BCH.currency = data.body.currency;
              this.BCH.market_cap = data.body.market_cap.toFixed(2);
              this.BCH.price = data.body.price.toFixed(2);
              this.BCH.volume_24h = data.body.volume_24h.toFixed(2);
              this.BCH.circulating_supply = data.body.circulating_supply;
              this.BCH.change_24h = data.body.change_24h.toFixed(2);
              if(this.BCH.change_24h > 0){
                this.changeBCH = 'green';
              }else if(this.BCH.change_24h < 0){
                this.changeBCH = 'red';
              }

              this.checkAlerts();
          });
      },
      getLTC: function(){
        this.$http.get('api/btc-ltc').then((data) => {
              this.LTC.currency = data.body.currency;
              this.LTC.market_cap = data.body.market_cap.toFixed(2);
              this.LTC.price = data.body.price.toFixed(2);
              this.LTC.volume_24h = data.body.volume_24h.toFixed(2);
              this.LTC.circulating_supply = data.body.circulating_supply;
              this.LTC.change_24h = data.body.change_24h.toFixed(2);
              if(this.LTC.change_24h > 0){
                this.changeLTC = 'green';
              }else if(this.LTC.change_24h < 0){
                this.changeLTC = 'red';
              }

              this.checkAlerts();
          });
      },
      
  },
  created(){
  
    this.refreshList();
    bus.$on('alertsChanged', () => {
      this.refreshList();
    })
  }
}
</script>

<style scoped>
/* .list-buttons{
    display: flex;
    justify-content: center;
}

h2 {
  text-align: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
}

.element {
  width: 180px;
  text-align: center;
}

.details-button {
  margin: 30px;
} */
h1{
  text-align: center;
  color: black;
}

.element{
  text-align: center;
  margin-bottom: 10px;
}

button{
  margin: 5px;
}

.green {
  color: green;
}

.red {
  color: red;
}

div{
  /* border: 1px solid black; */
  color: grey;
}

div b, h5{
  color: black;
}

.kontenjer{
  margin-bottom: 10px;
}
</style>
