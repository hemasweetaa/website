document.querySelectorAll('.btnco').forEach(function(e) {
    e.addEventListener('click', function() {
        if (this.style.backgroundColor=="red"){
            this.style.backgroundColor="green"
        }else{
      this.style.backgroundColor = "red";
    }
    })
  });