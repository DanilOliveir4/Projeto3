"use client";
import { Star } from "lucide-react";
import { useState } from "react";

interface CardProps {
  produto: {
    id: number;
    nome: string;
    imagem: string;
    preco: number;
  };
}

export function Card({ produto }: CardProps) {
  const [favorito, setFavorito] = useState(false);

  function toggleFavorito() {
    setFavorito(!favorito);
  }

  return (
    <article className="flex flex-col p-4 bg-teal-950 rounded-lg shadow-md relative">
      <div
        onClick={toggleFavorito}
        className="absolute right-2 top-2 cursor-pointer"
      ></div>
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="h-64 object-cover"
      />
      <div onClick={toggleFavorito} className="flex gap-2 items-center">
        <Star
          className={
            favorito
              ? "fill-yellow-500 stroke-none cursor-pointer"
              : "fill-gray-500 stroke-none cursor-pointer"
          }
        />
        <span className="text-gray-500">R$ {produto.preco.toFixed(2)}</span>
      </div>
      <h2 className="text-xl font-bold text-teal-500">{produto.nome}</h2>
      <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md">
        Comprar
      </button>
    </article>
  );
}
