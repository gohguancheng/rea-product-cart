<template>
  <div @click="handleSelection">
    <div :id="id" class="card">
      <img class="card-img-top" src="../assets/avatar.svg" alt="Person Image" />
      <div class="card-body">
        <h3 class="card-title">
          <i class="fa-solid fa-user-tie"></i>{{ agentName }}
        </h3>
        <p class="card-text">{{ sym }} {{ priceAmount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
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
    id: {
      type: String,
      default:'#',
    },
  },
  data() {
    return {
      selected: false
      }
  },
  computed: {
    ...mapState(['total']),
    isEng() {
      return this.englishLang
    },
    sym() {
      return this.symbol
    },
    priceAmount() {
      if (this.symbol === 'HKD') {
        return (this.priceSgd * 5.77).toFixed(2);
      } else {
        return (this.priceSgd).toFixed(2);
      }
    },
  },
  methods: {
    ...mapMutations(['computeTotal']),
    handleSelection() {
      if (this.selected) {
        document.getElementById(this.id).classList.remove('blue-border');
        this.computeTotal(-this.priceSgd)
      } else {
        document.getElementById(this.id).classList.add('blue-border');
        this.computeTotal(this.priceSgd)
      }
      this.selected = !this.selected;
    }
  }
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
  max-width: 200px;
  min-width: 200px;
  min-height: 250px;
  max-height: 250px;
  border: gray solid 1px;
  margin: 5px;
  padding: 10px;
  background: #fff;
  cursor: pointer;
}

.card .card-img-top {
  border: 1px black solid;
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}

.card .card-body {
  text-align: left;
}

.card .card-body .card-text {
  padding: 5px;
  border: solid 1px rgb(0,0,0, 0.2)
}

.blue-border {
  border: 5px blue solid;
}
</style>
