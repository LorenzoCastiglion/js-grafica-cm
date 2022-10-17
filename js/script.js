'use strct';

// bottone play

const playBtn = document.getElementById('play');

    function play(){
    let numCell;




    // funzione genera celle

    function drawCell(numCell){
        const cell = document.createElement('div');
        cell.className = 'square';
        cell.innerHTML = `
        <span>${numCell}</span> 
        `;

        cell.addEventListener('click', function(){
            
            this.classList.add('green')
        }
            
        )
        return cell;

    }

    // funzione che genera il campo minato
    function drawGrid(){
        const gameField = document.getElementById('game-field');
        const grid = document.createElement('div');
        grid.className = 'grid';
        
        // for loop che genera le celle in base alla difficoltà

        for (let i = 1; i < 100; i++){
            const cell = drawCell;
            grid.appendChild('cell');
        }

        // appendo le celle alla griglia
        gameField.appendChild(grid);
    }

    // evocazione funzione
    drawGrid();
}

// event listener bottone play

playBtn.addEventListener('click', play);