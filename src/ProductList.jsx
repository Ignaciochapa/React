const products = [
    {
        id: 1,
        nombre: 'Buzo 1',
        categoria: 'Buzos',
        material: 'Algodón',
        talles: 'S, M, L, XL',
        precio: 5000,
        imagen: "Images/buzo2new.jpg",
        descripcion: 'Un buzo que va con vos'
    },
    {
        id: 2,
        nombre: 'Buzo 2',
        categoria: 'Buzos',
        material: 'Algodón',
        talles: 'S, M, L, XL',
        precio: 6000,
        imagen: "Images/buzo3new.jpg",
        descripcion: 'Imprescindible en tu placard'
    },
    {
        id: 3,
        nombre: 'Remera 1',
        categoria: 'Remeras',
        material: 'Algodón',
        talles: 'S, M, L, XL',
        precio: 3500,
        imagen: "Images/remera1new.jpg",
        descripcion: 'Basica que no te puede faltar'
    },
    {
        id: 4,
        nombre: 'Remera 2',
        categoria: 'Remeras',
        material: 'Algodón',
        talles: 'S, M, L, XL',
        precio: 4000,
        imagen: "Images/remera2new.jpg",
        descripcion: 'Diseño pensado para vos'
    },
    {
        id: 5,
        nombre: 'Campera 1',
        categoria: 'Camperas',
        material: 'Algodón',
        talles: 'S, M, L, XL',
        precio: 9000,
        imagen: "Images/campera2new.jpg",
        descripcion: 'La mejor campera para ésta temporada'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 200);
    })
}

export const getProductsId = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.map(prod => prod.id === productoId))
        }, 200);
    })
}

export const getProductsCategory = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.map(prod => prod.categoria === categoriaId))
        }, 200);
    })
}