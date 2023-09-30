import Link from "next/link";
import Heading from "@/components/heading/Heading";
import { getReviews } from "@/lib/reviews";

export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Review Page</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => (
          <li
            className="bg-white border w-80 shadow hover:shadow-xl"
            key={review.slug}
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="mb-2 rounded-t"
              />
              <h2 className="text-center py-1 font-orbitron font-semibold">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
