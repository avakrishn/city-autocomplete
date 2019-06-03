'use-strict';

const App = {
    places_endpoint: './src/js/cities.json',

    places: [],

    placeholderText: function (actionType){
        const suggestions = document.querySelector('ul.suggestions');
        const firstLI = document.createElement('li');
        const secondLI = document.createElement('li');
        suggestions.innerHTML = "";

        if(actionType === "start screen"){
            firstLI.innerText = "Filter for a city...";
            secondLI.innerText = "...Or a state";
        }else if(actionType === "not found"){
            firstLI.innerText = "City or state not found...";
            secondLI.innerText = "...Try a new search";
        }
        
        suggestions.append(firstLI, secondLI);
    },

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

    displayPlaces: function (){
        
        if(this.value === ""){
            return App.placeholderText("start screen");
        }
        const suggestions = document.querySelector('ul.suggestions');
        const matches = App.findMatches(this.value, App.places);
        suggestions.innerHTML = "";

        console.log(matches);
       
        matches.forEach(match => {
            const li = document.createElement('li');
            const name = document.createElement('span');
            const population = document.createElement('span');
            const highlight = document.createElement('span');
            // const popNumber = 
            

            highlight.classList.add('hl');
            highlight.innerText = this.value;
            
            const regex = new RegExp(this.value, 'gi');

            const cityName = match.city.replace(regex, highlight.outerHTML);
            const stateName = match.state.replace(regex, highlight.outerHTML);

            name.classList.add('name');
            name.innerHTML = `${cityName}, ${stateName}`;

            population.classList.add('population');
            population.innerHTML = match.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            li.append(name, population);
            return suggestions.append(li);

        });

        if(suggestions.childNodes.length === 0){
            return App.placeholderText("not found");
        }
        
    },

    findMatches: function (strToMatch, places){
        return places.filter(place => {
            const regex = new RegExp(strToMatch, 'gi');
            return place.city.match(regex) || place.state.match(regex);
        });
    },

};


window.onload = () => {
    App.fetchPlaces();


}

