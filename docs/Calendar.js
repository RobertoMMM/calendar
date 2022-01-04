//Dark mode
 document.querySelector('.dark-mod-schimba').onclick = () => {
     document.querySelector('body').classList.toggle('dark')
     document.querySelector('body').classList.toggle('light')

 }
 //year

 isLeapYear = (year) => {
     return (year % 4 === 0 && year % 100 !== 0 && 
        year % 400 !== 0) || (year % 100 === 0 && 
            year % 400 === 0)
 }

getFebDays = (year) => {
     return isLeapYear(year) ? 29:28
}

let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April',
 'May', 'June', 'July', 'August', 'September', 'Octomber',
 'November', 'December']

 let month_picker = document.querySelector('#luna-selector')

 month_picker.onclick = () => {
     month_list.classList.add('show')
 }

//calendar

generateCalendar = (month, year) => {
    let calendar_days = document.querySelector('.calendar-zile')

    calendar_days.innerHTML = ''

    let calendar_header_year = document.querySelector('#anul')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let currDate = new Date()

    month_picker.innerHTML = month_names[month]
    calendar_header_year.innerHTML = year

    let first_day = new Date(year, month, 1)

    for(let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++ ){
        let day = document.createElement('div')
        if( i >= first_day.getDay()){
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
        if(i - first_day.getDay() + 1 === currDate.getDate() && year === 
        currDate.getFullYear() && month === currDate.getMonth()){
            day.classList.add('cur-date')
          }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.luna-lista')


month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div>${e}</div`
    month.onclick = () => {
    month_list.classList.remove('show')
    curr_month.value = index
    generateCalendar(curr_month.value, curr_year.value)
    }
    month_list.appendChild(month)
})

document.querySelector('#anul-precedent').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#anul-urmator').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}
let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year= {value: currDate.getFullYear()}


generateCalendar(curr_month.value, curr_year.value)