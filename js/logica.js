// Búsqueda por campos específicos
const filtrar = (empleo) => {
        return (
                (!empresa.value || empleo.empresa.toUpperCase().includes(empresa.value.toUpperCase())) &&
                (!tipoEmpleo.value || empleo.rubro.toUpperCase().includes(tipoEmpleo.value.toUpperCase())) && 
                (!salarioMinimo.value || empleo.salario >= salarioMinimo.value) &&
                (!nivelLaboral.value || empleo.nivelLaboral.toUpperCase().includes(nivelLaboral.value.toUpperCase())) &&
                (!jornadaSemana.value || empleo.jornadaSemanal <= jornadaSemana.value) &&
                (!jornadaDia.value || empleo.jornadaDiaria <= jornadaDia.value) &&
                (!paisEmpleo.value || empleo.paisEmpleo.toUpperCase().includes(paisEmpleo.value.toUpperCase())) &&
                (!ubicacion.value || empleo.region.toUpperCase().includes(ubicacion.value.toUpperCase()))
        )
}

const filtrarEmpleos = () => {
        let empleosFiltrados = listaEmpleos.filter(filtrar)
        mostrarEmpleosFiltrados(empleosFiltrados) 
        for (empleo of empleosFiltrados) {
                ls.setItem(empleo.id, JSON.stringify(empleo))   
        }         
}   

// Búsqueda general por palabra clave
const palabraClave = (empleo) => {
        return (
                (empleo.empresa.toUpperCase().includes(busquedaGeneral.value.toUpperCase())) ||
                (empleo.rubro.toUpperCase().includes(busquedaGeneral.value.toUpperCase())) || 
                (empleo.salario >= parseInt(busquedaGeneral.value)) ||
                (empleo.nivelLaboral.toUpperCase().includes(busquedaGeneral.value.toUpperCase())) ||
                (empleo.pais.toUpperCase().includes(busquedaGeneral.value.toUpperCase())) ||
                (empleo.region.toUpperCase().includes(busquedaGeneral.value.toUpperCase()))
        )                     
}

const filtrarPorPalabraClave = () => {
        let empleosFiltradosGeneral = listaEmpleos.filter(palabraClave)
        mostrarEmpleosFiltrados(empleosFiltradosGeneral)
        for (empleo of empleosFiltradosGeneral) {
                ls.setItem(empleo.id, JSON.stringify(empleo))   
        }
}

// Click
const buttonClick = (elemento, funcion) => {
        elemento.addEventListener("click", funcion)
}

buttonClick(buttonBuscar, filtrarEmpleos)
buttonClick(buttonBuscarGeneral, filtrarPorPalabraClave)

// Foco
function foco(campo) {
        campo.style.backgroundColor = "salmon"
}

function normal(campo) {
        campo.style.backgroundColor = "white"
    } 

// Focus
empresa.addEventListener("focus", () => {foco(empresa)})
tipoEmpleo.addEventListener("focus", () => {foco(tipoEmpleo)})
salarioMinimo.addEventListener("focus", () => {foco(salarioMinimo)})
nivelLaboral.addEventListener("focus", () => {foco(nivelLaboral)})
jornadaDia.addEventListener("focus", () => {foco(jornadaDia)})
jornadaSemana.addEventListener("focus", () => {foco(jornadaSemana)})
paisEmpleo.addEventListener("focus", () => {foco(paisEmpleo)})
ubicacion.addEventListener("focus", () => {foco(ubicacion)})

    // Blur
empresa.addEventListener("blur", () => {normal(empresa)})
tipoEmpleo.addEventListener("blur", () => {normal(tipoEmpleo)})
salarioMinimo.addEventListener("blur", () => {normal(salarioMinimo)})
nivelLaboral.addEventListener("blur", () => {normal(nivelLaboral)})
jornadaDia.addEventListener("blur", () => {normal(jornadaDia)})
jornadaSemana.addEventListener("blur", () => {normal(jornadaSemana)})
paisEmpleo.addEventListener("blur", () => {normal(paisEmpleo)})
ubicacion.addEventListener("blur", () => {normal(ubicacion)})





