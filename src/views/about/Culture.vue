<template>
  <div class="culture-page">
    <div class="page-header">
      <div class="container">
        <h1>企业文化</h1>
        <p>创新、品质、责任、共赢</p>
      </div>
    </div>

    <div class="container">
      <section class="core-values">
        <h2>核心价值观</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="icon">🚀</div>
            <h3>创新驱动</h3>
            <p>持续创新是我们的核心动力，通过技术创新推动行业发展，为用户创造更多价值。</p>
          </div>
          <div class="value-card">
            <div class="icon">💎</div>
            <h3>品质至上</h3>
            <p>追求卓越品质，每一个产品都经过严格的质量把控，为用户提供可靠的智能家居体验。</p>
          </div>
          <div class="value-card">
            <div class="icon">🤝</div>
            <h3>用户至上</h3>
            <p>以用户需求为导向，提供优质的产品和服务，持续提升用户体验。</p>
          </div>
          <div class="value-card">
            <div class="icon">🌟</div>
            <h3>合作共赢</h3>
            <p>与合作伙伴建立长期稳定的合作关系，实现互利共赢，共同发展。</p>
          </div>
        </div>
      </section>

      <section class="culture-highlights">
        <h2>文化特色</h2>
        <div class="highlights-grid">
          <div class="highlight-item">
            <img src="@/assets/images/test2.png" alt="创新文化">
            <div class="content">
              <h3>创新文化</h3>
              <p>鼓励创新思维，支持员工大胆尝试，为创新提供良好的环境和资源支持。</p>
            </div>
          </div>
          <div class="highlight-item">
            <img src="@/assets/images/test2.png" alt="学习文化">
            <div class="content">
              <h3>学习文化</h3>
              <p>建立完善的培训体系，支持员工持续学习和成长，打造学习型组织。</p>
            </div>
          </div>
          <div class="highlight-item">
            <img src="@/assets/images/test2.png" alt="团队文化">
            <div class="content">
              <h3>团队文化</h3>
              <p>强调团队协作，营造开放、包容的工作氛围，实现团队共同进步。</p>
            </div>
          </div>
        </div>
      </section>

      <section class="employee-life">
        <h2>员工生活</h2>
        <div class="life-grid">
          <div class="life-card">
            <img src="@/assets/images/test2.png" alt="工作环境">
            <h3>舒适的工作环境</h3>
            <p>现代化的办公环境，休闲区域，健身房等配套设施</p>
          </div>
          <div class="life-card">
            <img src="@/assets/images/test2.png" alt="团队活动">
            <h3>丰富的团队活动</h3>
            <p>定期组织团建、旅游、运动会等活动</p>
          </div>
          <div class="life-card">
            <img src="@/assets/images/test2.png" alt="培训发展">
            <h3>完善的培训体系</h3>
            <p>专业的培训课程，导师制度，职业发展通道</p>
          </div>
          <div class="life-card">
            <img src="@/assets/images/test2.png" alt="福利关怀">
            <h3>贴心的福利关怀</h3>
            <p>具有竞争力的薪酬，完善的福利体系，节日关怀</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style lang="scss" scoped>
.culture-page {
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

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;

  .value-card {
    text-align: center;
    padding: 40px 30px;
    background: #f8f8f8;
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }

    .icon {
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
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;

  .highlight-item {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .content {
      padding: 30px;

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
  }
}

.life-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;

  .life-card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }

    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }

    h3 {
      padding: 20px 20px 10px;
      font-size: 1.2rem;
      color: #333;
    }

    p {
      padding: 0 20px 20px;
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

  section {
    margin-bottom: 60px;

    h2 {
      font-size: 1.8rem;
    }
  }
}
</style>
