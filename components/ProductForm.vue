<template>
  <form>
    <div class="form">
      <div class="form-body">
        <label class="form-title">
          <i class="fa-solid fa-user-tie"></i> Agent Name
        </label>
        <input
          v-model="form.name"
          class="input"
          type="text"
          placeholder="Enter Name"
        />
        <span>
          <input id="checkbox" v-model="form.forCalls" type="checkbox" />
          <label for="checkbox">Calls</label>
        </span>
        <span>
          <input id="checkbox" v-model="form.forVisits" type="checkbox" />
          <label for="checkbox">Visits</label>
        </span>
        <label class="form-text">Call Price (SGD/hour, excluding GST)</label>
        <div class="input">
          <input
            v-model="form.callPriceSGD"
            type="number"
            placeholder="SGD excluding GST"
          />
          <span> SGD</span>
        </div>
        <label v-if="visitsCheck" class="form-text"
          >Visit Price (SGD/hour, excluding GST)</label
        >
        <div v-if="visitsCheck" class="input">
          <input
            v-model="form.visitPriceSGD"
            type="number"
            placeholder="SGD excluding GST"
          />
          <span> SGD</span>
        </div>
        <p v-if="invalidForm" class="form-text invalid">
          Agent must have a name and at least provide 'Calls' consultation
          services.
        </p>
        <input class="btn" value="Submit" @click="handleSubmit" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    englishLang: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      form: {
        name: '',
        forCalls: true,
        forVisits: false,
        callPriceSGD: 0,
        visitPriceSGD: 0,
      },
    }
  },
  computed: {
    isEng() {
      return this.englishLang
    },
    visitsCheck() {
      return this.form.forVisits
    },
    invalidForm() {
      return !this.form.forCalls || !this.form.name
    },
  },
  methods: {
    async handleSubmit() {
      console.log('submitted!')
      if (!this.form.name || !this.form.forCalls || !this.form.callPriceSGD) {
        console.log('invalid submit');
        return null
      }
      this.form.callPriceSGD = parseInt(this.form.callPriceSGD)
      this.form.visitPriceSGD = parseInt(this.form.visitPriceSGD)
      await this.$axios
        .post('/api/product/new', this.form)
        .then(function (res) {
          console.log(res);
        })
      location.reload()
    },
  },
}
</script>

<style scope>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type='number'] {
  -moz-appearance: textfield; /* Firefox */
}

a {
  color: #333;
  text-decoration: none;
}

i {
  padding: 0 0.5rem 0 0;
}

input {
  padding: 10px 25px;
}

.input {
  margin: 10px 0;
  min-width: 20%;
}

.input span {
  font-weight: 600;
  font-size: 1.4rem;
}

.form {
  min-width: 300px;
  min-height: 250px;
  max-height: max-content;
  border: gray solid 1px;
  margin: 5px;
  padding: 10px;
  background: #fff;
}

.form .form-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.form .form-body .form-text {
  padding: 5px;
}

.invalid {
  color: red;
}
</style>
