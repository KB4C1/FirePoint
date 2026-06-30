interface weaponProps {
  name: string;
  desc: string;
  imgPath: string;
}

export default function WeaponCard(props: weaponProps) {
  return (
    <div className="flex flex-col text-left lg:max-w-100 gap-5">
      <h2 className="sm:text-xl text-center font-bold">{props.name}</h2>
      <div className="relative overflow-hidden rounded-lg self-center w-full max-w-xs md:max-w-md lg:max-w-xs">
        <img
          className="w-full max-h-51 object-cover"
          src={props.imgPath}
          alt={props.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent"></div>
      </div>
      <span className="whitespace-pre-line font-light text-sm text-gray-300 sm:text-base text-center max-w-150 place-self-center lg:text-sm">
        {props.desc}
      </span>
    </div>
  );
}
