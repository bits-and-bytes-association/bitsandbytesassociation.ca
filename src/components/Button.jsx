import clsx from 'clsx';

export default function Button({
  className,
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  label,
  onClick,
  children,
  ...rest
}) {
  const classes = clsx(
    className,
    'box-border inline-flex items-center shadow-md outline-none transition focus:outline-none focus:outline-offset-2 active:scale-[.98]',
    {
      'rounded-full border-transparent bg-brand px-[1.7em] py-[0.45em] font-bold text-white hover:bg-brand-400 focus-visible:outline-brand':
        variant === 'primary',
      'rounded-full border-transparent bg-neutral-800 px-[1.7em] py-[0.45em] font-bold text-white hover:bg-neutral-700 focus-visible:outline-brand':
        variant === 'secondary',
      'rounded-full border-brand px-[1.7em] py-[0.45em] font-semibold text-brand hover:border-transparent hover:bg-brand-400 hover:text-white focus-visible:outline-brand':
        variant === 'outline',
      'rounded-lg border-transparent bg-neutral-800 p-2 font-bold text-white hover:bg-neutral-700 focus-visible:outline-neutral-800':
        variant === 'square',
      'rounded-full border-transparent bg-neutral-800 p-2 font-bold text-white hover:bg-neutral-700 focus-visible:outline-neutral-800':
        variant === 'round',
      'border text-base focus:outline-2': size === 'md',
      'border-2 text-2xl focus:outline-4': size === 'lg',
    },
  );
  return (
    <Component className={classes} onClick={onClick} {...rest}>
      {children}
    </Component>
  );
}
