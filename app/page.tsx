import Heading from "@/components/heading/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Link from "next/link";

export default async function HomePage() {
  const review = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you</p>
      <div className="bg-white border shadow w-80 hover:shadow-xl sm:w-full">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={review.image}
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="text-center py-1 font-orbitron font-semibold sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
