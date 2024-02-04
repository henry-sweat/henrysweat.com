interface IPageTitleProps {
  title: string;
}

export default function PageTitle({ title }: IPageTitleProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="w-full flex-col">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </div>
    </div>
  );
}
