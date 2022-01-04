import fetch from 'node-fetch';

let API = 'https://rickandmortyapi.com/api/character'

function fetchData(API, callback) {
    fetch(API)
        .then(response => response.json()) 
        .then(data => console.log(data))
}

fetchData(API, function(data1) {
    fetchData(API + data1.results[0].id, function(data2) {
        fetchData(data2.origin.url);
        console.log(data1.info.count)
        console.log(data2.name)
    })
})