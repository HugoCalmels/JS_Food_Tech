
let dropdown1Trigger = document.querySelector('#dropdown-1')
let dropdownWrapper = document.querySelector('.dropdown-wrapper-1')
let dropdownElem = document.querySelector('#dropdown-menu-1')

console.log(dropdownElem)

// le dropdown se fixe trop bas au premier chargement, voyons voir manuellement...
dropdownElem.style.setProperty('--height', -60)


dropdown1Trigger.addEventListener('mouseover', (e) => {
  e.preventDefault()
    // actually dont need setInterval, but we initialize point A and B here
    let res = parseFloat(getComputedStyle(dropdownElem).getPropertyValue('--height'))
      if (res <= 14 && res >= -60) {
        dropdownElem.style.setProperty('--height', 14)
        console.log(res)
      } 


})

dropdown1Trigger.addEventListener('mouseout', () => {

  // actually dont need setInterval, but we initialize point A and B here
  let res = parseFloat(getComputedStyle(dropdownElem).getPropertyValue('--height'))
    if (res >= -60 && res <= 14) {
      dropdownElem.style.setProperty('--height', -60)
      dropdownElem.style.setProperty('--transi', .4)
      console.log(res)
    } 


})

