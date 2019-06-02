'use-strict';
const places_endpoint = './src/js/cities.json';
window.onload = async () => {

    // Async Await
    const places = await fetch(places_endpoint);
    const data = await places.json();
    console.log(data);

    // Promises
    // fetch(places_endpoint)
    //     .then(res => res.json())
    //     .then(data => console.log(data));

}


