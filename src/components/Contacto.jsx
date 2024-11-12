// import { useState } from "react";
import { useForm } from "react-hook-form";

// export const Contacto = () => {
//   const [valores, setValores] = useState({
//     nombre: "",
//     email: "",
//     telefono: "",
//   });
//   //   const [nombre, setNombre] = useState("");
//   //   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Enviado", valores);
//   };

//   //   const handleNombre = (e) => {
//   //     setNombre(e.target.value)
//   //   }
//   //   const handleEmail = (e) => {
//   //     setEmail(e.target.value)
//   //   }

//   const handleValores = (e) => {
//     // console.log(e.target.value);
//     setValores({
//       ...valores,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="container">
//       <h1 className="main-title">Contacto</h1>
//       <form className="formulario" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Ingresa tu nombre"
//           value={valores.nombre}
//           onChange={handleValores}
//           name="nombre" //tiene que ser igual al nombre puesto en el estado
//         />
//         <input
//           type="email"
//           placeholder="Ingresa tu e-mail"
//           value={valores.email}
//           onChange={handleValores}
//           name="email" //tiene que ser igual al nombre puesto en el estado
//         />
//         <input
//           type="phone"
//           placeholder="Ingresa tu teléfono"
//           value={valores.telefono}
//           onChange={handleValores}
//           name="telefono" //tiene que ser igual al nombre puesto en el estado
//         />
//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   );
// };

// ---------------------------- Ultima manera de crear formularios con libreria react-hook-form

export const Contacto = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data)
  }

  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>

        <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")}/>
        <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
        <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

        <button className="enviar" type="submit">Enviar</button>

      </form>
    </div>
  );
};
