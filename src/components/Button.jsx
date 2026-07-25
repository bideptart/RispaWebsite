import { cx } from '../utils/helpers'

function Button({
  as: Component = 'button',
  className,
  variant = 'primary',
  children,
  ...props
}) {
  return (
    <Component className={cx('button', `button--${variant}`, className)} {...props}>
      {children}
    </Component>
  )
}

export default Button
