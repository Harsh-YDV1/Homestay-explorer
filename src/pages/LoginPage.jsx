import React from 'react';

export default function LoginPage(){
  function handleSubmit(e){
    e.preventDefault();
    alert('This demo does not perform real authentication.');
  }

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Login</h2>
        <form className="row g-3 justify-content-center" onSubmit={handleSubmit}>
          <div className="col-md-4"><input type="email" className="form-control" placeholder="Email" required/></div>
          <div className="col-md-4"><input type="password" className="form-control" placeholder="Password" required/></div>
          <div className="col-md-2"><button className="btn btn-primary w-100" type="submit">Login</button></div>
        </form>
      </div>
    </section>
  );
}
