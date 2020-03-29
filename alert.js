<<<<<<< HEAD
var checker = document.createTextNode("__");
var check = document.createElement("checkbox");
var one = false;
//var changer = setInterval(change,1000);
check.style.width = "50px";
check.style.border = "1px solid black";
check.style.backgroundColor = "#FF4444";
check.appendChild(checker);
document.body.appendChild(check);

var timer = document.createElement("div");
timer.setAttribute("class","timer");
var node = document.createTextNode("Timer started: ");
var div = document.getElementById("timer");

timer.appendChild(node);
div.appendChild(timer);
let b = prompt("Установите время для таймера (в сек): ");
//let b = 2;
check.style.backgroundColor = "#FF4";
let a = 0;
var Int = setInterval(inter,1000);
function inter()
{
    timer.innerHTML += a + " ";
    if(a < b)
        a++;
    else
    {
        clearInterval(Int);
        timer.innerHTML += "I'm done <img src='https://www.countryflags.io/ru/flat/64.png'>";
        check.style.backgroundColor = "#44FF44";
        check.innerHTML = " ✓";
        document.getElementById("unicD").innerText = "<b>I love CSS Grids</b>";
        for(let i = 0; i < 3; i++)
        {
        document.getElementsByClassName("dark")[i].style.gridColumnStart = "1";
        document.getElementsByClassName("dark")[i].style.gridColumnEnd = "2";
        document.getElementsByClassName("light")[i].style.gridColumnStart = "2";
        document.getElementsByClassName("light")[i].style.gridColumnEnd = "5";
        document.getElementsByClassName("dark")[i].style.gridRowStart = i+1;
        }
       

    }
}
function change()
{
    if(one)
        document.title = "*You have new message*";
    else   
        document.title = "Main Page";
        one = !one;
}

=======
var checker = document.createTextNode("__");
var check = document.createElement("checkbox");
var one = false;
//var changer = setInterval(change,1000);
check.style.width = "50px";
check.style.border = "1px solid black";
check.style.backgroundColor = "#FF4444";
check.appendChild(checker);
document.body.appendChild(check);

var timer = document.createElement("div");
timer.setAttribute("class","timer");
var node = document.createTextNode("Timer started: ");
var div = document.getElementById("timer");

timer.appendChild(node);
div.appendChild(timer);
let b = prompt("Установите время для таймера (в сек): ");
//let b = 2;
check.style.backgroundColor = "#FF4";
let a = 0;
var Int = setInterval(inter,1000);
function inter()
{
    timer.innerHTML += a + " ";
    if(a < b)
        a++;
    else
    {
        clearInterval(Int);
        timer.innerHTML += "I'm done <img src='https://www.countryflags.io/ru/flat/64.png'>";
        check.style.backgroundColor = "#44FF44";
        check.innerHTML = " ✓";
        document.getElementById("unicD").innerText = "<b>I love CSS Grids</b>";
        for(let i = 0; i < 3; i++)
        {
        document.getElementsByClassName("dark")[i].style.gridColumnStart = "1";
        document.getElementsByClassName("dark")[i].style.gridColumnEnd = "2";
        document.getElementsByClassName("light")[i].style.gridColumnStart = "2";
        document.getElementsByClassName("light")[i].style.gridColumnEnd = "5";
        document.getElementsByClassName("dark")[i].style.gridRowStart = i+1;
        }
       

    }
}
function change()
{
    if(one)
        document.title = "*You have new message*";
    else   
        document.title = "Main Page";
        one = !one;
}

>>>>>>> 57c97215f8b254e9702b50f6533eae4607dd259a
