// ===== Multi-language Translations =====
const translations = {
    // 简体中文
    'zh-CN': {
        code: 'zh-CN',
        name: '简体中文',
        dir: 'ltr',
        
        // Navigation
        nav_about: '关于我们',
        nav_business: '业务板块',
        nav_team: '我们的团队',
        nav_join: '加入我们',
        
        // Hero Section
        hero_company: '北京首旅慧联科技',
        hero_slogan: '寻找同路人，一起走夜路',
        hero_subtitle: '首旅集团创立并控股的科技型企业 · 国家高新技术企业 · 专精特新企业',
        hero_stat1_num: '100+',
        hero_stat1_label: '在职员工',
        hero_stat2_num: '30',
        hero_stat2_label: '平均年龄',
        hero_stat3_num: '80%',
        hero_stat3_label: '来自互联网大厂',
        hero_cta: '立即加入',
        hero_scroll: '向下滚动',
        
        // About Section
        about_tag: '01',
        about_title: '我们是谁',
        about_lead: '北京首旅慧联科技有限责任公司，由<strong>首旅集团</strong>创立并控股的科技型企业，已获得多轮融资，是具有国企属性的互联网平台型企业。',
        about_text: '公司成立于2019年，目前主要有<span class="highlight">生鲜电商</span>、<span class="highlight">本地生活</span>、<span class="highlight">数字化与AI创新</span>、<span class="highlight">MCN基地</span>四大业务板块。',
        
        about_card1_title: '股权结构',
        about_card1_item1: '首旅集团占股 <strong>63%</strong>',
        about_card1_item2: '京东集团占股 <strong>30%</strong>',
        about_card1_item3: '员工持股平台占股 <strong>7%</strong>',
        
        about_card2_title: '资质荣誉',
        about_card2_item1: '国家高新技术企业',
        about_card2_item2: '专精特新资质企业',
        about_card2_item3: '网络文化经营许可证',
        
        about_card3_title: '合作伙伴',
        about_card3_item1: '抖音平台全国最大文旅服务商',
        about_card3_item2: '北京市国资系统首批抖音合作',
        about_card3_item3: '深入混改标杆企业',
        
        btg_title: '背靠首旅集团，基础资源盘面丰富',
        btg_desc: '首旅集团是中国最大的文旅服务集团之一，北京市属国企和北京市首家国有资本投资公司试点企业',
        btg_stat1_num: '3',
        btg_stat1_label: '上市公司',
        btg_stat2_num: '160',
        btg_stat2_label: '知名品牌',
        btg_stat3_num: '1000亿+',
        btg_stat3_label: '资产规模',
        btg_stat4_num: '7000+',
        btg_stat4_label: '实体门店',
        btg_stat5_num: '400+',
        btg_stat5_label: '覆盖城市',
        btg_stat6_num: '3亿',
        btg_stat6_label: '年客流量',
        
        // Video Section
        video_tag: '精彩视频',
        video_title: '感受我们的活力',
        video_desc: '通过视频了解首旅慧科的精彩日常',
        video_platform: '抖音官方账号',
        video_info_title: '首旅慧科精彩瞬间',
        video_info_desc: '作为抖音平台全国最大的文旅服务商，我们用创意和热情记录每一个精彩时刻。点击播放，感受首旅慧科的活力与激情！',
        video_stat_views: '播放量',
        video_stat_likes: '点赞',
        video_stat_comments: '评论',
        video_play_hint: '点击播放',
        
        // Business Section
        business_tag: '02',
        business_title: '我们的业务',
        business_desc: '做最懂行业的数字化服务商',
        business_vision1_label: '长期投入',
        business_vision1_text: '深耕消费领域，致力文旅融合，立足产研一体',
        business_vision2_label: '核心要素',
        business_vision2_text: '流量运营 · 供应链改造 · AI与数据驱动',
        
        business_card1_title: '电商事业部',
        business_card1_goal: '以"全球食材良品"为目标，打造数字化供应链和全渠道运营能力',
        business_card1_feature1: '以东来顺、月盛斋、顺鑫等老字号为切入',
        business_card1_feature2: '拓展合作品牌品类，拥有臻选客等自有品牌',
        business_card1_feature3: '主打原产地模式，扩充海外供应链',
        
        business_card2_title: '本地生活事业部',
        business_card2_goal: '以酒旅业态为核心，打造城市消费新热潮',
        business_card2_feature1: '北京环球影城、万达酒店、凯宾斯基等头部品牌',
        business_card2_feature2: '赛特奥莱、京津冀各区域政府景区资源',
        business_card2_feature3: '以抖音为主，拓展小红书、视频号、快手等平台',
        
        business_card3_title: '新技术与创新事业部',
        business_card3_goal: '自研"资源+内容"供应链双核心技术体系',
        business_card3_feature1: '文旅垂直领域大语言模型"盘道"',
        business_card3_feature2: '丰富的AI落地应用场景',
        business_card3_feature3: '强大的外部技术合作方，项目制模式快速验证',
        
        business_card4_title: 'MCN中心',
        business_card4_goal: '依托强大供应链，为品牌方做全域运营',
        business_card4_feature1: '打造本地吃喝玩乐游购娱专业账号矩阵',
        business_card4_feature2: '建设自有IP，内容创新驱动',
        business_card4_feature3: '线上线下融合的商超模式，ICELAND品牌中国首店',
        
        ai_badge: 'AI + 景区',
        ai_title: '首旅慧科投身"景区+AI"赛道是必由之路',
        ai_desc: '二年内实现全面无人化经营，未来可输出给传统商业的样板',
        ai_tag1: '无人直播',
        ai_tag2: '无人售货',
        ai_tag3: '无人运营',
        
        // Team Section
        team_tag: '03',
        team_title: '我们的团队',
        team_intro: '我们具有<strong>开放的企业文化</strong>，<strong>市场化的薪酬与激励体系</strong>，<strong>充分的个人发展机制和空间</strong>，希望寻找踏实专业、坚韧务实，拥有创业精神的伙伴加入，与公司一起成长！',
        
        value1_title: '自驱力强',
        value1_desc: '有责任心，有担当，勇于打破舒适区，把实现自我价值和实现组织目标相结合',
        value2_title: '追求极致',
        value2_desc: '不断探索新的赛道与目标，不断提高对自己的要求，做到持续成长',
        value3_title: '敢为人先',
        value3_desc: '尝试多种可能，不断迭代，主动更新自己的认知边界',
        value4_title: '坚韧务实',
        value4_desc: '挫折与坎坷是经验与财富，坚定初心的同时不断总结反思，实现突破和蜕变',
        value5_title: '简单纯粹',
        value5_desc: '不搞小团体与亚文化，心怀真诚，做事坦荡，营造温暖的团队氛围',
        value6_title: '开放包容',
        value6_desc: '格局打开，海纳百川，信任伙伴，乐于合作，谦虚谨慎',
        
        // Join Section
        join_tag: '04',
        join_title: '加入我们',
        join_desc: '与慧科一起成长',
        
        benefits_title: '福利待遇',
        benefit1: '标准五险一金、补充医疗保险',
        benefit2: '年终奖金、提成激励',
        benefit3: '免费三餐',
        benefit4: '年度体检',
        benefit5: '生日会、员工活动',
        
        development_title: '个人发展',
        development1: '专业、管理双通道职业路径',
        development2: '内外部培训、员工成长体系',
        development3: '轮岗机制、充分的发展空间',
        development4: '骨干员工择优入伙持股',
        development5: '工作居住证、北京落户指标',
        
        location_title: '办公地点',
        location_address: '北京市朝阳区雅宝路10号11层',
        location_feature1: '坐落于北京市东二环建国门核心商圈',
        location_feature2: '毗邻地铁1号线/2号线/6号线-建国门站/朝阳门站',
        location_feature3: '公共交通便利，公司内各项设施齐全',
        location_map: '建国门核心商圈',
        
        cta_title: '我们不care工作年限',
        cta_desc: '只需要"你"拥有简单纯粹、踏实专业、坚韧务实的品质',
        cta_highlight: '期待你的加入！',
        
        // Footer
        footer_company: '北京首旅慧联科技有限责任公司',
        footer_copyright: '© 2024 北京首旅慧联科技有限责任公司 版权所有',
        
        // Page Title
        page_title: '北京首旅慧联科技 - 加入我们'
    },
    
    // English
    'en': {
        code: 'en',
        name: 'English',
        dir: 'ltr',
        
        nav_about: 'About Us',
        nav_business: 'Business',
        nav_team: 'Our Team',
        nav_join: 'Join Us',
        
        hero_company: 'BTG Huilink Technology',
        hero_slogan: 'Finding Fellow Travelers on the Journey',
        hero_subtitle: 'A tech company founded and controlled by BTG Group · National High-Tech Enterprise · Specialized & Innovative Enterprise',
        hero_stat1_num: '100+',
        hero_stat1_label: 'Employees',
        hero_stat2_num: '30',
        hero_stat2_label: 'Average Age',
        hero_stat3_num: '80%',
        hero_stat3_label: 'From Top Tech Companies',
        hero_cta: 'Join Now',
        hero_scroll: 'Scroll Down',
        
        about_tag: '01',
        about_title: 'Who We Are',
        about_lead: 'Beijing BTG Huilink Technology Co., Ltd., a technology company founded and controlled by <strong>BTG Group</strong>, has received multiple rounds of financing and is an internet platform enterprise with state-owned enterprise attributes.',
        about_text: 'Founded in 2019, the company currently has four major business segments: <span class="highlight">Fresh E-commerce</span>, <span class="highlight">Local Life Services</span>, <span class="highlight">Digital & AI Innovation</span>, and <span class="highlight">MCN Base</span>.',
        
        about_card1_title: 'Ownership Structure',
        about_card1_item1: 'BTG Group holds <strong>63%</strong>',
        about_card1_item2: 'JD Group holds <strong>30%</strong>',
        about_card1_item3: 'Employee stock platform holds <strong>7%</strong>',
        
        about_card2_title: 'Qualifications & Honors',
        about_card2_item1: 'National High-Tech Enterprise',
        about_card2_item2: 'Specialized & Innovative Enterprise',
        about_card2_item3: 'Internet Culture Business License',
        
        about_card3_title: 'Partners',
        about_card3_item1: 'Largest travel service provider on Douyin platform',
        about_card3_item2: 'First Douyin partner in Beijing State-owned Assets',
        about_card3_item3: 'Benchmark enterprise for mixed ownership reform',
        
        btg_title: 'Backed by BTG Group with Rich Resources',
        btg_desc: 'BTG Group is one of the largest cultural tourism service groups in China, a Beijing municipal state-owned enterprise and the first pilot enterprise for state-owned capital investment company in Beijing',
        btg_stat1_num: '3',
        btg_stat1_label: 'Listed Companies',
        btg_stat2_num: '160',
        btg_stat2_label: 'Famous Brands',
        btg_stat3_num: '100B+',
        btg_stat3_label: 'Asset Scale (CNY)',
        btg_stat4_num: '7000+',
        btg_stat4_label: 'Physical Stores',
        btg_stat5_num: '400+',
        btg_stat5_label: 'Cities Covered',
        btg_stat6_num: '300M',
        btg_stat6_label: 'Annual Visitors',
        
        // Video Section
        video_tag: 'Featured Video',
        video_title: 'Feel Our Energy',
        video_desc: 'Discover the exciting daily life at BTG Huilink through video',
        video_platform: 'Official Douyin Account',
        video_info_title: 'BTG Huilink Highlights',
        video_info_desc: 'As the largest travel service provider on Douyin, we capture every exciting moment with creativity and passion. Click to play and feel the energy of BTG Huilink!',
        video_stat_views: 'Views',
        video_stat_likes: 'Likes',
        video_stat_comments: 'Comments',
        video_play_hint: 'Click to Play',
        
        business_tag: '02',
        business_title: 'Our Business',
        business_desc: 'The most industry-savvy digital service provider',
        business_vision1_label: 'Long-term Investment',
        business_vision1_text: 'Deep focus on consumption, committed to cultural tourism integration',
        business_vision2_label: 'Core Elements',
        business_vision2_text: 'Traffic operation · Supply chain transformation · AI & Data driven',
        
        business_card1_title: 'E-commerce Division',
        business_card1_goal: 'Building digital supply chain and omni-channel capabilities with "Global Quality Food" as the goal',
        business_card1_feature1: 'Starting with time-honored brands like Donglaishun, Yueshengzhai',
        business_card1_feature2: 'Expanding partner brands with own brands like Zhenxuanke',
        business_card1_feature3: 'Origin-based model, expanding overseas supply chain',
        
        business_card2_title: 'Local Life Division',
        business_card2_goal: 'Creating new urban consumption trends with hotel & travel as the core',
        business_card2_feature1: 'Top brands including Universal Beijing Resort, Wanda Hotels',
        business_card2_feature2: 'Scitech Outlet, regional government scenic resources',
        business_card2_feature3: 'Expanding to Xiaohongshu, Video Account, Kuaishou platforms',
        
        business_card3_title: 'Tech & Innovation Division',
        business_card3_goal: 'Self-developed "Resource + Content" dual-core technology system',
        business_card3_feature1: 'Tourism vertical LLM "Pandao"',
        business_card3_feature2: 'Rich AI application scenarios',
        business_card3_feature3: 'Strong external tech partners, rapid project validation',
        
        business_card4_title: 'MCN Center',
        business_card4_goal: 'Full-domain operations for brands with strong supply chain support',
        business_card4_feature1: 'Building professional account matrix for local lifestyle',
        business_card4_feature2: 'Building own IPs, content-driven innovation',
        business_card4_feature3: 'Online-offline integrated retail, ICELAND China first store',
        
        ai_badge: 'AI + Scenic Area',
        ai_title: 'BTG Huilink embraces the "Scenic Area + AI" track',
        ai_desc: 'Achieving fully unmanned operations within two years, a model for traditional businesses',
        ai_tag1: 'Unmanned Live',
        ai_tag2: 'Unmanned Retail',
        ai_tag3: 'Unmanned Operations',
        
        team_tag: '03',
        team_title: 'Our Team',
        team_intro: 'We have an <strong>open corporate culture</strong>, <strong>market-oriented compensation system</strong>, and <strong>ample personal development space</strong>. We are looking for practical, professional, resilient and entrepreneurial partners to grow with us!',
        
        value1_title: 'Self-Driven',
        value1_desc: 'Responsible, brave to break comfort zone, aligning personal and organizational goals',
        value2_title: 'Pursuit of Excellence',
        value2_desc: 'Constantly exploring new tracks and goals, raising standards for continuous growth',
        value3_title: 'Pioneer Spirit',
        value3_desc: 'Try multiple possibilities, iterate constantly, actively update cognitive boundaries',
        value4_title: 'Resilient & Practical',
        value4_desc: 'Setbacks are experiences and wealth, reflection while staying true to achieve breakthroughs',
        value5_title: 'Simple & Pure',
        value5_desc: 'No cliques, sincere and transparent, creating a warm team atmosphere',
        value6_title: 'Open & Inclusive',
        value6_desc: 'Broad-minded, trusting partners, willing to cooperate, humble and cautious',
        
        join_tag: '04',
        join_title: 'Join Us',
        join_desc: 'Grow with Huike',
        
        benefits_title: 'Benefits',
        benefit1: 'Standard social insurance and housing fund',
        benefit2: 'Year-end bonus, commission incentives',
        benefit3: 'Free three meals',
        benefit4: 'Annual health check',
        benefit5: 'Birthday parties, team activities',
        
        development_title: 'Career Development',
        development1: 'Dual-track career path: professional & management',
        development2: 'Internal & external training system',
        development3: 'Job rotation, ample development space',
        development4: 'Key employees eligible for equity participation',
        development5: 'Beijing work residence permit & Hukou quota',
        
        location_title: 'Office Location',
        location_address: '11F, No.10 Yabao Road, Chaoyang District, Beijing',
        location_feature1: 'Located in Jianguomen core business district',
        location_feature2: 'Adjacent to Metro Line 1/2/6 - Jianguomen/Chaoyangmen Station',
        location_feature3: 'Convenient public transportation, complete facilities',
        location_map: 'Jianguomen Business District',
        
        cta_title: 'We don\'t care about years of experience',
        cta_desc: 'We only need "you" with simple, professional, and resilient qualities',
        cta_highlight: 'Looking forward to you joining us!',
        
        footer_company: 'Beijing BTG Huilink Technology Co., Ltd.',
        footer_copyright: '© 2024 Beijing BTG Huilink Technology Co., Ltd. All Rights Reserved',
        
        page_title: 'BTG Huilink Technology - Join Us'
    },
    
    // Español (Spanish)
    'es': {
        code: 'es',
        name: 'Español',
        dir: 'ltr',
        
        nav_about: 'Nosotros',
        nav_business: 'Negocios',
        nav_team: 'Equipo',
        nav_join: 'Únete',
        
        hero_company: 'BTG Huilink Technology',
        hero_slogan: 'Buscando Compañeros de Viaje',
        hero_subtitle: 'Empresa tecnológica fundada por BTG Group · Empresa Nacional de Alta Tecnología · Empresa Especializada e Innovadora',
        hero_stat1_num: '100+',
        hero_stat1_label: 'Empleados',
        hero_stat2_num: '30',
        hero_stat2_label: 'Edad Promedio',
        hero_stat3_num: '80%',
        hero_stat3_label: 'De Grandes Empresas Tech',
        hero_cta: 'Únete Ahora',
        hero_scroll: 'Desplázate',
        
        about_tag: '01',
        about_title: 'Quiénes Somos',
        about_lead: 'Beijing BTG Huilink Technology Co., Ltd., una empresa tecnológica fundada y controlada por <strong>BTG Group</strong>, ha recibido múltiples rondas de financiación y es una plataforma de internet con atributos de empresa estatal.',
        about_text: 'Fundada en 2019, la empresa cuenta con cuatro segmentos principales: <span class="highlight">E-commerce de Alimentos Frescos</span>, <span class="highlight">Servicios de Vida Local</span>, <span class="highlight">Innovación Digital e IA</span> y <span class="highlight">Base MCN</span>.',
        
        about_card1_title: 'Estructura Accionaria',
        about_card1_item1: 'BTG Group posee <strong>63%</strong>',
        about_card1_item2: 'JD Group posee <strong>30%</strong>',
        about_card1_item3: 'Plataforma de empleados posee <strong>7%</strong>',
        
        about_card2_title: 'Calificaciones y Honores',
        about_card2_item1: 'Empresa Nacional de Alta Tecnología',
        about_card2_item2: 'Empresa Especializada e Innovadora',
        about_card2_item3: 'Licencia de Negocios Culturales de Internet',
        
        about_card3_title: 'Socios',
        about_card3_item1: 'Mayor proveedor de servicios turísticos en Douyin',
        about_card3_item2: 'Primer socio de Douyin en activos estatales de Beijing',
        about_card3_item3: 'Empresa referente en reforma de propiedad mixta',
        
        btg_title: 'Respaldados por BTG Group con Recursos Abundantes',
        btg_desc: 'BTG Group es uno de los mayores grupos de servicios turísticos culturales de China, empresa estatal de Beijing y primera empresa piloto de inversión de capital estatal',
        btg_stat1_num: '3',
        btg_stat1_label: 'Empresas Cotizadas',
        btg_stat2_num: '160',
        btg_stat2_label: 'Marcas Famosas',
        btg_stat3_num: '100B+',
        btg_stat3_label: 'Escala de Activos (CNY)',
        btg_stat4_num: '7000+',
        btg_stat4_label: 'Tiendas Físicas',
        btg_stat5_num: '400+',
        btg_stat5_label: 'Ciudades Cubiertas',
        btg_stat6_num: '300M',
        btg_stat6_label: 'Visitantes Anuales',
        
        // Video Section
        video_tag: 'Video Destacado',
        video_title: 'Siente Nuestra Energía',
        video_desc: 'Descubre la emocionante vida diaria en BTG Huilink a través de video',
        video_platform: 'Cuenta Oficial de Douyin',
        video_info_title: 'Momentos BTG Huilink',
        video_info_desc: 'Como el mayor proveedor de servicios turísticos en Douyin, capturamos cada momento emocionante con creatividad y pasión. ¡Haz clic para reproducir y siente la energía!',
        video_stat_views: 'Vistas',
        video_stat_likes: 'Me gusta',
        video_stat_comments: 'Comentarios',
        video_play_hint: 'Clic para Reproducir',
        
        business_tag: '02',
        business_title: 'Nuestros Negocios',
        business_desc: 'El proveedor de servicios digitales más conocedor de la industria',
        business_vision1_label: 'Inversión a Largo Plazo',
        business_vision1_text: 'Enfoque profundo en consumo, integración de turismo cultural',
        business_vision2_label: 'Elementos Clave',
        business_vision2_text: 'Operación de tráfico · Transformación de cadena de suministro · IA y datos',
        
        business_card1_title: 'División de E-commerce',
        business_card1_goal: 'Construyendo cadena de suministro digital con "Alimentos Globales de Calidad"',
        business_card1_feature1: 'Comenzando con marcas tradicionales como Donglaishun',
        business_card1_feature2: 'Expandiendo marcas asociadas con marcas propias',
        business_card1_feature3: 'Modelo de origen, expandiendo cadena de suministro internacional',
        
        business_card2_title: 'División de Vida Local',
        business_card2_goal: 'Creando nuevas tendencias de consumo urbano con hotel y viajes',
        business_card2_feature1: 'Marcas líderes incluyendo Universal Beijing Resort',
        business_card2_feature2: 'Recursos turísticos regionales gubernamentales',
        business_card2_feature3: 'Expandiendo a otras plataformas sociales',
        
        business_card3_title: 'División de Tecnología e Innovación',
        business_card3_goal: 'Sistema tecnológico de doble núcleo "Recurso + Contenido"',
        business_card3_feature1: 'LLM vertical de turismo "Pandao"',
        business_card3_feature2: 'Escenarios ricos de aplicación de IA',
        business_card3_feature3: 'Socios tecnológicos fuertes, validación rápida de proyectos',
        
        business_card4_title: 'Centro MCN',
        business_card4_goal: 'Operaciones de dominio completo para marcas',
        business_card4_feature1: 'Construyendo matriz de cuentas profesionales',
        business_card4_feature2: 'Construyendo IPs propios, innovación de contenido',
        business_card4_feature3: 'Retail integrado online-offline, primera tienda ICELAND en China',
        
        ai_badge: 'IA + Área Turística',
        ai_title: 'BTG Huilink abraza la pista "Área Turística + IA"',
        ai_desc: 'Logrando operaciones completamente automatizadas en dos años',
        ai_tag1: 'Live Sin Personal',
        ai_tag2: 'Retail Sin Personal',
        ai_tag3: 'Operaciones Sin Personal',
        
        team_tag: '03',
        team_title: 'Nuestro Equipo',
        team_intro: 'Tenemos una <strong>cultura corporativa abierta</strong>, <strong>sistema de compensación orientado al mercado</strong> y <strong>amplio espacio de desarrollo personal</strong>. ¡Buscamos socios prácticos, profesionales y emprendedores para crecer juntos!',
        
        value1_title: 'Automotivado',
        value1_desc: 'Responsable, valiente para salir de la zona de confort, alineando metas personales y organizacionales',
        value2_title: 'Búsqueda de Excelencia',
        value2_desc: 'Explorando constantemente nuevas metas, elevando estándares para crecimiento continuo',
        value3_title: 'Espíritu Pionero',
        value3_desc: 'Probar múltiples posibilidades, iterar constantemente, actualizar límites cognitivos',
        value4_title: 'Resiliente y Práctico',
        value4_desc: 'Los contratiempos son experiencias y riqueza, reflexión mientras se mantiene fiel',
        value5_title: 'Simple y Puro',
        value5_desc: 'Sin grupos cerrados, sincero y transparente, creando ambiente cálido de equipo',
        value6_title: 'Abierto e Inclusivo',
        value6_desc: 'Mente abierta, confiando en compañeros, dispuesto a cooperar, humilde y prudente',
        
        join_tag: '04',
        join_title: 'Únete a Nosotros',
        join_desc: 'Crece con Huike',
        
        benefits_title: 'Beneficios',
        benefit1: 'Seguro social estándar y fondo de vivienda',
        benefit2: 'Bono anual, incentivos por comisión',
        benefit3: 'Tres comidas gratis',
        benefit4: 'Chequeo médico anual',
        benefit5: 'Fiestas de cumpleaños, actividades de equipo',
        
        development_title: 'Desarrollo Profesional',
        development1: 'Carrera de doble vía: profesional y gestión',
        development2: 'Sistema de capacitación interna y externa',
        development3: 'Rotación de puestos, amplio espacio de desarrollo',
        development4: 'Empleados clave elegibles para participación accionaria',
        development5: 'Permiso de residencia laboral de Beijing',
        
        location_title: 'Ubicación de Oficina',
        location_address: 'Piso 11, No.10 Yabao Road, Distrito Chaoyang, Beijing',
        location_feature1: 'Ubicado en el distrito comercial central de Jianguomen',
        location_feature2: 'Adyacente a la estación de Metro Línea 1/2/6',
        location_feature3: 'Transporte público conveniente, instalaciones completas',
        location_map: 'Distrito Comercial Jianguomen',
        
        cta_title: 'No nos importan los años de experiencia',
        cta_desc: 'Solo necesitamos que "tú" tengas cualidades simples, profesionales y resilientes',
        cta_highlight: '¡Esperamos que te unas!',
        
        footer_company: 'Beijing BTG Huilink Technology Co., Ltd.',
        footer_copyright: '© 2024 Beijing BTG Huilink Technology Co., Ltd. Todos los Derechos Reservados',
        
        page_title: 'BTG Huilink Technology - Únete a Nosotros'
    },
    
    // Português (Portuguese)
    'pt': {
        code: 'pt',
        name: 'Português',
        dir: 'ltr',
        
        nav_about: 'Sobre Nós',
        nav_business: 'Negócios',
        nav_team: 'Equipe',
        nav_join: 'Junte-se',
        
        hero_company: 'BTG Huilink Technology',
        hero_slogan: 'Encontrando Companheiros de Jornada',
        hero_subtitle: 'Empresa de tecnologia fundada pelo BTG Group · Empresa Nacional de Alta Tecnologia · Empresa Especializada e Inovadora',
        hero_stat1_num: '100+',
        hero_stat1_label: 'Funcionários',
        hero_stat2_num: '30',
        hero_stat2_label: 'Idade Média',
        hero_stat3_num: '80%',
        hero_stat3_label: 'De Grandes Empresas Tech',
        hero_cta: 'Junte-se Agora',
        hero_scroll: 'Role para Baixo',
        
        about_tag: '01',
        about_title: 'Quem Somos',
        about_lead: 'Beijing BTG Huilink Technology Co., Ltd., uma empresa de tecnologia fundada e controlada pelo <strong>BTG Group</strong>, recebeu múltiplas rodadas de financiamento e é uma plataforma de internet com atributos de empresa estatal.',
        about_text: 'Fundada em 2019, a empresa possui quatro segmentos principais: <span class="highlight">E-commerce de Alimentos Frescos</span>, <span class="highlight">Serviços de Vida Local</span>, <span class="highlight">Inovação Digital e IA</span> e <span class="highlight">Base MCN</span>.',
        
        about_card1_title: 'Estrutura Acionária',
        about_card1_item1: 'BTG Group detém <strong>63%</strong>',
        about_card1_item2: 'JD Group detém <strong>30%</strong>',
        about_card1_item3: 'Plataforma de funcionários detém <strong>7%</strong>',
        
        about_card2_title: 'Qualificações e Honras',
        about_card2_item1: 'Empresa Nacional de Alta Tecnologia',
        about_card2_item2: 'Empresa Especializada e Inovadora',
        about_card2_item3: 'Licença de Negócios Culturais de Internet',
        
        about_card3_title: 'Parceiros',
        about_card3_item1: 'Maior provedor de serviços turísticos no Douyin',
        about_card3_item2: 'Primeiro parceiro Douyin em ativos estatais de Beijing',
        about_card3_item3: 'Empresa referência em reforma de propriedade mista',
        
        btg_title: 'Apoiados pelo BTG Group com Recursos Abundantes',
        btg_desc: 'O BTG Group é um dos maiores grupos de serviços turísticos culturais da China, empresa estatal de Beijing e primeira empresa piloto de investimento de capital estatal',
        btg_stat1_num: '3',
        btg_stat1_label: 'Empresas Listadas',
        btg_stat2_num: '160',
        btg_stat2_label: 'Marcas Famosas',
        btg_stat3_num: '100B+',
        btg_stat3_label: 'Escala de Ativos (CNY)',
        btg_stat4_num: '7000+',
        btg_stat4_label: 'Lojas Físicas',
        btg_stat5_num: '400+',
        btg_stat5_label: 'Cidades Cobertas',
        btg_stat6_num: '300M',
        btg_stat6_label: 'Visitantes Anuais',
        
        // Video Section
        video_tag: 'Vídeo em Destaque',
        video_title: 'Sinta Nossa Energia',
        video_desc: 'Descubra a emocionante vida diária na BTG Huilink através de vídeo',
        video_platform: 'Conta Oficial do Douyin',
        video_info_title: 'Momentos BTG Huilink',
        video_info_desc: 'Como o maior provedor de serviços turísticos no Douyin, capturamos cada momento emocionante com criatividade e paixão. Clique para reproduzir e sinta a energia!',
        video_stat_views: 'Visualizações',
        video_stat_likes: 'Curtidas',
        video_stat_comments: 'Comentários',
        video_play_hint: 'Clique para Reproduzir',
        
        business_tag: '02',
        business_title: 'Nossos Negócios',
        business_desc: 'O provedor de serviços digitais mais conhecedor da indústria',
        business_vision1_label: 'Investimento de Longo Prazo',
        business_vision1_text: 'Foco profundo em consumo, integração de turismo cultural',
        business_vision2_label: 'Elementos Chave',
        business_vision2_text: 'Operação de tráfego · Transformação de cadeia de suprimentos · IA e dados',
        
        business_card1_title: 'Divisão de E-commerce',
        business_card1_goal: 'Construindo cadeia de suprimentos digital com "Alimentos Globais de Qualidade"',
        business_card1_feature1: 'Começando com marcas tradicionais como Donglaishun',
        business_card1_feature2: 'Expandindo marcas parceiras com marcas próprias',
        business_card1_feature3: 'Modelo de origem, expandindo cadeia de suprimentos internacional',
        
        business_card2_title: 'Divisão de Vida Local',
        business_card2_goal: 'Criando novas tendências de consumo urbano com hotel e viagens',
        business_card2_feature1: 'Marcas líderes incluindo Universal Beijing Resort',
        business_card2_feature2: 'Recursos turísticos regionais governamentais',
        business_card2_feature3: 'Expandindo para outras plataformas sociais',
        
        business_card3_title: 'Divisão de Tecnologia e Inovação',
        business_card3_goal: 'Sistema tecnológico de duplo núcleo "Recurso + Conteúdo"',
        business_card3_feature1: 'LLM vertical de turismo "Pandao"',
        business_card3_feature2: 'Cenários ricos de aplicação de IA',
        business_card3_feature3: 'Parceiros tecnológicos fortes, validação rápida de projetos',
        
        business_card4_title: 'Centro MCN',
        business_card4_goal: 'Operações de domínio completo para marcas',
        business_card4_feature1: 'Construindo matriz de contas profissionais',
        business_card4_feature2: 'Construindo IPs próprios, inovação de conteúdo',
        business_card4_feature3: 'Varejo integrado online-offline, primeira loja ICELAND na China',
        
        ai_badge: 'IA + Área Turística',
        ai_title: 'BTG Huilink abraça a pista "Área Turística + IA"',
        ai_desc: 'Alcançando operações totalmente automatizadas em dois anos',
        ai_tag1: 'Live Sem Pessoal',
        ai_tag2: 'Varejo Sem Pessoal',
        ai_tag3: 'Operações Sem Pessoal',
        
        team_tag: '03',
        team_title: 'Nossa Equipe',
        team_intro: 'Temos uma <strong>cultura corporativa aberta</strong>, <strong>sistema de compensação orientado ao mercado</strong> e <strong>amplo espaço de desenvolvimento pessoal</strong>. Procuramos parceiros práticos, profissionais e empreendedores para crescer juntos!',
        
        value1_title: 'Automotivado',
        value1_desc: 'Responsável, corajoso para sair da zona de conforto, alinhando metas pessoais e organizacionais',
        value2_title: 'Busca da Excelência',
        value2_desc: 'Explorando constantemente novas metas, elevando padrões para crescimento contínuo',
        value3_title: 'Espírito Pioneiro',
        value3_desc: 'Tentar múltiplas possibilidades, iterar constantemente, atualizar limites cognitivos',
        value4_title: 'Resiliente e Prático',
        value4_desc: 'Contratempos são experiências e riqueza, reflexão enquanto se mantém fiel',
        value5_title: 'Simples e Puro',
        value5_desc: 'Sem grupos fechados, sincero e transparente, criando ambiente caloroso de equipe',
        value6_title: 'Aberto e Inclusivo',
        value6_desc: 'Mente aberta, confiando em companheiros, disposto a cooperar, humilde e prudente',
        
        join_tag: '04',
        join_title: 'Junte-se a Nós',
        join_desc: 'Cresça com Huike',
        
        benefits_title: 'Benefícios',
        benefit1: 'Seguro social padrão e fundo de habitação',
        benefit2: 'Bônus anual, incentivos por comissão',
        benefit3: 'Três refeições grátis',
        benefit4: 'Check-up médico anual',
        benefit5: 'Festas de aniversário, atividades de equipe',
        
        development_title: 'Desenvolvimento de Carreira',
        development1: 'Carreira de dupla via: profissional e gestão',
        development2: 'Sistema de treinamento interno e externo',
        development3: 'Rotação de cargos, amplo espaço de desenvolvimento',
        development4: 'Funcionários chave elegíveis para participação acionária',
        development5: 'Permissão de residência de trabalho de Beijing',
        
        location_title: 'Localização do Escritório',
        location_address: '11º Andar, No.10 Yabao Road, Distrito Chaoyang, Beijing',
        location_feature1: 'Localizado no distrito comercial central de Jianguomen',
        location_feature2: 'Adjacente à estação de Metrô Linha 1/2/6',
        location_feature3: 'Transporte público conveniente, instalações completas',
        location_map: 'Distrito Comercial Jianguomen',
        
        cta_title: 'Não nos importamos com anos de experiência',
        cta_desc: 'Só precisamos que "você" tenha qualidades simples, profissionais e resilientes',
        cta_highlight: 'Esperamos que você se junte!',
        
        footer_company: 'Beijing BTG Huilink Technology Co., Ltd.',
        footer_copyright: '© 2024 Beijing BTG Huilink Technology Co., Ltd. Todos os Direitos Reservados',
        
        page_title: 'BTG Huilink Technology - Junte-se a Nós'
    },
    
    // العربية (Arabic) - RTL
    'ar': {
        code: 'ar',
        name: 'العربية',
        dir: 'rtl',
        
        nav_about: 'من نحن',
        nav_business: 'أعمالنا',
        nav_team: 'فريقنا',
        nav_join: 'انضم إلينا',
        
        hero_company: 'بي تي جي هويلينك للتكنولوجيا',
        hero_slogan: 'نبحث عن رفاق الطريق',
        hero_subtitle: 'شركة تقنية أسستها مجموعة BTG · مؤسسة وطنية للتقنية العالية · مؤسسة متخصصة ومبتكرة',
        hero_stat1_num: '+100',
        hero_stat1_label: 'موظف',
        hero_stat2_num: '30',
        hero_stat2_label: 'متوسط العمر',
        hero_stat3_num: '80%',
        hero_stat3_label: 'من شركات التقنية الكبرى',
        hero_cta: 'انضم الآن',
        hero_scroll: 'مرر للأسفل',
        
        about_tag: '01',
        about_title: 'من نحن',
        about_lead: 'شركة بكين BTG هويلينك للتكنولوجيا المحدودة، شركة تقنية أسستها وتسيطر عليها <strong>مجموعة BTG</strong>، حصلت على جولات تمويل متعددة وهي منصة إنترنت ذات سمات المؤسسات الحكومية.',
        about_text: 'تأسست في 2019، تمتلك الشركة أربعة قطاعات رئيسية: <span class="highlight">التجارة الإلكترونية للأغذية الطازجة</span>، <span class="highlight">خدمات الحياة المحلية</span>، <span class="highlight">الابتكار الرقمي والذكاء الاصطناعي</span> و <span class="highlight">قاعدة MCN</span>.',
        
        about_card1_title: 'هيكل الملكية',
        about_card1_item1: 'مجموعة BTG تمتلك <strong>63%</strong>',
        about_card1_item2: 'مجموعة JD تمتلك <strong>30%</strong>',
        about_card1_item3: 'منصة أسهم الموظفين تمتلك <strong>7%</strong>',
        
        about_card2_title: 'المؤهلات والتكريمات',
        about_card2_item1: 'مؤسسة وطنية للتقنية العالية',
        about_card2_item2: 'مؤسسة متخصصة ومبتكرة',
        about_card2_item3: 'رخصة الأعمال الثقافية عبر الإنترنت',
        
        about_card3_title: 'الشركاء',
        about_card3_item1: 'أكبر مزود خدمات سياحية على منصة دويين',
        about_card3_item2: 'أول شريك دويين في أصول بكين الحكومية',
        about_card3_item3: 'مؤسسة مرجعية في إصلاح الملكية المختلطة',
        
        btg_title: 'مدعومة بمجموعة BTG بموارد غنية',
        btg_desc: 'مجموعة BTG هي واحدة من أكبر مجموعات خدمات السياحة الثقافية في الصين، مؤسسة حكومية في بكين وأول شركة تجريبية لاستثمار رأس المال الحكومي',
        btg_stat1_num: '3',
        btg_stat1_label: 'شركات مدرجة',
        btg_stat2_num: '160',
        btg_stat2_label: 'علامة تجارية شهيرة',
        btg_stat3_num: '+100B',
        btg_stat3_label: 'حجم الأصول (يوان)',
        btg_stat4_num: '+7000',
        btg_stat4_label: 'متجر فعلي',
        btg_stat5_num: '+400',
        btg_stat5_label: 'مدينة مغطاة',
        btg_stat6_num: '300M',
        btg_stat6_label: 'زائر سنوياً',
        
        // Video Section
        video_tag: 'فيديو مميز',
        video_title: 'اشعر بطاقتنا',
        video_desc: 'اكتشف الحياة اليومية المثيرة في BTG Huilink من خلال الفيديو',
        video_platform: 'حساب دويين الرسمي',
        video_info_title: 'لحظات BTG Huilink',
        video_info_desc: 'كأكبر مزود خدمات سياحية على دويين، نلتقط كل لحظة مثيرة بالإبداع والشغف. انقر للتشغيل واشعر بالطاقة!',
        video_stat_views: 'المشاهدات',
        video_stat_likes: 'الإعجابات',
        video_stat_comments: 'التعليقات',
        video_play_hint: 'انقر للتشغيل',
        
        business_tag: '02',
        business_title: 'أعمالنا',
        business_desc: 'مزود الخدمات الرقمية الأكثر معرفة بالصناعة',
        business_vision1_label: 'استثمار طويل الأجل',
        business_vision1_text: 'تركيز عميق على الاستهلاك، التزام بتكامل السياحة الثقافية',
        business_vision2_label: 'العناصر الأساسية',
        business_vision2_text: 'إدارة حركة المرور · تحويل سلسلة التوريد · الذكاء الاصطناعي والبيانات',
        
        business_card1_title: 'قسم التجارة الإلكترونية',
        business_card1_goal: 'بناء سلسلة توريد رقمية مع "الغذاء العالمي عالي الجودة"',
        business_card1_feature1: 'البدء بالعلامات التجارية التقليدية مثل دونغلايشون',
        business_card1_feature2: 'توسيع العلامات الشريكة مع علامات خاصة',
        business_card1_feature3: 'نموذج المنشأ، توسيع سلسلة التوريد الدولية',
        
        business_card2_title: 'قسم الحياة المحلية',
        business_card2_goal: 'خلق اتجاهات استهلاك حضرية جديدة مع الفنادق والسفر',
        business_card2_feature1: 'علامات تجارية رائدة بما في ذلك منتجع يونيفرسال بكين',
        business_card2_feature2: 'موارد سياحية إقليمية حكومية',
        business_card2_feature3: 'التوسع إلى منصات اجتماعية أخرى',
        
        business_card3_title: 'قسم التكنولوجيا والابتكار',
        business_card3_goal: 'نظام تقني ثنائي النواة "المورد + المحتوى"',
        business_card3_feature1: 'نموذج لغوي كبير للسياحة "بانداو"',
        business_card3_feature2: 'سيناريوهات تطبيق ذكاء اصطناعي غنية',
        business_card3_feature3: 'شركاء تقنيين أقوياء، التحقق السريع من المشاريع',
        
        business_card4_title: 'مركز MCN',
        business_card4_goal: 'عمليات كاملة النطاق للعلامات التجارية',
        business_card4_feature1: 'بناء مصفوفة حسابات احترافية',
        business_card4_feature2: 'بناء علامات تجارية خاصة، ابتكار المحتوى',
        business_card4_feature3: 'تجزئة متكاملة عبر الإنترنت وغير متصل، أول متجر آيسلاند في الصين',
        
        ai_badge: 'الذكاء الاصطناعي + المنطقة السياحية',
        ai_title: 'BTG هويلينك تتبنى مسار "المنطقة السياحية + الذكاء الاصطناعي"',
        ai_desc: 'تحقيق عمليات بدون موظفين بالكامل خلال عامين',
        ai_tag1: 'بث مباشر بدون موظفين',
        ai_tag2: 'تجزئة بدون موظفين',
        ai_tag3: 'عمليات بدون موظفين',
        
        team_tag: '03',
        team_title: 'فريقنا',
        team_intro: 'لدينا <strong>ثقافة مؤسسية منفتحة</strong>، <strong>نظام تعويضات موجه نحو السوق</strong> و <strong>مساحة واسعة للتطوير الشخصي</strong>. نبحث عن شركاء عمليين ومحترفين وريادين للنمو معنا!',
        
        value1_title: 'ذاتي الدافع',
        value1_desc: 'مسؤول، شجاع للخروج من منطقة الراحة، مواءمة الأهداف الشخصية والتنظيمية',
        value2_title: 'السعي للتميز',
        value2_desc: 'استكشاف مستمر لأهداف جديدة، رفع المعايير للنمو المستمر',
        value3_title: 'روح الريادة',
        value3_desc: 'تجربة إمكانيات متعددة، التكرار باستمرار، تحديث الحدود المعرفية',
        value4_title: 'مرن وعملي',
        value4_desc: 'النكسات تجارب وثروة، التأمل مع البقاء وفياً للتحقيق الاختراقات',
        value5_title: 'بسيط ونقي',
        value5_desc: 'لا مجموعات مغلقة، صادق وشفاف، خلق جو فريق دافئ',
        value6_title: 'منفتح وشامل',
        value6_desc: 'عقل منفتح، الثقة بالشركاء، استعداد للتعاون، متواضع وحذر',
        
        join_tag: '04',
        join_title: 'انضم إلينا',
        join_desc: 'انمو مع هويكي',
        
        benefits_title: 'المزايا',
        benefit1: 'تأمين اجتماعي قياسي وصندوق إسكان',
        benefit2: 'مكافأة سنوية، حوافز عمولة',
        benefit3: 'ثلاث وجبات مجانية',
        benefit4: 'فحص صحي سنوي',
        benefit5: 'حفلات أعياد الميلاد، أنشطة الفريق',
        
        development_title: 'التطوير الوظيفي',
        development1: 'مسار وظيفي مزدوج: مهني وإداري',
        development2: 'نظام تدريب داخلي وخارجي',
        development3: 'تناوب وظيفي، مساحة تطوير واسعة',
        development4: 'الموظفون الرئيسيون مؤهلون للمشاركة في الأسهم',
        development5: 'تصريح إقامة عمل بكين',
        
        location_title: 'موقع المكتب',
        location_address: 'الطابق 11، رقم 10 طريق يابو، منطقة تشاويانغ، بكين',
        location_feature1: 'يقع في منطقة جيانغومن التجارية المركزية',
        location_feature2: 'مجاور لمحطة مترو الخط 1/2/6',
        location_feature3: 'وسائل نقل عام مريحة، مرافق كاملة',
        location_map: 'منطقة جيانغومن التجارية',
        
        cta_title: 'لا نهتم بسنوات الخبرة',
        cta_desc: 'نحتاج فقط أن يكون لديك صفات بسيطة ومحترفة ومرنة',
        cta_highlight: 'نتطلع لانضمامك!',
        
        footer_company: 'شركة بكين BTG هويلينك للتكنولوجيا المحدودة',
        footer_copyright: '© 2024 شركة بكين BTG هويلينك للتكنولوجيا المحدودة. جميع الحقوق محفوظة',
        
        page_title: 'بي تي جي هويلينك للتكنولوجيا - انضم إلينا'
    }
};

// Language utility functions
const i18n = {
    currentLang: 'zh-CN',
    
    // Get browser language
    getBrowserLang() {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('zh')) return 'zh-CN';
        if (browserLang.startsWith('es')) return 'es';
        if (browserLang.startsWith('pt')) return 'pt';
        if (browserLang.startsWith('ar')) return 'ar';
        if (browserLang.startsWith('en')) return 'en';
        return 'zh-CN'; // Default
    },
    
    // Get saved language
    getSavedLang() {
        return localStorage.getItem('preferredLang') || this.getBrowserLang();
    },
    
    // Save language preference
    saveLang(lang) {
        localStorage.setItem('preferredLang', lang);
    },
    
    // Get translation
    t(key) {
        return translations[this.currentLang][key] || translations['zh-CN'][key] || key;
    },
    
    // Set language
    setLang(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found, falling back to zh-CN`);
            lang = 'zh-CN';
        }
        
        this.currentLang = lang;
        this.saveLang(lang);
        
        // Update HTML lang attribute and direction
        const html = document.documentElement;
        html.lang = translations[lang].code;
        html.dir = translations[lang].dir;
        
        // Add/remove RTL class
        if (translations[lang].dir === 'rtl') {
            document.body.classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
        }
        
        // Update page title
        document.title = this.t('page_title');
        
        // Update all elements with data-i18n attribute
        this.updateAllTranslations();
        
        // Update language selector display
        this.updateLangSelector();
        
        return this;
    },
    
    // Update all translations on page
    updateAllTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);
            
            // Check if element has data-i18n-html attribute for HTML content
            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        });
        
        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });
        
        // Update aria-labels
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            el.setAttribute('aria-label', this.t(key));
        });
    },
    
    // Update language selector display
    updateLangSelector() {
        const currentLangSpan = document.querySelector('.current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = translations[this.currentLang].name;
        }
        
        // Update active state in dropdown
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === this.currentLang) {
                option.classList.add('active');
            }
        });
    },
    
    // Initialize
    init() {
        const savedLang = this.getSavedLang();
        this.setLang(savedLang);
        
        // Setup language selector event listeners
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = option.getAttribute('data-lang');
                this.setLang(lang);
            });
        });
        
        return this;
    }
};

// Export for use in other scripts
window.translations = translations;
window.i18n = i18n;


