// 手机数据
let phoneData = [
  {
    "id": "hw_pura70_ultra",
    "brand": "Huawei",
    "model": "HUAWEI Pura 70 Ultra",
    "price": 9999,
    "score": 98,
    "image": "assets/phones/pura70_ultra.jpg",
    "specs": {
      "cpu": "Kirin 9010",
      "ram": "16GB",
      "storage": "512GB/1TB",
      "screen": "6.8\" OLED (2844x1260) 120Hz LTPO",
      "camera_main": "50MP 1-inch Pop-out Lens",
      "camera_feature": "伸缩镜头, 卫星通话",
      "battery": "5200mAh",
      "charging": "100W Wired / 80W Wireless"
    },
    "tags": ["摄影旗舰", "鸿蒙系统", "卫星通信"],
    "weights": {
      "appearance": 5,
      "battery": 4,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "hw_mate60_pro_plus",
    "brand": "Huawei",
    "model": "HUAWEI Mate 60 Pro+",
    "price": 8999,
    "score": 96,
    "image": "assets/phones/mate60_pro_plus.jpg",
    "specs": {
      "cpu": "Kirin 9000S",
      "ram": "16GB",
      "storage": "512GB/1TB",
      "screen": "6.82\" OLED (2720x1260) 120Hz",
      "camera_main": "48MP Ultra Aperture",
      "camera_feature": "玄武架构, 卫星通话",
      "battery": "5000mAh",
      "charging": "88W Wired / 50W Wireless"
    },
    "tags": ["商务旗舰", "坚固耐用"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "hw_mate60_pro",
    "brand": "Huawei",
    "model": "HUAWEI Mate 60 Pro",
    "price": 6499,
    "score": 94,
    "image": "assets/phones/mate60_pro.jpg",
    "specs": {
      "cpu": "Kirin 9000S",
      "ram": "12GB",
      "storage": "512GB",
      "screen": "6.82\" OLED 120Hz",
      "camera_main": "50MP",
      "camera_feature": "可变光圈",
      "battery": "5000mAh",
      "charging": "88W"
    },
    "tags": ["5G回归", "热销"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "hw_nova12_ultra",
    "brand": "Huawei",
    "model": "HUAWEI Nova 12 Ultra",
    "price": 4699,
    "score": 85,
    "image": "assets/phones/nova12_ultra.jpg",
    "specs": {
      "cpu": "Kirin 9000SL",
      "ram": "12GB",
      "storage": "512GB",
      "screen": "6.76\" OLED 120Hz",
      "camera_main": "50MP Variable Aperture",
      "camera_feature": "双向北斗卫星消息",
      "battery": "4600mAh",
      "charging": "100W"
    },
    "tags": ["时尚", "自拍"],
    "weights": {
      "appearance": 5,
      "battery": 3,
      "performance": 4,
      "camera": 4
    }
  },
  {
    "id": "hw_pocket2",
    "brand": "Huawei",
    "model": "HUAWEI Pocket 2",
    "price": 7499,
    "score": 90,
    "image": "assets/phones/pocket2.jpg",
    "specs": {
      "cpu": "Kirin 9000S",
      "ram": "12GB",
      "storage": "256GB/512GB",
      "screen": "6.94\" Foldable OLED",
      "camera_main": "50MP Hyperspectral",
      "camera_feature": "紫外防晒检测",
      "battery": "4520mAh",
      "charging": "66W"
    },
    "tags": ["折叠屏", "女性首选"],
    "weights": {
      "appearance": 5,
      "battery": 3,
      "performance": 4,
      "camera": 4
    }
  },
  {
    "id": "xm_14_ultra",
    "brand": "Xiaomi",
    "model": "Xiaomi 14 Ultra",
    "price": 6499,
    "score": 97,
    "image": "assets/phones/xm14_ultra.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "16GB",
      "storage": "512GB/1TB",
      "screen": "6.73\" 2K AMOLED 120Hz",
      "camera_main": "50MP LYT-900 (1 inch)",
      "camera_feature": "Leica Summilux, 卫星通话",
      "battery": "5300mAh",
      "charging": "90W Wired / 80W Wireless"
    },
    "tags": ["影像机皇", "徕卡"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "xm_14_pro",
    "brand": "Xiaomi",
    "model": "Xiaomi 14 Pro",
    "price": 4999,
    "score": 93,
    "image": "assets/phones/xm14_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.73\" 2K AMOLED",
      "camera_main": "50MP Hunter 900",
      "camera_feature": "1024级可变光圈",
      "battery": "4880mAh",
      "charging": "120W"
    },
    "tags": ["全能旗舰", "龙晶玻璃"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "xm_14",
    "brand": "Xiaomi",
    "model": "Xiaomi 14",
    "price": 3999,
    "score": 91,
    "image": "assets/phones/xm14.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "8GB/12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.36\" 1.5K OLED",
      "camera_main": "50MP",
      "camera_feature": "75mm浮动长焦",
      "battery": "4610mAh",
      "charging": "90W"
    },
    "tags": ["小屏旗舰", "手感"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "xm_mix_fold3",
    "brand": "Xiaomi",
    "model": "Xiaomi MIX Fold 3",
    "price": 8999,
    "score": 94,
    "image": "assets/phones/mix_fold3.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "12GB/16GB",
      "storage": "512GB/1TB",
      "screen": "8.03\" Foldable OLED",
      "camera_main": "50MP Periscope",
      "camera_feature": "徕卡全焦段四摄",
      "battery": "4800mAh",
      "charging": "67W"
    },
    "tags": ["轻薄折叠", "商务"],
    "weights": {
      "appearance": 4,
      "battery": 3,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "xm_civi_4_pro",
    "brand": "Xiaomi",
    "model": "Xiaomi Civi 4 Pro",
    "price": 2999,
    "score": 86,
    "image": "assets/phones/civi4_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8s Gen 3",
      "ram": "12GB",
      "storage": "256GB/512GB",
      "screen": "6.55\" AMOLED",
      "camera_main": "50MP Leica",
      "camera_feature": "仿生双摄自拍",
      "battery": "4700mAh",
      "charging": "67W"
    },
    "tags": ["轻薄", "人像"],
    "weights": {
      "appearance": 5,
      "battery": 4,
      "performance": 4,
      "camera": 4
    }
  },
  {
    "id": "rm_k70_pro",
    "brand": "Redmi",
    "model": "Redmi K70 Pro",
    "price": 3299,
    "score": 89,
    "image": "assets/phones/k70_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "12GB/16GB/24GB",
      "storage": "256GB - 1TB",
      "screen": "6.67\" 2K OLED 120Hz",
      "camera_main": "50MP Light Hunter 800",
      "camera_feature": "2X人像镜头",
      "battery": "5000mAh",
      "charging": "120W"
    },
    "tags": ["性价比", "2K直屏"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 3
    }
  },
  {
    "id": "rm_k70",
    "brand": "Redmi",
    "model": "Redmi K70",
    "price": 2499,
    "score": 87,
    "image": "assets/phones/k70.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.67\" 2K OLED",
      "camera_main": "50MP OIS",
      "camera_feature": "AI影像",
      "battery": "5000mAh",
      "charging": "120W"
    },
    "tags": ["销量王", "性价比"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 3
    }
  },
  {
    "id": "rm_turbo_3",
    "brand": "Redmi",
    "model": "Redmi Turbo 3",
    "price": 1999,
    "score": 84,
    "image": "assets/phones/turbo3.jpg",
    "specs": {
      "cpu": "Snapdragon 8s Gen 3",
      "ram": "12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.67\" 1.5K OLED",
      "camera_main": "50MP Sony LYT-600",
      "camera_feature": "AI消除",
      "battery": "5000mAh",
      "charging": "90W"
    },
    "tags": ["性能小旋风", "哈利波特联名"],
    "weights": {
      "appearance": 3,
      "battery": 4,
      "performance": 5,
      "camera": 3
    }
  },
  {
    "id": "rm_note13_pro_plus",
    "brand": "Redmi",
    "model": "Redmi Note 13 Pro+",
    "price": 1899,
    "score": 82,
    "image": "assets/phones/note13_pro_plus.jpg",
    "specs": {
      "cpu": "Dimensity 7200-Ultra",
      "ram": "12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.67\" 1.5K Curved OLED",
      "camera_main": "200MP Samsung HP3",
      "camera_feature": "IP68防水",
      "battery": "5000mAh",
      "charging": "120W"
    },
    "tags": ["IP68", "两亿像素"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 3,
      "camera": 5
    }
  },
  {
    "id": "vv_x100_ultra",
    "brand": "Vivo",
    "model": "vivo X100 Ultra",
    "price": 6499,
    "score": 98,
    "image": "assets/phones/x100_ultra.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.78\" 2K E7 AMOLED",
      "camera_main": "50MP LYT-900",
      "camera_feature": "2亿像素蔡司APO潜望长焦",
      "battery": "5500mAh",
      "charging": "80W Wired / 30W Wireless"
    },
    "tags": ["演唱会神器", "长焦之王"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "vv_x100_pro",
    "brand": "Vivo",
    "model": "vivo X100 Pro",
    "price": 4999,
    "score": 95,
    "image": "assets/phones/x100_pro.jpg",
    "specs": {
      "cpu": "Dimensity 9300",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.78\" 1.5K OLED",
      "camera_main": "50MP 1-inch IMX989",
      "camera_feature": "蔡司APO长焦",
      "battery": "5400mAh",
      "charging": "100W"
    },
    "tags": ["影像", "天玑调校"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "vv_x100s",
    "brand": "Vivo",
    "model": "vivo X100s",
    "price": 3999,
    "score": 92,
    "image": "assets/phones/x100s.jpg",
    "specs": {
      "cpu": "Dimensity 9300+",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.78\" 1.5K Flat OLED",
      "camera_main": "50MP VCS",
      "camera_feature": "四季人像",
      "battery": "5100mAh",
      "charging": "100W"
    },
    "tags": ["直屏旗舰", "AI影像"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "vv_x_fold3",
    "brand": "Vivo",
    "model": "vivo X Fold3",
    "price": 6999,
    "score": 93,
    "image": "assets/phones/x_fold3.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "8.03\" Foldable OLED",
      "camera_main": "50MP VCS",
      "camera_feature": "超轻薄机身(219g)",
      "battery": "5500mAh",
      "charging": "80W"
    },
    "tags": ["最轻大折叠", "续航"],
    "weights": {
      "appearance": 4,
      "battery": 5,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "iqoo_12_pro",
    "brand": "iQOO",
    "model": "iQOO 12 Pro",
    "price": 4999,
    "score": 92,
    "image": "assets/phones/iqoo12_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "16GB",
      "storage": "256GB - 1TB",
      "screen": "6.78\" 2K E7 144Hz",
      "camera_main": "50MP VCS OV50H",
      "camera_feature": "64MP潜望长焦",
      "battery": "5100mAh",
      "charging": "120W"
    },
    "tags": ["电竞", "BMW设计"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "iqoo_neo9s_pro",
    "brand": "iQOO",
    "model": "iQOO Neo9S Pro",
    "price": 2999,
    "score": 88,
    "image": "assets/phones/neo9s_pro.jpg",
    "specs": {
      "cpu": "Dimensity 9300+",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.78\" 1.5K 144Hz",
      "camera_main": "50MP IMX920",
      "camera_feature": "电竞芯片Q1",
      "battery": "5160mAh",
      "charging": "120W"
    },
    "tags": ["游戏神机", "性价比"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 3
    }
  },
  {
    "id": "oppo_find_x7_ultra",
    "brand": "OPPO",
    "model": "OPPO Find X7 Ultra",
    "price": 5999,
    "score": 96,
    "image": "assets/phones/find_x7_ultra.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.82\" 2K AMOLED 120Hz",
      "camera_main": "50MP LYT-900",
      "camera_feature": "双潜望长焦, 哈苏",
      "battery": "5000mAh",
      "charging": "100W"
    },
    "tags": ["双潜望", "哈苏人像"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "oppo_find_x7",
    "brand": "OPPO",
    "model": "OPPO Find X7",
    "price": 3999,
    "score": 90,
    "image": "assets/phones/find_x7.jpg",
    "specs": {
      "cpu": "Dimensity 9300",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.78\" 1.5K AMOLED",
      "camera_main": "50MP",
      "camera_feature": "超光影三主摄",
      "battery": "5000mAh",
      "charging": "100W"
    },
    "tags": ["标准版天花板", "潮汐架构"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "oppo_find_n3",
    "brand": "OPPO",
    "model": "OPPO Find N3",
    "price": 9999,
    "score": 95,
    "image": "assets/phones/find_n3.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "12GB/16GB",
      "storage": "512GB/1TB",
      "screen": "7.8\" Foldable OLED",
      "camera_main": "48MP Stacked Pixel",
      "camera_feature": "折叠像素, 国密认证",
      "battery": "4805mAh",
      "charging": "67W"
    },
    "tags": ["商务折叠", "安全"],
    "weights": {
      "appearance": 4,
      "battery": 3,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "oppo_reno12_pro",
    "brand": "OPPO",
    "model": "OPPO Reno12 Pro",
    "price": 3399,
    "score": 85,
    "image": "assets/phones/reno12_pro.jpg",
    "specs": {
      "cpu": "Dimensity 9200+ Star Speed",
      "ram": "12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.7\" 120Hz OLED",
      "camera_main": "50MP Sony IMX890",
      "camera_feature": "实况照片, AI闭眼修复",
      "battery": "5000mAh",
      "charging": "80W"
    },
    "tags": ["轻薄人像", "实况照片"],
    "weights": {
      "appearance": 5,
      "battery": 4,
      "performance": 4,
      "camera": 4
    }
  },
  {
    "id": "oneplus_12",
    "brand": "OnePlus",
    "model": "OnePlus 12",
    "price": 4299,
    "score": 94,
    "image": "assets/phones/oneplus_12.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "12GB - 24GB",
      "storage": "256GB - 1TB",
      "screen": "6.82\" 2K Oriental Screen",
      "camera_main": "50MP LYT-808",
      "camera_feature": "哈苏影像, 潜望长焦",
      "battery": "5400mAh",
      "charging": "100W Wired / 50W Wireless"
    },
    "tags": ["全能", "质感"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "oneplus_ace_3_pro",
    "brand": "OnePlus",
    "model": "OnePlus Ace 3 Pro",
    "price": 3199,
    "score": 90,
    "image": "assets/phones/ace3_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "12GB - 24GB",
      "storage": "256GB - 1TB",
      "screen": "6.78\" 1.5K 8T OLED",
      "camera_main": "50MP IMX890",
      "camera_feature": "Live Photo",
      "battery": "6100mAh",
      "charging": "100W"
    },
    "tags": ["续航怪兽", "冰川电池"],
    "weights": {
      "appearance": 4,
      "battery": 5,
      "performance": 5,
      "camera": 3
    }
  },
  {
    "id": "oneplus_ace_3v",
    "brand": "OnePlus",
    "model": "OnePlus Ace 3V",
    "price": 1999,
    "score": 83,
    "image": "assets/phones/ace3v.jpg",
    "specs": {
      "cpu": "Snapdragon 7+ Gen 3",
      "ram": "12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.74\" 1.5K OLED",
      "camera_main": "50MP OIS",
      "camera_feature": "AI消除",
      "battery": "5500mAh",
      "charging": "100W"
    },
    "tags": ["AI普及", "长续航"],
    "weights": {
      "appearance": 3,
      "battery": 5,
      "performance": 4,
      "camera": 3
    }
  },
  {
    "id": "honor_magic6_pro",
    "brand": "Honor",
    "model": "Honor Magic6 Pro",
    "price": 5699,
    "score": 96,
    "image": "assets/phones/magic6_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.8\" OLED LTPO",
      "camera_main": "50MP H9000",
      "camera_feature": "1.8亿像素潜望, 鹰眼抓拍",
      "battery": "5600mAh",
      "charging": "80W Wired / 66W Wireless"
    },
    "tags": ["青海湖电池", "卫星通信"],
    "weights": {
      "appearance": 4,
      "battery": 5,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "honor_magic6_rs",
    "brand": "Honor",
    "model": "Honor Magic6 RSR Porsche Design",
    "price": 9999,
    "score": 97,
    "image": "assets/phones/magic6_rsr.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "24GB",
      "storage": "1TB",
      "screen": "6.8\" OLED Dual-Layer",
      "camera_main": "50MP H9800",
      "camera_feature": "LOFIC技术, 激光雷达对焦",
      "battery": "5600mAh",
      "charging": "80W"
    },
    "tags": ["保时捷设计", "顶配"],
    "weights": {
      "appearance": 5,
      "battery": 5,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "honor_200_pro",
    "brand": "Honor",
    "model": "Honor 200 Pro",
    "price": 3499,
    "score": 88,
    "image": "assets/phones/honor200_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8s Gen 3",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.78\" OLED",
      "camera_main": "50MP H9000",
      "camera_feature": "雅顾光影人像",
      "battery": "5200mAh",
      "charging": "100W"
    },
    "tags": ["人像摄影", "护眼屏"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 4,
      "camera": 5
    }
  },
  {
    "id": "honor_100_pro",
    "brand": "Honor",
    "model": "Honor 100 Pro",
    "price": 2899,
    "score": 85,
    "image": "assets/phones/honor100_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.78\" OLED",
      "camera_main": "50MP IMX906",
      "camera_feature": "单反级写真",
      "battery": "5000mAh",
      "charging": "100W"
    },
    "tags": ["护眼", "性价比"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 4,
      "camera": 4
    }
  },
  {
    "id": "realme_gt5_pro",
    "brand": "Realme",
    "model": "Realme GT5 Pro",
    "price": 3399,
    "score": 91,
    "image": "assets/phones/gt5_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.78\" 1.5K 144Hz",
      "camera_main": "50MP LYT-808",
      "camera_feature": "IMX890潜望长焦, 掌纹解锁",
      "battery": "5400mAh",
      "charging": "100W Wired / 50W Wireless"
    },
    "tags": ["性价比神机", "潜望下放"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "realme_gt_neo6",
    "brand": "Realme",
    "model": "Realme GT Neo6",
    "price": 2099,
    "score": 84,
    "image": "assets/phones/gt_neo6.jpg",
    "specs": {
      "cpu": "Snapdragon 8s Gen 3",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.78\" 6000nit OLED",
      "camera_main": "50MP OIS",
      "camera_feature": "无双屏",
      "battery": "5500mAh",
      "charging": "120W"
    },
    "tags": ["屏幕亮度", "续航"],
    "weights": {
      "appearance": 4,
      "battery": 5,
      "performance": 5,
      "camera": 3
    }
  },
  {
    "id": "realme_gt_neo6_se",
    "brand": "Realme",
    "model": "Realme GT Neo6 SE",
    "price": 1699,
    "score": 80,
    "image": "assets/phones/gt_neo6_se.jpg",
    "specs": {
      "cpu": "Snapdragon 7+ Gen 3",
      "ram": "8GB - 16GB",
      "storage": "256GB/512GB",
      "screen": "6.78\" 6000nit LTPO",
      "camera_main": "50MP",
      "camera_feature": "AI游戏辅助",
      "battery": "5500mAh",
      "charging": "100W"
    },
    "tags": ["百瓦快充", "入门电竞"],
    "weights": {
      "appearance": 3,
      "battery": 5,
      "performance": 4,
      "camera": 3
    }
  },
  {
    "id": "apple_iphone_15_pro_max",
    "brand": "Apple",
    "model": "iPhone 15 Pro Max",
    "price": 9999,
    "score": 97,
    "image": "assets/phones/ip15_promax.jpg",
    "specs": {
      "cpu": "A17 Pro",
      "ram": "8GB",
      "storage": "256GB - 1TB",
      "screen": "6.7\" Super Retina XDR",
      "camera_main": "48MP",
      "camera_feature": "5x Tetraprior Zoom, ProRes",
      "battery": "4422mAh",
      "charging": "20W (Official)"
    },
    "tags": ["iOS", "钛金属", "视频录制"],
    "weights": {
      "appearance": 5,
      "battery": 3,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "apple_iphone_15_pro",
    "brand": "Apple",
    "model": "iPhone 15 Pro",
    "price": 7999,
    "score": 94,
    "image": "assets/phones/ip15_pro.jpg",
    "specs": {
      "cpu": "A17 Pro",
      "ram": "8GB",
      "storage": "128GB - 1TB",
      "screen": "6.1\" Super Retina XDR",
      "camera_main": "48MP",
      "camera_feature": "3x Zoom, Spatial Video",
      "battery": "3274mAh",
      "charging": "20W"
    },
    "tags": ["小屏强机", "iOS"],
    "weights": {
      "appearance": 5,
      "battery": 3,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "apple_iphone_15",
    "brand": "Apple",
    "model": "iPhone 15",
    "price": 5999,
    "score": 88,
    "image": "assets/phones/ip15.jpg",
    "specs": {
      "cpu": "A16 Bionic",
      "ram": "6GB",
      "storage": "128GB - 512GB",
      "screen": "6.1\" 60Hz OLED",
      "camera_main": "48MP",
      "camera_feature": "2x Crop Zoom",
      "battery": "3349mAh",
      "charging": "20W"
    },
    "tags": ["灵动岛", "Type-C"],
    "weights": {
      "appearance": 4,
      "battery": 3,
      "performance": 4,
      "camera": 4
    }
  },
  {
    "id": "apple_iphone_13",
    "brand": "Apple",
    "model": "iPhone 13",
    "price": 3999,
    "score": 75,
    "image": "assets/phones/ip13.jpg",
    "specs": {
      "cpu": "A15 Bionic",
      "ram": "4GB",
      "storage": "128GB - 512GB",
      "screen": "6.1\" 60Hz OLED",
      "camera_main": "12MP",
      "camera_feature": "Cinematic Mode",
      "battery": "3240mAh",
      "charging": "20W"
    },
    "tags": ["入门苹果", "性价比"],
    "weights": {
      "appearance": 4,
      "battery": 3,
      "performance": 4,
      "camera": 3
    }
  },
  {
    "id": "samsung_s24_ultra",
    "brand": "Samsung",
    "model": "Samsung Galaxy S24 Ultra",
    "price": 9699,
    "score": 97,
    "image": "assets/phones/s24_ultra.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3 for Galaxy",
      "ram": "12GB",
      "storage": "256GB - 1TB",
      "screen": "6.8\" QHD+ Dynamic AMOLED 2X",
      "camera_main": "200MP",
      "camera_feature": "Galaxy AI, 100x Zoom, S-Pen",
      "battery": "5000mAh",
      "charging": "45W"
    },
    "tags": ["安卓机皇", "AI手机", "手写笔"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "samsung_s24_plus",
    "brand": "Samsung",
    "model": "Samsung Galaxy S24+",
    "price": 6999,
    "score": 92,
    "image": "assets/phones/s24_plus.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3 for Galaxy",
      "ram": "12GB",
      "storage": "256GB/512GB",
      "screen": "6.7\" QHD+ Dynamic AMOLED 2X",
      "camera_main": "50MP",
      "camera_feature": "Galaxy AI",
      "battery": "4900mAh",
      "charging": "45W"
    },
    "tags": ["均衡旗舰", "AI"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "samsung_z_fold5",
    "brand": "Samsung",
    "model": "Samsung Galaxy Z Fold5",
    "price": 10999,
    "score": 93,
    "image": "assets/phones/z_fold5.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2 for Galaxy",
      "ram": "12GB",
      "storage": "256GB - 1TB",
      "screen": "7.6\" Foldable AMOLED",
      "camera_main": "50MP",
      "camera_feature": "多任务处理",
      "battery": "4400mAh",
      "charging": "25W"
    },
    "tags": ["折叠屏老将", "生产力"],
    "weights": {
      "appearance": 4,
      "battery": 3,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "samsung_z_flip5",
    "brand": "Samsung",
    "model": "Samsung Galaxy Z Flip5",
    "price": 5999,
    "score": 88,
    "image": "assets/phones/z_flip5.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "8GB",
      "storage": "256GB/512GB",
      "screen": "6.7\" Foldable + 3.4\" Cover",
      "camera_main": "12MP Dual",
      "camera_feature": "外屏自拍",
      "battery": "3700mAh",
      "charging": "25W"
    },
    "tags": ["时尚小折叠", "外屏"],
    "weights": {
      "appearance": 5,
      "battery": 3,
      "performance": 4,
      "camera": 3
    }
  },
  {
    "id": "meizu_21_pro",
    "brand": "Meizu",
    "model": "Meizu 21 Pro",
    "price": 4999,
    "score": 89,
    "image": "assets/phones/meizu21_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.79\" 21:9 2K OLED",
      "camera_main": "50MP",
      "camera_feature": "AI辅助, mTouch Max广域指纹",
      "battery": "5050mAh",
      "charging": "80W Wired / 50W Wireless"
    },
    "tags": ["单手旗舰", "最美直屏"],
    "weights": {
      "appearance": 5,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "meizu_21",
    "brand": "Meizu",
    "model": "Meizu 21",
    "price": 3199,
    "score": 86,
    "image": "assets/phones/meizu21.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB",
      "screen": "6.55\" OLED 1.74mm Bezel",
      "camera_main": "200MP",
      "camera_feature": "Aicy灵动环",
      "battery": "4800mAh",
      "charging": "80W"
    },
    "tags": ["极窄边框", "白色面板"],
    "weights": {
      "appearance": 5,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "nubia_z60_ultra",
    "brand": "Nubia",
    "model": "Nubia Z60 Ultra",
    "price": 3999,
    "score": 90,
    "image": "assets/phones/z60_ultra.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "12GB - 24GB",
      "storage": "256GB - 1TB",
      "screen": "6.8\" Full Screen (Under Display Camera)",
      "camera_main": "50MP 35mm Optics",
      "camera_feature": "高定光学三主摄, 屏下摄像",
      "battery": "6000mAh",
      "charging": "80W"
    },
    "tags": ["真全面屏", "独特焦段"],
    "weights": {
      "appearance": 4,
      "battery": 5,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "moto_x50_ultra",
    "brand": "Motorola",
    "model": "Moto X50 Ultra",
    "price": 3999,
    "score": 87,
    "image": "assets/phones/moto_x50.jpg",
    "specs": {
      "cpu": "Snapdragon 8s Gen 3",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.7\" 144Hz OLED",
      "camera_main": "50MP",
      "camera_feature": "AI影像, 实木机身",
      "battery": "4500mAh",
      "charging": "125W"
    },
    "tags": ["AI手机", "高刷"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "red_magic_9_pro",
    "brand": "RedMagic",
    "model": "RedMagic 9 Pro",
    "price": 4399,
    "score": 91,
    "image": "assets/phones/redmagic9_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "12GB - 24GB",
      "storage": "256GB - 1TB",
      "screen": "6.8\" No-Notch OLED",
      "camera_main": "50MP Flat Back",
      "camera_feature": "背部纯平不凸起",
      "battery": "6500mAh",
      "charging": "80W"
    },
    "tags": ["纯平背板", "主动风扇"],
    "weights": {
      "appearance": 4,
      "battery": 5,
      "performance": 5,
      "camera": 3
    }
  },
  {
    "id": "rog_phone_8_pro",
    "brand": "ROG",
    "model": "ROG Phone 8 Pro",
    "price": 5999,
    "score": 92,
    "image": "assets/phones/rog8_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 3",
      "ram": "16GB/24GB",
      "storage": "512GB/1TB",
      "screen": "6.78\" 165Hz LTPO",
      "camera_main": "50MP Gimbal OIS",
      "camera_feature": "AniMe Vision光显矩阵",
      "battery": "5500mAh",
      "charging": "65W"
    },
    "tags": ["败家之眼", "信仰"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 3
    }
  },
  {
    "id": "honor_magic_v2",
    "brand": "Honor",
    "model": "Honor Magic V2",
    "price": 8999,
    "score": 94,
    "image": "assets/phones/magic_v2.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2 Leading Version",
      "ram": "16GB",
      "storage": "256GB - 1TB",
      "screen": "7.92\" Foldable OLED",
      "camera_main": "50MP",
      "camera_feature": "鹰眼相机",
      "battery": "5000mAh",
      "charging": "66W"
    },
    "tags": ["9.9mm超薄", "折叠标杆"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "vivo_s19_pro",
    "brand": "Vivo",
    "model": "vivo S19 Pro",
    "price": 3299,
    "score": 83,
    "image": "assets/phones/s19_pro.jpg",
    "specs": {
      "cpu": "Dimensity 9200+",
      "ram": "12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.78\" OLED",
      "camera_main": "50MP Sony IMX921",
      "camera_feature": "影棚级柔光环, 50MP长焦",
      "battery": "5500mAh",
      "charging": "80W"
    },
    "tags": ["人像神器", "轻薄续航"],
    "weights": {
      "appearance": 5,
      "battery": 5,
      "performance": 4,
      "camera": 5
    }
  },
  {
    "id": "hw_pura70",
    "brand": "Huawei",
    "model": "HUAWEI Pura 70",
    "price": 5499,
    "score": 92,
    "image": "assets/phones/pura70.jpg",
    "specs": {
      "cpu": "Kirin 9000S",
      "ram": "12GB",
      "storage": "256GB/512GB",
      "screen": "6.1\" OLED 120Hz",
      "camera_main": "50MP",
      "camera_feature": "可变光圈",
      "battery": "4900mAh",
      "charging": "66W"
    },
    "tags": ["轻旗舰", "鸿蒙系统"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 4,
      "camera": 4
    }
  },
  {
    "id": "hw_mate60",
    "brand": "Huawei",
    "model": "HUAWEI Mate 60",
    "price": 4499,
    "score": 88,
    "image": "assets/phones/mate60.jpg",
    "specs": {
      "cpu": "Kirin 9000S",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB",
      "screen": "6.69\" OLED 120Hz",
      "camera_main": "50MP",
      "camera_feature": "卫星通话",
      "battery": "4750mAh",
      "charging": "66W"
    },
    "tags": ["5G回归", "商务"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 4,
      "camera": 4
    }
  },
  {
    "id": "xm_13_ultra",
    "brand": "Xiaomi",
    "model": "Xiaomi 13 Ultra",
    "price": 5999,
    "score": 95,
    "image": "assets/phones/xm13_ultra.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.73\" 2K AMOLED 120Hz",
      "camera_main": "50MP 1-inch IMX989",
      "camera_feature": "徕卡四摄, 可变光圈",
      "battery": "5000mAh",
      "charging": "90W Wired / 80W Wireless"
    },
    "tags": ["影像旗舰", "徕卡"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "xm_13_pro",
    "brand": "Xiaomi",
    "model": "Xiaomi 13 Pro",
    "price": 4299,
    "score": 90,
    "image": "assets/phones/xm13_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB",
      "screen": "6.73\" 2K AMOLED 120Hz",
      "camera_main": "50MP 1-inch IMX989",
      "camera_feature": "徕卡三摄",
      "battery": "4820mAh",
      "charging": "120W"
    },
    "tags": ["全能旗舰", "陶瓷机身"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "xm_13",
    "brand": "Xiaomi",
    "model": "Xiaomi 13",
    "price": 3499,
    "score": 88,
    "image": "assets/phones/xm13.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "8GB/12GB",
      "storage": "128GB - 512GB",
      "screen": "6.36\" FHD+ OLED 120Hz",
      "camera_main": "50MP IMX800",
      "camera_feature": "徕卡三摄",
      "battery": "4500mAh",
      "charging": "67W"
    },
    "tags": ["小屏旗舰", "直屏"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "rm_k60_pro",
    "brand": "Redmi",
    "model": "Redmi K60 Pro",
    "price": 2799,
    "score": 86,
    "image": "assets/phones/k60_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "8GB/12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.67\" 2K OLED 120Hz",
      "camera_main": "50MP Sony IMX800",
      "camera_feature": "OIS光学防抖",
      "battery": "5000mAh",
      "charging": "120W"
    },
    "tags": ["性价比", "2K直屏"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "rm_k60",
    "brand": "Redmi",
    "model": "Redmi K60",
    "price": 2199,
    "score": 84,
    "image": "assets/phones/k60.jpg",
    "specs": {
      "cpu": "Snapdragon 8+ Gen 1",
      "ram": "8GB/12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.67\" 2K OLED 120Hz",
      "camera_main": "64MP",
      "camera_feature": "OIS光学防抖",
      "battery": "5500mAh",
      "charging": "67W"
    },
    "tags": ["性价比", "大电池"],
    "weights": {
      "appearance": 4,
      "battery": 5,
      "performance": 4,
      "camera": 3
    }
  },
  {
    "id": "vv_x90_pro_plus",
    "brand": "Vivo",
    "model": "vivo X90 Pro+",
    "price": 6499,
    "score": 96,
    "image": "assets/phones/x90_pro_plus.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "12GB",
      "storage": "256GB/512GB",
      "screen": "6.78\" 2K E6 AMOLED 120Hz",
      "camera_main": "50MP 1-inch IMX989",
      "camera_feature": "蔡司T*镀膜, 潜望长焦",
      "battery": "4700mAh",
      "charging": "80W Wired / 50W Wireless"
    },
    "tags": ["影像旗舰", "蔡司"],
    "weights": {
      "appearance": 4,
      "battery": 3,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "vv_x90_pro",
    "brand": "Vivo",
    "model": "vivo X90 Pro",
    "price": 4999,
    "score": 92,
    "image": "assets/phones/x90_pro.jpg",
    "specs": {
      "cpu": "Dimensity 9200",
      "ram": "12GB",
      "storage": "256GB/512GB",
      "screen": "6.78\" FHD+ AMOLED 120Hz",
      "camera_main": "50MP IMX866",
      "camera_feature": "蔡司T*镀膜",
      "battery": "4870mAh",
      "charging": "120W"
    },
    "tags": ["影像", "天玑调校"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "vv_x90",
    "brand": "Vivo",
    "model": "vivo X90",
    "price": 3699,
    "score": 89,
    "image": "assets/phones/x90.jpg",
    "specs": {
      "cpu": "Dimensity 9200",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB",
      "screen": "6.78\" FHD+ AMOLED 120Hz",
      "camera_main": "50MP IMX866",
      "camera_feature": "蔡司T*镀膜",
      "battery": "4810mAh",
      "charging": "120W"
    },
    "tags": ["性价比", "人像"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "oppo_find_x6_pro",
    "brand": "OPPO",
    "model": "OPPO Find X6 Pro",
    "price": 5999,
    "score": 94,
    "image": "assets/phones/find_x6_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.82\" 2K AMOLED 120Hz",
      "camera_main": "50MP 1-inch IMX989",
      "camera_feature": "哈苏三主摄, 潜望长焦",
      "battery": "5000mAh",
      "charging": "100W"
    },
    "tags": ["影像旗舰", "哈苏"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "oppo_find_x6",
    "brand": "OPPO",
    "model": "OPPO Find X6",
    "price": 3999,
    "score": 88,
    "image": "assets/phones/find_x6.jpg",
    "specs": {
      "cpu": "Dimensity 9200",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.74\" FHD+ AMOLED 120Hz",
      "camera_main": "50MP IMX890",
      "camera_feature": "哈苏三摄",
      "battery": "4800mAh",
      "charging": "80W"
    },
    "tags": ["均衡旗舰", "哈苏"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "oneplus_11",
    "brand": "OnePlus",
    "model": "OnePlus 11",
    "price": 3999,
    "score": 91,
    "image": "assets/phones/oneplus_11.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.7\" QHD+ LTPO 120Hz",
      "camera_main": "50MP IMX890",
      "camera_feature": "哈苏影像, 潜望长焦",
      "battery": "5000mAh",
      "charging": "100W"
    },
    "tags": ["性能旗舰", "哈苏"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "honor_magic5_pro",
    "brand": "Honor",
    "model": "Honor Magic5 Pro",
    "price": 4699,
    "score": 92,
    "image": "assets/phones/magic5_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "8GB/12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.81\" QHD+ OLED 120Hz",
      "camera_main": "50MP IMX800",
      "camera_feature": "鹰眼相机, 潜望长焦",
      "battery": "5100mAh",
      "charging": "66W Wired / 50W Wireless"
    },
    "tags": ["商务旗舰", "青海湖电池"],
    "weights": {
      "appearance": 4,
      "battery": 5,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "honor_magic5",
    "brand": "Honor",
    "model": "Honor Magic5",
    "price": 3499,
    "score": 87,
    "image": "assets/phones/magic5.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB",
      "screen": "6.73\" FHD+ OLED 120Hz",
      "camera_main": "54MP IMX800",
      "camera_feature": "鹰眼相机",
      "battery": "5100mAh",
      "charging": "66W"
    },
    "tags": ["性价比", "青海湖电池"],
    "weights": {
      "appearance": 4,
      "battery": 5,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "realme_gt3",
    "brand": "Realme",
    "model": "Realme GT3",
    "price": 2799,
    "score": 87,
    "image": "assets/phones/gt3.jpg",
    "specs": {
      "cpu": "Snapdragon 8+ Gen 1",
      "ram": "8GB/12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.74\" FHD+ AMOLED 144Hz",
      "camera_main": "50MP IMX890",
      "camera_feature": "OIS光学防抖",
      "battery": "4600mAh",
      "charging": "240W"
    },
    "tags": ["快充之王", "游戏"],
    "weights": {
      "appearance": 4,
      "battery": 3,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "apple_iphone_14_pro_max",
    "brand": "Apple",
    "model": "iPhone 14 Pro Max",
    "price": 7999,
    "score": 93,
    "image": "assets/phones/ip14_pro_max.jpg",
    "specs": {
      "cpu": "A16 Bionic",
      "ram": "6GB",
      "storage": "128GB - 1TB",
      "screen": "6.7\" Super Retina XDR 120Hz",
      "camera_main": "48MP",
      "camera_feature": "ProMotion, 动态岛",
      "battery": "4323mAh",
      "charging": "20W"
    },
    "tags": ["iOS", "灵动岛", "高刷"],
    "weights": {
      "appearance": 5,
      "battery": 4,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "apple_iphone_14_pro",
    "brand": "Apple",
    "model": "iPhone 14 Pro",
    "price": 6499,
    "score": 91,
    "image": "assets/phones/ip14_pro.jpg",
    "specs": {
      "cpu": "A16 Bionic",
      "ram": "6GB",
      "storage": "128GB - 1TB",
      "screen": "6.1\" Super Retina XDR 120Hz",
      "camera_main": "48MP",
      "camera_feature": "ProMotion, 动态岛",
      "battery": "3200mAh",
      "charging": "20W"
    },
    "tags": ["iOS", "灵动岛", "小屏"],
    "weights": {
      "appearance": 5,
      "battery": 3,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "apple_iphone_14",
    "brand": "Apple",
    "model": "iPhone 14",
    "price": 4999,
    "score": 85,
    "image": "assets/phones/ip14.jpg",
    "specs": {
      "cpu": "A15 Bionic",
      "ram": "6GB",
      "storage": "128GB - 512GB",
      "screen": "6.1\" Super Retina XDR 60Hz",
      "camera_main": "12MP",
      "camera_feature": "电影效果模式",
      "battery": "3279mAh",
      "charging": "20W"
    },
    "tags": ["iOS", "入门旗舰"],
    "weights": {
      "appearance": 4,
      "battery": 3,
      "performance": 4,
      "camera": 4
    }
  },
  {
    "id": "samsung_s23_ultra",
    "brand": "Samsung",
    "model": "Samsung Galaxy S23 Ultra",
    "price": 8499,
    "score": 95,
    "image": "assets/phones/s23_ultra.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2 for Galaxy",
      "ram": "8GB/12GB",
      "storage": "256GB - 1TB",
      "screen": "6.8\" QHD+ Dynamic AMOLED 2X 120Hz",
      "camera_main": "200MP",
      "camera_feature": "S-Pen, 10x光学变焦",
      "battery": "5000mAh",
      "charging": "45W"
    },
    "tags": ["安卓机皇", "手写笔", "长焦"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "samsung_s23_plus",
    "brand": "Samsung",
    "model": "Samsung Galaxy S23+",
    "price": 5999,
    "score": 90,
    "image": "assets/phones/s23_plus.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2 for Galaxy",
      "ram": "8GB",
      "storage": "256GB/512GB",
      "screen": "6.6\" FHD+ Dynamic AMOLED 2X 120Hz",
      "camera_main": "50MP",
      "camera_feature": "AI摄影",
      "battery": "4700mAh",
      "charging": "45W"
    },
    "tags": ["均衡旗舰", "大电池"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "samsung_s23",
    "brand": "Samsung",
    "model": "Samsung Galaxy S23",
    "price": 4999,
    "score": 88,
    "image": "assets/phones/s23.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2 for Galaxy",
      "ram": "8GB",
      "storage": "128GB/256GB",
      "screen": "6.1\" FHD+ Dynamic AMOLED 2X 120Hz",
      "camera_main": "50MP",
      "camera_feature": "AI摄影",
      "battery": "3900mAh",
      "charging": "25W"
    },
    "tags": ["小屏旗舰", "性能"],
    "weights": {
      "appearance": 4,
      "battery": 3,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "meizu_20_pro",
    "brand": "Meizu",
    "model": "Meizu 20 Pro",
    "price": 4299,
    "score": 88,
    "image": "assets/phones/meizu20_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.81\" QHD+ AMOLED 120Hz",
      "camera_main": "50MP IMX789",
      "camera_feature": "三摄系统",
      "battery": "5000mAh",
      "charging": "80W Wired / 50W Wireless"
    },
    "tags": ["旗舰", "Flyme"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "meizu_20",
    "brand": "Meizu",
    "model": "Meizu 20",
    "price": 2999,
    "score": 85,
    "image": "assets/phones/meizu20.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB",
      "screen": "6.55\" FHD+ AMOLED 144Hz",
      "camera_main": "50MP IMX766",
      "camera_feature": "三摄系统",
      "battery": "4700mAh",
      "charging": "67W"
    },
    "tags": ["性价比", "高刷"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "nubia_z50_ultra",
    "brand": "Nubia",
    "model": "Nubia Z50 Ultra",
    "price": 4299,
    "score": 89,
    "image": "assets/phones/z50_ultra.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "8GB/12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.67\" FHD+ AMOLED 120Hz",
      "camera_main": "64MP 35mm",
      "camera_feature": "真全面屏, 屏下摄像头",
      "battery": "5000mAh",
      "charging": "80W"
    },
    "tags": ["真全面屏", "人文摄影"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "red_magic_8_pro",
    "brand": "RedMagic",
    "model": "RedMagic 8 Pro",
    "price": 3999,
    "score": 89,
    "image": "assets/phones/redmagic8_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.8\" FHD+ AMOLED 120Hz",
      "camera_main": "50MP",
      "camera_feature": "背部纯平, 主动散热",
      "battery": "6000mAh",
      "charging": "65W"
    },
    "tags": ["游戏手机", "大电池"],
    "weights": {
      "appearance": 4,
      "battery": 5,
      "performance": 5,
      "camera": 3
    }
  },
  {
    "id": "rog_phone_7_ultimate",
    "brand": "ROG",
    "model": "ROG Phone 7 Ultimate",
    "price": 7999,
    "score": 93,
    "image": "assets/phones/rog7_ultimate.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "16GB/24GB",
      "storage": "512GB/1TB",
      "screen": "6.78\" FHD+ AMOLED 165Hz",
      "camera_main": "50MP Sony IMX766",
      "camera_feature": "AirTrigger, 肩键",
      "battery": "6000mAh",
      "charging": "65W"
    },
    "tags": ["电竞旗舰", "肩键", "信仰"],
    "weights": {
      "appearance": 4,
      "battery": 5,
      "performance": 5,
      "camera": 3
    }
  },
  {
    "id": "iqoo_11_pro",
    "brand": "iQOO",
    "model": "iQOO 11 Pro",
    "price": 4299,
    "score": 90,
    "image": "assets/phones/iqoo11_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "8GB/12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.78\" QHD+ AMOLED 144Hz",
      "camera_main": "50MP VCS IMX866",
      "camera_feature": "微云台, 潜望长焦",
      "battery": "4700mAh",
      "charging": "200W"
    },
    "tags": ["电竞", "快充", "微云台"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "iqoo_11",
    "brand": "iQOO",
    "model": "iQOO 11",
    "price": 3499,
    "score": 88,
    "image": "assets/phones/iqoo11.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "8GB/12GB/16GB",
      "storage": "256GB - 1TB",
      "screen": "6.78\" FHD+ AMOLED 144Hz",
      "camera_main": "50MP VCS IMX866",
      "camera_feature": "微云台",
      "battery": "5000mAh",
      "charging": "120W"
    },
    "tags": ["性价比", "电竞", "高刷"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "oppo_reno10_pro_plus",
    "brand": "OPPO",
    "model": "OPPO Reno10 Pro+",
    "price": 3499,
    "score": 86,
    "image": "assets/phones/reno10_pro_plus.jpg",
    "specs": {
      "cpu": "Snapdragon 8+ Gen 1",
      "ram": "12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.74\" FHD+ AMOLED 120Hz",
      "camera_main": "50MP IMX890",
      "camera_feature": "潜望长焦, 人像模式",
      "battery": "4700mAh",
      "charging": "100W"
    },
    "tags": ["人像", "长焦", "轻薄"],
    "weights": {
      "appearance": 5,
      "battery": 4,
      "performance": 4,
      "camera": 5
    }
  },
  {
    "id": "oppo_reno10_pro",
    "brand": "OPPO",
    "model": "OPPO Reno10 Pro",
    "price": 2799,
    "score": 83,
    "image": "assets/phones/reno10_pro.jpg",
    "specs": {
      "cpu": "Dimensity 8200",
      "ram": "12GB/16GB",
      "storage": "256GB/512GB",
      "screen": "6.74\" FHD+ AMOLED 120Hz",
      "camera_main": "50MP IMX890",
      "camera_feature": "人像模式",
      "battery": "5000mAh",
      "charging": "100W"
    },
    "tags": ["人像", "性价比", "快充"],
    "weights": {
      "appearance": 5,
      "battery": 4,
      "performance": 4,
      "camera": 4
    }
  },
  {
    "id": "honor_90",
    "brand": "Honor",
    "model": "Honor 90",
    "price": 2499,
    "score": 82,
    "image": "assets/phones/honor90.jpg",
    "specs": {
      "cpu": "Snapdragon 7 Gen 1",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB",
      "screen": "6.7\" FHD+ OLED 120Hz",
      "camera_main": "200MP",
      "camera_feature": "单反级写真",
      "battery": "5000mAh",
      "charging": "66W"
    },
    "tags": ["高像素", "护眼屏", "性价比"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 3,
      "camera": 5
    }
  },
  {
    "id": "realme_11_pro_plus",
    "brand": "Realme",
    "model": "Realme 11 Pro+",
    "price": 2099,
    "score": 81,
    "image": "assets/phones/realme11_pro_plus.jpg",
    "specs": {
      "cpu": "Dimensity 7050",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB",
      "screen": "6.7\" FHD+ AMOLED 120Hz",
      "camera_main": "200MP",
      "camera_feature": "潜望式长焦",
      "battery": "5000mAh",
      "charging": "100W"
    },
    "tags": ["高像素", "快充", "性价比"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 3,
      "camera": 5
    }
  },
  {
    "id": "realme_11_pro",
    "brand": "Realme",
    "model": "Realme 11 Pro",
    "price": 1799,
    "score": 79,
    "image": "assets/phones/realme11_pro.jpg",
    "specs": {
      "cpu": "Dimensity 7050",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB",
      "screen": "6.7\" FHD+ AMOLED 120Hz",
      "camera_main": "100MP",
      "camera_feature": "人像模式",
      "battery": "5000mAh",
      "charging": "67W"
    },
    "tags": ["性价比", "人像", "快充"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 3,
      "camera": 4
    }
  },
  {
    "id": "motorola_edge_40_pro",
    "brand": "Motorola",
    "model": "Motorola Edge 40 Pro",
    "price": 4299,
    "score": 87,
    "image": "assets/phones/edge40_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8+ Gen 1",
      "ram": "12GB",
      "storage": "256GB/512GB",
      "screen": "6.67\" FHD+ pOLED 165Hz",
      "camera_main": "50MP IMX766",
      "camera_feature": "IP68防水",
      "battery": "4600mAh",
      "charging": "125W"
    },
    "tags": ["高刷", "快充", "国际品牌"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 4,
      "camera": 4
    }
  },
  {
    "id": "asus_zenfone_10",
    "brand": "Asus",
    "model": "Asus ZenFone 10",
    "price": 5999,
    "score": 88,
    "image": "assets/phones/zenfone10.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "8GB/16GB",
      "storage": "256GB/512GB",
      "screen": "5.9\" FHD+ AMOLED 144Hz",
      "camera_main": "50MP Sony IMX890",
      "camera_feature": "物理变焦按钮",
      "battery": "4300mAh",
      "charging": "30W"
    },
    "tags": ["小屏旗舰", "物理按键", "纯净系统"],
    "weights": {
      "appearance": 4,
      "battery": 3,
      "performance": 5,
      "camera": 4
    }
  },
  {
    "id": "google_pixel_8_pro",
    "brand": "Google",
    "model": "Google Pixel 8 Pro",
    "price": 6999,
    "score": 91,
    "image": "assets/phones/pixel8_pro.jpg",
    "specs": {
      "cpu": "Tensor G3",
      "ram": "12GB",
      "storage": "128GB - 1TB",
      "screen": "6.7\" QHD+ LTPO OLED 120Hz",
      "camera_main": "50MP",
      "camera_feature": "计算摄影, AI功能",
      "battery": "5050mAh",
      "charging": "30W"
    },
    "tags": ["计算摄影", "AI", "原生Android"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 4,
      "camera": 5
    }
  },
  {
    "id": "nothing_phone2",
    "brand": "Nothing",
    "model": "Nothing Phone (2)",
    "price": 3999,
    "score": 85,
    "image": "assets/phones/nothing_phone2.jpg",
    "specs": {
      "cpu": "Snapdragon 8+ Gen 1",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB",
      "screen": "6.7\" FHD+ OLED 120Hz",
      "camera_main": "50MP Sony IMX890",
      "camera_feature": "Glyph Interface",
      "battery": "4700mAh",
      "charging": "45W"
    },
    "tags": ["透明设计", "独特交互", "简约"],
    "weights": {
      "appearance": 5,
      "battery": 4,
      "performance": 4,
      "camera": 4
    }
  },
  {
    "id": "sony_xperia_1_v",
    "brand": "Sony",
    "model": "Sony Xperia 1 V",
    "price": 8999,
    "score": 89,
    "image": "assets/phones/xperia1_v.jpg",
    "specs": {
      "cpu": "Snapdragon 8 Gen 2",
      "ram": "12GB",
      "storage": "256GB/512GB",
      "screen": "6.5\" 4K OLED 120Hz",
      "camera_main": "48MP Exmor T",
      "camera_feature": "Alpha相机技术, 专业模式",
      "battery": "5000mAh",
      "charging": "30W"
    },
    "tags": ["4K屏幕", "专业摄影", "影音"],
    "weights": {
      "appearance": 4,
      "battery": 4,
      "performance": 5,
      "camera": 5
    }
  },
  {
    "id": "xiaomi_pad6_pro",
    "brand": "Xiaomi",
    "model": "Xiaomi Pad 6 Pro",
    "price": 2999,
    "score": 86,
    "image": "assets/phones/pad6_pro.jpg",
    "specs": {
      "cpu": "Snapdragon 8+ Gen 1",
      "ram": "8GB/12GB",
      "storage": "128GB - 1TB",
      "screen": "11\" 2.8K LCD 144Hz",
      "camera_main": "50MP",
      "camera_feature": "生产力工具",
      "battery": "8600mAh",
      "charging": "67W"
    },
    "tags": ["平板", "生产力", "大屏"],
    "weights": {
      "appearance": 4,
      "battery": 5,
      "performance": 5,
      "camera": 3
    }
  },
  {
    "id": "huawei_matepad_pro",
    "brand": "Huawei",
    "model": "HUAWEI MatePad Pro",
    "price": 4299,
    "score": 88,
    "image": "assets/phones/matepad_pro.jpg",
    "specs": {
      "cpu": "Kirin 9000S",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB",
      "screen": "11\" OLED 120Hz",
      "camera_main": "13MP",
      "camera_feature": "M-Pencil支持",
      "battery": "8300mAh",
      "charging": "66W"
    },
    "tags": ["平板", "鸿蒙生态", "生产力"],
    "weights": {
      "appearance": 4,
      "battery": 5,
      "performance": 4,
      "camera": 3
    }
  }
];
let filteredData = [];
let selectedBrands = new Set();
let selectedTags = new Set();

// 加载手机数据
function loadPhoneData() {
    filteredData = [...phoneData];
    renderPhoneList();
    renderFilters();
}

// 渲染筛选器
function renderFilters() {
    // 获取所有品牌和标签
    const brands = new Set();
    const tags = new Set();
    
    phoneData.forEach(phone => {
        brands.add(phone.brand);
        phone.tags.forEach(tag => tags.add(tag));
    });

    // 渲染品牌筛选
    const brandFilters = document.getElementById('brandFilters');
    brandFilters.innerHTML = '';
    Array.from(brands).sort().forEach(brand => {
        const count = phoneData.filter(p => p.brand === brand).length;
        const option = createFilterOption('brand', brand, getBrandName(brand), count);
        brandFilters.appendChild(option);
    });

    // 渲染标签筛选
    const tagFilters = document.getElementById('tagFilters');
    tagFilters.innerHTML = '';
    Array.from(tags).sort().forEach(tag => {
        const count = phoneData.filter(p => p.tags.includes(tag)).length;
        const option = createFilterOption('tag', tag, tag, count);
        tagFilters.appendChild(option);
    });

    // 绑定筛选事件
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });
}

// 创建筛选选项
function createFilterOption(type, value, label, count) {
    const div = document.createElement('div');
    div.className = 'filter-option';
    div.innerHTML = `
        <input type="checkbox" id="${type}-${value}" data-type="${type}" data-value="${value}">
        <label for="${type}-${value}">${label}</label>
        <span class="filter-count">(${count})</span>
    `;
    return div;
}

// 处理筛选变化
function handleFilterChange() {
    selectedBrands.clear();
    selectedTags.clear();

    // 收集选中的筛选条件
    document.querySelectorAll('.filter-option input[type="checkbox"]:checked').forEach(checkbox => {
        const type = checkbox.dataset.type;
        const value = checkbox.dataset.value;
        
        if (type === 'brand') {
            selectedBrands.add(value);
        } else if (type === 'tag') {
            selectedTags.add(value);
        }
    });

    // 应用筛选
    applyFilters();
}

// 应用筛选
function applyFilters() {
    filteredData = phoneData.filter(phone => {
        // 品牌筛选
        if (selectedBrands.size > 0 && !selectedBrands.has(phone.brand)) {
            return false;
        }
        
        // 标签筛选
        if (selectedTags.size > 0) {
            const hasTag = phone.tags.some(tag => selectedTags.has(tag));
            if (!hasTag) {
                return false;
            }
        }
        
        return true;
    });

    renderPhoneList();
}

// 渲染手机列表
function renderPhoneList() {
    const phoneList = document.getElementById('phoneList');
    
    if (filteredData.length === 0) {
        phoneList.innerHTML = 
            '<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-text">没有找到匹配的手机</div></div>';
        return;
    }

    phoneList.innerHTML = filteredData.map(phone => createPhoneCard(phone)).join('');
    
    // 添加入场动画
    setTimeout(() => {
        document.querySelectorAll('.phone-card').forEach((card, index) => {
            card.classList.add('fade-in');
            card.style.animationDelay = `${index * 0.1}s`;
            
            // 绑定点击事件
            card.addEventListener('click', () => {
                const phoneId = card.dataset.phoneId;
                showPhoneDetail(phoneId);
            });
        });
    }, 100);
}

// 创建手机卡片
function createPhoneCard(phone) {
    return `
        <div class="phone-card" data-phone-id="${phone.id}">
            <div class="phone-card-header">
                <div class="phone-info">
                    <div class="phone-brand">${getBrandName(phone.brand)}</div>
                    <div class="phone-model">${phone.model}</div>
                    <div class="phone-processor">${phone.specs.cpu}</div>
                </div>
                <img src="${getBrandLogo(phone.brand)}" alt="${phone.brand}" class="phone-logo">
            </div>
            <div class="phone-tags">
                ${phone.tags.map(tag => `<span class="phone-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

// 显示手机详情
function showPhoneDetail(phoneId) {
    const phone = phoneData.find(p => p.id === phoneId);
    if (!phone) return;

    const modal = document.getElementById('phoneModal');
    const detail = document.getElementById('phoneDetail');
    
    detail.innerHTML = `
        <div class="detail-header">
            <img src="${getBrandLogo(phone.brand)}" alt="${phone.brand}" class="detail-logo">
            <div class="detail-info">
                <h2>${getBrandName(phone.brand)}</h2>
                <div class="detail-model">${phone.model}</div>
                <div class="detail-price">¥${phone.price.toLocaleString()}</div>
                <div class="detail-score">评分: ${phone.score}</div>
                <div class="detail-tags">
                    ${phone.tags.map(tag => `<span class="detail-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
        <div class="detail-specs">
            <div class="spec-item">
                <div class="spec-label">处理器</div>
                <div class="spec-value">${phone.specs.cpu}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">运行内存</div>
                <div class="spec-value">${phone.specs.ram}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">存储空间</div>
                <div class="spec-value">${phone.specs.storage}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">屏幕</div>
                <div class="spec-value">${phone.specs.screen}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">主摄像头</div>
                <div class="spec-value">${phone.specs.camera_main}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">相机特色</div>
                <div class="spec-value">${phone.specs.camera_feature}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">电池容量</div>
                <div class="spec-value">${phone.specs.battery}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">充电功率</div>
                <div class="spec-value">${phone.specs.charging}</div>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

// 关闭详情弹窗
const closePhoneModal = document.getElementById('closePhoneModal');
const phoneModal = document.getElementById('phoneModal');

if (closePhoneModal) {
    closePhoneModal.addEventListener('click', () => {
        phoneModal.classList.remove('active');
    });
}

if (phoneModal) {
    phoneModal.addEventListener('click', (e) => {
        if (e.target === phoneModal) {
            phoneModal.classList.remove('active');
        }
    });
}

// 重置筛选
const resetFilters = document.getElementById('resetFilters');
if (resetFilters) {
    resetFilters.addEventListener('click', () => {
        selectedBrands.clear();
        selectedTags.clear();
        document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        applyFilters();
    });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    loadPhoneData();
});
