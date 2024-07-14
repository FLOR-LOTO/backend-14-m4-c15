import { getTitle } from "./model/model";

//paso 1 comienza a leer el archivo imprime 1
console.log(1);

// paso 2 NO lee esta funcion por que es una declaracion no una invocacion
const main = async (title: string) => {
  // paso 6 entro a la funcion main e imprime el 3
  console.log(3);

  // paso 7 llama a la funcion getTitle que está en el modelo
  const getTitles = await getTitle(title);
  return getTitles;
};

//paso 3 consologuea el 2
console.log(2);

//paso 4 llama a la funcion main, esta funcion es asincronica por lo que la deja en segundo plano resolviendo y sigue ejecutando el resto para luego resolverla al final

//paso 5 invoca a main
main("king").then((res) => res);
//paso 13 termina todas las operaciones e imprime el 8
console.log(8);

//paso 14 no tiene mas nada en la pila por lo que le toca devolver lo que retorno la funcion asincrónica que dejamos en segundo plano es decir el pedido de informacion que hicimos en main()
