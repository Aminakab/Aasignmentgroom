const button = document.getElementById("#calculate");
const education = document.getElementById("#education");
const family = document.getElementById("#networth");
const caste = document.getElementById("#caste");
const skills = document.getElementsByName("#checker1");
const age = document.getElementsByName("sub");
const reputation = document.getElementsByName("#verify");
const Calculate = document.getElementById("#Calculateprice");
let loveletter = document.getElementById("#text");

button.addEventListener('click', () => {
    let price = Number(Bid.value);
    const familynetworth = networth.value;
    const Educat= education.value;
    const Castt = caste.value;
    if(Educat=="blank" || familynetworth=="blank" || Castt=="blank"){
        alert("Empty ")
    }

    else{
        if(Educat == "1.5"){
            price*=1.5;
        }

           else if(Educat == "1.2"){
            price*=1.2;
         }
                else if(Educat == "1.05"){
                  price*=1.05;
         }
            else if(Educat == "0.9"){
               price*=0.9;
              }
             if(familynetworth == "2"){
                price*=2;
        }
        else if(familynetworth== "1.5"){
            price*=1.5;
        }
           
              else if(familynetworth == "1.2"){
               price*=1.2;
        }

        if(Castt == "+100$"){
            price+=100;
        }
           else if(Castt == "+50$"){
             price+=50;
        }
              else if(Castt == "+20$"){
                price+=20;
        }
        else if(Castt == "+10$"){
            price+=15;
        }
        else if(Castt == "-50$"){
            price-=50;
        }
  
            if(skills[0].checked){
                price+=10;
        }
            if(skills[1].checked){
            price+=20;
        }
             if(skills[2].checked){
            price+=15;
        }
               if(skills[3].checked){
                  price+=10;
        }

        if(age[1].checked){
                   price*=1.5;
        }
                  else if(age[2].checked){
                     price*=1.2;
        }
             else if(age[3].checked){
                  price*=0.95;
        }

        if(reputation[1].checked){
            price*=0.85;
        }
             if(reputation[2].checked){
               price*=0.9;
        }
                  if(reputation[3].checked){
                      price-=20;
        }
 
                Calculate.innerHTML = "Total price" + price.toFixed(3) + "$";
    }
})
