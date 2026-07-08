import pool from '@/lib/db';

export default async function Home() {
  const result = await pool.query('SELECT * FROM products ORDER BY id');
  const products = result.rows;

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black py-16 px-4">
      <main className="flex w-full max-w-3xl flex-col gap-6 bg-white dark:bg-black p-8">
        <h1 className="text-3xl font-bold">Sherpa Power Engineering</h1>
        <p className="text-zinc-600">Live product data from Postgres:</p>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Serial</th>
              <th className="py-2">Model</th>
              <th className="py-2">Brand</th>
              <th className="py-2">Price (TK)</th>
              <th className="py-2">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="py-2">{p.serial_id}</td>
                <td className="py-2">{p.model}</td>
                <td className="py-2">{p.brand}</td>
                <td className="py-2">{p.price_tk}</td>
                <td className="py-2">{p.stock_qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}