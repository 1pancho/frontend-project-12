/* eslint-disable */
import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import axios from 'axios';
import useAuth from "../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import hexlet from '../assets/hexlet.jpeg';
import routes from '../routes.js';


const LoginPage = () => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .required('Обязательное поле'),
      password: Yup.string()
        .required('Обзательное поле')
    }),

    onSubmit: async (values) => {
      setAuthFailed(false)

        try {
        const res = await axios.post(routes.loginPath(), values)
        console.log(res)
        localStorage.setItem('userId', JSON.stringify(res.data));
        auth.logIn();
        const { from } = location.state;
        navigate(from);
      } catch (error) {
        formik.setSubmitting(false)
        if (error.isAxiosError && error.response.status === 401) {
          setAuthFailed(true)
          return;
        }
        throw error;
      }
    },
  })


  const auth = useAuth()
  const [authFailed, setAuthFailed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()

  console.log('Form values:', formik.values);
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Container className="h-100" fluid>
        <Row className="justify-content-center align-content-center h-100">
          <Col className="col-12 col-md-8 col-xxl-6">
            <Card className="shadow-sm">
              <Card.Body className="p-5 row">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <img
                    src={hexlet}
                    className="roundedCircle"
                    alt="Log in page"
                  />
                </div>
                <Form onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
                  <h1 className="text-center mb-4">{t('enter')}</h1>
                  <fieldset disabled={formik.isSubmitting}></fieldset>
                  <Form.Group className="form-floating mb-3">
                    <FloatingLabel label={t('username')}>
                      <Form.Control
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        placeholder="username"
                        name="username"
                        id="username"
                        autoComplete="username"
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="form-floating mb-3">
                    <FloatingLabel label={t('password')}>
                      <Form.Control
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder="password"
                        name="password"
                        id="password"
                        autoComplete="password"
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Button type="submit" disabled={formik.isSubmitting} variant="outline-primary" className="w-100 mb-3">{t('enter')}</Button>
                </Form>

              </Card.Body>
              <Card.Footer className="p-4">
                <div className="text-center">
                  <span>{t('notAccount')}</span>
                  {' '}

                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
  );
};

export default LoginPage