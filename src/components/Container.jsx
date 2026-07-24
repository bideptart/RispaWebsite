import { cx } from '../utils/helpers'

function Container({ className, children }) {
  return <div className={cx('container', className)}>{children}</div>
}

export default Container
