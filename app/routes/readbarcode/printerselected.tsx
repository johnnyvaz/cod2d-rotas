import { useFetcher, useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/readbarcode/index";
import type { LoaderData } from "~/types";

export default function PrinterSelected() {
  const data = useLoaderData<typeof loader>() as LoaderData;
  const fetcher = useFetcher();

  return (
    <main>
      <div className="">
        <br/>
        <h3 className="text-2xl font-medium text-white text-center">Configuração da Impressora</h3>
        <table className="table-fixed text-center bg-white overflow-hidden w-full flex-1">
          <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Host</th>
          </tr>
          </thead>
          <tbody>
            <tr key={data.setting.id} className="bg-gray-100">
              <td className="px-4 py-2 ">
                <div
                  className="text-xl p-1"
                  onBlur={(e) => {
                    const address = String(e.currentTarget.textContent).trim();
                    if (address !== data.setting.name) {
                      fetcher.submit(
                        { name: String(e.target.textContent) },
                        {
                          action: `/readbarcode/${data.setting.name}/updatename`,
                          method: "post",
                        }
                      );
                    }
                  }}
                  contentEditable
                  dangerouslySetInnerHTML={{
                    __html: fetcher.submission
                      ? (fetcher.submission.formData.get("name") as string)
                      : data.setting.name,
                  }}
                />
              </td>

              <td>
                <div
                  className="text-xl p-1"
                  onBlur={(e) => {
                    const address = String(e.currentTarget.textContent).trim();
                    if (address !== data.setting.address && address !== "") {
                      fetcher.submit(
                        { address: address },
                        {
                          action: `/readbarcode/${data.setting.address}/update`,
                          method: "post",
                        }
                      );
                    }
                    e.currentTarget.textContent = data.setting.address;
                  }}
                  contentEditable
                  dangerouslySetInnerHTML={{
                    __html: fetcher.submission
                      ? (fetcher.submission.formData.get("address") as string)
                      : data.setting.address ,
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}