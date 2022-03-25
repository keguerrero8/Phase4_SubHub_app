import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";

const locales = {
  "en-Us": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

let date = new Date()
let day = date.getDate()
let month = String(date.getMonth()+1).padStart(2, "0");
let year = date.getFullYear();
let currentDate = `${month}/${day}/${year}`

//function to create subscription up to the current date
function createSubsPreCurrent(sub, currentDate) {
    let subArray = []
    let startYear = parseInt(sub.payment_date.slice(6,10))
    let startMonth = sub.payment_date[0] === "0" ? parseInt(sub.payment_date.slice(1,2)) : parseInt(sub.payment_date.slice(0,2))
    let endYear = parseInt(currentDate.slice(6,10))
    let endMonth = currentDate[0] === "0" ? parseInt(currentDate.slice(1,2)) : parseInt(currentDate.slice(0,2))
    const isYearlater = startYear > endYear
    const isSameMonthYear = startYear >= endYear && startMonth >= endMonth
    if ( isYearlater || isSameMonthYear) return subArray
    while (startYear !== endYear || startMonth !== endMonth) {
        if (startYear < endYear) {
            startMonth += 1
            subArray.push({payment_date: `${startMonth > 9 ? startMonth.toString() : "0" + startMonth.toString()}/${sub.payment_date.slice(3,5)}/${startYear.toString()}`, name: sub.name})
            if (startMonth === 12) {
                startMonth = 0
                startYear += 1
            }
        }
        else {
            startMonth += 1
            subArray.push({payment_date: `${startMonth > 9 ? startMonth.toString() : "0" + startMonth.toString()}/${sub.payment_date.slice(3,5)}/${startYear.toString()}`, name: sub.name})
        }
    }
    return subArray
}

//function to create subscriptions 12 months after the current date
function createSubsPostCurrent(sub, currentDate) {
  let subArray = []
  let startYear = parseInt(sub.payment_date.slice(6,10))
  let startMonth = sub.payment_date[0] === "0" ? parseInt(sub.payment_date.slice(1,2)) : parseInt(sub.payment_date.slice(0,2))
  let currentYear = parseInt(currentDate.slice(6,10))
  let currentMonth = currentDate[0] === "0" ? parseInt(currentDate.slice(1,2)) : parseInt(currentDate.slice(0,2))
  if (sub.payment_date < currentDate) {
    startYear = currentYear
    startMonth = currentMonth
  }
  let monthsToAdd = 0
  while (monthsToAdd < 12) {
    startMonth += 1
    subArray.push({payment_date: `${startMonth > 9 ? startMonth.toString() : "0" + startMonth.toString()}/${sub.payment_date.slice(3,5)}/${startYear.toString()}`, name: sub.name})
    if (startMonth === 12) {
      startYear += 1 
      startMonth = 0
    }
    monthsToAdd += 1
  }
  return subArray
}


function CalenderPage({subscriptions}) {
  let noRecurring = []
  let preSubArray = []
  let postSubArray = []

  //for each sub that is recurring, create recurring subs
  subscriptions.forEach(s => {
    if (s.isRecurring === "true") {
      preSubArray = [...preSubArray, ...createSubsPreCurrent(s, currentDate)]
      postSubArray = [...postSubArray, ...createSubsPostCurrent(s, currentDate)]
    }
    noRecurring.push(s)
  })

  //combine preSubs, postSubs and no recurring payments into one final array 
  const allSubsRecurring = noRecurring.concat(preSubArray).concat(postSubArray)

  //take final array and format and parse to user with Calender component props
  const calenderEntries = allSubsRecurring.map(s => {
    const year = s.payment_date.slice(6)
    const month = s.payment_date[0] === "0" ? s.payment_date.slice(1,2) : s.payment_date.slice(0,2)
    const day = s.payment_date[3] === "0" ? s.payment_date.slice(4,5) : s.payment_date.slice(3,5)
    return {
        title: s.name,
        start: new Date(parseInt(year), parseInt(month)-1, parseInt(day)),
        end: new Date(parseInt(year), parseInt(month)-1, parseInt(day))
    }
  })

  return (
    <div style={{height: "500px"}}>
      <Calendar 
        localizer={localizer} 
        events={calenderEntries} 
        popup 
        views={{month: true}} 
        startAccessor="start" 
        endAccessor="end" 
        style={{height: "100%", margin: "50px"}}
      />
    </div>
  );
}

export default CalenderPage;