import Axios from "axios";

export default (token) => ({
    load: () => (
        Axios.get(process.env.REACT_APP_URL_CONDITIONAPI.concat('/condition/condition/all'),{headers:{Authorization: `Bearer ${token}`}})
        .then(res => res.data)
        .catch(err => Promise.reject(err.response.data))
    )
})