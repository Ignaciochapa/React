import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProductos } from "../utils";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria =  useParams().categoria

    useEffect(() => {
        getProductos()
        //pedirDatos()
            .then((res) => {
                setProductos(res)
                if (categoria) {
                    setProductos(res.filter((prod) => prod.categoria === categoria));
                } else {
                    setProductos(res)
                }
            })
    }, [categoria])
    
    
  return (
    <div>
        <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer