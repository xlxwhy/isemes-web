<template>
  <div class="products">
    <section class="products-hero">
      <div class="container">
        <h1>我们的产品</h1>
      </div>
    </section>

    <section class="products-list">
      <div class="container">
        <div class="product-card" v-for="product in products" :key="product.id">
          <div class="product-image">
            <img :src="product.image" :alt="product.name">
          </div>
          <div class="product-info">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <ul>
              <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
            </ul>
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
      products: [
        {
          id: 1,
          name: '智能管理系统',
          description: '一款集成了企业资源规划、客户关系管理、人力资源管理等功能的智能管理系统。',
          features: [
            '模块化设计，灵活配置',
            '智能数据分析，辅助决策',
            '多终端支持，随时随地办公',
            '安全可靠，数据加密保护'
          ],
          image: 'https://console.enterprise.trae.cn/api/ide/v1/text_to_image?prompt=modern%20business%20management%20software%20dashboard&image_size=landscape_16_9'
        },
        {
          id: 2,
          name: '数据分析平台',
          description: '基于大数据技术的专业分析平台，帮助企业挖掘数据价值，提升竞争力。',
          features: [
            '实时数据处理，快速响应',
            '可视化图表，直观展示',
            '智能算法，精准预测',
            '自定义报表，灵活导出'
          ],
          image: 'https://console.enterprise.trae.cn/api/ide/v1/text_to_image?prompt=data%20analytics%20dashboard%20with%20charts%20and%20graphs&image_size=landscape_16_9'
        },
        {
          id: 3,
          name: '云服务平台',
          description: '提供安全、可靠、高效的云计算服务，包括云服务器、云存储、云数据库等。',
          features: [
            '弹性扩展，按需付费',
            '99.99%可用性保障',
            '全球数据中心，低延迟',
            '全方位安全防护'
          ],
          image: 'https://console.enterprise.trae.cn/api/ide/v1/text_to_image?prompt=cloud%20computing%20technology%20infrastructure%20visualization&image_size=landscape_16_9'
        }
      ]
    }
  }
}
</script>

<style scoped>
.products-hero {
  background-color: #667eea;
  color: white;
  padding: 80px 0;
  text-align: center;
}

.products-hero h1 {
  font-size: 3rem;
}

.products-list {
  padding: 80px 0;
}

.product-card {
  display: flex;
  gap: 50px;
  margin-bottom: 60px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.product-image {
  flex: 1;
}

.product-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.product-info {
  flex: 1;
}

.product-info h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.product-info p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #666;
}

.product-info ul {
  list-style-type: none;
  padding: 0;
}

.product-info li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
  color: #666;
}

.product-info li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}
</style>
