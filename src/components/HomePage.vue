<template>
  <div class="job-list">
    <div class="job-card" v-for="job in jobs" :key="job.id">
      <div class="job-content">
        <h3><i class="fa fa-briefcase icon-title"></i>&nbsp;{{ job.title }}</h3>
        <p class="company-name"><i class="fa fa-building icon-company"></i>&nbsp;{{ job.companyName }}</p>
        <p class="location"><i class="fa fa-map-marker-alt"></i>&nbsp;{{ job.location }}</p>
        <div class="job-tags">
          <span v-for="tag in job.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <div class="job-card-footer">
          <button class="btn-view" @click="viewDetails(job)">
            <i class="fa fa-eye"></i> View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      jobs: [
      {
    id: 1,
    title: 'Frontend Developer',
    companyName: 'Tech Innovators',
    location: 'New York, NY',
    tags: ['Remote', 'Full-time', 'React.js', 'JavaScript'],
  },
  {
    id: 2,
    title: 'Backend Developer',
    companyName: 'Code Craft',
    location: 'San Francisco, CA',
    tags: ['On-site', 'Full-time', 'Node.js', 'Microservices'],
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    companyName: 'CloudWorks',
    location: 'Austin, TX',
    tags: ['Hybrid', 'Kubernetes', 'AWS', 'CI/CD'],
  },
  {
    id: 4,
    title: 'Data Scientist',
    companyName: 'AI Labs',
    location: 'Boston, MA',
    tags: ['Remote', 'Python', 'Machine Learning', 'Big Data'],
  },
  {
    id: 5,
    title: 'UI/UX Designer',
    companyName: 'Pixel Perfect',
    location: 'Seattle, WA',
    tags: ['Full-time', 'Figma', 'User Research', 'Design Systems'],
  },
  {
    id: 6,
    title: 'Product Manager',
    companyName: 'Startup Hub',
    location: 'Denver, CO',
    tags: ['On-site', 'Agile', 'Roadmap', 'Leadership'],
  },
  {
    id: 7,
    title: 'Cybersecurity Specialist',
    companyName: 'SecureNet',
    location: 'Washington, D.C.',
    tags: ['Full-time', 'Penetration Testing', 'Network Security'],
  },
  {
    id: 8,
    title: 'Mobile App Developer',
    companyName: 'Appify',
    location: 'Los Angeles, CA',
    tags: ['Flutter', 'iOS', 'Android', 'Full-time'],
  },
  {
    id: 9,
    title: 'Blockchain Developer',
    companyName: 'CryptoChain',
    location: 'Miami, FL',
    tags: ['Ethereum', 'Smart Contracts', 'Full-time', 'Remote'],
  },
  {
    id: 10,
    title: 'AI Engineer',
    companyName: 'DeepMind Solutions',
    location: 'Palo Alto, CA',
    tags: ['Deep Learning', 'NLP', 'Full-time', 'Hybrid'],
  },
      ],
    };
  },
  methods: {
    viewDetails(job) {
      this.$router.push({ name: 'JobDetails', params: { jobId: job.id } });
    },
  },
};
</script>


<style scoped>
.job-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
  padding: 0 20px;
}

.job-card {
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.job-card:hover {
  transform: scale(1.05);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
}


.job-image {
  height: 180px;
  background-size: cover;
  background-position: center;
  border-bottom: 4px solid #007bff;
}


.job-content {
  padding: 20px;
}

.job-content h3 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.company-name {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
}

.location {
  font-size: 1rem;
  color: #007bff;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
}


.job-tags {
  margin: 15px 0;
}

.tag {
  display: inline-block;
  background: #f0f8ff;
  color: #007bff;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.85rem;
  margin-right: 8px;
}

.job-card-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.btn-view {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(45deg, #007bff, #0056b3);
  color: white;
  padding: 12px 20px;
  border-radius: 30px;
  font-size: 1rem;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-view i {
  margin-right: 8px;
}

.btn-view:hover {
  background: linear-gradient(45deg, #0056b3, #003580);
  transform: translateY(-3px);
}


.job-card {
  animation: fadeInUp 0.5s ease-in-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


@media (max-width: 768px) {
  .job-image {
    height: 150px;
  }

  .job-content h3 {
    font-size: 1.5rem;
  }

  .btn-view {
    font-size: 0.9rem;
    padding: 10px 16px;
  }
}
</style>
