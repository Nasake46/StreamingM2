import { BlockError } from "@/components/blocks/BlockError";
import { getPosts } from "@/lib/api";

export async function PostsBlock() {
  let posts;

  try {
    posts = await getPosts();
  } catch (error) {
    return (
      <BlockError
        title="Posts"
        message={error instanceof Error ? error.message : "Erreur inconnue."}
      />
    );
  }

  return (
    <article className="data-card">
      <header>
        <div>
          <h2>Posts</h2>
          <p className="item-meta">Les dix premiers posts disponibles.</p>
        </div>
        <span className="badge">~2 s</span>
      </header>

      {/* Les titres suffisent ici pour éviter une carte trop dense. */}
      <ul className="data-list">
        {posts.map((post) => (
          <li key={post.id}>
            <p className="item-title">{post.title}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
