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
            parentEl.style.width = '98vw';
            parentEl.style.height = '98vh';
        
            let arr = [];
            let n = getSize();
            for (i = 1; i <= n*n; i++) {
                arr.push(i);
            }
            arr.sort(shuffle);
            
            for (let j = 0; j < n*n; j++) {
                let cell = document.createElement('div');
                cell.innerText = arr[j];
                cell.style.color = `rgb(${rand(0,200)},${rand(0,200)},${rand(0,200)})`;
                cell.style.fontSize = rand(0.5, 1) * 20 + 'px';
                cell.style.height = (95/n) + 'vh';
                cell.style.width = (95/n) + 'vw';
                cell.style.border = '1px solid black';
                cell.style.textAlign = 'center';
                cell.style.float = 'left';
                parentEl.appendChild(cell);
            }
            
        }
    }


}());