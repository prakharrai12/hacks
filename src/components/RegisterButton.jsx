import config from '../config/hackathonConfig';

export const RegisterButton = ({ className = '', onClick, text = 'Register Now' }) => {
  const unstopUrl = config.registration.unstopUrl?.trim() || 'https://unstop.com/p/hacks-2026-hub-for-advanced-creativity-knowledge-solutions-nari-nexus-1759592';

  return (
    <a
      href={unstopUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase text-white bg-plum hover:bg-plum-dark border border-plum/40 hover:border-plum glow-btn-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum focus-visible:ring-offset-2 ${className}`}
    >
      <span>{text}</span>
      <span
        aria-hidden="true"
        className="text-base font-normal inline-block transition-transform duration-250 ease-out group-hover:translate-x-1"
      >
        ↗
      </span>
    </a>
  );
};

export default RegisterButton;

