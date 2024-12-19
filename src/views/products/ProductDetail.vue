<template>
  <div class="product-detail">
    <!-- 产品头部 -->
    <section class="product-hero">
      <div class="container">
        <div class="product-hero__content">
          <h1>{{ product.name }}</h1>
          <p class="subtitle">{{ product.subtitle }}</p>
          <div class="price">{{ product.price }}</div>
          <button class="btn btn--primary">立即购买</button>
        </div>
        <div class="product-hero__image">
          <img :src="product.heroImage" :alt="product.name">
        </div>
      </div>
    </section>

    <!-- 产品特点 -->
    <section class="product-features">
      <div class="container">
        <h2>产品特点</h2>
        <div class="features-grid">
          <div v-for="feature in product.features" :key="feature.id" class="feature-card">
            <div class="feature-image">
              <img :src="feature.image" :alt="feature.title">
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品规格 -->
    <section class="product-specs">
      <div class="container">
        <h2>产品规格</h2>
        <div class="specs-grid">
          <div v-for="(spec, category) in product.specifications" :key="category" class="spec-group">
            <h3>{{ category }}</h3>
            <ul>
              <li v-for="(value, key) in spec" :key="key">
                <span class="spec-label">{{ key }}:</span>
                <span class="spec-value">{{ value }}</span>
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
          <div v-for="item in product.relatedProducts" :key="item.id" class="product-card">
            <div class="product-image">
              <img :src="item.image" :alt="item.name">
            </div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <router-link :to="'/products/' + item.id" class="btn btn--secondary">了解更多</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import testImage from '@/assets/images/test2.png';

const route = useRoute();
const productId = route.params.id;

// 产品数据
const productsData = {
  locks: {
    id: 'locks',
    name: '智能门锁 N100',
    subtitle: '指纹解锁，APP远程控制，多重安全防护',
    price: '¥1299',
    heroImage: testImage,
    features: [
      {
        id: 1,
        title: '指纹识别',
        description: '0.3秒快速识别，准确率99.9%',
        image: testImage
      },
      {
        id: 2,
        title: '远程控制',
        description: '手机APP随时查看门锁状态，远程开门',
        image: testImage
      },
      {
        id: 3,
        title: '多重防护',
        description: '多重加密技术，确保安全',
        image: testImage
      }
    ],
    specifications: {
      基本参数: {
        '产品尺寸': '370×76×27mm',
        '电池类型': '4节5号电池',
        '待机时间': '12个月',
        '材质': '铝合金'
      },
      功能特点: {
        '开锁方式': '指纹/密码/APP/钥匙',
        '指纹容量': '100枚',
        '密码容量': '50组',
        '防盗报警': '支持'
      }
    },
    relatedProducts: [
      {
        id: 'cameras',
        name: '智能摄像机',
        description: '1080P高清画质，AI人形检测',
        image: testImage
      },
      {
        id: 'switches',
        name: '智能开关',
        description: '随时控制家中电器，定时开关',
        image: testImage
      }
    ]
  },
  cameras: {
    id: 'cameras',
    name: '智能摄像机 G3',
    subtitle: '2K超清画质，AI智能识别，双向通话',
    price: '¥699',
    heroImage: testImage,
    features: [
      {
        id: 1,
        title: '2K超清画质',
        description: '2K超高清分辨率，画面清晰细腻',
        image: testImage
      },
      {
        id: 2,
        title: 'AI人形检测',
        description: '智能识别人形，减少误报',
        image: testImage
      },
      {
        id: 3,
        title: '双向通话',
        description: '内置麦克风和扬声器，实现远程对话',
        image: testImage
      }
    ],
    specifications: {
      基本参数: {
        '分辨率': '2560×1440',
        '视角': '140°广角',
        '夜视': '10米红外夜视',
        '供电方式': 'DC 5V/1A'
      },
      功能特点: {
        '存储方式': '最大支持128G TF卡/云存储',
        '网络协议': 'Wi-Fi IEEE 802.11 b/g/n 2.4GHz',
        '移动侦测': '支持',
        '云台转动': '水平355°，垂直85°'
      }
    },
    relatedProducts: [
      {
        id: 'locks',
        name: '智能门锁',
        description: '指纹解锁，APP远程控制',
        image: testImage
      },
      {
        id: 'switches',
        name: '智能开关',
        description: '随时控制家中电器，定时开关',
        image: testImage
      }
    ]
  },
  switches: {
    id: 'switches',
    name: '智能开关 H1',
    subtitle: '随时控制家中电器，定时开关，场景联动',
    price: '¥199',
    heroImage: testImage,
    features: [
      {
        id: 1,
        title: '远程控制',
        description: '手机APP随时控制家中电器',
        image: testImage
      },
      {
        id: 2,
        title: '定时设置',
        description: '自定义定时开关，生活更智能',
        image: testImage
      },
      {
        id: 3,
        title: '场景联动',
        description: '与其他智能设备联动，打造智能场景',
        image: testImage
      }
    ],
    specifications: {
      基本参数: {
        '产品尺寸': '86×86×32mm',
        '额定电压': 'AC 100-240V',
        '最大负载': '2200W',
        '通信方式': 'Wi-Fi/Zigbee'
      },
      功能特点: {
        '控制方式': 'APP/语音/触控',
        '定时功能': '支持',
        '过载保护': '支持',
        '状态反馈': '支持'
      }
    },
    relatedProducts: [
      {
        id: 'locks',
        name: '智能门锁',
        description: '指纹解锁，APP远程控制',
        image: testImage
      },
      {
        id: 'cameras',
        name: '智能摄像机',
        description: '1080P高清画质，AI人形检测',
        image: testImage
      }
    ]
  }
};

const product = ref(productsData[productId]);
</script>

<style lang="scss" scoped>
.product-detail {
  padding-top: 80px;
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
      font-weight: 600;
    }

    .subtitle {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 2rem;
    }

    .price {
      font-size: 2rem;
      color: #007aff;
      margin-bottom: 2rem;
    }
  }

  &__image {
    flex: 1;
    
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 20px;
    }
  }
}

.product-features {
  padding: 80px 0;

  h2 {
    text-align: center;
    margin-bottom: 60px;
    font-size: 2.5rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
  }

  .feature-card {
    text-align: center;
    padding: 30px;
    background: #fff;
    border-radius: 20px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }

    .feature-image {
      width: 100px;
      height: 100px;
      margin: 0 auto 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    h3 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    p {
      color: #666;
    }
  }
}

.product-specs {
  padding: 80px 0;
  background: #f8f8f8;

  h2 {
    text-align: center;
    margin-bottom: 60px;
    font-size: 2.5rem;
  }

  .specs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
  }

  .spec-group {
    background: #fff;
    padding: 30px;
    border-radius: 20px;

    h3 {
      margin-bottom: 20px;
      font-size: 1.5rem;
    }

    ul {
      list-style: none;

      li {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid #eee;

        &:last-child {
          border-bottom: none;
        }
      }

      .spec-label {
        color: #666;
      }

      .spec-value {
        font-weight: 500;
      }
    }
  }
}

.related-products {
  padding: 80px 0;

  h2 {
    text-align: center;
    margin-bottom: 60px;
    font-size: 2.5rem;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
  }

  .product-card {
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }

    .product-image {
      height: 200px;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    h3 {
      padding: 20px 20px 10px;
      font-size: 1.2rem;
    }

    p {
      padding: 0 20px 20px;
      color: #666;
    }

    .btn {
      margin: 0 20px 20px;
    }
  }
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  cursor: pointer;
  border: none;

  &--primary {
    background: #007aff;
    color: white;

    &:hover {
      background: darken(#007aff, 10%);
    }
  }

  &--secondary {
    background: #f5f5f5;
    color: #333;

    &:hover {
      background: darken(#f5f5f5, 10%);
    }
  }
}

@media (max-width: 768px) {
  .product-hero {
    .container {
      flex-direction: column;
      text-align: center;
    }

    &__content {
      h1 {
        font-size: 2rem;
      }
    }
  }

  .product-features,
  .product-specs,
  .related-products {
    h2 {
      font-size: 2rem;
    }
  }
}
</style>
