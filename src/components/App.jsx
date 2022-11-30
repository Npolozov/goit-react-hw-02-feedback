import { Component } from 'react';
import { Feedback } from 'components/Feedback';
import { Buttons } from 'components/Buttons';
import { Notification } from 'components/Notification';
import { Statistics } from 'components/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = e => {
    const options = e.target.name;
    this.setState(prevState => ({
      [options]: prevState[options] + 1,
    }));
  };
  render() {
    const keys = Object.keys(this.state);
    console.log(keys);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Feedback title="Plese leave feedback">
          <Buttons options={keys} handleButtonClick={this.handleButtonClick} />
        </Feedback>
        <Notification message="There is no feedback" />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.total}
          positivePercentage={this.positivePercentage}
        />
      </>
    );
  }
}
