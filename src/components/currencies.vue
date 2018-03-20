<template>
  
  <div class="list-blogs">
    <h1>Top 10 Crypto Currencies</h1>
    <!-- <button @click="foo='red'">Red</button>{{foo}} -->
    <input type="text" v-model="search" placeholder="Type to search">
    <div class="blocks">
      <div v-for="currency in filteredCurrencies" :key=currency.id class="block">
      <h3>{{currency.name}} ({{currency.symbol}})</h3>
      <p>Rank: {{currency.rank}}</p>
      <p>Price: ${{currency.price_usd}}</p>
      <p>24Hours:  {{currency.percent_change_24h}} %</p>
      <p>7 Days:  {{currency.percent_change_7d}} %</p>
      <p>Last Updated: {{currency.last_updated | date}}</p>
    </div>
    </div>
    
  </div>
</template>

<script>

export default {
  filters: {
    'date': x => new Date(x*1000).toLocaleTimeString()
    // toLocaleTimeString()
  },
  data() {
    return {
      currencies: [],
      search: ''
    }
  },
  methods: {},
  computed:{
    filteredCurrencies(){
      return this.currencies.filter( x => x.id.match(this.search))
    }
  },
  created(){
    this.$http.get('https://api.coinmarketcap.com/v1/ticker/')
    .then( data => this.currencies = data.body.slice(0,10));
  }
};
</script>

<style>
.list-blogs{
  max-width: 60em;
  margin: 2em auto;
}

.list-blogs input {
  width: 20em;
  margin: 0 auto;
  padding: 5px 10px;
  margin-bottom: 1em;
}

.blocks {
  display: flex;
  flex-wrap: wrap;
}

.block {
  width: 18.18em;
  padding: 1em;
  margin-bottom: 20px;
  background: #eee;
  margin-right: 20px;
}
</style>
