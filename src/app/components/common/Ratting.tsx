import React from "react";
import { useState } from "react";
interface RatingProps {
  value?: number;
  onChange?: (value: number) => void;
}
const ReviewStar = ({ value = 0, onChange }: RatingProps) => {
  const [hover, setHover] = useState(0);

  const handleClick = (rating: number) => {
    if (onChange) {
      onChange(rating);
    }
  };

  const handleMouseEnter = (rating: number) => {
    setHover(rating);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };
  return (
    <div className='flex items-center'>
      {[1, 2, 3, 4, 5].map(rating => (
        <label
          key={rating}
          className={`cursor-pointer text-gray-400 hover:text-yellow-400 ${
            (hover > 0 ? hover : value) >= rating ? "text-yellow-400" : "text-gray-400"
          }`}
          onMouseEnter={() => handleMouseEnter(rating)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(rating)}
        >
          <input
            type='radio'
            name='rating'
            value={rating}
            className='hidden'
            checked={(hover > 0 ? hover : value) === rating}
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        </label>
      ))}
    </div>
  );
};

export default ReviewStar;
