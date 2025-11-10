export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Server-side PostHog initialization happens via getPostHogClient in lib/posthog-server.ts
    // No need to initialize here, as we use lazy initialization
    console.log('PostHog server instrumentation registered');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // Edge runtime doesn't support PostHog Node SDK
    console.log('PostHog not available in edge runtime');
  }
}
