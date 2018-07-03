import Axios from "axios";

export default {
    login: (credentials) => (
        Axios.post(process.env.REACT_APP_URL_USERAPI.concat('/api/authentication/authenticate'),credentials)
        .then(res => res.data)
        .catch(err => Promise.reject(err))
/*        Promise.resolve({
            name: "Bankmitarbeiter, Test",
            jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDEwMTAxMSIsIm5hbWUiOiJCYW5rbWl0YXJiZWl0ZXIsIFRlc3QiLCJpc3MiOiJDTVNERSIsInJvbGVzIjpbIkJBTksiLCJBRE1JTiJdLCJwYXJlbnRJZCI6IjEwMTAxMDEwIiwiZW1hIjoibXNjQGFmYi5kZSJ9.w-V8xqSW3AGorMPYKIlHcyhHzLFAZ6_BjwPikWhNhww"
        })*/
    )
}