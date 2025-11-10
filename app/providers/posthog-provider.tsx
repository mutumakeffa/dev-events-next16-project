'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && !posthog.__loaded) {
      const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

      if (!key) {
        console.error('PostHog key is missing. Please set NEXT_PUBLIC_POSTHOG_KEY in your environment variables.');
        return;
      }

      posthog.init(key, {
        api_host: '/ingest',
        ui_host: 'https://us.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false, // We'll manually capture page views with PostHogPageView
        capture_pageleave: true,
        capture_exceptions: true,
        debug: process.env.NODE_ENV === 'development',
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('PostHog initialized successfully');
          }
        },
      });
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
