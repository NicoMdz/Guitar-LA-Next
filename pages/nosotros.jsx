import Image from "next/image"
import Layout from "@/components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, guitarLA, tienda de música"}
    >
    <main className="contenedor">
      <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" alt="Imagen sobre nosotros" width={1000} height={800}/>
         <div>
          <p>
          Etiam nulla nisi, posuere id consequat et, placerat eu elit. Fusce tempus eu ipsum eu placerat. Vestibulum scelerisque eleifend justo, nec vehicula libero tincidunt id. Donec nec iaculis mauris. Nulla maximus ultricies tristique. Maecenas sed urna ullamcorper leo varius rhoncus eu eu odio. Vivamus ac risus urna. Maecenas mollis sapien at orci maximus porttitor. In auctor risus quis risus tempus laoreet. Ut volutpat gravida pulvinar.</p>
          <p>
          Mauris luctus lacus enim, non convallis ex pellentesque non. Fusce auctor quam et felis blandit mollis. Proin orci nibh, auctor nec enim et, malesuada dignissim diam. Vestibulum tellus mi, venenatis sed orci a, consequat hendrerit libero. Cras quis pellentesque lorem, vitae faucibus nunc.</p>
      
        </div>
      </div>
    </main>

  
    </Layout>
  )
}
