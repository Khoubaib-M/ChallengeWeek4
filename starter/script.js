var totalMonths = finances.length;

var netProfit = 0;

for (var i = 0; i < finances.length; i++) {
    netProfit += finances[i][1];

}

var changeMonth = [];
var change = [];
var changeTotal = 0;

for (var i = 1; i < finances.length; i++) {
    var changeEachMonth = finances[i][1] - finances[i-1][1]
    change.push(changeEachMonth)
    changeMonth.push([finances[i][0], changeEachMonth])
    changeTotal += changeEachMonth
}

var averageChange = (changeTotal/(totalMonths - 1)).toFixed(3);

var greatestIncreaseIndex = change.indexOf(Math.min(...change));
greatestIncrease = changeMonth[greatestIncreaseIndex];

var greatestDecreaseIndex = change.indexOf(Math.min(...change));
greatestDecrease = changeMonth[greatestDecreaseIndex];

var analysis = 
`Financial Analysis
----------------------------
Total Months: $${totalMonths}
Total: $${netProfit}
Average Change: $${averageChange}
Greatest Increase in Profits: ${greatestIncrease[0]} ($${greatestIncrease[1]})
Greatest Decrease in Profits: ${greatestDecrease[0]} ($${greatestDecrease[1]})`

console.log(analysis)