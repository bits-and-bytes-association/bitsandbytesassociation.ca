import Link from 'next/link';

/**
 * Button component
 * @param {string} type The type of button. Only used for non-link buttons
 * @param {string} textSize The text size
 * @param {string} bgColor The background color
 * @param {string} textColor The text color
 * @param {string} hoverTextColor The hover state text color
 * @param {string} padding The padding
 * @param {string} href Link button destination
 * @param {function} onClick onClick event handler
 * @param {ReactNode} children Button content
 * @returns A button
 */
export default function Button({
  type = 'button',
  textSize = 'text-2xl',
  bgColor = 'bg-primary-dark',
  textColor = 'text-white',
  hoverTextColor = 'hover:text-white',
  padding = 'py-3 px-10',
  href = '',
  onClick = () => {},
  children,
}) {
  const classes = `inline-block rounded-full ${bgColor} ${padding} ${textSize} font-extrabold ${textColor} ${hoverTextColor}`;

  // Link button
  if (href !== '') {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
