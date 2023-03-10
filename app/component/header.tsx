import { useUser } from "~/utils";
import { Form, Link } from "@remix-run/react";
import React from "react";



export default function Header() {
  const user = useUser();

  return (
    <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
      <div className="text-2xl ">
        <Link to="/readbarcode">Ler QR Code</Link>
      </div>
      <div className="text-2xl ">
        <Link to="/register">Importar Dados</Link>
      </div>
      <div className="text-2xl ">
        <Link to="/concluded">Concluir</Link>
      </div>
      <p>usuário logado: {user.email}</p>
      <Form action="/logout" method="post">
        <button
          type="submit"
          className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
        >
          Sair
        </button>
      </Form>
    </header>
  );
}


export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return <div>Opa, deu ruim. </div>;
}