function generationAge(){
    var age = prompt("Enter your age: ");
    if(age<12){
        alert("You are a Gen Alpha ");
    } else if(age>=13 && age<=26){
        alert("You are a Gen Z or iGen");
    }else if (age>=27 && age<=42){
        alert("You are a Gen Y or Millenial");
    }else if (age>=43 && age<=58){
        alert("You are a Gen X");
    }else if (age>=59 && age<=77){
        alert("You are a Baby Boomer");
    }else if (age>=78 && age<=95){
        alert("You are a Silent Generation");
    }
}