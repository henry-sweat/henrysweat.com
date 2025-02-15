import Link from "next/link";
import Socials from "./socials";

interface INavLinkProps {
  name: string;
  href: string;
}

const navigation: INavLinkProps[] = [
  { name: "home", href: "/" },
  { name: "blog", href: "/blog" },
  { name: "bookshelf", href: "/bookshelf" },
];

function NavLink({ name, href }: INavLinkProps) {
  return (
    <Link
      href={href}
      className={`max-w-md text-pretty text-lg text-muted-foreground hover:underline`}
    >
      {name}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="container relative mx-auto overflow-hidden pb-4 pl-4 pr-4 pt-6 print:p-12 md:pb-4 md:pl-16 md:pr-16 md:pt-16">
      <div className="mx-auto w-full max-w-2xl bg-white print:space-y-6">
        <div className="flex items-center justify-between gap-x-2">
          <nav className="flex flex space-x-4">
            {navigation.map((nav) => (
              <NavLink name={nav.name} href={nav.href} key={nav.href} />
            ))}
          </nav>
          <div className="flex items-center justify-between">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
}
