// a function constructor is created 
function Plan (name, price, space, transfer, pages, discountMonths){
                
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
}

// define the method as prototype of the constructor 
Plan.prototype.calcAnnual = function(percentIfDisc) {
        var bestPrice = plan1.price;
        console.log("Price" + bestPrice);
        var currDate = new Date();
        console.log("Current Date " +currDate);
        var thisMo = currDate.getMonth();
        console.log("This Month " +thisMo);
        for (var i = 0; i < plan1.discountMonths.length; i++) {

        if (plan1.discountMonths[i] === thisMo) {
        bestPrice = plan1.price * percentIfDisc;
        break;}
        console.log("Best Price" +bestPrice);
        }
        return bestPrice * 12;
        }

// three objects are created 

var plan1 = new Plan("Basic", 3.99, 100, 1000, 10, [0,7]);
var plan2 = new Plan("Professional", 5.99, 500, 5000, 50 [0,7,11]);
var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [0,7]);

var annualPrice = plan1.calcAnnual(.80);
var price = plan1.calcAnnual(1);
document.getElementById("discount").innerHTML= " Discounted Price: " + annualPrice.toFixed(2);

console.log(annualPrice);
console.log(price);

document.getElementById('Final').innerHTML= " Final Price: " + price;