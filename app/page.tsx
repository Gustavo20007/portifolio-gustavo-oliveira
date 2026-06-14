import Image from "next/image";

export default function Home() {
  const projetos = [
    {
      nota: 90,
      nome: "Sistema de Biblioteca",
      tech: "React Native + Firebase",
    },
    {
      nota: 88,
      nome: "Site de Vagas",
      tech: "HTML + CSS + JavaScript",
    },
    {
      nota: 85,
      nome: "Jogo de Xadrez",
      tech: "HTML + CSS + JavaScript",
    },
  ];

  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/estadio.jpg')",
      }}
    >
      <div className="min-h-screen bg-black/70">

        {/* HERO */}
        <section className="flex flex-col items-center justify-center text-center h-screen px-4">

          <h1 className="text-6xl font-bold text-yellow-400 mb-4">
            Gustavo Oliveira
          </h1>

          <p className="text-2xl mb-6">
            Desenvolvedor em Formação ⚽
          </p>

          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold">
            Ver Projetos
          </button>

        </section>

        {/* FICHA */}
        <section className="max-w-5xl mx-auto p-8">

          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            Ficha do Jogador
          </h2>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">

            <p><strong>Nome:</strong> Gustavo Oliveira</p>

            <p><strong>Posição:</strong> Desenvolvedor</p>

            <p><strong>Clube Atual:</strong> Faculdade</p>

            <p><strong>Especialidades:</strong></p>

            <ul className="list-disc ml-6 mt-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>React Native</li>
              <li>Next.js</li>
            </ul>

          </div>

        </section>

        {/* PROJETOS */}
        <section className="max-w-6xl mx-auto p-8">

          <h2 className="text-4xl font-bold text-yellow-400 mb-8">
            Meus Projetos
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {projetos.map((projeto, index) => (
              <div
                key={index}
                className="
                bg-gradient-to-b
                from-yellow-500
                to-yellow-700
                text-black
                rounded-2xl
                p-6
                shadow-2xl
                hover:scale-105
                transition
                "
              >

                <div className="text-center">

                  <p className="text-5xl font-bold">
                    {projeto.nota}
                  </p>

                  <p className="text-sm font-bold">
                    OVR
                  </p>

                  <hr className="my-4 border-black" />

                  <h3 className="font-bold text-xl">
                    {projeto.nome}
                  </h3>

                  <p className="mt-3">
                    {projeto.tech}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>

      </div>
    </main>
  );
}