let step = 0;
let scores = [];
let temp = "";
let sum = 0;

function pickFunction(num) {
    scores.push(num);
    console.log(scores);
}

function stepFunction() {
    step +=1;
    console.log("step " + step);  
    if (step == 1){
        document.getElementById("question").innerHTML = "How often are you experiencing Soreness or Irritation?";
    }
    else if (step == 2){
        document.getElementById("question").innerHTML = "How often are you experiencing Burning or Watering?";
    }
    else if (step == 3){
        document.getElementById("question").innerHTML = "How often are you experiencing Eye Fatigue?";
    }
    else if (step == 4){
        document.getElementById("question").innerHTML = "How severe is your experience with Dryness, Grittiness or Scratchiness?";
        document.getElementById("boob").innerHTML = "Severity of Your Symptoms";
        document.getElementById("a1").src = "pic/0 - never.png";
        document.getElementById("a2").src = "pic/1 - tolerable.png";
        document.getElementById("a3").src = "pic/2 - uncomfortable.png";
        document.getElementById("a4").src = "pic/3 - bothersome.png";
        document.getElementById("a5").style.display = "initial";
    }
    else if (step == 5){
        document.getElementById("question").innerHTML = "How severe is your experience with Soreness or Irritation?";
    }
    else if (step == 6){
        document.getElementById("question").innerHTML = "How severe is your experience with Burning or Watering?";
    }
    else if (step == 7){
        document.getElementById("question").innerHTML = "How severe is your experience with Eye Fatigue?";
    }
    else {
        document.getElementById("boob").innerHTML = "Your Results:";
        document.getElementById("question").style.display = "none";
        document.getElementById("a1").style.display = "none";
        document.getElementById("a2").style.display = "none";
        document.getElementById("a3").style.display = "none";
        document.getElementById("a4").style.display = "none";
        document.getElementById("a5").style.display = "none";

        document.getElementById("t1").innerHTML = scores[0];
        document.getElementById("t2").innerHTML = scores[1];
        document.getElementById("t3").innerHTML = scores[2];
        document.getElementById("t4").innerHTML = scores[3];
        document.getElementById("t5").innerHTML = scores[4];
        document.getElementById("t6").innerHTML = scores[5];
        document.getElementById("t7").innerHTML = scores[6];
        document.getElementById("t8").innerHTML = scores[7];
        document.getElementById("results").style.display = "block";
        for (var i = 0; i < scores.length; i++){
            sum += scores[i];
        }

        console.log(sum);
        
        document.getElementById("total").innerHTML = sum;
    }
}