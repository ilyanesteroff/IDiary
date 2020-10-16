import { timeUnitsInSeconds as secs } from './time'
import pluralizer from './pluralizer'

export default (time) => {
  let output = ''
  if(time > secs.year){
    let years = Math.floor(time / secs.year)
    output = `${years} ${pluralizer(years, 'year')} `
    time = time - years * secs.year
  }
  if(time > secs.month){
    let months = Math.floor(time / secs.month)
    output = output.concat(`${months} ${pluralizer(months, 'month')} `)
    time = time - months * secs.month
  }
  if(time > secs.day){
    let days = Math.floor(time / secs.day)
    output = output.concat(`${days} ${pluralizer(days, 'day')} `)
    time = time - days * secs.day
  }
  if(time > secs.hour){
    let hours = Math.floor(time / secs.hour)
    output = output.concat(`${hours} ${pluralizer(hours, 'day')} `)
    time = time - hours * secs.hour
  }
  if(time > secs.minute){
    let minutes = Math.floor(time / secs.minute)
    output = output.concat(`${minutes} ${pluralizer(minutes, 'minute')} `)
    time = time - minutes * secs.minute
  }
  if(time > secs.second){
    let seconds = Math.floor(time / secs.second)
    output = output.concat(`${seconds} ${pluralizer(seconds, 'second')} `)
  } 
  return output
}