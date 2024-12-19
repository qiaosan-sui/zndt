<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__column">
          <h3>关于我们</h3>
          <ul>
            <li><router-link to="/about/company">公司介绍</router-link></li>
            <li><router-link to="/about/culture">企业文化</router-link></li>
            <li><router-link to="/about/join">加入我们</router-link></li>
            <li><router-link to="/about/contact">联系我们</router-link></li>
          </ul>
        </div>
        
        <div class="footer__column">
          <h3>产品中心</h3>
          <ul>
            <li><router-link to="/products/locks">智能门锁</router-link></li>
            <li><router-link to="/products/cameras">智能摄像机</router-link></li>
            <li><router-link to="/products/switches">智能开关</router-link></li>
            <li><router-link to="/products">全部产品</router-link></li>
          </ul>
        </div>
        
        <div class="footer__column">
          <h3>服务支持</h3>
          <ul>
            <li><router-link to="/support/download">下载中心</router-link></li>
            <li><router-link to="/support/manual">使用手册</router-link></li>
            <li><router-link to="/support/faq">常见问题</router-link></li>
            <li><router-link to="/support/warranty">保修政策</router-link></li>
          </ul>
        </div>
        
        <div class="footer__column">
          <h3>商业合作</h3>
          <ul>
            <li><router-link to="/business/partner">渠道合作</router-link></li>
            <li><router-link to="/business/distributor">经销商专区</router-link></li>
            <li><router-link to="/business/enterprise">企业采购</router-link></li>
            <li><router-link to="/business/developer">开发者平台</router-link></li>
          </ul>
        </div>
        
        <div class="footer__column footer__contact">
          <h3>联系我们</h3>
          <div class="contact-info">
            <p>服务热线：400-888-8888</p>
            <p>工作时间：9:00-18:00</p>
            <p>邮箱：support@example.com</p>
          </div>
          <div class="social-links">
            <a href="#" class="social-link">微信</a>
            <a href="#" class="social-link">微博</a>
            <a href="#" class="social-link">抖音</a>
          </div>
        </div>
      </div>
      
      <div class="footer__bottom">
        <div class="footer__copyright">
          <p> {{ currentYear }} YourCompany. All rights reserved.</p>
        </div>
        <div class="footer__links">
          <router-link to="/privacy">隐私政策</router-link>
          <router-link to="/terms">使用条款</router-link>
          <router-link to="/sitemap">网站地图</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.footer {
  background-color: #f8f8f8;
  padding: 60px 0 30px;
  color: #333;

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    margin-bottom: 50px;
  }

  &__column {
    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 20px;
      color: #333;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 12px;

        a {
          color: #666;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.95rem;

          &:hover {
            color: #007aff;
          }
        }
      }
    }
  }

  &__contact {
    .contact-info {
      margin-bottom: 20px;

      p {
        margin-bottom: 10px;
        color: #666;
        font-size: 0.95rem;
      }
    }

    .social-links {
      display: flex;
      gap: 15px;

      .social-link {
        color: #666;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #007aff;
        }
      }
    }
  }

  &__bottom {
    padding-top: 30px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    .footer__copyright {
      color: #999;
      font-size: 0.9rem;
    }

    .footer__links {
      display: flex;
      gap: 20px;

      a {
        color: #999;
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.3s ease;

        &:hover {
          color: #007aff;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;

    &__grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    &__contact {
      grid-column: 1 / -1;
    }

    &__bottom {
      flex-direction: column;
      text-align: center;

      .footer__links {
        justify-content: center;
      }
    }
  }
}

@media (max-width: 480px) {
  .footer {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
