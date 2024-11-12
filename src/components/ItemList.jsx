import { Item } from "./Item";
import { toCapital } from "../helpers/toCapital"

export const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container">
      <h2 className="main-title">{toCapital(titulo)}</h2>
      <div className="productos">
        {productos.map((producto) => {
            return (<Item producto={producto} key={producto.id}/>)
          
        })}
      </div>
    </div>
  );
};
