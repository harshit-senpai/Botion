import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src="/logo/logo.png"
          alt="botion logo"
          height={125}
          width={125}
          className="w-20"
        />
      </Link>
    </>
  );
};

export default Logo;
