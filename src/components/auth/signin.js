import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // TODO: Need Something to log user in
  }

  render() {
    // NOTE Not following video for this part, I am using a higher redux-form versio
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label htmlFor="email">Email:&nbsp;</label>
          <Field className="form-group" name="email" component="input" type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password:&nbsp;</label>
          <Field className="form-group" name="password" component="input" type="text" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
  );
  }
}

export default reduxForm({
    form: 'signin'
})(Signin);

// 1. import { reduxForm } from 'redux-form';
// 2. link my component with redux-form
//    export default reduxForm(form: 'name of the form', fields: exact property name of each field)
//    (name of my component);
// 3. hook up redux with the reducers (got to reducers/index.js file)

// 7. include <form></form> jsx
// 8. hook up my form with reduxForm by adding
//    const { handleSubmit, fields: {email, password}} = this.props;
// 9. make sure that <form> is listening for submissions, I do this
//    by adding <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
// 10. create handleFormSubmit function
// NOTE: revisit my handleFormSubmit to complete TODO
// 11. In the mean time, create a route for this page go to Index.js
