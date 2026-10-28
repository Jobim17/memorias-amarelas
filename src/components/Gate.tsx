"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { launchDate } from "@/content/book";

const Book = dynamic(() => import("./Book"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[70vh] items-center justify-center">
      <span className="italic text-creme/60" style={{ fontSize: "1.2rem" }}>
        abrindo o livro…
      </span>
    </div>
  ),
});

const Countdown = dynamic(() => import("./Countdown"), { ssr: false });

/* Antes do lançamento mostra o countdown; depois, o livro.
   ?preview=1 (ou ?p=N) abre o livro antes da data, pra você conferir. */
export default function Gate() {
  const [state, setState] = useState<"loading" | "wait" | "open">("loading");

  useEffect(() => {
    // decidido só no cliente (depende da hora local e da URL)
    const id = setTimeout(() => {
      const q = new URLSearchParams(window.location.search);
      const bypass = q.has("preview") || q.has("p");
      const open = bypass || Date.now() >= new Date(launchDate).getTime();
      setState(open ? "open" : "wait");
    }, 0);
    return () => clearTimeout(id);
  }, []);

  if (state === "loading") return <div className="min-h-screen" />;
  if (state === "wait") return <Countdown onDone={() => setState("open")} />;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-2 py-6 sm:px-6 sm:py-10">
      <div className="w-full">
        <Book />
      </div>
    </main>
  );
}
