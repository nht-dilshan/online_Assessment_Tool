<template>
  <div class="user-details">
    <h2>Enter Your Personal Details</h2>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="form.fullName" placeholder="Full Name" required />
      <input type="email" v-model="form.email" placeholder="Email Address" required />
      <input type="tel" v-model="form.phoneNumber" placeholder="Phone Number" required />
      <input type="text" v-model="form.WorkPlace" placeholder="Current Work Place" required />

      <!-- Job Role Dropdown -->
      <select v-model="form.jobRole" required>
        <option value="" disabled selected>Select Job Role</option>
        <option value="Marketing / Branding">Marketing / Branding</option>
        <option value="Digital Marketing - Brand Side">Digital Marketing - Brand Side</option>
        <option value="Digital Marketing - Agency Side">Digital Marketing - Agency Side</option>
        <option value="Marketing Student">Marketing Student</option>
        <option value="Not Employed">Not Employed</option>
        <option value="Entrepreneur / Business Owner">Entrepreneur / Business Owner</option>
        <option value="Other">Other</option>
      </select>

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
        WorkPlace: '',
        jobRole: '', // Added job role field
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

      // Ensure skillsScore is available before navigating
      if (this.skillsScore !== undefined) {
        // Use Vuex to set the score for later use in result pages
        this.$store.commit('setSkillsScore', this.skillsScore);

        // Navigate to the related result page based on the skillsScore
        if (this.skillsScore < 50) {
          this.$router.push({ name: 'result-novice' });
        } else if (this.skillsScore >= 51 && this.skillsScore <= 60) {
          this.$router.push({ name: 'result-seed' });
        } else if (this.skillsScore >= 61 && this.skillsScore <= 70) {
          this.$router.push({ name: 'result-rising-star' });
        } else if (this.skillsScore >= 71 && this.skillsScore <= 80) {
          this.$router.push({ name: 'result-star' });
        } else {
          this.$router.push({ name: 'result-rock-star' });
        }
      } else {
        console.error('Skills score is not available');
      }
    },
  },
};
</script>

<style scoped>
.user-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  font-size: 2rem;
  color: #4caf50;
  margin-bottom: 20px;
}

input,
select {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
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
