import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

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
