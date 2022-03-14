export const storeInventoryArr = [
  {
    id: 1,
    title: "Camiseta local",
    price: 5000,
    pictureUrl: "https://todosobrecamisetas.com/wp-content/uploads/camiseta-adidas-millonarios-2021-22-3.jpg",
    stock: 20,
    description: "La nueva camiseta hace uso del template de catálogo Condivo 21, al que le agregan el escudo del club (actualizado a la versión oficial que el club venía usando de forma institucional desde hace varios años) y los logos de patrocinadores. Como todas las camisetas de este modelo, un patrón de figuras adorna la superficie de la prenda, dejando lisos el cuello y paneles laterales."
  },
  {
    id: 2,
    title: "Camiseta visitante",
    price: 4500,
    pictureUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/780109def9054c60a49facbd017cc250_9366/CAMISETA_DE_VISITANTE_MILLONARIOS_FC_Gris_EW8010_01_laydown.jpg",
    stock: 20,
    description: "La nueva camiseta hace uso del template de catálogo Condivo 21, al que le agregan el escudo del club (actualizado a la versión oficial que el club venía usando de forma institucional desde hace varios años) y los logos de patrocinadores. Como todas las camisetas de este modelo, un patrón de figuras adorna la superficie de la prenda, dejando lisos el cuello y paneles laterales."
  },
  {
    id: 3,
    title: "Camiseta entrenamiento",
    price: 4000,
    pictureUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/54f82330269140bfab12add100e3c5fe_9366/Camiseta_Polo_Millonarios_FC_Gris_EX5405_01_laydown.jpg",
    stock: 20,
    description: "La nueva camiseta hace uso del template de catálogo Condivo 21, al que le agregan el escudo del club (actualizado a la versión oficial que el club venía usando de forma institucional desde hace varios años) y los logos de patrocinadores. Como todas las camisetas de este modelo, un patrón de figuras adorna la superficie de la prenda, dejando lisos el cuello y paneles laterales."
    }
];

export const storeInventoryPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res(storeInventoryArr)
  }, 2000);
});