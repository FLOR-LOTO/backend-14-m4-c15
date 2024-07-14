import { Character } from "./types";
import { API_URL } from "../constants";
import { writeDb } from "../Utils/fs";

const getAllData = (title: string) => {
  //paso 9 entra a la funcion e imprime el 5
  console.log(5);
  // paso 10 hace el pedido a la api lo guarda en la variable data e imprime el 6
  const movies = fetch(API_URL + title).then((response) =>
    response.json().then((res) => res)
  );
  console.log(6);
  // paso 11 retorna la respuesta que sera enviada a quien invoco la funcion, osea getTitle
  return movies;
};

const getTitle = (title: string) => {
  // paso 7 entra a getTitle e imprime el 4.
  console.log(4);
  writeDb(title);
  //paso 8 llama a la funcion getAllData
  const movies = getAllData(title);
  //paso 12 recibe lo que retorna getAllData, imprime el 7, y retorna esta respuesta a la funcion que la llamo, osea
  console.log(7);

  return movies;
};

export { getTitle };
