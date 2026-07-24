import { cx } from '../utils/helpers'

function Badge({ className, children }) {
  return <span className={cx('badge', className)}>{children}</span>
}

export default Badge
