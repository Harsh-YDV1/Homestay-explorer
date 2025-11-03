import React from 'react';
import { useParams } from 'react-router-dom';

export default function HostProfile(){
  const { id } = useParams();
  const host = {
    1: { name:'Local Guide', bio:'Friendly guide and host with local knowledge.', rating:4.8 },
    2: { name:'Host A', bio:'Lake-friendly host with boating tips.', rating:4.6 },
    3: { name:'Host B', bio:'Loves to share traditional recipes.', rating:4.9 }
  }[id] || { name:'Host', bio:'Host profile not found', rating:0 };

  return (
    <section className="py-5 bg-dark">
      <div className="container text-light">
        <h2>{host.name}</h2>
        <p className="small">Rating: {host.rating} ⭐</p>
        <p>{host.bio}</p>
        <p><strong>Languages:</strong> English, Telugu</p>
        <button className="btn btn-outline-light">Send Message</button>
      </div>
    </section>
  );
}
