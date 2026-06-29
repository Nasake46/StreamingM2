import { BlockError } from "@/components/blocks/BlockError";
import { getUsers } from "@/lib/api";

export async function UsersBlock() {
  let users;

  try {
    users = await getUsers();
  } catch (error) {
    return (
      <BlockError
        title="Utilisateurs"
        message={error instanceof Error ? error.message : "Erreur inconnue."}
      />
    );
  }

  return (
    <article className="data-card">
      <header>
        <div>
          <h2>Utilisateurs</h2>
          <p className="item-meta">Liste complète des utilisateurs.</p>
        </div>
        <span className="badge">~1 s</span>
      </header>

      {/* Affichage volontairement compact pour garder un dashboard lisible. */}
      <ul className="data-list">
        {users.slice(0, 5).map((user) => (
          <li key={user.id}>
            <p className="item-title">{user.name}</p>
            <p className="item-meta">
              {user.email} · {user.company.name}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
