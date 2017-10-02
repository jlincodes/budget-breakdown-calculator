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


### Wireframes
![Wireframe][wireframe]

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript combined with `jQuery` for basic DOM manipulation and event handling.
- `Chart.js` for constructing the data visualization component.

### Implementation Timeline

**Over the weekend**:
- Set up webpack base for project.

**Day 1**:
- Set up a general layout of HTML page for user inputs
- Set up functions to perform calculations
- Use `jQuery` to toggle open and close input forms for each category

**Day 2**:
- Learn `Chart.js` and render data visualization

**Day 3**:
- Continue working on functionality
- Start on styling and presentation

**Day 4**:
- Styling and presentation


### Bonus features
- Financial tips to help users become more financially savvy.

[wireframe]: https://github.com/julielin0812/basic-budget-calculator/blob/master/docs/basic-budget-calc-wireframe.png?raw=true
