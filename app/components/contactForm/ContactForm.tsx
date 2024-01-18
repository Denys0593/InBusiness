import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./contactForm.scss";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  interested: string;
  checkbox: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="contactForm">
      <div className="contactForm__upper">
        <h2 className="contactForm__title">Get in Touch</h2>
        <div className="contactForm__text">
          Please provide a brief description of your business enquiry and we’ll
          do our best to get back to you as soon as possible.
        </div>
        <div className="contactForm__hr" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="formContact">
        <div className="formContact__input">
          <label htmlFor="first name">First name * </label>
          <input
            {...register("firstName", {
              required: "Please fill this field",
              minLength: {
                value: 2,
                message: "min 2 symbols",
              },
            })}
            id="first name"
          />
        </div>
        {errors.firstName && (
          <span style={{ color: "red" }}>{errors.firstName.message}</span>
        )}
        <div className="formContact__input">
          <label htmlFor="last name">Last name *</label>
          <input
            {...register("lastName", {
              required: "Please fill this field",
              minLength: {
                value: 2,
                message: "min 2 symbols",
              },
            })}
            id="last name"
          />
        </div>
        {errors.lastName && (
          <span style={{ color: "red" }}>{errors.lastName.message}</span>
        )}
        <div className="formContact__input">
          <label htmlFor="email">Email * </label>
          <input
            {...register("email", {
              required: "Please fill this field",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
            type="email"
            name="email"
            id="email"
          />
        </div>
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
        <div className="formContact__input">
          <label htmlFor="interested">I’m interested in *</label>
          <input
            {...register("interested", {
              required: "Please fill this field",
              minLength: {
                value: 5,
                message: "Min 5 symbols",
              },
              maxLength: {
                value: 80,
                message: "Use less than 80 symbols",
              },
            })}
            type="text"
            name="interested"
            id="interested"
          />
        </div>
        {errors.interested && (
          <span style={{ color: "red" }}> {errors.interested.message}</span>
        )}
        <div className="formContact__private">
          <input
            {...register("checkbox", {
              required: {
                value: true,
                message: "Please fill this field",
              },
            })}
            type="checkbox"
            name="checkbox"
            id="checkbox"
          />
          <div className="formContact__div">
            I consent to the use of my data in accordance with&nbsp;
            <a href="#">Privacy Policy</a>.
          </div>
          <div>
            {errors.checkbox && (
              <span style={{ color: "red" }}>{errors.checkbox.message}</span>
            )}
          </div>
        </div>
      </form>
      <button>Send</button>
    </div>
  );
}

// export default function ContactForm() {
//   const [name, setName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [interested, setInterested] = useState("");
//   const [checked, setChecked] = useState(false);

//   const form = {
//     name: name,
//     lastName: lastName,
//     email: email,
//     interested: interested,
//   };

//   return (
//     <div className="contactForm">
//       <div className="contactForm__formik"></div>
//       <div className="contactForm__upper">
//         <h2 className="contactForm__title">Get in Touch</h2>
//         <div className="contactForm__text">
//           Please provide a brief description of your business enquiry and we’ll
//           do our best to get back to you as soon as possible.
//         </div>
//       </div>

//       <form className="formContact">
//         <div className="formContact__input">
//           <label htmlFor="first name">First name * </label>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             name="first name"
//             id="first name"
//           />
//         </div>
//         <div className="formContact__input">
//           <label htmlFor="last name">Last name *</label>
//           <input
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             type="text"
//             name="last name"
//             id="last name"
//           />
//         </div>
//         <div className="formContact__input">
//           <label htmlFor="email">Email * </label>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             name="email"
//             id="email"
//           />
//         </div>
//         <div className="formContact__input">
//           <label htmlFor="interested">I’m interested in *</label>
//           <input
//             value={interested}
//             onChange={(e) => setInterested(e.target.value)}
//             type="text"
//             name="interested"
//             id="interested"
//           />
//         </div>

//         <div className="formContact__private">
//           <input
//             onChange={() => setChecked(!checked)}
//             checked={checked}
//             type="checkbox"
//             name="checkbox"
//             id="checkbox"
//           />
//           <div className="formContact__div">
//             I consent to the use of my data in accordance with&nbsp;
//             <a href="#">Privacy Policy</a>.
//           </div>
//         </div>

//         <button>Send</button>
//       </form>
//     </div>
//   );
// }
