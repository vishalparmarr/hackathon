import { useRouter } from "next/router";

const PriceItem = ({ id, min, max }) => {
  const router = useRouter();

  // handlePrice
  const handlePrice = (min, max) => {
    if (min) {
      router.push(`/shop?priceMin=${min}&max=${max}`);
    } else {
      router.push(`/shop?priceMax=${max}`);
    }
  };
  return (
    <div className="shop__widget-list-item">
      <input
        onChange={() => handlePrice(min, max)}
        type="checkbox"
        id={`higher-${id}`}
        checked={
          router.query.priceMin === `${min}` ||
          router.query.priceMax === `${max}`
            ? "checked"
            : false
        }
      />
      {max < 200 ? (
        <label htmlFor={`higher-${id}`}>
          ${min}.00 - ${max}.00
        </label>
      ) : (
        <label htmlFor={`higher-${id}`}>
          ${max}.00+
        </label>
      )}
    </div>
  );
};

export default PriceItem;
