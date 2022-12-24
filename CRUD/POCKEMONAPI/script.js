

const fetchKantoPokemon = async ()=>{

    try{

   const request =  await fetch ('https://pokeapi.co/api/v2/pokemon?limit=50');

   const response =  await request.json();

   response.results.map((ele)=>{
   
    fetchPokemonData (ele);

   })
}
catch(er){

  throw  er;

}
   
}

const fetchPokemonData = async (pokemon)=>{

    try{

    let url = pokemon.url;

   const requestUrl =  await fetch(url);
   const responseUrl = await requestUrl.json();

   renderPokemon(responseUrl);
   pagination(responseUrl);
 console.log(responseUrl);    
}

    catch(er){

        throw er
    }
}

fetchKantoPokemon()



const renderPokemon = (pokeData)=>{

    let allPokemonContainer = document.getElementById('poke-container');

    let pokeContainer = document.createElement("div") // div will be used to hold the data/details for indiviual pokemon.{}
    pokeContainer.classList.add('ui', 'card');
    pokeContainer.setAttribute('id', 'cardfomation')

    createPokeImage(pokeData.id, pokeContainer);

    let pokeName = document.createElement('h4') 
    let pokeNametoup = pokeData.name.charAt(0).toUpperCase() + pokeData.name.substring(1); 
    pokeName.innerText = ( `Name : ${pokeNametoup}`)

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `Weight: ${pokeData.weight}`
    
    let pokeTypes = document.createElement('select')
    pokeTypes.classList.add('form-select')
    pokeTypes.setAttribute('aria-label', 'Default select example')
    pokeTypes.innerHTML = `<option selected > Pokemon Abilities</option>`

    let pokeMoves = document.createElement('select');
    pokeMoves.classList.add('form-select')
    pokeMoves.setAttribute('aria-label', 'Default select example')
    pokeMoves.innerHTML = `<option selected > Pokemon Moves</option>`

    createTypes(pokeData.abilities, pokeTypes) // helper function to go through the types array and create li tags for each one
    createmoves (pokeData.moves , pokeMoves)

    pokeContainer.append(pokeName, pokeNumber, pokeTypes, pokeMoves);   //appending all details to the pokeContainer div
    allPokemonContainer.appendChild(pokeContainer);       //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}

  
const createTypes = (types, ul)=>{

    types.map((ele)=>{

        let typeli = document.createElement('option');
        typeli.innerText = ele['ability']['name'];
        ul.append(typeli);

    })

}

const createmoves = (move, ul)=>{

    move.map((ele)=>{
        let makingMove = document.createElement('option');
        makingMove.innerText = ele['move']['name']; 
        ul.append(makingMove);
    })

}


function createPokeImage(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.classList.add('picsize'); 
    pokeImage.srcset = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokeID}.svg`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}




 

