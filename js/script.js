'use strct';

// bottone play

const playBtn = document.getElementById('play');

    function play(){


    const NUM_BOMB = 16;
    const bombsPosition = [];    
    
    let numCell;
    const gameField = document.getElementById('game-field');
    gameField.innerHTML = '';
    const levelHTML = document.getElementById('livello');
    const level = levelHTML.value;
    switch(level) {
        case '1':
        default:
            numCell = 100;
            break;
        case '2':
            numCell = 81;
            break;
        case '3':
            numCell = 49;
            break;
    }



    // funzione genera celle

    function drawCell(num){
        const cellPerSide = Math.sqrt(numCell);
        const cell = document.createElement('div');
        cell.className = 'square';
        cell.style.width = `calc(100%  / ${cellPerSide}) `;
        cell.style.height = `calc(100% / ${cellPerSide} ) `;
        cell.innerHTML = `
        <span>${num}</span> 
        `;

        cell.addEventListener('click', function(){
            
            this.classList.add('green')
        }
            
        )
        return cell;
    }


    while(bombsPosition.length < NUM_BOMB){
        const bomb = randomNumber(1, numCell);
        if(!bombsPosition.includes(bomb)){
            bombsPosition.push(bomb);
        }
    }

    console.log(bombsPosition);

    // funzione che genera il campo minato
    function drawGrid(){
        
        const grid = document.createElement('div');
        grid.className = 'grid';
        
        // for loop che genera le celle in base alla difficoltà

        for (let i = 1; i <= numCell; i++){
            const cell = drawCell(i);
            grid.appendChild(cell);
        }

        // appendo le celle alla griglia
        gameField.appendChild(grid);
    }

    // evocazione funzione
    drawGrid();
}

// event listener bottone play

playBtn.addEventListener('click', play);