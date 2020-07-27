let startBtn = document.querySelector('#start'),
    budget = document.querySelector('.result .budget-value'),
    dayBudget = document.querySelector('.result .daybudget-value'),
    level = document.querySelector('.result .level-value'),
    expensesValue = document.querySelector('.result .expenses-value'),
    optionalExpenses = document.querySelector('.result .optionalexpenses-value'),
    income = document.querySelector('.result .income-value'),
    monthSavings = document.querySelector('.result .monthsavings-value'),
    yearSavings = document.querySelector('.result .yearsavings-value'),
    year = document.querySelector('.time-data .year-value'),
    month = document.querySelector('.time-data .month-value'),
    day = document.querySelector('.time-data .day-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    data = document.querySelector('.data'),
    btn = data.getElementsByTagName('button'),
    optionalItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    money, time,
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent');

startBtn.addEventListener('click', function() {
   
    time = prompt("Введите дату в формате YYYY-MM-DD",''); 
    money = +prompt("Ваш бюджет на месяц?",'');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?",'');
    }
    appdata.budjet = money;
    appdata.timeData = time;
    budget.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

btn[0].addEventListener('click', function() {
    let sum = 0;

    for(let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        
        if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a != '' && b != '' && a.length < 50 )
        {
            //console.log('done');
            appdata.expenses[a] = b;
            sum += +b;
        } else {
            i -= 1;
        }
    }
    expensesValue.textContent = sum;
});

btn[1].addEventListener('click', function () {
    for (let i = 0; i < optionalItem.length; i++) {
        let opt = optionalItem[i].value;
        appdata.optionalExpenses[i] = opt;
        optionalExpenses.textContent += appdata.optionalExpenses[i] + ' ';
    }
});

btn[2].addEventListener('click', function() {

    if(appdata.budjet != undefined) {
        appdata.moneyPerDay =  (appdata.budjet/30).toFixed();
        dayBudget.textContent = appdata.moneyPerDay;

        if(appdata.moneyPerDay < 100){
            level.textContent = 'Минимальный кровень достатка';
        } else if (appdata.moneyPerDay > 100 && appdata.moneyPerDay < 2000) {
            level.textContent = 'Средний уровень достатка';
        } else if (appdata.moneyPerDay > 2000) {
            level.textContent =  'Высокий уровень достатка';
        } else {
            level.textContent = "Ошибка";
        } 

    } else {
        dayBudget.textContent = 'Ошибка';
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appdata.income = items.split(', ');
    income.textContent = appdata.income;
});

savings.addEventListener('click', function() {
    if (appdata.savings == true) {
        appdata.savings = false;
    } else {
        appdata.savings = true;
    }
});

chooseSum.addEventListener('input', function(){
    if (appdata.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appdata.monthIncome = sum/100/12*percent;
        appdata.yearIncome = sum/100*percent;

        monthSavings.textContent = appdata.monthIncome.toFixed(1);
        yearSavings.textContent = appdata.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function(){
    if (appdata.savings == true) {
        let sum = +chooseSum.value,
        percent = +choosePercent.value;

        appdata.monthIncome = sum/100/12*percent;
        appdata.yearIncome = sum/100*percent;

        monthSavings.textContent = appdata.monthIncome.toFixed(1);
        yearSavings.textContent = appdata.yearIncome.toFixed(1);
    }
});

let appdata = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: false,
}; 

