import Link from "next/link";
import Heading from "@/components/heading/Heading";

export default function ReviewPage() {
  return (
    <>
      <Heading>Review Page</Heading>
      <ul className="flex flex-col gap-3">
        <li className="bg-white border w-80 shadow hover:shadow-xl">
          <Link href="/reviews/hollow-knight">
            <img
              src="/images/hollow-knight.jpg"
              alt=""
              width="320"
              height="180"
              className="mb-2 rounded-t"
            />
            <h2 className="text-center py-1 font-orbitron font-semibold">
              Hollow Knight
            </h2>
          </Link>
        </li>
        <li className="bg-white border w-80 shadow hover:shadow-xl">
          <Link href="/reviews/stardew-valley">
            <img
              src="/images/stardew-valley.jpg"
              alt=""
              width="320"
              height="180"
              className="mb-2 rounded-t"
            />
            <h2 className="text-center py-1 font-orbitron font-semibold">
              Stardew Valley
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
