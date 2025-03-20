<template>
  <div class="question-list">

    <div v-if="currentQuestion < questions.length && timer > 0">
      <p v-if="timer > 0">Time Left: {{ formattedTimer }}</p>
      <h2>Answer the Questions</h2>
      <p>{{ questions[currentQuestion].question }}</p>
      <div v-for="(choice, index) in questions[currentQuestion].choices" :key="index">
        <input
          type="radio"
          :value="choice.answer"
          v-model="userAnswer"
          :name="'question-' + currentQuestion"
        />
        <label>{{ choice.answer }}</label>
      </div>

      <button @click="nextQuestion" :disabled="!userAnswer">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentQuestion: 0,
      userAnswer: '',
      totalScore: 0,
      timer: 5, // 5 minutes in seconds
      timerInterval: null,
      questions: [
        {
          question: 'What is the correct order of structure in Google Ads campaigns?',
          choices: [
            { answer: '1. Campaigns, 2. Adsets, 3. Ads', points: 0 },
            { answer: '1. Campaigns, 2. Ad Groups, 3. Ad Sets, 4. Ads', points: 0 },
            { answer: '1. Campaigns, 2. Ad Groups, 3. Ads', points: 5 },
            { answer: '1. Ad Sets, 2. Ad Groups, 3. Ads', points: 0 },
          ],
        },
        {
          question: 'What is the latest character limit for Google Text Ad headlines?',
          choices: [
            { answer: 'One headline of 25 characters', points: 0 },
            { answer: 'One headline of 90 characters', points: 0 },
            { answer: 'Headlines of 45 characters', points: 0 },
            { answer: 'Three headlines of 30 characters each', points: 5 },
          ],
        },
        // Add more questions as needed
      ],
    };
  },
  computed: {
    formattedTimer() {
      const minutes = Math.floor(this.timer / 60);
      const seconds = this.timer % 60;
      return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    },
  },
  methods: {
    nextQuestion() {
      if (!this.userAnswer) {
        alert('Please select an answer before proceeding.');
        return;
      }

      const currentQ = this.questions[this.currentQuestion];
      const selectedChoice = currentQ.choices.find((choice) => choice.answer === this.userAnswer);

      if (selectedChoice) {
        this.totalScore += selectedChoice.points;
      }

      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
        this.userAnswer = ''; // Reset user answer
      } else {
        this.goToEndPage(); // Go to the next page when all questions are answered
      }
    },
    goToEndPage() {
      if (this.timer > 0) {
        // If test completed within time
        this.$router.push({ name: 'timein' });
      } else {
        // If time is up
        this.$router.push({ name: 'timeout' });
      }
    },
    startTimer() {
      this.timerInterval = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        } else {
          clearInterval(this.timerInterval);
          this.goToEndPage(); // Redirect to TimeOut page when the time is up
        }
      }, 1000); // Update every second
    },
  },
  mounted() {
    this.startTimer(); // Start the timer when the component is mounted
  },
  beforeUnmount() {
    clearInterval(this.timerInterval); // Clean up the timer when the component is destroyed
  },
};
</script>

<style scoped>
.question-list {
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
