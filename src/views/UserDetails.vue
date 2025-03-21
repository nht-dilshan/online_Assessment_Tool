<template>
  <div class="user-details">
    <h2>Enter Your Personal Details</h2>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="form.fullName" placeholder="Full Name" required />
      <input type="email" v-model="form.email" placeholder="Email Address" required />
      <input type="tel" v-model="form.phoneNumber" placeholder="Phone Number" required />
      <button type="submit">Go Forward</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        phoneNumber: '',
      },
    };
  },
  computed: {
    skillsScore() {
      return this.$store.getters.getSkillsScore;  // Retrieve score from Vuex
    },
  },
  methods: {
    submitForm() {
      // Store the user details in localStorage
      localStorage.setItem('userDetails', JSON.stringify(this.form));

      // Navigate to the related result page based on the skillsScore
      if (this.skillsScore < 50) {
        this.$router.push(`/result/novice/${this.skillsScore}`);
      } else if (this.skillsScore >= 51 && this.skillsScore <= 60) {
        this.$router.push(`/result/seed/${this.skillsScore}`);
      } else if (this.skillsScore >= 61 && this.skillsScore <= 70) {
        this.$router.push(`/result/rising-star/${this.skillsScore}`);
      } else if (this.skillsScore >= 71 && this.skillsScore <= 80) {
        this.$router.push(`/result/star/${this.skillsScore}`);
      } else {
        this.$router.push(`/result/rock-star/${this.skillsScore}`);
      }
    },
  },
};
</script>

<style scoped>
.user-details {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
