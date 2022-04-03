<template>
  <nuxt-link to="#">
    <div class="card">
      <img class="card-img-top" src="" alt="Person Image" />
      <div class="card-body">
        <h3 class="card-title">
          <i class="fa-solid fa-user-tie"></i>{{ agentName }}
        </h3>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet
          hic nemo officia aliquam excepturi!
        </p>
        <p class="card-text">Price: {{ sym }} {{ priceAmount }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    agentName: {
      type: String,
      default: 'Agent Name',
    },
    englishLang: {
      type: Boolean,
      default: true,
    },
    symbol: {
      type: String,
      default: 'Nil',
    },
    priceSgd: {
      type: Number,
      default: 100,
    },
  },
  computed: {
    isEng() {
      return this.englishLang
    },
    sym() {
      return this.symbol
    },
    priceAmount() {
      if (this.symbol === 'HKD') {
        return (this.priceSgd * 5.77 * 1.03).toFixed(2);
      } else {
        return (this.priceSgd * 1.07).toFixed(2);
      }
    },
  },
}
</script>

<style scope>
a {
  color: #333;
  text-decoration: none;
}

i {
  padding: 0 0.5rem 0 0;
}

.card {
  display: flex;
  flex-direction: column;
  max-width: 250px;
  height: 250px;
  border: gray solid 1px;
  margin: 5px;
  padding: 10px;
  background: #fff;
}

.card .card-img-top {
  border: 1px black solid;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}

.card .card-body {
  text-align: left;
}

.card .card-body .card-text {
  padding: 5px;
}
</style>
