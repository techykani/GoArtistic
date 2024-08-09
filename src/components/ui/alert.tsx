import React from 'react'

export const Alert = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex items-center justify-center h-full px-5 py-4 text-sm font-semibold text-red-600 border border-red-200 rounded">
      {children}
    </div>
  )
}
