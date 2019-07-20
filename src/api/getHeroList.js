import axios from 'axios'

export default function getHeroList() {
  return axios.get("/static/herolist.json").then(res => {
    return Promise.resolve(res.data)
  })
};
