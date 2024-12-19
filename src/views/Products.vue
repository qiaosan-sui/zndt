<template>
  <div class="products-page">
    <div class="page-header">
      <div class="container">
        <h1>产品中心</h1>
        <p>智能家居解决方案</p>
      </div>
    </div>

    <div class="container">
      <div class="products-grid">
        <router-link 
          v-for="product in products" 
          :key="product.id"
          :to="'/products/' + product.id"
          class="product-card"
        >
          <div class="product-image">
            <img :src="product.image" :alt="product.name">
          </div>
          <div class="product-content">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import testImage from '@/assets/images/test2.png';

const products = ref([
  {
    id: 'locks',
    name: '智能门锁',
    description: '指纹解锁，APP远程控制，多重安全防护',
    image: testImage
  },
  {
    id: 'cameras',
    name: '智能摄像机',
    description: '1080P高清画质，AI人形检测，双向通话',
    image: testImage
  },
  {
    id: 'switches',
    name: '智能开关',
    description: '随时控制家中电器，定时开关，场景联动',
    image: testImage
  }
]);
</script>

<style lang="scss" scoped>
.products-page {
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

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px 0;
}

.product-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-10px);
  }

  .product-image {
    height: 250px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .product-content {
    padding: 20px;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #333;
    }

    p {
      color: #666;
      line-height: 1.6;
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

  .products-grid {
    grid-template-columns: 1fr;
    padding: 20px;
  }
}
</style>
