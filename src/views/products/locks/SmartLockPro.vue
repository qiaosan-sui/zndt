<template>
  <div class="product-detail">
    <!-- 产品头部 -->
    <section class="product-hero">
      <div class="container">
        <div class="product-hero__content">
          <h1>智能指纹锁 Pro</h1>
          <p class="subtitle">多重解锁方式，高安全性能，简约时尚设计</p>
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
          <img :src="productImage" alt="智能指纹锁 Pro">
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
            <div class="feature-icon">🔐</div>
            <h3>多重解锁方式</h3>
            <p>支持指纹、密码、NFC、机械钥匙等多种解锁方式，满足不同场景需求</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔔</div>
            <h3>智能防盗报警</h3>
            <p>内置防撬传感器，异常开锁自动报警，守护家居安全</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>APP远程控制</h3>
            <p>手机APP远程开锁、查看开锁记录、设置临时密码</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>低功耗设计</h3>
            <p>采用低功耗芯片，4节5号电池可使用12个月以上</p>
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
            <img :src="productImage" alt="家庭场景">
            <h3>家庭住宅</h3>
            <p>适用于住宅大门、卧室门等场景，提供便捷安全的门锁解决方案</p>
          </div>
          <div class="scenario-card">
            <img :src="productImage" alt="办公场景">
            <h3>办公空间</h3>
            <p>适用于办公室、会议室等场景，支持多人权限管理</p>
          </div>
          <div class="scenario-card">
            <img :src="productImage" alt="出租场景">
            <h3>出租房屋</h3>
            <p>支持远程授权和临时密码，方便房东管理出租房屋</p>
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
  '指纹/密码/NFC多重解锁',
  '防撬报警功能',
  'APP远程控制',
  '临时密码管理'
];

const specifications = {
  basic: [
    { label: '产品尺寸', value: '370×76×27mm' },
    { label: '电池类型', value: '4节5号电池' },
    { label: '待机时间', value: '12个月' },
    { label: '材质', value: '航空级铝合金' },
    { label: '颜色', value: '星空灰/香槟金' },
    { label: '适用门型', value: '40-120mm厚度门' }
  ],
  features: [
    { label: '开锁方式', value: '指纹/密码/NFC/机械钥匙' },
    { label: '指纹容量', value: '100枚' },
    { label: '密码容量', value: '50组' },
    { label: '防盗报警', value: '错误尝试/防撬/低电量报警' },
    { label: '工作温度', value: '-20℃至60℃' },
    { label: '防水等级', value: 'IP65' }
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
