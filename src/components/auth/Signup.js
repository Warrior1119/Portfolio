import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push("/");
    });
  };
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <Field
                name="email"
                type="text"
                component="input"
                autoComplete="none"
                placeholder="Email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
              />

              <Field
                name="password"
                type="password"
                component="input"
                autoComplete="none"
                placeholder="Password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
              />

              <Field
                name="confirm_password"
                type="password"
                component="input"
                autoComplete="none"
                placeholder="Confirm Password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
              />

              {this.props.errorMessage && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
                  role="alert"
                >
                  <strong>{this.props.errorMessage}</strong>
                </div>
              )}

              <button className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1">
                Create Account
              </button>

              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="text-grey-dark mt-6">
              Already have an account?
              <a
                className="no-underline border-b border-blue text-blue"
                href="../signin/"
              >
                {" "}
                Sign in{" "}
              </a>
              .
            </div>
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signup" })
)(Signup);
