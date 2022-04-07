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