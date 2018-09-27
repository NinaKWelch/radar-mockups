import React, { Component } from 'react';
import FB from './FindUs-FB.png';

class App extends Component {

  render() {
    return (
      <div className="flex-container">
        <header className="header-content flex-container">
          <div className="header-brand flex-item">
            <a href="#"><h1 className="header-logo flex-item">RADAR <small>Astrology</small></h1></a>
          </div>

          <div className="header-social flex-item">
            <a href="#" className="header-social-link"><img src={FB} className="header-social-img"/></a>
          </div>
        </header>

        <main className="flex-container">
          <section className="match-card">
            <h2>Check how well you are matched</h2>

            <form className="match-form flex-container">
              <div className="match-form-person flex-item">
                <h3 className="match-form-title">You</h3>

                <fieldset className="match-form-section">
                  <span className="match-form-subtitle">Gender:</span>

                  <label className="match-form-label">
                    <input type="radio"
                           name="gender-person"
                           id="gender-person-female"
                           value="female"
                    /> Woman
                  </label>

                  <label className="match-form-label">
                    <input type="radio"
                           name="gender-person"
                           id="gender-person-male"
                           value="male"
                    /> Man
                  </label>
                </fieldset>

                <fieldset className="match-form-section">
                  <legend>Date of Birth:</legend>
                  <select name="dob-person-day"
                          id="dob-person-day"
                          className="match-form-select"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>

                  <select name="dob-person-month"
                          id="dob-person-month"
                          className="match-form-select"
                  >
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                  </select>

                  <select name="dob-person-year"
                          id="dob-person-year"
                          className="match-form-select"
                  >
                    <option>2000</option>
                    <option>1999</option>
                    <option>1998</option>
                  </select>
                </fieldset>
              </div>

              <div className="match-form-partner flex-item">
                <h3 className="match-form-title">Him/Her</h3>

                <fieldset className="match-form-section">
                  <span className="match-form-subtitle">Gender:</span>

                  <label className="match-form-label">
                    <input type="radio"
                           name="gender-partner"
                           id="gender-partner-male"
                           value="male"
                    /> Man
                  </label>

                  <label className="match-form-label">
                    <input type="radio"
                           name="gender-partner"
                           id="gender-partner-female"
                           value="female"
                    /> Woman
                  </label>
                </fieldset>

                <fieldset className="match-form-section">
                  <legend>Date of Birth:</legend>
                  <select name="dob-partner-day"
                          id="dob-partner-day"
                          className="match-form-select"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>

                  <select name="dob-partner-month"
                          id="dob-partner-month"
                          className="match-form-select"
                  >
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                  </select>

                  <select name="dob-partner-year"
                          id="dob-partner-year"
                          className="match-form-select"
                  >
                    <option>2000</option>
                    <option>1999</option>
                    <option>1998</option>
                  </select>
                </fieldset>
              </div>

              <fieldset className="match-form-relationship-status flex-item">
                <span className="match-form-subtitle">Are you:</span>

                <label className="match-form-label">
                  <input type="radio"
                         name="relationship-status"
                         id="relationship-status-single"
                         value="single"
                  /> Single
                </label>

                <label className="match-form-label">
                  <input type="radio"
                         name="relationship-status"
                         id="relationship-status-dating"
                         value="dating"
                  /> Dating
                </label>

                <label className="match-form-label">
                  <input type="radio"
                         name="relationship-status"
                         id="relationship-status-in-relationship"
                         value="in-relationship"
                  /> In Relationship
                </label>

                <label className="match-form-label">
                  <input type="radio"
                         name="relationship-status"
                         id="relationship-status-married"
                         value="married"
                  /> Married
                </label>
              </fieldset>

              <div className="match-form-button flex-item">
                <input type="submit" value="Match" className="match-from-submit"/>
              </div>

            </form>
          </section>
        </main>
      </div>
    );
  }
}

export default App;