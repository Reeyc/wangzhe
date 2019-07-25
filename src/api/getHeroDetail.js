import axios from 'axios'

export default function getHeroDetail() {
  return axios.get("/api/herodetail.json").then(res => {
    return Promise.resolve(res.data)
  })
};