import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id


    useEffect(() => {
      
      const docRef = doc(db, 'productos', id)
      getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data}
        setItem(productAdapted)
      })
    }, [id])

  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer