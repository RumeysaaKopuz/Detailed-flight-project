# Detailed-flight-project
You can learn the details of all the planes on the map.
# Kutuphaneler

- leaflet
- react-leaflet
- react-redux
- @reduxjs/toolkit
- axios
- react-paginate
- thunk(toolkit icerisinde)

# Kaynaklar

- API: https://rapidapi.com/apidojo/api/flight-radar1
- Sol Alt Enlem: 34.812898
- Sol Alt Boylam: 27.594460
- Sağ Üst Enlem: 41.582989
- Sağ Üst Boylam: 44.816771

<img='flight.mp4'>

# Yapilacaklar

- Liste gorunumu `ListView.jsx ` bileseni olustur
- Harita gorunumu `MapView.jsx` bileseni olustur
- App.js icerisinde bu iki gorunum arasinda gecisi saglar
- `MapView.jsx` de harita (leaflet) kurulumunu yap
- Toolkit ile beraber redux kurulumu yap
- Uygulama ekrana geldigi anda API den Turkiye uzerinde olan ucus verilerini al ve store a aktar
- Elimizdeki dizileri objeye cevirmek istiyorum

- - Elimizdeki veri : [
    ['123123','asd123','kt65']
    ['123123','asd123','kt65']
    ['123123','asd123','kt65']
]

- - Elde etmek istedigim: [
    {
        id:'123123'
        code: 'asd123'
        lat:13,
        lan: 56
    }
]
