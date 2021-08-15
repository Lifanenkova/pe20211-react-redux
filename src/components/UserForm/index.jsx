import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionTypes';
import { createUser } from '../../actions';

function UserForm (props) {
  const { createUserAction } = props;
  const initialUserValues = {
    name: '',
    telNumber: '',
    isBanned: false,
  };

  const submitHandler = (values, formikBag) => {
    createUserAction(values);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
      {formikProps => {
        return (
          <Form>
            <Field name='name' />
            <Field name='telNumber' />
            <Field name='isBanned' />
            <button type='submit'>Add</button>
          </Form>
        );
      }}
    </Formik>
  );
}
const mapStateToProps = state => state.users;

const mapDispatchToProps = dispatch => {
  return {
    createUserAction: data => {
      dispatch(createUser(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
