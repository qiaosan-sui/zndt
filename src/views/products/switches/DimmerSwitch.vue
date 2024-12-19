<template>
  <div class="product-detail">
    <!-- 产品头部 -->
    <section class="product-hero">
      <div class="container">
        <div class="product-hero__content">
          <h1>智能调光开关</h1>
          <p class="subtitle">无极调光，自动调节，节能环保</p>
          <div class="features-list">
            <div v-for="(feature, index) in features" 
                 :key="index" 
                 class="feature-item">
              <span class="feature-icon">✓</span>
              <span>{{ feature }}</span>
            </div>
          </div>
          <button class="btn btn--primary">立即咨询</button>
        </div>
        <div class="product-hero__image">
          <img :src="productImage" alt="智能调光开关">
        </div>
      </div>
    </section>

    <!-- 产品规格 -->
    <section class="product-specs">
      <div class="container">
        <h2>产品规格</h2>
        <div class="specs-grid">
          <div class="spec-group">
            <h3>基本参数</h3>
            <ul>
              <li v-for="(spec, index) in specifications.basic" :key="index">
                <span class="spec-label">{{ spec.label }}:</span>
                <span class="spec-value">{{ spec.value }}</span>
              </li>
            </ul>
          </div>
          <div class="spec-group">
            <h3>功能特点</h3>
            <ul>
              <li v-for="(spec, index) in specifications.features" :key="index">
                <span class="spec-label">{{ spec.label }}:</span>
                <span class="spec-value">{{ spec.value }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能亮点 -->
    <section class="product-features">
      <div class="container">
        <h2>功能亮点</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🌓</div>
            <h3>无极调光</h3>
            <p>0-100%无极调光，满足不同场景需求</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⏰</div>
            <h3>定时控制</h3>
            <p>支持定时开关和亮度调节，智能化生活</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔗</div>
            <h3>场景联动</h3>
            <p>可与其他智能设备联动，打造智能家居</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>过载保护</h3>
            <p>内置多重保护机制，使用更安全</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->
    <section class="product-scenarios">
      <div class="container">
        <h2>应用场景</h2>
        <div class="scenarios-grid">
          <div class="scenario-card">
            <img :src="productImage" alt="客厅场景">
            <h3>客厅氛围</h3>
            <p>调节灯光亮度，营造温馨舒适的氛围</p>
          </div>
          <div class="scenario-card">
            <img :src="productImage" alt="卧室场景">
            <h3>卧室助眠</h3>
            <p>渐变调光功能，帮助入睡更舒适</p>
          </div>
          <div class="scenario-card">
            <img :src="productImage" alt="书房场景">
            <h3>书房阅读</h3>
            <p>智能调节光线，保护眼睛健康</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import productImage from '@/assets/images/test2.png';

const features = [
  '无极调光',
  '定时控制',
  '场景联动',
  '过载保护'
];

const specifications = {
  basic: [
    { label: '产品尺寸', value: '86×86×35mm' },
    { label: '额定电压', value: 'AC 100-240V' },
    { label: '最大负载', value: '200W' },
    { label: '面板材质', value: '钢化玻璃' },
    { label: '颜色', value: '雅白/幻夜黑' },
    { label: '安装方式', value: '86型底盒安装' }
  ],
  features: [
    { label: '调光范围', value: '0-100%' },
    { label: '无线协议', value: 'Wi-Fi/蓝牙' },
    { label: '调光方式', value: '触控/APP/语音' },
    { label: '定时功能', value: '支持' },
    { label: '过载保护', value: '支持' },
    { label: '智能联动', value: '支持多设备联动' }
  ]
};
</script>

<style lang="scss" scoped>
.product-detail {
  padding-top: 60px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.product-hero {
  background: #f8f8f8;
  padding: 80px 0;
  overflow: hidden;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  &__content {
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #333;
    }

    .subtitle {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 2rem;
      line-height: 1.6;
    }
  }

  &__image {
    img {
      width: 100%;
      height: auto;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
  }
}

.features-list {
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  color: #666;

  .feature-icon {
    color: #007aff;
  }
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &--primary {
    background: #007aff;
    color: white;
    border: none;

    &:hover {
      background: darken(#007aff, 10%);
      transform: translateY(-2px);
    }
  }
}

.product-specs {
  padding: 80px 0;

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: #333;
  }

  .specs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
  }

  .spec-group {
    background: #f8f8f8;
    padding: 30px;
    border-radius: 20px;

    h3 {
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
      color: #333;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        justify-content: space-between;
        padding: 12px 0;
        border-bottom: 1px solid #eee;
        color: #666;

        &:last-child {
          border-bottom: none;
        }

        .spec-label {
          font-weight: 500;
        }
      }
    }
  }
}

.product-features {
  padding: 80px 0;
  background: #f8f8f8;

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: #333;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
  }

  .feature-card {
    background: white;
    padding: 30px;
    border-radius: 20px;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }

    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: #333;
    }

    p {
      color: #666;
      line-height: 1.6;
    }
  }
}

.product-scenarios {
  padding: 80px 0;

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: #333;
  }

  .scenarios-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  .scenario-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    h3 {
      font-size: 1.3rem;
      margin: 1.5rem;
      color: #333;
    }

    p {
      margin: 0 1.5rem 1.5rem;
      color: #666;
      line-height: 1.6;
    }
  }
}

@media (max-width: 768px) {
  .product-hero {
    padding: 40px 0;

    .container {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    &__content {
      text-align: center;

      h1 {
        font-size: 2rem;
      }
    }
  }

  .product-specs,
  .product-features,
  .product-scenarios {
    padding: 40px 0;

    .specs-grid,
    .features-grid,
    .scenarios-grid {
      gap: 20px;
    }
  }
}
</style>
