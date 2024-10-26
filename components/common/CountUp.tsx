import React from "react";
import CountUp from "react-countup";

interface CountUpProps {
  start?: number;
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

const CountUpComponent: React.FC<CountUpProps> = ({
  start = 0,
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}) => {
  return (
    <div className={className}>
      <CountUp
        start={start}
        end={end}
        duration={duration}
        prefix={prefix}
        suffix={suffix}
        decimals={decimals}
        separator=","
      />
    </div>
  );
};

export default CountUpComponent;
