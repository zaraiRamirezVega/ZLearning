import { HeroSection } from "@/components/hero-section"
import { FeaturedCourses } from "@/components/featured-courses"
import { Categories } from "@/components/categories"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />
      <Categories />
      <FeaturedCourses />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
