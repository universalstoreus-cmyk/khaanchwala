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
      width={64}
      height={64}
      loading={loadingFromProps || 'eager'}
      fetchPriority={priorityFromProps || 'high'}
      decoding="async"
      draggable={false}
      className={clsx(
        'block h-[48px] w-[48px] max-w-none object-contain object-center sm:h-[56px] sm:w-[56px]',
        className,
      )}
      src="/kaanchwala-logo.webp?v=20260831"
    />
  )
}
