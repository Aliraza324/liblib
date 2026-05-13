import HeroSection from '../../components/landing/HeroSection'
import CoreFeatures from '../../components/landing/CoreFeatures'
import WhyChoose from '../../components/landing/WhyChoose'
import MyMeet from '../../components/landing/MyMeet'
import Faqs from '../../components/landing/Faqs'
import CenterStage from '../../components/landing/CenterStage'
import GetStarted from '../../components/landing/GetStarted'

const Home = () => {
  return (
    <main>
      <HeroSection />
      <CoreFeatures />
      <WhyChoose />
      <MyMeet />
      <Faqs />
      <CenterStage />
      <GetStarted />
    </main>
  )
}

export default Home
