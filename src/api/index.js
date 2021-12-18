const api = 'https://61b7f93964e4a10017d18d38.mockapi.io/productos'


export const productos = () => {
    return fetch(`${api}`,{
        method: "GET",
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}


export const productoById = (id) => {
    return fetch(`${api}/${id}`,{
        method: "GET",
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}


export const eliminar = (id) => {
    return fetch(`${api}/${id}`,{
        method: "DELETE",
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}



export const agregar = (obj) => {
    return fetch(`${api}`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)

    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}


export const modificar = (obj,id) => {
    return fetch(`${api}/${id}`,{
        method: "PUT",
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)

    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}