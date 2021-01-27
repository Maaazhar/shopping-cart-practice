var totalMobilePrice=0, totalCasePrice=0;

function totalShow() 
{
    totalMobilePrice = 1219, totalCasePrice = 59;
    var subTotal = totalMobilePrice + totalCasePrice
    document.getElementById("subtotal").innerText = subTotal;
    var tax = (subTotal/100)*5
    document.getElementById("tax").innerText = tax.toFixed(3);;
    var total = subTotal + tax;
    document.getElementById("total").innerText = total.toFixed(3);
}
totalShow();
console.log(totalMobilePrice);

// Mobile decrement button handler
const mobileDecrementBtn = document.getElementById("mobileDecrement");
mobileDecrementBtn.addEventListener("click",
    function()
    {
        var  mobileCountNumber = getInputNumber("mobileCount","value");
        if (mobileCountNumber > 0) 
        {
            incrementDecrement(mobileCountNumber,"mobileCount","decrement");
            var mobilePriceNumber = getInputNumber("mobilePriceShow","innerText");
            totalMobilePrice = priceAdjustment("mobilePriceShow", mobilePriceNumber, -1219);
            totalPrice ("add")
        }
        
    }
);

// Mobile increment button handler
const mobileIncrementBtn = document.getElementById("mobileIncrement");
mobileIncrementBtn.addEventListener("click",
    function()
    { 
        var  mobileCountNumber = getInputNumber("mobileCount","value");
        if (mobileCountNumber > 0) 
        {
            incrementDecrement(mobileCountNumber,"mobileCount","increment");
            var mobilePriceNumber = getInputNumber("mobilePriceShow","innerText");
            totalMobilePrice = priceAdjustment("mobilePriceShow", mobilePriceNumber, 1219);
            totalPrice ("add")
        }
        else
        {
            incrementDecrement(mobileCountNumber,"mobileCount","voidIncrement");
            mobilePriceNumber = 0;
            totalMobilePrice = priceAdjustment("mobilePriceShow", mobilePriceNumber, 1219);
            totalPrice ("add")
        }
        
    }
);

// Mobile remove button handler
const mobileRemoveBtn = document.getElementById("mobileRemove");
mobileRemoveBtn.addEventListener("click",
    function()
    {
        remove("mobile", totalMobilePrice);
    }
);

// Case decrement button handler
const caseDecrementBtn = document.getElementById("caseDecrement");
caseDecrementBtn.addEventListener("click",
    function()
    {
        var  caseCountNumber = getInputNumber("caseCount","value");
        if (caseCountNumber > 0) 
        {
            incrementDecrement(caseCountNumber,"caseCount","decrement");
            var casePriceNumber = getInputNumber("casePriceShow","innerText");
            totalCasePrice = priceAdjustment("casePriceShow", casePriceNumber, -59);
            totalPrice ("add")

        }
    }
);

// Case increment button handler
const caseIncrementBtn = document.getElementById("caseIncrement");
caseIncrementBtn.addEventListener("click",
    function()
    {
        var  caseCountNumber = getInputNumber("caseCount","value");
        if (caseCountNumber > 0) 
        {
            incrementDecrement(caseCountNumber,"caseCount","increment");
            var casePriceNumber = getInputNumber("casePriceShow","innerText");
            totalCasePrice = priceAdjustment("casePriceShow", casePriceNumber, 59);
            totalPrice ("add")
        }
        else
        {
            incrementDecrement(caseCountNumber,"caseCount","voidIncrement");
            casePriceNumber = 0;
            totalCasePrice = priceAdjustment("casePriceShow", casePriceNumber, 59);
            totalPrice ("add")
        }
    }
);

// Case remove button handler
const caseRemoveBtn = document.getElementById("caseRemove");
caseRemoveBtn.addEventListener("click",
    function()
    {
        remove("case", totalCasePrice);
    }
);

function getInputNumber(id, flag) 
{
    if (flag == "value") 
    {
        const input = document.getElementById(id).value;
        const inputNumber = parseInt(input);
        return inputNumber;
    }  
    else if( flag == "innerText")
    {
        const input = document.getElementById(id).innerText;
        const inputNumber = parseInt(input);
        return inputNumber;
    }
}

function incrementDecrement(count,id,flag) 
{
    var countReturn;
    if (flag == "increment") 
    {
        countReturn = ++count;
    } 
    else if(flag == "decrement")
    {
        countReturn = --count;
    }
    else if (flag == "voidIncrement") 
    {
        countReturn = 1;
    }
    document.getElementById(id).value = countReturn;
}

function priceAdjustment (id,count, price) 
{
    var totalPrice = count + price;
    document.getElementById(id).innerText = totalPrice;
    return totalPrice;
}

function totalPrice (status,removePrice) 
{
    var subTotal = totalMobilePrice + totalCasePrice
    var tax = (subTotal/100)*5
    var total = subTotal + tax;
    if (status == "add") 
    {
        document.getElementById("subtotal").innerText = subTotal.toFixed(3);
        document.getElementById("tax").innerText = tax.toFixed(3);;
        document.getElementById("total").innerText = total.toFixed(3);
    } 
    else if (status == "remove") 
    {
        subTotal -= removePrice;
        tax = (subTotal/100)*5
        total = subTotal + tax;
        document.getElementById("subtotal").innerText = subTotal.toFixed(3);
        document.getElementById("tax").innerText = tax.toFixed(3);;
        document.getElementById("total").innerText = total.toFixed(3);
    }
    else if (status == "allRemove") 
    {
        document.getElementById("subtotal").innerText = "000";
        document.getElementById("tax").innerText = "000";
        document.getElementById("total").innerText = "000";
    }
}
var count = 0;
function remove (id, product) 
{
    count++;
    document.getElementById(id).style.display = "none"
    totalPrice("remove", product);
    console.log(product);
    if (count == 2) 
    {
        totalPrice("allRemove")
    }
}