// 专用uniapp的 uview 清洗后的城市数据
const columns = [
  [
    {
      id: '110000',
      label: '北京'
    },
    {
      id: '120000',
      label: '天津'
    },
    {
      id: '130000',
      label: '河北省'
    },
    {
      id: '140000',
      label: '山西省'
    },
    {
      id: '150000',
      label: '内蒙古自治区'
    },
    {
      id: '210000',
      label: '辽宁省'
    },
    {
      id: '220000',
      label: '吉林省'
    },
    {
      id: '230000',
      label: '黑龙江省'
    },
    {
      id: '310000',
      label: '上海'
    },
    {
      id: '320000',
      label: '江苏省'
    },
    {
      id: '330000',
      label: '浙江省'
    },
    {
      id: '340000',
      label: '安徽省'
    },
    {
      id: '350000',
      label: '福建省'
    },
    {
      id: '360000',
      label: '江西省'
    },
    {
      id: '370000',
      label: '山东省'
    },
    {
      id: '410000',
      label: '河南省'
    },
    {
      id: '420000',
      label: '湖北省'
    },
    {
      id: '430000',
      label: '湖南省'
    },
    {
      id: '440000',
      label: '广东省'
    },
    {
      id: '450000',
      label: '广西壮族自治区'
    },
    {
      id: '460000',
      label: '海南省'
    },
    {
      id: '500000',
      label: '重庆'
    },
    {
      id: '510000',
      label: '四川省'
    },
    {
      id: '520000',
      label: '贵州省'
    },
    {
      id: '530000',
      label: '云南省'
    },
    {
      id: '540000',
      label: '西藏自治区'
    },
    {
      id: '610000',
      label: '陕西省'
    },
    {
      id: '620000',
      label: '甘肃省'
    },
    {
      id: '630000',
      label: '青海省'
    },
    {
      id: '640000',
      label: '宁夏回族自治区'
    },
    {
      id: '650000',
      label: '新疆维吾尔自治区'
    },
    {
      id: '710000',
      label: '台湾'
    },
    {
      id: '810000',
      label: '香港特别行政区'
    },
    {
      id: '820000',
      label: '澳门特别行政区'
    }
  ],
  [
    {
      id: '110100',
      label: '北京市'
    }
  ]
]

const columnData = [
  [
    {
      id: '110100',
      label: '北京市'
    }
  ],
  [
    {
      id: '120100',
      label: '天津市'
    }
  ],
  [
    {
      id: '130100',
      label: '石家庄市'
    },
    {
      id: '130200',
      label: '唐山市'
    },
    {
      id: '130300',
      label: '秦皇岛市'
    },
    {
      id: '130400',
      label: '邯郸市'
    },
    {
      id: '130500',
      label: '邢台市'
    },
    {
      id: '130600',
      label: '保定市'
    },
    {
      id: '130700',
      label: '张家口市'
    },
    {
      id: '130800',
      label: '承德市'
    },
    {
      id: '130900',
      label: '沧州市'
    },
    {
      id: '131000',
      label: '廊坊市'
    },
    {
      id: '131100',
      label: '衡水市'
    }
  ],
  [
    {
      id: '140100',
      label: '太原市'
    },
    {
      id: '140200',
      label: '大同市'
    },
    {
      id: '140300',
      label: '阳泉市'
    },
    {
      id: '140400',
      label: '长治市'
    },
    {
      id: '140500',
      label: '晋城市'
    },
    {
      id: '140600',
      label: '朔州市'
    },
    {
      id: '140700',
      label: '晋中市'
    },
    {
      id: '140800',
      label: '运城市'
    },
    {
      id: '140900',
      label: '忻州市'
    },
    {
      id: '141000',
      label: '临汾市'
    },
    {
      id: '141100',
      label: '吕梁市'
    }
  ],
  [
    {
      id: '150100',
      label: '呼和浩特市'
    },
    {
      id: '150200',
      label: '包头市'
    },
    {
      id: '150300',
      label: '乌海市'
    },
    {
      id: '150400',
      label: '赤峰市'
    },
    {
      id: '150500',
      label: '通辽市'
    },
    {
      id: '150600',
      label: '鄂尔多斯市'
    },
    {
      id: '150700',
      label: '呼伦贝尔市'
    },
    {
      id: '150800',
      label: '巴彦淖尔市'
    },
    {
      id: '150900',
      label: '乌兰察布市'
    },
    {
      id: '152200',
      label: '兴安盟'
    },
    {
      id: '152500',
      label: '锡林郭勒盟'
    },
    {
      id: '152900',
      label: '阿拉善盟'
    }
  ],
  [
    {
      id: '210100',
      label: '沈阳市'
    },
    {
      id: '210200',
      label: '大连市'
    },
    {
      id: '210300',
      label: '鞍山市'
    },
    {
      id: '210400',
      label: '抚顺市'
    },
    {
      id: '210500',
      label: '本溪市'
    },
    {
      id: '210600',
      label: '丹东市'
    },
    {
      id: '210700',
      label: '锦州市'
    },
    {
      id: '210800',
      label: '营口市'
    },
    {
      id: '210900',
      label: '阜新市'
    },
    {
      id: '211000',
      label: '辽阳市'
    },
    {
      id: '211100',
      label: '盘锦市'
    },
    {
      id: '211200',
      label: '铁岭市'
    },
    {
      id: '211300',
      label: '朝阳市'
    },
    {
      id: '211400',
      label: '葫芦岛市'
    }
  ],
  [
    {
      id: '220100',
      label: '长春市'
    },
    {
      id: '220200',
      label: '吉林市'
    },
    {
      id: '220300',
      label: '四平市'
    },
    {
      id: '220400',
      label: '辽源市'
    },
    {
      id: '220500',
      label: '通化市'
    },
    {
      id: '220600',
      label: '白山市'
    },
    {
      id: '220700',
      label: '松原市'
    },
    {
      id: '220800',
      label: '白城市'
    },
    {
      id: '222400',
      label: '延边朝鲜族自治州'
    }
  ],
  [
    {
      id: '230100',
      label: '哈尔滨市'
    },
    {
      id: '230200',
      label: '齐齐哈尔市'
    },
    {
      id: '230300',
      label: '鸡西市'
    },
    {
      id: '230400',
      label: '鹤岗市'
    },
    {
      id: '230500',
      label: '双鸭山市'
    },
    {
      id: '230600',
      label: '大庆市'
    },
    {
      id: '230700',
      label: '伊春市'
    },
    {
      id: '230800',
      label: '佳木斯市'
    },
    {
      id: '230900',
      label: '七台河市'
    },
    {
      id: '231000',
      label: '牡丹江市'
    },
    {
      id: '231100',
      label: '黑河市'
    },
    {
      id: '231200',
      label: '绥化市'
    },
    {
      id: '232700',
      label: '大兴安岭地区'
    }
  ],
  [
    {
      id: '310100',
      label: '上海市'
    }
  ],
  [
    {
      id: '320100',
      label: '南京市'
    },
    {
      id: '320200',
      label: '无锡市'
    },
    {
      id: '320300',
      label: '徐州市'
    },
    {
      id: '320400',
      label: '常州市'
    },
    {
      id: '320500',
      label: '苏州市'
    },
    {
      id: '320600',
      label: '南通市'
    },
    {
      id: '320700',
      label: '连云港市'
    },
    {
      id: '320800',
      label: '淮安市'
    },
    {
      id: '320900',
      label: '盐城市'
    },
    {
      id: '321000',
      label: '扬州市'
    },
    {
      id: '321100',
      label: '镇江市'
    },
    {
      id: '321200',
      label: '泰州市'
    },
    {
      id: '321300',
      label: '宿迁市'
    }
  ],
  [
    {
      id: '330100',
      label: '杭州市'
    },
    {
      id: '330200',
      label: '宁波市'
    },
    {
      id: '330300',
      label: '温州市'
    },
    {
      id: '330400',
      label: '嘉兴市'
    },
    {
      id: '330500',
      label: '湖州市'
    },
    {
      id: '330600',
      label: '绍兴市'
    },
    {
      id: '330700',
      label: '金华市'
    },
    {
      id: '330800',
      label: '衢州市'
    },
    {
      id: '330900',
      label: '舟山市'
    },
    {
      id: '331000',
      label: '台州市'
    },
    {
      id: '331100',
      label: '丽水市'
    }
  ],
  [
    {
      id: '340100',
      label: '合肥市'
    },
    {
      id: '340200',
      label: '芜湖市'
    },
    {
      id: '340300',
      label: '蚌埠市'
    },
    {
      id: '340400',
      label: '淮南市'
    },
    {
      id: '340500',
      label: '马鞍山市'
    },
    {
      id: '340600',
      label: '淮北市'
    },
    {
      id: '340700',
      label: '铜陵市'
    },
    {
      id: '340800',
      label: '安庆市'
    },
    {
      id: '341000',
      label: '黄山市'
    },
    {
      id: '341100',
      label: '滁州市'
    },
    {
      id: '341200',
      label: '阜阳市'
    },
    {
      id: '341300',
      label: '宿州市'
    },
    {
      id: '341500',
      label: '六安市'
    },
    {
      id: '341600',
      label: '亳州市'
    },
    {
      id: '341700',
      label: '池州市'
    },
    {
      id: '341800',
      label: '宣城市'
    }
  ],
  [
    {
      id: '350100',
      label: '福州市'
    },
    {
      id: '350200',
      label: '厦门市'
    },
    {
      id: '350300',
      label: '莆田市'
    },
    {
      id: '350400',
      label: '三明市'
    },
    {
      id: '350500',
      label: '泉州市'
    },
    {
      id: '350600',
      label: '漳州市'
    },
    {
      id: '350700',
      label: '南平市'
    },
    {
      id: '350800',
      label: '龙岩市'
    },
    {
      id: '350900',
      label: '宁德市'
    }
  ],
  [
    {
      id: '360100',
      label: '南昌市'
    },
    {
      id: '360200',
      label: '景德镇市'
    },
    {
      id: '360300',
      label: '萍乡市'
    },
    {
      id: '360400',
      label: '九江市'
    },
    {
      id: '360500',
      label: '新余市'
    },
    {
      id: '360600',
      label: '鹰潭市'
    },
    {
      id: '360700',
      label: '赣州市'
    },
    {
      id: '360800',
      label: '吉安市'
    },
    {
      id: '360900',
      label: '宜春市'
    },
    {
      id: '361000',
      label: '抚州市'
    },
    {
      id: '361100',
      label: '上饶市'
    }
  ],
  [
    {
      id: '370100',
      label: '济南市'
    },
    {
      id: '370200',
      label: '青岛市'
    },
    {
      id: '370300',
      label: '淄博市'
    },
    {
      id: '370400',
      label: '枣庄市'
    },
    {
      id: '370500',
      label: '东营市'
    },
    {
      id: '370600',
      label: '烟台市'
    },
    {
      id: '370700',
      label: '潍坊市'
    },
    {
      id: '370800',
      label: '济宁市'
    },
    {
      id: '370900',
      label: '泰安市'
    },
    {
      id: '371000',
      label: '威海市'
    },
    {
      id: '371100',
      label: '日照市'
    },
    {
      id: '371200',
      label: '莱芜市'
    },
    {
      id: '371300',
      label: '临沂市'
    },
    {
      id: '371400',
      label: '德州市'
    },
    {
      id: '371500',
      label: '聊城市'
    },
    {
      id: '371600',
      label: '滨州市'
    },
    {
      id: '371700',
      label: '菏泽市'
    }
  ],
  [
    {
      id: '410100',
      label: '郑州市'
    },
    {
      id: '410200',
      label: '开封市'
    },
    {
      id: '410300',
      label: '洛阳市'
    },
    {
      id: '410400',
      label: '平顶山市'
    },
    {
      id: '410500',
      label: '安阳市'
    },
    {
      id: '410600',
      label: '鹤壁市'
    },
    {
      id: '410700',
      label: '新乡市'
    },
    {
      id: '410800',
      label: '焦作市'
    },
    {
      id: '410881',
      label: '济源市'
    },
    {
      id: '410900',
      label: '濮阳市'
    },
    {
      id: '411000',
      label: '许昌市'
    },
    {
      id: '411100',
      label: '漯河市'
    },
    {
      id: '411200',
      label: '三门峡市'
    },
    {
      id: '411300',
      label: '南阳市'
    },
    {
      id: '411400',
      label: '商丘市'
    },
    {
      id: '411500',
      label: '信阳市'
    },
    {
      id: '411600',
      label: '周口市'
    },
    {
      id: '411700',
      label: '驻马店市'
    }
  ],
  [
    {
      id: '420100',
      label: '武汉市'
    },
    {
      id: '420200',
      label: '黄石市'
    },
    {
      id: '420300',
      label: '十堰市'
    },
    {
      id: '420500',
      label: '宜昌市'
    },
    {
      id: '420600',
      label: '襄阳市'
    },
    {
      id: '420700',
      label: '鄂州市'
    },
    {
      id: '420800',
      label: '荆门市'
    },
    {
      id: '420900',
      label: '孝感市'
    },
    {
      id: '421000',
      label: '荆州市'
    },
    {
      id: '421100',
      label: '黄冈市'
    },
    {
      id: '421200',
      label: '咸宁市'
    },
    {
      id: '421300',
      label: '随州市'
    },
    {
      id: '422800',
      label: '恩施土家族苗族自治州'
    },
    {
      id: '429004',
      label: '仙桃市'
    },
    {
      id: '429005',
      label: '潜江市'
    },
    {
      id: '429006',
      label: '天门市'
    },
    {
      id: '429021',
      label: '神农架林区'
    }
  ],
  [
    {
      id: '430100',
      label: '长沙市'
    },
    {
      id: '430200',
      label: '株洲市'
    },
    {
      id: '430300',
      label: '湘潭市'
    },
    {
      id: '430400',
      label: '衡阳市'
    },
    {
      id: '430500',
      label: '邵阳市'
    },
    {
      id: '430600',
      label: '岳阳市'
    },
    {
      id: '430700',
      label: '常德市'
    },
    {
      id: '430800',
      label: '张家界市'
    },
    {
      id: '430900',
      label: '益阳市'
    },
    {
      id: '431000',
      label: '郴州市'
    },
    {
      id: '431100',
      label: '永州市'
    },
    {
      id: '431200',
      label: '怀化市'
    },
    {
      id: '431300',
      label: '娄底市'
    },
    {
      id: '433100',
      label: '湘西土家族苗族自治州'
    }
  ],
  [
    {
      id: '440100',
      label: '广州市'
    },
    {
      id: '440200',
      label: '韶关市'
    },
    {
      id: '440300',
      label: '深圳市'
    },
    {
      id: '440400',
      label: '珠海市'
    },
    {
      id: '440500',
      label: '汕头市'
    },
    {
      id: '440600',
      label: '佛山市'
    },
    {
      id: '440700',
      label: '江门市'
    },
    {
      id: '440800',
      label: '湛江市'
    },
    {
      id: '440900',
      label: '茂名市'
    },
    {
      id: '441200',
      label: '肇庆市'
    },
    {
      id: '441300',
      label: '惠州市'
    },
    {
      id: '441400',
      label: '梅州市'
    },
    {
      id: '441500',
      label: '汕尾市'
    },
    {
      id: '441600',
      label: '河源市'
    },
    {
      id: '441700',
      label: '阳江市'
    },
    {
      id: '441800',
      label: '清远市'
    },
    {
      id: '441900',
      label: '东莞市'
    },
    {
      id: '442000',
      label: '中山市'
    },
    {
      id: '442101',
      label: '东沙群岛'
    },
    {
      id: '445100',
      label: '潮州市'
    },
    {
      id: '445200',
      label: '揭阳市'
    },
    {
      id: '445300',
      label: '云浮市'
    }
  ],
  [
    {
      id: '450100',
      label: '南宁市'
    },
    {
      id: '450200',
      label: '柳州市'
    },
    {
      id: '450300',
      label: '桂林市'
    },
    {
      id: '450400',
      label: '梧州市'
    },
    {
      id: '450500',
      label: '北海市'
    },
    {
      id: '450600',
      label: '防城港市'
    },
    {
      id: '450700',
      label: '钦州市'
    },
    {
      id: '450800',
      label: '贵港市'
    },
    {
      id: '450900',
      label: '玉林市'
    },
    {
      id: '451000',
      label: '百色市'
    },
    {
      id: '451100',
      label: '贺州市'
    },
    {
      id: '451200',
      label: '河池市'
    },
    {
      id: '451300',
      label: '来宾市'
    },
    {
      id: '451400',
      label: '崇左市'
    }
  ],
  [
    {
      id: '460100',
      label: '海口市'
    },
    {
      id: '460200',
      label: '三亚市'
    },
    {
      id: '460300',
      label: '三沙市'
    },
    {
      id: '469001',
      label: '五指山市'
    },
    {
      id: '469002',
      label: '琼海市'
    },
    {
      id: '469003',
      label: '儋州市'
    },
    {
      id: '469005',
      label: '文昌市'
    },
    {
      id: '469006',
      label: '万宁市'
    },
    {
      id: '469007',
      label: '东方市'
    },
    {
      id: '469025',
      label: '定安县'
    },
    {
      id: '469026',
      label: '屯昌县'
    },
    {
      id: '469027',
      label: '澄迈县'
    },
    {
      id: '469028',
      label: '临高县'
    },
    {
      id: '469030',
      label: '白沙黎族自治县'
    },
    {
      id: '469031',
      label: '昌江黎族自治县'
    },
    {
      id: '469033',
      label: '乐东黎族自治县'
    },
    {
      id: '469034',
      label: '陵水黎族自治县'
    },
    {
      id: '469035',
      label: '保亭黎族苗族自治县'
    },
    {
      id: '469036',
      label: '琼中黎族苗族自治县'
    }
  ],
  [
    {
      id: '500100',
      label: '重庆市'
    }
  ],
  [
    {
      id: '510100',
      label: '成都市'
    },
    {
      id: '510300',
      label: '自贡市'
    },
    {
      id: '510400',
      label: '攀枝花市'
    },
    {
      id: '510500',
      label: '泸州市'
    },
    {
      id: '510600',
      label: '德阳市'
    },
    {
      id: '510700',
      label: '绵阳市'
    },
    {
      id: '510800',
      label: '广元市'
    },
    {
      id: '510900',
      label: '遂宁市'
    },
    {
      id: '511000',
      label: '内江市'
    },
    {
      id: '511100',
      label: '乐山市'
    },
    {
      id: '511300',
      label: '南充市'
    },
    {
      id: '511400',
      label: '眉山市'
    },
    {
      id: '511500',
      label: '宜宾市'
    },
    {
      id: '511600',
      label: '广安市'
    },
    {
      id: '511700',
      label: '达州市'
    },
    {
      id: '511800',
      label: '雅安市'
    },
    {
      id: '511900',
      label: '巴中市'
    },
    {
      id: '512000',
      label: '资阳市'
    },
    {
      id: '513200',
      label: '阿坝藏族羌族自治州'
    },
    {
      id: '513300',
      label: '甘孜藏族自治州'
    },
    {
      id: '513400',
      label: '凉山彝族自治州'
    }
  ],
  [
    {
      id: '520100',
      label: '贵阳市'
    },
    {
      id: '520200',
      label: '六盘水市'
    },
    {
      id: '520300',
      label: '遵义市'
    },
    {
      id: '520400',
      label: '安顺市'
    },
    {
      id: '522200',
      label: '铜仁市'
    },
    {
      id: '522300',
      label: '黔西南布依族苗族自治州'
    },
    {
      id: '522400',
      label: '毕节市'
    },
    {
      id: '522600',
      label: '黔东南苗族侗族自治州'
    },
    {
      id: '522700',
      label: '黔南布依族苗族自治州'
    }
  ],
  [
    {
      id: '530100',
      label: '昆明市'
    },
    {
      id: '530300',
      label: '曲靖市'
    },
    {
      id: '530400',
      label: '玉溪市'
    },
    {
      id: '530500',
      label: '保山市'
    },
    {
      id: '530600',
      label: '昭通市'
    },
    {
      id: '530700',
      label: '丽江市'
    },
    {
      id: '530800',
      label: '普洱市'
    },
    {
      id: '530900',
      label: '临沧市'
    },
    {
      id: '532300',
      label: '楚雄彝族自治州'
    },
    {
      id: '532500',
      label: '红河哈尼族彝族自治州'
    },
    {
      id: '532600',
      label: '文山壮族苗族自治州'
    },
    {
      id: '532800',
      label: '西双版纳傣族自治州'
    },
    {
      id: '532900',
      label: '大理白族自治州'
    },
    {
      id: '533100',
      label: '德宏傣族景颇族自治州'
    },
    {
      id: '533300',
      label: '怒江傈僳族自治州'
    },
    {
      id: '533400',
      label: '迪庆藏族自治州'
    }
  ],
  [
    {
      id: '540100',
      label: '拉萨市'
    },
    {
      id: '542100',
      label: '昌都地区'
    },
    {
      id: '542200',
      label: '山南地区'
    },
    {
      id: '542300',
      label: '日喀则地区'
    },
    {
      id: '542400',
      label: '那曲地区'
    },
    {
      id: '542500',
      label: '阿里地区'
    },
    {
      id: '542600',
      label: '林芝地区'
    }
  ],
  [
    {
      id: '610100',
      label: '西安市'
    },
    {
      id: '610200',
      label: '铜川市'
    },
    {
      id: '610300',
      label: '宝鸡市'
    },
    {
      id: '610400',
      label: '咸阳市'
    },
    {
      id: '610500',
      label: '渭南市'
    },
    {
      id: '610600',
      label: '延安市'
    },
    {
      id: '610700',
      label: '汉中市'
    },
    {
      id: '610800',
      label: '榆林市'
    },
    {
      id: '610900',
      label: '安康市'
    },
    {
      id: '611000',
      label: '商洛市'
    }
  ],
  [
    {
      id: '620100',
      label: '兰州市'
    },
    {
      id: '620200',
      label: '嘉峪关市'
    },
    {
      id: '620300',
      label: '金昌市'
    },
    {
      id: '620400',
      label: '白银市'
    },
    {
      id: '620500',
      label: '天水市'
    },
    {
      id: '620600',
      label: '武威市'
    },
    {
      id: '620700',
      label: '张掖市'
    },
    {
      id: '620800',
      label: '平凉市'
    },
    {
      id: '620900',
      label: '酒泉市'
    },
    {
      id: '621000',
      label: '庆阳市'
    },
    {
      id: '621100',
      label: '定西市'
    },
    {
      id: '621200',
      label: '陇南市'
    },
    {
      id: '622900',
      label: '临夏回族自治州'
    },
    {
      id: '623000',
      label: '甘南藏族自治州'
    }
  ],
  [
    {
      id: '630100',
      label: '西宁市'
    },
    {
      id: '632100',
      label: '海东市'
    },
    {
      id: '632200',
      label: '海北藏族自治州'
    },
    {
      id: '632300',
      label: '黄南藏族自治州'
    },
    {
      id: '632500',
      label: '海南藏族自治州'
    },
    {
      id: '632600',
      label: '果洛藏族自治州'
    },
    {
      id: '632700',
      label: '玉树藏族自治州'
    },
    {
      id: '632800',
      label: '海西蒙古族藏族自治州'
    }
  ],
  [
    {
      id: '640100',
      label: '银川市'
    },
    {
      id: '640200',
      label: '石嘴山市'
    },
    {
      id: '640300',
      label: '吴忠市'
    },
    {
      id: '640400',
      label: '固原市'
    },
    {
      id: '640500',
      label: '中卫市'
    }
  ],
  [
    {
      id: '650100',
      label: '乌鲁木齐市'
    },
    {
      id: '650200',
      label: '克拉玛依市'
    },
    {
      id: '652100',
      label: '吐鲁番地区'
    },
    {
      id: '652200',
      label: '哈密地区'
    },
    {
      id: '652300',
      label: '昌吉回族自治州'
    },
    {
      id: '652700',
      label: '博尔塔拉蒙古自治州'
    },
    {
      id: '652800',
      label: '巴音郭楞蒙古自治州'
    },
    {
      id: '652900',
      label: '阿克苏地区'
    },
    {
      id: '653000',
      label: '克孜勒苏柯尔克孜自治州'
    },
    {
      id: '653100',
      label: '喀什地区'
    },
    {
      id: '653200',
      label: '和田地区'
    },
    {
      id: '654000',
      label: '伊犁哈萨克自治州'
    },
    {
      id: '654200',
      label: '塔城地区'
    },
    {
      id: '654300',
      label: '阿勒泰地区'
    },
    {
      id: '659001',
      label: '石河子市'
    },
    {
      id: '659002',
      label: '阿拉尔市'
    },
    {
      id: '659003',
      label: '图木舒克市'
    },
    {
      id: '659004',
      label: '五家渠市'
    }
  ],
  [
    {
      id: '710100',
      label: '台北市'
    },
    {
      id: '710200',
      label: '高雄市'
    },
    {
      id: '710300',
      label: '台南市'
    },
    {
      id: '710400',
      label: '台中市'
    },
    {
      id: '710500',
      label: '金门县'
    },
    {
      id: '710600',
      label: '南投县'
    },
    {
      id: '710700',
      label: '基隆市'
    },
    {
      id: '710800',
      label: '新竹市'
    },
    {
      id: '710900',
      label: '嘉义市'
    },
    {
      id: '711100',
      label: '新北市'
    },
    {
      id: '711200',
      label: '宜兰县'
    },
    {
      id: '711300',
      label: '新竹县'
    },
    {
      id: '711400',
      label: '桃园县'
    },
    {
      id: '711500',
      label: '苗栗县'
    },
    {
      id: '711700',
      label: '彰化县'
    },
    {
      id: '711900',
      label: '嘉义县'
    },
    {
      id: '712100',
      label: '云林县'
    },
    {
      id: '712400',
      label: '屏东县'
    },
    {
      id: '712500',
      label: '台东县'
    },
    {
      id: '712600',
      label: '花莲县'
    },
    {
      id: '712700',
      label: '澎湖县'
    },
    {
      id: '712800',
      label: '连江县'
    }
  ],
  [
    {
      id: '810100',
      label: '香港岛'
    },
    {
      id: '810200',
      label: '九龙'
    },
    {
      id: '810300',
      label: '新界'
    }
  ],
  [
    {
      id: '820000',
      label: '澳门特别行政区'
    }
  ]
]

export default {
  columns,
  columnData
}
