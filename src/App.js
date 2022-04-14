import React,{useState} from 'react'
import './App.css';
import * as yup from 'yup'
import {Formik} from 'formik'
import s from './style.module.css'
function App() {

  


const validationSchema = yup.object().shape({
  firstAnswer: yup.string().typeError('Have must string'),
  first: yup.string().oneOf([yup.ref('firstAnswer')],'Відповідь неправильна').required('Input cannot be empty'),
  secondAnswer: yup.string().typeError('Have must string'),
  second: yup.string().oneOf([yup.ref('secondAnswer')],'Відповідь неправильна').required('Input cannot be empty'),
  thirdAnswer: yup.string().typeError('Have must string'),
  third: yup.string().oneOf([yup.ref('thirdAnswer')],'Відповідь неправильна').required('Input cannot be empty'),
  fourthAnswer: yup.string().typeError('Have must string'),
  fourth: yup.string().oneOf([yup.ref('fourthAnswer')],'Відповідь неправильна').required('Input cannot be empty'),
  fifthAnswer: yup.string().typeError('Have must string'),
  fifth: yup.string().oneOf([yup.ref('fifthAnswer')],'Відповідь неправильна').required('Input cannot be empty'),
  sixthAnswer: yup.string().typeError('Have must string'),
  sixth: yup.string().oneOf([yup.ref('sixthAnswer')],'Відповідь неправильна').required('Input cannot be empty'),
  seventhAnswer: yup.string().typeError('Have must string'),
  seventh: yup.string().oneOf([yup.ref('seventhAnswer')],'Відповідь неправильна').required('Input cannot be empty')
})



  return (
    <div className="App">

<h1 className={s.header}>Proszę napisać poprawną formę przymiotnika😊.<br/>

    *(Напишіть правильну форму прикметника)*</h1>
            <div>
            <text style={{color:"#F9D94D" }}>Przykład</text>
<strong>:Książka jest lepsza niż film.</strong>
            </div>


      <Formik
      initialValues={{
        firstAnswer:'wyższa',
        first:'',
        secondAnswer:'piękniejszy',
        second:'',
        thirdAnswer:'droższy',
        third:'',
        fourthAnswer:'mniejszy',
        fourth:'',
        fifthAnswer:'większy',
        fifth:'',
        sixthAnswer:'niższy',
        sixth:'',
        seventhAnswer:'ładniejsza',
        seventh:''
      }}
      
      validateOnBlur
      onSubmit={(values) => {console.log(values)} }
      validationSchema={validationSchema}
      >
        {({values,errors,touched,handleChange,handleBlur,isValid,handleSubmit,dirty}) => (
          <div className="form">
            {/* //FirstAnswer  */}
            <p>
            <input type="hidden"
            name="firstAnswer"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstAnswer}/>
            </p>
            {touched.firstAnswer && errors.firstAnswer && <p>{errors.firstAnswer}</p>}
            {/* First sentence */}
            <p>
            💛 Anka jest <span style={{color:"#F9D94D" }}>(wysoka)</span> {/*[wyższa]*/} 
            <input type="text"
            className={s.input}
            name="first"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.first}/>
            niż Tom.
            </p>
            {touched.first && errors.first && <p>{errors.first}</p>}

            {/* SecondAnswer */}
            <p>
            <input type="hidden"
            name="secondAnswer"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.secondAnswer}/>
            </p>
            {touched.secondAnswer && errors.secondAnswer && <p>{errors.secondAnswer}</p>}

            {/* Second sentence */}
            <p>
            💛 Ten taniec jest <span style={{color:"#F9D94D" }}>(piękny)</span> {/*[piękniejszy] */}
            <input type="text"
            name="second"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.second}/>
            niż poprzedni.
            </p>
            {touched.second && errors.second && <p>{errors.second}</p>}

            {/* ThirdAnswer */}
            <p>
            <input type="hidden"
            name="thirdAnswer"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.thirdAnswer}/>
            </p>
            {touched.thirdAnswer && errors.thirdAnswer && <p>{errors.thirdAnswer}</p>}

            {/* Third sentence */}
            <p>
            💛Mój szalik jest <span style={{color:"#F9D94D" }}>(drogi)</span> {/*[droższy]*/}
            <input type="text"
            name="third"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.third}/>
            od twojego.
            </p>
            {touched.third && errors.third && <p>{errors.third}</p>}

            {/* FourthAnswer */}
            <p>
            <input type="hidden"
            name="fourthAnswer"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fourthAnswer}/>
            </p>
            {touched.fourthAnswer && errors.fourthAnswer && <p>{errors.fourthAnswer}</p>}

            {/* Fourth sentence */}
            <p>
            💛 Zielony plecak jest <span style={{color:"#F9D94D" }}> (mały) </span> {/* [mniejszy]*/}
            <input type="text"
            name="fourth"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fourth}/>
            od żółtego.
            </p>
            {touched.fourth && errors.fourth && <p>{errors.fourth}</p>}

            {/* FifthAnswer */}
            <p>
            <input type="hidden"
            name="fifthAnswer"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fifthAnswer}/>
            </p>
            {touched.fifthAnswer && errors.fifthAnswer && <p>{errors.fifthAnswer}</p>}

            {/* Fifth sentence */}
            <p>
            💛 Dom mojej przyjaciółki jest <span style={{color:"#F9D94D" }}> (duży) </span> {/* [większy]*/}
            <input type="text"
            name="fifth"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fifth}/>
            od mojego.
            </p>
            {touched.fifth && errors.fifth && <p>{errors.fifth}</p>}

            {/* SixthAnswer */}
            <p>
            <input type="hidden"
            name="sixthAnswer"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.sixthAnswer}/>
            </p>
            {touched.sixthAnswer && errors.sixthAnswer && <p>{errors.sixthAnswer}</p>}

            {/* Sixth sentence */}
            <p>
            💛 Mój kuzyn jest <span style={{color:"#F9D94D" }}> *(niski)* </span>  {/*[niższy]*/}
            <input type="text"
            name="sixth"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.sixth}/>
            niż moja kuzynka.
            </p>
            {touched.sixth && errors.sixth && <p>{errors.sixth}</p>}

            {/* SeventhAnswer */}
            <p>
            <input type="hidden"
            name="seventhAnswer"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.seventhAnswer}/>
            </p>
            {touched.seventhAnswer && errors.seventhAnswer && <p>{errors.seventhAnswer}</p>}

            {/* Seventh sentence */}
            <p>
            💛 Mój kuzyn jest <span style={{color:"#F9D94D" }}> *(niski)* </span> {/*[niższy]*/}
            <input type="text"
            name="seventh"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.seventh}/>
            niż moja kuzynka.
            </p>
            {touched.seventh && errors.seventh && <p>{errors.seventh}</p>}


            {/* <button disabled={isValid && !dirty} onClick={handleSubmit} type="submit">Send</button> */}
          </div>
          
        )}
      </Formik>
    </div>
  );
}

export default App;
