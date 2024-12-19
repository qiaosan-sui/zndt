<template>
  <div class="contact-page">
    <div class="page-header">
      <div class="container">
        <h1>联系我们</h1>
        <p>随时为您提供专业支持</p>
      </div>
    </div>

    <div class="container">
      <section class="contact-ways">
        <h2>联系方式</h2>
        <div class="contact-grid">
          <div class="contact-card">
            <div class="icon">📞</div>
            <h3>客服热线</h3>
            <p>400-888-8888</p>
            <p>周一至周日 9:00-18:00</p>
          </div>
          <div class="contact-card">
            <div class="icon">📧</div>
            <h3>电子邮箱</h3>
            <p>客服邮箱：support@example.com</p>
            <p>商务合作：business@example.com</p>
          </div>
          <div class="contact-card">
            <div class="icon">💬</div>
            <h3>在线客服</h3>
            <p>微信公众号：Company</p>
            <p>APP内置客服</p>
          </div>
        </div>
      </section>

      <section class="message-form">
        <h2>留言咨询</h2>
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">姓名</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required 
              placeholder="请输入您的姓名"
            >
          </div>
          <div class="form-group">
            <label for="email">邮箱</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required 
              placeholder="请输入您的邮箱"
            >
          </div>
          <div class="form-group">
            <label for="phone">电话</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone" 
              required 
              placeholder="请输入您的联系电话"
            >
          </div>
          <div class="form-group">
            <label for="type">咨询类型</label>
            <select id="type" v-model="form.type" required>
              <option value="">请选择咨询类型</option>
              <option value="product">产品咨询</option>
              <option value="service">售后服务</option>
              <option value="business">商务合作</option>
              <option value="other">其他问题</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">留言内容</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              required 
              placeholder="请详细描述您的问题"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" class="submit-btn">提交留言</button>
        </form>
      </section>

      <section class="office-locations">
        <h2>办公地点</h2>
        <div class="locations-grid">
          <div class="location-card">
            <img src="@/assets/images/test2.png" alt="北京总部">
            <div class="location-info">
              <h3>北京总部</h3>
              <p>地址：北京市朝阳区xx大厦</p>
              <p>电话：010-88888888</p>
            </div>
          </div>
          <div class="location-card">
            <img src="@/assets/images/test2.png" alt="上海分公司">
            <div class="location-info">
              <h3>上海分公司</h3>
              <p>地址：上海市浦东新区xx广场</p>
              <p>电话：021-88888888</p>
            </div>
          </div>
          <div class="location-card">
            <img src="@/assets/images/test2.png" alt="深圳分公司">
            <div class="location-info">
              <h3>深圳分公司</h3>
              <p>地址：深圳市南山区xx中心</p>
              <p>电话：0755-88888888</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  phone: '',
  type: '',
  message: ''
});

const submitForm = () => {
  // 这里添加表单提交逻辑
  console.log('Form submitted:', form.value);
  alert('感谢您的留言，我们会尽快与您联系！');
  // 重置表单
  form.value = {
    name: '',
    email: '',
    phone: '',
    type: '',
    message: ''
  };
};
</script>

<style lang="scss" scoped>
.contact-page {
  padding-top: 80px;
}

.page-header {
  background: #f8f8f8;
  padding: 60px 0;
  margin-bottom: 60px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
}

section {
  margin-bottom: 80px;

  h2 {
    font-size: 2rem;
    margin-bottom: 40px;
    text-align: center;
  }
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;

  .contact-card {
    text-align: center;
    padding: 40px;
    background: #f8f8f8;
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }

    .icon {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: #333;
    }

    p {
      color: #666;
      margin-bottom: 8px;
    }
  }
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  background: #f8f8f8;
  padding: 40px;
  border-radius: 10px;

  .form-group {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 8px;
      color: #333;
      font-weight: 500;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: #007aff;
      }
    }

    textarea {
      resize: vertical;
    }
  }

  .submit-btn {
    width: 100%;
    padding: 12px;
    background: #007aff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: darken(#007aff, 10%);
    }
  }
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;

  .location-card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .location-info {
      padding: 20px;

      h3 {
        font-size: 1.3rem;
        margin-bottom: 10px;
        color: #333;
      }

      p {
        color: #666;
        margin-bottom: 5px;
      }
    }
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 40px 0;

    h1 {
      font-size: 2rem;
    }
  }

  section {
    margin-bottom: 60px;

    h2 {
      font-size: 1.8rem;
    }
  }

  .contact-form {
    padding: 20px;
  }
}
</style>
