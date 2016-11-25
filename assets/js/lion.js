document.body.onkeyup = function(e){
    if(e.key == ' '){
        document.querySelector('.roar').play();
        const lionClass = document.querySelector('.lion').classList;
        lionClass.toggle('show');

      	setTimeout(function(){
	        lionClass.toggle('show');
      	},2000);
    }
};