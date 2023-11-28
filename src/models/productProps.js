const productProps = [
  {
    label: "Nombre del producto",
    name: "name",
    type: "text",
    placeholder: "Nombre del producto",
    readOnly: false,
    required: true,
  },
  {
    label: "Precio del producto",
    name: "price",
    type: "number",
    required: false,
    maxLength: 8,
    minLength: 1,
  },
  {
    label: "Descripción del producto",
    name: "description",
    type: "text",
    required: false,
    maxLength: 200, // Actualizado para reflejar la longitud máxima de la base de datos
    minLength: 3,
  },
  {
    label: "Imagen del producto",
    name: "image",
    type: "text", // Cambiado a "text" ya que parece ser una URL de imagen
    placeholder: "URL de la imagen",
    required: false, // Puede ser opcional según tus necesidades
    maxLength: 200, // Actualizado para reflejar la longitud máxima de la base de datos
  },
];

export default productProps;
