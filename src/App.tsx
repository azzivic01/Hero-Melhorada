/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, RotateCcw, X, Compass, Layers, SunMedium, Eye, EyeOff } from 'lucide-react';
import heroImage from './assets/images/architectural_monolith_1791134734689.jpg';

// Coreografia rigorosa com curva suave [0.16, 1, 0.3, 1]
const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

// Frase do título: exatamente uma única palavra em itálico ("silêncio")
const TITLE_WORDS = [
  { text: 'A', italic: false },
  { text: 'permanência', italic: false },
  { text: 'da', italic: false },
  { text: 'matéria', italic: false },
  { text: 'no', italic: false },
  { text: 'silêncio', italic: true }, // A ÚNICA PALAVRA EM ITÁLICO
  { text: 'da', italic: false },
  { text: 'luz.', italic: false },
];

export default function App() {
  // Chave para reiniciar a coreografia sob demanda (Replay)
  const [sequenceKey, setSequenceKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCinemaMode, setIsCinemaMode] = useState(false);

  const restartChoreography = () => {
    setSequenceKey((prev) => prev + 1);
  };

  return (
    <div
      key={sequenceKey}
      className="relative min-h-screen w-full bg-[#0a0a0b] text-[#ececeb] selection:bg-[#f4efe6] selection:text-[#0a0a0b] overflow-x-hidden flex flex-col justify-between"
    >
      {/* Ruído ótico de película cinematográfica de fundo */}
      <div className="pointer-events-none fixed inset-0 film-grain opacity-40 z-10" />

      {/* ============================================================ */}
      {/* 1. TOP BAR CONTRACT: Marca [1 elemento] - Vazio/Sutil - Ações */}
      {/* ============================================================ */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-6 pb-4 flex items-center justify-between">
        {/* Marca: elemento tipográfico único */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EDITORIAL_EASE, delay: 0.2 }}
          className="flex items-baseline gap-3"
        >
          <span className="font-editorial-sans text-sm font-semibold tracking-tight text-neutral-100">
            PAVILHÃO 01
          </span>
          <span className="hidden sm:inline-block font-editorial-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
            ESTÚDIO NORD
          </span>
        </motion.div>

        {/* Coordenadas e telemetria tabular austera */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: EDITORIAL_EASE, delay: 0.4 }}
          className="hidden md:flex items-center gap-6 font-editorial-mono text-[11px] text-neutral-400 tracking-wider tabular-nums"
        >
          <span>45°26'12" N</span>
          <span className="text-neutral-700">/</span>
          <span>09°11'48" E</span>
          <span className="text-neutral-700">/</span>
          <span>ELEVAÇÃO 248 M</span>
        </motion.div>

        {/* Ações da barra superior */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EDITORIAL_EASE, delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <button
            onClick={() => setIsCinemaMode(!isCinemaMode)}
            className="group flex items-center gap-2 px-3 py-1.5 text-[11px] font-editorial-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-neutral-100 transition-colors focus-visible:ring-2 focus-visible:ring-amber-200/90 focus-visible:outline-none rounded-sm"
            title="Alternar modo de contemplação pura"
            aria-label="Alternar modo de contemplação pura"
          >
            {isCinemaMode ? (
              <>
                <Eye className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                <span className="hidden sm:inline">Exibir Texto</span>
              </>
            ) : (
              <>
                <EyeOff className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                <span className="hidden sm:inline">Visão Pura</span>
              </>
            )}
          </button>

          <button
            onClick={restartChoreography}
            className="group flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-editorial-mono uppercase tracking-[0.2em] text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-600 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-amber-200/90 focus-visible:outline-none rounded-sm active:scale-95"
            title="Rever a coreografia com tempos e easing exatos"
            aria-label="Reiniciar coreografia"
          >
            <RotateCcw className="w-3 h-3 text-neutral-400 group-hover:text-amber-200 transition-transform duration-500 group-hover:-rotate-180" />
            <span className="hidden sm:inline">Replay</span>
          </button>
        </motion.div>
      </header>

      {/* ============================================================ */}
      {/* 2. COREOGRAFIA PRINCIPAL & COMPOSIÇÃO EDITORIAL             */}
      {/* ============================================================ */}
      <main className="relative z-20 flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto px-5 sm:px-8 py-6 sm:py-12">
        
        {/* CONTÊINER DO PALCO VISUAL: IMAGEM TRATADA POR MÁSCARA VERTICAL */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9] max-h-[72vh] overflow-hidden rounded-xs">
          
          {/* Abertura da Máscara Vertical: exatos 1,2s com cubic-bezier(0.16, 1, 0.3, 1) */}
          <motion.div
            initial={{ clipPath: 'inset(0% 50% 0% 50%)', scale: 1.07 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
            transition={{
              duration: 1.2,
              ease: EDITORIAL_EASE,
            }}
            className="absolute inset-0 w-full h-full bg-neutral-950 will-change-transform"
          >
            {/* Fotografia cinematográfica com proporção e resolução rica */}
            <img
              src={heroImage}
              alt="Monólito de concreto e pedra refletido em espelho d'água ao amanhecer"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
            />

            {/* Scrim ótico de contraste medido: garante WCAG AA sem empastar a luz */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/45 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b]/80 via-[#0a0a0b]/30 to-transparent pointer-events-none hidden md:block" />

            {/* Linhas arquitetônicas verticais sutis que enquadram o diafragma */}
            <div className="absolute inset-y-0 left-0 w-px bg-white/10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-px bg-white/10 pointer-events-none" />
          </motion.div>

          {/* Fallback CSS resiliente em caso de falha de carregamento */}
          <div className="absolute inset-0 -z-10 bg-[#121214] flex items-center justify-center">
            <span className="font-editorial-mono text-xs uppercase tracking-[0.25em] text-neutral-600">
              Pavilhão Monolítico · Registro 01
            </span>
          </div>

          {/* ============================================================ */}
          {/* CONTEÚDO TIPOGRÁFICO SOBREPOSTO                              */}
          {/* ============================================================ */}
          <AnimatePresence>
            {!isCinemaMode && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-end md:justify-center pointer-events-none"
              >
                <div className="w-full md:max-w-3xl pointer-events-auto">
                  
                  {/* RÓTULO EM CAIXA-ALTA COM ESPAÇAMENTO LARGO */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: EDITORIAL_EASE,
                      delay: 1.15, // Surge sincronizado ao fim da máscara da imagem
                    }}
                    className="mb-3 sm:mb-4 flex items-center gap-3 font-editorial-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-amber-200/90 font-medium"
                  >
                    <span>MONOGRAFIA ARQUITETÔNICA</span>
                    <span className="text-neutral-500">·</span>
                    <span className="tabular-nums text-neutral-400">01 / 08</span>
                  </motion.div>

                  {/* ============================================================ */}
                  {/* TÍTULO: CLAMP(), ATÉ 3 LINHAS NO MOBILE, 1 PALAVRA EM ITÁLICO */}
                  {/* COREOGRAFIA: PALAVRA POR PALAVRA, 60ms ENTRE CADA             */}
                  {/* ============================================================ */}
                  <h1
                    className="font-editorial-sans font-light tracking-[-0.035em] text-neutral-100 mb-4 sm:mb-6 text-balance max-w-[15ch] sm:max-w-[20ch]"
                    style={{
                      fontSize: 'clamp(2.15rem, 5.8vw, 4.85rem)',
                      lineHeight: 1.06,
                    }}
                  >
                    {TITLE_WORDS.map((word, i) => (
                      <span
                        key={i}
                        className="inline-block overflow-hidden align-baseline mr-[0.24em] last:mr-0"
                      >
                        <motion.span
                          initial={{ y: '115%', opacity: 0 }}
                          animate={{ y: '0%', opacity: 1 }}
                          transition={{
                            duration: 0.75,
                            ease: EDITORIAL_EASE,
                            delay: 1.2 + i * 0.06, // Exatamente 1.2s inicial + 60ms entre cada palavra
                          }}
                          className={`inline-block ${
                            word.italic
                              ? 'italic font-editorial-serif font-light text-amber-100/95 tracking-normal'
                              : 'font-normal'
                          }`}
                        >
                          {word.text}
                        </motion.span>
                      </span>
                    ))}
                  </h1>

                  {/* ============================================================ */}
                  {/* TEXTO DE APOIO: ENTRA APÓS O TÍTULO (~1.85s)                 */}
                  {/* ============================================================ */}
                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: EDITORIAL_EASE,
                      delay: 1.85,
                    }}
                    className="text-sm sm:text-base text-neutral-300/90 font-light leading-relaxed max-w-xl mb-6 sm:mb-8 font-editorial-sans"
                  >
                    Erguido em basalto escuro e vidro de baixa refração sobre um espelho d'água perene. Uma investigação austera sobre a gravidade da massa e a passagem do tempo.
                  </motion.p>

                  {/* ============================================================ */}
                  {/* BOTÕES: ENTRADA FINAL (~2.15s) COM HOVER & FOCO DESENHADOS    */}
                  {/* ============================================================ */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.65,
                      ease: EDITORIAL_EASE,
                      delay: 2.15,
                    }}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5"
                  >
                    {/* Botão Primário: no celular fica também acessível ao alcance do polegar */}
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="group relative inline-flex items-center justify-center sm:justify-start gap-3 px-6 py-3.5 sm:py-3 text-xs uppercase tracking-[0.22em] font-editorial-mono font-medium bg-[#f4efe6] text-[#0a0a0b] hover:bg-white active:scale-[0.98] transition-all duration-300 rounded-xs focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b] focus-visible:outline-none cursor-pointer"
                    >
                      <span>Ficha da Obra</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                    {/* Botão Secundário: discreto, com sublinhado dinâmico */}
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="group inline-flex items-center justify-center sm:justify-start gap-2 py-2 px-1 text-xs uppercase tracking-[0.2em] font-editorial-mono text-neutral-400 hover:text-neutral-100 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:outline-none rounded-xs cursor-pointer"
                    >
                      <span className="relative">
                        Especificações Técnicas
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-neutral-300 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                      </span>
                    </button>
                  </motion.div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Rótulo de escala e dimensão na borda inferior da imagem */}
          <div className="absolute bottom-3 right-4 sm:right-6 pointer-events-none hidden sm:flex items-center gap-4 font-editorial-mono text-[10px] tracking-widest text-neutral-400/80 uppercase tabular-nums">
            <span>ESCALA 1:50</span>
            <span>·</span>
            <span>ÁREA 1.420 M²</span>
          </div>
        </div>

      </main>

      {/* ============================================================ */}
      {/* 3. RODAPÉ TÉCNICO AUSTERO & ALGARISMOS TABULARES            */}
      {/* ============================================================ */}
      <footer className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 py-5 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-editorial-mono text-neutral-500 uppercase tracking-[0.22em]">
        <div className="flex items-center gap-3">
          <span className="text-neutral-400">ESTUDO MONOLÍTICO</span>
          <span>·</span>
          <span className="tabular-nums text-neutral-300">2026</span>
        </div>

        <div className="flex items-center gap-4 tabular-nums">
          <span>CURVA: CUBIC-BEZIER(0.16, 1, 0.3, 1)</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">MÁSCARA: 1,2S</span>
        </div>

        <div className="text-neutral-400">
          ARQUITETURA DE MATÉRIA PURA
        </div>
      </footer>

      {/* ============================================================ */}
      {/* 4. COMPOSIÇÃO EXCLUSIVA PARA CELULAR: BOTÃO DE POLEGAR      */}
      {/* ============================================================ */}
      <div className="sm:hidden fixed bottom-4 inset-x-4 z-40">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full flex items-center justify-between px-5 py-4 bg-[#f4efe6] text-[#0a0a0b] font-editorial-mono text-xs uppercase tracking-[0.2em] font-medium shadow-2xl active:scale-[0.98] transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:outline-none"
        >
          <span>Explorar Ficha da Obra</span>
          <div className="flex items-center gap-1">
            <span className="text-[10px] tabular-nums text-neutral-600">01</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </button>
      </div>

      {/* ============================================================ */}
      {/* 5. MODAL / DRAWER DA MONOGRAFIA TÉCNICA (AÇÃO REAL)         */}
      {/* ============================================================ */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop escuro com desfoque refinado */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EDITORIAL_EASE }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#0a0a0b]/85 backdrop-blur-md"
            />

            {/* Conteúdo do painel técnico */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
              className="relative w-full max-w-2xl bg-[#111114] border border-neutral-800 p-6 sm:p-10 max-h-[85vh] overflow-y-auto text-neutral-200 rounded-xs shadow-2xl"
            >
              {/* Fechar modal */}
              <div className="flex items-center justify-between pb-5 border-b border-neutral-800 mb-6">
                <div className="font-editorial-mono text-xs uppercase tracking-[0.25em] text-amber-200/90">
                  DOCUMENTAÇÃO TÉCNICA · PROJETO 01
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 text-neutral-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:outline-none rounded-xs"
                  aria-label="Fechar ficha técnica"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Título da Obra no Modal */}
              <h2 className="font-editorial-sans text-2xl sm:text-3xl font-light text-neutral-100 tracking-tight mb-2">
                Pavilhão Lacustre de Pedra e Sombra
              </h2>
              <p className="font-editorial-sans text-sm text-neutral-400 font-light mb-8">
                Desenvolvido como um dispositivo de desaceleração perceptual e silêncio tectônico.
              </p>

              {/* Grid de Dados Tabulares Austeros */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 font-editorial-mono text-xs">
                <div className="p-4 bg-neutral-900/60 border border-neutral-800/80">
                  <div className="flex items-center gap-2 text-neutral-400 mb-2 uppercase tracking-wider text-[10px]">
                    <Compass className="w-3.5 h-3.5 text-amber-200/80" />
                    <span>Implantação</span>
                  </div>
                  <p className="text-neutral-100 font-medium">Margem do Lago Maggiore</p>
                  <p className="tabular-nums text-neutral-400 mt-1">45°26'12" N · 09°11'48" E</p>
                </div>

                <div className="p-4 bg-neutral-900/60 border border-neutral-800/80">
                  <div className="flex items-center gap-2 text-neutral-400 mb-2 uppercase tracking-wider text-[10px]">
                    <Layers className="w-3.5 h-3.5 text-amber-200/80" />
                    <span>Materialidade</span>
                  </div>
                  <p className="text-neutral-100 font-medium">Basalto Vulcânico e Vidro</p>
                  <p className="text-neutral-400 mt-1">Lâmina de concreto de alta densidade</p>
                </div>

                <div className="p-4 bg-neutral-900/60 border border-neutral-800/80">
                  <div className="flex items-center gap-2 text-neutral-400 mb-2 uppercase tracking-wider text-[10px]">
                    <SunMedium className="w-3.5 h-3.5 text-amber-200/80" />
                    <span>Incidência Solar</span>
                  </div>
                  <p className="text-neutral-100 font-medium">Eixo Leste-Oeste</p>
                  <p className="tabular-nums text-neutral-400 mt-1">Solstício a 68° · Sombra longitudinal</p>
                </div>

                <div className="p-4 bg-neutral-900/60 border border-neutral-800/80">
                  <div className="text-neutral-400 mb-2 uppercase tracking-wider text-[10px]">
                    Métricas Construtivas
                  </div>
                  <div className="flex justify-between tabular-nums text-neutral-200">
                    <span>Área Útil</span>
                    <span className="font-semibold text-neutral-100">1.420 m²</span>
                  </div>
                  <div className="flex justify-between tabular-nums text-neutral-200 mt-1">
                    <span>Espelho D'Água</span>
                    <span className="font-semibold text-neutral-100">3.800 m²</span>
                  </div>
                </div>
              </div>

              {/* Manifesto Textual Breve */}
              <div className="border-t border-neutral-800/80 pt-5 text-sm text-neutral-300 font-light leading-relaxed">
                <span className="font-editorial-serif italic text-base text-amber-100/90 mr-1.5">
                  "A matéria só existe plenamente quando aceita o silêncio da luz."
                </span>
                O monólito foi calculado para que nenhuma aresta crie reflexos parasitários, permitindo que a água e o céu se encontrem na superfície maciça do concreto curado com cinzas vulcânicas.
              </div>

              {/* Botão de Fechamento */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 font-editorial-mono text-xs uppercase tracking-widest transition-colors rounded-xs focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:outline-none"
                >
                  Concluir Leitura
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
