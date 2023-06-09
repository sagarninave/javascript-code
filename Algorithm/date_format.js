const myDateFormat = (date) => {

  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  
  let result = {
  "Default Date": date,
  "UTC Format": date.toUTCString(),
  "Full Date Format": date.toString(),
  "Local Date": date.toLocaleDateString(),
  "Local 24 Hour Time": date.toLocaleTimeString(),
  "Local Date With 24 Hour Time": date.toLocaleString(),
  
  "24 Hour": hour,
  "Minute ": minute,
  "Second ": second,
  "Time Scheme 12 Hour": date.toLocaleString('en-US', { hour: 'numeric', hour12: true }),
  
  "toLocaleDateString() Short Month": date.toLocaleDateString('default', { month: 'short' }),
  "toLocaleDateString() Long Month ": date.toLocaleDateString('default', { month: 'long' }),
  "toLocaleTimeString() Long Month": date.toLocaleTimeString('default', { month: 'long' }),
  "toLocaleTimeString() Short Month ": date.toLocaleTimeString('default', { month: 'short' }),
  
  "DateString() Short Week": date.toLocaleDateString("language", { weekday: 'short' }),
  "DateString() Long Week": date.toLocaleDateString("language", { weekday: 'long' }),
  "TimeString() Short Week": date.toLocaleTimeString("language", { weekday: 'short' }).split(" ")[0],
  "TimeString() Long Week": date.toLocaleTimeString("language", { weekday: 'long' }).split(" ")[0],
  
  "Custom Date Format(DD-MM-YY)": `${day}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${year}`,
  "Custom Date Format(Full Date)": `${date.toLocaleDateString("language", { weekday: 'long' })}, ${day}th ${date.toLocaleDateString('default', { month: 'short' })} ${year}, ${(hour % 12) < 10 ? `0${hour % 12}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second} ${hour % 12 ? "PM" : "AM"}`,
  }
  console.log("Date :", result)
  }
  
  // Write a JavaScript program to display the current day and time in the different formats.
  // https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/
  myDateFormat(new Date());