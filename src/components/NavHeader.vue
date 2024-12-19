<template>
  <nav class="nav-header">
    <div class="nav-container">
      <router-link to="/" class="nav-logo">
        <img src="@/assets/images/logo.png" alt="Logo">
      </router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link" :class="{ 'active': $route.path === '/' }">首页</router-link>
        <router-link to="/products" class="nav-link" :class="{ 'active': $route.path.startsWith('/products') }">产品</router-link>
        <router-link to="/solutions" class="nav-link" :class="{ 'active': $route.path.startsWith('/solutions') }">解决方案</router-link>
        <router-link to="/about" class="nav-link" :class="{ 'active': $route.path.startsWith('/about') }">关于我们</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.nav-logo {
  height: 40px;
  display: flex;
  align-items: center;

  img {
    height: 100%;
    object-fit: contain;
  }
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 0;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #007aff;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #007aff;
    
    &::after {
      transform: scaleX(1);
    }
  }

  &.active {
    color: #007aff;

    &::after {
      transform: scaleX(1);
    }
  }
}

@media (max-width: 768px) {
  .nav-links {
    gap: 15px;
  }

  .nav-link {
    font-size: 14px;
  }
}
</style>
