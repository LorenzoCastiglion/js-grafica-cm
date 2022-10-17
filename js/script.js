'use strct';

// bottone play

const playBtn = document.getElementById('play');

    function play(){
    
    removeFirstNotification();
    const loose = document.getElementById('error');
    loose.classList.add('d-none');
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
        <span></span> 
        `;


    // assegnazione delle mine all'aray di celle random
    while(bombsPosition.length < NUM_BOMB){
            const bomb = randomNumber(1, numCell);
            if(!bombsPosition.includes(bomb)){
                bombsPosition.push(bomb);
            }
       
        }
       
        // assegnazione variabile mine
        if(bombsPosition.includes(num)){
            cell.classList.add('mine');
        };

        //event per cambiare colore in base a bomba o meno
        cell.addEventListener('click', function(){
            
            if(cell.classList.contains('mine')){
                 const mineField = document.querySelectorAll('.mine');
                for (let i  = 0; i < mineField.length; i++){
                mineField[i].classList.add('red');
            };
                const loose = document.getElementById('error');
                loose.classList.remove('d-none');
                cell.classList.add('red');
                const divAlert = notificationError('hai perso!');
                loose.append(divAlert);    
            }else{
                 this.classList.add('green');
            };
        }
        )

        return cell;
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