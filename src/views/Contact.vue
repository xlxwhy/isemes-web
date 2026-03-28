<template>
  <div class="contact">
    <section class="contact-hero">
      <div class="container">
        <h1>联系我们</h1>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-form">
          <h2>发送消息</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">姓名</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>
            <div class="form-group">
              <label for="subject">主题</label>
              <input type="text" id="subject" v-model="form.subject" required>
            </div>
            <div class="form-group">
              <label for="message">消息</label>
              <textarea id="message" v-model="form.message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">发送消息</button>
          </form>
        </div>

        <div class="contact-info">
          <h2>联系方式</h2>
          <div class="info-item">
            <span class="icon">📍</span>
            <div>
              <h3>地址</h3>
              <p>北京市海淀区中关村科技园区</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">📞</span>
            <div>
              <h3>电话</h3>
              <p>+86 010-12345678</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">✉️</span>
            <div>
              <h3>邮箱</h3>
              <p>contact@isemes.com</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">⏰</span>
            <div>
              <h3>工作时间</h3>
              <p>周一至周五: 9:00 - 18:00</p>
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
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // 这里可以添加表单提交逻辑
      alert('消息发送成功！我们会尽快回复您。');
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
.contact-hero {
  background-color: #667eea;
  color: white;
  padding: 80px 0;
  text-align: center;
}

.contact-hero h1 {
  font-size: 3rem;
}

.contact-content {
  padding: 80px 0;
}

.contact-content .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

.contact-form h2, .contact-info h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
}

.btn-primary {
  background-color: #667eea;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #5a6fd8;
  transform: translateY(-2px);
}

.info-item {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  align-items: flex-start;
}

.icon {
  font-size: 2rem;
  color: #667eea;
}

.info-item h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #333;
}

.info-item p {
  color: #666;
  margin: 0;
}
</style>
