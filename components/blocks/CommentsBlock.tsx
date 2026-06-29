import { BlockError } from "@/components/blocks/BlockError";
import { getComments } from "@/lib/api";

export async function CommentsBlock() {
  let comments;

  try {
    comments = await getComments();
  } catch (error) {
    return (
      <BlockError
        title="Commentaires"
        message={error instanceof Error ? error.message : "Erreur inconnue."}
      />
    );
  }

  return (
    <article className="data-card">
      <header>
        <div>
          <h2>Commentaires</h2>
          <p className="item-meta">Commentaires du post 1.</p>
        </div>
        <span className="badge">~1,5 s</span>
      </header>

      {/* Ce rendu est prêt si l’erreur simulée est désactivée plus tard. */}
      <ul className="data-list">
        {comments.map((comment) => (
          <li key={comment.id}>
            <p className="item-title">{comment.name}</p>
            <p className="item-meta">{comment.email}</p>
            <p className="item-body">{comment.body}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
