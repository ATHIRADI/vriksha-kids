import CountUp from "react-countup";

const StatCard = ({
  stat,
  prefix,
  label,
  className = "",
  duration = 2,
  data,
}) => {
  return (
    <div
      className={`text-tertiary py-4 px-5 md:px-0 flex flex-row items-center justify-center gap-4 ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <h2 className="h3">
          <CountUp end={stat} duration={duration} />
        </h2>
        <h2 className="h4">{prefix}</h2>
      </div>
      <p className="body-small w-30 uppercase text-start text-tertiary">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
