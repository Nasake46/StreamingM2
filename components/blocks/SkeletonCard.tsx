type SkeletonCardProps = {
  title: string;
  delay: string;
};

export function SkeletonCard({ title, delay }: SkeletonCardProps) {
  return (
    <article className="data-card" aria-busy="true" aria-label={`${title} en chargement`}>
      <header>
        <div>
          <h2>{title}</h2>
          <p className="item-meta">Chargement des données...</p>
        </div>
        <span className="badge">{delay}</span>
      </header>

      {/* Skeleton personnalisé : il remplace le spinner global et garde la mise en page stable. */}
      <div className="skeleton-stack">
        <span className="skeleton-line long" />
        <span className="skeleton-line medium" />
        <span className="skeleton-line short" />
        <span className="skeleton-line long" />
        <span className="skeleton-line medium" />
      </div>
    </article>
  );
}
