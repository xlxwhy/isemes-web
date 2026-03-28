<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section about">
          <h3>ISemes 科技</h3>
          <p>创新技术，引领未来。我们致力于为客户提供最先进的技术产品和服务。</p>
        </div>
        <div class="footer-section links">
          <h3>快速链接</h3>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
            <li><router-link to="/products">产品</router-link></li>
            <li><router-link to="/services">服务</router-link></li>
            <li><router-link to="/contact">联系我们</router-link></li>
          </ul>
        </div>
        <div class="footer-section contact">
          <h3>联系我们</h3>
          <div class="contact-info">
            <p><span class="icon">📍</span> 北京市海淀区中关村科技园区</p>
            <p><span class="icon">📞</span> +86 010-12345678</p>
            <p><span class="icon">✉️</span> contact@isemes.com</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} ISemes 科技. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 50px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin-bottom: 30px;
}

.footer-section h3 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #667eea;
}

.footer-section p {
  line-height: 1.6;
  margin-bottom: 10px;
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #667eea;
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  font-size: 1.2rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #444;
  color: #999;
}
</style>
