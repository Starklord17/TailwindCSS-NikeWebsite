/**
 * The ShoeCard component renders a card with an image and handles a click event to change the
 * bigShoeImg state.
 * @returns The `ShoeCard` component is returning a JSX element.
 */
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  /**
   * The handleClick function changes the bigShoeImg to imgURL.bigShoe if they are not already equal.
   */
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      // Dinamic template string as a classname
      /* The `className` attribute in the `div` element is using a template string to dynamically set the
      class names based on the condition `bigShoeImg === imgURL.bigShoe`. */
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt='shoe colletion'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
