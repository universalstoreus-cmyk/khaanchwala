import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Kaanchwala Glass & Mirror Solutions"
      width={96}
      height={96}
      loading={loadingFromProps || 'lazy'}
      fetchPriority={priorityFromProps || 'low'}
      decoding="async"
      className={clsx(
        'block h-[44px] w-[44px] max-w-[44px] object-contain object-center sm:h-[52px] sm:w-[52px] sm:max-w-[52px]',
        className,
      )}
      src="/kaanchwala-logo.webp"
    />
  )
}
