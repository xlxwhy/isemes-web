<template>
  <div class="services">
    <section class="services-hero">
      <div class="container">
        <h1>我们的服务</h1>
      </div>
    </section>

    <section class="services-list">
      <div class="container">
        <div class="services-grid">
          <div class="service-card" v-for="service in services" :key="service.id">
            <div class="service-icon">
              {{ service.icon }}
            </div>
            <h2>{{ service.name }}</h2>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="service-details">
      <div class="container">
        <h2>服务详情</h2>
        <div class="detail-item" v-for="service in services" :key="service.id">
          <h3>{{ service.name }}</h3>
          <div class="detail-content">
            <p>{{ service.detail }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          name: '软件开发',
          icon: '💻',
          description: '定制化软件开发服务，满足企业特定需求。',
          detail: '我们提供从需求分析、设计、开发到测试、部署的全流程软件开发服务。我们的团队拥有丰富的开发经验，能够使用多种技术栈，包括Java、Python、JavaScript、Vue、React等，为客户打造高质量的软件产品。'
        },
        {
          id: 2,
          name: '技术咨询',
          icon: '📊',
          description: '专业的技术咨询服务，帮助企业制定技术战略。',
          detail: '我们的技术咨询团队由行业专家组成，能够为客户提供IT战略规划、数字化转型咨询、技术架构设计等服务，帮助企业做出明智的技术决策，提升技术竞争力。'
        },
        {
          id: 3,
          name: '系统集成',
          icon: '🔄',
          description: '企业系统集成服务，实现不同系统之间的无缝对接。',
          detail: '我们提供系统集成服务，帮助企业整合现有的各种业务系统，实现数据共享和业务流程自动化。我们能够处理复杂的系统集成项目，包括企业应用集成、数据集成、API管理等。'
        },
        {
          id: 4,
          name: 'IT运维',
          icon: '🛠️',
          description: '专业的IT运维服务，确保系统稳定运行。',
          detail: '我们提供全方位的IT运维服务，包括系统监控、故障排除、性能优化、安全管理等。我们的运维团队24小时待命，确保客户的系统始终保持最佳运行状态。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-hero {
  background-color: #667eea;
  color: white;
  padding: 80px 0;
  text-align: center;
}

.services-hero h1 {
  font-size: 3rem;
}

.services-list {
  padding: 80px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.service-card {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.service-card h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #333;
}

.service-card p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.service-details {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.service-details h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #333;
}

.detail-item {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.detail-item h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #667eea;
}

.detail-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
}
</style>
