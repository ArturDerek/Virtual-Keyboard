function InnerHTML() {
    document.querySelector('#content').innerHTML=   '        <textarea id="textarea" placeholder="Your text"></textarea>\n' +
        '        <div class="Line">\n' +
        '            <button class="button" value="`" id="`">`</button>\n' +
        '            <button class="button" value="1" id="1">1</button>\n' +
        '            <button class="button" value="2" id="2">2</button>\n' +
        '            <button class="button" value="3" id="3">3</button>\n' +
        '            <button class="button" value="4" id="4">4</button>\n' +
        '            <button class="button" value="5" id="5">5</button>\n' +
        '            <button class="button" value="6" id="6">6</button>\n' +
        '            <button class="button" value="7" id="7">7</button>\n' +
        '            <button class="button" value="8" id="8">8</button>\n' +
        '            <button class="button" value="9" id="9">9</button>\n' +
        '            <button class="button" value="0" id="0">0</button>\n' +
        '            <button class="button" value="-" id="-">-</button>\n' +
        '            <button class="button" value="=" id="=">=</button>\n' +
        '            <button class="button" id="backspace">Backspace</button>\n' +
        '        </div>\n' +
        '        <div class="Line">\n' +
        '            <button class="button" value="    " id="tab">Tab</button>\n' +
        '            <button class="button LET" value="q" id="q">q</button>\n' +
        '            <button class="button LET" value="w" id="w">w</button>\n' +
        '            <button class="button LET" value="e" id="e">e</button>\n' +
        '            <button class="button LET" value="r" id="r">r</button>\n' +
        '            <button class="button LET" value="t" id="t">t</button>\n' +
        '            <button class="button LET" value="y" id="y">y</button>\n' +
        '            <button class="button LET" value="u" id="u">u</button>\n' +
        '            <button class="button LET" value="i" id="i">i</button>\n' +
        '            <button class="button LET" value="o" id="o">o</button>\n' +
        '            <button class="button LET" value="p" id="p">p</button>\n' +
        '            <button class="button" value="[" id="[">[</button>\n' +
        '            <button class="button" value="]" id="]">]</button>\n' +
        '            <button class="button" value="\\" id="|">\\</button>\n' +
        '            <button class="button" id="delete">DEL</button>\n' +
        '        </div>\n' +
        '        <div class="Line">\n' +
        '            <button class="button caps" id="capslock">Caps Lock</button>\n' +
        '            <button class="button LET" value="a" id="a">a</button>\n' +
        '            <button class="button LET" value="s" id="s">s</button>\n' +
        '            <button class="button LET" value="d" id="d">d</button>\n' +
        '            <button class="button LET" value="f" id="f">f</button>\n' +
        '            <button class="button LET" value="g" id="g">g</button>\n' +
        '            <button class="button LET" value="h" id="h">h</button>\n' +
        '            <button class="button LET" value="j" id="j">j</button>\n' +
        '            <button class="button LET" value="k" id="k">k</button>\n' +
        '            <button class="button LET" value="l" id="l">l</button>\n' +
        '            <button class="button" value=";" id=";">;</button>\n' +
        '            <button class="button" value="\'" id="\'">\'</button>\n' +
        '            <button class="button"  id="enter">ENTER</button>\n' +
        '        </div>\n' +
        '        <div class="Line">\n' +
        '            <button class="button"  id="shift">Shift</button>\n' +
        '            <button class="button" value="\\" id="\\">\\</button>\n' +
        '            <button class="button LET" value="z" id="z">z</button>\n' +
        '            <button class="button LET" value="x" id="x">x</button>\n' +
        '            <button class="button LET" value="c" id="c">c</button>\n' +
        '            <button class="button LET" value="v" id="v">v</button>\n' +
        '            <button class="button LET" value="b" id="b">b</button>\n' +
        '            <button class="button LET" value="n" id="n">n</button>\n' +
        '            <button class="button LET" value="m" id="m">m</button>\n' +
        '            <button class="button" value="," id=",">,</button>\n' +
        '            <button class="button" value="." id=".">.</button>\n' +
        '            <button class="button" value="/" id="/">/</button>\n' +
        '            <button class="button" value="&uarr;" id="arrowup">&uarr;</button>\n' +
        '            <button class="button"  id="RShift">Shift</button>\n' +
        '        </div>\n' +
        '        <div class="Line">\n' +
        '            <button class="button"  id="control">Ctrl</button>\n' +
        '            <button class="button"  id="meta">Win</button>\n' +
        '            <button class="button" id="alt">Alt</button>\n' +
        '            <button class="button" value=" " id="space"> </button>\n' +
        '            <button class="button"  id="ralt">Alt</button>\n' +
        '            <button class="button"  id="rcontrol">Ctrl</button>\n' +
        '            <button class="button" value="&larr;" id="arrowleft">\t&larr;</button>\n' +
        '            <button class="button" value="&darr;;" id="arrowdown">\t&darr;</button>\n' +
        '            <button class="button" value="&rarr;" id="arrowright">\t&rarr;</button>\n' +
        '        </div>' +
        '        <div>Switch language Shift+Alt</div>';

}
InnerHTML();

const BUTTON_LET=document.querySelectorAll("button.LET");
const CAPS=document.getElementById('capslock');
const TEXTAREA=document.getElementById('textarea')
function u(){
    CAPS.classList.toggle('capsActive');
    if (CAPS.className==='button caps capsActive') {
        for (let i = 0; i < BUTTON_LET.length; i++) {
            BUTTON_LET[i].innerHTML = BUTTON_LET[i].innerHTML.toUpperCase();
            BUTTON_LET[i].value = BUTTON_LET[i].value.toUpperCase();}
    }else{
        for (let i = 0; i < BUTTON_LET.length; i++) {
            BUTTON_LET[i].innerHTML = BUTTON_LET[i].innerHTML.toLowerCase();
            BUTTON_LET[i].value = BUTTON_LET[i].value.toLowerCase();
        }
    }
}



document.addEventListener('keydown', function connectKeyboard(pressedKey){
    let idKey=pressedKey.key.toLowerCase();
    console.log(idKey);

    // if (idKey==="shift"){
    //     if (idKey==="alt"){
    //         document.getElementById('content').innerHTML=
    //             '        <textarea id="textarea" placeholder="Your text"></textarea>\n' +
    //             '        <div class="Line">\n' +
    //             '            <button class="button" value="`" id="`">`</button>\n' +
    //             '            <button class="button" value="1" id="1">1</button>\n' +
    //             '            <button class="button" value="2" id="2">2</button>\n' +
    //             '            <button class="button" value="3" id="3">3</button>\n' +
    //             '            <button class="button" value="4" id="4">4</button>\n' +
    //             '            <button class="button" value="5" id="5">5</button>\n' +
    //             '            <button class="button" value="6" id="6">6</button>\n' +
    //             '            <button class="button" value="7" id="7">7</button>\n' +
    //             '            <button class="button" value="8" id="8">8</button>\n' +
    //             '            <button class="button" value="9" id="9">9</button>\n' +
    //             '            <button class="button" value="0" id="0">0</button>\n' +
    //             '            <button class="button" value="-" id="-">-</button>\n' +
    //             '            <button class="button" value="=" id="=">=</button>\n' +
    //             '            <button class="button" id="backspace">Backspace</button>\n' +
    //             '        </div>\n' +
    //             '        <div class="Line">\n' +
    //             '            <button class="button" value="    " id="tab">Tab</button>\n' +
    //             '            <button class="button" value="й" id="й">й</button>\n' +
    //             '            <button class="button" value="ц" id="ц">ц</button>\n' +
    //             '            <button class="button" value="у" id="у">у</button>\n' +
    //             '            <button class="button" value="к" id="к">к</button>\n' +
    //             '            <button class="button" value="е" id="е">е</button>\n' +
    //             '            <button class="button" value="н" id="н">н</button>\n' +
    //             '            <button class="button" value="г" id="г">г</button>\n' +
    //             '            <button class="button" value="ш" id="ш">ш</button>\n' +
    //             '            <button class="button" value="щ" id="щ">щ</button>\n' +
    //             '            <button class="button" value="з" id="з">з</button>\n' +
    //             '            <button class="button" value="х" id="х">х</button>\n' +
    //             '            <button class="button" value="ъ" id="ъ">ъ</button>\n' +
    //             '            <button class="button" value="\\" id="|">\\</button>\n' +
    //             '            <button class="button" id="delete">DEL</button>\n' +
    //             '        </div>\n' +
    //             '        <div class="Line">\n' +
    //             '            <button class="button" id="capslock">Caps Lock</button>\n' +
    //             '            <button class="button" value="ф" id="ф">ф</button>\n' +
    //             '            <button class="button" value="ы" id="ы">ы</button>\n' +
    //             '            <button class="button" value="в" id="в">в</button>\n' +
    //             '            <button class="button" value="а" id="а">а</button>\n' +
    //             '            <button class="button" value="п" id="п">п</button>\n' +
    //             '            <button class="button" value="р" id="р">р</button>\n' +
    //             '            <button class="button" value="о" id="о">о</button>\n' +
    //             '            <button class="button" value="л" id="л">л</button>\n' +
    //             '            <button class="button" value="д" id="д">д</button>\n' +
    //             '            <button class="button" value="ж" id="ж">ж</button>\n' +
    //             '            <button class="button" value="э" id="э">э</button>\n' +
    //             '            <button class="button"  id="enter">ENTER</button>\n' +
    //             '        </div>\n' +
    //             '        <div class="Line">\n' +
    //             '            <button class="button"  id="shift">Shift</button>\n' +
    //             '            <button class="button" value="\\" id="\\">\\</button>\n' +
    //             '            <button class="button" value="я" id="я">я</button>\n' +
    //             '            <button class="button" value="ч" id="ч">ч</button>\n' +
    //             '            <button class="button" value="с" id="с">с</button>\n' +
    //             '            <button class="button" value="м" id="м">м</button>\n' +
    //             '            <button class="button" value="и" id="и">и</button>\n' +
    //             '            <button class="button" value="т" id="т">т</button>\n' +
    //             '            <button class="button" value="ь" id="ь">ь</button>\n' +
    //             '            <button class="button" value="б" id="б">б</button>\n' +
    //             '            <button class="button" value="ю" id="ю">ю</button>\n' +
    //             '            <button class="button" value="." id=".">.</button>\n' +
    //             '            <button class="button"  id="arrowup">&uarr;</button>\n' +
    //             '            <button class="button"  id="RShift">Shift</button>\n' +
    //             '        </div>\n' +
    //             '        <div class="Line">\n' +
    //             '            <button class="button"  id="control">Ctrl</button>\n' +
    //             '            <button class="button"  id="meta">Win</button>\n' +
    //             '            <button class="button" id="alt">Alt</button>\n' +
    //             '            <button class="button" value=" " id="space"> </button>\n' +
    //             '            <button class="button"  id="ralt">Alt</button>\n' +
    //             '            <button class="button"  id="rcontrol">Ctrl</button>\n' +
    //             '            <button class="button" id="arrowleft">&larr;</button>\n' +
    //             '            <button class="button" id="arrowdown">&darr;</button>\n' +
    //             '            <button class="button" id="arrowright">&rarr;</button>\n' +
    //             '        </div>'}
    // }
    if (idKey==="capslock"){
        u();
        document.getElementById('capslock').classList.add('active');
    }
    if (pressedKey.keyCode===32){
        document.getElementById('space').classList.add('active');
    }

    document.getElementById(''+idKey).classList.add('active');
    TEXTAREA.value=TEXTAREA.value+document.getElementById(''+idKey).value;
});

document.addEventListener('keyup', function unConnectKeyboard(pressedKey){
    let idKey=pressedKey.key.toLowerCase();
    if (pressedKey.keyCode===32){
        document.getElementById('space').classList.remove('active');
    }
    document.getElementById(''+idKey).classList.remove('active');
});



document.addEventListener('mousedown', function clickOnMonitor(elementButton) {
    let currentButton=elementButton.target;
    if (currentButton.className==="button"||currentButton.className==="button LET"){
    currentButton.classList.add('active');
    document.getElementById('textarea').value=document.getElementById('textarea').value+currentButton.value;
    }
    if (currentButton.id==="capslock"){
        u();
        currentButton.classList.add('active');
    }


});

document.addEventListener('mouseup', function(elementButton) {
    let currentButton=elementButton.target;
    currentButton.classList.remove('active');
});






// let keyboard=[1025, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 10,
//     1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 92, 1060, 1067, 1042, 1040, 1055, 1056, 1054cla, 1051, 1044, 1046, 1069, 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 46, 32];
//
// function textarea() {
//     document.querySelector('#content').innerHTML='<textarea class="textarea" id="textarea"></textarea> <div id ="keyboard" ></div>';
// }
// textarea();
//
// function init() {
//     let out ='';
//     for(let i=0;i<keyboard.length; i++){
//         out +='<div class="kkey">' + String.fromCharCode(keyboard[i])+'</div>';
//     }
//     document.querySelector('#keyboard').innerHTML=out;
// }
// init();
//
// document.onkeypress = function (event) {
//     keyboard.push(event.charCode);
//     console.log(keyboard);
// }