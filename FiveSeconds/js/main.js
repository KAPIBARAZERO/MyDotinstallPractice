(function() {
  'use strict'

  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var result = document.getElementById('result');
  var startTime;
  var isStarted = false;

  start.addEventListener('click', function(){
    if (isStarted === true){
      return;
    }
    isStarted = true;
    startTime = Date.now();
    this.className = 'pushed';
    stop.className = '';
    result.textContent = '0.000';
    result.className = 'standby';
  });

  stop.addEventListener('click', function(){
    var elapsedtime;
    var diff;
    if (isStarted === false){
      return;
    }
    isStarted = false;
    elapsedtime = (Date.now() - startTime) / 1000;
    result.textContent = elapsedtime.toFixed(3);
    this.className = 'pushed';
    start.className = '';
    diff = elapsedtime - 5.0
    if(Math.abs(diff) < 1.0){
      result.className = 'perfect';
    }
  });

})();
