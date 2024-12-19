<template>
  <div class="product-detail">
    <!-- 产品头部 -->
    <section class="product-hero">
      <div class="container">
        <div class="product-hero__content">
          <h1>智能摄像头 2K</h1>
          <p class="subtitle">超清画质，AI智能识别，全天候安全守护</p>
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
          <img :src="productImage" alt="智能摄像头 2K">
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
            <div class="feature-icon">📹</div>
            <h3>2K超清画质</h3>
            <p>2560×1440P超高清分辨率，画面细节清晰可见</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤖</div>
            <h3>AI智能识别</h3>
            <p>支持人形检测、移动追踪、哭声检测等AI功能</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔊</div>
            <h3>双向通话</h3>
            <p>内置麦克风和扬声器，支持实时双向语音对讲</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💾</div>
            <h3>云端存储</h3>
            <p>支持本地TF卡和云存储，录像随时查看</p>
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
            <img :src="productImage" alt="家庭监控">
            <h3>家庭监控</h3>
            <p>实时查看家中情况，守护家人安全</p>
          </div>
          <div class="scenario-card">
            <img :src="productImage" alt="婴儿看护">
            <h3>婴儿看护</h3>
            <p>支持哭声检测，及时了解宝宝状况</p>
          </div>
          <div class="scenario-card">
            <img :src="productImage" alt="宠物陪伴">
            <h3>宠物陪伴</h3>
            <p>随时查看宠物状态，远程语音互动</p>
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
  '2K超清画质',
  '人形检测',
  '双向通话',
  '移动追踪'
];

const specifications = {
  basic: [
    { label: '分辨率', value: '2560×1440P' },
    { label: '视角', value: '360°水平，95°垂直' },
    { label: '供电方式', value: 'DC 5V/1A' },
    { label: '存储方式', value: 'Micro SD卡/云存储' },
    { label: '重量', value: '280g' },
    { label: '颜色', value: '珍珠白' }
  ],
  features: [
    { label: '图像传感器', value: '1/2.7" CMOS' },
    { label: '夜视距离', value: '10米' },
    { label: 'AI功能', value: '人形检测/移动追踪/哭声检测' },
    { label: '音频', value: '双向通话/噪声抑制' },
    { label: '网络协议', value: 'Wi-Fi IEEE 802.11 b/g/n' },
    { label: '存储支持', value: '最大128GB TF卡' }
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
