export default function Rating({ value }) {
  const totalStars = 5;
  const filledStars = Math.floor(value);
  return (
    <div className="flex">
      {Array.from({ length: totalStars }).map((_, index) => (
        <span
          key={index}
          className={index < filledStars ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
