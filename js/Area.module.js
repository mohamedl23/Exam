export class Area {
    constructor(){
        let area = document.querySelector("#area")
        area.addEventListener("click" ,function(){
            document.querySelector("#Area").classList.remove("d-none");
            document.querySelector("#homeData").classList.add("d-none")
            document.querySelector("#Categories").classList.add("d-none")
            document.querySelector("#home").classList.add("d-none")
            document.querySelector("#ContactUs").classList.add("d-none");
            document.querySelector("#Search").classList.add("d-none");
            document.querySelector("#AreaData").classList.add("d-none");

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
        document.querySelectorAll(".gg").forEach(function(areas) {
            areas.addEventListener("click" , function(){
                document.querySelector("#Area").classList.add("d-none")
                document.querySelector("#AreaData").classList.remove("d-none")
                let goCity = this.getAttribute("id")
                console.log(this);
                areaApi(goCity)
                
                
            })
            
        });
        
    }   
})
let allAreaData = []
function areaApi(goCity) {
    let areaReq1 = new XMLHttpRequest()
    areaReq1.open("Get" ,`https://www.themealdb.com/api/json/v1/1/filter.php?a=${goCity}`)
    areaReq1.send();
    areaReq1.addEventListener("readystatechange" , function(){
        if(areaReq1.readyState ==4 && areaReq1.status == 200){
           allAreaData = JSON.parse(areaReq1.response)
           console.log(allAreaData);
           disPlayAreaData()
        }
    })

    
}


function displayArea(){
    let areaCartona =''
    for (let i = 0; i < allArea.meals.length; i++) {
        areaCartona+=`<div id="${allArea.meals[i].strArea}" class="col-md-3 p-5  gg ">
        <div class="areaDataa text-white text-center">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
            <h2>${allArea.meals[i].strArea}</h2> 
        </div>
    </div>

        `
        
    }
    document.querySelector(".dArea").innerHTML = areaCartona;
}

function disPlayAreaData(){
    let areaDataCartona = ''
    for (let i = 0; i < allAreaData.meals.length; i++) {
        areaDataCartona+=`
        <div   class="col-md-3 col-sm-12 ">
                    <div class="hovPhoto">
                        <img src="${allAreaData.meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
                        <div class="data">
                            <h2>${allAreaData.meals[i].strMeal}</h2>
                        </div>
    
                    </div>
                </div>`
        
    }
    document.querySelector(".ggarea").innerHTML = areaDataCartona;

}


    }

}
    
