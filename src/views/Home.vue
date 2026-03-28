<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>欢迎来到 ISemes 科技</h1>
          <p>创新技术，引领未来</p>
          <a href="/about" class="btn btn-primary">了解我们</a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2>我们的优势</h2>
        <div class="features-grid">
          <div class="feature-item">
            <h3>创新技术</h3>
            <p>我们拥有行业领先的技术团队，不断推动创新。</p>
          </div>
          <div class="feature-item">
            <h3>优质服务</h3>
            <p>为客户提供专业、高效、贴心的服务体验。</p>
          </div>
          <div class="feature-item">
            <h3>客户至上</h3>
            <p>以客户需求为中心，提供定制化解决方案。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="products-preview">
      <div class="container">
        <h2>精选产品</h2>
        <div class="products-grid">
          <div class="product-item" v-for="product in products" :key="product.id">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
        <a href="/products" class="btn btn-secondary">查看全部产品</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: '智能系统', description: '高效智能的企业管理系统' },
        { id: 2, name: '数据分析平台', description: '专业的大数据分析解决方案' },
        { id: 3, name: '云服务', description: '安全可靠的云计算服务' }
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

.features {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.features h2, .products-preview h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #333;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-item {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.feature-item h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #667eea;
}

.products-preview {
  padding: 80px 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.product-item {
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #e9ecef;
}

.product-item h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
}
</style>
