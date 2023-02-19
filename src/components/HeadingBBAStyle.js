import styles from '@/styles/HeadingBBAStyle.module.css';

/**
 * Component that displays a styled heading with an adornment in one of its sides.
 * @param {string} className  Optional classes to style the heading.
 * @param {bool} inverted  Set to true to place the heading to the right.
 * @param {*} color  The CSS color of the adorning shape.
 * @param {*} lineWidth  The width in pixels of the adorning shape.
 * @param {*} children  Heading text or other content.
 * @returns  A heading with an adornment in one of its sides.
 */
export default function HeadingBBAStyle({
  className = 'text-5xl font-black',
  inverted = false,
  color = 'var(--primary-color-dark)',
  lineWidth = 30,
  children,
}) {
  return (
    <div
      className={`${inverted ? `${styles['invert']}` : ''} ${
        styles['wrapper']
      } ${className} flex`}
    >
      <h2 className={`${styles['text']}`} style={{ whiteSpace: 'nowrap' }}>
        {children}
      </h2>
      <div
        className={`${styles['shape-wrapper']} flex items-center w-full`}
        style={{ fontSize: `${lineWidth}px` }}
      >
        <div
          className={`${styles['circle']}`}
          style={{ backgroundColor: `${color}` }}
        ></div>
        <div
          className={`${styles['line']}`}
          style={{ backgroundColor: `${color}` }}
        ></div>
      </div>
    </div>
  );
}
