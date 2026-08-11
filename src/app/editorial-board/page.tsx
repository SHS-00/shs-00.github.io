import { CoverSection } from "@/components/site/CoverSection";

export default function EditorialBoardPage() {
  return (
    <main className="main-content">
      <CoverSection coverSrc="/images/cover1.jpg" />
      <div className="right-column">
        <div className="editor-info">
          <h3>编辑委员会成员（排名不分先后）</h3>
          <p>
            <strong>主编：</strong>林婕
          </p>
          <p>
            <strong>副主编：</strong>罗欣、闫颂、张叶东
          </p>
          <p>
            <strong>哲学、文学和历史学：</strong>
            钱寅、许加鑫、赵忆铭、车明珍、许昌、唐东旭、艾克拜尔·司马依力江、高艺芊
          </p>
          <p>
            <strong>新闻传播学：</strong>陈晓贤、阴健、石振宇、黄芊、李方妮
          </p>
          <p>
            <strong>经济学和管理学：</strong>林静、向杰、王星、吴元超、罗蕙、徐木子
          </p>
          <p>
            <strong>法学和社会学：</strong>
            胡泽民、潘德润、梁小龙、李昶彬、赵星宇、陈晨
          </p>
          <p>
            <strong>教育学和心理学：</strong>杨喜起、汤倩雯、高斌、郑辰霁、张欣
          </p>
          <p>
            <strong>艺术学和体育学：</strong>江浩强、李嘉乐、朱光良、汤涛
          </p>
          <p>
            <strong>美术编辑：</strong>周玉琳、吴俊星
          </p>
          <p>
            <strong>网络编辑：</strong>李鑫林
          </p>
        </div>
      </div>
    </main>
  );
}
