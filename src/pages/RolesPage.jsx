import React from 'react';
import Roles from '../components/Roles';

export default function RolesPage(){
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">User Roles & Permissions</h2>
        <p className="text-center text-muted">Overview of roles and what they can do on the platform.</p>
        <Roles />
        <div className="mt-4">
          <h5>Role details</h5>
          <ul>
            <li><strong>Admin:</strong> Manage users, listings and content moderation.</li>
            <li><strong>Host:</strong> Add listings, manage calendar & pricing.</li>
            <li><strong>Tourist:</strong> Search, book, and review stays.</li>
            <li><strong>Guide:</strong> Provide local experiences and tours.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
