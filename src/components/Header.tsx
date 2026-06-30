import Logo from "../assets/FirePointLogo.svg";
import BannerMobile from "../assets/banner2.png";
import Button from "./Button";

interface HeaderProps {
  onScrollToAbout: () => void;
  onScrollToDev: () => void;
}

export default function Header({ onScrollToAbout, onScrollToDev }: HeaderProps) {
  return (
    <>
      <div className="w-full m-0 p-3 bg-[#0c0c0b] flex justify-center">
        <img className="h-12 w-auto lg:h-16 2xl:h-22" src={Logo} alt="Fire Point" />
      </div>
      <div
        className="header__banner-mobile min-h-[calc(100vh-57px)] w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-start relative px-4 2xl:items-center 2xl:justify-center"
        style={{ backgroundImage: `url(${BannerMobile})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-0"></div>

        <div className="flex flex-col gap-2 items-start z-10 max-w-2xl 2xl:items-center">
          <h1 className="text-xl font-bold sm:text-3xl text-white 2xl:text-center">
            FirePoint - Беремо і робимо
          </h1>
          <h2 className="text-[#bbbbbb] font-light text-lg sm:text-xl 2xl:text-center">
            Ставимо власні санкції на російську економіку
          </h2>
          <div className="flex flex-row gap-5 mt-4 justify-start 2xl:justify-center w-full">
            <Button
              children={<span className="sm:text-lg">Про нас</span>}
              onClick={onScrollToAbout}
            />
            <Button
              children={<span className="sm:text-lg">Розробки</span>}
              onClick={onScrollToDev}
            />
          </div>
        </div>
      </div>
    </>
  );
}