<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>工业智能质检平台</h1>
          <p>基于人工智能图像识别技术，实现24小时不间断疵点检测</p>
          <a href="/products" class="btn btn-primary">了解产品</a>
        </div>
      </div>
    </section>

    <!-- Product Advantages Section -->
    <section class="product-advantages">
      <div class="container">
        <h2>产品优势</h2>
        <div class="advantages-grid">
          <div class="advantage-item">
            <div class="advantage-icon">⏰</div>
            <h3>7*24h检测</h3>
            <p>全天候实时检测，实时停机提醒工人及时处理瑕疵，避免大量废布产生</p>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">🎯</div>
            <h3>过检不超20%</h3>
            <p>基于人工智能计算机视觉识别技术，全方位识别布面瑕疵，过滤不应检出瑕疵</p>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">✅</div>
            <h3>漏检不超2%</h3>
            <p>多种可检测疵点，且随着系统智能学习逐步添加完善，检测环境纯净干扰少</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Features Section -->
    <section class="product-features">
      <div class="container">
        <h2>产品功能</h2>
        <div class="features-grid">
          <div class="feature-item">
            <h3>边织边检</h3>
            <p>一边织布一边检测，实时停机，有效提升工人看机效率</p>
          </div>
          <div class="feature-item">
            <h3>云端日报</h3>
            <p>历史检出情况云端查看，减少的损失随时了解</p>
          </div>
          <div class="feature-item">
            <h3>云端监控</h3>
            <p>设备状态实时监控，确保生产稳定运行</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Advantages Section -->
    <section class="technical-advantages">
      <div class="container">
        <h2>技术优势</h2>
        <div class="advantages-grid">
          <div class="advantage-item">
            <h3>高精度识别</h3>
            <p>适应所有国产及进口品牌的单面机型，识别精度高，漏检率低</p>
          </div>
          <div class="advantage-item">
            <h3>本地部署</h3>
            <p>本地部署设备，安装快捷简便、位置固定、维护轻松简单</p>
          </div>
          <div class="advantage-item">
            <h3>端云一体</h3>
            <p>采用时空联合定位算法，响应速度快，维护成本低，检测效率高</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Benefits Section -->
    <section class="customer-benefits">
      <div class="container">
        <h2>为您带来的效益</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="benefit-icon">📉</div>
            <h3>废布量极大减少</h3>
            <p>废布经济损失降低80%以上</p>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">👨‍💼</div>
            <h3>工人效率提升</h3>
            <p>从看4台机到看6台机，工作积极性变高</p>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">📈</div>
            <h3>订单量显著提升</h3>
            <p>布匹品质卓越，订单源源不断</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Reviews Section -->
    <section class="customer-reviews">
      <div class="container">
        <h2>客户评价</h2>
        <div class="reviews-grid">
          <div class="review-item" v-for="(review, index) in reviews" :key="index">
            <div class="review-content">
              <p>{{ review }}</p>
            </div>
            <div class="review-author">
              <span>{{ reviewAuthors[index] }}</span>
            </div>
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
      reviews: [
        "用了之后每台机的废布损失减少了80%",
        "装了检测设备后，每台机每个月能省下近千元",
        "装了之后，除了废布减少了，工人的工作积极性也提高了不少",
        "工人说现在看机更简单了，而且每天还可以多织布",
        "以前一个工人看4台机，装了之后一个工人可以看6台机",
        "装了之后，看机效率和看机质量都提升了"
      ],
      reviewAuthors: [
        "针织厂1",
        "针织厂2",
        "针织厂3",
        "针织厂4",
        "针织厂5",
        "针织厂6"
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: white;
  color: #667eea;
}

.btn-primary:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: #667eea;
  color: white;
  margin-top: 30px;
}

.btn-secondary:hover {
  background-color: #5a6fd8;
  transform: translateY(-2px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Common styles for all sections */
.product-advantages, .product-features, .technical-advantages, .customer-benefits, .customer-reviews {
  padding: 80px 0;
}

.product-features, .customer-reviews {
  background-color: #f8f9fa;
}

.product-advantages h2, .product-features h2, .technical-advantages h2, .customer-benefits h2, .customer-reviews h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #333;
}

/* Grid styles */
.advantages-grid, .features-grid, .benefits-grid, .reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* Item styles */
.advantage-item, .feature-item, .benefit-item {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.advantage-item:hover, .feature-item:hover, .benefit-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.advantage-item h3, .feature-item h3, .benefit-item h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #667eea;
}

.advantage-item p, .feature-item p, .benefit-item p {
  color: #666;
  line-height: 1.6;
}

/* Icon styles */
.advantage-icon, .benefit-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #667eea;
}

/* Reviews section */
.review-item {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.review-content {
  margin-bottom: 20px;
}

.review-content p {
  color: #666;
  line-height: 1.6;
  font-style: italic;
}

.review-author {
  text-align: right;
  font-weight: bold;
  color: #667eea;
}
</style>
