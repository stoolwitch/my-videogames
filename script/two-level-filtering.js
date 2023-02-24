let games = [
    {
        name: "The Last of Us",
        console: 'PS3',
        genre: 'Stealth',
        genre: 'Survival',
        genre: 'Horror',
    },
    {
        name: "The Last of Us Part II",
        console: 'PS4',
        genre: 'Horror',
        genre: 'Stealth',
        genre: 'Survival',
    },
    {
        name: "Lego Star Wars The Skywalker Saga",
        console: 'PS5',
        genre: 'Family',
        genre: 'Puzzle',
    },
    {
        name: "Resident Evil 2",
        console: 'PS1',
        genre: 'Horror',
    },
    {
        name: "Resident Evil 2",
        console: 'PS4',
        genre: 'Horror',
    },
];

let filteredGames = [];
for (let i= 0; i<games.length; i++) {
    if ((games[i].console == 'PS4' || games[i].console == 'PS1') && (games[i].genre == 'Horror' )) {
        filteredGames = [...filteredGames, games[i]];
    }
}
console.log(filteredGames);