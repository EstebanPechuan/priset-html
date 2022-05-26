const agentes = [
    {
        id: 1,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'creador',
    },
    {
        id: 2,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'creador',
    },
    {
        id: 3,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'administrador',
    },
    {
        id: 4,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'visor',
    },
    {
        id: 5,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'visor',
    },
    {
        id: 6,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'administrador',
    },
]

const containerTabla = document.querySelector('.tabla__agentes.container')
let arrFilas = []

const crearFila = (agente) => {    
    let fila = `
        <div class="tabla__agentes__info">
            <div class="tabla__nombre">${agente.nombre}</div>
            <div class="tabla__cuil">${agente.cuil}</div>
            <div class="tabla__rol">${agente.rol}</div>
            <div class="tabla__acciones">
                <button onclick="">
                    <img src="../assets/img/editar.png" title="Editar">
                </button>
                <button onclick="">
                    <img onclick="openModalDelete(this)" src="../assets/img/delete.png" title="Eliminar">
                </button>
            </div>
        </div>
    `

    arrFilas.push(fila)
}

const crearTabla = (tabla) => {
    arrFilas = []

    let primer_fila = `
        <div class="tabla__agentes__titulos primer_fila">
            <div class="tabla__nombre">Nombre y Apellido</div>
            <div class="tabla__cuil">Cuil</div>
            <div class="tabla__rol">Rol</div>
            <div class="tabla__acciones">Acciones</div>
        </div>
    `

    arrFilas.push(primer_fila)
    
    tabla.forEach(item => {
        crearFila(item)
    })

    containerTabla.innerHTML = arrFilas.join('')
}

const filtrarTabla = (rolAgente) => {
    let newArray = []
    console.log(rolAgente);
    console.log(rolAgente.rolAgente);


    // Falta filtrar por municipio, porque no está diseñado para la tabla
    
    agentes.map(item => {
        if ((item.rol === rolAgente.rolAgente || rolAgente.rolAgente === 'todos')) {
            newArray.push(item)
        }
    })

    crearTabla(newArray)
}

crearTabla(agentes)
