import RaceCardDesktop2 from "./RaceCardDesktop2";

export default function TrackInfoMobile() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Card do Modelo 3D - Mais quadrado para mobile */}
      <div className="w-full backdrop-blur-xs rounded-2xl p-6 border border-white/10">
        <div className="w-full aspect-square">
          <RaceCardDesktop2 />
        </div>
      </div>

      {/* Card de Informações da Pista */}
      <div className="w-full backdrop-blur-xs rounded-2xl p-6 border border-white/10">
        {/* Data do GP */}
        <div className="mb-6">
          <p className="text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">
            Quando
          </p>
          <div className="flex flex-col items-start">
            <h2 className="text-[#c8ff00] text-5xl font-bold font-clash-display leading-none mb-2 flex items-center gap-2">
              23 <span className="text-xl">-</span> 11{" "}
              <span className="text-xl">-</span> 25
            </h2>
            <p className="text-white text-3xl font-bold font-clash-display">
              NOV
            </p>
          </div>
        </div>

        {/* Estatísticas em Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Altitude */}
          <div>
            <p className="text-white/60 text-xs font-medium mb-1 uppercase tracking-wider">
              Altitude
            </p>
            <p className="text-[#c8ff00] text-2xl font-bold font-clash-display leading-none">
              600 - 620
            </p>
            <p className="text-white text-xs font-medium mt-1">M</p>
          </div>

          {/* Distance */}
          <div>
            <p className="text-white/60 text-xs font-medium mb-1 uppercase tracking-wider">
              DISTÂNCIA
            </p>
            <p className="text-[#c8ff00] text-2xl font-bold font-clash-display leading-none">
              6.120
            </p>
            <p className="text-white text-xs font-medium mt-1">
              KM (Por volta)
            </p>
          </div>

          {/* First Competed */}
          <div>
            <p className="text-white/60 text-xs font-medium mb-1 uppercase tracking-wider">
              Primeiro Ano
            </p>
            <p className="text-[#c8ff00] text-2xl font-bold font-clash-display leading-none">
              2025
            </p>
          </div>

          {/* Laps */}
          <div>
            <p className="text-white/60 text-xs font-medium mb-1 uppercase tracking-wider">
              Voltas
            </p>
            <p className="text-[#c8ff00] text-2xl font-bold font-clash-display leading-none">
              50
            </p>
          </div>
        </div>

        {/* Bortoleto em Las Vegas */}
        <div className="border-t border-white/10 pt-4 mb-4">
          <p className="text-white text-xs font-bold mb-2 uppercase tracking-wider">
            BORTOLETO EM LAS VEGAS
          </p>
          <p className="text-white/70 text-xs leading-relaxed">
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
        <div className="border-t border-white/10 pt-4">
          <p className="text-white text-xs font-bold mb-3 uppercase tracking-wider">
            Horários
          </p>
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-2 items-center text-xs">
              <span className="text-white font-bold">Treino Livre 1</span>
              <span className="text-white/70 text-center">20 NOV</span>
              <span className="text-white/70 text-right">21:30</span>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center text-xs">
              <span className="text-white font-bold">Treino Livre 2</span>
              <span className="text-white/70 text-center">21 NOV</span>
              <span className="text-white/70 text-right">01:00</span>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center text-xs">
              <span className="text-white font-bold">Treino Livre 3</span>
              <span className="text-white/70 text-center">21 NOV</span>
              <span className="text-white/70 text-right">21:30</span>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center text-xs">
              <span className="text-white font-bold">Qualificação</span>
              <span className="text-white/70 text-center">22 NOV</span>
              <span className="text-white/70 text-right">01:00</span>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center text-xs">
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
