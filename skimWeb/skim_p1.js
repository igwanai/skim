let i_width = 7; //폰트크기 75vh단위 기준 i의 너비 = 약7vh

class element_m{
    constructor(id, x, y){
        this.id = id;
        this.x = x;
        this.y = y;
        this.elem = document.getElementById(id)
    }
    move(x, y){
        this.x = x;
        this.y = y;
        this.elem.style.transform = "translate(".concat(String(x)).concat("vh, ").concat(String(y)).concat("vh)");
    }
}

class row{
    constructor(m, min, y){
        this.m = m;
        this.cur = min; // x position of recent i
        this.min = min; // minimum x position of i
        this.y = y;
    }

    //add i
    addElement(id, x){
        if(document.getElementById(String(id))==null){
            var newI = document.createElementNS("http://www.w3.org/2000/svg", "text");
            var graphic = document.getElementById("graphicField");
            
            //blank or i
            if(Math.random()>0.5){ // 0.0 <= Math.random() < 1.0
                var text = document.createTextNode("i");
            }else{
                var text = document.createTextNode("");
            }
            newI.appendChild(text);
            graphic.appendChild(newI);
    
            newI.setAttribute("id", String(id));
            newI.style.transform =  "translate(".concat(String(x)).concat("vh, ").concat(String(this.y)).concat("vh)");
    
            return newI
        }
    }

    //remove i
    removeElement(id){
        var elem = document.getElementById(id);
        if(elem!==null){
            elem.parentElement.removeChild(elem);
        }
    }

    //add, remove i depends on m position
    add_remove_i(){
        var temp = this.cur
        if(this.cur < this.m.x){
            for(var i = this.cur+i_width; i<=this.m.x; i+=i_width){  
                this.addElement(String(i).concat(String(this.y)), i - 7.5);
                temp = i    
            } 
                                                           
        } else if(this.cur > this.m.x){
            for(var i = this.cur; i>= this.m.x; i-=i_width){
                this.removeElement(String(i).concat(String(this.y)));
                temp = i  
            }
        }
        this.cur = Math.max(temp, this.min);
    }
}

var anchor = 34;                       //m 위치기준
var m1 = new element_m("m1", 34, 25);  //첫 번째 줄 m 인스턴스
var m2 = new element_m("m2", -21, 45); //두 번째 줄 m 인스턴스
var m3 = new element_m("m3", -21, 65); //세 번째 줄 m 인스턴스

var row1 = new row(m1, 35, 25)         //첫 번째 줄
var row2 = new row(m2, 0, 45)          //두 번째 줄
var row3 = new row(m3, 0, 65)          //세 번째 줄 


// get mouse wheel value, change 'm' position, add/remove 'i'
function display(val){
    var one_vh = window.innerHeight/100;        //현재 윈도우 크기기준으로 1vh값 정의
    var width_vh = window.innerWidth/one_vh;    //현재 윈도우 너비를 vh값으로 나타낸 변수

    anchor =Math.min(Math.max(anchor + val, 34), 3*width_vh-23)             //  max = 3*width_vh-23 , min = 34, pure value = anchor + val

    //move m
    row1.m.move(Math.min(anchor, width_vh), row1.m.y);                              //  max = width_vh               pure value = anchor
    row2.m.move(Math.min(Math.max(anchor - width_vh, -21), width_vh), row2.m.y);    //  max = width_vh,  min = -21,  pure value = anchor - width_vh
    row3.m.move(Math.min(Math.max(anchor - width_vh*2, -21), width_vh), row3.m.y);  //  max = width_vh,  min = -21,  pure value = anchor - width_vh*2

    row1.add_remove_i();
    row2.add_remove_i();
    row3.add_remove_i();
}

//mouse wheel event
let sensitivity = 0.05; //마우스휠 감도 조정
window.addEventListener("wheel", function(event){display(event.deltaY * sensitivity)});

//window resize event
window.addEventListener("resize", function(){display(0);});


//button hover&click event
let button = document.getElementById("button");

button.onmouseenter = function() { //버튼 밖에서 안으로 마우스가 올라왔을 떄
    button.innerHTML = "(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k)";
};
button.onpointerleave = function() { //버튼 안에서 밖으로 마우스가 떠났을 때
    button.innerHTML = '(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;back)';
}
button.onclick = function() { //버튼을 클릭했을 때
    button.innerHTML = '(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b<span style="color:red;">ac</span>k)';
    location.href='index.html';
}

