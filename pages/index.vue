<template>
  <div class="product-page">
    <div class="navbar"><i class="fa-duotone fa-city"></i></div>
    <main class="content">
      <div class="btn" @click="handleLang">
        <p class="selection">{{ $t('changeLang') }}</p>
        <span v-if="language === 'en'" class="language-display en">EN</span>
        <span v-else-if="language === 'cn'" class="language-display">EN</span>
        <span v-if="language === 'cn'" class="language-display cn">CN</span>
        <span v-else-if="language === 'en'" class="language-display">CN</span>
      </div>
      <h1>{{ $t('intro') }}</h1>
      <div>
        <span
          tabindex="0"
          class="btn calls-btn"
          @click="
            productType === 'calls'
              ? (productType = '')
              : (productType = 'calls')
          "
          >{{ $t('calls') }}</span
        >
        <span
          tabindex="0"
          class="btn visits-btn"
          @click="
            productType === 'visits'
              ? (productType = '')
              : (productType = 'visits')
          "
          >{{ $t('visits') }}</span
        >
      </div>

      <div
        v-if="!!productType && productType !== 'new'"
        class="btn block"
        @click="handleCurrency"
      >
        <p class="selection">{{ $t('changeCurr') }}</p>
        <span class="language-display">{{ currency }}</span>
      </div>
      <div v-if="productType === 'calls'" class="products">
        <h3 class="product-header">{{ $t('agentCalls') }}</h3>
        <p class="product-info">{{ $t('priceDisclaimer') }}</p>
        <div class="agent-calls-gallery container">
          <ProductCard
            v-for="(agent, index) in callAgents"
            :id="agent._id"
            :key="`c${agent._id}`"
            :agent-name="agent.name"
            :symbol="currency"
            :price-sgd="agent.callPriceSGD"
            :unique="`c${index}`"
          />
        </div>
      </div>
      <div v-else-if="productType === 'visits'" class="products">
        <h3 class="product-header">{{ $t('agentVisits') }}</h3>
        <p class="product-info">{{ $t('priceDisclaimer') }}</p>
        <div class="agent-visits-gallery container">
          <ProductCard
            v-for="(agent, index) in visitAgents"
            :id="agent._id"
            :key="`v${agent._id}`"
            :agent-name="agent.name"
            :symbol="currency"
            :price-sgd="agent.visitPriceSGD"
            :unique="`v${index}`"
          />
        </div>
      </div>
      <div v-else class="products">
        <h3>{{ $t('clickButtons') }}</h3>
      </div>
      <div class="subtotal cf">
        <ul>
          <li class="totalRow">
            <span class="label">{{ $t('subtotal') }}</span
            ><span class="value">
              {{ currency }} {{ totalBeforeTax.toFixed(2) }}</span
            >
          </li>
          <li class="totalRow">
            <span class="label">{{ $t('tax') }}</span
            ><span class="value">
              {{ currency }} {{ (totalBeforeTax * GstAmt).toFixed(2) }}</span
            >
          </li>
          <li class="totalRow final">
            <span class="label">{{ $t('total') }}</span
            ><span class="value">
              {{ currency }}
              {{ (totalBeforeTax * (1 + GstAmt)).toFixed(2) }}</span
            >
          </li>
          <li class="totalRow">
            <a href="#" class="btn continue">{{ $t('checkout') }}</a>
          </li>
        </ul>
      </div>
      <CardForm v-if="productType === 'new'" />
      <span
        tabindex="0"
        class="btn calls-btn"
        @click="
          productType === 'new' ? (productType = '') : (productType = 'new')
        "
        >{{ productType === 'new' ? 'X' : '+' }}</span
      >
    </main>
    <div class="footer">
      <i class="fa-solid twitter"></i>
      <i class="fa-solid linkedin"></i>
      <i class="fa-solid youtube"></i>
      <i class="fa-solid instagram"></i>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ProductCard from '../components/ProductCard.vue'
import CardForm from '../components/ProductForm.vue'

export default {
  components: {
    ProductCard,
    CardForm,
  },
  data() {
    return {
      productType: '',
      callAgents: [],
      visitAgents: [],
    }
  },
  computed: {
    ...mapState(['language', 'currency', 'total']),
    numberGen() {
      return Math.floor(Math.random() * 100 + 1)
    },
    callsArray() {
      return this.callAgents
    },
    GstAmt() {
      if (this.currency === 'HK$') {
        return 0.03
      } else {
        return 0.07
      }
    },
    totalBeforeTax() {
      if (this.currency === 'HK$') {
        return this.total * 5.77
      } else {
        return this.total
      }
    },
  },
  async mounted() {
    await this.fetchProducts()
  },
  methods: {
    ...mapMutations(['chineseLang', 'engLang', 'singDollar', 'hkDollar']),
    handleLang() {
      if (this.language === 'en') {
        this.$i18n.locale = 'cn'
        this.chineseLang()
        this.$router.push({
          path: '/cn',
        })
      } else if (this.language === 'cn') {
        this.$i18n.locale = 'en'
        this.engLang()
        this.$router.push({
          path: '/',
        })
      }
    },
    handleCurrency() {
      if (this.currency === 'SG$') this.hkDollar()
      else if (this.currency === 'HK$') this.singDollar()
    },
    async fetchProducts() {
      const { data } = await this.$axios.get('/api/product')
      this.callAgents = [...data.calls]
      this.visitAgents = [...data.visits]
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
  margin: 10px 0;
}

.btn {
  display: inline-block;
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 10px;
  max-width: 200px;
}

.btn:hover {
  background-color: #338b36; /* Green */
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

.selection {
  font-size: 0.8rem;
  font-weight: 500;
  padding: 5px;
}

.language-display.en,
.language-display.cn {
  font-weight: 800;
  text-decoration: underline;
}

.products {
  min-width: 98%;
  background: #ccc;
}

.content {
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 80%;
  max-height: max-content;
  margin: 0 0.5vw;
  padding: 10px;
}

.product-header {
  font-weight: bolder;
  font-size: 1.6rem;
  text-decoration: underline;
}

.subtotal {
  float: right;
  width: 35%;
}
.totalRow {
  list-style: none;
  padding: 0.5em;
  text-align: right;
}
.final {
  font-size: 1.25em;
  font-weight: bold;
}
.final span {
  display: inline-block;
  padding: 0 0 0 1em;
  text-align: right;
}
.label {
  font-size: 0.85em;
  text-transform: uppercase;
  color: #777;
}
.value {
  letter-spacing: -0.025em;
  width: 35%;
}
</style>
