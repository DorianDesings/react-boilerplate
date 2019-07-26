import axios from 'axios'
import adminControl from './adminControl'

const apiKey = 'AIzaSyDmvQr_2iPPzS30Tn_zfgigxn3r2wBtArY'
const requests = {}

requests.getLastVideos = async (maxResults = 3) => {
    const lastVideos = localStorage.getItem('lastVideos')
    if (lastVideos) {
        return JSON.parse(lastVideos)
    } else {
        const url = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCzuwt7Pi_VB8cP5q5UE4u-A&key=${apiKey}&type=video&maxResults=${maxResults}`
        try {
            const request = await axios.get(url)
            const results = request.data.items;
            localStorage.setItem('lastVideos', JSON.stringify(results))
            return results
        } catch (error) {
            console.log(error)
        }
    }
}

requests.getCourses = async (maxResults = 50) => {
    const currentCourses = localStorage.getItem('currentCourses')
    if (currentCourses && !adminControl.needUpdate) {
        const filterResults = JSON.parse(currentCourses).filter(course => course.snippet.title.indexOf('Curso') !== -1 && course.snippet.title.indexOf('desde 0') !== -1)
        return filterResults
    } else {
        const url = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCzuwt7Pi_VB8cP5q5UE4u-A&key=${apiKey}&type=playlist&maxResults=${maxResults}`
        try {
            const request = await axios.get(url)
            const results = request.data.items;
            const filterResults = results.filter(course => course.snippet.title.indexOf('Curso') !== -1 && course.snippet.title.indexOf('desde 0') !== -1)
            localStorage.setItem('currentCourses', JSON.stringify(results))
            return filterResults
        } catch (error) {
            console.log(error)
        }
    }
}

export default requests