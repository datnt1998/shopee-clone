import React, { ElementType, useId, useRef, useState } from 'react'

import {
  FloatingPortal,
  useFloating,
  offset,
  flip,
  shift,
  arrow,
  type Placement
} from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

interface PopoverProps {
  children: React.ReactNode
  renderPopover: React.ReactNode
  className?: string
  as?: ElementType
  initialOpen?: boolean
  placement?: Placement
}

export default function Popover({
  children,
  renderPopover,
  className,
  as: Element = 'div',
  initialOpen,
  placement = 'bottom-end'
}: PopoverProps) {
  const arrowRef = useRef<HTMLElement>(null)

  const [isOpen, setIsOpen] = useState(initialOpen || false)

  const id = useId()

  const { x, y, reference, floating, strategy, context, middlewareData } =
    useFloating({
      open: isOpen,
      onOpenChange: setIsOpen,
      middleware: [offset(6), flip(), shift(), arrow({ element: arrowRef })],
      placement: placement
    })

  const showPopover = () => {
    setIsOpen(true)
  }

  const hidePopover = () => {
    setIsOpen(false)
  }

  return (
    <Element
      ref={reference}
      className={className}
      onMouseEnter={showPopover}
      onMouseLeave={hidePopover}
    >
      {children}
      <FloatingPortal id={id}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={floating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.2 }}
            >
              <span
                ref={arrowRef}
                className='absolute z-10 translate-y-[-95%] border-[11px] border-x-transparent border-t-transparent border-b-white'
                style={{
                  left: middlewareData.arrow?.x,
                  top: middlewareData.arrow?.y
                }}
              />
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  )
}
