import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';


function UserSagaForm (props) {
  const {  } = props;
  const initialUserValues = {
    name: '',
    telNumber: '',
    isBanned: false,
  };

  const submitHandler = (values, formikBag) => {
    
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
    
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSagaForm);
