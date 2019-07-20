import axios from 'axios'

export default function getMing() {
  return axios.get("/static/ming.json").then(res => {
    return Promise.resolve(res.data)
  })
};
