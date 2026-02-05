import Navbar  from '@/components/nav-bar';
import Hero from '@/components/hero';
import About from '@/components/about';
import FeaturedWork from '@/components/featured-work';
import KeyFeatures from '@/components/key-features';
import SkillOverview from '@/components/skill';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <KeyFeatures />
      <FeaturedWork />
      <SkillOverview />
      <Contact />
    </main>
  );}
