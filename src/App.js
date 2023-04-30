
import './App.css';
import ChooseUs from './components/ChooseUs/ChooseUs';
import EmailSection from './components/EmailSection/EmailSection';
import ExploreProgram from './components/ExploreProgram/ExploreProgram';
import HeroSection from './components/HeroSection/HeroSection'
import SocialProfile from './components/SocialProfiles/SocialProfile';
import SubscriptionPlan from './components/SubscriptionPlans/SubscriptionPlan';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <HeroSection />
          <ExploreProgram />
          <ChooseUs />
          <SubscriptionPlan />
          <Testimonials />
          <EmailSection />
          <SocialProfile /> 
          {/*
          */}
    </div>
  );
}

export default App;
