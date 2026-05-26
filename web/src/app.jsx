/* app.jsx — router + mode state */

function App() {
  const [route, setRoute] = React.useState('home');
  const [mode, setMode] = React.useState('team'); // 'team' | 'strategist'

  const go = (r) => {
    setRoute(r);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleModeToggle = (newMode) => {
    setMode(newMode);
    window.ASPF_MODE = newMode;
    // Switching to strategist goes to strategist page; back to team goes home
    if (newMode === 'strategist' && route === 'home') go('home');
    if (newMode === 'team' && route === 'strategist') go('home');
  };

  const sharedProps = { go, mode, onModeToggle: handleModeToggle };

  // Strategist page
  if (route === 'strategist') return <StrategistPage {...sharedProps} />;

  // Direct entry points — skip diagnostic picker
  if (route === 'before')  return <StartPage go={go} entry="before" />;
  if (route === 'during')  return <StartPage go={go} entry="during" />;
  if (route === 'after')   return <StartPage go={go} entry="after" />;
  // Guided diagnostic
  if (route === 'diagnose') return <StartPage go={go} entry={null} />;
  // Secondary pages
  if (route === 'skills')  return <SkillsPage go={go} />;
  if (route === 'agents')  return <AgentsPage go={go} />;
  if (route === 'tree')    return <DecisionTreePage go={go} />;

  return <HomePage {...sharedProps} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
