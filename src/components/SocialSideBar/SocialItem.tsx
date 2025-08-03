import Image from 'next/image';
import Link from 'next/link';

interface SocialItemProps {
  href: string;
  icon: string;
  outlined?: boolean;
  alt: string;
}

const SocialItem = ({ href, icon, alt }: SocialItemProps) => {
  return (
    <Link
      href={href}
      passHref
      className="hover:btn-secondary rounded-lg p-[5px] transition-opacity duration-200"
    >
      <Image src={icon} alt={alt} width={32} height={32} />
    </Link>
  );
};

export default SocialItem;
