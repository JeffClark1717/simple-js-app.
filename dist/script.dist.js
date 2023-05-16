let pokemonRepository=function(){let t=[];function e(){return t}return{getAll:e,loadList:function e(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(e){e.results.forEach(function(e){var i;let n={name:e.name.charAt(0).toUpperCase()+e.name.slice(1),height:e.height,types:e.types,weight:e.weight,detailsUrl:e.url};"object"==typeof(i=n)?t.push(i):console.log("pokemon input is not correct")})}).catch(function(t){console.error(t)})},addListItem:function t(e,i){let n=document.querySelector(".pokemon-list"),o=document.createElement("li"),p=document.createElement("button");p.setAttribute("data-toggle","modal"),p.setAttribute("data-target","#modal-container"),p.innerText=i+". "+e.name,p.classList.add("button-class","show-modal","btn","btn-outline-info"),o.classList.add("list-group-item"),o.appendChild(p),n.appendChild(o),p.addEventListener("click",()=>{(function t(e){pokemonRepository.loadDetails(e).then(function(){var t;let i,n;t=e,$(".modal-text").html("<p> </p>"),$(".modal-title").html(t.name),t.types[1]?(i=t.types[0].type.name,n=t.types[1].type.name,$(".modal-body").html("<p>Height: "+t.height/10+"m</p><p>Type: "+i+", "+n+"</p><p>Weight: "+t.weight+'lbs.</p><img src="'+t.sprite+'"/><img src="'+t.sprite2+'"/>')):(i=t.types[0].type.name,$(".modal-body").html("<p>Height: "+t.height/10+"m</p><p>Type: "+i+"</p><p>Weight: "+t.weight+'lbs.</p><img src="'+t.sprite+'"/><img src="'+t.sprite2+'"/>')),console.log(e)})})(e)})},loadDetails:function t(e){let i=e.detailsUrl;return fetch(i).then(function(t){return t.json()}).then(function(t){e.height=t.height,e.types=t.types,e.sprite=t.sprites.front_default,e.sprite2=t.sprites.back_default,e.weight=t.weight}).catch(function(t){console.error(t)})}}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t,e){pokemonRepository.addListItem(t,e+1)})});