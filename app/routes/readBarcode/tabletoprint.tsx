import { useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/readBarcode/index";
import type { LoaderData } from "~/models/route.barcode.server";


export default function TableToPrint() {
  const data = useLoaderData<typeof loader>() as LoaderData;

  return (
    <main>
      <div className="container p-2">
        <div className="bg-gray-800 text-white text-center justify-center resize p-4 rounded-t-lg
          uppercase">
          Etiquetas para imprimir
        </div>
        <div className="border border-gray-400"></div>
        <table className="table-fixed text-center bg-white overflow-hidden">
          <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Pedido</th>
            <th className="px-4 py-2">Rota</th>
            <th className="px-4 py-2">Parada</th>
            <th className="px-4 py-2">Impresso?</th>
          </tr>
          </thead>
          <tbody className="border-r-2 border-b-2 border-l-2 border-gray-800">
          {data.routeListItems.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="px-4 py-2 ">{row.id}</td>
              <td className="px-4 py-2">{row.orderid}</td>
              <td className="px-4 py-2">{row.route}</td>
              <td className="px-4 py-2">{row.stop}</td>
              <td className="px-4 py-2">{row.printed ? "sim" : "não" }</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}