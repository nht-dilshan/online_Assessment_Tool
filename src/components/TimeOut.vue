<template>
  <div class="timeout">
    <h2>Time's Up!</h2>
    <p>Your time has run out. You can now proceed to the result page.</p>
    <button @click="goToResult">Go Forward</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToResult() {
      // Redirect to the result page after time is up
      this.$router.push({ name: 'user-details' });
    },
  },
};
</script>

<style scoped>
.timeout {
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
