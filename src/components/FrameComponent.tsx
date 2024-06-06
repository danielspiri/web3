import { forwardRef, useCallback, useState } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent = forwardRef<HTMLFormElement, FrameComponentType>(({
  className = "",
}, ref) => {
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'error' | 'success' | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
    };

    const data = JSON.stringify({
      email: email,
      instagram: instagram
    });

    try {
      const response = await fetch(`http://localhost:5000/subscribe`, {  // URL de tu servidor Flask
        method: 'POST',
        headers: headers,
        body: data
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(result.message);
        setMessageType('success');
        // Redirigir a la nueva pestaña si es exitoso
        window.open('https://discord.gg/s4rpSzsnWJ', '_blank');
      } else {
        const result = await response.json();
        console.error(result); // Log del error para depuración
        setMessage(`Este correo ya está registrado, revisa en tu bandeja de correo electrónico.`);
        setMessageType('error');
      }
    } catch (error) {
      console.error(error); // Log del error para depuración
      setMessage('Hubo un problema con la suscripción.');
      setMessageType('error');
    }
  };

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center max-w-full text-center text-5xl text-gris-title font-montserrat ${className}`}
    >
      <div className="w-[1000px] flex flex-col items-center justify-start gap-[92px] max-w-[1000px] mq725:gap-[23px] mq1000:gap-[46px] mq1000:max-w-full">
        <div className="self-stretch shadow-[0px_4px_49.5px_#df8005,_0px_4px_4px_#ff9000_inset,_0px_4px_4px_rgba(100,_198,_240,_0.25)] rounded-6xl bg-white overflow-hidden flex flex-col items-center justify-center py-24 px-8 box-border max-w-full mq725:pt-[62px] mq725:pb-[62px] mq725:box-border">
          <div className="self-stretch flex flex-col items-center justify-start max-w-full mq725:gap-[18px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-full mq725:gap-[20px]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[17px]">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#df8005,_#c97810)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-lgi">
                  Accede ahora a
                </h3>
                <h2 className="m-0 self-stretch relative text-11xl tracking-[-0.02em] font-semibold font-inherit mq450:text-lg mq975:text-5xl">
                  Los Sistemas Confidenciales y al Proyecto Start Up
                </h2>
              </div>
              <div className="w-[476px] flex flex-col items-center justify-start gap-[31px] max-w-full text-left text-sm text-white font-h5-computer mq725:gap-[15px]">
                <form ref={ref} onSubmit={handleSubmit} className="self-stretch flex flex-col items-center justify-center py-0 px-[74px] gap-[16px] mq725:pl-[37px] mq725:pr-[37px] mq725:box-border">
                  <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white flex flex-row items-center justify-start py-3.5 px-4 border-[1px] border-solid border-gainsboro">
                    <input
                      className="w-[350px] [border:none] [outline:none] font-medium font-h5-computer text-xl bg-[transparent] h-[30px] relative leading-[150%] text-gray-100 text-left inline-block p-0 mq450:text-base mq450:leading-[24px]"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white flex flex-row items-center justify-start py-3.5 px-4 border-[1px] border-solid border-gainsboro">
                    <input
                      className="w-[350px] [border:none] [outline:none] font-medium font-h5-computer text-xl bg-[transparent] h-[30px] relative leading-[150%] text-gray-100 text-left inline-block p-0 mq450:text-base mq450:leading-[24px]"
                      placeholder="Instagram"
                      type="text"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-black flex flex-row items-center justify-center py-[10.5px] px-3 whitespace-nowrap text-white">
                    <div className="relative leading-[150%] font-medium">
                      Acceder Al Material Confidencial
                    </div>
                  </button>
                </form>
                {message && (
                  <p
                    className={`m-0 self-stretch relative font-medium font-montserrat text-center ${
                      messageType === 'success' ? 'text-success' : 'text-error'
                    }`}
                  >
                    {message}
                  </p>
                )}
                <p className="m-0 self-stretch relative font-medium font-montserrat text-gray-500 text-center">
                  Todo el material se almacena en Discord de forma gratuita de
                  momento, aprovéchalo
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch centered-footer py-0 px-[50px] text-base text-black font-h5-computer">
          <div className="relative font-medium">© Bewerslab Company</div>
          <div className="footer-links">
            <div
              className="relative font-medium"
              onClick={() => {
                if (ref && typeof ref !== 'function' && ref.current) {
                  ref.current.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Instagram
            </div>
            <div
              className="relative font-medium"
              onClick={() => {
                if (ref && typeof ref !== 'function' && ref.current) {
                  ref.current.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Email
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FrameComponent;

