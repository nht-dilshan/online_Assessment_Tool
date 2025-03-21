<template>
  <div class="result-page">
    <h2>Digital Marketing Star</h2>
    <p>Your Skills Score: {{ skillsScore }}%</p>
    <p>You are a digital marketing star.</p>

    <!-- Lorem ipsum text -->
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <!-- Home Button -->
    <button @click="goHome">Go to Home</button>
  </div>
</template>

<script>
export default {
  computed: {
    // Retrieve the skillsScore from Vuex
    skillsScore() {
      return this.$store.getters.getSkillsScore || 0;  // Default to 0 if skillsScore is not found
    },
  },
  methods: {
    goHome() {
      // Navigate to the home page
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style scoped>
.result-page {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

h2 {
  font-size: 2rem;
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
