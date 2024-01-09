import Image from "next/image";

import { SubscribeForm } from "./subscribe-form";

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

        <div className="max-w-xl text-center my-8">
          <h1>Urban</h1>
          <h2 className="text-2xl font-semibold">
            Notícias de Tecnologia para quem não tem tempo de ler notícias.
          </h2>
        </div>

        <div className="w-96">
          <p className="text-md">
            Junte-se à nossa turma de{" "}
            <span className="font-semibold">leitores ativos:</span>
          </p>

          <SubscribeForm />
        </div>
      </section>
    </main>
  );
}
