import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      Hello This is the home page
      <Link href="/protected" className="text-slate-600 underline px-5">
        Protected
      </Link>
    </div>
  );
}
