<template>
  <div class="products-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1>智能产品</h1>
        <p>为您打造智能、安全、舒适的生活空间</p>
      </div>
    </section>

    <!-- 产品分类导航 -->
    <div class="category-nav">
      <div class="container">
        <button 
          v-for="category in categories" 
          :key="category.id"
          :class="['category-btn', { active: currentCategory === category.id }]"
          @click="currentCategory = category.id"
        >
          {{ category.name }}
        </button>
      </div>
    </div>

    <!-- 产品列表 -->
    <section ref="productsSection" class="products-section">
      <div class="container">
        <div ref="productsGrid" class="products-grid">
          <div 
            v-for="product in filteredProducts" 
            :key="product.id" 
            class="product-card"
            @click="goToProduct(product.id)"
          >
            <div class="product-image">
              <img :src="productImage" :alt="product.name">
            </div>
            <div class="product-content">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <div class="product-features">
                <div v-for="(feature, index) in product.features" :key="index" class="feature-item">
                  <span class="feature-icon">✓</span>
                  <span>{{ feature }}</span>
                </div>
              </div>
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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import productImage from '@/assets/images/test2.png';

const router = useRouter();
const route = useRoute();
const productsSection = ref(null);

const categories = [
  { id: 'all', name: '全部产品' },
  { id: 'lock', name: '智能门锁' },
  { id: 'camera', name: '智能监控' },
  { id: 'switch', name: '智能开关' }
];

const currentCategory = ref('all');

// 监听分类变化，滚动到产品列表顶部
watch(currentCategory, () => {
  if (productsSection.value) {
    // 获取分类导航栏的高度
    const categoryNav = document.querySelector('.category-nav');
    const categoryNavHeight = categoryNav ? categoryNav.offsetHeight : 0;
    
    // 获取顶部导航栏的高度（假设是60px，与CSS中的padding-top相同）
    const topNavHeight = 60;
    
    // 计算目标滚动位置
    const targetPosition = productsSection.value.offsetTop - topNavHeight - categoryNavHeight;
    
    // 平滑滚动到目标位置
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
});

// 从 URL query 参数中获取初始分类
onMounted(() => {
  if (route.query.category) {
    currentCategory.value = route.query.category;
  }

  // 监听分类更新事件
  window.addEventListener('updateProductCategory', handleCategoryUpdate);
});

onUnmounted(() => {
  window.removeEventListener('updateProductCategory', handleCategoryUpdate);
});

const handleCategoryUpdate = (event) => {
  currentCategory.value = event.detail;
};

const products = [
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
];

const filteredProducts = computed(() => {
  if (currentCategory.value === 'all') {
    return products;
  }
  return products.filter(product => product.category === currentCategory.value);
});

const goToProduct = (id) => {
  // 根据产品ID确定路由路径
  const routeMap = {
    'lock-1': '/products/locks/smart-lock-pro',
    'lock-2': '/products/locks/face-lock',
    'camera-1': '/products/cameras/smart-camera-2k',
    'camera-2': '/products/cameras/outdoor-camera',
    'switch-1': '/products/switches/smart-panel',
    'switch-2': '/products/switches/dimmer-switch'
  };
  
  router.push(routeMap[id]);
};
</script>

<style lang="scss" scoped>
.products-page {
  padding-top: 60px;
}

.hero-section {
  height: 300px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  .hero-content {
    max-width: 800px;
    padding: 0 20px;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      opacity: 0.9;
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.category-nav {
  background: white;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 60px;
  z-index: 100;
  
  .container {
    display: flex;
    gap: 20px;
    padding: 20px;
  }
}

.category-btn {
  padding: 10px 20px;
  border: none;
  background: none;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    color: #007aff;
    background: #f5f5f5;
  }

  &.active {
    color: white;
    background: #007aff;
  }
}

.products-section {
  padding: 60px 0;
  background: #f8f8f8;
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

.product-features {
  margin-bottom: 20px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  color: #666;

  .feature-icon {
    color: #007aff;
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
  .hero-section {
    height: 200px;

    .hero-content {
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  .category-nav {
    .container {
      padding: 10px;
      gap: 10px;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .category-btn {
    padding: 8px 16px;
    font-size: 14px;
    white-space: nowrap;
  }

  .products-section {
    padding: 30px 0;
  }

  .product-card {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
