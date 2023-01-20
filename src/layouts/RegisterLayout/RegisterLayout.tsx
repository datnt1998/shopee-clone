import React from 'react'
import { Footer, RegisterHeader } from 'src/components'

interface RegisterLayoutProps {
  children?: React.ReactNode
}

function RegisterLayout({ children }: RegisterLayoutProps) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}

export default RegisterLayout
