/* eslint-disable */


import React from "react";
import { useTranslation } from "react-i18next";
import { Formik, useFormik } from "formik";
import { Form, FloatingLabel, Container, Row, Col, Card, Button } from 'react-bootstrap'
import hexlet from '../assets/hexlet.jpeg'
import * as Yup from "yup";




const LoginPage = () => {
    const { t } = useTranslation();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .required('Обязательное поле'),
          password: Yup.string()
            .required('Обзательное поле')
        })
    })

    console.log('Form values:', formik.values);
    return (
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
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.username}
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
    );
};

export default LoginPage