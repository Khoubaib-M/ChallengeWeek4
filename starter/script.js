var totalMonths = finances.length;

var netProfit = 0;

for (var i = 0; i < finances.length; i++) {
    netProfit += finances[i][1];

}

var changeMonth = [];
var changeTotal = [];
var change = 0;

for (var i = 1; i < finances.length; i++) {
    var changeMonth = finances[i][1] - finances[i-1][1]
    change.push(changeMonth)
    changeMonth.push([finances[i][0], changeMonth])
    changeTotal += changeMonth
}

var averageChange = (changeTotal/(totalMonths - 1)).toFixed(3)

