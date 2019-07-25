import axios from 'axios'

export default function getEquip() {
  return axios.get("/api/equip.json").then(res => {
    res.data.forEach(item => {
      item.imgUrl = `https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`;
    });
    return Promise.resolve(res.data)
  })
};
