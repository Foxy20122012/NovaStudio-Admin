export const transformProductsToRows = (products) => {
  if (!Array.isArray(products)) {
    console.error("La variable 'products' no es un array:", products);
    return [];
  }

  return products.map((product) => ({
    id: product.id,
    name: product.name || "",
    description: product.description || "",
    price: product.price,
    image: product.image || "",
  }));
};

export const productColumns = {
  id: "ID",
  name: "Nombre",
  description: "Descripción",
  price: "Precio",
  image: "Imagen",
};
