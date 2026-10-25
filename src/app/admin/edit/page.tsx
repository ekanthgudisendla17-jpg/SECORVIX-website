import { Suspense } from "react";
import PostEditor from "./PostEditor";

export default function EditPostPage() {
  return (
    <Suspense fallback={<p className="text-sm text-black/50">Loading…</p>}>
      <PostEditor />
    </Suspense>
  );
}
