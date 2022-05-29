import * as React from 'react'

interface Props {
  readonly type?: 'submit' | 'reset' | 'button'
  readonly children?: any
  readonly className?: string
  readonly onClick?: (...args: any[]) => any
  readonly [x: string]: any
}

export const Button: React.FunctionComponent<Props> = (props: Props) => {
  const { type = 'button', children, className, onClick, ...rest } = props

  return (
    <button className={className} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
