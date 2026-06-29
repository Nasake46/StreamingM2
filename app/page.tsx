import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-panel">
        <p className="eyebrow">Next.js Streaming</p>
        <h1>Dashboard analytique avec rendu progressif</h1>
        <p>
          Les blocs du tableau de bord se chargent séparément afin que les
          données rapides apparaissent sans attendre les sections plus lentes.
        </p>
        <Link className="primary-link" href="/dashboard">
          Ouvrir le dashboard
        </Link>
      </section>
    </main>
  );
}
