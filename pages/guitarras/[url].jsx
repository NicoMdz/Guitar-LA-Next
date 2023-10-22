import { useState } from "react"
import Image from "next/image"
import styles from "../../styles/guitarras.module.css"
import Layout from "@/components/layout"

export default function Producto({guitarra, agregarCarrito}) {

  const [cantidad, setCantidad] = useState(0)
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

  const handleSubmit = e => {
    e.preventDefault()

    if (cantidad < 1) {
      alert("Cantidad no válida")
      return
    }
    //Construir un objeto
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    //Pasando la info al Context
    agregarCarrito(guitarraSeleccionada)
  }
  return (
    <Layout
      title={`Guitarra ${nombre}`}
    >
      <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.url} alt={`Imagen guitarra ${nombre}`} width={600} height={400}/>

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form 
            onSubmit={handleSubmit}
            className={styles.formulario}
          >
            <label htmlFor="cantidad">Cantidad:</label>
            <select id="cantidad" onChange={e => setCantidad(Number(e.target.value))}>
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al Carrito" />
          </form>
        </div>
      </div>
    </Layout>
  )
}


//Routing Dinámico con ServerSideProps (SSR)
// export async function getServerSideProps({query: {url}}) { //ya sea query o params

//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//   const { data: guitarra } =  await respuesta.json()

//   return{
//     props: {
//       guitarra
//     }
//   }
// }

//Routing Dinámico con ServerSideProps (SSG)
export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const { data } = await respuesta.json()

  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url
    }
  }))
  console.log(paths)

  return {
    paths,
    fallback: false //Comprueba si existe la url y si no retorna una pagina 404. Si lo dejamos en true, tendriamos que hacer esa validación arriba en el componente
  }
}

export async function getStaticProps({params: {url}}) { //query NO

  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const { data: guitarra } =  await respuesta.json()

  return{
    props: {
      guitarra
    }
  }
}