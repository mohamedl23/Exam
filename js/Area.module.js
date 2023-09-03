export class Area {
    constructor(){
        let area = document.querySelector("#area")
        area.addEventListener("click" ,function(){
            document.querySelector("#Area").classList.remove("d-none");
            document.querySelector("#homeData").classList.add("d-none")
            document.querySelector("#Categories").classList.add("d-none")
            document.querySelector("#home").classList.add("d-none")
            document.querySelector("#Search").classList.add("d-none");

        })
        let allArea =[]
let areaReq = new XMLHttpRequest();
areaReq.open("GET","https://www.themealdb.com/api/json/v1/1/list.php?a=list")
areaReq.send();
areaReq.addEventListener("readystatechange",function(){
    if(areaReq.readyState == 4 && areaReq.status == 200){
        allArea = JSON.parse(areaReq.response)
        // console.log(allArea.meals );
        displayArea()
        
    }   
}) 

function displayArea(){
    let areaCartona =''
    for (let i = 0; i < allArea.meals.length; i++) {
        areaCartona+=`<div class="col-md-3 p-5">
        <div class="areaDataa text-white text-center">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
            <h2>${allArea.meals[i].strArea}</h2> 
        </div>
    </div>

        `
        
    }
    document.querySelector(".dArea").innerHTML = areaCartona;
}

    }

}
    
