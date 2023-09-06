export class Ingredients {
    constructor(){
        let ingredients = document.querySelector("#ingredients");
        ingredients.addEventListener("click" ,function(){
            document.querySelector("#Area").classList.add("d-none");
            document.querySelector("#homeData").classList.add("d-none")
            document.querySelector("#Categories").classList.add("d-none");
            document.querySelector("#home").classList.add("d-none");
            document.querySelector("#Search").classList.add("d-none");
            document.querySelector("#Ingredients").classList.remove("d-none");
            document.querySelector("#AreaData").classList.add("d-none");
            document.querySelector("#ContactUs").classList.add("d-none");         
            document.querySelector("#CategoriesData").classList.add("d-none");
            
            
        })


        let allIng =[]
        let ingReq = new XMLHttpRequest();
        ingReq.open("GET","https://www.themealdb.com/api/json/v1/1/list.php?i=list")
        ingReq.send();
        ingReq.addEventListener("readystatechange",function(){
            if(ingReq.readyState == 4 && ingReq.status == 200){
                allIng = JSON.parse(ingReq.response)
                // console.log(allIng.meals );
                displayIng()
                
            }   
        }) 
        
        function displayIng(){
            let ingCartona =''
            for (let i = 0; i < 20; i++) {
                ingCartona+=` <div class="col-md-3 p-2">
                <div class="areaData text-white text-center">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h2>${allIng.meals[i].strIngredient}</h2> 
                    <p>${allIng.meals[i].strDescription}</p>
                </div>
            </div>
        
                `
                
            }
            document.querySelector(".Ding").innerHTML = ingCartona;
        }
        
            }
        
        }
            