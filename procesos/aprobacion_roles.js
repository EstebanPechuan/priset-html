const roles = [
    {
        id: 1,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'creador',
        fecha: '19/05/2022',
        mail: 'nombre@gmail.com'
    },
    {
        id: 2,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'creador',
        fecha: '19/05/2022',
        mail: 'nombre@gmail.com'
    },
    {
        id: 3,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'administrador',
        fecha: '19/05/2022',
        mail: 'nombre@gmail.com'
    },
    {
        id: 4,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'visor',
        fecha: '19/05/2022',
        mail: 'nombre@gmail.com'
    },
    {
        id: 5,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'visor',
        fecha: '19/05/2022',
        mail: 'nombre@gmail.com'
    },
    {
        id: 6,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'administrador',
        fecha: '19/05/2022',
        mail: 'nombre@gmail.com'
    },
    {
        id: 7,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'coordinador',
        fecha: '19/05/2022',
        mail: 'nombre@gmail.com'
    },
    {
        id: 8,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'coordinador',
        fecha: '19/05/2022',
        mail: 'nombre@gmail.com'
    },
    {
        id: 9,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'visor',
        fecha: '19/05/2022',
        mail: 'nombre@gmail.com'
    },
    {
        id: 10,
        nombre: 'Nombre y Apellido',
        cuil: '00-000000000-0',
        rol: 'visor',
        fecha: '19/05/2022',
        mail: 'nombre@gmail.com'
    },
]

const containerTabla = document.querySelector('.tabla__roles.container')
let arrFilas = []

const crearFila = (roles) => {    
    let fila = `
        <div class="tabla__roles__info">
            <div class="tabla__nombre">${roles.nombre}</div>
            <div class="tabla__fecha">${roles.fecha}</div>
            <div class="tabla__cuil">${roles.cuil}</div>
            <div class="tabla__rol">${roles.rol}</div>
            <div class="tabla__acciones">
                <button onclick="">
                    <a href="./nuevo_rol.html">
                        <img src="../assets/img/check_aprobado.png" title="Aprobar">
                    </a>
                </button>
                <button onclick="">
                    <img onclick="openModalDelete(this)" src="../assets/img/reprobado.png" title="Rechazar">
                </button>
            </div>
        </div>
    `

    arrFilas.push(fila)
}

const crearTabla = (tabla) => {
    arrFilas = []

    let primer_fila = `
        <div class="tabla__roles__titulos primer_fila">
            <div class="tabla__nombre">Nombre y Apellido</div>
            <div class="tabla__fecha">Fecha</div>
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

const filtrarTabla = (rol) => {
    let newArray = []
    console.log(rol);
    console.log(rol.rol);


    // Falta filtrar por municipio, porque no está diseñado para la tabla
    
    roles.map(item => {
        if ((item.rol === rol.rol || rol.rol === 'todos')) {
            newArray.push(item)
        }
    })

    crearTabla(newArray)
}

crearTabla(roles)
