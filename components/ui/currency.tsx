import { useMemo } from "react";

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({
  value,
}) => {
  const formattedValue = useMemo(() => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Number(value));
  }, [value]);

  return <span>{formattedValue}</span>;
};

export default Currency;