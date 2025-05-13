var map = L.map('mapid').setView([-23.55052, -46.63331], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var iconeTemplo = L.icon({
    iconUrl: 'assets/images/page/points/templo.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });
  
  var iconePaulista = L.icon({
    iconUrl: 'assets/images/page/points/avenida.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });
  
  var iconeMuseu = L.icon({
    iconUrl: 'assets/images/page/points/museu.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });

  var iconeMuseu2 = L.icon({
    iconUrl: 'assets/images/page/points/museu2.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });
  
  L.marker([-23.53744, -46.60653], { icon: iconeTemplo })
    .addTo(map)
    .bindPopup('<div class="popup-content"><strong class="popup-title">Templo de Salomão</strong><br><img src="/assets/images/page/imagens/salomao.jpeg" height="200px" class="popup-image"><br><p class="popup-p">Um imponente templo religioso da Igreja Universal, localizado no Brás. Inspirado no templo bíblico, é um marco arquitetônico de São Paulo.</p></div>');

  
  L.marker([-23.56118, -46.65657], { icon: iconePaulista })
    .addTo(map)
    .bindPopup('<div class="popup-content"><strong class="popup-title">Avenida Paulista</strong><br><img src="/assets/images/page/imagens/paulista.jpeg" height="200px" class="popup-image"><br><p class="popup-p">Uma das avenidas mais icônicas de São Paulo, centro financeiro, cultural e turístico com museus, shoppings e eventos.</p></div>');
  
  L.marker([-23.56120, -46.65588], { icon: iconeMuseu })
    .addTo(map)
    .bindPopup('<div class="popup-content"><strong class="popup-title">MASP</strong><br><img src="/assets/images/page/imagens/Museu.jpeg" height="200px" class="popup-image"><br><p class="popup-p">O Museu de Arte de São Paulo é famoso por seu design suspenso e por abrigar uma das coleções mais importantes da América Latina.</p></div>');

    L.marker([-23.537493, -46.627012], { icon: iconeMuseu2 })
    .addTo(map)
    .bindPopup('<div class="popup-content"><strong class="popup-title">Museu Catavento</strong><br><img src="/assets/images/page/imagens/museu2.jpeg" height="200px" class="popup-image"><br><p class="popup-p">Um museu interativo de ciência e tecnologia voltado para jovens e crianças, com exposições dinâmicas sobre física, química, biologia e astronomia.</p></div>');