let icon = "icon-x"
let map = new Array(9)
function move(id){
    if(map[id])
        return //Если клетка уже занята - выходим из функции.
    document.getElementById(id).className = "cell " + icon;
    map[id] = icon.slice(-1)
    document.getElementById(map[id]).className = ""
    if(icon == "icon-x"){
        icon = "icon-o"
        document.getElementById("o").className = "turn"
    }
    else{
        icon = "icon-x" 
        document.getElementById("x").className = "turn"
    }
}