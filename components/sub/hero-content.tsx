"use client";

import { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [showFullAbout, setShowFullAbout] = useState(false);

  const shortText =
    "Sou desenvolvedor de software especializado em Java e Spring Boot, com experiência em criação de sistemas internos e aplicações web. Entrego soluções eficientes, seguras e de alta performance, ajudando empresas e profissionais a alcançar resultados reais com tecnologia de qualidade.";

  const fullText = `Focado em resolver problemas e enfrentar desafios, orientado a entregar resultados e aprender continuamente; valorizo trabalho em equipe e colaboração para gerar valor real nos projetos.

Sou desenvolvedor com experiência prática em criação de sistemas internos completos, incluindo funcionalidades de cadastro, consulta, controle e geração de relatórios. Implementei sistemas utilizando Java, Spring, Maven, Hibernate, JPA, MySQL e JasperReports, que resultaram em melhorias significativas na organização, otimização de processos e centralização de informações críticas.

Cursei alguns semestres de Ciência da Computação no Instituto Federal Catarinense, adquirindo fundamentos sólidos em programação, estruturas de dados, lógica de programação e modelagem orientada a objetos.

Tenho formação complementar em Spring Boot, Spring Framework, APIs RESTful, JPA, testes automatizados, Design Patterns e boas práticas de desenvolvimento, aplicando esses conhecimentos em projetos que exigem soluções eficientes, organizadas e de qualidade.

Ao longo da minha trajetória, apliquei meus conhecimentos em projetos que exigem organização, desempenho e qualidade, sempre buscando entregar soluções eficientes, escaláveis e de impacto. Busco oportunidades para atuar em desenvolvimento de software, contribuindo com projetos que integrem inovação, eficiência e boas práticas de desenvolvimento.
`;

  const handleToggle = () => {
    if (!showFullAbout) {
      // Clicou "Mais": mostra o texto completo e rola um pouco pra baixo
      setShowFullAbout(true);
      setTimeout(() => {
        window.scrollBy({ top: window.innerHeight * 0.45, behavior: "smooth" }); // ajuste 200px se quiser mais/menos
      }, 50);
    } else {
      // Clicou "Menos": volta para o topo da página
      setShowFullAbout(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Daniel Pereira Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Eleve sua presença digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              com soluções de software eficientes!
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] whitespace-pre-line"
        >
          {showFullAbout ? fullText : shortText}
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          onClick={handleToggle}
        >
          {showFullAbout ? "Menos" : "Mais"}
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
