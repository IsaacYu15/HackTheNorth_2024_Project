import {fetchVideoTitle} from './dataFetch.js';

console.log("hello");
    fetchVideoTitle().then(title => {
        console.log('Video Title:', title);
    }).catch(error => {
        console.log('Error:', error);
    });