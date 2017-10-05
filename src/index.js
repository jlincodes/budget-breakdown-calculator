import Chart from 'chart.js';

// RENDERS DOUGHNUT CHART
document.getElementById('button').addEventListener('click', function() {

  let rent =  parseFloat(document.getElementById("rent").value);
  let util =  parseFloat(document.getElementById("util").value);
  let cell =  parseFloat(document.getElementById("cell").value);
  let internet =  parseFloat(document.getElementById("internet").value);
  let fixedExpenses = rent + util + cell + internet;

  let retirement =  parseFloat(document.getElementById("retirement").value);
  let savings =  parseFloat(document.getElementById("savings").value);
  let investments = retirement + savings;

  let groceries =  parseFloat(document.getElementById("groceries").value);
  let hSupplies =  parseFloat(document.getElementById("hSupplies").value);
  let pSupplies =  parseFloat(document.getElementById("pSupplies").value);
  let transport =  parseFloat(document.getElementById("transport").value);
  let variableExpenses = groceries + hSupplies + pSupplies + transport;

  let budget = parseFloat(document.getElementById("budget").value);
  let expenses = fixedExpenses + investments + variableExpenses;
  let excess = budget - expenses;

  // Render excess amount into input field
  document.getElementById("excess").value = excess;

  let config = {
    type: 'doughnut',
    data: {
      datasets: [{
        label: 'Expenses',
        data: [
          rent,
          util,
          cell,
          internet,
          retirement,
          savings,
          groceries,
          hSupplies,
          pSupplies,
          transport,
          excess
        ],
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
        position: 'top'
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

  if (ctx) {
    ctx.remove();
    let newCanvas = document.createElement('canvas');
    newCanvas.setAttribute("id", "myChart");
    let chartContainer = document.getElementById('chart-container');
    chartContainer.appendChild(newCanvas);
    ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, config);
  }

  if (expenses > budget) {
    ctx.remove();
    document.getElementById('error').innerHTML =
    '<p>Whoops. Total expenses cannot be greater than monthly budget.</p>';
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
