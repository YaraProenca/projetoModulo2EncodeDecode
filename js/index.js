// declaração de variáveis
var reciveData = document.getElementById('txt')
var increment = document.getElementById('key1')
var rangeIncrement = document.querySelector('#key1')
var rangeOut = document.querySelector('#outputKey1')
var codeButton = document.getElementById('codeBtn')
var decodeButton = document.getElementById('decodeBtn')
var userOption = document.getElementById('options')
var botao = document.getElementById('press')
var result = document.getElementById('res')
var divIncrement = document.getElementById('divIncrement')






// botão incrementar
rangeIncrement.addEventListener('input', function () {
  rangeOut.textContent = rangeIncrement.value
})

codeButton.addEventListener('click', function () {
  botao.textContent = 'Codificar'
})

decodeButton.addEventListener('click', function () {
  botao.textContent = 'Decodificar'
})

botao.addEventListener('click', writeText)


userOption.addEventListener('change', function () {
  let displayNone = userOption.value == '0' ? 'none' : 'flex'

  divIncrement.style.display = displayNone
})



function writeText() {
  if (codeButton.checked) {
    document.getElementById('res').innerHTML = encode(reciveData.value, +increment.value)
  } else {
    console.log('estou aqui');
    document.getElementById('res').innerHTML = decode(reciveData.value, +increment.value)
  }

}



function encode(reciveData, increment) {
  let arr = reciveData.split('')
  let codeData = []
  let arrCode = []

  if (userOption.value == '1') {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() <= 90) {
        let getOutAscii = ((arr[i].charCodeAt()) - 65 + increment) % 26
        codeData.push(getOutAscii + 65)

      } else if (arr[i].charCodeAt() >= 97 && arr[i].charCodeAt() <= 122) {
        let getOutAscii = ((arr[i].charCodeAt()) - 97 + increment) % 26
        codeData.push(getOutAscii + 97)
      } else {
        codeData.push(arr[i].charCodeAt())
      }
    }

    for (let j = 0; j < codeData.length; j++) {
      arrCode.push(String.fromCharCode(codeData[j]))
    }
  }

  else {


    let data64 = btoa(reciveData)

    arrCode.push(data64)

  }
  return arrCode.join('')
}




function decode(reciveData, increment) {

  let arr = reciveData.split('')
  let codeData = []
  let arrCode = []

  if (userOption.value == '1') {


    for (let i = 0; i < arr.length; i++) {
      if (arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() <= 90) {
        let getOutAscii = ((arr[i].charCodeAt()) - 65 - increment) % 26
        codeData.push((getOutAscii < 0 ? getOutAscii + 26 : getOutAscii) + 65)

      } else if (arr[i].charCodeAt() >= 97 && arr[i].charCodeAt() <= 122) {
        let getOutAscii = ((arr[i].charCodeAt()) - 97 - increment) % 26
        codeData.push((getOutAscii < 0 ? getOutAscii + 26 : getOutAscii) + 97)
      } else {
        codeData.push(arr[i].charCodeAt())
      }

    }

    for (let j = 0; j < codeData.length; j++) {
      arrCode.push(String.fromCharCode(codeData[j]))

    }
  }

  else {

    let data64 = atob(reciveData)

    arrCode.push(data64)
  }

  return arrCode.join('')
}







