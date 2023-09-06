export class Categories {
  constructor() {
    let category = document.querySelector("#categories");
    category.addEventListener("click", function () {
      document.querySelector("#Categories").classList.remove("d-none");
      document.querySelector("#home").classList.add("d-none");
      document.querySelector("#homeData").classList.add("d-none");
      document.querySelector("#Area").classList.add("d-none");
      document.querySelector("#Search").classList.add("d-none");
      document.querySelector("#ContactUs").classList.add("d-none");
      document.querySelector("#AreaData").classList.add("d-none");
    });
    let that = this ;
    let allCaegory = [];
    let catReq = new XMLHttpRequest();
    catReq.open(
      "GET",
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    
    catReq.send();
    catReq.addEventListener("readystatechange", function () {
      if (catReq.readyState == 4 && catReq.status == 200) {
        allCaegory = JSON.parse(catReq.response);
        // console.log(allCaegory.categories );
        displayCategory();
        document.querySelectorAll(".rr").forEach(function(play){
            play.addEventListener("click", function () {
                document.querySelector("#Categories").classList.add("d-none");
                document.querySelector("#CategoriesData").classList.remove("d-none");
                let food = this.getAttribute("id")
                console.log(this); 
                feachApi(food)
              });

        })
    }
});


function displayCategory() {
    let cartona = "";
    for (let i = 0; i < allCaegory.categories.length; i++) {
        cartona += `<div id="${allCaegory.categories[i].strCategory}" class="col-md-3 col-sm-12 rr ">
        <div  class="hovPhoto  ">
        <img src="${allCaegory.categories[i].strCategoryThumb}" class="w-100 rounded-3" alt="">
        <div class="data text-center d-block">
        <h1>${allCaegory.categories[i].strCategory}</h1>
        <p>${allCaegory.categories[i].strCategoryDescription}</p>
        </div>
        </div>    
        </div>        
        
        
        `;
    }
    document.querySelector(".Dcat").innerHTML = cartona;
}


let allCaegoryData = [];
function displayCategoryData() {
    let dcartona = "";
    for (let i = 0; i < allCaegoryData.length; i++) {
        dcartona += `<div class="col-md-3 col-sm-12 ">
        <div class="hovPhoto">
            <img src="${allCaegoryData[i].strMealThumb}" class="w-100 rounded-3" alt="">
            <div class="data">
                <h2>${allCaegoryData[i].strMeal}</h2>
            </div>

        </div>
    </div>
        
        
        `;
      }

      document.querySelector(".ggcat").innerHTML = dcartona;
    }
   function feachApi (food){
    
        let catReq1 = new XMLHttpRequest();
        catReq1.open(
          "GET",
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`)
        catReq1.send();
        catReq1.addEventListener("readystatechange", function () {
          if (catReq1.readyState == 4 && catReq1.status == 200) {
            allCaegoryData = JSON.parse(catReq1.response).meals;
           console.log(allCaegoryData);
           displayCategoryData();
          }
        });
  }
  
  }



}
