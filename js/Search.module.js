export class Search {
    constructor(){
        let Search = document.querySelector("#search");
        Search.addEventListener("click" ,function(){
            document.querySelector("#Area").classList.add("d-none");
            document.querySelector("#homeData").classList.add("d-none")
            document.querySelector("#Categories").classList.add("d-none");
            document.querySelector("#home").classList.add("d-none");
            document.querySelector("#Ingredients").classList.add("d-none");
            document.querySelector("#ContactUs").classList.add("d-none");
            document.querySelector("#Search").classList.remove("d-none");
            document.querySelector("#AreaData").classList.add("d-none");   
            document.querySelector("#CategoriesData").classList.add("d-none");
            
            
        })
    }
}