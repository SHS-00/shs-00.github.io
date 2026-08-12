import { TOCSection } from "@/types/journal";

const BASE = "https://newliberalarts.hk/file/";

export interface Issue {
  id: number;
  heading: string;
  cover: string;
  sections: TOCSection[];
  fullIssuePdf?: string;
}

export const issues: Issue[] = [
  {
    id: 1,
    heading: "第一卷 第1期 2025年11月刊 目录",
    cover: "/journal/images/cover1.jpg",
    sections: [
      {
        category: "发刊词",
        items: [
          {
            title: "发刊词",
            author: "本刊编辑部",
            pdf: `${BASE}发刊词.pdf`,
          },
        ],
      },
      {
        category: "栏目：人文思辨",
        items: [
          {
            title: "现象学-及诠释学视域中的杨贤江教育思想研究",
            author: "洪佳惠 应茜",
            pdf: `${BASE}现象学-诠释学视域中的杨贤江教育思想研究 洪佳惠 应茜 第一期01.pdf`,
          },
          {
            title: "逻各斯中心主义视域下莎士比亚悲剧的二元对立与人性探索",
            author: "柯贤飞",
            pdf: `${BASE}逻各斯中心主义视域下莎士比亚悲剧二元对立与人性探索 柯贤飞 第一期02.pdf`,
          },
          {
            title: "南朝至唐边塞诗写作转变机制研究",
            author: "师小康",
            pdf: `${BASE}南朝至唐边塞诗写作转变机制 师小康 第一期03.pdf`,
          },
        ],
      },
      {
        category: "栏目：量化视野",
        items: [
          {
            title:
              "文化距离、算法推荐与文化特色的交互效应分析——中华文化国际传播力的实证研究",
            author: "林灏",
            pdf: `${BASE}文化距离、算法推荐与文化特色的交互效应分析 林灏 第一期04.pdf`,
          },
          {
            title: "英汉科技文献摘要中的主位推进模式链定量分析与比较",
            author: "曹志宏 王晴",
            pdf: `${BASE}英汉科技文献摘要中的主位推进模式链定量分析与比较 曹志宏 王晴 第一期05.pdf`,
          },
          {
            title: "大学生参与“百千万工程”突击队对积极心理资本影响的实证研究",
            author: "区瀚庭",
            pdf: `${BASE}“百千万工程”助力大学生积极心理资本研究 区瀚庭 第一期06.pdf`,
          },
        ],
      },
      {
        category: "栏目：时策新声",
        items: [
          {
            title: "对标珠海高新区 推动松山湖生物医药高质量发展策略研究",
            author: "何广文",
            pdf: `${BASE}对标珠海高新区推动松山湖生物医药高质量发展策略 何广文 第一期07.pdf`,
          },
          {
            title: "文化档案赋能美丽乡村建设的理论内涵与实践探索",
            author: "浦祯妍 马管",
            pdf: `${BASE}文化档案赋能美丽乡村建设的理论内涵与实践探索 浦祯妍 马管 第一期08.pdf`,
          },
        ],
      },
      {
        category: "书评",
        items: [
          {
            title: "新文科研究方法论的再思考——贝弗里奇《科学研究的艺术》解读",
            author: "阴健 赵嘉明",
            pdf: `${BASE}新文科研究方法论的再思考——贝弗里奇《科学研究的艺术》解读 阴健 赵嘉明 第一期书评.pdf`,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    heading: "第一卷 第2期 2025年12月刊 目录",
    cover: "/journal/images/cover-image2.jpeg",
    sections: [
      {
        category: "栏目：人文思辨",
        items: [
          {
            title: "想象与体验:《麒麟》与《鹤唳》中谷崎润一郎的“中国情趣”",
            author: "罗云辉",
            pdf: `${BASE}12月第二期最终稿件/想象与体验：《麒麟》与《鹤唳》中谷崎润一郎的“中国情趣”.pdf`,
          },
          {
            title: "权力、记忆与知识竞争——郭象向秀《庄子注》公案再研究",
            author: "于健平",
            pdf: `${BASE}12月第二期最终稿件/权力、记忆与知识竞争——郭象向秀《庄子注》公案再研究.pdf`,
          },
        ],
      },
      {
        category: "栏目：时策新声",
        items: [
          {
            title: "“赋权”与“复权”: 成年人轻微犯罪记录封存制度的构建",
            author: "林炯泰",
            pdf: `${BASE}12月第二期最终稿件/“赋权”与“复权”：成年人轻微犯罪记录封存制度的构建.pdf`,
          },
          {
            title: "情感治理范式下社区社会心态培育研究",
            author: "吴芳茗",
            pdf: `${BASE}12月第二期最终稿件/情感治理范式下社区社会心态培育研究.pdf`,
          },
          {
            title: "试论人工智能时代的“非现代”新人文学研究路径",
            author: "孔令昊 吴海朝 唐彬彬",
            pdf: `${BASE}12月第二期最终稿件/试论人工智能时代的“非现代”新人文学研究路径.pdf`,
          },
          {
            title: "“乐与政通”的权力叙事与审美突围",
            author: "舒涛 郑凯涛",
            pdf: `${BASE}12月第二期最终稿件/“乐与政通”的权力叙事与审美突围.pdf`,
          },
        ],
      },
      {
        category: "书评",
        items: [
          {
            title: "《使清日记》新解:文史双重视野下的近代中日动态",
            author: "鄢靖雯",
            pdf: `${BASE}12月第二期最终稿件/《使清日记》新解：文史双重视野下的近代中日动态.pdf`,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    heading: "第一卷 第3期 2026年1月刊 目录",
    cover: "/journal/images/cover-image3.jpeg",
    sections: [
      {
        category: "栏目：跨界人文",
        items: [
          {
            title: "计量风格学视域下人机译本对比分析——以《论语》英译为例",
            author: "杨俣，陈美华",
            pdf: `${BASE}2026第一期汇总/计量风格学视域下人机译本对比分析——以《论语》英译为例.pdf`,
          },
          {
            title: "《韩熙载夜宴图》多层窥探叙事的东方美学景观空间营造研究",
            author: "陈尹",
            pdf: `${BASE}2026第一期汇总/《韩熙载夜宴图》多层窥探叙事的东方美学景观空间营造研究.pdf`,
          },
          {
            title: "新加坡导演陈哲艺电影《热带雨》中的身份认同与文化焦虑",
            author: "陈矿",
            pdf: `${BASE}2026第一期汇总/新加坡导演陈哲艺电影《热带雨》中的身份认同与文化焦虑.pdf`,
          },
          {
            title: "民俗文化语境变迁下南涧彝族跳菜的当代价值转型与功能探析",
            author: "周迎香，魏美如",
            pdf: `${BASE}2026第一期汇总/民俗文化语境变迁下南涧彝族跳菜的当代价值转型与功能探析.pdf`,
          },
        ],
      },
      {
        category: "栏目：数智时代",
        items: [
          {
            title: "数字政府敏捷治理能力影响因素研究",
            author: "任靖萱，杨剑",
            pdf: `${BASE}2026第一期汇总/数字政府敏捷治理能力影响因素研究.pdf`,
          },
          {
            title: "数据跨境流动视角下《涉外民事关系法律适用法》第4条的法教义学解构",
            author: "张译木",
            pdf: `${BASE}2026第一期汇总/数据跨境流动视角下《涉外民事关系法律适用法》第4条的法教义学解构.pdf`,
          },
          {
            title: "自动驾驶汽车侵权产品责任认定之思",
            author: "梁瑾捷",
            pdf: `${BASE}2026第一期汇总/自动驾驶汽车侵权产品责任认定之思.pdf`,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    heading: "第一卷 第4期 2026年2月刊 目录",
    cover: "/journal/images/cover-image4.jpeg",
    sections: [
      {
        category: "栏目：人文思辨",
        items: [
          {
            title: "空间视域下包法利夫人悲剧命运解读",
            author: "高鑫",
            pdf: `${BASE}2026年2月刊/2026年2月刊_1.pdf`,
          },
          {
            title: "存在的消逝与记忆的潮汐：论《乘船而去》中的疾病叙事与江南回忆空间",
            author: "柳博文",
            pdf: `${BASE}2026年2月刊/2026年2月刊_2.pdf`,
          },
        ],
      },
      {
        category: "栏目：时策新声",
        items: [
          {
            title: "新质生产力驱动下“旅游认识实习”课程体系优化路径探索",
            author: "王慧婷",
            pdf: `${BASE}2026年2月刊/2026年2月刊_3.pdf`,
          },
          {
            title: "智能网联汽车标准必要专利许可困境与反垄断规制研究",
            author: "梁小龙",
            pdf: `${BASE}2026年2月刊/2026年2月刊_4.pdf`,
          },
          {
            title: "新文科理念下粤北文创产业的创新模式与“广货行天下”路径研究",
            author: "张钰婷，刘宝仪，郑夏扬",
            pdf: `${BASE}2026年2月刊/2026年2月刊_5.pdf`,
          },
          {
            title: "跨文化传播的“温度”转向：广西对泰社交媒体传播的暖实力实践研究",
            author: "徐元",
            pdf: `${BASE}2026年2月刊/2026年2月刊_6.pdf`,
          },
        ],
      },
      {
        category: "栏目：书评",
        items: [
          {
            title: "当 AI 学会行动：技术哲学视域下的智能体崛起——评佩塔尔·拉丹利耶夫《AI 智能体的崛起》",
            author: "夏凯捷",
            pdf: `${BASE}2026年2月刊/2026年2月刊_7.pdf`,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    heading: "第一卷 第5期 2026年3月刊 目录",
    cover: "/journal/images/cover1.jpg",
    fullIssuePdf: "https://newliberalarts.hk/file/2026年3月刊/2026年3月刊.pdf",
    sections: [
      {
        category: "栏目：跨界人文",
        items: [
          {
            title: "基于体认翻译学对《洛神赋》英译本比较品析的探微",
            author: "曾文桃",
            pdf: "https://newliberalarts.hk/file/2026年3月刊/20260301.pdf",
          },
        ],
      },
      {
        category: "栏目：产教协同",
        items: [
          {
            title: "自然与有意的自然——汪曾祺《受戒》美学意义及其构建生成",
            author: "王琦",
            pdf: "https://newliberalarts.hk/file/2026年3月刊/2026年3月刊_2.pdf",
          },
          {
            title: "中国新闻传播学的角色转变、知识体系与实践进路",
            author: "翟万祥",
            pdf: "https://newliberalarts.hk/file/2026年3月刊/2026年3月刊_3.pdf",
          },
          {
            title: "产教融合背景下《专利代理实务课程》的改革路径与实践",
            author: "梁小龙",
            pdf: "https://newliberalarts.hk/file/2026年3月刊/2026年3月刊_4.pdf",
          },
          {
            title: "边境乡村教师美育素养提升：困境何在，路径何寻？",
            author: "李龙",
            pdf: "https://newliberalarts.hk/file/2026年3月刊/2026年3月刊_5.pdf",
          },
          {
            title: "面向智能制造与数字经济的地方高校《应用统计学》课程改革研究",
            author: "刘嘉倩",
            pdf: "https://newliberalarts.hk/file/2026年3月刊/2026年3月刊_6.pdf",
          },
          {
            title: "新文科视域下六安瓜片非遗的跨学科传播研究——以小红书为例",
            author: "张钰婷",
            pdf: "https://newliberalarts.hk/file/2026年3月刊/2026年3月刊_7.pdf",
          },
          {
            title: "产教融合模式下《专利信息检索与应用》课程改革研究",
            author: "魏佳轩，梁小龙",
            pdf: "https://newliberalarts.hk/file/2026年3月刊/20260308.pdf",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    heading: "第一卷 第6期 2026年4月刊 目录",
    cover: "/journal/images/cover1.jpg",
    fullIssuePdf: "https://newliberalarts.hk/file/202604/2026第4期汇总.pdf",
    sections: [
      {
        category: "栏目：人文思辨",
        items: [
          {
            title: '乡愁的终结与伦理的追问：忻钰坤电影的“恶托邦”书写',
            author: "袁文丽，朱娅婷",
            pdf: "https://newliberalarts.hk/file/202604/20260503_1.pdf",
          },
        ],
      },
      {
        category: "栏目：时策新声",
        items: [
          {
            title: "离散中的记忆与见证——郁达夫南洋散文的情感解读",
            author: "曹一蔓",
            pdf: "https://newliberalarts.hk/file/202604/20260503_2.pdf",
          },
          {
            title: "城市非遗国际传播的叙事创新与突破路径——基于WhereZhengzhou系列短视频的多模态分析",
            author: "程方敏",
            pdf: "https://newliberalarts.hk/file/202604/20260503_3.pdf",
          },
          {
            title: "智能语音合成技术创作物蕴含的法律风险与未来进路",
            author: "朱影",
            pdf: "https://newliberalarts.hk/file/202604/20260503_4.pdf",
          },
          {
            title: "股东出资义务加速到期制度研究——以《公司法司法解释（征求意见稿）》第24条为中心",
            author: "刘静",
            pdf: "https://newliberalarts.hk/file/202604/20260503_5.pdf",
          },
          {
            title: '“赋权”与“复权”:成年人轻微犯罪记录封存制度的构建',
            author: "林炯泰",
            pdf: "https://newliberalarts.hk/file/202604/20260503_6.pdf",
          },
          {
            title: '“百千万工程”助力大学生积极心里资本研究',
            author: "区瀚庭",
            pdf: "https://newliberalarts.hk/file/202604/20260503_7.pdf",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    heading: "第一卷 第7期 2026年5月刊 目录",
    cover: "/journal/images/cover1.jpg",
    fullIssuePdf: "https://newliberalarts.hk/file/2026年5月刊/2026年5月刊整本.pdf",
    sections: [
      {
        category: "栏目：量化视野",
        items: [
          {
            title: "从课堂到实践：新乡市小学科学教育实施现状的调研与反思",
            author: "潘思阳，桑世飞",
            pdf: "https://newliberalarts.hk/file/2026年5月刊/20260501.pdf",
          },
        ],
      },
      {
        category: "栏目：时策新声",
        items: [
          {
            title: "广东省大学生可持续发展素养认知与行为差异研究",
            author: "罗欣",
            pdf: "https://newliberalarts.hk/file/2026年5月刊/20260502.pdf",
          },
          {
            title: "数字化转型对商业银行风险承担的影响研究",
            author: "陈普晋",
            pdf: "https://newliberalarts.hk/file/2026年5月刊/20260503.pdf",
          },
          {
            title: "金融素养对家庭养老资产配置广度的影响研究——基于CHFS数据的实证分析",
            author: "王月盈",
            pdf: "https://newliberalarts.hk/file/2026年5月刊/20260504.pdf",
          },
          {
            title: '何为·难为·应为：“大思政课”视域下学校体育课程思政一体化探赜',
            author: "何海华，刘邵凡",
            pdf: "https://newliberalarts.hk/file/2026年5月刊/20260505.pdf",
          },
          {
            title: "合同无效后财产返还规则的体系构建与司法适用",
            author: "刘瑜，刘璐",
            pdf: "https://newliberalarts.hk/file/2026年5月刊/20260506.pdf",
          },
          {
            title: "紧跟前车型高速逃费案中刑法罪名之厘清",
            author: "罗可成，王瑜",
            pdf: "https://newliberalarts.hk/file/2026年5月刊/20260507.pdf",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    heading: "第一卷 第8期 2026年6月刊 目录",
    cover: "/journal/images/cover1.jpg",
    fullIssuePdf: "https://newliberalarts.hk/file/2026年6月刊/202606.pdf",
    sections: [
      {
        category: "栏目：人文思辨",
        items: [
          {
            title: "中文母语者科技英语写作中逻辑连接词使用研究",
            author: "花宇，李长安",
            pdf: "https://newliberalarts.hk/file/2026年6月刊/20260601.pdf",
          },
        ],
      },
      {
        category: "栏目：产教协同",
        items: [
          {
            title: "外部推动与内部需求：跨撒哈拉贸易网络形成与发展机制的再考察",
            author: "李羚",
            pdf: "https://newliberalarts.hk/file/2026年6月刊/20260602.pdf",
          },
        ],
      },
      {
        category: "书评",
        items: [
          {
            title: '及物性系统视域下中美主流媒体“一带一路”报道的对比分析',
            author: "马毓聪",
            pdf: "https://newliberalarts.hk/file/2026年6月刊/20260603.pdf",
          },
          {
            title: "AI时代背景下地方高校《作物栽培与种子检验》教学改革探索",
            author: "石亚飞",
            pdf: "https://newliberalarts.hk/file/2026年6月刊/20260604.pdf",
          },
          {
            title: "网络舆情对期货市场收益率的影响研究",
            author: "谢林婧",
            pdf: "https://newliberalarts.hk/file/2026年6月刊/20260605.pdf",
          },
          {
            title: '超越技术训练：AI 时代竞技体育训练的人文转向——评《The Inner game of the tennis》',
            author: "周玉琳",
            pdf: "https://newliberalarts.hk/file/2026年6月刊/20260606.pdf",
          },
        ],
      },
    ],
  },
];

export function getIssue(id: number): Issue | undefined {
  return issues.find((issue) => issue.id === id);
}

// 首页：2026年1月 总第一卷第3期目录（含第1-3期所有文章）
export const homeSections: TOCSection[] = [
  {
    category: "发刊词",
    items: [
      {
        title: "发刊词",
        author: "本刊编辑部",
        pdf: `${BASE}发刊词.pdf`,
      },
    ],
  },
  {
    category: "栏目：人文思辨",
    items: [
      {
        title: "现象学及诠释学视域中的杨贤江教育思想研究",
        author: "洪佳惠 应茜",
        pdf: `${BASE}现象学-诠释学视域中的杨贤江教育思想研究 洪佳惠 应茜 第一期01.pdf`,
      },
      {
        title: "逻各斯中心主义视域下莎士比亚悲剧的二元对立与人性探索",
        author: "柯贤飞",
        pdf: `${BASE}逻各斯中心主义视域下莎士比亚悲剧二元对立与人性探索 柯贤飞 第一期02.pdf`,
      },
      {
        title: "南朝至唐边塞诗写作转变机制研究",
        author: "师小康",
        pdf: `${BASE}南朝至唐边塞诗写作转变机制 师小康 第一期03.pdf`,
      },
      {
        title: "想象与体验:《麒麟》与《鹤唳》中谷崎润一郎的“中国情趣”",
        author: "罗云辉",
        pdf: `${BASE}12月第二期最终稿件/想象与体验：《麒麟》与《鹤唳》中谷崎润一郎的“中国情趣”.pdf`,
      },
      {
        title: "权力、记忆与知识竞争——郭象向秀《庄子注》公案再研究",
        author: "于健平",
        pdf: `${BASE}12月第二期最终稿件/权力、记忆与知识竞争——郭象向秀《庄子注》公案再研究.pdf`,
      },
    ],
  },
  {
    category: "栏目：量化视野",
    items: [
      {
        title: "文化距离、算法推荐与文化特色的交互效应分析——中华文化国际传播力的实证研究",
        author: "林灏",
        pdf: `${BASE}文化距离、算法推荐与文化特色的交互效应分析 林灏 第一期04.pdf`,
      },
      {
        title: "英汉科技文献摘要中的主位推进模式链定量分析与比较",
        author: "曹志宏 王晴",
        pdf: `${BASE}英汉科技文献摘要中的主位推进模式链定量分析与比较 曹志宏 王晴 第一期05.pdf`,
      },
      {
        title: "大学生参与“百千万工程”突击队对积极心理资本影响的实证研究",
        author: "区瀚庭",
        pdf: `${BASE}“百千万工程”助力大学生积极心理资本研究 区瀚庭 第一期06.pdf`,
      },
    ],
  },
  {
    category: "栏目：时策新声",
    items: [
      {
        title: "对标珠海高新区 推动松山湖生物医药高质量发展策略研究",
        author: "何广文",
        pdf: `${BASE}对标珠海高新区推动松山湖生物医药高质量发展策略 何广文 第一期07.pdf`,
      },
      {
        title: "文化档案赋能美丽乡村建设的理论内涵与实践探索",
        author: "浦祯妍 马管",
        pdf: `${BASE}文化档案赋能美丽乡村建设的理论内涵与实践探索 浦祯妍 马管 第一期08.pdf`,
      },
      {
        title: "“赋权”与“复权”: 成年人轻微犯罪记录封存制度的构建",
        author: "林炯泰",
        pdf: `${BASE}12月第二期最终稿件/“赋权”与“复权”：成年人轻微犯罪记录封存制度的构建.pdf`,
      },
      {
        title: "情感治理范式下社区社会心态培育研究",
        author: "吴芳茗",
        pdf: `${BASE}12月第二期最终稿件/情感治理范式下社区社会心态培育研究.pdf`,
      },
      {
        title: "试论人工智能时代的“非现代”新人文学研究路径",
        author: "孔令昊 吴海朝 唐彬彬",
        pdf: `${BASE}12月第二期最终稿件/试论人工智能时代的“非现代”新人文学研究路径.pdf`,
      },
      {
        title: "“乐与政通”的权力叙事与审美突围",
        author: "舒涛 郑凯涛",
        pdf: `${BASE}12月第二期最终稿件/“乐与政通”的权力叙事与审美突围.pdf`,
      },
    ],
  },
  {
    category: "栏目：跨界人文",
    items: [
      {
        title: "计量风格学视域下人机译本对比分析——以《论语》英译为例",
        author: "杨俣，陈美华",
        pdf: `${BASE}2026第一期汇总/计量风格学视域下人机译本对比分析——以《论语》英译为例.pdf`,
      },
      {
        title: "《韩熙载夜宴图》多层窥探叙事的东方美学景观空间营造研究",
        author: "陈尹",
        pdf: `${BASE}2026第一期汇总/《韩熙载夜宴图》多层窥探叙事的东方美学景观空间营造研究.pdf`,
      },
      {
        title: "新加坡导演陈哲艺电影《热带雨》中的身份认同与文化焦虑",
        author: "陈矿",
        pdf: `${BASE}2026第一期汇总/新加坡导演陈哲艺电影《热带雨》中的身份认同与文化焦虑.pdf`,
      },
      {
        title: "民俗文化语境变迁下南涧彝族跳菜的当代价值转型与功能探析",
        author: "周迎香，魏美如",
        pdf: `${BASE}2026第一期汇总/民俗文化语境变迁下南涧彝族跳菜的当代价值转型与功能探析.pdf`,
      },
    ],
  },
  {
    category: "栏目：数智时代",
    items: [
      {
        title: "数字政府敏捷治理能力影响因素研究",
        author: "任靖萱，杨剑",
        pdf: `${BASE}2026第一期汇总/数字政府敏捷治理能力影响因素研究.pdf`,
      },
      {
        title: "数据跨境流动视角下《涉外民事关系法律适用法》第4条的法教义学解构",
        author: "张译木",
        pdf: `${BASE}2026第一期汇总/数据跨境流动视角下《涉外民事关系法律适用法》第4条的法教义学解构.pdf`,
      },
      {
        title: "自动驾驶汽车侵权产品责任认定之思",
        author: "梁瑾捷",
        pdf: `${BASE}2026第一期汇总/自动驾驶汽车侵权产品责任认定之思.pdf`,
      },
    ],
  },
  {
    category: "书评",
    items: [
      {
        title: "新文科研究方法论的再思考——贝弗里奇《科学研究的艺术》解读",
        author: "阴健 赵嘉明",
        pdf: `${BASE}新文科研究方法论的再思考——贝弗里奇《科学研究的艺术》解读 阴健 赵嘉明 第一期书评.pdf`,
      },
      {
        title: "《使清日记》新解:文史双重视野下的近代中日动态",
        author: "鄢靖雯",
        pdf: `${BASE}12月第二期最终稿件/《使清日记》新解：文史双重视野下的近代中日动态.pdf`,
      },
    ],
  },
];
