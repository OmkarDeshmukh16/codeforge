export default function GlitchText({ children, className }) {
  return (
    <span className={`glitch-wrap ${className || ''}`} data-text={children}>
      {children}
    </span>
  );
}
