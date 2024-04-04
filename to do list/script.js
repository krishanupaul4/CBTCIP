
document.querySelector(".btn").addEventListener("click",addtext);
function addtext(){
    let input=document.getElementById("in");
    const t=document.querySelector("listcontainer");
    if(input.value===''){
        alert("Please write something!!!!")
    }
    else{
        let newtext=document.createElement("li");
        newtext.innerHTML=input.value+'<button type="submit" class="button2">done</button>'+'<i class="fa-solid fa-trash" id="icon2"></i>';
        listcontainer.appendChild(newtext);
        input.value="";
        
        newtext.querySelector("i").addEventListener("click",remove);
        function remove(){
            newtext.remove();
        }
        newtext.querySelector("button").addEventListener("click",line);
        function line(){
            newtext.style.textDecoration="line-through";
        }
        
        
    }
}
