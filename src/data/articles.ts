export interface Paragraph {
  en: string;
  zh: string;
}

export interface Article {
  id: string;
  titleEn: string;
  titleZh: string;
  excerptEn: string;
  excerptZh: string;
  coverImage: string;
  coverImageAltEn: string;
  coverImageAltZh: string;
  publishDate: string;
  content: Paragraph[];
}

export const articles: Article[] = [
  {
    id: "yu-the-great-tames-the-waters",
    titleEn: "Yu the Great Tames the Waters: A Tale of Dedication",
    titleZh: "大禹治水：奉献与责任的传说",
    excerptEn: "Discover the legendary story of Yu the Great, a mythical hero who tirelessly battled catastrophic floods to save ancient China, exemplifying selflessness and perseverance.",
    excerptZh: "探索大禹这位神话英雄的传奇故事。他不知疲倦地与灾难性的洪水抗争，拯救了古代中国，展现了无私与毅力。",
    coverImage: "/images/YutheGreatTamestheWaters.webp",
    coverImageAltEn: "A traditional Chinese painting depicting rushing rivers and mountains.",
    coverImageAltZh: "描绘奔腾的河流和山脉的中国传统水墨画。",
    publishDate: "2023-10-15",
    content: [
      {
        en: "In ancient times, during the reign of Emperor Yao, the Yellow River valley was plagued by catastrophic floods. The raging waters destroyed crops, swept away homes, and forced the people to flee to the highest mountain peaks for safety. The people suffered greatly, and the emperor was deeply troubled by the continuous disaster.",
        zh: "在远古时期的尧帝统治时代，黄河流域遭受着灾难性洪水的侵袭。汹涌的洪水摧毁了庄稼，冲毁了房屋，迫使人们不得不逃往最高耸的山峰寻求庇护。百姓苦不堪言，帝王也为这连绵不断的灾祸感到深深的忧虑。"
      },
      {
        en: "Gun, a capable official, was appointed to control the waters. For nine years, he built massive earthen dams and dikes to block the floodwaters. However, the water's force was too strong; the dams consistently broke, causing even greater devastation. Gun's strategy of merely blocking the water ultimately failed, leading to his exile.",
        zh: "鲧是一位能干的治水官员，他被任命去治理洪水。在长达九年的时间里，他修筑了巨大的土坝和堤防来阻挡洪水。然而，水的力量实在太大，堤坝不断决堤，造成了更为严重的破坏。鲧仅仅采取“堵截”的策略最终宣告失败，并因此被流放。"
      },
      {
        en: "Following Gun's failure, his son, Yu, was entrusted with the monumental task of subduing the great flood. Unlike his father, Yu understood that nature could not be simply blocked but must be guided. He studied the terrain meticulously, observing the flow of the waters and the shape of the land.",
        zh: "在鲧失败之后，他的儿子禹被委以重任，接手了平息这场大洪水的艰巨任务。与他的父亲不同，禹深刻理解自然的力量是无法被简单阻挡的，而必须加以疏导。他极其仔细地勘察地形，观察水流的方向和山脉的地势。"
      },
      {
        en: "Yu devised a new, innovative strategy: rather than building walls to stop the water, he would dredge channels to guide the floodwaters safely into the eastern sea. This required an unimaginable amount of labor, carving through mountains and deepening riverbeds across the vast landscape of ancient China.",
        zh: "禹制定了一项全新的、具有创新性的策略：与其修筑高墙来阻截水流，不如疏浚河道，将洪水安全地引向东面的大海。这需要耗费难以想象的巨大劳力，在广袤的古代中国大地上开山凿石，加深河床。"
      },
      {
        en: "For thirteen long years, Yu traveled across the land, working alongside the common people. He was deeply devoted to his duty. The legend states that during these thirteen years, he passed his own house three times. He could hear his wife weaving and his newborn son crying, but he never stepped inside, prioritizing the safety of the realm over his personal life.",
        zh: "在漫长的十三年里，禹跋山涉水，与普通百姓并肩劳作。他对自己的职责尽职尽责。传说中提到，在这十三年间，他曾经三次路过自己的家门。他能听到妻子织布的声音和刚出生的儿子啼哭的声音，但他却从未踏入家门半步，将天下苍生的安危置于个人生活之上。"
      },
      {
        en: "Through his unwavering perseverance and brilliant engineering, Yu finally succeeded. The waters receded, revealing fertile lands ready for cultivation. The people returned to their homes in the valleys, rebuilding their communities and praising Yu as a savior. His success marked the beginning of a new era of prosperity.",
        zh: "凭借着他坚定不移的毅力和卓越的水利工程，禹终于取得了成功。洪水退去，展露出肥沃的适合耕种的土地。人们回到了平原低谷中的家乡，重建了他们的社区，并将禹尊崇为救世主。他的成功标志着一个繁荣新时代的开端。"
      },
      {
        en: "Because of his incredible contribution and selfless spirit, Yu was eventually chosen by Emperor Shun to be his successor. Yu the Great became the founder of the Xia Dynasty, the first dynasty in traditional Chinese history. His story remains a profound symbol of civic duty, resilience, and the harmonious balance between humanity and nature.",
        zh: "因为他做出的不可思议的贡献和无私奉献的精神，禹最终被舜帝选定为继承人。大禹成为了中国传统历史上第一个朝代——夏朝的建立者。他的故事至今仍是公民责任、坚韧不拔以及人类与自然和谐共处的深刻象征。"
      }
    ]
  },
  {
    id: "the-monkey-king-birth",
    titleEn: "Birth of the Monkey King: The Stone that Sprang to Life",
    titleZh: "美猴王出世：从神石中蹦出的生命",
    excerptEn: "Explore the fascinating origin story of Sun Wukong, the Monkey King, who was born from a magical stone atop the Mountain of Flowers and Fruit.",
    excerptZh: "探索孙悟空——美猴王引人入胜的起源故事。他出生于花果山顶的一块神奇的石头之中。",
    coverImage: "/images/BirthoftheMonkeyKing.webp",
    coverImageAltEn: "A stone formation resembling a monkey face.",
    coverImageAltZh: "形似猴面的石头构造。",
    publishDate: "2023-11-02",
    content: [
      {
        en: "High atop the Mountain of Flowers and Fruit, located in the Eastern Purvavideha continent, sat an extraordinary stone. It was no ordinary rock; it had been nourished by the essence of Heaven and Earth and the light of the Sun and Moon since the very creation of the world.",
        zh: "在位于东胜神洲的花果山之巅，静静地安放着一块非凡的石头。它绝不是一块普通的岩石；自天地开辟以来，它就一直受着天地精华与日月光辉的滋养。"
      },
      {
        en: "One momentous day, the magical stone split open, giving birth to a stone egg. Blessed by the celestial winds, the egg transformed into a stone monkey. The moment this monkey opened his eyes, two beams of golden light shot out from them, reaching all the way to the Jade Emperor's heavenly palace.",
        zh: "在那个具有重大意义的日子里，神奇的石头裂开了，孕育出一枚石卵。在天风的吹拂下，石卵化作了一只石猴。就在这只猴子睁开眼睛的那一刻，两道金色的光芒从他的双眼中射出，直冲云霄，一直照到了玉皇大帝的天庭宫殿。"
      },
      {
        en: "The Jade Emperor, startled by the light, ordered his divine generals to investigate. When they reported that it was merely a stone monkey newly born on earth, the Emperor, showing benevolence, declared that creatures born of the earth were of little concern, allowing the monkey to live freely.",
        zh: "玉皇大帝被这道光芒惊动，命令他的神将前去调查。当他们报告说在下界只不过是刚刚出生了一只石猴时，玉皇大帝展现了他的宽容，宣称大自然孕育的生灵不足为奇，允许那只猴子自由自在地生活。"
      },
      {
        en: "The stone monkey quickly adapted to life on the mountain. He befriended the other monkeys, playing in the forests, eating wild fruits, and drinking from crystal clear streams. He possessed incredible agility and natural strength, quickly becoming popular among his peers.",
        zh: "石猴很快就适应了山上的生活。他与其他猴子结为伴侣，在森林中玩耍，采食野果，饮用清澈见底的溪水。他天生具有令人难以置信的敏捷和力量，很快就在同伴中大受欢迎。"
      },
      {
        en: "One scorching hot day, the monkeys followed a stream upstream to find its source to cool off. They discovered a magnificent waterfall cascading down like a curtain of silver. Curious and daring, the monkeys wondered what lay behind the roaring curtain of water.",
        zh: "在一个酷热难耐的日子里，猴子们沿着溪流向上游寻找源头以便乘凉。他们发现了一道壮观的瀑布，如同银色的珠帘般飞流直下。出于好奇和胆量，猴子们想知道在这轰鸣的水帘背后究竟隐藏着什么。"
      },
      {
        en: "The elder monkeys declared that whoever dared to jump through the water and return safely would be crowned as their king. The stone monkey, without a moment's hesitation, leaped straight through the waterfall. Inside, he found a spacious, beautifully furnished cave of iron and rock, large enough to shelter all the monkeys.",
        zh: "年长的猴子们宣布，谁若是敢跳过这道水帘并且平安返回，谁就能被拥立为他们的国王。石猴没有丝毫的犹豫，直接一跃穿过了瀑布。在里面，他发现了一个宽敞、布置精美的铁板桥洞府，大得足以安置所有的猴子。"
      },
      {
        en: "He joyfully returned and called his friends to enter. Once safely inside the 'Water Curtain Cave', the monkeys kept their promise. They bowed before the brave stone monkey and hailed him as the 'Handsome Monkey King'. This momentous event began the legend of Sun Wukong.",
        zh: "他满心欢喜地跳了回来，呼唤他的朋友们一起进去。当大家全都安全进入“水帘洞”后，猴子们兑现了他们的诺言。他们在勇敢的石猴面前跪拜，尊称他为“美猴王”。这一重大事件开启了孙悟空的传奇篇章。"
      }
    ]
  },
  {
    id: "hua-mulan-the-warrior-maiden",
    titleEn: "Hua Mulan: The Brave Warrior Maiden",
    titleZh: "花木兰：勇敢的巾帼英雄",
    excerptEn: "The inspiring ballad of Hua Mulan, a courageous young woman who disguised herself as a man to take her ailing father's place in the imperial army.",
    excerptZh: "花木兰的动人赞歌，一位勇敢的年轻女子女扮男装，代替她年迈多病的父亲加入皇家军队。",
    coverImage: "/images/HuaMulanTheWarriorMaiden.webp",
    coverImageAltEn: "A traditional stylized illustration portraying a strong warrior.",
    coverImageAltZh: "描绘一位强壮武士的传统风格插图。",
    publishDate: "2023-12-10",
    content: [
      {
        en: "In ancient China, during a time of great turmoil, the northern borders were threatened by fierce nomadic invaders. The Emperor issued a mandatory decree: one man from every family in the nation must be drafted into the imperial army to defend the realm.",
        zh: "在古代中国，一个动荡不安的时期，北方的边境正受到凶猛游牧民族的威胁。皇帝颁布了一道强制性法令：全国每户人家都必须抽调一名男子应征入伍，以保卫国家。"
      },
      {
        en: "When the military notice arrived at the Hua family's door, it brought deep sorrow. Mulan's father, a respected veteran, was now old and frail. Mulan had no older brother to take his place. To send her elderly father to war was a guaranteed death sentence.",
        zh: "当征兵的通知送到花家门前时，带来了深深的悲伤。木兰的父亲是一位受人尊敬的老兵，然而现在却年老体衰。木兰没有兄长可以代替他。如果让她年迈的父亲上战场，那无疑是宣告了他的死亡。"
      },
      {
        en: "Driven by profound filial piety and courage, Mulan made a life-altering decision. Under the cover of night, she bought a fine horse, a saddle, and military armor. She cut her long hair and disguised herself completely in the attire of a male soldier, determined to answer the Emperor's call in her father's stead.",
        zh: "在深切的孝道和勇气的驱使下，木兰做出了一个改变一生的决定。在夜幕的掩护下，她买下了一匹好马、一副马鞍和军用的铠甲。她剪去长发，彻底将自己乔装打扮成了男兵的模样，下定决心要代替父亲响应皇上的征召。"
      },
      {
        en: "Bidding a tearful, silent farewell to her sleeping family, she rode off to join the gathering army. For twelve harsh years, Mulan endured the brutal realities of war. She fought bravely in countless battles, marching tens of thousands of miles across rugged terrain, always keeping her true identity a closely guarded secret.",
        zh: "她向熟睡的家人含泪做了无声的告别，便骑马远去，加入了集结的军队。在漫长而艰辛的十二年里，木兰经受了战争残酷现实的考验。她在无数次战役中英勇奋战，跨越崇山峻岭行军数万里，始终将自己的真实身份作为最高机密严加防范。"
      },
      {
        en: "Her exceptional battlefield strategy and unmatched bravery quickly earned her the respect of her peers and superiors. Mulan rose through the ranks, becoming a distinguished general. Together with her comrades, she helped lead the imperial army to a decisive victory, driving the invaders away and securing peace for the empire.",
        zh: "她非凡的战场策略和无双的勇气很快为她赢得了同袍和上级的尊敬。木兰的军衔一路晋升，成为了一位杰出的将军。她与战友们并肩作战，帮助皇家军队取得了一场决定性的胜利，赶走了入侵者，为帝国赢得了和平。"
      },
      {
        en: "Following the triumph, the Emperor summoned the war heroes back to the capital to grant them immense rewards. When the Emperor offered Mulan a high-ranking ministerial position at the imperial court, she surprised everyone by politely declining. Her only wish was for a fast horse to carry her safely back to her long-awaited home.",
        zh: "在这场胜利之后，皇帝将战争英雄们召回京城，赐予他们丰厚的奖赏。当皇上提出要在朝廷中赐予木兰一个高官厚禄的尚书职位时，她却婉言谢绝，令所有人大吃一惊。她唯一的愿望只是讨一匹能在最短时间内将她安全送回那个她期盼已久的家乡的千里马。"
      },
      {
        en: "Upon returning home, she took off her armor and dressed in her elegant clothes once again. When her fellow soldiers came to visit her, they were utterly astonished to discover that their fearless and brilliant commander, whom they had fought alongside for over a decade, was actually a beautiful woman.",
        zh: "回到家乡后，她脱下战袍，再次穿上了她优雅的女儿家服饰。当她的战友们前来拜访她时，他们惊骇万分地发现，那位与他们并肩战斗了十多年的、无畏而卓越的将军，竟然是一位美丽的女子。"
      }
    ]
  },
  {
    id: "change-flies-to-the-moon",
    titleEn: "Chang'e Flies to the Moon: The Origin of the Mid-Autumn Festival",
    titleZh: "嫦娥奔月：中秋节的由来",
    excerptEn: "The tragic and romantic myth of Chang'e, the beautiful goddess of the moon, and Hou Yi the archer, celebrating themes of love and sacrifice.",
    excerptZh: "关于美丽的月亮女神嫦娥和神箭手后羿的悲美神话，传颂着爱与牺牲的永恒主题。",
    coverImage: "/images/Chang'eFliestotheMoon.webp",
    coverImageAltEn: "A glowing full moon against a dark sky.",
    coverImageAltZh: "黑暗夜空下闪闪发光的满月。",
    publishDate: "2024-01-18",
    content: [
      {
        en: "Long ago, the earth was scorched by the heat of ten blazing suns that appeared simultaneously in the sky. The extreme heat caused massive droughts, crops withered, and life on earth was pushed to the brink of extinction. The people cried out to heaven for salvation.",
        zh: "很久以前，地球被天空中同时出现的十个炽热太阳的高温所炙烤。极端的酷热引发了大规模的干旱，庄稼枯萎，大地上所有的生命都被推向了灭绝的边缘。人们绝望地向天祈求拯救。"
      },
      {
        en: "A heroic archer named Hou Yi answered their pleas. Armed with a mythical red bow and white arrows given by the gods, he climbed to the peak of the Kunlun Mountains. With incredible precision and strength, Hou Yi shot down nine of the ten suns, leaving only one to provide warmth and light to the world. He was hailed as a legendary hero.",
        zh: "一位名叫后羿的英勇神箭手回应了他们的恳求。他带着神明赐予的红色神弓和白色利箭，登上了昆仑山之巅。凭借着令人惊叹的精准度和力量，后羿射下了十个太阳中的九个，只留下了一个来为世界提供温暖和光明。他被尊奉为传奇英雄。"
      },
      {
        en: "As a reward for saving humanity, the Queen Mother of the West bestowed upon Hou Yi an elixir of immortality. However, the elixir was only enough for one person to become a god and ascend to heaven. Deeply in love with his beautiful and kind-hearted wife, Chang'e, Hou Yi refused to consume it alone and asked her to keep it safe.",
        zh: "作为拯救人类的奖赏，西王母赐予后羿一瓶长生不老药。然而，这仙药的分量仅仅足够让一个人成仙升天。由于深爱着他那美丽善良的妻子嫦娥，后羿拒绝独自服下，便请她代为妥善保管。"
      },
      {
        en: "Unfortunately, one of Hou Yi's apprentices, a greed-driven man named Peng Meng, learned of the elixir. One day, while Hou Yi was away hunting, Peng Meng broke into their home, wielding a sword, and demanded that Chang'e hand over the precious potion.",
        zh: "不幸的是，后羿的一个徒弟，一个被贪婪吞噬了心智名叫逢蒙的男人，得知了不老药的秘密。一天，趁着后羿出外打猎，逢蒙手持宝剑闯入了他们的家中，逼迫嫦娥交出那瓶珍贵的仙药。"
      },
      {
        en: "Knowing she could never defeat the wicked Peng Meng, and desperate to prevent the elixir from falling into evil hands, Chang'e made a split-second decision. She swiftly grabbed the flask and swallowed the entire elixir herself.",
        zh: "深知自己绝对无法击败邪恶的逢蒙，也为了绝不让仙药落入恶人之手，嫦娥在极其短暂的瞬间做出了决定。她迅速抓起药瓶，干脆将整瓶仙药全部吞了下去。"
      },
      {
        en: "Instantly, her body became weightless. She began to float off the ground, drifting out the window and ascending higher and higher into the night sky. Because of her profound love for her husband, rather than flying all the way to the distant heavens, she chose to reside on the moon, the closest celestial body to earth.",
        zh: "霎时间，她的身体失去了重量。她开始从地面飘浮起来，飘出窗外，朝着漆黑的夜空越升越高。出于对丈夫深沉的爱，她并没有一直飞往遥远的天庭，而是选择居住在离地球最近的天体——月亮上。"
      },
      {
        en: "When Hou Yi returned and discovered the tragedy, he was heartbroken. Gazing up at the moon, he set up a table with Chang'e's favorite fruits and incense to mourn his beloved wife. Seeing this, the people joined him in offering sacrifices to the kind Moon Goddess. This tradition evolved into the Mid-Autumn Festival, a time for family reunion and moon-gazing.",
        zh: "当后羿归来发现这场悲剧时，他心碎欲绝。他仰望着月亮，在庭院里摆上面案，放上嫦娥最喜爱的水果，点燃香料，以此来哀悼他心爱的妻子。百姓们见状，也纷纷加入他的行列，向这位善良的月亮女神献上祭品。这个传统逐渐演变成了中秋节，一个象征家庭团聚和赏月的节日。"
      }
    ]
  },
  {
    id: "ne-zha-conquers-the-dragon-king",
    titleEn: "Nezha Conquers the Dragon King: A Tale of Youthful Bravery",
    titleZh: "哪吒闹海：年少英勇的故事",
    excerptEn: "The thrilling mythological adventure of Nezha, a rebellious and incredibly powerful boy deity who challenged the tyrannical Dragon King of the Eastern Sea.",
    excerptZh: "哪吒令人激动的神话冒险故事。他是一位叛逆且法力无边的孩童神仙，挑战了残暴的东海龙王。",
    coverImage: "/images/NezhaConquerstheDragonKing.webp",
    coverImageAltEn: "Calm ocean waves breaking on a rocky shore.",
    coverImageAltZh: "拍打在岩石海岸上的平静海浪。",
    publishDate: "2024-02-25",
    content: [
      {
        en: "Nezha was a most unusual child. His mother, Lady Yin, carried him in her womb for three and a half years. When he was finally born, he did not appear as a human infant, but rather as a glowing meatball. His father, General Li Jing, believing it to be a demon, struck it with his sword, revealing a fully formed boy inside.",
        zh: "哪吒是个极其不同寻常的孩子。他的母亲殷夫人怀胎三年零六个月才产下他。当他最终降生时，并非展现出人类婴儿的模样，而是一个发光的大肉球。他的父亲李靖将军以为这是一个妖怪，便拔剑向肉球劈去，结果里面出现了一个发育完全的男孩。"
      },
      {
        en: "From birth, Nezha possessed incredible magical powers. He was a disciple of Taiyi Zhenren, an immortal who gifted him two powerful cosmic weapons: the Universal Ring and the Red Armillary Sash. Though young, he was mischievous, fearless, and possessed an innate sense of justice.",
        zh: "哪吒从出生起就拥有不可思议的神奇法力。他是太乙真人的弟子，这位仙人赠予了他两件威力巨大的宇宙级法宝：乾坤圈和混天绫。虽然年少，但他调皮捣蛋、无所畏惧，内心充满着与生俱来的正义感。"
      },
      {
        en: "One sweltering summer day, seven-year-old Nezha sought to escape the heat. He waded into the waters of the nearby Eastern Sea to bathe. Unbeknownst to him, his simple splashing with the Red Armillary Sash caused violent tremors in the magnificent Crystal Palace of the Dragon King beneath the waves.",
        zh: "在一个闷热难耐的夏日，七岁的哪吒想要避暑纳凉。他步入附近的东海海水中洗澡。但他并不知道，他仅仅是用混天绫在水里随意地扑腾，就引起了海底那座宏伟的龙王水晶宫发生了剧烈的震荡。"
      },
      {
        en: "Outraged by the disturbance, the Dragon King of the Eastern Sea dispatched a patroling yaksha to punish the intruder. The cruel yaksha attacked Nezha, but the celestial boy easily defeated him. Furious, the Dragon King then sent his own son, Ao Bing, heavily armed and riding a water beast, to kill Nezha.",
        zh: "东海龙王被这种骚扰彻底激怒了，派出一个巡海夜叉去惩罚入侵者。残忍的夜叉袭击了哪吒，但这神奇的男孩轻而易举地就将他打败了。龙王勃然大怒，随后派出了他的亲生儿子敖丙，全副武装骑着水兽去诛杀哪吒。"
      },
      {
        en: "In the ensuing fierce battle, Nezha fought to protect himself and the local fishermen who were often oppressed by the dragons. With a strike of his Universal Ring, Nezha accidentally killed Ao Bing. The death of the dragon prince sent the Dragon King into a state of uncontrollable rage.",
        zh: "在随后的激烈战斗中，哪吒为了保护自己，也为了保护那些经常受到龙族欺压的当地渔民而奋力反击。哪吒掷出乾坤圈，一击之下意外地打死了敖丙。龙王太子的死让龙王陷入了无法控制的狂暴之中。"
      },
      {
        en: "The Dragon King, joined by his brothers from the other three seas, threatened to flood the entire Chentang Pass, drowning Nezha's family and thousands of innocent villagers unless Nezha paid with his life. To save his parents and his people from this monumental disaster, Nezha made the ultimate sacrifice and ended his own life.",
        zh: "龙王联合了其他三海的龙王兄弟，威胁要水淹整个陈塘关，淹死哪吒的家人和成千上万无辜的村民，除非哪吒一命抵一命。为了从这巨大的灾难中拯救他的父母和家乡的百姓，哪吒做出了最终的牺牲，自尽而亡。"
      },
      {
        en: "Deeply moved by the boy's heroic sacrifice, his master, Taiyi Zhenren, gathered Nezha's soul. Using lotus roots for bones and lotus leaves for flesh, the immortal reconstructed a new, indestructible body for Nezha. Reborn and stronger than ever, Nezha returned as a revered protective deity.",
        zh: "他的无畏牺牲深深感动了他的师父太乙真人，太乙真人收集了哪吒的魂魄。仙人用莲藕作骨，用荷叶作肉，为哪吒重塑了一具全新的、坚不可摧的肉身。重生后并且比以往更加强大的哪吒，作为一名受人尊崇的护法神祗重新归来。"
      }
    ]
  },
  {
    id: "pangu-separates-heaven-and-earth",
    titleEn: "Pangu Creates the World: The Awakening in Chaos",
    titleZh: "盘古开天辟地：混沌中的觉醒",
    excerptEn: "The majestic Chinese creation myth of the giant Pangu, who cleaved the primordial chaos to separate heaven and earth.",
    excerptZh: "气势磅礴的中国创世神话，讲述了巨人盘古劈开原始混沌，分开天地的壮举。",
    coverImage: "/images/PanguCreatestheWorld.webp",
    coverImageAltEn: "A swirling cloud of interstellar dust representing chaos.",
    coverImageAltZh: "代表混沌状态的星际尘埃云。",
    publishDate: "2024-03-01",
    content: [
      {
        en: "Long before time existed, the universe was merely a completely dark and formless void. Within this vast, egg-like state of primordial chaos, a mighty giant named Pangu slept for eighteen thousand years.",
        zh: "早在时间存在之前，宇宙仅仅是一个完全黑暗且没有形状的虚空。在这个如同巨蛋一般广阔的原始混沌之中，一位名叫盘古的强大巨人沉睡了一万八千年。"
      },
      {
        en: "When Pangu suddenly awoke, he found himself trapped in absolute darkness. Gripping a huge, magical axe that appeared in his hands, he swung it forward with unimaginable force to break the shell of chaos.",
        zh: "当盘古突然醒来时，他发现自己被困在绝对的黑暗之中。他紧紧握住手中出现的一把巨大的神斧，用难以想象的力量向前挥去，劈开了混沌的硬壳。"
      },
      {
        en: "With a deafening crash, the heavy, obscure matter sank downwards to form the solid Earth, while the light, clear matter floated upwards to become the boundless Sky.",
        zh: "伴随着震耳欲聋的巨响，沉重昏暗的物质向下沉降，形成了坚实的大地；而轻盈清澈的物质向上漂浮，化作了无边的天空。"
      },
      {
        en: "Terrified that the world would collapse back into chaos, Pangu stood between heaven and earth. Every day he grew taller, pushing the sky higher and pressing the earth lower for another long era until his body gave out.",
        zh: "出于对世界可能再次塌陷回混沌的恐惧，盘古屹立在天地之间。每一天他都在长高，将天空推得更高，将大地压得更深，经历了又一个漫长纪元，直到他的身体力竭。"
      },
      {
        en: "Upon his death, his body transformed miraculously into the features of our world. His breath became the wind, his eyes became the sun and moon, and his blood formed the flowing rivers, granting life to all things.",
        zh: "在他死后，他的身躯奇迹般地化作了我们这个世界的各种风貌。他的呼吸变成了风，双眼化为日月，血液成了奔流的江河，赋予了万物生长的心跳。"
      }
    ]
  },
  {
    id: "nuwa-mends-the-sky",
    titleEn: "Nüwa Mends the Sky: The Mother Goddess's Sacrifice",
    titleZh: "女娲补天：大地之母的牺牲",
    excerptEn: "The epic tale of Goddess Nüwa, who melted five-colored stones to patch a broken heaven and save humanity from a catastrophic disaster.",
    excerptZh: "大地之母女娲的史诗传说，她炼制五色石来修补破损的苍天，将人类从灭顶之灾中拯救出来。",
    coverImage: "/images/NüwaMendstheSky.webp",
    coverImageAltEn: "A magnificent sunset with glowing, colorful clouds.",
    coverImageAltZh: "绚丽的日落与闪耀着五彩光芒的云层。",
    publishDate: "2024-03-05",
    content: [
      {
        en: "According to ancient legends, the peace of the newly founded world was shattered when two fierce gods—Gonggong, the Water God, and Zhurong, the Fire God—engaged in a ferocious battle.",
        zh: "根据古老的传说，刚刚安定的世界所享有的和平被打破了，因为两位凶猛的神明——水神共工和火神祝融——展开了一场惨烈的激战。"
      },
      {
        en: "Defeated and humiliated, Gonggong smashed his head against Mount Buzhou, one of the four celestial pillars directly supporting the heavens. The colossal impact broke the pillar, causing the sky to tilt and tear open.",
        zh: "战败且感到屈辱的共工一头撞向了不周山。这是直接支撑着苍天的四根神柱之一。这巨大的撞击使得擎天柱折断，导致天空倾斜并撕裂出一个大洞。"
      },
      {
        en: "Through the giant celestial hole, heavenly fires rained down, and terrible floods gushed from deep underground. Ferocious beasts emerged from the chaotic forests to prey upon terrified, defenseless mortals.",
        zh: "透过天上的大窟窿，天火接连不断地倾泻而下，可怕的洪水从地下深处喷涌而出。凶恶的猛兽从混乱的森林中窜出，捕食那些惊恐万分、手无寸铁的凡人。"
      },
      {
        en: "The mother goddess Nüwa, who had created humans from yellow clay, watched the suffering in immense grief. Rather than abandoning her mortal children, she decided to fix the falling heaven herself.",
        zh: "用黄土捏造了人类的大地女神女娲，在极度悲伤中目睹了这场灾难。她没有放弃她的凡人孩子们，而是决定亲自去修补正在倾覆的苍天。"
      },
      {
        en: "She traveled far and wide collecting precious stones of five different colors. She melted these stones in an enormous furnace, using the glowing, magical liquid to meticulously seal the gaping rift in the sky.",
        zh: "她跋山涉水，收集了五种不同颜色的奇石。她在一座庞大的熔炉里将这些石头熔化，用那闪耀的、充满魔力的岩浆，小心翼翼地修补好天空中那巨大的裂痕。"
      }
    ]
  },
  {
    id: "jingwei-fills-the-sea",
    titleEn: "Jingwei Fills the Sea: An Unyielding Spirit",
    titleZh: "精卫填海：不屈的灵魂",
    excerptEn: "The touching fable of a princess who transformed into a small bird and vowed to fill the vast ocean with pebbles, one twig at a time.",
    excerptZh: "一个感人至深的寓言，讲述了一位化作小鸟的公主，发誓要用一颗颗石子和树枝填平浩瀚的大海。",
    coverImage: "/images/JingweiFillstheSea.webp",
    coverImageAltEn: "A solitary bird flying over dark and raging ocean waves.",
    coverImageAltZh: "一只孤单的鸟儿飞跃翻滚咆哮的黑色海浪。",
    publishDate: "2024-03-12",
    content: [
      {
        en: "Nüwa, the youngest and most beloved daughter of Emperor Yan, was a beautiful and cheerful princess. She loved sitting by the eastern shore, watching the deep blue waves of the Eastern Sea gently brush the golden sand.",
        zh: "炎帝最年幼、最受宠爱的女儿名叫女娃，她是一位美丽活泼的公主。她最喜欢坐在东部的海岸边，看着东海深蓝色的海浪轻轻拍打着金色的沙滩。"
      },
      {
        en: "One tragic afternoon, a sudden and violent storm struck without warning while she was playing in a small wooden boat. The furious waves capsized the boat, causing the princess to drown before help could arrive.",
        zh: "在一个悲惨的下午，正当她在一艘小木船上玩耍时，一场突如其来的猛烈风暴毫无预兆地降临了。暴怒的海浪掀翻了小船，导致公主在救援到来之前就不幸溺水身亡。"
      },
      {
        en: "Instead of moving to the underworld, her indomitable spirit transformed into a beautiful, determined bird with a patterned head, a white beak, and red claws. She continually called out her own new name: 'Jingwei'.",
        zh: "她的灵魂并没有前往地府，而是化身成了一只美丽、执着的鸟儿，长着带花纹的脑袋、白色的喙和红色的爪子。她不停地呼喊着自己全新的名字：‘精卫’。"
      },
      {
        en: "Blaming the ruthless Eastern Sea for her death and seeking to protect others from her fate, Jingwei made a solemn vow to fill up the entire ocean and conquer the tides.",
        zh: "因为怨恨残酷的东海夺走了自己的性命，也为了让她人不再遭受同样的灾难，精卫立下了庄严的誓言：一定要填平整个大海，征服这可怕的潮水。"
      },
      {
        en: "Every single day, disregarding the ocean's mocking roars, the tiny bird carries twigs and small pebbles from the Western Mountains, dropping them relentlessly into the vast waters. Her eternal pursuit symbolizes unmatched perseverance.",
        zh: "日复一日，精卫鸟全然不顾大海那充满嘲笑的咆哮声，不停地从西山衔来树枝和小石子，坚持不懈地将它们投进茫茫大海之中。她那永无止境的追逐象征着无与伦比的毅力。"
      }
    ]
  },
  {
    id: "legend-of-white-snake",
    titleEn: "The Legend of the White Snake: Love Beyond Realms",
    titleZh: "白蛇传：跨越界限的恋爱",
    excerptEn: "A dramatic classical romance of Bai Suzhen, a powerful white snake spirit who falls in love with a mortal scholar and fights to stay with him.",
    excerptZh: "一部极度戏剧性的古典浪漫传说，讲述了一位强大的白蛇妖白素贞爱上凡间书生，并拼死陪伴他的故事。",
    coverImage: "/images/TheLegendoftheWhiteSnake.webp",
    coverImageAltEn: "A traditional wooden bridge over a misty lake in Hangzhou.",
    coverImageAltZh: "杭州薄雾笼罩的湖面上的一座传统木桥。",
    publishDate: "2024-03-20",
    content: [
      {
        en: "After practicing ancient Taoist magic for one thousand years, a white snake spirit acquired the remarkable ability to shape-shift into a stunningly beautiful human woman, identifying herself as Bai Suzhen.",
        zh: "在修炼了长达一千年的古老道家仙法之后，一只白蛇妖获得了惊人的本领，化为了一位容貌倾国倾城的人类女子，取名为白素贞。"
      },
      {
        en: "Accompanied by her fiery and loyal green snake companion, Xiao Qing, she visited the mortal realm. While strolling over the iconic Broken Bridge at West Lake during a spring rain shower, she encountered a humble scholar named Xu Xian.",
        zh: "在脾气火爆却忠心耿耿的青蛇侍女小青的陪伴下，她来到了凡间游玩。在西湖那标志性的断桥上漫步时，巧遇一场春雨，她邂逅了一位谦逊的书生许仙。"
      },
      {
        en: "Xu Xian kindly offered them his umbrella, initiating a fateful connection. They fell deeply in love, soon married, and jointly opened a prosperous traditional medicine shop to heal the local community's sick people.",
        zh: "许仙好心地将自己的伞借给了她们，由此结下了一段命中注定的缘分。两人深深相爱，很快便结为夫妇，并共同开办了一家生意兴隆的中药铺，为当地的百姓治病。"
      },
      {
        en: "However, a stern and orthodox Buddhist monk named Fahai strongly believed that demons and humans must remain separate. Discovering Bai Suzhen's true magical snake identity, Fahai intervened maliciously to forcefully end their beautiful union.",
        zh: "然而，一位名叫法海的刻板、正统的佛教高僧坚信人妖殊途、不可共处。在发现白素贞是懂法术的蛇妖这一真实身份后，法海恶意干涉，企图强行结束他们美好的姻缘。"
      },
      {
        en: "Refusing to yield her true love, Bai Suzhen unleashed her magical powers to summon giant waves, flooding the famed Jinshan Temple. Though captured and imprisoned in the Leifeng Pagoda, her fierce dedication endures purely as an eternal symbol of unyielding love.",
        zh: "白素贞拒绝放弃真爱，她释放出强大的法力，召唤巨浪水淹了著名的金山寺。尽管她最终被降伏并镇压在雷峰塔下，但她那为了爱奋起斗争的坚贞依然成为不屈爱情的永恒象征。"
      }
    ]
  },
  {
    id: "shennong-tastes-hundred-herbs",
    titleEn: "Shennong Tastes a Hundred Herbs: The Origin of Medicine",
    titleZh: "神农尝百草：医药的起源",
    excerptEn: "The inspiring journey of Shennong, the legendary Emperor of Yan, who risked his own life tasting unknown wild plants to invent traditional Chinese medicine.",
    excerptZh: "神农（传奇的炎帝）令人钦佩的旅程，他冒着生命危险品尝未知的野草，从而开创了中医。",
    coverImage: "/images/ShennongTastesaHundredHerbs.webp",
    coverImageAltEn: "Various dried herbs, roots, and green leaves scattered on a wooden table.",
    coverImageAltZh: "散落在木制桌子上的各种干草药、根块和绿叶。",
    publishDate: "2024-03-28",
    content: [
      {
        en: "Shennong, known as the Divine Farmer and recognized historically as the Yan Emperor, was deeply distressed by the suffering of all his people, who were frequently dying from starvation and curable illnesses in ancient times.",
        zh: "神农，被称为“神农氏”，同时在历史上也被尊崇为炎帝。他对于上古时期人民遭受的苦难感到痛心疾首，看到百姓频繁死于饥饿和本可治愈的疾病之中。"
      },
      {
        en: "To solve the food crisis, Shennong first invented the wooden plow and taught people the revolutionary art of agriculture, cultivating five essential grains so they no longer exclusively relied on hunting dangerous beasts.",
        zh: "为了解决粮食危机，神农首先发明了木犁，并将这具有革命性意义的农业技术传授给了人们，教他们种植五谷，使百姓不再完全依赖冒着危险去打猎。"
      },
      {
        en: "Yet, rampant diseases remained a great obstacle. Determined to find effective cures, Shennong ventured into deep mountains and remote ancient forests wielding a mythical red whip. He struck plants; judging by their color and scent, he identified medicinal herbs.",
        zh: "尽管如此，肆虐的疾病仍然是巨大的阻碍。神农下定决心寻找有效的治疗方法，他手持一根神奇的赭石神鞭深入深山老林。他用鞭子抽打植物，通过观察它们的颜色和气味来辨认草药。"
      },
      {
        en: "He courageously tasted every plant personally to determine its specific medical properties. Through agonizing trial and error, it is famously said he was once dangerously poisoned over seventy times in a single day.",
        zh: "他勇敢地亲自品尝每一株植物，以确定其具体的药理属性。通过这段痛苦艰难的试错过程，一直流传着他曾经在一天之内危险中毒七十多次的著名说法。"
      },
      {
        en: "According to legends, he survived these deadly poisons by hastily consuming magical tea leaves that swept his body clean. Through his immense self-sacrifice, the classic foundations of Chinese herbal medicine were definitively established forever.",
        zh: "依据传说记载，通过迅速吞下具有解毒功效的灵茶树叶，将体内的毒素清除，他才一次次死里逃生。正是凭借他这种极大的自我牺牲精神，中国草药医学的经典基础得以被永恒地确立。"
      }
    ]
  }
];
