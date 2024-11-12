import data from "../data/MOCK_DATA.json";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    const item = data.find((item) => item.id === id);

    if (item) {
      resolve(item);
    } else {
      reject({ error: "No se encontró el producto" });
    }
  });
};
