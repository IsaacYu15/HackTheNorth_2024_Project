export const fetchVideoTitle = () => {
const iframe = document.querySelector('iframe[src*="youtube.com"]');

if (iframe) {
    const url = iframe.src;
    
    const videoId = url.split('/embed/')[1]?.split('?')[0];

    if (videoId) {
        fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyCYxG_p3Z8fD_T7ysCoo1WTvRyZxV4dEds&part=snippet`)
            .then(response => response.json())
            .then(data => {
                const title = data.items[0]?.snippet?.title;
                console.log('Video Title:', title);
            })
            .catch(error => console.error('Error fetching video details:', error));
    } else {
        console.log('No video ID found in URL.');
    }
} else {
    console.log('No YouTube video iframe found on this page.');
}
}
