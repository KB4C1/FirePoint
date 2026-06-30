interface quoteProps {
  imgPath: string;
  q: string;
  name: string;
  role: string;
}

export default function Quote(props: quoteProps) {
  return (
    <div className="flex flex-row gap-6 items-center justify-evenly text-center p-4 max-w-2xl lg:flex-col lg:h-[450px] lg:max-w-110 mb-10">
      <div className="relative overflow-hidden rounded-lg w-1/2 h-40 shrink-0 sm:h-48 lg:w-full lg:h-60">
        <img
          className="w-full object-contain"
          src={props.imgPath}
          alt={props.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      <div className="flex flex-col justify-between gap-4 pt-2">
        <h2 className="text-xs leading-relaxed font-extralight sm:text-sm 2xl:text-lg">
          {props.q}
        </h2>
        <div className="flex flex-col gap-1">
          <strong className="text-sm font-bold">{props.name}</strong>
          <span className="text-xs font-light text-gray-400">{props.role}</span>
        </div>
      </div>
    </div>
  );
}
