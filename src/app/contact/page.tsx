import { CoverSection } from "@/components/site/CoverSection";

export default function ContactPage() {
  return (
    <main className="main-content">
      <CoverSection coverSrc="/journal/images/cover1.jpg" />
      <div className="right-column">
        <div className="contact-info">
          <h3>联系编辑部</h3>
          <p>
            <strong>电话：</strong>+8524610159192
          </p>
          <p>
            <strong>邮箱：</strong>
            <a
              href="mailto:xinwenkeyanjiu@163.com"
              style={{ color: "#0052a3" }}
            >
              xinwenkeyanjiu@163.com
            </a>
          </p>
          <p>
            <strong>地址：</strong>香港旺角彌敦道 625 號雅蘭中心辦公樓二期 15
            樓 1508 室
          </p>
          <p>
            <strong>邮编：</strong>999077
          </p>
          <p>关注本刊社交媒体账号，获取最新动态！</p>
        </div>
        <div className="qrcode-container">
          <div className="qrcode-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/journal/images/ewm.png"
              alt="微信公众号二维码"
              style={{ borderRadius: 8 }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
