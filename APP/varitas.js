document.addEventListener('DOMContentLoaded', function () {
    const varitasData = [
        {
            dueño: 'Harry Potter',
            madera: 'Acebo',
            centro: 'Pluma de fénix',
            tamaño: '11 pulgadas',
            flexibilidad: 'Suave',
            image: `../assets/varita harry potter.png`,

        },
        {
            dueño: 'Hermione Granger',
            madera: 'Vid',
            centro: 'Fibra de corazón de dragón',
            tamaño: '10¾ pulgadas',
            flexibilidad: 'Rígida',
            image: `../assets/varita hermione.png`,
        },
        {
            dueño: 'Ron Weasley',
            madera: 'Fresno / Sauce',
            centro: 'Crin de unicornio',
            tamaño: '14 pulgadas',
            image: `../assets/varita ron.png`,
        },
        {
            dueño: 'Voldemort (Tom Riddle)',
            madera: 'Tejo',
            centro: 'Pluma de fénix',
            tamaño: '13½ pulgadas',
            flexibilidad: 'Muy flexible',
            image: `../assets/varita voldemort.png`,
        },
        {
            dueño: 'Albus Dumbledore',
            madera: 'Saúco',
            centro: 'Pelo de Thestral',
            tamaño: '15 pulgadas',
            flexibilidad: 'Rígida',
            image: `../assets/varita dumbledore.png`,
        },
        {
            dueño: 'Draco Malfoy',
            madera: 'Espino',
            centro: 'Crin de unicornio',
            tamaño: '10 pulgadas',
            image: `../assets/varita draco.png`,
        },
        {
            dueño: 'Sirius Black',
            madera: 'Cerezo',
            centro: 'Desconocido',
            tamaño: 'Desconocida',
            image: `../assets/varita sirius.png`,
        },
        {
            dueño: 'Severus Snape',
            madera: 'Desconocida',
            centro: 'Desconocido',
            tamaño: 'Desconocida',
            image: `../assets/varita snape.png`,
        },
        {
            dueño: 'Neville Longbottom',
            madera: 'Cerezo',
            centro: 'Crin de unicornio',
            tamaño: 'Desconocida',
            image: `../assets/varita neville.png`,
        }
    ];

    const varitaInfo = document.getElementById('varita-info');

    const searchInput = document.getElementById('search');

    function displayVaritas(varitas) {
      varitaInfo.innerHTML = '';
        varitas.forEach(varita => {
            const varitaElement = document.createElement('div');
            varitaElement.classList.add('varita');
            varitaElement.innerHTML = `
                <h2>${varita.dueño}</h2>
                <ul>
                  
                  <img src="${varita.image}" alt="${varita.owner}">
                  <div>

                    <li><strong>Madera:</strong> ${varita.madera}</li>
                    <li><strong>Núcleo:</strong> ${varita.centro}</li>
                    <li><strong>Longitud:</strong> ${varita.tamaño}</li>
                    <li><strong>Flexibilidad:</strong> ${varita.flexibilidad}</li> : ''}

                    </div>
                </ul>

            `;
            varitaInfo.appendChild(varitaElement);
        });
    }

    function filterVaritas() {
        const searchText = searchInput.value.toLowerCase();
        const filteredVaritas = varitasData.filter(varita =>
            varita.dueño.toLowerCase().includes(searchText)
        );
        displayVaritas(filteredVaritas);
    }

    searchInput.addEventListener('input', filterVaritas);

    displayVaritas(varitasData);
});
