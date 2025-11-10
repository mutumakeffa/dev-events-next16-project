'use client';

import Link from "next/link"
import Image from "next/image"
import { usePostHog } from "posthog-js/react"

const Navbar = () => {
  const posthog = usePostHog();

  const handleLogoClick = () => {
    posthog.capture('logo_clicked');
  };

  const handleEventsClick = () => {
    posthog.capture('events_nav_clicked', {
      nav_item: 'events',
    });
  };

  const handleCreateEventClick = () => {
    posthog.capture('create_event_nav_clicked', {
      nav_item: 'create_event',
    });
  };

  return (
    <header>
        <nav>
            <Link href="/" className="logo" onClick={handleLogoClick}>
                <Image src="/icons/logo.png" alt="logo" width={30} height={30} />
                <p>Dev Event</p>
            </Link>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/" onClick={handleEventsClick}>Events</Link>
                <Link href="/" onClick={handleCreateEventClick}>Create Event</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar