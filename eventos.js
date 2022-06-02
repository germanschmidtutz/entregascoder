// reconociendo
let usuario = document.getElementById("usuario");
let contraseña = document.getElementById("contraseña");
let recomendacionu = document.getElementById("recomendacionu");
let recomendacionc = document.getElementById("recomendacionc");
let enviar = document.getElementById("enviar");
let mensajeEnviar = document.getElementById("mensajeEnviar");


usuario.addEventListener('focus', ()=>{
    
    recomendacionu.textContent = "Recomendación: utulizá un nombre de usuario que te represente";

})

usuario.addEventListener('blur', ()=>{
recomendacionu.textContent = " ";
})

contraseña.addEventListener('focus', ()=>{
    
        recomendacionc.textContent = "Recomendación: utilizá una contraseña segura.";
    
})

contraseña.addEventListener('blur', ()=>{
    recomendacionc.textContent = " ";
})


enviar.addEventListener("click", ()=>{


    mensajeEnviar.textContent = "¡Usuario creado con éxito!";
        
})


