<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="container">
      <div class="header__logo">
        <router-link to="/">
          <img src="@/assets/images/logo.png" alt="Logo" class="logo-light" />
          <img src="@/assets/images/logo.png" alt="Logo" class="logo-dark" />
        </router-link>
      </div>

      <nav class="header__nav" :class="{ active: isMenuOpen }">
        <ul class="nav__list">
          <li v-for="item in menuItems" :key="item.id" class="nav__item">
            <router-link :to="item.path" class="nav__link">
              {{ item.title }}
            </router-link>
            <ul v-if="item.children" class="nav__submenu">
              <li
                v-for="child in item.children"
                :key="child.id"
                class="nav__submenu-item"
              >
                <router-link :to="child.path" class="nav__submenu-link">
                  {{ child.title }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="header__actions">
        <button class="language-switch">
          <span>中文</span>
        </button>
        <button
          class="menu-toggle"
          :class="{ active: isMenuOpen }"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const menuItems = [
  { id: 1, title: "首页", path: "/" },
  {
    id: 2,
    title: "产品",
    path: "/products",
    children: [
      { id: 21, title: "智能门锁", path: "/products/locks" },
      { id: 22, title: "智能摄像头", path: "/products/cameras" },
      { id: 23, title: "智能开关", path: "/products/switches" },
      { id: 24, title: "智能传感器", path: "/products/sensors" },
    ],
  },
  {
    id: 3,
    title: "解决方案",
    path: "/solutions",
    children: [
      { id: 31, title: "全屋智能", path: "/solutions/smart-home" },
      { id: 32, title: "安防监控", path: "/solutions/security" },
      { id: 33, title: "节能环保", path: "/solutions/energy" },
    ],
  },
  {
    id: 4,
    title: "关于我们",
    path: "/about",
    children: [
      { id: 41, title: "公司介绍", path: "/about/company" },
      { id: 42, title: "企业文化", path: "/about/culture" },
      { id: 43, title: "加入我们", path: "/about/join" },
      { id: 44, title: "联系我们", path: "/about/contact" },
    ],
  },
  { id: 5, title: "服务支持", path: "/support" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: transparent;
  transition: all 0.3s ease;

  &--scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    .nav__link {
      color: #333 !important;
    }

    .language-switch {
      color: #333;
    }

    .menu-toggle span {
      background: #333;
    }
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    img {
      height: 32px;
      transition: all 0.3s ease;
    }
    .logo-light {
      display: block;
    }
    .logo-dark {
      display: none;
    }
  }

  &--scrolled &__logo {
    .logo-light {
      display: none;
    }
    .logo-dark {
      display: block;
    }
  }

  &__nav {
    .nav__list {
      display: flex;
      gap: 40px;
      list-style: none;
      align-items: center;
    }

    .nav__item {
      position: relative;
      padding: 30px 0;

      &:hover .nav__submenu {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }

    .nav__link {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      transition: all 0.3s ease;
      padding: 8px 0;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: currentColor;
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }

    .nav__submenu {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(10px);
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      min-width: 200px;

      &::before {
        content: "";
        position: absolute;
        top: -6px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 12px;
        height: 12px;
        background: white;
      }

      .nav__submenu-item {
        margin-bottom: 12px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      .nav__submenu-link {
        color: #333;
        text-decoration: none;
        font-size: 14px;
        transition: all 0.3s ease;
        display: block;
        padding: 8px 16px;
        border-radius: 6px;

        &:hover {
          background: #f5f5f5;
          color: #007aff;
        }
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 30px;

    .language-switch {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px 16px;
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 6px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 10px;
      z-index: 100;

      span {
        display: block;
        width: 24px;
        height: 2px;
        background: #fff;
        transition: all 0.3s ease;
      }

      &.active {
        span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        span:nth-child(2) {
          opacity: 0;
        }
        span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .header {
    .container {
      padding: 0 20px;
    }

    &__nav {
      position: fixed;
      top: 80px;
      left: 0;
      width: 100%;
      height: calc(100vh - 80px);
      background: white;
      padding: 20px;
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      overflow-y: auto;

      &.active {
        transform: translateX(0);
      }

      .nav__list {
        flex-direction: column;
        gap: 0;
      }

      .nav__item {
        width: 100%;
        padding: 0;
        border-bottom: 1px solid #eee;
      }

      .nav__link {
        color: #333;
        padding: 16px 0;
        display: block;
        font-size: 16px;
      }

      .nav__submenu {
        position: static;
        transform: none;
        opacity: 1;
        visibility: visible;
        box-shadow: none;
        padding: 0 0 16px 20px;
        display: none;

        &::before {
          display: none;
        }
      }

      .nav__item:hover .nav__submenu {
        display: block;
      }
    }

    &__actions {
      .menu-toggle {
        display: flex;
      }
    }
  }
}
</style>
