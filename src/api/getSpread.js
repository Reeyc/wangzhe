import axios from 'axios'

export default function getSpread() {
  return axios.all([
      axios.get("/api/herodetail.json"),
      axios.get("/api/ming.json"),
      axios.get("/api/summoner.json"),
      axios.get("/api/equip.json")
    ])
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(e => {
      console.log(e);
    });
};
