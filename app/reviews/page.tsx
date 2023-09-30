import Link from "next/link";
import Heading from "@/components/heading/Heading";

export default function ReviewPage() {
  return (
    <>
      <Heading>Review Page</Heading>
      <ul>
        <li>
          <Link href="/reviews/hollow-knight">Hollow Knight</Link>
        </li>
        <li>
          <Link href="/reviews/stardew-valley">Stardew Valley</Link>
        </li>
      </ul>
    </>
  );
}
