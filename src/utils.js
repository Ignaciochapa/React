import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getProductos = () => {
    const productosCollection = collection(db, "productos")
    return getDocs(productosCollection)
    .then((respuesta) => {
        const arrayDeDocs = respuesta.docs
        const resultado = arrayDeDocs.map((documento) => {
            const id = documento.id
            const data = documento.data()
            data.id = id
            return data
        })
        return resultado
        })
    .catch(error => console.log(error))
}

export const getProductosPorId = (id) => {
    const productosCollection = collection(db, "productos")
    const filtro = query(productosCollection, where("id", "==", id))
    console.log(filtro)
    return getDocs(filtro)
    .then((respuesta) => {
        const arrayDeDocs = respuesta.docs
        const resultado = arrayDeDocs.map((documento) => {
            const id = documento.id
            const data = documento.data()
            data.id = id

            console.log(data)
            return data
        })
        return resultado
        })
    .catch(error => console.log(error))
} 
