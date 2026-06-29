import { Suspense } from "react";
import { CommentsBlock } from "@/components/blocks/CommentsBlock";
import { CommentsSkeleton } from "@/components/blocks/CommentsSkeleton";
import { PostsBlock } from "@/components/blocks/PostsBlock";
import { PostsSkeleton } from "@/components/blocks/PostsSkeleton";
import { TodosBlock } from "@/components/blocks/TodosBlock";
import { TodosSkeleton } from "@/components/blocks/TodosSkeleton";
import { UsersBlock } from "@/components/blocks/UsersBlock";
import { UsersSkeleton } from "@/components/blocks/UsersSkeleton";

export const dynamic = "force-dynamic";

export default function DashboardPage() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-shell">
        <header className="dashboard-header">
          <p className="eyebrow">Streaming Dashboard</p>
          <h1>Analyse des données projet</h1>
          <p>
            Chaque bloc est rendu dans sa propre boundary Suspense. Les données
            rapides s’affichent donc sans attendre les requêtes plus lentes.
          </p>
        </header>

        {/* Chaque bloc garde son chargement indépendant pour éviter un blocage global. */}
        <section className="dashboard-grid" aria-label="Blocs analytiques">
          <Suspense fallback={<UsersSkeleton />}>
            <UsersBlock />
          </Suspense>

          <Suspense fallback={<PostsSkeleton />}>
            <PostsBlock />
          </Suspense>

          <Suspense fallback={<CommentsSkeleton />}>
            <CommentsBlock />
          </Suspense>

          <Suspense fallback={<TodosSkeleton />}>
            <TodosBlock />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
