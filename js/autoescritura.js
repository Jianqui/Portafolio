let card_chat1 = document.getElementById('card-chat1')
let card_chat2 = document.getElementById('card-chat2')
let card_chat3 = document.getElementById('card-chat3')
let saludo = document.getElementById('saludo')
let cuerpo = document.getElementById('cuerpo')

let str1 = document.querySelector("#card-chat1 p.card-text").textContent
let str2 = document.querySelector("#card-chat2 p.card-text").textContent
let str3 = document.querySelector("#card-chat3 p.card-text").textContent

let contenido_chat = document.getElementById('contenido-chat')

let tiempo=200
let espera = 600
let t_espera2= (tiempo* str1.length)+ espera+ 500
let t_espera3 = (tiempo*str2.length)+ t_espera2 + espera + 500
let t_final = (tiempo*str3.length) +t_espera3 +500

str1= str1.split('')
str2= str2.split('')
str3= str3.split('')

let print = (cadena,i,lugar_mostrar,caja_habilitar,tiempo,espera)=>{

    let printstr1= setInterval(function(){
        lugar_mostrar.innerHTML += cadena[i]
        i++

        if(i===cadena.length){
                setTimeout(() => {
                    lugar_mostrar.innerHTML=''
                    caja_habilitar.style.display='block' 
                }, espera);
            
            clearInterval(printstr1)            
        }

    },tiempo)
}

let wirting= (text1,text2,text3)=>{

    let i=0
    let j=0
    let k=0

    print(text1,i,contenido_chat,card_chat1,tiempo,espera)

    setTimeout(() => {
        print(text2,j,contenido_chat,card_chat2,tiempo,espera)
    }, t_espera2)

    setTimeout(() => {
        print(text3,k,contenido_chat,card_chat3,tiempo,espera)
    }, t_espera3)

    /*sirve para habilitar todo el contenido de la pagina y ocultar el saludo */
    setTimeout(()=>{
        cuerpo.style.display="block";
        saludo.style.display="none";
    },t_final)

}

wirting(str1,str2,str3)