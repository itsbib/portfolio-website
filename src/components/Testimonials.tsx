import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/testimonials.css";
import { useState } from "react";

interface ITestimonialsStats {
  count: number;
  desc: string;
}

interface IReviewsDetails {
  reviewerName: string;
  reviewerCategory: string;
  reviewDesc: string;
}

const testimonialStats: ITestimonialsStats[] = [
  {
    count: 20,
    desc: "Projects Done",
  },
  {
    count: 2,
    desc: "Years Experience",
  },
  {
    count: 20,
    desc: "Satistfied Clients",
  },
];

const reviewsDetails: IReviewsDetails[] = [
  {
    reviewerName: "GUY 1",
    reviewerCategory: "Nothing",
    reviewDesc: "K xa keta keti ho sanchai xau? Khana khayeu?",
  },
  {
    reviewerName: "No. 2",
    reviewerCategory: "Influencer",
    reviewDesc: "jau padha, ramro marks lyau, back paper nalagau, tei ho bye.",
  },
  {
    reviewerName: "Depressed Guy",
    reviewerCategory: "berojgar",
    reviewDesc: "Hell nah, I can't say nothing, I'm an introvert.",
  },
  {
    reviewerName: "Test",
    reviewerCategory: "test",
    reviewDesc:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus neque, accusantium totam optio qui ullam voluptate cum deleniti distinctio similique numquam tempora necessitatibus quae at voluptatum sed! Error, soluta?",
  },
];

export default function Testimonials() {
  const [pointer, setPointer] = useState<number>(0);

  const handleNext = () => {
    setPointer((prevPointer) =>
      Math.min(prevPointer + 1, reviewsDetails.length - 1)
    );
  };

  const handlePrev = () => {
    setPointer((prevPointer) => Math.max(prevPointer - 1, 0));
  };

  //develop a review popup

  return (
    <div id="Testimonials" className="testimonials">
      {reviewsDetails.slice(pointer, pointer + 1).map((datas, index) => (
        <div className="reviewsSection" key={index}>
          <h1 className="reviewSectionDecor">,,</h1>
          <h2 className="reviewerName">{datas.reviewerName}</h2>
          <h6 className="reviewerCategory">{datas.reviewerCategory}</h6>
          <p className="reviewerDesc">{datas.reviewDesc}</p>
          <div className="scrollReviewIcons">
            <FaChevronLeft
              className="scrollReviewIcon"
              onClick={handlePrev}
              aria-disabled={pointer === 0}
            />
            <FaChevronRight
              className="scrollReviewIcon"
              onClick={handleNext}
              aria-disabled={pointer === reviewsDetails.length - 1}
            />
          </div>
          <button className="leaveReviewButton">Leave a review </button>
        </div>
      ))}

      <div className="testimonialsSection">
        {testimonialStats.map((data) => (
          <>
            <h1 className="testimonialsCount">{data.count + "+"} </h1>
            <h4 className="testimonialsSubText">{data.desc}</h4>
          </>
        ))}
      </div>
    </div>
  );
}
