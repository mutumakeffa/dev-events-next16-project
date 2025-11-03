'use client';

import Image from "next/image";

function ExploreBtn() {
  return (
    <button type="button" className="mx-auto mt-7" id="explore-btn">
        <a href="events"> 
            Explore Events
            <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24}/>
        </a>
    </button>
  )
}

export default ExploreBtn