# Budget Breakdown Calculator

### Background and Overview

Budgeting can be intimidating. One could use an already existing budgeting application service, such as Mint or You Need a Budget, but that would require an account creation, linking up one's banking account, etc. Another alternative would be to use a spreadsheet to keep log expenses, but spreadsheets and formulas can be intimidating to the average user.

This is where Budget Breakdown Calculator comes in - Budget Breakdown Calculator is, as the name implies, a budget breakdown calculator. It's easy to use - just log your expenses, run the calculations, and check the graphs to see if you are within your financial means and what areas you could improve on.

### Functionality & MVP  

In Budget Calculator, users will be able to:

- Set overall monthly budget
- Log expenses by categories:
  - Fixed expenses, Investments, Savings, Flexible Spending
- Within those umbrella categories, users can also log their expenses by sub-categories:
  - Rent, monthly loan/car/mortgage payments, utilities, mobile phone/internet/cable bills, groceries, etc.
- After logging expenses, users can view a chart of their spending and whether their actual spending for that month aligns with their set monthly budget.


### Screenshot
![Screenshot][screenshot]

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for basic DOM manipulation and event handling.
- `Chart.js` for constructing the data visualization component.
- Bootstrap for responsive web design.

### The Chart
The initial chart rendering:
```JavaScript
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
```

Updating the chart with user input after clicking the "Calculate" button:

```JavaScript
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
```

A bug that I ran into while working on this project is that every time the calculate button is clicked, a new chart is rendered on top of the previous chart. The work-around for this is to check if there is an existing chart, delete that chart and render a new chart:

```JavaScript
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
```


### Bonus features
- Render addition chart (bar, line, etc) to render expenses by umbrella categories.
- Financial tips to help users become more financially savvy.

[screenshot]: ./docs/Screenshots/bbc-normal-std.gif

<!-- ## Extra to-dos:
- [x] Make it work if I accidentally clear an input field. (I did that, and it told me that my guilt-free spending was NaN.)
- [ ] It would be awesome to see the chart grouped initially by category (Fixed Expenses, Investments/Savings, Variable Expenses, Guilt-free Spending), then show a detailed graph for each section.
- [ ] Alternatively, you could show several charts based on the same data. Where you've already learned how to make the doughnut chart, I imagine that this would be fairly simple for you to implement.
- [ ] I want to see some bolder styling, overall. For data-viz projects, I'm a big fan of dashboard tiles (if you do a google image search for 'dashboard' or 'dashboard tiles', you might find something to inspire your design).
- [x] Make sure to get hover styles on your clickable elements (Eli is a stickler about this. It should respond to user actions.) -->
