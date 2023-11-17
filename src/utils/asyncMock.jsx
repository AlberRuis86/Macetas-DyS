const fetchProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const listaProductos = [
          {
            id: 1,
            title: "Producto 1",
            description: "Descripción 1",
            price: 1000,
            category: "Categoría 1",
            imageKey: 'producto1'
          },
          {
            id: 1_1,
            title: "Producto 1_1",
            description: "Descripción 1_1",
            price: 1200,
            category: "Categoría 1",
            imageKey: 'producto1_1'
          },
          {
            id: 1_2,
            title: "Producto 1_2",
            description: "Descripción 1_2",
            price: 1300,
            category: "Categoría 1",
            imageKey: 'producto1_2'
          },
          {
            id: 2,
            title: "Producto 2",
            description: "Descripción 2",
            price: 1500,
            category: "Categoría 2",
            imageKey: 'producto2'
          },
          {
            id: 2_1,
            title: "Producto 2_1",
            description: "Descripción 2_1",
            price: 1600,
            category: "Categoría 2",
            imageKey: 'producto2_1'
          },
          {
            id: 2_2,
            title: "Producto 2_2",
            description: "Descripción 2_2",
            price: 1700,
            category: "Categoría 2",
            imageKey: 'producto2_2'
          },
          {
            id: 3,
            title: "Producto 3",
            description: "Descripción 3",
            price: 2000,
            category: "Categoría 3",
            imageKey: 'producto3'
          },
          {
            id: 3_1,
            title: "Producto 3_1",
            description: "Descripción 3_1",
            price: 2300,
            category: "Categoría 3",
            imageKey: 'producto3_1'
          },
          {
            id: 3_2,
            title: "Producto 3_2",
            description: "Descripción 3_2",
            price: 2500,
            category: "Categoría 3",
            imageKey: 'producto3_2'
          },
        ];
  
        resolve(listaProductos);
      }, 2000);
    });
  };
  
  export default fetchProducts;
  
  