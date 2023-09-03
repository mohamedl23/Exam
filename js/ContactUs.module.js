export class ConatactUs{
    constructor(){
        let conatactus = document.querySelector("#contactUs");
        conatactus.addEventListener("click" ,function(){
            document.querySelector("#Area").classList.add("d-none");
            document.querySelector("#Categories").classList.add("d-none");
            document.querySelector("#home").classList.add("d-none");
            document.querySelector("#Ingredients").classList.add("d-none");
            document.querySelector("#ContactUs").classList.remove("d-none");
            document.querySelector("#homeData").classList.add("d-none")
            document.querySelector("#Search").classList.add("d-none");
            
            
        })
      let yourName = document.querySelector(".name")
      let youremail = document.querySelector(".email")
      let yourphone = document.querySelector(".phone")
      let yourage = document.querySelector(".age")
      let yourpassword = document.querySelector(".password")
      let repassword = document.querySelector(".repassword")

        function validation(){
            var regeXName = /^[a-z1-9]{3,}$/gi
            var regeXEmail = /^[a-z1-9]{3,}$/ig
            var regeXPassword = /^[a-z1-9]{3,}$/ig
            var regeXPhone = /^[1-9]{3,}$/ig
            var regeXAge = /^[1-9]{1,}$/ig
            


        }


    }
}