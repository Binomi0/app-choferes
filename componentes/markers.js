export default [
    {
        title: 'Mi ubicación',
        description: 'Aqui es donde estoy',
        latlng : {
            latitude: position.latitude,
            longitude: position.longitude
        }
    },
    {
        title: 'Mi ubicación2',
        description: 'Aqui es donde estoy2',
        latlng : {
            latitude: position.latitude + 0.001,
            longitude: position.longitude + 0.001
        }
    }
]