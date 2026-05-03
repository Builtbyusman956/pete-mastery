import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import Stats from '../components/home/Stats'

import FAQ from '../components/home/FAQ'

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <Stats />
      
      {/* Packages, VideoReviews, Portfolio (condensed), BookingCTA — coming next batch */}
      <div id="packages" />
      <FAQ />
    </div>
  )
}