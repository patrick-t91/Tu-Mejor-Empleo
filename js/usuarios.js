const d = document;
const buttonRegistrate = d.getElementById("buttonRegistrate")
const registro = d.getElementById("registro")
const desdeCasa = d.getElementById("fromhome")
const registroSitio = d.getElementById("registrositio")
localStorage.clear()

const agregarNodoHijo = (nodoPadre, nodoHijo) => {
    const np = d.getElementById(nodoPadre);
    np && np.appendChild(nodoHijo)
}

// Ingreso de usuarios registrados
const inputUsuario = d.createElement("input")
    inputUsuario.id="usuario"
    inputUsuario.type="text"
    inputUsuario.placeholder="Nombre de usuario"
    agregarNodoHijo("ingresositio", inputUsuario)
    
const inputContraseña = d.createElement("input")
    inputContraseña.id="contraseña"
    inputContraseña.type="password"
    inputContraseña.placeholder="Contraseña"
    agregarNodoHijo("ingresositio", inputContraseña)

const ingresoUsuario = d.createElement("input")
    ingresoUsuario.id = "inputIngreso"
    ingresoUsuario.type="submit"
    ingresoUsuario.value = "Ingresar"
    agregarNodoHijo("ingresositio", ingresoUsuario)   

ingresoUsuario.addEventListener("click", () => {
    localStorage.setItem("usuario", inputUsuario.value)
})

// Registro de nuevos usuarios
const inputUsuarioReg = d.createElement("input")
    inputUsuarioReg.id="registrousuario"
    inputUsuarioReg.type="text"
    inputUsuarioReg.placeholder="Crea tu nombre de usuario"
    agregarNodoHijo("registrositio", inputUsuarioReg)

const inputContraseñaReg = d.createElement("input")
    inputContraseñaReg.id="registrocontraseña"
    inputContraseñaReg.type="password"
    inputContraseñaReg.placeholder="Contraseña"
    agregarNodoHijo("registrositio", inputContraseñaReg)

const confirmarContraseña = d.createElement("input")
    confirmarContraseña.id="confirmarcontraseña"
    confirmarContraseña.type="password"
    confirmarContraseña.placeholder="Confirma tu contraseña"
    agregarNodoHijo("registrositio", confirmarContraseña)

const registroUsuario = d.createElement("input")
    registroUsuario.id="inputRegistro"
    registroUsuario.type="submit"
    registroUsuario.value="Registrarse"
    agregarNodoHijo("registrositio", registroUsuario)
 
registroUsuario.addEventListener("click", (event) => {
    if (inputContraseñaReg === "" || confirmarContraseña === "" || inputContraseñaReg.value != confirmarContraseña.value) {
        event.preventDefault();
        alert("Las contraseñas deben coincidir")
    } else {
        localStorage.setItem("usuario", inputUsuarioReg.value)
    }
})