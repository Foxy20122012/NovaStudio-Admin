const productProps = [
    {
      label: "Nombre del producto",
      name: "name",
      type: "text",
      placeholder: "Nombre del producto",
      readOnly: true, // El campo ID generalmente es de solo lectura
    },
    {
      label: "Precio del producto",
      name: "precio",
      type: "price",
      required: true,
      maxLength: 8, // Agrega una longitud máxima
      minLength: 1, // Agrega una longitud mínima
    },
    {
        label: "Descripcion del producto",
        name: "description",
        type: "text",
        required: true,
        maxLength: 50, // Agrega una longitud máxima
        minLength: 3, // Agrega una longitud mínima
      },
  ];
  
  export default productProps;