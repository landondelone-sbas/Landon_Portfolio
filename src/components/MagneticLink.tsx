import type { ReactNode } from "react";
import { useMagnetic } from "../hooks/useMagnetic";

interface Props {
  href: string;
  className: string;
  children: ReactNode;
  onClick?: () => void;
}

/** An `<a>` with a magnetic hover-lift; no-ops under reduced motion (see useMagnetic). */
export default function MagneticLink({ href, className, children, onClick }: Props) {
  const ref = useMagnetic<HTMLAnchorElement>({ strength: 10, radius: 24 });

  return (
    <a ref={ref} href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
