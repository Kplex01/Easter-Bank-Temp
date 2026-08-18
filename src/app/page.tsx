import { HeroSection } from '../components/HeroSection';
import { FinancialSolutions } from '../components/FinancialSolutions';
import { CtaBanner } from '../components/CtaBanner';
import { PERSONAL_PRODUCTS } from '../data/mockData';

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <FinancialSolutions />

      <CtaBanner />
    </>
  );
}
