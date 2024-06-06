import { FunctionComponent } from "react";

export type FrameComponent2Type = {
  className?: string;
  formRef: React.RefObject<HTMLFormElement>;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  formRef,
}) => {
  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start gap-[88px] text-center text-11xl text-darkslategray font-montserrat mq450:gap-[22px] mq725:gap-[44px] ${className}`}
    >
      <header className="self-stretch flex flex-row items-center justify-between py-4 px-[50px] gap-[20px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="h-[67px] w-[67px] relative object-contain"
          loading="lazy"
          alt=""
          src="/LiyangLiLi_Bewerslab_burbujaNaranja_v02.png"
        />
        <button
          className="cursor-pointer [border:none] py-3 px-2.5 bg-black rounded-mini flex flex-row items-center justify-center hover:bg-darkslategray"
          onClick={handleScrollToForm}
        >
          <a className="[text-decoration:none] relative text-sm font-medium font-montserrat text-gris-texto-botn text-center inline-block min-w-[71px]">
            ACCEDER
          </a>
        </button>
      </header>
      <div className="self-stretch flex flex-col items-center justify-start gap-[70px] mq450:gap-[17px] mq725:gap-[35px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 gap-[50px] mq725:gap-[25px]">
          <h2 className="m-0 w-[1000px] relative text-inherit tracking-[-0.04em] font-semibold font-montserrat flex items-center max-w-[1000px] mq450:text-lg mq975:text-5xl mq1000:max-w-full">
            <span className="w-full">
              <span>{`Sistemas y Proyectos de SAAS `}</span>
              <span className="text-orange">Confidenciales</span>
              <span>
                {" "}
                Listos Para Implementar Inmediatamente en tu Proyecto
              </span>
            </span>
          </h2>
          <p className="m-0 w-[1000px] relative text-lg tracking-[-0.02em] font-light text-black flex items-center max-w-[1000px] mq1000:max-w-full">
            <span className="w-full">
              <span className="block">
                Material Desarrollado por el Equipo de Bewerslab para Solucionar
                Problemas Específicos de Nuestros Clientes.
              </span>
              <span className="block">{` `}</span>
            </span>
          </p>
        </div>
        <button
          className="cursor-pointer [border:none] py-3 px-2.5 bg-black rounded-mini flex flex-row items-center justify-center hover:bg-darkslategray"
          onClick={handleScrollToForm}
        >
          <div className="relative text-sm font-medium font-montserrat text-gris-texto-botn text-center inline-block min-w-[71px]">
            ACCEDER
          </div>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent2;

