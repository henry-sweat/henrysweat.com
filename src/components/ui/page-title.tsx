import Socials from "./socials";

interface IPageTitleProps {
  title: string;
}

export default function PageTitle({ title }: IPageTitleProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="w-full flex-col">
        <div className="xs:hidden flex w-full items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <Socials />
        </div>
        <h2 className="xs:block hidden text-2xl font-bold tracking-tight">
          {title}
        </h2>
      </div>
    </div>
  );
}
