import axios from 'axios'

export default function getHeroList() {
  return axios.get("/api/herolist.json").then(res => {
    res.data.forEach(item => {
      item.imgUrl = `https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`;
    });
    return Promise.resolve(res.data)
  })
};
