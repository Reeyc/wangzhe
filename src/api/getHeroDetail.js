import axios from 'axios'

export default function getHeroDetail() {
  return axios.get("/static/herodetail.json").then(res => {
    return Promise.resolve(res.data)
  })
};