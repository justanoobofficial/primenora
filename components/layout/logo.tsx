import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "default" | "footer";
};

export function Logo({ variant = "default" }: LogoProps) {
  return (
    <Link href="/" className="inline-flex items-center">
      <span
        className={
          variant === "footer"
            ? "rounded-[22px] bg-white px-4 py-3 shadow-lg"
            : "rounded-[22px] bg-transparent"
        }
      >
        <Image
          src="/prime-nora-logo.png"
          alt="Prime Nora Global Services Limited"
          width={320}
          height={90}
          priority
          className="h-auto w-[180px] sm:w-[220px]"
        />
      </span>
    </Link>
  );
}
