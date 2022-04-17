import Swal from "sweetalert2"

export const saleAlert = () => {
  Swal.fire({
    title: 'Gracias por tu compra, estamos preparando tu pedido',
    width: 600,
    padding: '3em',
    color: '#000',
    background: '#fff',
    backdrop: `
        rgba(0,0,123,0.4)
      `
  })
}

export const errorAlert = (error) => {
  Swal.fire({
    icon: 'error',
    title: 'Algo salio mal',
    text: error
  })
} 