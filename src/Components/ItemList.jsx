import Item from "./Item";


const ItemList = ( {productos} ) => {

  return (
    <div className="container container-productos">
        <h2 className="main-title">Nuestro catálogo de productos</h2>

        <div className="productos">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList