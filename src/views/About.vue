<template>
  <div class="about">
    <section class="about-hero">
      <div class="container">
        <h1>关于我们</h1>
      </div>
    </section>

    <section class="company-info">
      <div class="container">
        <div class="info-content">
          <div class="info-text">
            <h2>公司简介</h2>
            <p>ISemes科技专注于工业智能质检领域，基于人工智能图像识别技术，为纺织行业提供先进的质量检测解决方案。我们的核心产品工业智能质检平台，采用时空联合定位算法，实现24小时不间断疵点检测，帮助企业从源头开始检测降低布损。</p>
            <p>我们拥有一支由计算机视觉、机器学习和工业自动化领域专家组成的技术团队，致力于将最新的人工智能技术应用于传统制造业，提升生产效率和产品质量。我们的解决方案已经在多家针织厂成功应用，为客户带来了显著的经济效益。</p>
          </div>
          <div class="info-image">
            <img src="https://console.enterprise.trae.cn/api/ide/v1/text_to_image?prompt=industrial%20technology%20team%20working%20on%20AI%20quality%20inspection&image_size=landscape_16_9" alt="公司团队">
          </div>
        </div>
      </div>
    </section>

    <section class="mission-vision">
      <div class="container">
        <div class="mission">
          <h3>我们的使命</h3>
          <p>通过人工智能技术，帮助纺织企业实现智能化转型，降低生产成本，提高产品质量，增强市场竞争力。</p>
        </div>
        <div class="vision">
          <h3>我们的愿景</h3>
          <p>成为全球领先的工业智能质检解决方案提供商，引领纺织行业的智能化革命。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-hero {
  background-color: #667eea;
  color: white;
  padding: 80px 0;
  text-align: center;
}

.about-hero h1 {
  font-size: 3rem;
}

.company-info {
  padding: 80px 0;
}

.info-content {
  display: flex;
  gap: 50px;
  align-items: center;
}

.info-text {
  flex: 1;
}

.info-text h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
}

.info-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #666;
}

.info-image {
  flex: 1;
}

.info-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.mission-vision {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.mission-vision .container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
}

.mission, .vision {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.mission h3, .vision h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #667eea;
}

.mission p, .vision p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
}
</style>
