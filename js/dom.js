const d = document
const ls = localStorage
const empleosBuscados = d.getElementById("empleos-buscados")
const encabezadoEmpleos = d.getElementById("encabezado-empleos")
const tablaRecientes = d.getElementById("tabla-recientes")
const bienvenida = d.getElementById("bienvenida-usuario")

let listaEmpleos = []


// AJAX con jQuery
$(document).ready(()=> {
        $.getJSON("js/empleos.json", (response, status) => {
                if (status === "success") {
                        let listadeEmpleos = response
                        listaEmpleos = listadeEmpleos
                }
                else {
                        console.warn("No se pudo cargar el contenido")
                }
        })
})

const agregarNodoHijo = (nodoPadre, nodoHijo) => {
        const np = d.getElementById(nodoPadre);
        np && np.appendChild(nodoHijo)
    }

// Bienvenida usuario
const bienvenidaUsuario = () => {
        let usuario = ls.getItem("usuario")
        if (!usuario) {
                bienvenida.innerHTML = ""
        }
        else {
                bienvenida.innerHTML = `<h3> ¡Bienvenido, ${usuario}! </h3>`
        }
}

bienvenidaUsuario()

// Búsqueda general
const busquedaGeneral = d.createElement("input")
        busquedaGeneral.id = "busquedageneral"
        busquedaGeneral.type = "search"
        busquedaGeneral.placeholder = "Busca por palabra clave"        
        agregarNodoHijo("busqueda-general", busquedaGeneral)
const buttonBuscarGeneral = d.createElement("button")
        buttonBuscarGeneral.id = "btnBuscarGeneral"
        buttonBuscarGeneral.innerText = "Buscar"
        agregarNodoHijo("busqueda-general", buttonBuscarGeneral)

// Búsqueda de campos específicos 
const empresa = d.createElement("input")
        empresa.id = "empresa"
        empresa.type = "text"
        empresa.placeholder = "Empresa"
        agregarNodoHijo("busqueda", empresa)

const tipoEmpleo = d.createElement("input")
        tipoEmpleo.id = "tipoempleo"
        tipoEmpleo.type = "text"
        tipoEmpleo.placeholder = "Profesión o empleo"
        agregarNodoHijo("busqueda", tipoEmpleo)
 
const salarioMinimo = d.createElement("input")
        salarioMinimo.id = "salariominimo"
        salarioMinimo.type = "number"
        salarioMinimo.placeholder = "Salario mínimo pretendido "
        agregarNodoHijo("busqueda", salarioMinimo)

const nivelLaboral = d.createElement("input")
        nivelLaboral.id = "nivellaboral"
        nivelLaboral.type = "text"
        nivelLaboral.placeholder = "Nivel laboral"
        agregarNodoHijo("busqueda", nivelLaboral)

const jornadaSemana = d.createElement("input")
        jornadaSemana.id = "jornadasemana"
        jornadaSemana.type = "number"
        jornadaSemana.placeholder = "Jornada máxima semanal"
        agregarNodoHijo("busqueda", jornadaSemana)
        
const jornadaDia = d.createElement("input")
        jornadaDia.id = "jornadadia"
        jornadaDia.type = "number"
        jornadaDia.placeholder = "Jornada máxima diaria"
        agregarNodoHijo("busqueda", jornadaDia)   

const paisEmpleo = d.createElement("input")
        paisEmpleo.id = "paisempleo"
        paisEmpleo.type = "text"
        paisEmpleo.placeholder = "País del empleo"
        agregarNodoHijo("busqueda", paisEmpleo)

const ubicacion = d.createElement("input")
        ubicacion.id = "ubicacion"
        ubicacion.type = "text"
        ubicacion.placeholder = "Región o área"
        agregarNodoHijo("busqueda", ubicacion)

const buttonBuscar = d.createElement("button")
        buttonBuscar.id ="btnBuscar"
        buttonBuscar.innerText = "Buscar empleo"
        agregarNodoHijo("busqueda", buttonBuscar)


// Mostrar empleos filtrados         
const mostrarEmpleosFiltrados = (arrayEmpleos) => {
        empleosBuscados.innerHTML = "" 
        for (empleo of arrayEmpleos) {
        let card =      `<div class="cardEmpleo">
                                <h1>${empleo.empresa} busca perfil ${empleo.nivelLaboral} para el puesto de ${empleo.rubro}</h1>
                                <p>Las condiciones laborales serán las siguientes: <br>
                                Un salario de ${empleo.salario} USD;<br>
                                Una jornada semanal de ${empleo.jornadaSemanal} horas y una jornada diaria de ${empleo.jornadaDiaria} horas;<br>
                                Ubicación del empleo: ${empleo.region}, ${empleo.pais}.</p>
                        </div>`
        empleosBuscados.innerHTML += card;
        }
}


   