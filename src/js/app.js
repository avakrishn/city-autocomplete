'use-strict';

const App = {
    places_endpoint : './src/js/cities.json',

    loadPlaces : async () =>{
        // Async Await
        const places_response = await fetch(App.places_endpoint);
        const places = await places_response.json();
        console.log(places);

        // Promises
        // const places_promise_data = [];
        // fetch(places_endpoint)
        //     .then(res => res.json())
        //     .then(data => {
        //         places_promise_data.push(...data);
        //         console.log(places_promise_data);
        //     });
    },

};


window.onload = () => {
    App.loadPlaces();
}

