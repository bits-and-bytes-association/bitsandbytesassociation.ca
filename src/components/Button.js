import Link from 'next/link';
import styles from '@/styles/Button.module.css';

/**
 * Button component. Supports customizable variants (themes) from the CSS module.
 * @param {string} type The HTML type of button. Only used for non-link buttons
 * @param {string} variant The variant (theme) of the button. E.g. "primary", "primary-outline", "dark" (see http://### for reference)
 * @param {string} size The size of the button. Supports "sm", "md" or "lg"
 * @param {string} padding The CSS padding
 * @param {string} className Optional CSS classes.
 * @param {string} href Link button destination
 * @param {function} onClick onClick event handler. Only used for non-link buttons
 * @param {ReactNode} children Button content
 * @returns A button
 */
export default function Button({
  type = 'button',
  variant = 'primary',
  size = 'md',
  padding = '',
  className = '',
  href = '',
  onClick = () => {},
  children,
}) {
  const classes = `${styles[`button-component`]} ${
    styles[`button-variant-${variant}`]
  } ${styles[`btn-${size}`]} ${className}`;

  const inlineStyles = {
    padding: `${padding}`,
  };

  // Link button
  if (href !== '') {
    return (
      <Link className={classes} href={href} style={inlineStyles}>
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      style={inlineStyles}
    >
      {children}
    </button>
  );
}
