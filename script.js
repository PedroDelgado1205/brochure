let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function openModal(id) {
    const datos = {
        1: ['Paola mancheno Moscoso', 'Gerente general de NewBest. Ingeniera Civil con 20 años de experiencia en gestión y desarrollo de proyectos en al ámbito público.'],
        2: ['Daniela Vásquez Durán', `Máster en Comunicación Social y Marketing Licenciada en Comunicación Social con 12 años de experiencia dentro de la función pública ejecutando actividades como: Planificación Estratégica de Comunicación, dirección de campañas comunicacionales, Relaciones Públicas, Ejecución de activaciones BTL, directora ejecutiva de agencia de publicidad VADU ESTRATEGAS y Gerente ELEVA PREMIUM BRAND, SAS dedicada a ejecutar proyectos de comunicación 360.`],
        3: ['Petronio Encalada Torres', `Magíster en Derecho Laboral y Seguridad Social. Especialización en Derecho aduanero. Abogado de los Tribunales de Justicia de la República Experiencia laboral con más de 15 años en el ámbito público en general y 13 años en la Corporación Eléctrica del Ecuador CELEC EP.`],
        4: ['MARIA CARIDAD BARRERA', `Contadora publica auditora con más de 15 años de experiencia en la gestión financiera y contable en empresas de diversos sectores, experta en análisis financiero, cumplimiento fiscal, gestión de presupuestos y optimización de procesos contables con formación en prevención de lavado de activos, exfuncionaria del SRI. Actualmente contadora perito calificado de la función judicial.`],
        5: ['Pedro Reyes Bernal', 'Ingeniero en sistemas con maestría en gestión de proyectos.'],
        6: ['MAURICIO RANKOVICH', `Profesional del área de finanzas con amplia experiencia en el manejo de negocios a nivel internacional, competencias de liderazgo, emprendedor, visionario, creativo y motivador, coach ontológico, ejecutivo y PNL, consultor de empresas en áreas comerciales, desarrollo de canales de distribución, planes de negocio, planificación estratégica, procesos de coaching en ventas, equipos ejecutivos, liderazgo y cultura organizacional.`],
        'm1': ['Cena', 'img/menus/m1.jpeg'],
        'm2': ['Coffe Break', 'img/menus/m2.jpeg'],
        'm3': ['Almuerzo', 'img/menus/m3.jpeg']
    };

    const modal = document.getElementById('ventanaModal');
    
    if (id == 'm1' || id == 'm2' || id == 'm3') {
        if (datos[id] && datos[id][0] && datos[id][1]) {
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="cerrar" onclick="cerrar()">&times;</span>
                    <h2>${datos[id][0]}</h2>
                    <img src="${datos[id][1]}" style="width: 100%;" alt="">
                </div>
            `;
            modal.style.display = 'block';
        } else {
            console.error(`No data found for ID: ${id}`);
        }
    }else{
        if (datos[id] && datos[id][0] && datos[id][1]) {
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="cerrar" onclick="cerrar()">&times;</span>
                    <h2>${datos[id][0]}</h2>
                    <p>${datos[id][1]}</p>
                </div>
            `;
            modal.style.display = 'block';
        } else {
            console.error(`No data found for ID: ${id}`);
        }
    }
}

function cerrar() {
    const modal = document.getElementById('ventanaModal');
    modal.style.display = 'none';
}