const beneficiarios = [
    {
        id: 1,
        evalucion_social: 'aprobado',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'No',
        beneficio: 'continuo',
        tipo: 'estandar',
        cantidad: 1,
        img_lupa: '../assets/img/iconos/lupa.svg'
    },
    {
        id: 2,
        evalucion_social: 'desaprobado',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'No',
        beneficio: 'continuo',
        tipo: 'diabetico',
        cantidad: 1,
        img_lupa: '../assets/img/iconos/lupa.svg'
    },
    {
        id: 3,
        evalucion_social: 'pendiente',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'Si',
        beneficio: 'unica',
        tipo: 'diabetico',
        cantidad: 2,
        img_lupa: '../assets/img/iconos/lupa.svg'
    },
    {
        id: 4,
        evalucion_social: 'aprobado',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'Si',
        beneficio: 'continuo',
        tipo: 'diabetico',
        cantidad: 1,
        img_lupa: '../assets/img/iconos/lupa.svg'
    },
    {
        id: 5,
        evalucion_social: 'aprobado',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'No',
        beneficio: 'unica',
        tipo: 'estandar',
        cantidad: 1,
        img_lupa: '../assets/img/iconos/lupa.svg'
    },
    {
        id: 6,
        evalucion_social: 'desaprobado',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'Si',
        beneficio: 'unica',
        tipo: 'diabetico',
        cantidad: 1,
        img_lupa: '../assets/img/iconos/lupa.svg'
    },
    {
        id: 7,
        evalucion_social: 'desaprobado',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'No',
        beneficio: 'continuo',
        tipo: 'estandar',
        cantidad: 2,
        img_lupa: '../assets/img/iconos/lupa.svg'
    },
    {
        id: 8,
        evalucion_social: 'aprobado',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'No',
        beneficio: 'continuo',
        tipo: 'estandar',
        cantidad: 2,
        img_lupa: '../assets/img/iconos/lupa.svg'
    },
    {
        id: 9,
        evalucion_social: 'desaprobado',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'No',
        beneficio: 'unica',
        tipo: 'estandar',
        cantidad: 1,
        img_lupa: '../assets/img/iconos/lupa.svg'
    },
    {
        id: 10,
        evalucion_social: 'pendiente',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'Si',
        beneficio: 'continuo',
        tipo: 'estandar',
        cantidad: 2,
        img_lupa: '../assets/img/iconos/lupa.svg'
    },
    {
        id: 11,
        evalucion_social: 'pendiente',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'Si',
        beneficio: 'continuo',
        tipo: 'estandar',
        cantidad: 1,
        img_lupa: '../assets/img/iconos/lupa.svg'
    },
    {
        id: 12,
        evalucion_social: 'aprobado',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'No',
        beneficio: 'continuo',
        tipo: 'estandar',
        cantidad: 1,
        img_lupa: '../assets/img/iconos/lupa.svg'
    },
    {
        id: 13,
        evalucion_social: 'pendiente',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'Si',
        beneficio: 'continuo',
        tipo: 'diabetico',
        cantidad: 1,
        img_lupa: '../assets/img/iconos/lupa.svg'
    },
    {
        id: 14,
        evalucion_social: 'pendiente',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'No',
        beneficio: 'unica',
        tipo: 'diabetico',
        cantidad: 1,
        img_lupa: '../assets/img/iconos/lupa.svg'
    },
    {
        id: 15,
        evalucion_social: 'pendiente',
        apellido: 'Baez',
        nombre: 'Lucas',
        cuil: '00-000000000-0',
        documentacion: 'Si',
        beneficio: 'unica',
        tipo: 'estandar',
        cantidad: 1,
        img_lupa: '../assets/img/iconos/lupa.svg'
    }
]

const containerTabla = document.querySelector('.tabla__beneficiarios.container')
let arrFilas = []

const crearFila = (beneficiario) => {
    let beneficioItem
    if(beneficiario.beneficio === 'unica') {
        beneficioItem = 'Por única vez'
    } else if(beneficiario.beneficio === 'continuo') {
        beneficioItem = 'Continuo'
    }

    let tipoItem
    if(beneficiario.tipo === 'diabetico') {
        tipoItem = 'Diabético'
    } else if(beneficiario.tipo === 'estandar') {
        tipoItem = 'Estándar'
    }
    
    let fila = `
        <div class="tabla__beneficiarios__info">
            <div class="tabla__id">${beneficiario.id}</div>
            <div class="tabla__evaluacion"><img src="../assets/img/iconos/${beneficiario.evalucion_social}.svg"></div>
            <div class="tabla__apellido">${beneficiario.apellido}</div>
            <div class="tabla__nombre">${beneficiario.nombre}</div>
            <div class="tabla__cuil">${beneficiario.cuil}</div>
            <div class="tabla__documentacion">${beneficiario.documentacion}</div>
            <div class="tabla__beneficio">${beneficioItem}</div>
            <div class="tabla__tipo">${tipoItem}</div>
            <div class="tabla__cantidad">${beneficiario.cantidad}</div>
            <div class="tabla__ver"><a href="./informacion_beneficiario.html"><img src="${beneficiario.img_lupa}" alt=""></a></div>
        </div>`

    arrFilas.push(fila)
}

const crearTabla = (tabla) => {
    arrFilas = []

    let primer_fila = `
    <div class="tabla__beneficiarios__titulos primer_fila">
        <div class="tabla__id">#</div>
        <div class="tabla__evaluacion">Evaluación social</div>
        <div class="tabla__apellido">Apellido</div>
        <div class="tabla__nombre">Nombre</div>
        <div class="tabla__cuil">Cuil</div>
        <div class="tabla__documentacion">Documentación completa</div>
        <div class="tabla__beneficio">Beneficio</div>
        <div class="tabla__tipo">Tipo de programa</div>
        <div class="tabla__cantidad">Cantidad a entregar</div>
        <div class="tabla__ver">Ver</div>
    </div>`

    arrFilas.push(primer_fila)
    
    tabla.forEach(item => {
        crearFila(item)
    })

    containerTabla.innerHTML = arrFilas.join('')
}

const filtrarTabla = (evaluacion) => {
    let newArray = []
    console.log(evaluacion);
    console.log(evaluacion.evalucion_social, evaluacion.beneficio, evaluacion.tipo);


    // Falta filtrar por municipio, porque no está diseñado para la tabla
    
    beneficiarios.map(item => {
        if ((item.evalucion_social === evaluacion.evalucion_social || evaluacion.evalucion_social === 'todos') &&
            (item.beneficio === evaluacion.beneficio || evaluacion.beneficio === 'todos') &&
            (item.tipo === evaluacion.tipo || evaluacion.tipo === 'todos')) {
            // (item.municipio === evaluacion.municipio || evaluacion.municipio === 'todos')
            newArray.push(item)
        }
    })

    crearTabla(newArray)
}

crearTabla(beneficiarios)
