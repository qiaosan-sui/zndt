<template>
  <section class="products-section">
    <div class="container">
      <div class="products-grid">
        <div v-for="product in products" :key="product.id" class="product-card" @mouseenter="product.isHovered = true" @mouseleave="product.isHovered = false">
          <div class="product-image">
            <img :src="product.image" :alt="product.name">
            <div class="product-overlay" :class="{ 'active': product.isHovered }">
              <router-link :to="'/product/' + product.id" class="btn-view">
                了解更多
              </router-link>
            </div>
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <div class="product-price">{{ product.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import img1 from '@/assets/images/local copy 3.png'
import img2 from '@/assets/images/local copy 4.png'
import img3 from '@/assets/images/local copy 5.png'

const products = ref([
  {
    id: 1,
    name: 'Door Lock N100',
    description: '智能门锁 指纹解锁',
    price: '¥1299',
    image: img1,
    isHovered: false
  },
  {
    id: 2,
    name: 'Camera Hub G3',
    description: '智能摄像头 AI人形检测',
    price: '¥699',
    image: img2,
    isHovered: false
  },
  {
    id: 3,
    name: 'Smart Switch H1',
    description: '智能开关 随时控制',
    price: '¥199',
    image: img3,
    isHovered: false
  }
])
</script>

<style lang="scss" scoped>
.products-section {
  padding: 80px 0;
  background: #f8f8f8;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.product-image {
  position: relative;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .product-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    &.active {
      opacity: 1;
    }

    .btn-view {
      padding: 12px 24px;
      background: white;
      color: #333;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        background: var(--primary-color);
        color: white;
      }
    }
  }
}

.product-info {
  padding: 20px;
  text-align: center;

  h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  p {
    color: #666;
    margin-bottom: 10px;
  }

  .product-price {
    font-size: 1.2rem;
    color: var(--primary-color);
    font-weight: 600;
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .product-image {
    height: 250px;
  }
}
</style>
