import landingImage from "../assets/landing.png";
import appDowload from "../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-xl border-t-[1px] border-t-[#eed6d4] py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-orange-500">
          Enjoy a delicious takeaway meal today 🍔
        </h1>
        <span className="text-xl">Your meal is only a tap away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Get the YumYield App now for quicker ordering and personalized
            recommendations.
          </span>
          <img src={appDowload} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
