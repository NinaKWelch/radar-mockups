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
          <section className="dob-match-card">
            <h2>Check how well you are matched</h2>

            <form className="dob-form flex-container">
              <div className="dob-form-item-1 flex-item">
                <h3 className="dob-form-title">You</h3>

                <div className="dob-form-section">
                  <label for="gender" className="dob-form-label">Gender:</label>
                  <input name="youFemale" type="radio" checked/> Woman
                  <input name="youMale" type="radio"/> Man
                </div>

                <div className="dob-form-section">
                  <label for="dob">Date of birth:</label>

                  <div>
                    <select name="day" className="dob-form-select">
                      <option>Day</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>

                    <select name="month" className="dob-form-select">
                      <option>Month</option>
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                    </select>

                    <select name="year" className="dob-form-select">
                      <option>Year</option>
                      <option>1950</option>
                      <option>1952</option>
                      <option>1953</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="dob-form-item-1 flex-item">
                <h3 className="dob-form-title">Him/Her</h3>

                <div className="dob-form-section">
                  <label for="gender" className="dob-form-label">Gender:</label>
                  <input name="heMale" type="radio" checked/> Man
                  <input name="sheFemale" type="radio"/> Woman
                </div>

                <div className="dob-form-section">
                  <label for="dob">Date of birth:</label>

                  <div>
                    <select name="day" className="dob-form-select">
                      <option>Day</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>

                    <select name="month" className="dob-form-select">
                      <option>Month</option>
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                    </select>

                    <select name="year" className="dob-form-select">
                      <option>Year</option>
                      <option>1950</option>
                      <option>1952</option>
                      <option>1953</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="dob-form-item-2 flex-item">
                <label className="dob-form-label">Are you:</label>
                <input name="single" type="radio" checked/> Single
                <input name="dating" type="radio"/> Dating
                <input name="inRelatinship" type="radio"/> In relationship
                <input name="married" type="radio"/> Married
              </div>

              <div className="dob-form-button flex-item">
                <input type="submit" value="Match" className="dob-match-button"/>
              </div>

            </form>
          </section>
        </main>
      </div>
    );
  }
}

export default App;