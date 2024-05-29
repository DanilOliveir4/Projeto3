import { Card } from "@/components/card"
import { Star } from "lucide-react"

export default function Home() {

  const produtos = [
    { id: 1, nome: "Nike Air Max", preco: 500, imagem: "https://via.placeholder.com/300" },
    { id: 2, nome: "Adidas Superstar", preco: 400, imagem: "https://via.placeholder.com/300" },
    { id: 3, nome: "Puma Future Rider", preco: 300, imagem: "https://via.placeholder.com/300" },
    { id: 4, nome: "Reebok Classic", preco: 200, imagem: "https://via.placeholder.com/300" },
    { id: 5, nome: "Vans Old Skool", preco: 150, imagem: "https://via.placeholder.com/300" },
    { id: 6, nome: "Converse All Star", preco: 100, imagem: "https://via.placeholder.com/300" },
  ]

  return (
    <main className="flex min-h-screen flex-col p-12" >
      <h1 className="text-4xl font-bold text-teal-500 mb-4" >Senac Shop</h1>

      <section className="flex gap-4 flex-wrap">
      {produtos.map(produto => <Card produto={produto} />)}
      </section>
    </main>
  )
}
