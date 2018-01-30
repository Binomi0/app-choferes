export function success(position) {
    return position.coords
}
export function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
}

export function getUserLocation() {
    let geolocationOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    return navigator.geolocation.getCurrentPosition(success, error, geolocationOptions);
}

export function isUserAuth() {
    firebase.auth().onAuthStateChanged(user => {
        return user
    }) 
}

export function userLogOut() {
    firebase.auth().signOut().then(() => {
        return true
    })
    .catch(() => false)

}