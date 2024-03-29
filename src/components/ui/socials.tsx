import { RESUME_DATA } from "@/data/resume-data";
import { Button } from "./button";
import { MailIcon, PhoneIcon } from "lucide-react";

export default function Socials() {
  return (
    <>
      <div className="flex gap-x-1 font-mono text-sm text-muted-foreground">
        {RESUME_DATA.contact.email ? (
          <Button className="size-8" variant="outline" size="icon" asChild>
            <a href={`mailto:${RESUME_DATA.contact.email}`}>
              <MailIcon className="size-4" />
            </a>
          </Button>
        ) : null}
        {RESUME_DATA.contact.tel ? (
          <Button className="size-8" variant="outline" size="icon" asChild>
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
    </>
  );
}
