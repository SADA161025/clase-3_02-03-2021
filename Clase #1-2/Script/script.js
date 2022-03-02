import { Suma } from "./Suma.js";
import { Resta } from "./Resta.js";
import {Fahrenheit} from "./feh.js";
import {Multiplicacion} from "./multi.js"
import {Division} from "./divi.js"

let num1
let num2

let btnSuma = document.getElementById('Suma')
let btnResta = document.getElementById('Resta')
let btnF = document.getElementById('Fahrenheit')
let btnMultiplicacion = document.getElementById('Multiplicacion')
let btnDivision = document.getElementById('Division')
let resultado = document.getElementById('Resultado')


function LeerDatos() {
     num1 = Number(prompt('Ingrese Número 1'))
     num2 = Number(prompt('Ingrese Número 2'))
}

btnSuma.addEventListener('click',()=>{
    LeerDatos()
    console.log(Suma(num1,num2))
    resultado.innerHTML =  ` La Suma es ${Suma(num1,num2)}`
})

btnResta.addEventListener('click',()=>{
    LeerDatos()
    console.log(Resta(num1,num2))
    resultado.innerHTML =  ` La Resta es ${Resta(num1,num2)}`
})

btnF.addEventListener('click', ()=>{
    let F = parseFloat(prompt('Ingrese grado F°'))
    console.log(Fahrenheit(F))
    resultado.innerHTML =  ` Los grados celsius ${Fahrenheit(F)}`
})

btnMultiplicacion.addEventListener('click',()=>{
    LeerDatos()
    console.log(Multiplicacion(num1,num2))
    resultado.innerHTML =  ` La Multiplicacion es ${Multiplicacion(num1,num2)}`
})

btnDivision.addEventListener('click',()=>{
    LeerDatos()
    console.log(Multiplicacion(num1,num2))
    resultado.innerHTML =  ` La Division es ${Division(num1,num2)}`
})

