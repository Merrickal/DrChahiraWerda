date="21/225"
var money_number=0;
var received_number=0;
var p=money_number.toString();
var intervention_text="";

onload=function Date_De_La_Premiere_Visite()
{
    document.getElementById("Date_De_La_Premiere_Viste").innerHTML=date
    document.getElementById("rem").innerHTML=p
    document.getElementById("Inter_Text").innerText=""
    document.getElementById("Paid_Text").innerHTML=received_number.toString()

}
function save()
{
    location.href="Liste-De-Fiches.html";
}
function switch_to_Teeth()
{
    location.href="Teeth.html";
}
function isFloat(str) {
    let pattern = /^-?\d*(\.\d+)?$/;
    if (!str.match(pattern)) return false;
    let val = parseFloat(str);
    const isInteger = Number.isInteger(val);
    return isInteger ? true : true;
  }
window.addEventListener("keydown", (event)=>
{

    if (event.key=="Control")
    {

        if (isFloat(document.getElementById("Need_Text").textContent)==true)
        {
            // console.log(typeof document.getElementById("Need_Text").textContent)
            document.getElementById("Need_Text").style.backgroundColor="white"
            // --------------for thet inter section
            var t=document.createTextNode(document.getElementById("Inter_Text").innerText)
            var br =document.createElement("label")
            br.style.visibility="hidden"
            br.style.maxHeight="0px"
            var x= document.createElement("td")
            x.contentEditable= "true"
            x.appendChild(t)
            x.style.backgroundColor=" rgb(118, 118, 167,0.03)"
            x.style.fontSize="20px"
            x.style.maxWidth="1006px"
            x.style.height="28px"
            document.getElementById("Inter").insertBefore(x,document.getElementById("Inter_Text"))
            document.getElementById("Inter").insertBefore(br,document.getElementById("Inter_Text"))
            document.getElementById("Inter_Text").innerHTML=""
            

            // --------------for the doit + recu section
            // if the doit section is left empty
            if (document.getElementById("Need_Text").innerText=="")
            {
                var t=document.createTextNode("0DT")
                
            }
            else
            {
                var t=document.createTextNode(document.getElementById("Need_Text").innerText+"DT")
                money_number=money_number+parseFloat(document.getElementById("Need_Text").innerText)
            }
            received_number=parseFloat(document.getElementById("Paid_Text").innerText)
            if (received_number<money_number)
            {
                p=(received_number-money_number).toString()
                document.getElementById("rem").style.color="red"
            }
            else
            {
                p=(received_number-money_number).toString()  
                document.getElementById("rem").style.color="black"
            }
            var br =document.createElement("label")
            br.style.visibility="hidden"
            br.style.maxHeight="0px"
            var x= document.createElement("td")
            x.appendChild(t)
            x.style.fontSize="20px"
            x.style.height="28px"
            document.getElementById("Need").insertBefore(x,document.getElementById("Need_Text"))
            document.getElementById("Need").insertBefore(br,document.getElementById("Need_Text"))
            document.getElementById("Need_Text").textContent=""

            // --------------for the reste a payer section
            document.getElementById("rem").innerHTML=p
            // console.log(intervention_text)
            // document.getElementById("Inter_Text").textContent="-"
        }
        else
        {
            document.getElementById("Need_Text").style.backgroundColor="red"
            // console.log(parseFloat(document.getElementById("Need_Text").textContent))
            alert("the needed number must be a float")
        }
    }
}
)  

// window.addEventListener('keydown',(event) =>{console.log(event)})
    

