Mi E-commerce de Plantas y Macetas

¡Bienvenido a mi E-commerce de Plantas y Macetas! Este proyecto representa mi esfuerzo y dedicación para ofrecer una experiencia única al usuario, permitiéndole explorar y adquirir plantas y macetas de alta calidad. A continuación, detallo las funcionalidades implementadas en cada etapa del desarrollo.

PRIMER PRE-ENTREGA

Componente Navbar.jsx:
En esta etapa inicial, he creado el componente Navbar.jsx para construir el menú principal de mi tienda en línea. Este componente incluye:

Brand: El título/nombre de la tienda.
Categorías Clickeables: Un listado de categorías que el usuario puede explorar y seleccionar para encontrar productos específicos.
Librería de Estilos: He incorporado Bootstrap para darle un diseño atractivo y responsivo al menú. Esto proporciona una experiencia de usuario más amigable.
Componente CartWidget.jsx
Además, he implementado el componente CartWidget.jsx, que presenta un ícono de carrito de compras. En esta fase, la notificación de elementos en el carrito se muestra como un número hardcodeado, y su función principal es indicar la cantidad de elementos en el carrito.

Componente ItemListContainer.jsx:
He creado el componente ItemListContainer.jsx, un contenedor que recibe una propiedad (greeting) y muestra un mensaje dentro del contenedor con estilos integrados.

En resumen, esta primera pre-entrega establece la base de la interfaz de usuario y la estructura general del proyecto, proporcionando una navegación fácil y una visualización atractiva de los productos.

************************************************************************************************************************************

SEGUNDA PRE-ENTREGA

Configuración del Routing y Navegación:
En esta etapa, he implementado la configuración del enrutamiento en la aplicación utilizando BrowserRouter de react-router-dom. Esto permite una navegación eficiente y una experiencia de usuario más fluida. A continuación, describo los componentes principales integrados en esta fase:

Componente Navbar con Cart
El componente Navbar.jsx ha sido mejorado para incluir una navegación más avanzada.

Componente Catálogo:
He desarrollado el componente AsyncMock.jsx, que representa el catálogo de productos de la tienda. Este componente responde a las rutas configuradas y carga los productos correspondientes a la categoría seleccionada.

Componente Detalle de Producto:
El componente ItemDetailContainer.jsx se ha creado para mostrar los detalles completos de un producto seleccionado. Al clickear un Item.js, la aplicación navega a la ruta '/item/:id', permitiendo a los usuarios explorar información detallada sobre cada artículo.

Integración de Parámetros:
He integrado los parámetros de mis async-mocks para reaccionar a :itemId y :categoryId utilizando efectos y los hooks de parámetros proporcionados por react-router-dom. Esta funcionalidad permite detectar cambios en la categoría y cargar dinámicamente los productos correspondientes.

En resumen, esta segunda pre-entrega establece una estructura de navegación sólida, proporcionando al usuario la capacidad de explorar el catálogo y acceder a detalles específicos de cada producto.

**********************************************************************************************************************************

PROYECTO FINAL

Sincronización de Counter y Cart Context:
Se integró el componente ItemCount.jsx en ItemDetailContainer.jsx. La sincronización del contador y el contexto del carrito se llevó a cabo de la siguiente manera:

Se separó la responsabilidad del contador y del detalle del ítem.
Se configuró el evento de compra según los detalles proporcionados en el manual.
Cuando ItemCount emite un evento onAdd, se almacena ese valor en un estado interno de ItemDetail para hacer desaparecer ItemCount.
El botón "Terminar mi compra" ahora puede navegar a un componente vacío en la ruta '/cart'.

Cart View:
Se implementó Cart.js con un desglose de la compra y un precio total. Este componente se expandió para mostrar todos los ítems agregados agrupados. Se incorporaron controles para eliminar ítems y se manejó de manera condicional el caso de carrito vacío. Se agregó la ruta '/cart' al BrowserRouter y CartWidget.js ahora consume el CartContext, mostrando en tiempo real la cantidad de ítems agregados.

Última Etapa del Proyecto

Item Collection I:
La conexión de la colección de Firestore ItemCollection con ItemListContainer y ItemDetailContainer fue realizada. Se eliminaron los async mocks y se reemplazaron con llamados a Firestore. La consulta de documentos ocurre según la navegación: consulta de un documento si se navega a /item/:id y consulta de varios documentos filtrados por categoría si se navega al catálogo.

Item Collection II:
Se creó la colección de órdenes en Firestore. Se utilizaron operaciones de inserción para insertar órdenes en la colección, asignando al usuario su ID de orden auto-generada. Se establecieron mappings para grabar un objeto con el formato { comprador: { nombre, email }, productos: [{id, title, quantity, price}], date, total }.

Conclusión:
Este proyecto de e-commerce de plantas y macetas se ha desarrollado de manera progresiva, implementando funcionalidades clave en cada etapa. La navegación, el carrito de compras, la sincronización de componentes y la integración con Firestore forman parte de una aplicación robusta y completa. ¡Gracias por explorar nuestro e-commerce! 🌿🛒

***********************************************************************************************************************************

Tecnologías Utilizadas:

React
Node
React Bootstrap
Firebase

**********************************************************************************************************************************

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
