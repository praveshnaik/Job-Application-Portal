<template>
  <div class="landing-page">
    <header class="hero-section">
      <div class="hero-content">
        <h1>Welcome to the Job Application Portal</h1>
        <p>Find your dream job and apply with ease!</p>
        <button @click="navigateToHome">Explore Jobs</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({ name: 'HomePage' });
    },
  },
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.landing-page {
  text-align: center;
  height: 100vh;
}

.hero-section {
  position: relative;
  background: url('@/assets/cover-image.jpg') no-repeat center center / cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow: hidden;
}


.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4); 
  z-index: 0;
}


.hero-content {
  position: relative;
  color: white;
  z-index: 1;
  padding: 20px;
  max-width: 700px;
  text-align: center;
}


.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}


.hero-section p {
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
}

.hero-section button {
  padding: 16px 32px;
  font-size: 1.2rem;
  color: #007bff;
  background: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.hero-section button:hover {
  background: #007bff;
  color: white;
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}


@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.2rem;
  }

  .hero-section p {
    font-size: 1.2rem;
  }

  .hero-section button {
    font-size: 1.1rem;
    padding: 14px 28px;
  }
}
</style>
