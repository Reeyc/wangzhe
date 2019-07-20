import axios from 'axios'

export default function getEquip() {
  return axios.get("/static/equip.json").then(res => {
    return Promise.resolve(res.data)
  })
};