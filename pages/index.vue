<template>
  <div class="product-page">
    <div class="navbar">--Navbar--</div>
    <main class="content">
      <h1>Here are our products</h1>
      <div class="btn" @click="handleLang">
        Change Language:
        <span class="language-display">{{ language }}</span>
      </div>
      <div class="btn" @click="handleCurrency">
        Change Currency:
        <span class="language-display">{{ currency }}</span>
      </div>
      <h2>Check Below To Edit Agent Cards for respective service:</h2>
      <span
        class="btn"
        @click="
          productType === 'calls' ? (productType = '') : (productType = 'calls')
        "
        >Calls</span
      >
      <span
        class="btn"
        @click="
          productType === 'visits'
            ? (productType = '')
            : (productType = 'visits')
        "
        >Visits</span
      >
      <div v-if="productType === 'calls'" class="products">
        <h3 class="product-header">Agent Calls</h3>
        <div class="agent-calls-gallery container">
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
        </div>
      </div>
      <div v-else-if="productType === 'visits'" class="products">
        <h3 class="product-header">Agent Visits</h3>
        <div class="agent-visits-gallery container">
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
          <ProductCard agent-name="Bob" v-bind:symbol="currency" />
        </div>
      </div>
      <div v-else class="products">
        <h3 class="product-header">
          Please click above buttons to select product type.
        </h3>
      </div>
    </main>
    <div class="footer">--Footer--</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ProductCard from '../components/ProductCard.vue'

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      productType: '',
    }
  },
  computed: {
    ...mapState(['language', 'currency']),
  },
  methods: {
    ...mapMutations(['chineseLang', 'engLang', 'singDollar', 'hkDollar']),
    handleLang() {
      if (this.language === 'en') this.chineseLang()
      else if (this.language === 'cn') this.engLang()
    },
    handleCurrency() {
      if (this.currency === 'SGD') this.hkDollar()
      else if (this.currency === 'HKD') this.singDollar()
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* border: dotted 1px gray; */
  text-align: center;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #ffff;
  color: #333;
}

h1,
h2,
h3 {
  font-weight: 300;
  line-height: 1.2;
  margin: 20px 0;
}

.btn {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.btn:hover {
  background-color: #338b36; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.product-page {
  height: 100vh;
}

.navbar,
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #333;
  color: #fff;
  opacity: 0.9;
  width: 100%;
  height: 50px;
  padding: 0 30px;
}

.navbar {
  position: fixed;
  top: 0;
}

.footer {
  position: fixed;
  bottom: 0;
}

.language-display {
}

.content {
  padding: 50px 10px;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 80%;
  max-height: max-content;
  background: #ccc;
  margin: 0 0.5vw;
  padding: 10px;
}
</style>
