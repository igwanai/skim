let i_width = 7; //폰트크기 75vh단위 기준 i의 너비 = 약7vh

class root_graphic{
    constructor(){
        this.anchor = 134;
        this.mx = 134;
        this.my = 18;
        this.cur = 134; // x position of recent i
        this.minx = 134; // minimum x position of i
        this.miny = 18
        this.y = 18;
        this.update_max();
        //this.update_max_mx()
    }

    update_max(){
        if(window.innerWidth>window.innerHeight){
            this.max_mx = 100* window.innerWidth/window.innerHeight -23
            this.max_my = 100
        }else{
            this.max_mx = 100 -23
            this.max_my = 100* window.innerHeight/window.innerWidth
        }
    }


    move_m(val){

        this.anchor = Math.min(Math.max(this.anchor+val, this.minx), 500)
        this.mx = Math.min(this.anchor, this.max_mx)    
        this.mx = Math.max(this.mx - Math.max(this.anchor -this.max_mx - this.max_my, 0), 0);
        this.my = 18 + Math.max(this.anchor-this.max_mx, 0);
        this.my = Math.min(this.my, this.max_my)
        console.log(`${this.mx}, ${this.my}`)
        document.getElementById("m").style.transform = "translate("+ String(this.mx) + "vmin, "+ String(this.my)+ "vmin)";
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
            newI.style.transform =  "translate(" + String(x) + "vmin, " + String(this.y) + "vmin)";
    
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
        if(this.cur < this.mx){
            for(var i = this.cur+i_width; i<=this.mx; i+=i_width){  
                this.addElement(String(i).concat(String(this.y)), i - 7.5);
                temp = i    
            } 
                                                           
        } else if(this.cur > this.mx){
            for(var i = this.cur; i>= this.mx; i-=i_width){
                this.removeElement(String(i).concat(String(this.y)));
                temp = i  
            }
        }
        this.cur = Math.max(temp, this.min);
    }
}

var root = new root_graphic()         //첫 번째 줄


// get mouse wheel value, change 'm' position, add/remove 'i'
function display(val){
    //move m
    root.move_m(val);                          //  max = width_vh               pure value = anchor
    root.add_remove_i();
}



//mouse wheel input
let sensitivity = 0.05; //마우스휠 감도 조정
window.addEventListener("wheel", function(event){
    root.move_m(event.deltaY * sensitivity);
    root.add_remove_i();
});

//window resize event
window.addEventListener("resize", function(){
    //rowss.update_row()
    //root.update_max_mx()

    root.move_m(0);
    root.add_remove_i();
});


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