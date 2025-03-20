<template>
  <div class="question-list">
    <h2>Answer the Questions</h2>

    <!-- Display Timer -->
    <p v-if="timer > 0">Time Left: {{ formattedTimer }}</p>
    <p v-else>Time's up! Redirecting to results...</p>

    <div v-if="currentQuestion < questions.length && timer > 0">
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

    <div v-else-if="currentQuestion === questions.length || timer === 0">
      <p>Assessment Complete!</p>
      <p>Your total score is: {{ totalScore }}</p>
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
      totalScore: 0,
      timer: 20, // 10 minutes in seconds
      timerInterval: null,
      questions: [
        {
          question: 'What is the correct order of structure in Google Ads campaigns?',
          choices: [
            { answer: '1. Campaigns, 2. Adsets, 3. Ads', points: 0 },
            { answer: '1. Campaigns, 2. Ad Groups, 3. Ad Sets, 4. Ads', points: 0 },
            { answer: '1. Campaigns, 2. Ad Groups, 3. Ads', points: 5 }, // Correct Answer
            { answer: '1. Ad Sets, 2. Ad Groups, 3. Ads', points: 0 },
          ],
        },
        {
          question: 'What is the latest character limit for Google Text Ad headlines?',
          choices: [
            { answer: 'One headline of 25 characters', points: 0 },
            { answer: 'One headline of 90 characters', points: 0 },
            { answer: 'Headlines of 45 characters', points: 0 },
            { answer: 'Three headlines of 30 characters each', points: 5 }, // Correct Answer
          ],
        },
        // Add the remaining questions as required
      ],
    }
  },
  computed: {
    formattedTimer() {
      const minutes = Math.floor(this.timer / 60)
      const seconds = this.timer % 60
      return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    },
  },
  methods: {
    nextQuestion() {
      // Validate if an answer has been selected
      if (!this.userAnswer) {
        alert('Please select an answer before proceeding.')
        return
      }

      // Calculate the score for the current question
      const currentQ = this.questions[this.currentQuestion]
      const selectedChoice = currentQ.choices.find((choice) => choice.answer === this.userAnswer)

      if (selectedChoice) {
        this.totalScore += selectedChoice.points
      }

      // Proceed to the next question
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++
        this.userAnswer = '' // Reset user answer
      } else {
        // Redirect to the result page after all questions are answered
        this.$router.push({ name: 'result', params: { totalScore: this.totalScore } })
      }
    },
    finishAssessment() {
      // Finish the assessment and show result
      this.$router.push({ name: 'result', params: { totalScore: this.totalScore } })
    },
    startTimer() {
      this.timerInterval = setInterval(() => {
        if (this.timer > 0) {
          this.timer-- // Decrease the timer every second
        } else {
          clearInterval(this.timerInterval) // Stop the timer
          this.redirectToResultsPage() // Redirect to results page after 10 minutes
        }
      }, 1000) // 1 second interval
    },
    redirectToResultsPage() {
      // Redirect to the results page after 10 minutes or when timer expires
      this.$router.push({ name: 'result', params: { totalScore: this.totalScore } })
    },
  },
  mounted() {
    this.startTimer() // Start the timer when the component is mounted
  },
  beforeUnmount() {
    // Clean up the timer when the component is destroyed
    clearInterval(this.timerInterval)
  },
}
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
