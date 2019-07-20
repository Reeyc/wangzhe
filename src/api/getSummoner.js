import axios from 'axios'

export default function getSummoner() {
  return axios.get("/static/summoner.json").then(res => {
    return Promise.resolve(res.data)
  })
};
