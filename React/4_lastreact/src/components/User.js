import React, { Component } from 'react'

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    }
  }

  /* redux, context api */

  render() {
    const { name, departman } = this.props;
    return (
      <>
        {
          this.state.isVisible ?
            <ul>
              {/* <li>İsim : {this.props.name}</li>
                  <li>Departman : {this.props.departman}</li> */}
              <li>İsim : {name}</li>
              <li>Departman : {departman}</li>
            </ul > : "değersiz"
        }
      </>
    )
  }
}