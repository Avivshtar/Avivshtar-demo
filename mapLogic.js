let map;
let mapMarkers = [];

const geoCoordsMap = [
    [32.0792, 34.8101], [32.0734, 34.8021], [31.2518, 34.7913], [32.9658, 35.4983], [32.3275, 34.8432],
    [32.8155, 34.9892], [31.7842, 35.2124], [31.8014, 34.6434], [32.1848, 34.8712], [31.9641, 34.8045]
];

if (typeof propertiesData !== 'undefined') {
    propertiesData.forEach((item, index) => {
        const coord = geoCoordsMap[index % geoCoordsMap.length];
        item.lat = coord[0];
        item.lng = coord[1];
    });
}

window.addEventListener('load', () => {
    initMap();
    initMapToggle(); 
});

function initMap() {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;

    map = L.map('map-container', {
        zoomControl: true,
        scrollWheelZoom: true 
    }).setView([32.075, 34.80], 11);

    L.tileLayer('https://mt1.google.com/vt/lyrs=m&hl=iw&x={x}&y={y}&z={z}&scale=2', {
        maxZoom: 20,
        detectRetina: true,
        attribution: '&copy; Google Maps'
    }).addTo(map);

    if (typeof propertiesData !== 'undefined') {
        renderMarkersOnMap(propertiesData);
    }
    
    map.invalidateSize();
    setTimeout(() => { map.invalidateSize(); }, 150);
    setTimeout(() => { map.invalidateSize(); }, 500);
}

function renderMarkersOnMap(dataArray) {
    mapMarkers.forEach(m => map.removeLayer(m));
    mapMarkers = [];

    const customBrownIcon = L.divIcon({
        className: 'custom-map-marker-container', 
        html: '<div class="premium-brown-pin"></div>',
        iconSize: [30, 30], iconAnchor: [15, 30], popupAnchor: [0, -32]     
    });

    dataArray.forEach(item => {
        if (item.lat && item.lng) {
            const marker = L.marker([item.lat, item.lng], { icon: customBrownIcon })
                .bindPopup(`<div style="direction: rtl; text-align: right; font-family: Heebo, sans-serif; padding: 2px;">
                                <b style="font-size: 15px; color: #875b33;">₪ ${item.price}</b><br>
                                <span style="font-size: 13px; color: #555;">${item.address}</span>
                            </div>`)
                .addTo(map);
            mapMarkers.push(marker);
        }
    });
}

function initMapToggle() {
    const mapToggleBtn = document.getElementById('map-toggle-btn');
    
    if(mapToggleBtn) {
        mapToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('map-is-collapsed');
            
            if(map) {
                let resizeInterval = setInterval(() => { map.invalidateSize(); }, 16); 
                setTimeout(() => { clearInterval(resizeInterval); map.invalidateSize(); }, 650);
            }
        });
    }
}