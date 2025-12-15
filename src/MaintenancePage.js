import './MaintenancePage.css';

function MaintenancePage() {
  return (
    <div className="maintenance-page">
      <div className="maintenance-container">
        <img src="/signApp.png" alt="Tohu Korero Logo" className="maintenance-logo" />
        <h1 className="maintenance-title">Tohu Korero</h1>
        <h2 className="maintenance-subtitle">Under Maintenance</h2>
        
        <p className="maintenance-greeting">
          Kia ora. The Tohu Korero prototype is currently offline while we make significant updates to our system.
        </p>

        <div className="maintenance-section">
          <h3>We are currently working on:</h3>
          <ul>
            <li>Updating our licensing compliance.</li>
            <li>Improving the accuracy of our data handling to better respect NZSL grammar.</li>
          </ul>
        </div>

        <div className="maintenance-section">
          <h3>Our Mission</h3>
          <p>
            This project was started to assist students at Otago Polytechnic who face barriers 
            in accessing NZSL interpreters. We are dedicated to building a tool that accurately 
            and respectfully serves the Deaf community.
          </p>
        </div>

        <div className="maintenance-section">
          <h3>Attribution</h3>
          <p>
            This project utilizes data from the NZSL Online Dictionary. All future iterations 
            of this project will be licensed under Creative Commons BY-NC-SA 3.0 in accordance 
            with the source material rights.
          </p>
        </div>

        <div className="maintenance-contact">
          <h3>Contact</h3>
          <a href="mailto:paul@tohukorero.com">paul@tohukorero.com</a>
        </div>

        <p className="maintenance-tagline">Making NZSL accessible to everyone, one sign at a time. 🤟</p>
      </div>
    </div>
  );
}

export default MaintenancePage;
