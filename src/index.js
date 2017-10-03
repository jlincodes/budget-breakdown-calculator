import Chart from 'chart.js';


document.getElementById('button').addEventListener('click', function() {
  let expensesData = [];

  let rent =  parseFloat(document.getElementById("rent").value);
  let util =  parseFloat(document.getElementById("util").value);
  let cell =  parseFloat(document.getElementById("cell").value);
  let internet =  parseFloat(document.getElementById("internet").value);
  let fixedExpenses = rent + util + cell + internet;
  expensesData.push(fixedExpenses);

  let retirement =  parseFloat(document.getElementById("retirement").value);
  let savings =  parseFloat(document.getElementById("savings").value);
  let investments = retirement + savings;
  expensesData.push(investments);

  let groceries =  parseFloat(document.getElementById("groceries").value);
  let hSupplies =  parseFloat(document.getElementById("hSupplies").value);
  let pSupplies =  parseFloat(document.getElementById("pSupplies").value);
  let transport =  parseFloat(document.getElementById("transport").value);
  let variableExpenses = groceries + hSupplies + pSupplies + transport;
  expensesData.push(variableExpenses);

  let budget = parseFloat(document.getElementById("budget").value);
  let expenses = fixedExpenses + investments + variableExpenses;
  let excess = budget - expenses;
  expensesData.push(excess);

  document.getElementById("excess").value = excess;

  let ctx = document.getElementById("myChart");
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Fixed Expenses", "Investments/Savings", "Variable Expenses",
        "Guilt-free Spending"],
      datasets: [{
        label: 'Expenses Total',
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
