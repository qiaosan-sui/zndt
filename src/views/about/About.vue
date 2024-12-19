<template>
  <div class="about">
    <div class="about-nav">
      <div class="container">
        <nav class="subnav">
          <router-link to="/about/company" class="subnav-item">公司介绍</router-link>
          <router-link to="/about/culture" class="subnav-item">企业文化</router-link>
          <router-link to="/about/join" class="subnav-item">加入我们</router-link>
          <router-link to="/about/contact" class="subnav-item">联系我们</router-link>
        </nav>
      </div>
    </div>
    
    <!-- 子路由内容将在这里显示 -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.about {
  min-height: 100vh;
}

.about-nav {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 100;
}

.subnav {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 15px 0;

  &-item {
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
    padding: 5px 0;
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: #007aff;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover,
    &.router-link-active {
      color: #007aff;

      &::after {
        transform: scaleX(1);
      }
    }
  }
}

@media (max-width: 768px) {
  .about-nav {
    top: 50px;
  }

  .subnav {
    gap: 20px;
    padding: 10px 0;
    overflow-x: auto;
    justify-content: flex-start;
    padding-left: 20px;
    padding-right: 20px;

    &-item {
      font-size: 1rem;
      white-space: nowrap;
    }
  }
}
</style>
