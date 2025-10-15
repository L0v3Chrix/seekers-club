import { ContainerProps } from '@/lib/types'

/**
 * Container Component
 *
 * Responsive container with max-width constraints
 * Used for consistent page layouts throughout the site
 */
export default function Container({
  children,
  className = '',
  maxWidth = 'default',
}: ContainerProps) {
  const maxWidthStyles = {
    narrow: 'max-w-3xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1600px]',
    full: 'max-w-full',
  }

  const containerClasses = `mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthStyles[maxWidth]} ${className}`

  return <div className={containerClasses}>{children}</div>
}
