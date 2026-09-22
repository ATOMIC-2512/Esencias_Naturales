// Lightweight inline SVG icons — no external icon dependency needed.
// Each accepts standard svg props (size via `size`, color inherits currentColor).

const base = (size) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

export function IconLeaf({ size = 22, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 3c5 3 8 7.5 8 12a8 8 0 0 1-16 0c0-4.5 3-9 8-12z" />
      <path d="M12 10v11" />
    </svg>
  );
}

export function IconSearch({ size = 20, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  );
}

export function IconCart({ size = 20, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="9" cy="20" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="17" cy="20" r="1.3" fill="currentColor" stroke="none" />
      <path d="M2.5 3h2l2.2 11.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L20.5 7H6" />
    </svg>
  );
}

export function IconArrowRight({ size = 18, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconMenu({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function IconClose({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

export function IconInstagram({ size = 18, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFacebook({ size = 18, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M14 9h2.5V6H14c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.4l.6-3H14V9.4c0-.2.2-.4.4-.4H14z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconYoutube({ size = 18, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
      <path d="m10.3 9.5 4.2 2.5-4.2 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconEye({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

export function IconSprout({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 21v-8" />
      <path d="M12 13c0-4-3-6-7-6 0 4 3 6 7 6z" />
      <path d="M12 13c0-5 3-8 8-8 0 5-3 8-8 8z" />
    </svg>
  );
}

export function IconShield({ size = 22, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconTruck({ size = 22, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="2" y="7" width="11" height="9" rx="1.5" />
      <path d="M13 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18.5" r="1.5" />
      <circle cx="17" cy="18.5" r="1.5" />
    </svg>
  );
}

export function IconPhone({ size = 20, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M5 4h3.2l1.4 4.2-2 1.6a12.5 12.5 0 0 0 5.6 5.6l1.6-2 4.2 1.4V18c0 1.1-.9 2-2 2-7.2 0-13-5.8-13-13 0-1.1.9-2 2-2z" />
    </svg>
  );
}

export function IconWhatsapp({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 1.7.5 3.4 1.3 4.9L2 21.8l5-1.3c1.4.8 3.1 1.2 4.8 1.2h.1c5.4 0 9.8-4.4 9.8-9.8S17.4 2.2 12 2.2zm5.7 13.9c-.2.7-1.4 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1 0-1.5.8-2.2 1-2.5.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.5.8 2 .9 2.1.1.1.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.7 1.6.3.1.5.1.7-.1l.6-.7c.2-.3.4-.2.7-.1l1.9.9c.2.1.4.2.5.3.1.2.1.9-.1 1.6z" />
    </svg>
  );
}