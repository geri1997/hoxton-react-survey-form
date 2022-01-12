import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
            <h3>
              What would you say that are the best features of your rubber duck?
            </h3>
            <ul>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="colour" />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="sound" />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="logo" />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="size" />
                  Its big!
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>
              What would you say that are the worst bits of your rubber duck?
            </h3>
            <ul>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="colour" />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="sound" />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="logo" />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="size" />
                  Its big!
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input
                  id="consistency1"
                  type="radio"
                  name="consistency"
                  value="1"
                />
                <label htmlFor="consistency1">1</label>
              </li>
              <li>
                <input
                  id="consistency2"
                  type="radio"
                  name="consistency"
                  value="2"
                />
                <label htmlFor="consistency2">2</label>
              </li>
              <li>
                <input
                  id="consistency3"
                  type="radio"
                  name="consistency"
                  value="3"
                />
                <label htmlFor="consistency3">3</label>
              </li>
              <li>
                <input
                  id="consistency4"
                  type="radio"
                  name="consistency"
                  value="4"
                />
                <label htmlFor="consistency4">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="consistency1"
                  type="radio"
                  name="consistency"
                  value="1"
                />
                <label htmlFor="consistency1">1</label>
              </li>
              <li>
                <input
                  id="consistency2"
                  type="radio"
                  name="consistency"
                  value="2"
                />
                <label htmlFor="consistency2">2</label>
              </li>
              <li>
                <input
                  id="consistency3"
                  type="radio"
                  name="consistency"
                  value="3"
                />
                <label htmlFor="consistency3">3</label>
              </li>
              <li>
                <input
                  id="consistency4"
                  type="radio"
                  name="consistency"
                  value="4"
                />
                <label htmlFor="consistency4">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input
                  id="consistency1"
                  type="radio"
                  name="consistency"
                  value="1"
                />
                <label htmlFor="consistency1">1</label>
              </li>
              <li>
                <input
                  id="consistency2"
                  type="radio"
                  name="consistency"
                  value="2"
                />
                <label htmlFor="consistency2">2</label>
              </li>
              <li>
                <input
                  id="consistency3"
                  type="radio"
                  name="consistency"
                  value="3"
                />
                <label htmlFor="consistency3">3</label>
              </li>
              <li>
                <input
                  id="consistency4"
                  type="radio"
                  name="consistency"
                  value="4"
                />
                <label htmlFor="consistency4">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="colour" />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="sound" />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="logo" />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="size" />I
                  don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols={30} rows={10}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value="" />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value="" />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Main;
