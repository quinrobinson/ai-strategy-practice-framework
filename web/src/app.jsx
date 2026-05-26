/* app.jsx — pillar-first router, no mode toggle */

function App() {
  const [route, setRoute] = React.useState('home');
  const go = (r) => { setRoute(r); window.scrollTo({ top: 0, behavior: 'auto' }); };

  // Pillar routes
  if (route.startsWith('pillar-')) {
    const pillarId = route.replace('pillar-', '');
    return <PillarPage go={go} pillarId={pillarId} />;
  }

  // Foundation
  if (route === 'foundation') return <FoundationPage go={go} />;

  // Lifecycle entry points
  if (route === 'before')  return <StartPage go={go} entry="before" />;
  if (route === 'during')  return <StartPage go={go} entry="during" />;
  if (route === 'after')   return <StartPage go={go} entry="after" />;
  if (route === 'diagnose') return <StartPage go={go} entry={null} />;

  // Secondary pages
  if (route === 'skills')  return <SkillsPage go={go} />;
  if (route === 'agents')  return <AgentsPage go={go} />;
  if (route === 'tree')    return <DecisionTreePage go={go} />;

  return <HomePage go={go} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
