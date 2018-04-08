;(function() {
    //Функция создания поля
    function getSize() {
            return parseInt(prompt('Введите размер поля'));
        };
    
    function shuffle() {
        return rand(-1, 1);
    }
    
    function rand(min,max) {
        return Math.floor(
            Math.random() * (max - min + 1) ) + min;
    }
            
            
    window.matrix = {
        getField: function(parentId) {
            let parentEl = document.getElementById(parentId);   
            let arr = [];
            let n = getSize();
            
            for (i = 1; i <= n*n; i++) {
                arr.push(i);
            }
            arr.sort(shuffle);
            
            for (let i = 0; i < n; i++) {
                let row = document.createElement('tr');
                for (let j = 0; j < n; j++) {
                    let cell = document.createElement('td');
                    cell.innerText = arr[0];
                    arr.splice(0,1);
                    cell.style.color = `rgb(${rand(0,200)},${rand(0,200)},${rand(0,200)})`;
                    cell.style.fontSize = rand(12,40) + 'px';
                    cell.style.border = '1px solid black';
                    cell.style.width = "100px"; 
                    cell.style.height = cell.style.width;
                    cell.style.textAlign = 'center';
                    row.appendChild(cell);
                }
                parentEl.appendChild(row);
            }
            
            
            
        }
    }


}());