// coletar dados
// de 97 até 122 são minúsculas de 65 até 90 maiúsculas
var reciveData  // recebe dados do usuário
var increment  // incrementa núemros para codificar

function encode() { //codifica os dados recebidos
  let arr = reciveData.split('') // array que recebe data (split transforma em número )
  let codeData = [] //receberá dados do for 
  let arrCode = [] // receberá dados do for2

  for (let i = 0; i < arr.length; i++) { // percorrerá o array estrutura padrão
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

//cifra de cesar
//transformar letras em números
// **toda letra é número, querida
//quais números  quero trabalhar  tabela ascii ou converter p/ hexadecimal
// como incrememtar para decodificar a msg
//transformar as letrinhas bonitinhas novamente!





