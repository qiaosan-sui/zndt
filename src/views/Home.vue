<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__content">
        <h1>智能家居的未来</h1>
        <p>打造智能、舒适、安全的居住环境</p>
        <router-link to="/products" class="btn btn--primary">了解更多</router-link>
      </div>
      <div class="hero__image">
        <img src="@/assets/images/hero.jpg" alt="Smart Home" />
      </div>
    </section>

    <!-- Products Section -->
    <section class="products">
      <div class="container">
        <h2>热门产品</h2>
        <div class="products__grid">
          <div
            v-for="product in products"
            :key="product.id"
            class="product-card"
            @click="goToProductCategory(product.category)"
          >
            <div class="product-card__image">
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="product-card__content">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2>为什么选择我们</h2>
        <div class="features__grid">
          <div
            v-for="feature in features"
            :key="feature.id"
            class="feature-card"
          >
            <div class="feature-card__icon">
              <i :class="feature.icon"></i>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section class="solutions">
      <div class="container">
        <h2>智能解决方案</h2>
        <div class="solutions__grid">
          <div
            v-for="solution in solutions"
            :key="solution.id"
            class="solution-card"
          >
            <div class="solution-card__image">
              <img :src="solution.image" :alt="solution.title" />
            </div>
            <div class="solution-card__content">
              <h3>{{ solution.title }}</h3>
              <p>{{ solution.description }}</p>
              <router-link :to="solution.link" class="btn btn--text">
                了解更多
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import img1 from "@/assets/images/test2.png";
import img2 from "@/assets/images/test2.png";
import img3 from "@/assets/images/test2.png";

const router = useRouter();

const products = ref([
  {
    id: 'locks',
    category: 'lock',
    name: "智能门锁",
    description: "指纹解锁，APP远程控制，多重安全防护",
    image: img1,
  },
  {
    id: 'cameras',
    category: 'camera',
    name: "智能摄像机",
    description: "1080P高清画质，AI人形检测，双向通话",
    image: img2,
  },
  {
    id: 'switches',
    category: 'switch',
    name: "智能开关",
    description: "随时控制家中电器，定时开关，场景联动",
    image: img3,
  },
]);

const features = ref([
  {
    id: 1,
    title: "简单易用",
    description: "无需复杂设置，即插即用",
    icon: "fas fa-magic",
  },
  {
    id: 2,
    title: "安全可靠",
    description: "数据加密传输，保护隐私安全",
    icon: "fas fa-shield-alt",
  },
  {
    id: 3,
    title: "智能联动",
    description: "设备间智能互联，打造智能场景",
    icon: "fas fa-link",
  },
]);

const solutions = ref([
  {
    id: 'smart-home',
    title: "智能家居套装",
    description: "一站式智能家居解决方案",
    image: img3,
    link: "/solutions/smart-home",
  },
  {
    id: 'security',
    title: "安防监控",
    description: "全方位守护家庭安全",
    image: img3,
    link: "/solutions/security",
  },
]);

const goToProductCategory = (category) => {
  router.push({
    path: '/products',
    query: { category }
  });
};
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #000;

  &__content {
    flex: 1;
    padding: 0 5%;
    z-index: 1;
    text-align: center;
    color: #fff;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 4.5rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
      letter-spacing: -0.02em;
      line-height: 1.2;
      opacity: 0;
      animation: fadeInUp 1s ease forwards;
      animation-delay: 0.3s;
    }

    p {
      font-size: 1.8rem;
      margin-bottom: 2.5rem;
      font-weight: 300;
      opacity: 0;
      animation: fadeInUp 1s ease forwards;
      animation-delay: 0.6s;
    }

    .btn {
      opacity: 0;
      animation: fadeInUp 1s ease forwards;
      animation-delay: 0.9s;
    }
  }

  &__image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.5)
      );
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: scaleIn 20s ease-in-out infinite alternate;
    }
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

.products,
.features,
.solutions {
  padding: 80px 0;

  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
}

.products__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.product-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  &__image {
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    padding: 20px;

    h3 {
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 20px;
    }
  }
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  text-align: center;
  padding: 30px;

  &__icon {
    font-size: 3rem;
    color: #007aff;
    margin-bottom: 20px;
  }
}

.solutions__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
}

.solution-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  &__image {
    height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    color: white;

    h3 {
      margin-bottom: 10px;
    }
  }
}

@media (max-width: 768px) {
  .hero {
    &__content {
      padding: 20px;

      h1 {
        font-size: 2.8rem;
      }

      p {
        font-size: 1.4rem;
      }
    }
  }

  .solutions__grid {
    grid-template-columns: 1fr;
  }
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  display: inline-block;
  padding: 16px 36px;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.5px;

  &--primary {
    background: #fff;
    color: #000;
    border: 2px solid #fff;

    &:hover {
      background: transparent;
      color: #fff;
    }
  }

  &--secondary {
    background: #f5f5f5;
    color: #333;

    &:hover {
      background: darken(#f5f5f5, 10%);
    }
  }

  &--text {
    color: #007aff;
    padding: 0;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
