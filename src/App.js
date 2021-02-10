import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
//import Guide from './pages/Guide';
import UsefulLink from './pages/UsefulLink';
//import History from './pages/History';
import Business from './pages/Business';
import Residential from './pages/Residential';
import Faq from './pages/Faq';
import WhySymbioPage from './pages/WhySymbioPage'
//import Gas from './pages/Gas'
import Blog from './pages/Blog'
import Page from './pages/Page'
import Contact from './pages/Contact';
//import DualFuel from './pages/DualFuel'
import About from './pages/About'
import SBlog from './pages/SingleBlog'
import ThankyouRenewal from './pages/ThankyouRenewal'
import Thankyou from './pages/Thankyou'
import PageNotFound from './pages/PageNotFound';
import Privacy from './pages/static/Privacy';
import Complaints from './pages/static/Complaints';
import Tnc from './pages/static/Tnc';
import ArrangementSiteAccess from './pages/static/ArrangementSiteAccess';
import Bill from './pages/static/Bill';
import Emergency from './pages/static/Emergency';
import EnergyDebtManagement from './pages/static/EnergyDebtManagement';
import FuelMix from './pages/static/FuelMix';
import Guide from './pages/static/Guide';
import PriorityService from './pages/static/PriorityService';
import CalculateElectricityUsage from './pages/static/CalculateElectricityUsage';
import HighEnergyBill from './pages/static/HighEnergyBill';
import Mpan from './pages/static/Mpan';
import Boots from './pages/Boots';
import Disclaimer from './pages/static/Disclaimer';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/case-study" component={CaseStudy} />
      {/* <Route exact path="/guide" component={Guide} /> */}
      <Route exact path="/useful-link" component={UsefulLink} />
      {/* <Route exact path="/history" component={History} /> */}
      <Route exact path="/business" component={Business} />
      <Route exact path="/residential" component={Residential} />
      <Route exact path="/faqs" component={Faq} />
      <Route exact path="/why-symbio" component={WhySymbioPage} />
      {/* <Route exact path="/gas" component={Gas} /> */}
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/blog" component={Blog} />
      {/* <Route exact path="/dual-fuel" component={DualFuel} /> */}
      <Route exact path="/about-symbio" component={About} />
      <Route       path="/post" component={SBlog} />
      <Route       path="/page" component={Page} />
	  {/* <Route exact path="/subscription-renewal-thank-you" component={ThankyouRenewal} /> */}
	  <Route exact path="/th4nkj3ss333usx-you-renewal" component={ThankyouRenewal} />
	  {/* <Route exact path="/new-registration-thank-you" component={Thankyou} /> */}
	  <Route exact path="/th4nkj3ss333usx" component={Thankyou} />
	  <Route exact path="/page-not-found" component={PageNotFound} />
	  <Route exact path="/privacy-policy-cookies" component={Privacy} />
	  <Route exact path="/complaints" component={Complaints} />
	  <Route exact path="/terms-and-conditions" component={Tnc} />
	  <Route exact path="/arrangements-for-site-access" component={ArrangementSiteAccess} />
	  <Route exact path="/tariff-info" component={Bill} />
	  <Route exact path="/emergencies" component={Emergency} />
	  <Route exact path="/energy-debt-management" component={EnergyDebtManagement} />
	  <Route exact path="/our-fuel-mix" component={FuelMix} />
	  <Route exact path="/guides" component={Guide} />
	  <Route exact path="/priority-service-register" component={PriorityService} />
    <Route exact path="/how-to-calculate-your-electricity-usage" component={CalculateElectricityUsage} />
    <Route exact path="/reasons-forhighenergy-bills" component={HighEnergyBill} />
    <Route exact path="/how-do-i-find-my-mpan-number-on-my-electricity-meter" component={Mpan} />
    <Route exact path="/boots" component={Boots} />
    <Route exact path="/disclaimer" component={Disclaimer} />
    <Redirect to="/page-not-found" />
    </Switch>
    </div>
  );
}

export default App;
