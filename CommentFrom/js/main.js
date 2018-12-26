(function() {
  'use strinct';

  var comment = document.getElementById('comment');
  var label = document.getElementById('label');

  var LIMIT = 20;
  var WARNING = 10;

  label.innerHTML = LIMIT;


  comment.addEventListener('keyup', function(){
    var remaning = LIMIT - this.value.length;
    label.innerHTML = remaning;
    if (remaning < WARNING){
      label.className = 'warning';
    } else {
      label.className = '';
    }
  });

})();
