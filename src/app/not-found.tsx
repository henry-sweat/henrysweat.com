import TerminalHeader from "@/components/ui/terminal-header";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col items-start p-8 font-mono text-sm">
      <TerminalHeader />
      <p className="mt-8 text-foreground">bash: 404: command not found</p>
    </main>
  );
}
