import React from 'react';
import { roles } from '../data/sampleData';

export default function RolesPage() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Platform Roles</h2>
        <div className="row">
          {roles.map(r => (
            <div className="col-md-3 mb-3" key={r.id}>
              <div className="card text-center bg-dark text-light h-100">
                <div className="card-body">
                  <h5>{r.title}</h5>
                  <p>{r.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
