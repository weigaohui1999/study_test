import thenFs from 'then-fs'

thenFs.readFile('./files/1.txt','utf8').then((result) =>{ console.log(result)})
thenFs.readFile('./files/2.txt','utf8').then((result) =>{ console.log(result)})
thenFs.readFile('./files/3.txt','utf8').then((result) =>{ console.log(result)})