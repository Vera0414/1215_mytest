// import axios from "axios";

// export default PitchingStatsRequest = axios.create({
//     baseURL: "http://lookup-service-prod.mlb.com/json"
// })

import axios from "axios";

let axiosRequest = axios.create({
    baseURL: "https://randomuser.me/api/"
})

export const twoUser = async function () {
    let res = await axiosRequest.get("?results=2");
    console.log(res.data.results.length)
}

export const fiveUser = async function () {
    let res = await axiosRequest.get("?results=5");
    console.log(res.data.results.length)
}
