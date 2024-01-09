import Image from "next/image";

import { SubscribeForm } from "./subscribe-form";
import { MorphingTexts } from "@/components/morphing-texts";

export default function SubscribeHomeScreen() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-8">
      <section className="flex flex-col items-center">
        <Image
          draggable={false}
          height={120}
          width={150}
          quality={100}
          priority
          alt="Modelos e templates de currículos gerados."
          src="https://www.github.com/eliasalexandre.png"
          className="rounded-full mb-2"
        />

        <div className="max-w-xl text-center my-8 space-y-2">
          <h1>Urban</h1>
          <h2 className="block text-3xl font-semibold">
            Notícias de
            <span className="inline-block w-40 mx-2 rounded-md">
              <MorphingTexts />
            </span>
            para quem não tem tempo de ler notícias.
          </h2>
        </div>

        <div className="w-96">
          <p className="text-lg">
            Junte-se à nossa turma de{" "}
            <span className="font-semibold">leitores ativos:</span>
          </p>

          <SubscribeForm />
        </div>
      </section>
    </main>
  );
}
