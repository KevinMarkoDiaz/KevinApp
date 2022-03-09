export const storeInventoryArr = [
    {
        id: 1,
        title: "Camiseta local",
        price: 5000,
        pictureUrl: "https://todosobrecamisetas.com/wp-content/uploads/camiseta-adidas-millonarios-2021-22-3.jpg"
    },
    {
        id: 2,
        title: "Camiseta visitante",
        price: 4500,
        pictureUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/780109def9054c60a49facbd017cc250_9366/CAMISETA_DE_VISITANTE_MILLONARIOS_FC_Gris_EW8010_01_laydown.jpg"
    }, {
        id: 3,
        title: "Camiseta entrenamiento",
        price: 4000,
        pictureUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/54f82330269140bfab12add100e3c5fe_9366/Camiseta_Polo_Millonarios_FC_Gris_EX5405_01_laydown.jpg"
    }
];

export const storeInventoryPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res(storeInventoryArr)
    }, 2000);
});