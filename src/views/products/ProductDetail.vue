<template>
  <div class="product-detail">
    <!-- 产品头部 -->
    <section class="product-hero">
      <div class="container">
        <div class="product-hero__content">
          <h1>{{ currentProduct?.name }}</h1>
          <p class="subtitle">{{ currentProduct?.description }}</p>
          <div class="features-list">
            <div v-for="(feature, index) in currentProduct?.features" 
                 :key="index" 
                 class="feature-item">
              <span class="feature-icon">✓</span>
              <span>{{ feature }}</span>
            </div>
          </div>
          <button class="btn btn--primary">立即咨询</button>
        </div>
        <div class="product-hero__image">
          <img :src="require('@/assets/images/test2.png')" :alt="currentProduct?.name">
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

    <!-- 相关产品 -->
    <section class="related-products">
      <div class="container">
        <h2>相关产品</h2>
        <div class="products-grid">
          <div v-for="product in relatedProducts" 
               :key="product.id" 
               class="product-card"
               @click="goToProduct(product.id)">
            <div class="product-image">
              <img :src="require('@/assets/images/test2.png')" :alt="product.name">
            </div>
            <div class="product-content">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <div class="learn-more">
                了解更多 <span class="arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const productId = route.params.id;

// 产品数据
const products = {
  'lock-1': {
    id: 'lock-1',
    category: 'lock',
    name: '智能指纹锁 Pro',
    description: '多重解锁方式，高安全性能，简约时尚设计',
    features: [
      '指纹/密码/NFC多重解锁',
      '防撬报警功能',
      'APP远程控制',
      '临时密码管理'
    ]
  },
  'lock-2': {
    id: 'lock-2',
    category: 'lock',
    name: '人脸识别门锁',
    description: '先进的3D人脸识别技术，快速准确的开锁体验',
    features: [
      '3D人脸识别',
      '防假体验证',
      '红外夜视',
      '一键开锁'
    ]
  },
  'camera-1': {
    id: 'camera-1',
    category: 'camera',
    name: '智能摄像头 2K',
    description: '超清画质，AI智能识别，全天候安全守护',
    features: [
      '2K超清画质',
      '人形检测',
      '双向通话',
      '移动追踪'
    ]
  },
  'camera-2': {
    id: 'camera-2',
    category: 'camera',
    name: '室外防水摄像头',
    description: 'IP66防水，夜视增强，户外安防必备',
    features: [
      'IP66防水防尘',
      '30米夜视',
      '异常声音检测',
      '云存储支持'
    ]
  },
  'switch-1': {
    id: 'switch-1',
    category: 'switch',
    name: '智能开关面板',
    description: '简约设计，触控操作，场景联动',
    features: [
      '触控操作',
      'LED背光',
      '情景模式',
      'APP控制'
    ]
  },
  'switch-2': {
    id: 'switch-2',
    category: 'switch',
    name: '智能调光开关',
    description: '无极调光，自动调节，节能环保',
    features: [
      '无极调光',
      '定时控制',
      '场景联动',
      '过载保护'
    ]
  }
};

const specifications = {
  basic: [
    { label: '产品尺寸', value: '370×76×27mm' },
    { label: '电池类型', value: '4节5号电池' },
    { label: '待机时间', value: '12个月' },
    { label: '材质', value: '铝合金' }
  ],
  features: [
    { label: '开锁方式', value: '指纹/密码/APP/钥匙' },
    { label: '指纹容量', value: '100枚' },
    { label: '密码容量', value: '50组' },
    { label: '防盗报警', value: '支持' }
  ]
};

const currentProduct = computed(() => products[productId]);

const relatedProducts = computed(() => {
  if (!currentProduct.value) return [];
  return Object.values(products)
    .filter(p => p.category === currentProduct.value.category && p.id !== currentProduct.value.id)
    .slice(0, 2);
});

const goToProduct = (id) => {
  router.push(`/products/${id}`);
};
</script>

<style lang="scss" scoped>
.product-detail {
  padding-top: 60px;
}

.product-hero {
  background: #f8f8f8;
  padding: 80px 0;
  overflow: hidden;

  .container {
    display: flex;
    align-items: center;
    gap: 60px;
  }

  &__content {
    flex: 1;

    h1 {
      font-size: 3rem;
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
    flex: 1;
    
    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &--primary {
    background: #007aff;
    color: white;
    border: none;

    &:hover {
      background: darken(#007aff, 10%);
    }
  }
}

section {
  padding: 80px 0;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 60px;
    color: #333;
  }
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.spec-group {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }
  }

  .spec-label {
    color: #666;
  }

  .spec-value {
    color: #333;
    font-weight: 500;
  }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
}

.product-image {
  height: 240px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
}

.product-content {
  padding: 30px;

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
  }
}

.learn-more {
  color: #007aff;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;

  .arrow {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: darken(#007aff, 10%);

    .arrow {
      transform: translateX(5px);
    }
  }
}

@media (max-width: 768px) {
  .product-hero {
    padding: 40px 0;

    .container {
      flex-direction: column;
      gap: 30px;
    }

    &__content {
      h1 {
        font-size: 2rem;
      }
    }
  }

  section {
    padding: 40px 0;

    h2 {
      font-size: 2rem;
      margin-bottom: 40px;
    }
  }

  .product-card {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
