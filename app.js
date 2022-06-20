var intail=document.querySelector("#intail-price")

var quantity=document.querySelector("#numberofstocks")

var current=document.querySelector("#currentprice")

var submitbutton=document.querySelector("#submitbtn")

var outputdiv=document.querySelector("#output")

function eventhandler(){
    var ip=intail.value;
    var qty=quantity.value;
    var cp=current.value;

    calculateprofitandloss(ip,qty,cp);

}


function calculateprofitandloss(intail,quantity,current){
    if(current>intail){
        // profit logic
        var profit=(current-intail)*quantity;
        var profitpercentage=(profit/intail)*100;

        // console.log(`the profit is ${profit} is and profit percentage is ${profitpercentage}`)
        outputdiv.innerText=`The Profit is ${profit} And Profit Percentage is ${profitpercentage}%`;


    }
    else if(intail>current){
        // loss logic;
        var loss=(intail-current)*quantity;
        var losspercentage=(loss/intail)*100;
        // console.log(`the loss is ${loss} and loss percentage is ${losspercentage}`)
        outputdiv.innerText=`The Loss is ${loss} And Loss Percentage is ${losspercentage}%`;


    }
}

// calculateprofitandloss(20,10,100);

submitbutton,addEventListener("click",eventhandler)
