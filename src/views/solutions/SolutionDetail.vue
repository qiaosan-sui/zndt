<template>
  <div class="solution-detail">
    <div class="hero-section">
      <img :src="require('@/assets/images/test2.png')" :alt="currentSolution.title">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1>{{ currentSolution.title }}</h1>
          <p>{{ currentSolution.description }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <section class="features-section">
        <h2>主要功能</h2>
        <div class="features-grid">
          <div v-for="(feature, index) in currentSolution.features" 
               :key="index" 
               class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <section class="benefits-section">
        <h2>解决方案优势</h2>
        <div class="benefits-list">
          <div v-for="(benefit, index) in currentSolution.benefits" 
               :key="index" 
               class="benefit-item">
            <div class="benefit-number">{{ index + 1 }}</div>
            <div class="benefit-content">
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cases-section" v-if="currentSolution.cases">
        <h2>应用案例</h2>
        <div class="cases-grid">
          <div v-for="(case_, index) in currentSolution.cases" 
               :key="index" 
               class="case-card">
            <img :src="require('@/assets/images/test2.png')" :alt="case_.title">
            <div class="case-content">
              <h3>{{ case_.title }}</h3>
              <p>{{ case_.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const solutions = {
  'smart-home': {
    title: '全屋智能解决方案',
    description: '打造智能家居生态系统，实现全屋互联互通，让生活更加便捷舒适',
    features: [
      {
        icon: '💡',
        title: '智能照明',
        description: '自动调节亮度，定时开关，场景联动'
      },
      {
        icon: '🌡️',
        title: '温控系统',
        description: '智能温度调节，节能省电，舒适体验'
      },
      {
        icon: '🎵',
        title: '智能音响',
        description: '多房间音乐播放，语音控制，场景联动'
      },
      {
        icon: '🎮',
        title: '场景控制',
        description: '一键设置多个设备状态，打造理想生活场景'
      }
    ],
    benefits: [
      {
        title: '便捷控制',
        description: '手机APP远程控制，语音控制，简单易用'
      },
      {
        title: '节能环保',
        description: '智能调节用电，降低能耗，环保节能'
      },
      {
        title: '安全可靠',
        description: '设备状态实时监控，异常提醒，安全保障'
      },
      {
        title: '场景联动',
        description: '多设备协同工作，自动化控制，提升生活品质'
      }
    ],
    cases: [
      {
        title: '智能别墅',
        description: '300平米别墅智能化改造，实现全屋智能控制'
      },
      {
        title: '智能公寓',
        description: '90平米公寓智能化升级，打造理想生活空间'
      }
    ]
  },
  'security': {
    title: '智能安防解决方案',
    description: '全方位的智能安防系统，为您的家庭和财产提供24小时安全保障',
    features: [
      {
        icon: '🔒',
        title: '智能门锁',
        description: '指纹解锁，远程开门，访客密码'
      },
      {
        icon: '📹',
        title: '视频监控',
        description: '高清监控，移动侦测，云存储'
      },
      {
        icon: '🚨',
        title: '报警系统',
        description: '异常检测，实时报警，远程查看'
      },
      {
        icon: '👥',
        title: '访客管理',
        description: '访客记录，临时密码，权限管理'
      }
    ],
    benefits: [
      {
        title: '全天候监控',
        description: '24小时实时监控，异常及时报警'
      },
      {
        title: '远程管理',
        description: '随时查看监控画面，远程开门'
      },
      {
        title: '数据存储',
        description: '云端存储录像，随时查看回放'
      },
      {
        title: '智能分析',
        description: 'AI识别异常行为，准确预警'
      }
    ]
  },
  'energy': {
    title: '节能环保解决方案',
    description: '智能用电管理，帮助您实现节能减排，打造绿色环保的智能家居',
    features: [
      {
        icon: '📊',
        title: '能耗监测',
        description: '实时监测用电量，分析用电情况'
      },
      {
        icon: '⚡',
        title: '智能控制',
        description: '自动调节用电，避免浪费'
      },
      {
        icon: '📱',
        title: '移动管理',
        description: 'APP查看用电数据，远程控制'
      },
      {
        icon: '📈',
        title: '数据分析',
        description: '用电数据统计，优化建议'
      }
    ],
    benefits: [
      {
        title: '节约成本',
        description: '减少不必要的能源消耗，降低电费支出'
      },
      {
        title: '环保减排',
        description: '降低能源消耗，减少碳排放'
      },
      {
        title: '智能管理',
        description: '自动化控制，提高能源使用效率'
      },
      {
        title: '数据洞察',
        description: '深入分析用电行为，优化用电方案'
      }
    ]
  }
};

const currentSolution = computed(() => {
  return solutions[route.params.type] || solutions['smart-home'];
});
</script>

<style lang="scss" scoped>
.solution-detail {
  padding-top: 60px;
}

.hero-section {
  position: relative;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
  }

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

section {
  padding: 80px 0;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 60px;
    color: #333;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  text-align: center;
  padding: 30px;
  background: #f8f8f8;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .feature-icon {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
}

.benefits-list {
  max-width: 800px;
  margin: 0 auto;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-bottom: 0;
  }
}

.benefit-number {
  width: 40px;
  height: 40px;
  background: #007aff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 20px;
  flex-shrink: 0;
}

.benefit-content {
  h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.case-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .case-content {
    padding: 20px;

    h3 {
      font-size: 1.3rem;
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
  .hero-section {
    min-height: 300px;

    .hero-content {
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  section {
    padding: 40px 0;

    h2 {
      font-size: 2rem;
      margin-bottom: 40px;
    }
  }

  .benefit-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .benefit-number {
    margin-right: 0;
    margin-bottom: 15px;
  }
}
</style>
