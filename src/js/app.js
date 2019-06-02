'use-strict';

const App = {
    places_endpoint : './src/js/cities.json',

    fetchPlaces : async () =>{
        // Async Await 
        const places_response = await fetch(App.places_endpoint);
        const places = await places_response.json();

        // Promises
        // const places_promise_data = [];
        // fetch(places_endpoint)
        //     .then(res => res.json())
        //     .then(data => {
        //         places_promise_data.push(...data);
        //         console.log(places_promise_data);
        //     });

        App.bindEvents(places);
    },

    findMatches: (strToMatch, places) => {
        
    },

    bindEvents : (places) =>{
        console.log(places);
        const input = document.querySelector('input.search');
        input.addEventListener('change', (event) => {
            console.log(event.target.value);
        });

        input.addEventListener('keydown', (event) => {
            console.log(event.target.value);
        });

    }, 


};


window.onload = () => {
    App.fetchPlaces();
}

