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
          name: '工业智能质检平台',
          description: '基于人工智能图像识别技术，采用时空联合定位算法，实现24小时不间断疵点检测。可根据实际生产情况匹配不同的检测灵敏度，同时具备实时停机告警功能，提高工人看机效率，真正为企业实现提速增产降次布和智能化管理的目标。',
          features: [
            '7*24小时不间断检测',
            '实时停机告警功能',
            '可调节检测灵敏度',
            '时空联合定位算法',
            '云边端技术架构',
            '高精度识别，漏检率低',
            '本地部署，安装快捷',
            '云端数据报表和监控'
          ],
          image: 'https://console.enterprise.trae.cn/api/ide/v1/text_to_image?prompt=industrial%20quality%20inspection%20system%20with%20AI%20technology&image_size=landscape_16_9'
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
