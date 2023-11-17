function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  
  function videoUrl(aaa){
    document.getElementById("slider").src =aaa;
  

    }
     const menu=document.querySelector('menu');
    overlay.addEventListener('click' ,sabit);

    function sabit(e){
      e.preventDefault();
    }