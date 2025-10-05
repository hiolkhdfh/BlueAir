document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.getElementById('nav-toggle');
  var navList=document.getElementById('nav-list');
  if(toggle){
    toggle.addEventListener('click',function(){
      var expanded=this.getAttribute('aria-expanded')==='true';
      this.setAttribute('aria-expanded',String(!expanded));
      navList.classList.toggle('open');
    });
  }
  var search=document.getElementById('search-input');
  var clear=document.getElementById('search-clear');
  if(search){
    search.addEventListener('input',function(){
      var q=this.value.trim().toLowerCase();
      var cards=document.querySelectorAll('.card');
      cards.forEach(function(card){
        var text=card.textContent.toLowerCase();
        card.style.display=text.indexOf(q)!==-1?'':'none';
      });
    });
  }
  if(clear){
    clear.addEventListener('click',function(){
      var s=document.getElementById('search-input');
      s.value='';
      s.dispatchEvent(new Event('input'));
      s.focus();
    });
  }
});
