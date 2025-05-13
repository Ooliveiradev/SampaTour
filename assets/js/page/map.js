// Camada padrão
var streets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Camada escura (CartoDB)
var dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
});

// Camada satélite (Esri)
var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles © Esri'
});
var map = L.map('mapid', {
  center: [-23.55052, -46.63331],
  zoom: 13,
  layers: [streets] // camada inicial
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var iconeTemplo = L.icon({
    iconUrl: 'assets/images/page/points/pin4.png',
    iconSize: [50, 50],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });
  
  var iconePaulista = L.icon({
    iconUrl: 'assets/images/page/points/pin3.png',
    iconSize: [50, 50],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });
  
  var iconeMuseu = L.icon({
    iconUrl: 'assets/images/page/points/pin2.png',
    iconSize: [50, 50],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });

  var iconeMuseu2 = L.icon({
    iconUrl: 'assets/images/page/points/pin1.png',
    iconSize: [50, 50],
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
    .bindPopup('<div class="popup-content"><strong class="popup-title">MASP</strong><br><img src="/assets/images/page/imagens/museu.jpeg" height="200px" class="popup-image"><br><p class="popup-p">O Museu de Arte de São Paulo é famoso por seu design suspenso e por abrigar uma das coleções mais importantes da América Latina.</p></div>');

    L.marker([-23.537493, -46.627012], { icon: iconeMuseu2 })
    .addTo(map)
    .bindPopup('<div class="popup-content"><strong class="popup-title">Museu Catavento</strong><br><img src="/assets/images/page/imagens/museu2.jpeg" height="200px" class="popup-image"><br><p class="popup-p">Um museu interativo de ciência e tecnologia voltado para jovens e crianças, com exposições dinâmicas sobre física, química, biologia e astronomia.</p></div>');

    // Cria um controle personalizado
// Cria um controle personalizado
L.Control.BotaoLocalizar = L.Control.extend({
  onAdd: function (map) {
    var btn = L.DomUtil.create('button');
    btn.innerHTML = '⊕';
    btn.title = 'Mostrar minha localização';

    btn.style.backgroundColor = '#fff';
    btn.style.border = '1px solid #aaa';
    btn.style.borderRadius = '4px';
    btn.style.cursor = 'pointer';
    btn.style.padding = '5px 7px';
    btn.style.fontSize = '18px';
    btn.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';

    // Impede que o clique no botão afete o mapa
    L.DomEvent.disableClickPropagation(btn);

    btn.onclick = function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            map.setView([lat, lon], 15);

            L.marker([lat, lon])
              .addTo(map)
              .bindPopup("Você está aqui!")
              .openPopup();
          },
          function (error) {
            alert("Não foi possível acessar sua localização.");
            console.error(error);
          }
        );
      } else {
        alert("Seu navegador não suporta geolocalização.");
      }
    };

    return btn;
  },

  onRemove: function (map) {
    // Nada necessário aqui
  }
});

// Adiciona o botão ao canto superior direito do mapa
L.control.botaoLocalizar = function (opts) {
  return new L.Control.BotaoLocalizar(opts);
};

L.control.botaoLocalizar({ position: 'topleft' }).addTo(map);

L.Control.BotaoVoltarSP = L.Control.extend({
  onAdd: function (map) {
    const btn = L.DomUtil.create('button', 'leaflet-control-reset');
    btn.innerHTML = '↺';
    btn.title = 'Voltar para São Paulo';

    btn.onclick = function () {
      map.setView([-23.5558, -46.6396], 13); // Coordenadas centrais de São Paulo
    };

    L.DomEvent.disableClickPropagation(btn); // Não deixar o clique afetar o mapa
    return btn;
  },
  onRemove: function (map) {}
});

L.control.botaoVoltarSP = function (opts) {
  return new L.Control.BotaoVoltarSP(opts);
};

L.control.botaoVoltarSP({ position: 'topleft' }).addTo(map);

var baseMaps = {
  "🌐 Ruas": streets,
  "🌌 Escuro": dark,
  "🛰️ Satélite": satellite
};

L.control.layers(baseMaps, null, { position: 'topright' }).addTo(map);

