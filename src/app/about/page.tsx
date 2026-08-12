import { CoverSection } from "@/components/site/CoverSection";

export default function AboutPage() {
  return (
    <main className="main-content">
      <CoverSection coverSrc="/journal/images/cover1.jpg" />
      <div className="right-column">
        <div className="editor-info">
          <h3>期刊介绍</h3>
          <p>
            <strong>期刊名称：</strong>《新文科研究》（New Liberal Arts Research）
          </p>
          <p>
            <strong>期刊标语：</strong>跨学科视野下的人文社科
          </p>
          <p>
            <strong>出版单位：</strong>云墨科技出版有限公司
          </p>
          <p>
            <strong>出版地：</strong>中国香港
          </p>
          <p>
            <strong>ISSN：</strong>3106-5449 <strong>e-ISSN：</strong>3106-5457
          </p>
          <p>
            <strong>出版周期：</strong>月刊
          </p>
          <p>
            <strong>语言：</strong>简体中文（附英文标题与摘要）
          </p>
          <h3>1. 期刊宗旨与定位</h3>
          <p>
            《新文科研究》是一本在香港注册的、经同行评审的开放获取学术期刊。本刊以“跨学科视野下的人文社科”为核心理念，旨在为全球学者及研究生构建一个平等、自由、友好的学术交流平台。我们鼓励打破传统学科界限，追求人文社科领域内及与相关领域的深度对话与融合创新。
          </p>
          <h3>2. 常设栏目</h3>
          <p>
            本刊内容涵盖但不限于以下栏目，并特别欢迎跨栏目研究的投稿：
            <strong>文学、历史与哲学：</strong>
            经典理论的当代阐释，跨文化的比较研究，思想史的脉络梳理。
            <strong>经济学与管理学：</strong>
            新经济形态研究，管理理论与实践创新，全球化背景下的商业与社会。
            <strong>法学与社会：</strong>
            前沿法律问题探讨，法治建设的比较研究，社会治理与公共政策分析。
            <strong>教育学与心理学：</strong>
            教育创新模式研究，学习科学与认知发展，社会变迁中的心理适应与健康。
            <strong>艺术、体育与跨学科实践：</strong>
            数字艺术与美学批评，体育人文与社会学，文化创意产业研究。
          </p>
          <h3>3. 稿件类型</h3>
          <p>本刊接收原创研究论文、学术综述、理论探新、书评及高质量的研究简报。</p>
          <h3>4. 办刊承诺</h3>
          <p>
            <strong>开放平等：</strong>
            坚持开放获取，确保学术成果的广泛传播。我们以文章质量为准一标准，为所有学者提供公平的发表机会。
            <strong>自由交流：</strong>
            倡导严谨而自由的学术讨论，支持不同观点和范式的探索与争鸣。
            <strong>友好互动：</strong>
            致力于构建一个对青年学者友好的社区，提供建设性的审稿意见，促进学术共同体的成长。我们期待《新文科研究》能成为连接不同学科、沟通中外学者的桥梁，共同探索人文社科的未来。
          </p>
        </div>
      </div>
    </main>
  );
}
