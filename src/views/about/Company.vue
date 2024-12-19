<template>
  <div class="about-page">
    <div class="page-header">
      <div class="container">
        <h1>公司介绍</h1>
        <p>创新科技，智慧生活</p>
      </div>
    </div>

    <div class="container">
      <section class="company-intro">
        <h2>关于我们</h2>
        <p>我们是一家专注于智能家居领域的科技公司，致力于为用户打造更智能、更安全、更便捷的生活方式。通过持续创新和技术突破，我们为全球用户提供优质的智能家居产品和解决方案。</p>
        
        <div class="company-stats">
          <div class="stat-item">
            <h3>10年+</h3>
            <p>行业经验</p>
          </div>
          <div class="stat-item">
            <h3>1000万+</h3>
            <p>用户信赖</p>
          </div>
          <div class="stat-item">
            <h3>100+</h3>
            <p>专利技术</p>
          </div>
          <div class="stat-item">
            <h3>50+</h3>
            <p>国家地区</p>
          </div>
        </div>
      </section>

      <section class="company-vision">
        <h2>愿景与使命</h2>
        <div class="vision-grid">
          <div class="vision-item">
            <h3>愿景</h3>
            <p>成为全球领先的智能家居解决方案提供商</p>
          </div>
          <div class="vision-item">
            <h3>使命</h3>
            <p>用科技创新改善人们的生活品质</p>
          </div>
          <div class="vision-item">
            <h3>价值观</h3>
            <p>创新、品质、用户至上、合作共赢</p>
          </div>
        </div>
      </section>

      <section class="company-history">
        <h2>发展历程</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="year">2024</div>
            <div class="content">
              <h3>全球化布局</h3>
              <p>产品销售覆盖50+国家和地区</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="year">2023</div>
            <div class="content">
              <h3>技术突破</h3>
              <p>发布新一代AI智能家居系统</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="year">2022</div>
            <div class="content">
              <h3>品牌升级</h3>
              <p>完成品牌战略升级</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="year">2021</div>
            <div class="content">
              <h3>公司成立</h3>
              <p>开启智能家居创新之旅</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-page {
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

section {
  margin-bottom: 80px;

  h2 {
    font-size: 2rem;
    margin-bottom: 40px;
    text-align: center;
  }
}

.company-intro {
  text-align: center;

  > p {
    max-width: 800px;
    margin: 0 auto 40px;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
  }
}

.company-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 40px;

  .stat-item {
    text-align: center;
    padding: 30px;
    background: #f8f8f8;
    border-radius: 10px;

    h3 {
      font-size: 2.5rem;
      color: #007aff;
      margin-bottom: 10px;
    }

    p {
      color: #666;
      font-size: 1.1rem;
    }
  }
}

.vision-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;

  .vision-item {
    text-align: center;
    padding: 40px;
    background: #f8f8f8;
    border-radius: 10px;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: #333;
    }

    p {
      color: #666;
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #eee;
  }

  .timeline-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }

    .year {
      background: #007aff;
      color: white;
      padding: 10px 20px;
      border-radius: 30px;
      font-weight: 600;
      position: relative;
      z-index: 1;
    }

    .content {
      background: #f8f8f8;
      padding: 20px 30px;
      border-radius: 10px;
      margin-left: 30px;

      h3 {
        margin-bottom: 5px;
        color: #333;
      }

      p {
        color: #666;
      }
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

  .timeline {
    &::before {
      left: 20px;
    }

    .timeline-item {
      justify-content: flex-start;
      margin-left: 20px;

      .year {
        min-width: 100px;
        text-align: center;
      }
    }
  }
}
</style>
