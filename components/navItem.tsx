import Link from "next/link";

type NavItemProps = {
  href: string;
  active: boolean;
  text: string;
};

const NavItem = ({ href, active, text }: NavItemProps) => {
  return (
    <Link href={href}>
      <p className={`nav__item ${active ? "active" : ""}`}>
        {text}
      </p>
    </Link>
  );
};

export default NavItem;
