import React, { Component } from 'react';

import { classToPlain } from "class-transformer";
import xml2js from 'xml2js';

import InLine from './vast/InLine';
import LinearCreative from './vast/LinearCreative';

class App extends Component {
  constructor(props) {
    super(props);
    this.builder = new xml2js.Builder({
      cdata: true
    });
    this.inLine = new InLine("Geniee", "ドールズフロントライン");
    const linear = new LinearCreative(15);
    this.inLine.addCreative(linear);

    this.state = {
      form: {
        adTitle: 'Ad Title',
        viewThroughDuration: 0,
        viewThroughBeacon: ''
      },
      xml: {
        VAST: {
          $: {
            'xmlns:xs': 'http://www.w3.org/2001/XMLSchema',
            version: '3.0'
          },
          Ad: {
            InLine: classToPlain(this.inLine)
          }
        }
      }
    }

    this.handleChangeProgressTrackingDuration = this.handleChangeProgressTrackingDuration.bind(this);
    this.handleChangeProgressTrackingBeacon = this.handleChangeProgressTrackingBeacon.bind(this);
    this.handleChangeAdTitle = this.handleChangeAdTitle.bind(this);
  }
  
  handleChangeProgressTrackingDuration(event) {
    this.setState({
      form: {
        viewThroughDuration: event.target.value
      }
    });
  }

  handleChangeProgressTrackingBeacon(event) {
    this.setState({
      form: {
        viewThroughBeacon: event.target.value
      }
    });
  }

  handleChangeAdTitle(event) {
    this.setState({
      form: {
        adTitle: event.target.value
      }
    });
    this.inline.setAdTitle(event.target.value);
  }

  render() {
    return (
      <div className="container">
      <div className="columns">
          <div className="column is-one-third">
            <form>
              <div>
                  <label className="label" htmlFor="ad-title">Ad Title</label>
                  <input type="text" className="input" id="ad-title" name="ad-title" required 
                    value={this.state.form.adTitle}
                    onChange={this.handleChangeAdTitle} />
                  />
              </div>
              <div>
                  <label htmlFor="duration">Duration:</label>
                  <input type="number" className="input" id="duration" name="duration" required />
              </div>
              <div>
                  <label className="label" htmlFor="view-through">View Through:</label>
                  <input type="url" className="input" id="view-through" name="view-through" required 
                    value={this.state.form.viewThroughBeacon}
                    onChange={this.handleChangeProgressTrackingBeacon} />
              </div>
              <div>
                  <label className="label" htmlFor="view-through-duration">View Through Duration:</label>
                  <input type="number" className="input" id="view-through-duration" name="view-through-duration" required 
                    value={this.state.form.viewThroughDuration} 
                    onChange={this.handleChangeProgressTrackingDuration} 
                  />
              </div>
              <div>
                  <label htmlFor="click-through">Click Through:</label>
                  <input type="url" className="input" id="click-through" name="click-through" required />
              </div>
              <div>
                  <label htmlFor="video">Video:</label>
                  <input type="url" className="input" id="video" name="video" required />
              </div>
              <input className="button is-primary" type="submit" value="Submit" />
            </form>
          </div>

          <div className="column">
              <div className="field">
                <div className="control">
                  <textarea className="textarea is-small" value={this.builder.buildObject(this.state.xml)} rows="30"/>
                </div>
              </div>
          </div>

      </div>
      </div>
    );
  }
}

export default App;
