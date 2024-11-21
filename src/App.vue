<template>
  <div id="app" :class="{ 'is-landing-page': isLandingPage }">
    <header v-if="!isLandingPage" class="app-header">
      <h1>Job Application Portal</h1>
    </header>
    
    <main class="app-main">
      <router-view />
    </main>
    
    <footer v-if="!isLandingPage" class="app-footer">
      <p>&copy; 2024 Job Portal. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    
    isLandingPage() {
      return this.$route.name === 'LandingPage';
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', Arial, sans-serif;
  background-color: #f4f7fc;
  color: #333;
  line-height: 1.6;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background: linear-gradient(90deg, #007bff, #0056b3);
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.app-header h1 {
  margin: 0;
  font-size: 2rem;
}

.app-main {
  flex-grow: 1;
  padding: 20px;
}

.app-footer {
  text-align: center;
  background-color: #fff;
  padding: 10px 20px;
  font-size: 0.9rem;
  color: #777;
  border-top: 1px solid #ddd;
}


.is-landing-page {
  display: block; 
}

.is-landing-page .app-main {
  padding: 0; 
}

.is-landing-page #app {
  min-height: 100%;
}

@media (max-width: 768px) {
  .app-header h1 {
    font-size: 1.5rem;
  }
}
</style>
