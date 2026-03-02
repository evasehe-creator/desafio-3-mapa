var config = {
style: 'mapbox://styles/evash/cmm3a3r3x002b01qzcisy98k0',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZXZhc2giLCJhIjoiY21semdibTN3MDZoNDNmcjh1eDFsYTMycCJ9.IR3a1OlizOcm8nwj0XzMsQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '¿Cómo ha variado la población española entre provincias?',
    subtitle: 'Radiografía de dos décadas de variación de población en España.',
    byline: 'Por Eva Segarra',
    footer: 'Fuente: INE.es. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'vista-general',
            alignment: 'left',
            hidden: false,
            title: 'Un país con zonas bien diferenciadas',
            description: 'Mientras el Mediterráneo, Madrid y las islas actúan como imanes de población, el interior peninsular sufre una gran pérdida.',
            location: {
                center: [-5.60052, 40.19038],
                zoom: 4.75,
                pitch: 9.50,
                bearing: 2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'perdida-población',
            alignment: 'right',
            hidden: false,
            title: 'La España que se vacía',
            image: 'https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2023/05/31/16855510031097.jpg',
            description: 'En el noroeste peninsular, el rojo domina el paisaje. Provincias como Zamora, Ourense o Soria sufren la mayor pérdida de población en estas dos décadas.',
            location: {
                center: [-5.748, 41.806],
                zoom: 7,
                pitch: 45,
                bearing: -15,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'costa baleares',
            alignment: 'left',
            hidden: false,
            title: 'La atracción del Mediterráneo',
            image: 'https://s2.ppllstatics.com/todoalicante/www/multimedia/2025/07/03/Benidorm-R6bLiuuiwVoS2LgX0Y09hXI-1200x840@TodoAlicante.JPG',
            description: 'En contraste con el interior, el litoral mediterráneo y las baleares ganan población. El clima, la mayor cantidad de ofertas de trabajo gracias al turismo, convierten a estas zonas en grandes receptoras de población.',
            location: {
                center: [0.550, 39.500],
                zoom: 6.5,
                pitch: 35,
                bearing: -15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Guadalajara',
            alignment: 'right',
            hidden: false,
            title: 'Guadalajara: bajo la influencia de Madrid',
            image: 'https://eldecanodeguadalajara.com/uploads/images/news_15763_1761732450_poster.jpg',
            description: 'Madrid no para de crecer. Sim embargo, el encarecimiento de la vida ha provocado un efecto imán hacia provincias vecinas como Guadalajara, bien conectadas con la capital.',
            location: {
                center: [-3.266, 40.633],
                zoom: 8.5,
                pitch: 45,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'canarias',
            alignment: 'left',
            hidden: false,
            title: 'El auge de las islas Canarias',
            image: 'https://static.tiempodecanarias.com/headers/2023/4/8/header-1680967879341-m.jpeg',
            description: 'El archipiélago Canario también ha vivido una gran variación de población en sus islas en estas últimas dos décadas, gracias a su clima su estilo de vida, que atrae a aquellos que pueden teletrabajar en remoto.',
            location: {
                center: [-15.500, 28.200],
                zoom: 6.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
