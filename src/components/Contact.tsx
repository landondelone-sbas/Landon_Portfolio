import { useState, type FormEvent } from "react";

const EMAIL = "landondelone@gmail.com";

const SOCIALS = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.3em] text-signal">
            Contact
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Let's Talk
          </h2>
          <p className="mt-4 max-w-prose text-pretty font-body text-lg leading-relaxed text-mute">
            Have a project, a dataset, or a story worth breaking down? Send a
            message and I'll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 max-w-lg space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block font-display text-xs font-semibold uppercase tracking-widest"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-ink bg-paper px-3 py-2 font-body focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block font-display text-xs font-semibold uppercase tracking-widest"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-ink bg-paper px-3 py-2 font-body focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block font-display text-xs font-semibold uppercase tracking-widest"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border-2 border-ink bg-paper px-3 py-2 font-body focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              />
            </div>

            <button
              type="submit"
              className="border-2 border-ink bg-ink px-6 py-3 font-display text-sm font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-signal hover:border-signal"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="border-4 border-ink p-6">
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest">
            Direct
          </h3>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-2 inline-block break-all font-body text-lg underline decoration-2 underline-offset-2 hover:text-signal"
          >
            {EMAIL}
          </a>

          <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-widest">
            Elsewhere
          </h3>
          <ul className="mt-2 space-y-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="inline-block font-body text-lg underline decoration-2 underline-offset-2 hover:text-signal"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
