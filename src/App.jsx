import { useState } from "react"
import ContactForm from "./assets/components/ContactForm"
import Header from "./assets/components/Header"
import Hero from "./assets/components/Hero"
import HowItWorks from "./assets/components/HowItWorks"
import Testimonials from "./assets/components/Testimonials"
import WhyChooseUs from "./assets/components/WhyChooseUs"

function App() {
  const [isDark,setIsDark] = useState(false)

  return (
    <>
    <Header isDark={isDark} setIsDark={setIsDark} />
    <Hero isDark={isDark} />
    <HowItWorks isDark={isDark} />
    <WhyChooseUs isDark={isDark} />
    <Testimonials isDark={isDark} />
    <ContactForm isDark={isDark} />
    </>
  )
}

export default App
