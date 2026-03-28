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
            <p>ISemes科技成立于2010年，是一家专注于提供创新技术解决方案的高科技企业。我们致力于为客户提供最先进的技术产品和服务，帮助企业实现数字化转型。</p>
            <p>经过多年的发展，我们已经拥有一支经验丰富的技术团队，涵盖软件开发、数据分析、云计算等多个领域。我们的客户遍布各行各业，包括金融、制造、教育、医疗等。</p>
          </div>
          <div class="info-image">
            <img src="https://console.enterprise.trae.cn/api/ide/v1/text_to_image?prompt=modern%20office%20environment%20with%20technology%20team%20working%20together&image_size=landscape_16_9" alt="公司团队">
          </div>
        </div>
      </div>
    </section>

    <section class="mission-vision">
      <div class="container">
        <div class="mission">
          <h3>我们的使命</h3>
          <p>通过创新技术，帮助企业提升效率，创造价值，推动社会进步。</p>
        </div>
        <div class="vision">
          <h3>我们的愿景</h3>
          <p>成为行业领先的技术解决方案提供商，引领技术创新的未来。</p>
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
