export default function getHeaders() {
    let myData = localStorage.myData
    if (!myData) return false
    let { accessToken } = JSON.parse(myData)
    if (!accessToken) return false
    return {
        Authorization: `Bearer ${accessToken}`
    }
}