import {
  getType
} from './dom'

//格式化英雄数据渲染图表
export const formatHero = data => {
  if (!data || !getType(data, 'Array')) return
  let count1 = 0,
    count2 = 0,
    count3 = 0,
    count4 = 0,
    count5 = 0,
    count6 = 0
  data.forEach(item => {
    switch (Number(item.hero_type)) {
      case 1:
        ++count1
        break;
      case 2:
        ++count2
        break;
      case 3:
        ++count3
        break;
      case 4:
        ++count4
        break;
      case 5:
        ++count5
        break;
      case 6:
        ++count6
        break;
    }
  })
  return [{
    value: count1,
    name: "战士"
  }, {
    value: count2,
    name: "法师"
  }, {
    value: count3,
    name: "坦克"
  }, {
    value: count4,
    name: "刺客"
  }, {
    value: count5,
    name: "射手"
  }, {
    value: count6,
    name: "辅助"
  }]
}

//格式化武器数据渲染图表
export const formatEquip = data => {
  if (!data || !getType(data, 'Array')) return
  let count1 = 0,
    count2 = 0,
    count3 = 0,
    count4 = 0,
    count5 = 0,
    count7 = 0
  data.forEach(item => {
    switch (Number(item.item_type)) {
      case 1:
        ++count1
        break;
      case 2:
        ++count2
        break;
      case 3:
        ++count3
        break;
      case 4:
        ++count4
        break;
      case 5:
        ++count5
        break;
      case 7:
        ++count7
        break;
    }
  })
  return [count1, count2, count3, count4, count5, count7]
}
