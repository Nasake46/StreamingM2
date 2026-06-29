type BlockErrorProps = {
  title: string;
  message: string;
};

export function BlockError({ title, message }: BlockErrorProps) {
  return (
    <article className="data-card error-card">
      <header>
        <div>
          <h2>{title}</h2>
          <p className="item-meta">Erreur isolée au bloc courant.</p>
        </div>
        <span className="badge">Erreur</span>
      </header>
      <p className="error-message">{message}</p>
      <p className="item-body">
        Les autres blocs continuent de se charger normalement grâce aux
        boundaries séparées.
      </p>
    </article>
  );
}
