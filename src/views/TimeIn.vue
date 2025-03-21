<template>
  <div class="timein">
    <h2>Well Done!</h2>
    <p>You have successfully completed the test on time.</p>
    <p>Now proceed forward to see your results.</p>

    <!-- Go Forward Button -->
    <button @click="goToResult">Go Forward</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToResult() {
      // Navigate to the UserDetails page
      this.$router.push({ name: 'user-details' });
    },
  },
};
</script>

<style scoped>
.timein {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  border-radius: 8px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

h2 {
  font-size: 2.5rem;
  color: #4caf50;
  margin-bottom: 20px;
}

p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

button {
  padding: 12px 24px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

button:focus {
  outline: none;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
