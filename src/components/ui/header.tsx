import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container relative mx-auto overflow-hidden p-4 print:p-12 md:pb-4 md:pl-16 md:pr-16 md:pt-16">
      <div className="mx-auto w-full max-w-2xl bg-white print:space-y-6">
        <div className="flex items-center justify-between gap-x-2">
          <h1 className="text-2xl font-bold">Henry Sweat</h1>
          {/* <nav>
            <Link
              href={"/blog"}
              className="text-md max-w-md text-pretty p-2 text-muted-foreground"
            >
              Blog
            </Link>
            <Link
              href={"/bookshelf"}
              className="text-md max-w-md text-pretty p-2 text-muted-foreground"
            >
              Bookshelf
            </Link>
          </nav> */}
          <div className="flex items-center justify-between">
            <div className="flex gap-x-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <p className="max-w-md items-center text-pretty py-1 font-mono text-xs text-muted-foreground">
          <a
            className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
            href={RESUME_DATA.locationLink}
            target="_blank"
          >
            <GlobeIcon className="size-3" />
            {RESUME_DATA.location}
          </a>
        </p>
      </div>
    </header>
  );
}
