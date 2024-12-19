<template>
  <div class="solutions-page">
    <!-- 视频背景部分 -->
    <section class="video-hero">
      <video autoplay loop muted playsinline class="hero-video">
        <source src="@/assets/videos/zndt.mp4" type="video/mp4">
      </video>
      <div class="hero-overlay">
        <div class="hero-content">
          <h1>智能解决方案</h1>
          <p>为您打造智能、安全、高效的智慧空间</p>
        </div>
      </div>
    </section>

    <!-- 解决方案概览 -->
    <section class="solutions-overview">
      <div class="container">
        <div class="section-header">
          <h2>全面的智能解决方案</h2>
          <p>我们提供完整的智能化解决方案，满足您的各种需求</p>
        </div>
        <div class="solutions-grid">
          <!-- 智能家居解决方案 -->
          <div class="solution-card">
            <div class="solution-icon">🏠</div>
            <h3>全屋智能</h3>
            <p>打造智能家居生态系统，实现全屋互联互通，让生活更加便捷舒适。</p>
            <ul class="solution-features">
              <li>智能照明控制</li>
              <li>温湿度自动调节</li>
              <li>场景智能联动</li>
              <li>远程控制管理</li>
            </ul>
            <router-link to="/solutions/smart-home" class="learn-more">
              了解更多 <span class="arrow">→</span>
            </router-link>
          </div>

          <!-- 安防监控解决方案 -->
          <div class="solution-card">
            <div class="solution-icon">🔒</div>
            <h3>安防监控</h3>
            <p>全方位的智能安防系统，为您的家庭和财产提供24小时安全保障。</p>
            <ul class="solution-features">
              <li>智能门锁管理</li>
              <li>实时视频监控</li>
              <li>异常行为检测</li>
              <li>紧急报警联动</li>
            </ul>
            <router-link to="/solutions/security" class="learn-more">
              了解更多 <span class="arrow">→</span>
            </router-link>
          </div>

          <!-- 节能环保解决方案 -->
          <div class="solution-card">
            <div class="solution-icon">🌱</div>
            <h3>节能环保</h3>
            <p>智能用电管理，帮助您实现节能减排，打造绿色环保的智能家居。</p>
            <ul class="solution-features">
              <li>用电数据分析</li>
              <li>智能节能控制</li>
              <li>用电异常提醒</li>
              <li>能耗优化建议</li>
            </ul>
            <router-link to="/solutions/energy" class="learn-more">
              了解更多 <span class="arrow">→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section class="advantages">
      <div class="container">
        <div class="section-header">
          <h2>我们的优势</h2>
          <p>专业的技术团队，成熟的解决方案，优质的服务体系</p>
        </div>
        <div class="advantages-grid">
          <div class="advantage-item">
            <div class="advantage-icon">💡</div>
            <h4>技术创新</h4>
            <p>持续创新的技术研发，为客户提供领先的解决方案</p>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">🛡️</div>
            <h4>安全可靠</h4>
            <p>多重安全防护，保障您的数据和隐私安全</p>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">🔄</div>
            <h4>便捷集成</h4>
            <p>灵活的系统架构，轻松集成各类智能设备</p>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">🎯</div>
            <h4>专业服务</h4>
            <p>专业的技术支持团队，提供全方位的服务保障</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->
    <section class="scenarios">
      <div class="container">
        <div class="section-header">
          <h2>应用场景</h2>
          <p>广泛应用于各类场景，满足不同需求</p>
        </div>
        <div class="scenarios-grid">
          <div class="scenario-card">
            <img src="@/assets/images/test2.png" alt="智能家居">
            <div class="scenario-content">
              <h3>智能家居</h3>
              <p>打造舒适智能的居住环境</p>
            </div>
          </div>
          <div class="scenario-card">
            <img src="@/assets/images/test2.png" alt="智慧办公">
            <div class="scenario-content">
              <h3>智慧办公</h3>
              <p>提升办公效率与体验</p>
            </div>
          </div>
          <div class="scenario-card">
            <img src="@/assets/images/test2.png" alt="智慧酒店">
            <div class="scenario-content">
              <h3>智慧酒店</h3>
              <p>优化酒店服务与管理</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.solutions-page {
  padding-top: 60px;
}

// 视频背景部分
.video-hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;

  .hero-video {
    position: absolute;
    top: 0;
    left: 0;
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
      font-size: 3.5rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    p {
      font-size: 1.5rem;
      opacity: 0.9;
    }
  }
}

// 通用容器样式
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

// 通用section样式
section {
  padding: 80px 0;

  &:nth-child(even) {
    background: #f8f8f8;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
}

// 解决方案卡片网格
.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.solution-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  .solution-icon {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
  }
}

.solution-features {
  list-style: none;
  margin-bottom: 25px;

  li {
    padding: 8px 0;
    color: #666;
    position: relative;
    padding-left: 24px;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #007aff;
    }
  }
}

.learn-more {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #007aff;
  font-weight: 500;
  transition: all 0.3s ease;

  .arrow {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: darken(#007aff, 10%);

    .arrow {
      transform: translateX(5px);
    }
  }
}

// 优势部分
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.advantage-item {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .advantage-icon {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
}

// 场景部分
.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.scenario-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .scenario-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: white;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 5px;
    }

    p {
      opacity: 0.9;
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .video-hero {
    min-height: 400px;

    .hero-content {
      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.2rem;
      }
    }
  }

  section {
    padding: 40px 0;
  }

  .section-header {
    margin-bottom: 40px;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }

  .solution-card,
  .advantage-item {
    padding: 20px;
  }
}
</style>
