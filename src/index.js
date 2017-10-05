import Chart from 'chart.js';

// RENDERS DOUGHNUT CHART
document.getElementById('button').addEventListener('click', function() {
  let errContainer = document.getElementById('error');
  errContainer.innerHTML = "";

  // let rent =  parseFloat(document.getElementById("rent").value);
  // let util =  parseFloat(document.getElementById("util").value);
  // let cell =  parseFloat(document.getElementById("cell").value);
  // let internet =  parseFloat(document.getElementById("internet").value);
  // let fixedExpenses = rent + util + cell + internet;
  //
  // let retirement =  parseFloat(document.getElementById("retirement").value);
  // let savings =  parseFloat(document.getElementById("savings").value);
  // let investments = retirement + savings;
  //
  // let groceries =  parseFloat(document.getElementById("groceries").value);
  // let hSupplies =  parseFloat(document.getElementById("hSupplies").value);
  // let pSupplies =  parseFloat(document.getElementById("pSupplies").value);
  // let transport =  parseFloat(document.getElementById("transport").value);
  // let variableExpenses = groceries + hSupplies + pSupplies + transport;
  //
  // let budget = parseFloat(document.getElementById("budget").value);
  // let expenses = fixedExpenses + investments + variableExpenses;
  // let excess = budget - expenses;

  // Creates array-like object
  let expenses = document.getElementsByClassName("expense");

  let dataArr = [];
  let data;
  let expensesSum = 0;

  // Iterate through array-like object to fetch & parse data
  let i;
  for (i = 0; i < expenses.length; i++) {
    data = parseFloat(expenses[i].value);

    if (!data) {
      data = 0;
    }

    dataArr.push(data);
    expensesSum += data;
  }

  let budget = parseFloat(document.getElementById("budget").value);
  let excess = budget - expensesSum;
  dataArr.push(excess);

  // Render excess amount into input field
  document.getElementById("excess").value = excess;

  let config = {
    type: 'doughnut',
    data: {
      datasets: [{
        label: 'Expenses',
        data: dataArr,
        backgroundColor: [
          'rgb(255, 128, 128)',
          'rgb(255,0,0)',
          'rgb(255,165,0)',
          'rgb(255,255,0)',
          'rgb(128, 255, 191)',
          'rgb(0,255,0)',
          'rgb(51, 153, 255)',
          'rgb(0, 0, 255)',
          'rgb(128, 128, 255)',
          'rgb(102, 0, 204)',
          'rgb(128, 0, 128)'
        ]
      }
    ],
      labels: ["Rent", "Utilities", "Cell", "Internet", "Retirement",
        "Savings", "Groceries", "Household", "Personal", "Transport",
        "Guilt-free"]
    },
    options: {
      responsive: true,
      legend: {
        position: 'right'
      },
      title: {
        display: true,
        text: 'Monthly Expenses'
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  };

  let ctx = document.getElementById("myChart");
  let myChart;

  if (ctx) {
    ctx.remove();
  }

  let newCanvas = document.createElement('canvas');
  newCanvas.setAttribute("id", "myChart");
  let chartContainer = document.getElementById('chart-container');
  chartContainer.appendChild(newCanvas);
  ctx = document.getElementById("myChart");
  myChart = new Chart(ctx, config);

// RENDERS ERROR MSG IF BUDGET IS EXCEEDED
  if (excess < 0) {
    ctx.remove();
    errContainer.innerHTML =
    '<p>Whoops. Total expenses cannot be greater than monthly budget.</p>' +
    '<p>Try readjusting your variable expenses or increasing your monthly budget.</p>';
  }

});




// TOGGLE SHOW/HIDE DIRECTIONS
document.getElementById("toggle-btn").addEventListener('click', function() {
  const directions = document.getElementById('directions');
  let toggleBtn = document.getElementById('toggle-btn');
  if (directions.style.display === 'none') {
    directions.style.display = 'block';
    toggleBtn.value = 'Hide Directions';
  } else {
    directions.style.display = 'none';
    toggleBtn.value = "Show Directions";
  }
});
