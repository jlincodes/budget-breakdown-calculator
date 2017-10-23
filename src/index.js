import Chart from 'chart.js';

// SAMPLE DATA FOR INITIAL CHART RENDER
let dataArr = [1000, 50, 50, 50, 100, 100, 100, 100, 100, 100, 250];

// DOUGHNUT CHART
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

// INITIAL RENDER OF CHART UPON WINDOW LOAD
window.onload = function() {
  let ctx = document.getElementById("myChart");
  let myChart;

  resetCanvas(ctx);

  ctx = document.getElementById("myChart");
  myChart = new Chart(ctx, config);
};

// RENDERS DOUGHNUT CHART UPON CALCULATE CLICK
document.getElementById('button').addEventListener('click', function() {
  let errContainer = document.getElementById('error');
  errContainer.innerHTML = "";

  // Creates array-like object
  let expenses = document.getElementsByClassName("expense");

  dataArr = [];
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
  if (!budget) budget = 0;
  let excess = budget - expensesSum;
  dataArr.push(excess);

  // RENDER EXCESS AMOUNT INTO FIELD
  document.getElementById("excess").value = excess;

  // REPLACES SAMPLE DATA WITH DATA FROM FORM INPUT
  config.data.datasets.forEach( (dataset) => {
    dataset.data = dataArr;
  });


  let ctx = document.getElementById("myChart");
  let myChart;

  resetCanvas(ctx);

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

// REMOVE EXISTING CANVAS (IF ANY) AND RENDERS NEW CANVAS
function resetCanvas(ctx) {
  if (ctx) {
    ctx.remove();
  }

  let newCanvas = document.createElement('canvas');
  newCanvas.setAttribute("id", "myChart");
  let chartContainer = document.getElementById('chart-container');
  chartContainer.appendChild(newCanvas);
}

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
