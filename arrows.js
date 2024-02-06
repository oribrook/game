const pressedKeys = {};

document.addEventListener('keydown', function (event) {  
        
    if (event.key === 'ArrowRight') {      
        currentPosition = 'right';        
        bgDir = 'r';
        gameSpeed += 5        
    }
    if (event.key === 'ArrowUp') {              
        playerY -= 5;        
    }
    if (event.key === 'ArrowLeft') {      
        currentPosition = 'left';                
        gameSpeed -= 5        
    }
    if (event.key === 'ArrowDown') {                           
        playerY += 5;        
    }    
    if (event.code === 'Space') {        
        startShot()        
    }    
  });