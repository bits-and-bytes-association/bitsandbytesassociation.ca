import styles from '@/styles/AdornedHeading.module.css';

/**
 * Component that displays a styled heading with an adornment in one of its sides.
 * @param {string} className  Optional classes to style the heading.
 * @param {bool} inverted  Set to true to place the heading to the right.
 * @param {int} lineWidth  The width in pixels of the adorning shape.
 * @param {ReactNode} children  Heading text or other content.
 * @returns  A heading with an adornment in one of its sides.
 */
export default function HeadingBBAStyle({
  className = 'text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black',
  inverted = false,
  lineWidth = 30,
  children,
}) {
  return (
    <div
      className={`${inverted ? `${styles['invert']}` : ''} ${
        styles['wrapper']
      } ${className} flex`}
    >
      <div className={styles['text']} style={{ whiteSpace: 'nowrap' }}>
        {children}
      </div>
      <div
        className={`${styles['shape-wrapper']} flex w-full items-center`}
        style={{ fontSize: `${lineWidth}px` }}
      >
        <div className={`${styles['circle']} bg-brand`}></div>
        <div className={`${styles['line']} bg-brand`}></div>
      </div>
    </div>
  );
}
