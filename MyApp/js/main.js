(function(){
  'use strict';

  var price = document.getElementById('price');
  var num = document.getElementById('num');
  var unit = document.getElementById('unit');
  var btn = document.getElementById('btn');
  var result = document.getElementById('result');
  var reset = document.getElementById('reset');

  function checkInput() {
    if(
      price.value.match(/^[1-9][0-9]*$/) !== null &&
      num.value.match(/^[1-9][0-9]*$/) !== null
    ){
      btn.classList.remove('disabled');
    }else{
      btn.classList.add('disabled');
    }
  }

  btn.addEventListener('click',function() {
    var payLess;
    var short;
    var payMore;
    var over;
    var str;

    if(this.classList.contains('disabled') === true){
      return;
    }
    //1000円を3人で割り勘する場合
    //A 一人当たり300円(payLess)支払って　100円(short)足りない
    payLess = Math.floor(price.value / num.value / unit.value) * 100;
    short = price.value - (payLess * num.value);
    //B 一人当たり400円(payMore)支払って　200円(over)多い
    payMore = Math.ceil(price.value / num.value / unit.value) * 100;
    over = Math.abs(price.value - (payMore * num.value));

    if(over === 0 && short === 0){
      str = '一人 ' + (price.value / num.value) + '円ちょうどです。'
    }else{
      str = '一人 ' + payLess + '円だと' + short + '円足りません。' +
            '一人 ' + payMore + '円だと' + over + '円余ります。';
    }

    result.textContent = str;
    reset.classList.remove('hidden');
  });

  price.addEventListener('keyup', checkInput);
  num.addEventListener('keyup', checkInput);

  reset.addEventListener('click', function(){
    result.textContent = 'ここに結果を表示します。';
    price.value = '';
    num.value = '';
    unit.value = 100;
    btn.classList.add('disabled');
    reset.classList.add('hidden');
    price.focus();
  });

  price.focus();
})();
