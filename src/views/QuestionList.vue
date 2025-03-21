<template>
  <div class="question-list">
    <div v-if="currentQuestion < questions.length && timer > 0" class="question-container">
      <p v-if="timer > 0" class="timer">Time Left: {{ formattedTimer }}</p>
      <h2>Answer the Questions</h2>

      <!-- Box for Question and Answers -->
      <div class="question-box">
        <p class="question-text">{{ questions[currentQuestion].question }}</p>

        <div v-for="(choice, index) in questions[currentQuestion].choices" :key="index" class="choice-container">
          <input
            type="radio"
            :value="choice.answer"
            v-model="userAnswer"
            :name="'question-' + currentQuestion"
          />
          <label class="choice-label">{{ choice.answer }}</label>
        </div>
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
      timer: 600, // 5 minutes in seconds
      timerInterval: null,
      questions: [
        {
          question: '01. What is the correct order of structure in Google Ads campaigns?',
          choices: [
            { answer: '1. Campaigns, 2. Adsets, 3. Ads', points: 0 },
            { answer: '1. Campaigns, 2. Ad Groups, 3. Ad Sets, 4. Ads', points: 0 },
            { answer: '1. Campaigns, 2. Ad Groups, 3. Ads', points: 5 }, // Correct Answer
            { answer: '1. Ad Sets, 2. Ad Groups, 3. Ads', points: 0 },
          ],
        },
        {
          question: '02. What is the latest character limit for Google Text Ad headlines?',
          choices: [
            { answer: 'One headline of 25 characters', points: 0 },
            { answer: 'One headline of 90 characters', points: 0 },
            { answer: 'Headlines of 45 characters', points: 0 },
            { answer: 'Three headlines of 30 characters each', points: 5 }, // Correct Answer
          ],
        },
        {
          question:
            '03. If you see a keyword on Google Ads with square brackets (Eg: [samsung Galaxy S10]), which match type is this?',
          choices: [
            { answer: 'Phrase Match', points: 0 },
            { answer: 'Exact Match', points: 5 }, // Correct Answer
            { answer: 'Strict Match', points: 0 },
            { answer: 'Ideal Match', points: 0 },
          ],
        },
        {
          question:
            '04. For an advertiser focused on branding, what are the key success metrics on Google Display Network?',
          choices: [
            { answer: 'Click Through Rate', points: 0 },
            { answer: 'CPC', points: 0 },
            { answer: 'Reach & Frequency', points: 5 }, // Correct Answer
            { answer: 'Clicks', points: 0 },
          ],
        },
        {
          question: '05. Which would contribute to a higher Quality Score for a display ad?',
          choices: [
            { answer: 'Higher CPM bid', points: 0 },
            { answer: 'Fast landing page load time', points: 5 }, // Correct Answer
            { answer: 'How old is the ad', points: 0 },
            { answer: 'Creativity of the ad', points: 0 },
          ],
        },
        {
          question:
            '06. If a display ad has been disapproved, how does an advertiser submit a request for another review?',
          choices: [
            { answer: 'Call Google Help', points: 0 },
            { answer: 'Create a new ad group and upload the ad there', points: 0 },
            { answer: 'Save the edited ad or upload a new ad in AdWords', points: 5 }, // Correct Answer
            { answer: 'Click "Request a Review Again" button', points: 0 },
          ],
        },
        {
          question:
            '07. Ads on YouTube are bought and sold on an auction basis as well as on a reservation basis. What placements on YouTube.lk can you buy ad placements on a reservation basis?',
          choices: [
            { answer: "You can't buy reservation-based ads on YouTube in Sri Lanka", points: 0 },
            { answer: 'YouTube Masthead Ads', points: 5 }, // Correct Answer
            { answer: 'YouTube Pre-Roll Ads', points: 0 },
            { answer: 'YouTube Watch Page Ads', points: 0 },
          ],
        },
        {
          question:
            '08. In Google Analytics to recognize users across different devices, what is required for User ID?',
          choices: [
            { answer: 'Attribution Models', points: 0 },
            { answer: 'Google Ads Linking', points: 0 },
            { answer: 'User ID', points: 5 }, // Correct Answer
            { answer: 'Audience Definitions', points: 0 },
          ],
        },
        {
          question:
            '09. What Google Analytics report shows the percent of site traffic that visited previously?',
          choices: [
            { answer: 'Sales Performance report', points: 0 },
            { answer: 'Frequency & Recency report', points: 0 },
            { answer: 'Referrals report', points: 0 },
            { answer: 'New vs Returning report', points: 5 }, // Correct Answer
          ],
        },
        {
          question:
            '10. When will Google Analytics be unable to identify sessions from the same user by default?',
          choices: [
            {
              answer: 'When the sessions happen in the same browser on the same device',
              points: 0,
            },
            { answer: 'When the sessions happen in the same browser on the same day', points: 0 },
            { answer: 'When the sessions share the same browser cookie', points: 0 },
            {
              answer: 'When the sessions happen in different browsers on the same device',
              points: 5,
            }, // Correct Answer
          ],
        },
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
      const skillsScore = (this.totalScore / 50) * 100; // Assuming 50 is the maximum score
      this.$store.dispatch('updateSkillsScore', skillsScore);  // Store score in Vuex

      if (this.timer > 0) {
        this.$router.push({ name: 'timein' });
      } else {
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
  padding: 20px;
}

.timer {
  font-size: 1.2em;
  color: #333;
}

.question-container {
  margin-top: 20px;
}

.question-box {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px auto;
  width: 80%;
  max-width: 600px;
  background-color: #f9f9f9;
  border-radius: 10px;
}

.question-text {
  font-size: 1.2em;
  margin-bottom: 10px;
  text-align: left;  
}

.choice-container {
  text-align: left;
  margin-bottom: 10px;
}

.choice-label {
  font-size: 1em;
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

button:hover {
  background-color: #45a049;
}
</style>
