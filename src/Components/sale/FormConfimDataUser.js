import React, { useContext } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { yupEmail, yupPhone, yupTitles } from '../../helpers/formValidations';
import { context } from '../../Context/ContextProvider';
import "./Sale.css"

const FormConfimDataUser = () => {
  
  const history = useNavigate();

  const {handleAuth, auth} = useContext(context)

  const confirmDataUser = (values) => {
    handleAuth(values)
    history("/sale");
  };

  const formik = useFormik({
    initialValues: {
      name: auth?.name || "",
      phoneNumber: "",
      email: auth?.email || "",
      address: ""
    },

    validationSchema: Yup.object({
      name: yupTitles(),
      phoneNumber: yupPhone(),
      email: yupEmail(),
      address: yupTitles(),
    }),

    onSubmit: (values) => {
      confirmDataUser(values);
      formik.resetForm();
    },
  });

  return (

    <div className='container-form-confirm'>
      <div className='formA shadow'>
        <form className="form-containerA  " onSubmit={formik.handleSubmit}>
          <div>

            <label htmlFor="name">Nombre</label>
            <Form.Control
              autoComplete="off"
              id="name"
              type="name"
              className="input-field"
              {...formik.getFieldProps('name')}
            />
            {formik.touched?.name && formik.errors?.name && (
              <div className="error-message message">{formik.errors.name}</div>
            )}

            <label htmlFor="phoneNumber">Número de telefono</label>
            <Form.Control
              autoComplete="off"
              id="phoneNumber"
              type="phoneNumber"
              className="input-field"
              {...formik.getFieldProps('phoneNumber')}
            />
            {formik.touched?.phoneNumber && formik.errors?.phoneNumber && (
              <div className="error-message message">{formik.errors.phoneNumber}</div>
            )}

            <label htmlFor="email">Email</label>
            <Form.Control
              autoComplete="off"
              id="email"
              type="email"
              className="input-field"
              {...formik.getFieldProps('email')}
            />
            {formik.touched?.email && formik.errors?.email && (
              <div className="error-message message">{formik.errors.email}</div>
            )}


            <label htmlFor="address">Direccion</label>
            <Form.Control
              autoComplete="off"
              id="address"
              type="address"
              className="input-field"
              {...formik.getFieldProps('address')}
            />
            {formik.touched?.address && formik.errors?.address && (
              <div className="error-message message">{formik.errors.address}</div>
            )}

          </div>
          <div className='btn-container'>
            <button type="submit" className="btn btn-primary">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormConfimDataUser;