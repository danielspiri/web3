import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center max-w-full text-center text-lg text-orange font-montserrat ${className}`}
    >
      <div className="w-[1000px] flex flex-col items-center justify-start gap-[91px] max-w-[1000px] mq725:gap-[23px] mq1000:gap-[45px] mq1000:max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[42px] mq725:gap-[21px]">
          <div className="self-stretch relative tracking-[0.03em] font-medium">
            Qué Material Confidencial Vas A Encontrar
          </div>
          <h1 className="m-0 self-stretch relative text-15xl tracking-[-0.02em] font-semibold font-inherit text-gray-200 mq450:text-xl mq975:text-8xl">
            Proyecto Nacido A Partir de Necesidades Reales.
          </h1>
          <p className="m-0 w-full relative text-base text-gray-300 whitespace-pre-wrap inline-block max-w-[1000px] mq1000:max-w-full">
            No, no estamos locos por REGALAR estos Sistemas. Todo forma parte de
            una Gran Estrategia Súper Confidencial de la Cual Te Puedes
            Aprovechar. Para Resumir en 2 Elementos Lo Que Vas A Encontrar
          </p>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[60px] text-left text-9xl text-gray-200 mq1000:gap-[30px]">
          <div className="self-stretch shadow-[0px_4px_45.4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_#ff9000,_0px_4px_4px_rgba(100,_198,_240,_0.25)_inset] rounded-6xl bg-white overflow-hidden flex flex-col items-center justify-center p-8 mq725:pt-[21px] mq725:pb-[21px] mq725:box-border">
            <div className="self-stretch flex flex-col items-center justify-center gap-[27px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[36px] mq725:gap-[18px]">
                <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-semibold font-inherit mq450:text-3xl">
                  Sistemas
                </h2>
                <p className="m-0 self-stretch relative text-lg text-gray-400">
                  <span className="block">
                    Los sistemas nos ayudan a organizar, mejorar y automatizar
                    procesos enteros dentro de nuestros proyectos. No solo son
                    útiles en los negocios sino que también en las relaciones,
                    deporte, estudios, etc
                  </span>
                  <span className="block">&nbsp;</span>
                  <span className="block">
                    Un sistema puede estar compuesto por algo tan simple como
                    unas reglas estrictas hasta incluir agentes inteligentes,
                    flows, funnels, asistentes, modelos y automatizaciones.
                  </span>
                </p>
              </div>
              <video
                className="w-full h-full object-cover rounded-3xs"
                controls
                src="/18069093-uhd_3840_2160_24fps.mp4"
                loop
                autoPlay
              />
            </div>
          </div>
          <div className="self-stretch shadow-[0px_4px_45.1px_rgba(0,_0,_0,_0.25),_0px_4px_4px_#ff9000,_0px_4px_4px_rgba(100,_198,_240,_0.25)_inset] rounded-6xl bg-white overflow-hidden flex flex-col items-center justify-center p-8 mq725:pt-[21px] mq725:pb-[21px] mq725:box-border">
            <div className="self-stretch flex flex-col items-center justify-center gap-[27px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[36px] mq725:gap-[18px]">
                <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-semibold font-inherit mq450:text-3xl">
                  Start Up
                </h2>
                <p className="m-0 self-stretch relative text-lg text-gray-400">{`El ‘Proyecto StartUp’. El objetivo es ser capaz de desarrollar un SAAS con el mínimo código para mostrar tal y cómo Lo Hacemos en TheSAAS.Studio . `}</p>
              </div>
              <img
                className="w-full h-full object-cover rounded-3xs"
                alt=""
                src="/DALL·E 2024-06-05 19.00.03 - A cartoon scene depicting the early days of a startup. The setting is a small, cluttered office with a few young and enthusiastic team members working.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
