<template>
  <div class="join-page">
    <div class="page-header">
      <div class="container">
        <h1>加入我们</h1>
        <p>与优秀的人一起，做有趣的事</p>
      </div>
    </div>

    <div class="container">
      <section class="why-join-us">
        <h2>为什么选择我们</h2>
        <div class="reasons-grid">
          <div class="reason-card">
            <div class="icon">🚀</div>
            <h3>发展空间</h3>
            <p>快速发展的行业，广阔的职业发展空间，完善的晋升体系</p>
          </div>
          <div class="reason-card">
            <div class="icon">💡</div>
            <h3>创新文化</h3>
            <p>鼓励创新，支持尝试，包容失败，重视创意</p>
          </div>
          <div class="reason-card">
            <div class="icon">📚</div>
            <h3>持续学习</h3>
            <p>专业的培训体系，导师制度，学习基金支持</p>
          </div>
          <div class="reason-card">
            <div class="icon">🎯</div>
            <h3>工作生活平衡</h3>
            <p>弹性工作制，年假福利，团队活动</p>
          </div>
        </div>
      </section>

      <section class="job-positions">
        <h2>热招职位</h2>
        <div class="positions-list">
          <div class="position-card" v-for="position in positions" :key="position.id">
            <div class="position-header">
              <h3>{{ position.title }}</h3>
              <span class="salary">{{ position.salary }}</span>
            </div>
            <div class="position-info">
              <span>{{ position.location }}</span>
              <span>{{ position.experience }}</span>
              <span>{{ position.education }}</span>
            </div>
            <div class="position-desc">
              <h4>职位描述：</h4>
              <ul>
                <li v-for="(duty, index) in position.duties" :key="index">
                  {{ duty }}
                </li>
              </ul>
              <h4>任职要求：</h4>
              <ul>
                <li v-for="(requirement, index) in position.requirements" :key="index">
                  {{ requirement }}
                </li>
              </ul>
            </div>
            <button class="apply-btn">立即申请</button>
          </div>
        </div>
      </section>

      <section class="contact-hr">
        <h2>联系我们</h2>
        <div class="contact-info">
          <div class="info-item">
            <div class="icon">📧</div>
            <h3>简历投递</h3>
            <p>hr@example.com</p>
          </div>
          <div class="info-item">
            <div class="icon">💬</div>
            <h3>咨询电话</h3>
            <p>400-888-8888</p>
          </div>
          <div class="info-item">
            <div class="icon">📍</div>
            <h3>工作地点</h3>
            <p>北京市朝阳区xx大厦</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const positions = ref([
  {
    id: 1,
    title: '前端开发工程师',
    salary: '15k-30k',
    location: '北京',
    experience: '3-5年',
    education: '本科及以上',
    duties: [
      '负责公司产品的前端开发工作',
      '参与产品的技术方案设计和功能实现',
      '持续优化前端性能和用户体验',
      '配合后端开发人员，完成产品功能开发'
    ],
    requirements: [
      '计算机相关专业本科及以上学历',
      '熟练掌握 Vue、React 等主流前端框架',
      '熟悉前端工程化和性能优化',
      '有良好的代码风格和技术钻研能力'
    ]
  },
  {
    id: 2,
    title: '产品经理',
    salary: '20k-40k',
    location: '北京',
    experience: '5-7年',
    education: '本科及以上',
    duties: [
      '负责智能家居产品的规划和设计',
      '进行市场调研和竞品分析',
      '制定产品发展策略和路线图',
      '协调研发、设计、运营等团队工作'
    ],
    requirements: [
      '5年以上互联网产品经理经验',
      '熟悉智能家居或IoT行业',
      '具备优秀的产品思维和执行力',
      '良好的沟通能力和团队协作能力'
    ]
  }
]);
</script>

<style lang="scss" scoped>
.join-page {
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

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;

  .reason-card {
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

.positions-list {
  display: grid;
  gap: 30px;

  .position-card {
    background: #fff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .position-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;

      h3 {
        font-size: 1.5rem;
        color: #333;
      }

      .salary {
        color: #007aff;
        font-weight: 600;
      }
    }

    .position-info {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
      color: #666;

      span {
        position: relative;

        &:not(:last-child)::after {
          content: '|';
          margin-left: 20px;
          color: #ddd;
        }
      }
    }

    .position-desc {
      h4 {
        color: #333;
        margin: 20px 0 10px;
      }

      ul {
        list-style: none;
        padding-left: 0;

        li {
          color: #666;
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;

          &::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #007aff;
          }
        }
      }
    }

    .apply-btn {
      display: block;
      width: 100%;
      padding: 12px;
      margin-top: 20px;
      background: #007aff;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: darken(#007aff, 10%);
      }
    }
  }
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  text-align: center;

  .info-item {
    padding: 30px;
    background: #f8f8f8;
    border-radius: 10px;

    .icon {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.3rem;
      margin-bottom: 10px;
      color: #333;
    }

    p {
      color: #666;
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

  .position-card {
    .position-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .position-info {
      flex-wrap: wrap;
    }
  }
}
</style>
