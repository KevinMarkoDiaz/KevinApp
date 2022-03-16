export const storeInventoryArr = [
  {
    category:"t-shirt",
    id: 1,
    title: "Camiseta local",
    price: 5000,
    pictureUrl: "https://todosobrecamisetas.com/wp-content/uploads/camiseta-adidas-millonarios-2021-22-3.jpg",
    stock: 20,
    description: "La nueva camiseta hace uso del template de catálogo Condivo 21, al que le agregan el escudo del club (actualizado a la versión oficial que el club venía usando de forma institucional desde hace varios años) y los logos de patrocinadores. Como todas las camisetas de este modelo, un patrón de figuras adorna la superficie de la prenda, dejando lisos el cuello y paneles laterales."
  },
  {
    category:"t-shirt",
    id: 2,
    title: "Camiseta visitante",
    price: 4500,
    pictureUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/780109def9054c60a49facbd017cc250_9366/CAMISETA_DE_VISITANTE_MILLONARIOS_FC_Gris_EW8010_01_laydown.jpg",
    stock: 20,
    description: "La nueva camiseta hace uso del template de catálogo Condivo 21, al que le agregan el escudo del club (actualizado a la versión oficial que el club venía usando de forma institucional desde hace varios años) y los logos de patrocinadores. Como todas las camisetas de este modelo, un patrón de figuras adorna la superficie de la prenda, dejando lisos el cuello y paneles laterales."
  },
  {
    category:"t-shirt",
    id: 3,
    title: "Camiseta entrenamiento",
    price: 4000,
    pictureUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/54f82330269140bfab12add100e3c5fe_9366/Camiseta_Polo_Millonarios_FC_Gris_EX5405_01_laydown.jpg",
    stock: 20,
    description: "La nueva camiseta hace uso del template de catálogo Condivo 21, al que le agregan el escudo del club (actualizado a la versión oficial que el club venía usando de forma institucional desde hace varios años) y los logos de patrocinadores. Como todas las camisetas de este modelo, un patrón de figuras adorna la superficie de la prenda, dejando lisos el cuello y paneles laterales."
  },
  {
    category:"items",
    id: 4,
    title: "Billetera  MFC",
    price: 5000,
    pictureUrl: "https://www.tiendamillonarios.com.co/sites/default/files/styles/large/public/2021-10/MFC-MH-21-B.A3.jpg?itok=kHOhGmOC",
    stock: 20,
    description: "La nueva camiseta hace uso del template de catálogo Condivo 21, al que le agregan el escudo del club (actualizado a la versión oficial que el club venía usando de forma institucional desde hace varios años) y los logos de patrocinadores. Como todas las camisetas de este modelo, un patrón de figuras adorna la superficie de la prenda, dejando lisos el cuello y paneles laterales."
  },
  {
    category:"items",
    id: 5,
    title: "Llavero redondo",
    price: 4500,
    pictureUrl: "https://www.tiendamillonarios.com.co/sites/default/files/styles/full_producto/public/2021-10/LLAVERO-MFC-MH-2.jpg?itok=RUaX2SCy",
    stock: 20,
    description: "La nueva camiseta hace uso del template de catálogo Condivo 21, al que le agregan el escudo del club (actualizado a la versión oficial que el club venía usando de forma institucional desde hace varios años) y los logos de patrocinadores. Como todas las camisetas de este modelo, un patrón de figuras adorna la superficie de la prenda, dejando lisos el cuello y paneles laterales."
  },
  {
    category:"items",
    id: 5,
    title: "Morral sling MFC",
    price: 4500,
    pictureUrl: "https://www.tiendamillonarios.com.co/sites/default/files/styles/large/public/2021-10/MFC-MH-21-2.jpg?itok=koV3-cH_",
    stock: 20,
    description: "La nueva camiseta hace uso del template de catálogo Condivo 21, al que le agregan el escudo del club (actualizado a la versión oficial que el club venía usando de forma institucional desde hace varios años) y los logos de patrocinadores. Como todas las camisetas de este modelo, un patrón de figuras adorna la superficie de la prenda, dejando lisos el cuello y paneles laterales."
  },
  {
    category:"cap",
    id: 7,
    title: "Gorra plana bordado MFC",
    price: 5000,
    pictureUrl: "https://www.tiendamillonarios.com.co/sites/default/files/styles/full_producto/public/2021-12/Gorra-MFC-azul-1.jpg?itok=jllCILbp",
    stock: 20,
    description: "La nueva camiseta hace uso del template de catálogo Condivo 21, al que le agregan el escudo del club (actualizado a la versión oficial que el club venía usando de forma institucional desde hace varios años) y los logos de patrocinadores. Como todas las camisetas de este modelo, un patrón de figuras adorna la superficie de la prenda, dejando lisos el cuello y paneles laterales."
  },
  {
    category:"cap",
    id: 8,
    title: "Gorra Adidas 2022",
    price: 4500,
    pictureUrl: "https://www.tiendamillonarios.com.co/sites/default/files/styles/full_producto/public/2021-08/1-2%20%282%29_0.jpg?itok=PAAOhI9C",
    stock: 20,
    description: "La nueva camiseta hace uso del template de catálogo Condivo 21, al que le agregan el escudo del club (actualizado a la versión oficial que el club venía usando de forma institucional desde hace varios años) y los logos de patrocinadores. Como todas las camisetas de este modelo, un patrón de figuras adorna la superficie de la prenda, dejando lisos el cuello y paneles laterales."
  },
  {
    category:"cap",
    id: 9,
    title: "Gorra MFC plus",
    price: 4000,
    pictureUrl: "https://www.tiendamillonarios.com.co/sites/default/files/styles/full_producto/public/2022-01/BLANCA%20LATERAL%20%281%29.jpg?itok=2CYyCHfw",
    stock: 20,
    description: "La nueva camiseta hace uso del template de catálogo Condivo 21, al que le agregan el escudo del club (actualizado a la versión oficial que el club venía usando de forma institucional desde hace varios años) y los logos de patrocinadores. Como todas las camisetas de este modelo, un patrón de figuras adorna la superficie de la prenda, dejando lisos el cuello y paneles laterales."
  }
];

export const storeInventoryPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res(storeInventoryArr)
  }, 2000);
});