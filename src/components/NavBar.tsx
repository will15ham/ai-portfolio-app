import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
const NavBar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-l transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flez z-40 font-semibold">
            wham.
          </Link>
          <div>
            {/* <>
              <Link
                className={buttonVariants({
                  variant: "secondary",
                  size: "default",
                  className: "mr-4",
                })}
                href={"/pricing"}
                prefetch={false}
              >
                Pricing
              </Link>
            </> */}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
