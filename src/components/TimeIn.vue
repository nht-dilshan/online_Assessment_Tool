<template>
  <div class="timein">
    <h2>Well Done!</h2>
    <p>You have successfully completed the test on time.</p>
    <p>Now proceed forward to see your results.</p>
    <button @click="goToResult">Go Forward</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToResult() {
      // Redirect to the result page after completing the test within the time limit
      this.$router.push({ name: 'user-details' });
    },
  },
};
</script>

<style scoped>
.timein {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
