let form = document.getElementById('form')
let handleSubmit = async (e) => {
    e.preventDefault()
    let room = e.target.room.value.toUpperCase()
    let name = e.target.name.value
    let config = await (await fetch('/config.json')).json()
    let response = await fetch(`${config.backendHost}/get_token/?channel=${room}`)
    let data = await response.json()
    let UID = data.uid
    let token = data.token
    sessionStorage.setItem('UID', UID)
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('room', room)
    sessionStorage.setItem('name', name)
    window.open('/room/', '_self')
}
form.addEventListener('submit', handleSubmit)