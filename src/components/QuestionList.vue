<template>
  <div class="question-list">
    <h2>Answer the Questions</h2>
    <div v-if="currentQuestion < questions.length">
      <p>{{ questions[currentQuestion].question }}</p>
      <div v-for="(choice, index) in questions[currentQuestion].choices" :key="index">
        <input type="radio" :value="choice" v-model="userAnswer" />
        <label>{{ choice }}</label>
      </div>
      <button @click="nextQuestion">Next</button>
    </div>
    <div v-else>
      <p>Assessment Complete!</p>
      <button @click="finishAssessment">See Results</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentQuestion: 0,
      userAnswer: '',
      questions: [
        { question: 'What is 2 + 2?', choices: ['2', '3', '4', '5'], correct_answer: '4' },
        { question: 'What is the capital of France?', choices: ['Berlin', 'Madrid', 'Paris', 'Rome'], correct_answer: 'Paris' }
      ]
    };
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
        this.userAnswer = '';
      } else {
        this.$router.push('/user-details');  // Navigate to the result page
      }
    },
    finishAssessment() {
      this.$router.push('/user-details');  // Navigate to the result page
    }
  }
};
</script>

<style scoped>
.question-list {
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
