import Layout from "@/components/layout"
import Link from "next/link"

export default function Pagina404() {
  return (
    <Layout
        title="Página No Encontrada"
    >
        <p className="error">Página No Encontrada</p>
        <Link legacyBehavior href="/">
            <a className="error-enlace">
                Ir a Inicio
            </a>
        </Link>
    </Layout>
  )
}
