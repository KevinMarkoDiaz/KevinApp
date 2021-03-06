import React, { useContext } from 'react';
import * as Yup from 'yup';
import { useNavigate, Link } from "react-router-dom";
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { FcGoogle } from 'react-icons/fc';
import { context } from '../../Context/ContextProvider';
import { yupEmail, yupPasswordLogin } from '../../helpers/formValidations';
import { startLoginWithEmailAndPassword, startLoginWithGoogle } from '../../helpers/auth';
import './Auth.css';

const LoginForm = () => {

  const { handleAuth } = useContext(context);
  const history = useNavigate();

  const registerSubmit = async (values) => {
    await startLoginWithEmailAndPassword(values.email, values.password);
    history("/");
  };

  const handleLoginWithGoogle = async () => {
    const authUser = await startLoginWithGoogle();
    handleAuth(authUser)
    history("/");
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: yupEmail(),
      password: yupPasswordLogin(),
    }),

    onSubmit: (values) => {
      registerSubmit(values);
      formik.resetForm();
    },
  });

  return (

    <div className='container-form'>
      <div className='form shadow'>
        <div className='form-container-side '>
          <div className='form-container-nav'>
            <h4>Si aun no te registras puedes ir a hacerlo</h4>
            <Link
              to='/auth/register'
              className='form-container-nav-link'
            >
              Registrate
            </Link>
          </div>
        </div>
        <form
          className="form-container"
          onSubmit={formik.handleSubmit}
        >
          <h4>Login</h4>
          <div>
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

            <label htmlFor="pass">Contrase??a</label>
            <Form.Control
              autoComplete="off"
              id="pass"
              type="password"
              className="input-field"
              {...formik.getFieldProps('password')}
            />
            {formik.touched?.password && formik.errors?.password && (
              <div className="error-message message">{formik.errors.password}</div>
            )}

          </div>
          <div className='btn-container'>
            <div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div
              onClick={handleLoginWithGoogle}
              className="google-btn btn-container"
            >
              <FcGoogle />
              <p>Iniciar sesion con Google</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;