document.body.onkeyup = function(e){
    if(e.key == ' '){
        document.querySelector('.roar').play();
        const lionClass = document.querySelector('.lion').classList;
        lionClass.toggle('show');
      
        const leftLeafClass = document.querySelector('.leaf.left').classList;
        leftLeafClass.toggle('move');
    
        const rightLeafClass = document.querySelector('.leaf.right').classList;
        rightLeafClass.toggle('move');
    }
};