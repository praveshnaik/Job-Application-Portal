<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal">
      <h2><i class="fa fa-briefcase icon-title"></i>&nbsp;{{ job.title }}</h2>
      <p class="company-name"><i class="fa fa-building icon-company"></i>&nbsp;{{ job.companyName }}</p>
      <p class="location"><i class="fa fa-map-marker-alt"></i> {{ job.location }}</p>
      
      <p class="full-description"><b>Full Job Description</b><br/><br/>{{ job.description }}</p>
      <div class="modal-footer">
        <button class="btn-apply" @click="openApplicationForm">Apply Now</button>
        <button class="btn-close" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: true,
      job: null, 
    };
  },
  created() {
    this.fetchJobDetails();
  },
  methods: {
    fetchJobDetails() {
      const jobId = this.$route.params.jobId;
      const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    companyName: 'Tech Innovators',
    location: 'New York, NY',
    description: 'As a Frontend Developer, you will be responsible for building interactive and responsive web applications. You should have experience with HTML, CSS, JavaScript, and React.js. A strong understanding of responsive design principles, cross-browser compatibility, and performance optimization is essential. A degree in Computer Science or a related field, along with at least 2-3 years of frontend development experience, is required.',
  },
  {
    id: 2,
    title: 'Backend Developer',
    companyName: 'Code Craft',
    location: 'San Francisco, CA',
    description: 'We are looking for a skilled Backend Developer to design and maintain server-side applications. Experience with Node.js, Express, and RESTful APIs is a must. You should be comfortable working with databases like MongoDB, PostgreSQL, or MySQL. A degree in Computer Science or equivalent, along with 3+ years of experience in backend development, is preferred. Strong problem-solving skills and experience with version control systems like Git are required.',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    companyName: 'CloudWorks',
    location: 'Austin, TX',
    description: 'As a DevOps Engineer, you will manage cloud infrastructure, CI/CD pipelines, and automate deployment workflows. Experience with AWS, Kubernetes, Docker, and Jenkins is essential. You should have a strong understanding of automation tools, infrastructure as code (e.g., Terraform, Ansible), and monitoring systems. A Bachelor’s degree in Computer Science, IT, or a related field and at least 3 years of hands-on DevOps experience are required.',
  },
  {
    id: 4,
    title: 'Data Scientist',
    companyName: 'AI Labs',
    location: 'Boston, MA',
    description: 'We are seeking a Data Scientist to help analyze large datasets and generate predictive models. You should have a strong understanding of machine learning algorithms, data preprocessing, and model deployment. Proficiency in Python, R, or other statistical software is required. A degree in Data Science, Statistics, or a related field and at least 2 years of experience in data analysis and machine learning are essential. Familiarity with big data tools like Hadoop and Spark is a plus.',
  },
  {
    id: 5,
    title: 'UI/UX Designer',
    companyName: 'Pixel Perfect',
    location: 'Seattle, WA',
    description: 'As a UI/UX Designer, you will create user-centered designs for web and mobile applications. Proficiency in design tools like Figma, Sketch, or Adobe XD is required. You should have experience with wireframing, prototyping, and conducting user research. A degree in Graphic Design, Interaction Design, or a related field is preferred, along with at least 2 years of professional design experience. Strong communication and collaboration skills are a must.',
  },
  {
    id: 6,
    title: 'Product Manager',
    companyName: 'Startup Hub',
    location: 'Denver, CO',
    description: 'As a Product Manager, you will oversee the development and delivery of products from inception to launch. You should have experience in defining product roadmaps, managing cross-functional teams, and gathering customer feedback. Strong knowledge of Agile methodologies is essential. A degree in Business, Engineering, or a related field, with at least 3 years of experience in product management, is required. Leadership skills and the ability to manage competing priorities are key.',
  },
  {
    id: 7,
    title: 'Cybersecurity Specialist',
    companyName: 'SecureNet',
    location: 'Washington, D.C.',
    description: 'As a Cybersecurity Specialist, you will ensure the security and integrity of our systems and data. Experience in penetration testing, vulnerability assessment, and firewall management is required. Proficiency in tools like Wireshark, Nessus, and Metasploit is preferred. A degree in Information Security, Computer Science, or a related field and at least 3 years of experience in cybersecurity is required. Certifications like CISSP, CEH, or CompTIA Security+ are a plus.',
  },
  {
    id: 8,
    title: 'Mobile App Developer',
    companyName: 'Appify',
    location: 'Los Angeles, CA',
    description: 'As a Mobile App Developer, you will develop applications for iOS and Android using cross-platform frameworks like Flutter or React Native. You should be proficient in mobile development frameworks and tools, with experience in app performance optimization and debugging. A degree in Computer Science or a related field and at least 2 years of experience in mobile app development are required. Familiarity with publishing apps on the App Store and Google Play is a plus.',
  },
  {
    id: 9,
    title: 'Blockchain Developer',
    companyName: 'CryptoChain',
    location: 'Miami, FL',
    description: 'We are looking for a Blockchain Developer to build decentralized applications and smart contracts. You should have experience with Ethereum, Solidity, and blockchain frameworks. Strong knowledge of cryptography and consensus algorithms is essential. A degree in Computer Science, Engineering, or a related field, along with 2+ years of blockchain development experience, is required. Familiarity with DeFi protocols and blockchain security practices is a plus.',
  },
  {
    id: 10,
    title: 'AI Engineer',
    companyName: 'DeepMind Solutions',
    location: 'Palo Alto, CA',
    description: 'As an AI Engineer, you will develop and deploy machine learning models, including deep learning and natural language processing systems. You should have expertise in Python, TensorFlow, and PyTorch. Experience with neural networks, computer vision, and NLP is preferred. A degree in Computer Science, AI, or a related field, along with at least 3 years of hands-on experience in AI engineering, is required. Knowledge of data wrangling and model optimization is essential.',
  },
];


      this.job = jobs.find((job) => job.id === parseInt(jobId));
    },
    closeModal() {
      this.showModal = false;
      this.$router.push({ name: 'HomePage' }); 
    },
    openApplicationForm() {
  this.$router.push({
    name: 'JobApplication',
    params: { jobId: this.job.id, jobTitle: this.job.title }
  });
},
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease-out;
}

.modal {
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: zoomIn 0.3s ease-out;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.company-name {
  font-size: 1.2rem;
  color: #28a745;
  font-weight: 500;
}

.location {
  font-size: 1rem;
  color: #007bff;
  margin: 10px 0;
}

.full-description {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: left;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

button {
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-apply {
  background-color: #007bff;
  color: white;
}

.btn-apply:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}

.btn-close {
  background-color: #f1f1f1;
  color: #333;
}

.btn-close:hover {
  background-color: #ddd;
  transform: translateY(-3px);
}
</style>
