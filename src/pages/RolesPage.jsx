import React from "react";
import { useNavigate } from "react-router-dom";
import { roles } from "../data/sampleData";

export default function RolesPage() {
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    // When Guide card is clicked → go to /local-guides
    if (role.title === "Guide") {
      navigate("/local-guides");
    }
    // For other roles you can add navigation later if needed
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Platform Roles</h2>
        <div className="row">
          {roles.map((r) => (
            <div className="col-md-3 mb-3" key={r.id}>
              <div
                className={
                  "card text-center bg-dark text-light h-100" +
                  (r.title === "Guide" ? " role-clickable" : "")
                }
                style={r.title === "Guide" ? { cursor: "pointer" } : {}}
                onClick={() => handleRoleClick(r)}
              >
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5>{r.title}</h5>
                    <p>{r.description}</p>
                  </div>
                  {r.title === "Guide" && (
                    <span className="badge bg-info text-dark mt-2">
                      View Local Guides
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
