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
import productImage from '@/assets/images/test2.png';

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
    ],
    specifications: {
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
    }
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
    ],
    specifications: {
      basic: [
        { label: '产品尺寸', value: '380×80×30mm' },
        { label: '电池类型', value: '可充电锂电池' },
        { label: '待机时间', value: '6个月' },
        { label: '材质', value: '304不锈钢+钢化玻璃' },
        { label: '颜色', value: '曜石黑' },
        { label: '适用门型', value: '35-100mm厚度门' }
      ],
      features: [
        { label: '开锁方式', value: '人脸/密码/APP/应急钥匙' },
        { label: '人脸容量', value: '50个' },
        { label: '识别速度', value: '0.3秒' },
        { label: '夜视功能', value: '红外补光自动启动' },
        { label: '工作温度', value: '-10℃至50℃' },
        { label: '防水等级', value: 'IP54' }
      ]
    }
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
    ],
    specifications: {
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
    }
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
    ],
    specifications: {
      basic: [
        { label: '分辨率', value: '1920×1080P' },
        { label: '视角', value: '130°广角' },
        { label: '供电方式', value: 'DC 12V/2A' },
        { label: '防护等级', value: 'IP66' },
        { label: '重量', value: '460g' },
        { label: '外壳材质', value: '铝合金' }
      ],
      features: [
        { label: '图像传感器', value: '1/2.8" STARVIS CMOS' },
        { label: '夜视距离', value: '30米' },
        { label: '压缩格式', value: 'H.265/H.264' },
        { label: '工作温度', value: '-30℃至60℃' },
        { label: '存储方式', value: '本地/云存储' },
        { label: '网络接口', value: 'RJ45 10/100Mbps' }
      ]
    }
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
    ],
    specifications: {
      basic: [
        { label: '产品尺寸', value: '86×86×35mm' },
        { label: '额定电压', value: 'AC 100-240V' },
        { label: '额定电流', value: '10A' },
        { label: '面板材质', value: '钢化玻璃' },
        { label: '颜色', value: '雅白/幻夜黑' },
        { label: '安装方式', value: '86型底盒安装' }
      ],
      features: [
        { label: '控制方式', value: '触控/APP/语音' },
        { label: '无线协议', value: 'Wi-Fi/蓝牙' },
        { label: '背光亮度', value: '可调节' },
        { label: '定时功能', value: '支持' },
        { label: '过载保护', value: '支持' },
        { label: '智能联动', value: '支持多设备联动' }
      ]
    }
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
    ],
    specifications: {
      basic: [
        { label: '产品尺寸', value: '86×86×40mm' },
        { label: '额定电压', value: 'AC 100-240V' },
        { label: '调光范围', value: '1-100%' },
        { label: '面板材质', value: '钢化玻璃+铝合金' },
        { label: '颜色', value: '玫瑰金/珍珠白' },
        { label: '负载类型', value: 'LED/白炽灯/节能灯' }
      ],
      features: [
        { label: '调光方式', value: '触控滑动/APP调节' },
        { label: '记忆功能', value: '支持断电记忆' },
        { label: '最大负载', value: '200W LED/400W传统光源' },
        { label: '智能调节', value: '自动亮度调节' },
        { label: '定时设置', value: '支持多时段定时' },
        { label: '异常保护', value: '过载/过温保护' }
      ]
    }
  }
};

const currentProduct = computed(() => products[productId]);

const specifications = computed(() => currentProduct.value?.specifications || {
  basic: [],
  features: []
});

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

.related-products {
  padding: 80px 0;
  background: #f8f8f8;

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: #333;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
}

.product-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
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
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #333;
    }

    p {
      color: #666;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
  }

  .learn-more {
    color: #007aff;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;

    .arrow {
      transition: transform 0.3s ease;
    }

    &:hover .arrow {
      transform: translateX(5px);
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

  .product-specs {
    padding: 40px 0;

    .specs-grid {
      gap: 20px;
    }
  }

  .related-products {
    padding: 40px 0;

    .products-grid {
      gap: 20px;
    }
  }
}
</style>
