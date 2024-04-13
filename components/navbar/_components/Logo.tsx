import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src="/logo/logo.png"
          alt="botion logo"
          height={50}
          width={50}
          className="w-15"
        />
      </Link>
    </>
  );
};

export default Logo;
