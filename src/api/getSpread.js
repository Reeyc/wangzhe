import axios from 'axios'

export default function getSpread() {
  return axios.all([
      axios.get("/static/herodetail.json"),
      axios.get("/static/ming.json"),
      axios.get("/static/summoner.json"),
      axios.get("/static/equip.json")
    ])
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(e => {
      console.log(e);
    });
};
