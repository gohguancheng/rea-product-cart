<template>
  <div class="product-page">
    <div class="navbar">--Navbar--</div>
    <main class="content">
      <h1>Here are our products</h1>
      <h2>Browse the below gallery</h2>
      <div class="products">
        <h3>Agent Calls</h3>
      <div class="agent-calls-gallery container">
        <ProductCard agent-name="Bob" />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
        <h3>Agent Visits</h3>
      <div class="agent-calls-gallery container">
        <ProductCard agent-name="Bob" />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      </div>
    </main>
    <div class="footer">--Footer--</div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components: {
    ProductCard,
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
h2, h3 {
  font-weight: 300;
  line-height: 1.2;
  margin: 20px 0;
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
