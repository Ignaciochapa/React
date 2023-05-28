import { useForm } from "react-hook-form"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const Checkout = () => {

    const { register, handleSubmit }= useForm();
    const { carrito, precioTotal } = useContext(CartContext);
    const [orderId, setOrderId] = useState('')

    const sendOrder = (data) => {
      const order = {
        userData: {nombre: data.nombre, phone: data.phone, email: data.email},
        items: carrito,
        total: precioTotal()
      }
      const db = getFirestore();
      const ordersCollection = collection(db, "orders")
      addDoc(ordersCollection, order)
      .then(({id}) => setOrderId(id))
      .catch(console.log((error) => error))
    }

      if (orderId) {
        return (
          <div className="container-orders">
            <h1 className="main-title">¡Muchas gracias por tu compra!</h1>
            <h3 className="main-title">El id de su orden es: {orderId}</h3>
            <Link to='/' className="boton-vermas">Volver a comprar</Link>
          </div> 
        ) 
      }

  return (
    <div className="container">
        <form onSubmit={handleSubmit(sendOrder)} className="form">
            <label className="label">
                Nombre
                <input type="text" 
                        className="input" {...register("nombre")}/>
                Phone
                <input type="number"
                        className="input" {...register("phone")}/>
                Email
                <input type="email"
                        className="input" {...register("email")}/>
            </label>
            <div className="label">
                <button type="submit" className="boton-vermas">Crear Orden</button>
            </div>
        </form>
    </div>
  )
}

export default Checkout












// import { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import { db } from "../firebase";
// import CheckoutForm from "./CheckoutForm";
// import { Timestamp, addDoc, collection, getFirestore } from "firebase/firestore";

// const Checkout = () => {

//   const [orderId, setOrderId] = useState(false)
//   const { carrito, precioTotal } =  useContext(CartContext)
//   const createOrder = async ({ nombre, phone, email }) => {
//     try {
//       const objOrder = {
//         buyer: {
//           nombre, phone, email
//         },
//         items: carrito,
//         total: precioTotal,
//         date: Timestamp.fromDate(new Date())
//       }

//       const db = getFirestore();

//       const orderRef = collection(db, 'orders')

//       const orderAdded = await addDoc(orderRef, objOrder).then(({id}) => setOrderId(id))

//       //setOrderId(orderAdded.id)

//       console.log(objOrder)
//       console.log(orderAdded.id)

//       //vaciarCarrito()

//     }
//     catch {
//       console.log((error) => error)
//     }
//   }





//   if (orderId) {
//     return <h1>El id de su orden es: {orderId}</h1>
//   }


//   return (
//     <div>
//       <h1>Checkout</h1>
//       <CheckoutForm onConfirm={createOrder}/>
//     </div>
//   )
// }

// export default Checkout