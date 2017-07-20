(function(){
//画像をランダムに表示する感じにしたい
//フォルダの中身を適当に拾うようにすると楽だったけどフォルダをいじるのは難しそうなのでもう最初に何枚か決めて宣言してしまうかー種類が多くて面倒臭いのだよなー
$('#gachabutton').click(function(){
     var gacha = Math.floor(Math.random()*6);
    //document.write("<img src='illust/gacha/"+gacha+".PNG' width='128' height='128'>");
    $('#gacha-area').html("<img src='illust/gacha/"+gacha+".PNG' width='128' height='128'>");
    
});
   // var gacha = Math.floor(Math.random()*6);
    //document.write("<img src='illust/gacha/"+gacha+".PNG' width='128' height='128'>");
})();