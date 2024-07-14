import { writeFile, readFile } from "fs/promises";

const writeDb = async (title: string) => {
  const readData = await readFile("../backend-14-m4-c15/src/db/history.txt", {
    encoding: "utf-8",
  });

  await writeFile(
    "../backend-14-m4-c15/src/db/history.txt",
    `${readData}\n${title}`
  ); //fs toma la ruta total no la relativa es decir que toma la carpeta entera
};

export { writeDb };
