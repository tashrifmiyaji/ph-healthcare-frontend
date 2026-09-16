import { cn } from "cn"
import { Loader2Icon, Shell } from "lucide-react"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Shell data-slot="spinner" role="status" aria-label="Loading" className={cn("size-4 animate-[spin_1s_linear_infinite_reverse] ", className)} {...props} />
  )
}

export { Spinner }
