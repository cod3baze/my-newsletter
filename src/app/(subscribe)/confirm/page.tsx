import Image from "next/image";

export default function ConfirmScreen() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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

        <div className="max-w-xl text-center my-8 space-y-4">
          <h1 className="text-3xl font-semibold">Inscrição confirmada!</h1>
          <h2 className="text-xl">
            No <span className="font-medium">próximo dia útil</span> você
            receberá a sua primeira edição da Newsletter 🎉
          </h2>
        </div>
      </section>
    </main>
  );
}
