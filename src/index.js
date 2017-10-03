import Chart from 'chart.js';
let expensesData = [];
let fixedExpenses, investments, variableExpenses;

let rent, util, cell, internet;
rent =  document.forms["budget-form"].element["rent"].value;
util =  document.forms["budget-form"].element["util"].value;
cell =  document.forms["budget-form"].element["cell"].value;
internet =  document.forms["budget-form"].element["internet"].value;

let retirement, savings;
retirement =  document.forms["budget-form"].element["retirement"].value;
savings =  document.forms["budget-form"].element["savings"].value;

let groceries, hSupplies, pSupplies, transport;
groceries =  document.forms["budget-form"].element["groceries"].value;
hSupplies =  document.forms["budget-form"].element["hSupplies"].value;
pSupplies =  document.forms["budget-form"].element["pSupplies"].value;
transport =  document.forms["budget-form"].element["transport"].value;


let ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Fixed Expenses", "Investments/Savings", "Variable Expenses"],
        datasets: [{
            label: 'Expenses',
            data: expensesData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });
