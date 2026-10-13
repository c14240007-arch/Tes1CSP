import { semuaMenu } from "./data/menu";

export default function App() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 40 }}>
      <h1>KantinKita</h1>
      <p>Titik awal. Ada {semuaMenu.length} menu di src/data/menu.js.</p>
      <p>Mulailah dari sini. Jangan mengubah isi berkas menu.js.</p>
    </div>
  );
}
