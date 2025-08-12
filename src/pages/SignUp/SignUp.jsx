import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
     const onSubmit = data => { 
        console.log(data)
    };

  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="name" name="name" {...register("name",{ required: true })} className="input" placeholder="Your Name" />
          {errors.name && <span className="text-red-600">This field is required</span>}
          <label className="label">Email</label>
          <input type="email" name='email' {...register("mail", { required: "Email Address is required" })} 
          aria-invalid={errors.mail ? "true" : "false"}  className="input" placeholder=" Your Email" />
          {errors.email && <span className="text-red-600">This field is required</span>}
          <label className="label">Password</label>
          <input type="password" name='password' {...register("password",{ required: true , maxLength: 20, minLength: 6})} className="input" placeholder="Password" />
          {errors.password?.type === 'required' && <p className="text-red-600" role="alert">Password is required</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">SignUp</button>
        </fieldset>
      </form>
      <p className="text-center pb-3">
            <small>
                Already have an Account?
              <Link className="text-orange-500" to="/login">
               Please login.
              </Link>
            </small>
          </p>
    </div>
  </div>
</div>
  );
};

export default SignUp;