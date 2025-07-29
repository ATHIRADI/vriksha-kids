export function StyledTitle({ mainTitle = "", alterColor = "text-accent" }) {
  const words = mainTitle.split(" ");
  return (
    <>
      {words.map((word, index) => {
        const isEffectWord = word.toLowerCase() === "kids";
        return (
          <span
            key={index}
            className={isEffectWord ? "text-effect" : `${alterColor}`}
          >
            {word}{" "}
          </span>
        );
      })}
    </>
  );
}
