import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Welcome to Event Planner</h1>
      <p>Plan and organize your events effortlessly with Event Planner. From birthdays to corporate meetings, we've got you covered.</p>
      <button className="get-started">Get Started</button>

      <div className="categories">
        <div className="category-card social">
          <h3>Social Events:</h3>
          <ul>
            <li>Birthday parties</li>
            <li>Anniversary celebrations</li>
            <li>Wedding receptions</li>
            <li>Baby showers</li>
            <li>Graduation parties</li>
            <li>Family reunions</li>
          </ul>
        </div>

        <div className="category-card entertainment">
          <h3>Entertainment Events:</h3>
          <ul>
            <li>Concerts</li>
            <li>Music festivals</li>
            <li>Film screenings</li>
            <li>Comedy shows</li>
            <li>Art exhibitions</li>
            <li>Cultural events</li>
          </ul>
        </div>

        <div className="category-card community">
          <h3>Community Events:</h3>
          <ul>
            <li>Fundraising events</li>
            <li>Charity galas</li>
            <li>Volunteer drives</li>
            <li>Neighborhood block parties</li>
            <li>Cultural festivals</li>
            <li>Cultural celebrations</li>
          </ul>
        </div>
      </div>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Easy event creation and management</li>
          <li>Customizable event templates</li>
          <li>Guest list management</li>
          <li>Real-time collaboration</li>
          <li>Reminders and notifications</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
          <p className="author">- Emily Johnson</p>
        </div>
        <div className="testimonial">
          <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
          <p className="author">- John Smith</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;
