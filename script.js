setInterval(function() {
  let a = new Date()
  let hr = a.getHours()
  let mi = a.getMinutes()
  let se = a.getSeconds()
  let da = a.getDate()
  let mo = a.getMonth()
  let ye = a.getFullYear()
  let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  console.log(hr, mi, se, da, mo + 1, ye)
  document.getElementById('Hour').innerHTML = String(hr).padStart(2, '0') + ' :'
  document.getElementById('Min').innerHTML = String(mi).padStart(2, '0') + ' :'
  document.getElementById('Sec').innerHTML = String(se).padStart(2, '0')

  document.getElementById('Date').innerHTML = da + (da % 10 == 1 ? 'st' : (da % 10 == 2 ? 'nd' : (da % 10 == 3 ? 'rd' : 'th')))
  document.getElementById('Month').innerHTML = month[mo] + ', '
  document.getElementById('Year').innerHTML = ye
}, 1000)
