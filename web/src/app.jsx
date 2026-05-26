/* app.jsx — router */

function App() {
  const [route, setRoute] = React.useState('home');
  const go = (r) => { setRoute(r); window.scrollTo({ top: 0, behavior: 'auto' }); };

  if (route === 'discovery')    return <DiscoveryPage go={go} />;
  if (route === 'foundation')   return <FoundationPage go={go} />;
  if (route.startsWith('pillar-')) {
    return <PillarPage go={go} pillarId={route.replace('pillar-', '')} />;
  }
  if (route === 'before')   return <StartPage go={go} entry="before" />;
  if (route === 'during')   return <StartPage go={go} entry="during" />;
  if (route === 'after')    return <StartPage go={go} entry="after" />;
  if (route === 'diagnose') return <StartPage go={go} entry={null} />;
  if (route === 'skills')   return <SkillsPage go={go} />;
  if (route === 'agents')   return <AgentsPage go={go} />;
  if (route === 'tree')     return <DecisionTreePage go={go} />;
  return <HomePage go={go} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
