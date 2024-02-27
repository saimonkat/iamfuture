import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-30 text-lg placeholder:text-semiTransparentWhite border-0 rounded-2.5 bg-blue-primary-800 placeholder:font-normal font-normal placeholder:text-lg placeholder:font-archivo font-archivo w-full border-input px-6.5 py-5 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
