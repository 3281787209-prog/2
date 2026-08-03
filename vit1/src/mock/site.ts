export const summaryCards = [
  { label: '项目数量', value: '12', note: '覆盖边坡开挖、支护、弃渣调配等专题' },
  { label: '模型工况', value: '26', note: '支持阶段工况、分区工况、监测回归工况' },
  { label: '切片数据', value: '180+', note: 'X / Y / Z 三方向断面联动查看' },
  { label: '今日预警', value: '03', note: '位移阈值、量算差异、资料缺失' }
]

export const modules = [
  {
    title: '土石平衡总览',
    route: '/balance',
    desc: '面向项目级调配、开挖量、回填量、弃渣量、库存量与偏差分析，形成日报/周报/月报。'
  },
  {
    title: '开挖三维分析',
    route: '/viewer',
    desc: '展示工况模型、位移云图、切片序列、透明度控制与量算结果。'
  },
  {
    title: '锚索结构可视化',
    route: '/structure',
    desc: '查看锚索编号、结构参数、空间排布、层位关系和详细属性信息。'
  },
  {
    title: '模型资产中心',
    route: '/models',
    desc: '管理模型版本、上传清单、manifest、对象存储路径与接入说明。'
  }
]

export const balanceMetrics = [
  { name: '累计开挖量', value: '126.8 万m³', trend: '+4.2%' },
  { name: '累计回填量', value: '81.4 万m³', trend: '+2.8%' },
  { name: '弃渣量', value: '33.6 万m³', trend: '-1.3%' },
  { name: '库存量', value: '11.8 万m³', trend: '+0.6%' }
]

export const balanceTable = [
  { zone: '左岸坝肩', excavate: '18.2', backfill: '12.1', waste: '4.3', stock: '1.8', status: '正常' },
  { zone: '右岸基坑', excavate: '23.7', backfill: '13.8', waste: '7.5', stock: '2.4', status: '关注' },
  { zone: '导流洞进口', excavate: '14.5', backfill: '9.2', waste: '3.1', stock: '2.2', status: '正常' },
  { zone: '交通洞联络段', excavate: '9.3', backfill: '5.4', waste: '2.6', stock: '1.3', status: '预警' }
]

export const structureList = [
  { id: 'f377', spec: 'PCD15钢绞线106.3m', angle: 'N35°-40°/SW', grade: 'Ⅳ', stress: '1.75 GPa/m' },
  { id: 'f374', spec: 'PCD10钢绞线88.4m', angle: 'N18°-35°/SE', grade: 'Ⅲ', stress: '1.61 GPa/m' },
  { id: 'f368', spec: 'PCD10钢绞线106.3m', angle: 'N35°-40°/SW', grade: 'Ⅳ', stress: '1.75 GPa/m' },
  { id: 'f351', spec: 'PCD12钢绞线96.0m', angle: 'N25°-33°/SW', grade: 'Ⅳ', stress: '1.69 GPa/m' }
]

export const workflow = [
  '场景录入：把工区、工况、边坡、结构、监测点、平衡规则统一建模。',
  '数据接入：接入 index.json、VTP 模型、Excel 台账、测量成果与监测数据。',
  '业务分析：生成土石平衡、位移云图、切片断面、量算结果和构件属性。',
  '成果输出：形成项目总览、业务详情页、模型查看页与后续接口对接页面。'
]
