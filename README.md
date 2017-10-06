# Basic Budget Calculator

### Background and Overview

Budgeting can be intimidating. One could use an already existing budgeting application service, such as Mint or You Need a Budget, but that would require an account creation, linking up one's banking account, etc. Another alternative would be to use a spreadsheet to keep log expenses, but spreadsheets and formulas can be intimidating to the average user.

This is where Basic Budget Calculator comes in - Basic Budget Calculator is, as the name implies, a basic budget calculator. It's easy to use - just log your expenses, run the calculations, and check the graphs to see if you are within your financial means and what areas you could improve on.

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

### Implementation Timeline

**Over the weekend**:
- Set up webpack base for project.

**Day 1**:
- Set up a general layout of HTML page for user inputs.
- Set up functions to perform calculations.

**Day 2**:
- Learn `Chart.js` and render data visualization.

**Day 3**:
- Continue working on functionality, fix bugs and errors.
- Start on styling and presentation.

**Day 4**:
- Styling and presentation.


### Bonus features
- Render addition chart (bar, line, etc) to render expenses by umbrella categories.
- Financial tips to help users become more financially savvy.

[screenshot]: https://github.com/julielin0812/basic-budget-calculator/blob/master/docs/Screenshots/Screen%20Shot%202017-10-05%20at%2012.22.21%20PM.png?raw=true

<!-- ## Extra to-dos:
- [x] Make it work if I accidentally clear an input field. (I did that, and it told me that my guilt-free spending was NaN.)
- [ ] It would be awesome to see the chart grouped initially by category (Fixed Expenses, Investments/Savings, Variable Expenses, Guilt-free Spending), then show a detailed graph for each section.
- [ ] Alternatively, you could show several charts based on the same data. Where you've already learned how to make the doughnut chart, I imagine that this would be fairly simple for you to implement.
- [ ] I want to see some bolder styling, overall. For data-viz projects, I'm a big fan of dashboard tiles (if you do a google image search for 'dashboard' or 'dashboard tiles', you might find something to inspire your design).
- [x] Make sure to get hover styles on your clickable elements (Eli is a stickler about this. It should respond to user actions.) -->
