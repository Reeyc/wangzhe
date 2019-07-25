import axios from 'axios'

export default function getSummoner() {
  return axios.get("/api/summoner.json").then(res => {
    return Promise.resolve(res.data)
  })
};
