'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import { usePostHog } from 'posthog-js/react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const posthog = usePostHog();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)

    // Capture error in PostHog
    if (posthog) {
      posthog.captureException(error)
      posthog.capture('error_occurred', {
        error_message: error.message,
        error_digest: error.digest,
      })
    }
  }, [error, posthog])

  const handleReset = () => {
    // Capture error recovery attempt
    if (posthog) {
      posthog.capture('error_recovery_attempted', {
        error_message: error.message,
        error_digest: error.digest,
      })
    }
    reset()
  }

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={handleReset}>
        Try again
      </button>
    </div>
  )
}