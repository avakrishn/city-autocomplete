'use-strict';

const App = {
    places_endpoint: './src/js/cities.json',

    places: [],

    fetchPlaces: async function (){
        // Async Await 
        const places_response = await fetch(this.places_endpoint);
        const places = await places_response.json();
        this.places = await places;

        this.placeholderText("start screen");


        // Promises (another way to fetch and resolve data)
        // const places = [];
        // fetch(places_endpoint)
        //     .then(res => res.json())
        //     .then(data => {
        //         places.push(...data);
        //         console.log(places);
        //     });

        return this.bindEvents(places);
    },

    bindEvents: function (places){
        const input = document.querySelector('input.search');

        input.addEventListener('change', App.displayPlaces);

        input.addEventListener('keyup', App.displayPlaces);

        // Alternative ways to add Event Listener callback

        // ES6
        // input.addEventListener('change', (event) => App.findMatches(event.target.value, places));

        // input.addEventListener('keydown', (event) => App.findMatches(event.target.value, places));

        // ES5
        // input.addEventListener('change', function () {
        //     App.findMatches(this.value, places)
        // });

        // input.addEventListener('keydown', function () { 
        //     App.findMatches(this.value, places)});
       

    },

    

};


window.onload = () => {
    App.fetchPlaces();


}

