export default function Footer() {
  return (
    <footer className="border-t-4 border-ink px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="font-display text-xs font-semibold uppercase tracking-widest text-mute">
          © {new Date().getFullYear()} Landon DeLone
        </p>
        <p className="font-display text-xs font-semibold uppercase tracking-widest text-mute">
          AI Dev · Sports Analytics · Media Breakdowns
        </p>
      </div>
    </footer>
  );
}
