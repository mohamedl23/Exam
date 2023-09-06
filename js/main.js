// import { Home } from "./Home.module.js";

//     const home = new Home()

// import { UI } from "./ui.js"; 
import { Categories } from "./categories.module.js"; 

const category = new Categories

import { Area } from "./Area.module.js";
const area = new Area ;
import { Ingredients } from "./ingredients.module.js";
const ingredients = new Ingredients
import { ConatactUs } from "./ContactUs.module.js";
const conatactus = new ConatactUs 
import { Search } from "./Search.module.js";
const search = new Search

// const ui = new UI()
// var response = true;
// async function apiHome (){
//     const api = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
//      response = await api.json();
//     }
//     apiHome()
    
//     async function displayHome(gg){
//         let foodBox = "";
//         for (let i = 0; i < 20 ; i++) {
//                 console.log(response.meals);
//                 foodBox+=`<div class="col-md-3 col-sm-12 g-3 ">
//                 <div class="hovPhoto">
//                 <img src="img/58oia61564916529.jpg" class="w-100 rounded-3" alt="">
//                 <div class="data">
//                 <h2></h2>
//                 </div>
//                 </div>
//                 </div>`
                
//             }
//             document.querySelector(".Dhome").innerHTML= foodBox ;
//         }
//         displayHome()
let allData = []
//  var play = true
let req = new XMLHttpRequest();

req.open('GET',`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
req.send()
req.addEventListener('readystatechange',function(){
    if(req.readyState == 4 && req.status == 200){
        allData = JSON.parse( req.response );
        displayHome()
        
        loading()
        // console.log(allData.meals); 
        document.querySelectorAll(".hovPhoto").forEach( (card) => {
                card.addEventListener("click", function (){
                   let index = this.getAttribute("id")
                    displayHomeData(index)
                    document.querySelector("#homeData").classList.remove("d-none")
                    document.querySelector("#Area").classList.add("d-none");
                    document.querySelector("#Categories").classList.add("d-none");
                    document.querySelector("#home").classList.add("d-none");
                    document.querySelector("#Ingredients").classList.add("d-none");
                    document.querySelector("#ContactUs").classList.add("d-none");
                    document.querySelector("#Search").classList.add("d-none");
                    document.querySelector("#home").classList.add("d-none")
                    document.querySelector("#AreaData").classList.add("d-none");                   
                    document.querySelector("#CategoriesData").classList.add("d-none");
                    
                     
                });
            })
}

})
function displayHome(){
    let foodBox = "";
    for (let i = 0; i < allData.meals.length ; i++) {
                    foodBox+=`<div class="col-md-3 col-sm-12 g-3 ">
                    <div id="${i}" class="hovPhoto">
                    <img src="${allData.meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
                    <div class="data">
                    <h2>${allData.meals[i].strMeal}</h2>
                    </div>
                    </div>
                    </div>`
                    
                }
                document.querySelector(".Dhome").innerHTML= foodBox ;
            }

function displayHomeData(i){
    
        
    let databox = `
    <div class="col-md-4 text-white pt-5">
    <img src="${allData.meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
    <h2>${allData.meals[i].strMeal}</h2>
</div>
<div class="col-md-8 text-white pt-5">
    <h1>Instructions</h1>
    <p>${allData.meals[i].strInstructions}</p>
    <h1 class="fw-bold">Area : <span class="fw-normal">${allData.meals[i].strArea}</span></h1>
    <h1 class="fw-bold">Category : <span class="fw-normal">${allData.meals[i].strCategory}</span></h1>
    <h3>Recipes :</h3>
    <div class=" ">
        <h5 class="bg-info  d-inline-block p-1 me-2 rounded-2 text-black">${allData.meals[i].strMeasure1}<span>' '${allData.meals[i].strIngredient1}</span></h5>
        <h5 class="bg-info  d-inline-block p-1 me-2 rounded-2 text-black">${allData.meals[i].strMeasure2}<span>' '${allData.meals[i].strIngredient2}</span></h5>
        <h5 class="bg-info  d-inline-block p-1 me-2 rounded-2 text-black">${allData.meals[i].strMeasure3}<span>' '${allData.meals[i].strIngredient3}</span></h5>
        <h5 class="bg-info  d-inline-block p-1 me-2 rounded-2 text-black">${allData.meals[i].strMeasure4}<span>' '${allData.meals[i].strIngredient4}</span></h5>
        <h5 class="bg-info  d-inline-block p-1 me-2 rounded-2 text-black">${allData.meals[i].strMeasure5}<span>' '${allData.meals[i].strIngredient5}</span></h5>
        <h5 class="bg-info  d-inline-block p-1 me-2 rounded-2 text-black">${allData.meals[i].strMeasure6}<span>' '${allData.meals[i].strIngredient6}</span></h5>
        <h5 class="bg-info  d-inline-block p-1 me-2 rounded-2 text-black">${allData.meals[i].strMeasure7}<span>' '${allData.meals[i].strIngredient7}</span></h5>
              
    </div>
    <h3>Tags :</h3>
    
    <h5 class="bg-light text-black d-inline-block p-1 me-2 rounded-2">${allData.meals[i].strTags}</h5> 
    <div class="pt-3 pb-5">
    <a href="${allData.meals[i].strSource}"><button class="btn btn-success">source</button></a>
    <a href="${allData.meals[i].strYoutube}"><button class="btn btn-danger">Youtube</button></a>

    </div>
</div>
    
    `
    // }
    document.querySelector(".getHomeData").innerHTML = databox ;
}




function loading(){
    $("document").ready(function(){
        $(".loading").fadeOut(1000 , function(){
        $("body").css("overflow" , "visible") 
        })    
    })

}


    
    const boxMenu = $(".nav-all").outerWidth();
    
    $(".menu").click(function(){
        if( $(".nav-all").css("left") == "0px" ){
            $(".nav-all").animate({left: -boxMenu } , 1000)
            
        }
        else{
            $(".nav-all").animate({left: 0 } , 1000)
        }
    })