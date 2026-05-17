/* app.jsx — router + mount */

function App() {
  const [route, setRoute] = React.useState('home');
  const go = (r) => { setRoute(r); window.scrollTo({ top: 0, behavior: 'auto' }); };

  if (route === 'skills')  return <SkillsPage go={go} />;
  if (route === 'agents')  return <AgentsPage go={go} />;
  if (route === 'tree')    return <DecisionTreePage go={go} />;
  return <HomePage go={go} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
