import React from 'react';
import Header from './components/common/Header/Header';
import Hello from './components/common/Hello/Hello';
import Interests from './components/common/Interests/Interests';
import CV from './components/common/CV/CV';
import Footer from './components/common/Footer/Footer';
import Input from './components/ui/Input/input';
import Textarea from './components/ui/Textarea/Textarea';
/* eslint-disable no-nested-ternary */

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };
    this.conditionallyRender = this.conditionallyRender.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({
      [value]: event.target.value,
    });
  }

  conditionallyRender(
    submittedComponent,
    inputType,
    value,
    propName,
    type = 'text'
  ) {
    const { submitted } = this.state;

    return submitted ? (
      submittedComponent
    ) : inputType === 'input' ? (
      <Input
        value={value}
        handleChange={(event) => this.handleChange(event, propName)}
        type={type}
      />
    ) : inputType === 'textarea' ? (
      <Textarea
        value={value}
        handleChange={(event) => this.handleChange(event, propName)}
      />
    ) : (
      []
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Hello />
        <Interests />
        <CV conditionallyRender={this.conditionallyRender} />
        <Footer />
      </div>
    );
  }
}

export default App;
