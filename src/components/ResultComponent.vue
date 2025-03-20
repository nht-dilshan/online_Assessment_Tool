<template>
  <div class="result-component">
    <h2>Your Result</h2>
    <p>Skills Score: {{ skillsScore }}%</p>

    <!-- Display Different Messages Based on Skills Score -->
    <div v-if="skillsScore < 50">
      <h3>Your are a Digital Marketing Novice</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, lorem vel cursus tincidunt, augue urna bibendum turpis, at volutpat ante libero vel nulla. Aenean eget dui justo. Integer feugiat, felis id aliquet malesuada, erat nisi accumsan orci, at dictum libero sapien vel orci.</p>
    </div>

    <div v-else-if="skillsScore >= 51 && skillsScore <= 60">
      <h3>Your are a Digital Marketing Seed</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod auctor justo. Duis at eros ac mi elementum maximus. Nulla tincidunt ligula quis augue fermentum, a efficitur sem vehicula. Morbi fermentum velit a lectus luctus, non aliquet ipsum lobortis.</p>
    </div>

    <div v-else-if="skillsScore >= 61 && skillsScore <= 70">
      <h3>Your are a Digital Marketing Rising Star</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur orci libero, at varius velit pretium sed. Integer sed tempor sem. Curabitur vehicula laoreet nisl, vel convallis mi euismod eget. Sed gravida finibus ligula nec eleifend.</p>
    </div>

    <div v-else-if="skillsScore >= 71 && skillsScore <= 80">
      <h3>Your are a Digital Marketing Star</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus vel elit non fermentum. Maecenas vel orci vitae lacus vehicula placerat. Sed sit amet posuere magna. Aliquam erat volutpat. Donec suscipit malesuada risus a consequat.</p>
    </div>

    <div v-else-if="skillsScore > 80">
      <h3>Your are a Digital Marketing Rock Star</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et vestibulum tortor. Proin posuere nunc vel ex facilisis tempor. Integer sed nunc nec augue auctor mollis. Ut suscipit ligula leo, sit amet pharetra dui vestibulum ac. Curabitur ac nibh fringilla.</p>
    </div>

    <button @click="goHome">Go to Home</button>
  </div>
</template>

<script>
export default {
  props: ['totalScore'],  // Receive totalScore as a prop

  computed: {
    skillsScore() {
      // Skills Score Calculation
      const maxScore = 50;  // Maximum possible score for the section
      const score = Number(this.totalScore);  // Convert to number to avoid errors
      return ((score / maxScore) * 100).toFixed(2);  // Calculate and format the score
    }
  },
  methods: {
    goHome() {
      this.$router.push('/');  // Navigate back to the home page
    }
  }
};
</script>

<style scoped>
.result-component {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

h3 {
  margin-top: 20px;
  color: #4CAF50;
}

p {
  font-size: 1.1rem;
  margin-top: 10px;
}
</style>
