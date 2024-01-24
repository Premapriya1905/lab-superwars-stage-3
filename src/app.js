const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];

    // Instead of forloop use Map method
    // Code here
    players.map((names,index)=>{
        let  a=index%2 ? "villain":"hero"
        let New = {
            name: names,
            type:a,
            strength:getRandomStrength(),
            image:`images/super-${index+1}.png`
        }
        detailedPlayers.push(New)
    })

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    players.map((player)=>{
        if (player.type==type){

        let div = `<div class="player">
                        <img src="${player.image}" alt="">
                        <div class="name">${player.name}</div>  
                        <div class="strength">${player.strength}</div>
                       </div>`;
            fragment += div;
        }
    })

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}