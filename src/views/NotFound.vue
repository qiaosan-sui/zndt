<template>
  <div class="not-found">
    <div class="container">
      <div class="not-found__content">
        <h1>404</h1>
        <p class="message">抱歉，您访问的页面不存在</p>
        <p class="description">该页面可能已被移除或正在建设中</p>
        <div class="buttons">
          <button @click="goBack" class="btn btn--secondary">
            返回上一页
          </button>
          <router-link to="/" class="btn btn--primary">
            返回首页
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<style lang="scss" scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  padding: 60px 20px;

  .container {
    max-width: 600px;
    margin: 0 auto;
  }

  &__content {
    text-align: center;
    padding: 40px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    h1 {
      font-size: 6rem;
      font-weight: 700;
      color: #007aff;
      margin-bottom: 1rem;
      line-height: 1;
    }

    .message {
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 1rem;
    }

    .description {
      color: #666;
      margin-bottom: 2rem;
    }

    .buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
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

    &--secondary {
      background: white;
      color: #007aff;
      border: 2px solid #007aff;

      &:hover {
        background: #f0f7ff;
        transform: translateY(-2px);
      }
    }
  }
}

@media (max-width: 768px) {
  .not-found {
    &__content {
      padding: 30px;

      h1 {
        font-size: 4rem;
      }

      .message {
        font-size: 1.2rem;
      }

      .buttons {
        flex-direction: column;
      }
    }
  }
}
</style>
