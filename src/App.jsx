import GlobalNavigationBar from './components/GlobalNavigationBar'
import './App.css'

function App() {
  return (
    <>
      <GlobalNavigationBar />
      <main className="main-content">
        <h1>Global Navigation Bar Demo</h1>
        <p>
          Scroll down to see the navigation bar's backdrop blur effect.
        </p>
        <div className="demo-sections">
          <section id="overview" className="demo-section">
            <h2>Overview</h2>
            <p>Welcome to the system overview section.</p>
          </section>
          <section id="deployments" className="demo-section">
            <h2>Deployments</h2>
            <p>Manage your deployments here.</p>
          </section>
          <section id="analytics" className="demo-section">
            <h2>Analytics</h2>
            <p>View your analytics data.</p>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
