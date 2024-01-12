//1.NUMBERS OF DAYS IN A MONTH

/*
let monthOfTheYear = prompt("enter a month of the year")
let month = monthOfTheYear.toLowerCase();

if(month === "january"){
    console.log("January has 31 days")
}
else if(month === "february"){
    console.log("February has 28 days")
}
else if(month === "march"){
    console.log("March has 31 days")
}
else if(month === "april"){
    console.log("April has 30 days")
}
else if(month === "may"){
    console.log("May has 31 days")
}
else if(month === "june"){
    console.log("June has 30 days")
}
else if(month === "july"){
    console.log("July has 31 days")
}
else if(month === "august"){
    console.log("August has 31 days")
}
else if(month === "september"){
    console.log("september has 30 days")
}
else if(month === "october"){
    console.log("october has 31 days")
}
else if(month === "november"){
    console.log("november has 30 days")
}

else if(month === "december"){
    console.log("December has 31 days")
}
else{
    console.log("Answer is not a month of the year")
}
*/

//2.NUMBER OF DAYS IN A MONTH INCLUDING LEAP YEAR

let monthOfTheYear = prompt("Enter a month of the year");
let year = prompt("Enter a year");

let month = monthOfTheYear.toLowerCase();
let isLeapYear = false;


if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    isLeapYear = true;
}


const daysInMonth = {
    january: 31,
    february: isLeapYear ? 29 : 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31
};


if (daysInMonth.hasOwnProperty(month)) {
    console.log(`${monthOfTheYear} in ${year} has ${daysInMonth[month]} days`);
} else {
    console.log("Answer is not a month of the year");
}
