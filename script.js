/*Side Hustle pays 1000 Naira per hour to employees, they only work for 4 hours per day, 
if an employee works for extra hours, they get 200 Naira per extra hour.  
Write a program that calculates the daily wage of an employee and also calculate the extra tip if the employee worked over time.
Hint : The function accepts two parameters, Hours worked and Extra Hours.
It should print out the employee daily wage, which is a sum of ideal wage and overtime earnings.*/

var payPerHour = 1000; //amount employess are payed each hour is 1000
var payPerExtraHour = 200; //amount employess are payed for each extra hours is 200


function employeeWage(form)
{
	let hoursWorked = form.hoursworked.value; //gets value from form in html and stores in variable
	let extraHours = hoursWorked - 4; 
	let idealWage = 0;
	let overtimeEarnings = 0;

	if(hoursWorked > 4)
	{
		idealWage = hoursWorked * payPerHour;
		overtimeEarnings = extraHours * payPerExtraHour;
	}

	else 
	{
		idealWage = hoursWorked * payPerHour;
	}
	
	var dailyWage = idealWage + overtimeEarnings; //calulates total wage
	document.getElementById("print").innerHTML = "Congrats you've earned N" + dailyWage;
}