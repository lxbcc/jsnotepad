var $font=(function(){
    var $main=$('#main');
    var $fontctx=$(''
        +'<div class="fontstyle">'
        +'<div class="header">'
           +'<div>文字</div>'
        +'</div>'
        +'<div class="main">'
            +'<div class="test">'
                +'<p>字体(F)</p>'
                +'<input type="text"style="width:166px" id="f" value="Agency FB">'
                +'<div class="testin">'
                    +'<ul id="u1">'
                        +'<li>Agency FB</li>'
                        +'<li>楷体</li>'
                        +'<li>Arial</li>'
                        +'<li>Arial Rounded MT</li>'
                        +'<li>Axure Handwriting</li>'
                        +'<li>Bahnschrift</li>'
                        +'<li>Baskerville Old Face</li>'
                        +'<li id="kk">方正舒体</li>'
                    +'</ul>'
                +'</div>'
            +'</div>'            
            +'<div class="test2">'
                +'<p>字形(Y)</p>'
                +'<input type="text"style="width:126px" id="y" value="常规">'
                +'<div class="testin">'
                    +'<ul id="u2">'
                        +'<li style="font-style:normal">常规</li>'
                        +'<li style="font-style:italic">斜体</li>'
                        +'<li style="font-weight:bold">粗体</li>'
                        +'<li style="font-style:italic;font-weight:bold">粗体偏斜</li>'
                    +'</ul>'
                +'</div>'
            +'</div>'
            +'<div class="test3">'
                +'<p>大小(S)</p>'
                +'<input type="text"style="width:96px" id="s" value="16">'
                +'<div class="testin">'
                    +'<ul id="u3">'
                        +'<li>8</li>'
                        +'<li>9</li>'
                        +'<li>10</li>'
                        +'<li>11</li>'
                        +'<li>12</li>'
                        +'<li>14</li>'
                        +'<li>16</li>'
                        +'<li>18</li>'
                        +'<li>20</li>'
                        +'<li>22</li>'
                        +'<li>24</li>'
                        +'<li>26</li>'
                        +'<li>28</li>'
                        +'<li>36</li>'
                        +'<li>48</li>'
                        +'<li>72</li>'
                    +'</ul>'
                +'</div>'
            +'</div>'
        +'</div>'
        +'<fieldset class="exam" id="exam">'
            +'<legend style="margin-left: 10px;">示例</legend>AaBbZzYy</fieldset>'
        +'<div class="R1">'
        +'<p>脚本</p>'
        +'<select name="" id="" class="R">'
            +'<option value="">西欧语言</option>'
            +'<option value="">中文GB2312</option>'
        +'</select>'
    +'</div>'
        +'<input type="button" value="确定" class="btn" id="btn1">'
        +'<input type="button" value="取消" class="btn" id="btn2">'
    +'</div>'
    );
    var $f=$fontctx.find('#f'),
        $y=$fontctx.find('#y'),
        $s=$fontctx.find('#s'),
        $exam=$fontctx.find('#exam'),
        $uli1=$fontctx.find('#u1 li'),
        $uli2=$fontctx.find('#u2 li'),
        $uli3=$fontctx.find('#u3 li');
    var $btn1=$fontctx.find('#btn1'),
        $btn2=$fontctx.find('#btn2');
    var fys={
        family: 'Agency FB',
        style: '常规',
        size: '16',
    };
        function selectfys(){
            $f.select();
            $y.select();
            $s.select();
            for(var i=0;i<$uli1.length;i++){
                (function(i){
                    $($uli1[i]).click(function(){
                        
                        $uli1.attr('class','')
                        $uli1.eq(i).attr('class','selected');
                        $f.val($($uli1[i]).html())
                        $f.select();
                        $exam.css({ 'font-family': $f.val()});
                    })
                })(i)
            }
            for(var i=0;i<$uli2.length;i++){
                (function(i){
                    $($uli2[i]).click(function(){
                        $uli2.attr('class','')
                        $uli2.eq(i).attr('class','selected');
                        $y.val($($uli2[i]).html())
                        $y.select();
                        if($y.val()==='斜体'){
                            $exam.css({ 'font-style':  'italic','font-weight':'normal'});
                        }
                        else if($y.val()==='粗体'){
                            $exam.css({'font-style':  'normal', 'font-weight':  'bold'});
                        }else if($y.val()==='粗体偏斜'){
                            $exam.css({ 'font-style':  'italic' ,'font-weight':  'bold'});
                        }
                        else{
                            $exam.css({ 'font-style':  'normal','font-weight':'normal'});
                        }
                    })
                })(i)
            }
            for(var i=0;i<$uli3.length;i++){
                (function(i){
                    $($uli3[i]).click(function(){
                        $uli3.attr('class','')
                        $uli3.eq(i).attr('class','selected');;
                        $s.val($($uli3[i]).html())
                        $s.select();
                        $exam.css({ 'font-size': $s.val()+'px'});
                    })
                })(i)
            }
        }
        function close(){
            console.log(12)
            $fontctx.remove();
        }
        function show(){
            $main.append($fontctx);
            selectfys();
            $btn1.click(close)
            $btn2.click(close)
        }
    
        return {
            show:show
        }
}())