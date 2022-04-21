/* === Que ofrecemos Cards === */

const queOfrecemos = document.querySelectorAll('.card-que_ofrece')

queOfrecemos.forEach(item => {
    item.addEventListener('click', () => {
        queOfrecemos.forEach(sacarClass => {
            sacarClass.classList.remove('active')
        });
        item.classList.add('active')
    })
});


/* === Botón Card === */

const botonCards = document.querySelectorAll('.card-priset')

botonCards.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    })
});



/* === Formulario === */

// Datalist

const inputs = document.querySelectorAll('.input-list')
const datalistas = document.querySelectorAll('.datalista')

inputs.forEach(item => {
    item.addEventListener('click', () => {
        datalistas.forEach(item2 => {
            item2.style.display = 'block'
            item2.style.display = 'none'
        })                        
    })
})



// Password show / hidden

const iconosPass = document.querySelectorAll('.password-input')

iconosPass.forEach(item => {
    item.children[0].addEventListener('click', () => {
        item.children[0].children[0].classList.toggle('d-none')
        item.children[0].children[1].classList.toggle('d-none')

        if (item.children[1].hasAttribute('type')) {
            item.children[1].removeAttribute('type')
        } else {
            item.children[1].setAttribute('type', 'password')
        }
    })
});



// Tabla Estado Civil - onchange

const insertarFilas = document.querySelector('.tabla-estado-civil')

function cantidadFamilia(cantidad) {

    if (cantidad != 0) {
        let resultado =
            `<div class="estCivil-row">
                <div class="estCivil-nombre">Nombre y Apellido</div>

                <div class="estCivil-cuil">Cuil</div>

                <div class="estCivil edad">Edad</div>

                <div class="estCivil-parentesco">Parentesco</div>
            </div>`

        for (let i = 0; i < cantidad ; i++) {
            resultado +=
                `<div class="estCivil-row">
                    <div class="estCivil-nombre">
                        <input type="text">
                    </div>

                    <div class="estCivil-cuil">
                        <input type="text">
                    </div>

                    <div class="estCivil edad">
                        <input type="text">
                    </div>

                    <div class="estCivil-parentesco">
                        <div class="select-input">
                            <div class="sel-icons">
                                &#x22c1;
                            </div>

                            <div class="tap-blan"></div>

                            <select name="" id="">
                                <option value="">Parentesco</option>
                                <option value="Padre">Padre</option>
                                <option value="Madre">Madre</option>
                                <option value="Tío">Tío</option>
                                <option value="Tía">Tía</option>
                            </select>
                        </div>
                    </div>
                </div>`
        }

        insertarFilas.innerHTML = resultado

    } else {
        insertarFilas.innerHTML = ''
        
    }
}


// === Progress Bar ===

const stepsRegistro = document.querySelector('.pasos-registracion')
const buttonAtras = document.querySelectorAll('.buttonAtras')
const buttonSiguiente = document.querySelectorAll('.buttonSiguiente')
const mascaraGradient = document.querySelector('.mascara-gradient')

let leftSteps = 0
let leftMascara = 0

buttonSiguiente.forEach(button => {
    button.addEventListener('click', () => {
        leftSteps -= 100
        leftMascara += 20
        stepsRegistro.style.left = `${leftSteps}vw`
        mascaraGradient.style.left = `calc(${leftMascara}% - 40px)`
    })
})

buttonAtras.forEach(button2 => {
    button2.addEventListener('click', () => {
        leftSteps += 100
        leftMascara -= 20
        stepsRegistro.style.left = `${leftSteps}vw`
        mascaraGradient.style.left = `calc(${leftMascara}% - 40px)`
    })
})



// Mostrar video de validación de proceso
function validarPerfil(video) {
    const formModal = document.querySelector('.modal-form-validado')

    formModal.classList.add('modal-form-validado-click')

    delayVideo(video)
}

function delayVideo(video) {
    setTimeout(() => {
        video.play()
    }, 250);
}


// === Proceso de entrega ===
// Buscar Programa
function buscarPrograma(value) {
    if(value === 'alimentario') {
        let alimentario = document.querySelector('.mod-alim-buscar')
        alimentario.classList.add('d-flex-center-column')
        alimentario.classList.remove('d-none')
    } else {
        let alimentario = document.querySelector('.mod-alim-buscar')
        alimentario.classList.remove('d-flex-center-column')
        alimentario.classList.add('d-none')
    }
}

// Abrir input para CUIL
function openInputAlimentario() {
    let alimentario = document.querySelector('.mod-alim-buscar')
    alimentario.style.display = 'none'
    
    let cuilAlimentario = document.querySelector('.input-cuil-alimentario')
    cuilAlimentario.classList.remove('d-none')
    cuilAlimentario.classList.add('d-flex-center')
}

// Open Modal Actualización Datos
function modalActualizacion() {
    const formModal = document.querySelector('.completar-datos')

    formModal.classList.add('completar-datos-click')
}


// Cantidad Módulos
function cantidadModulos(cant) {
    const cantidad = document.querySelector('.cantidad')
    if(cant >= 2) {

        let cant = `
        <div class="select-input">
            <div class="sel-icons" style="border-radius: 50px;">
                &#x22c1;
            </div>
            
            <div class="tap-blan"></div>
                
            <select name="" id="" style="border-radius: 50px;" onchange="motivo(this.value)">
                <option value="">¿Por qué motivo?</option>
                <option value="familiar">Por el grupo familiar</option>
                <option value="discapacidad">Por discapacidad</option>
                <option value="enfermedad">Por enfermedad</option>
                <option value="otro">Otro</option>
            </select>
        </div>`

        cantidad.innerHTML = cant
    } else {
        const motivos = document.querySelector('.motivos')

        cantidad.innerHTML = ''
        motivos.innerHTML = ''
    }
}

// Cantidad Módulos
function motivo(motivo) {
    const motivos = document.querySelector('.motivos')
    if(motivo == 'discapacidad') {
        let motivo = `
            <input
                style="border-radius: 50px"
                type="text"
                placeholder="Nombrar discapacidad">
        `
        motivos.innerHTML = motivo
    } else if(motivo == 'enfermedad') {
        let motivo = `
            <input
                style="border-radius: 50px"
                type="text"
                placeholder="Nombrar enfermedad">
        `
        motivos.innerHTML = motivo
    } else if(motivo == 'otro') {
        let motivo = `
            <textarea
                style="border-radius: 20px"
                rows="5"
                placeholder="Describir motivo"></textarea>
        `
        motivos.innerHTML = motivo
    } else {
        const cantidad = document.querySelector('.cantidad')

        motivos.innerHTML = ''
        cantidad.innerHTML = ''
    }
}