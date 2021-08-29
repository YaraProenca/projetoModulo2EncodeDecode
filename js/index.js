
var userOption = document.getElementById('options')


var rangeIncrement = document.querySelector('#key1')
var rangeOut = document.querySelector('#outputKey1')

rangeIncrement.addEventListener('input', function () {
  rangeOut.textContent = rangeIncrement.value
})

document.getElementById('txt').addEventListener('keyup', writeText)

function writeText() {
  let textBox = document.getElementById('txt')
  document.getElementById('res').innerHTML = textBox.value
}

var codeButton = document.getElementById('codeBtn')
var decodeButton = document.getElementById('decodeBtn')


var reciveData = document.getElementById('txt')
var increment = document.getElementById('key1')

function encode() {
  let arr = reciveData.split('')
  let codeData = []
  let arrCode = []

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
  return arrCode.join('')
}

function decode() {
  let arr = reciveData.split('')
  let codeData = []
  let arrCode = []

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
  return arrCode.join('')
}

function enconde64() {
  let data64 = btoa(reciveData)

  return data64
}

function decode64() {
  let data64 = atob(reciveData)

  return data64
}



