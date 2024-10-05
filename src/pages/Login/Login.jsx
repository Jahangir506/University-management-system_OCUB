const Login = () => {
  return (
    <>
      <div className="hero bg-[#009688] min-h-screen">
        <div className="hero-content p-0 flex-col lg:flex-row-reverse">
          <div className="card rounded-md bg-base-100 w-full shrink-0 shadow-2xl">
            <form className="card-body px-4 pt-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#009688] text-white  hover:bg-[#03524a]">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
