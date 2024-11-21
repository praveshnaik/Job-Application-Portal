<template>
  <div class="application-form">
    <h2>Application for {{ title }}</h2>
    <form @submit.prevent="submitForm">
      <input 
        type="text" 
        v-model="name" 
        @input="validateName" 
        placeholder="Your Name" 
        required 
      />
      <input type="email" v-model="email" placeholder="Your Email" required />
      <input 
        type="file" 
        accept="application/pdf" 
        @change="handleFileUpload" 
        ref="fileInput" 
        required
      />
      <button type="submit">Submit Application</button>
    </form>
    <p v-if="formSubmitted" class="success-message">Thank you for your application!</p>
  </div>
</template>



<script>
export default {
  data() {
    return {
      title: this.$route.params.jobTitle || 'No title provided',
      name: '',
      email: '',
      resume: null,
      formSubmitted: false,
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file && file.type === "application/pdf") {
        this.resume = file;
      } else {
        this.resume = null;
        alert("Please upload a valid PDF file.");
        event.target.value = ""; 
      }
    },
    validateName() {
      
      this.name = this.name.replace(/\d+/g, '');
    },
    submitForm() {
      if (this.name && this.email && this.resume) {
        this.formSubmitted = true;
        this.resetForm(); 
      } else {
        alert("Please fill in all fields and upload your resume.");
      }
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.resume = null;
      this.$refs.fileInput.value = ''; 
    },
  },
};
</script>



<style scoped>
.application-form {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.application-form:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-transform: capitalize;
}

input {
  width: 100%;
  padding: 15px;
  padding-right: 0px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

button {
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}

.success-message {
  color: #28a745;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .application-form {
    padding: 20px;
  }

  h2 {
    font-size: 1.6rem;
  }

  input, button {
    font-size: 1rem;
  }
}
</style>
