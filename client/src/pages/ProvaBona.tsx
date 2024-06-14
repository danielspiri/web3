import { FunctionComponent, useRef } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const ProvaBona: FunctionComponent = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="w-full relative bg-fondo-landing overflow-y-auto flex flex-col items-start justify-start pt-0 px-8 pb-5 box-border gap-[192px] leading-[normal] tracking-[normal] mq450:gap-[48px] mq975:gap-[96px]">
      <FrameComponent2 formRef={formRef} />
      <section className="self-stretch flex flex-row items-start justify-center max-w-full text-center text-15xl text-gray-200 font-montserrat">
        <div className="w-[1000px] flex flex-col items-start justify-start gap-[43px] max-w-full mq725:gap-[21px]">
          <h1 className="m-0 w-full relative text-inherit font-semibold font-inherit inline-block max-w-[1000px] mq450:text-xl mq975:text-8xl mq1000:max-w-full">
            Te Tomará Menos de 2 Minutos.
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[37px] text-sm text-gris-ttulo mq725:gap-[18px]">
            <div className="video-container">
              <video
                className="responsive-video"
                controls
                src="/Video Intro-1.mp4"
                loop
                autoPlay
              />
            </div>
            <p className="m-0 w-full relative inline-block max-w-[1000px] mq1000:max-w-full">
              {" "}
              * Asegúrate de ver el vídeo al completo. No te tomará más de 2
              minutos y te ahorrará molestias en caso de no ser para ti *
            </p>
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent ref={formRef} /> {/* Formulario al final */}
    </div>
  );
};

export default ProvaBona;
