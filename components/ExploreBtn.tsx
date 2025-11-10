'use client';

import Image from "next/image";
import { usePostHog } from "posthog-js/react";

function ExploreBtn() {
  const posthog = usePostHog();

  const handleClick = () => {
    posthog.capture('explore_events_clicked', {
      source: 'homepage',
    });
  };

  return (
    <button type="button" className="mx-auto mt-7" id="explore-btn" onClick={handleClick}>
        <a href="events">
            Explore Events
            <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24}/>
        </a>
    </button>
  )
}

export default ExploreBtn