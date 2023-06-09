const leapYear = (year) => {
  console.log("------------------------------------------------------------------------------")
  for (let i = year; i <= new Date().getFullYear(); i++) {
    console.log(i % 4 === 0 || i % 400 === 0 ? `${i} : leap Year` : `${i} : not a leap Year`)
  }
}

// Write a JavaScript program to determine whether a given year is a leap year
leapYear(2000);