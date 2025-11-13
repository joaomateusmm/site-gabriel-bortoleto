import RaceCardDesktop2 from "./RaceCardDesktop2";

export default function TrackInfoDesktop() {
  return (
    <div className="flex gap-6 w-full">
      {/* Card do Modelo 3D */}
      <div className="flex-1 backdrop-blur-xs rounded-2xl p-8 border border-white/10">
        <RaceCardDesktop2 />
      </div>

      {/* Card de Informações da Pista */}
      <div className="flex-1 backdrop-blur-xs rounded-2xl p-8 border border-white/10">
        {/* Data do GP */}
        <div className="mb-8">
          <p className="text-white/60 text-sm font-medium mb-2 uppercase tracking-wider">
            Quando
          </p>
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-[#c8ff00] text-7xl font-bold font-clash-display leading-none mb-2 flex items-center gap-2">
                23 <span className="text-2xl">-</span> 11{" "}
                <span className="text-2xl">-</span> 25
              </h2>
            </div>
            <p className="text-white text-4xl font-bold font-clash-display">
              NOV
            </p>
          </div>
        </div>

        {/* Estatísticas em Grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Altitude */}
          <div>
            <p className="text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">
              Altitude
            </p>
            <p className="text-[#c8ff00] text-4xl font-bold font-clash-display leading-none">
              600 - 620
            </p>
            <p className="text-white text-sm font-medium mt-1">M</p>
          </div>

          {/* Distance */}
          <div>
            <p className="text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">
              DISTÂNCIA
            </p>
            <p className="text-[#c8ff00] text-4xl font-bold font-clash-display leading-none">
              6.120
            </p>
            <p className="text-white text-sm font-medium mt-1">
              KM (Por volta)
            </p>
          </div>

          {/* First Competed */}
          <div>
            <p className="text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">
              Primeiro Ano
            </p>
            <p className="text-[#c8ff00] text-4xl font-bold font-clash-display leading-none">
              2025
            </p>
          </div>
        </div>

        {/* Laps */}
        <div className="mb-8">
          <p className="text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">
            Voltas
          </p>
          <p className="text-[#c8ff00] text-6xl font-bold font-clash-display leading-none">
            50
          </p>
        </div>

        {/* Bortoleto em Las Vegas */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-white text-sm font-bold mb-2 uppercase tracking-wider">
            BORTOLETO EM LAS VEGAS
          </p>
          <p className="text-white/70 text-sm leading-relaxed">
            Embora os resultados de pesquisa não especifiquem detalhes de uma
            &quot;experiência&quot; anterior em Las Vegas, sabe-se que, na
            temporada de 2023, quando ainda estava na Fórmula 2 (ou F3, a fonte
            não especifica a categoria), a equipe Sauber (ou uma equipe
            afiliada, como a ART Grand Prix na F2) conquistou sua melhor posição
            de largada em Las Vegas, o que pode servir de referência ou
            motivação para a equipe atual.
          </p>
        </div>

        {/* Schedule */}
        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="text-white text-sm font-bold mb-4 uppercase tracking-wider">
            Horários
          </p>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4 items-center text-sm">
              <span className="text-white font-bold">Treino Livre 1</span>
              <span className="text-white/70 text-center">20 NOV</span>
              <span className="text-white/70 text-right">21:30</span>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center text-sm">
              <span className="text-white font-bold">Treino Livre 2</span>
              <span className="text-white/70 text-center">21 NOV</span>
              <span className="text-white/70 text-right">01:00</span>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center text-sm">
              <span className="text-white font-bold">Treino Livre 3</span>
              <span className="text-white/70 text-center">21 NOV</span>
              <span className="text-white/70 text-right">21:30</span>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center text-sm">
              <span className="text-white font-bold">Qualificação</span>
              <span className="text-white/70 text-center">22 NOV</span>
              <span className="text-white/70 text-right">01:00</span>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center text-sm">
              <span className="text-[#c8ff00] font-bold">Corrida</span>
              <span className="text-[#c8ff00] font-bold text-center">
                23 NOV
              </span>
              <span className="text-[#c8ff00] font-bold text-right">01:00</span>
            </div>
            <p className="text-white/50 text-xs text-end mt-2">*SP TIME</p>
          </div>
        </div>
      </div>
    </div>
  );
}
