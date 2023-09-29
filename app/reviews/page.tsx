import Link from "next/link";

export default function ReviewPage() {
  return (
    <>
      <h1>Review Page</h1>
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
