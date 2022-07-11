let api_key="AIzaSyATp3ljyUuKfR6WLkyPdiMjiHDiCzacc_8"
let video_http="https://www.googleapis.com/youtube/v3/"

export const getVideos = async () => {
    return fetch(`${video_http}search?` + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        maxResults: 25,
        q: 'javascript tutorial'
    }))
    .then(res => res.json())
    .then(data => {
        return data
    })
}

export const getVideo = async () => {
    return fetch(`${video_http}videos?` + new URLSearchParams({
        key: api_key,
        id:"8dWL3wF_OMw",
        part: 'snippet',
        maxResults: 1
    }))
    .then(res => res.json())
    .then(data => {
        return data
    })
}

