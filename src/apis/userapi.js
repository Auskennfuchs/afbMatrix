export default {
    login: (credentials) => (
        Promise.resolve({
            name: "Bankmitarbeiter, Test",
            jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDEwMTAxMSIsIm5hbWUiOiJCYW5rbWl0YXJiZWl0ZXIsIFRlc3QiLCJpc3MiOiJDTVNERSIsInJvbGVzIjpbIkJBTksiLCJBRE1JTiJdLCJwYXJlbnRJZCI6IjEwMTAxMDEwIiwiZW1hIjoibXNjQGFmYi5kZSJ9.w-V8xqSW3AGorMPYKIlHcyhHzLFAZ6_BjwPikWhNhww"
        })
    )
}