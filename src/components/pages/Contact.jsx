import React, { useState } from "react";
import { Container, Col, Row, Button, Form, InputGroup, FormControl, Alert, Card } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import { Formik } from 'formik';
import PagesBanner from '../widgets/PagesBanner';
import BannerImg from '../../assets/img/contact-banner.jpg';
import addressIcon from '../../assets/img/contact-address-icon.png';
import phoneIcon from '../../assets/img/contact-phone-icon.png';
import mailIcon from '../../assets/img/contact-mail-icon.png';
import contactImage from '../../assets/img/contact-image.png';
import rippleBtn from "../widgets/rippleBtn";
import axios from 'axios';
import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
let randomNr1 = Math.floor(Math.random() * 10);
let randomNr2 = Math.floor(Math.random() * 10);
let totalNr = randomNr1 + randomNr2;

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(3, "Name must be minimum 3 charator").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed in name"),
  phone: Yup.string().required('Phone number is required').matches(phoneRegExp, 'Phone number is not valid'),
  mail: Yup.string().email('Invalid email format').required('Email is Required'),
  message: Yup.string().required("Pelase enter message").min(10, "message must be minimum 10 charator"),
  captcha: Yup.number().typeError('you must specify a number').required("Pelase enter captcha").oneOf([totalNr], "Total is not match")
});

rippleBtn();
const Contact = () => {
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => { setServerState({ ok, msg }); };
  const submitForm = (value, { setSubmitting, setErrors, setStatus, resetForm }) => {
    axios({
      method: "POST",
      url: "sendmail.php",
      data: "name=" + value.name + "&email=" + value.mail + "&phone=" + value.phone + "&message=" + value.message
    }).then(response => {
      console.log(response);
      resetForm({});
      setStatus({ success: true });
      handleServerResponse(true, "We will get back to you within 24 Hour");
    }).catch(error => {
      console.log(error.response);
      setSubmitting(false);
      setStatus({ success: false });
      setErrors({ submit: error.message });
      handleServerResponse(false, "Something Went Wrong, Please Try Again");
    })
  }
  return (
    <React.Fragment>
      <Helmet>
        <title>Web Design and Development Companies, Website Development | Butterfly</title>
        <meta name="description" content="We serve clients from all over the world in the design and development of world-class Web Pages and end-to-end eCommerce Solutions."/>
      </Helmet>
      <PagesBanner PageTitle="Contact Us" BannerImg={BannerImg} />
      <section>
        <Container>
          <Row className="align-items-center mb-5">
            <Col md={7}>
              <div className="sec-heading left-bdr-title mb-4">
                <h2>Let's Get Started</h2>
              </div>
              <p>We have adopted a pricing structure that's affordable for all. We're here to put a smile on your face. Get the right service for the right price..</p>
              <p>All Electronic based music: House, EDM, Future Bass/Dubstep, Urban/Future Pop, Hip Hop/Trap.</p>
            </Col>
            <Col md={5}><img src={contactImage} alt="Contact" title="Contact Web Development Company" width={526} height={361} className="img-fluid" /></Col>
          </Row>
          <div className="sec-heading heading-center mb-3">
            <h2>Contact Detail</h2>
            <p className="mb-1">Send us the details by filling the form for Below,<br/> Collaborate with Confidence! </p>
            <span className="title-devider"></span>
          </div>
          <Formik validationSchema={schema} onSubmit={submitForm} initialValues={{ name: '', phone: '', mail: '', message: '', captcha: '' }}>
            {({ errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting, isValid, status, values }) => (
              <Row className="align-items-center">
                <Col lg={6}>
                  <Card className="contact-card">
                    <Card.Body>
                      {serverState && (<Alert variant={serverState.ok ? "success" : "danger"}>{serverState.ok ? <><i className="fa fa-circle-check"></i> <strong>Thank you!</strong> {serverState.msg}</> : <><i className='fa fa-exclamation-triangle'></i> <strong>Opps!</strong></>} {serverState.msg}</Alert>)}
                      <Form noValidate onSubmit={handleSubmit}>
                        <Row>
                          <Form.Group as={Col} sm="6 mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.name && !!touched.name} />
                            {errors.name && touched.name ? (<Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>) : null}
                          </Form.Group>
                          <Form.Group as={Col} sm="6 mb-3" controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.phone && !!touched.phone} />
                            {errors.phone && touched.phone ? (<Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>) : null}
                          </Form.Group>
                          <Form.Group as={Col} md="12 mb-3" controlId="mail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="mail" value={values.mail} onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.mail && !!touched.mail} />
                            {errors.mail && touched.mail ? (<Form.Control.Feedback type="invalid">{errors.mail}</Form.Control.Feedback>) : null}
                          </Form.Group>
                          <Form.Group as={Col} md="12 mb-3" controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" name="message" value={values.message} onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.message && !!touched.message} />
                            {errors.message && touched.message ? (<Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>) : null}
                          </Form.Group>
                          <Form.Group as={Col} sm="7 mb-3" controlId="captcha">
                            <InputGroup hasValidation>
                              <InputGroup.Text id="basic-addon1">What is {randomNr1} + {randomNr2}</InputGroup.Text>
                              <FormControl maxLength={2} aria-describedby="basic-addon1" aria-label="What is number?" type="text" name="captcha" value={values.captcha} onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.captcha && !!touched.captcha} />
                              {errors.captcha && touched.captcha ? (<Form.Control.Feedback type="invalid">{errors.captcha}</Form.Control.Feedback>) : null}
                            </InputGroup>
                          </Form.Group>
                          <Form.Group as={Col} sm="5 mb-3">
                            <Button className="w-100" type="submit" name="submit">Send</Button>
                          </Form.Group>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6}>
                  <div className="px-md-5">
                    <h3>Contact Information</h3><br />
                    <div className="contact-add">
                      <div className="contact-icon"><img src={addressIcon} alt="Address" title="Address Icon" width={110} height={110} /></div>
                      <div className="contact-add-info">
                        <strong>OUR ADDRESS:</strong>
                        <p>22 Pine Grove, Mercer,pa, 16133  United States -  16133</p>
                      </div>
                    </div>
                    <div className="contact-add">
                      <div className="contact-icon"><img src={mailIcon} alt="mail" title="mail" width={110} height={110} /></div>
                      <div className="contact-add-info">
                        <strong>OUR MAILBOX:</strong>
                        <p><a href="mailto:info@butterfly.com">info@butterfly.com</a><br />
                        <a href="mailto:support@butterfly.com">support@butterfly.com</a></p>
                      </div>
                    </div>
                    <div className="contact-add">
                      <div className="contact-icon"><img src={phoneIcon} alt="phone" title="phone" width={110} height={110} /></div>
                      <div className="contact-add-info">
                        <strong>OUR PHONES:</strong>
                        <p><a href="tel:9879881409">(+01) 2345 6789</a></p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            )}
          </Formik>
        </Container>
      </section>
    </React.Fragment>
  );
};
export default Contact;