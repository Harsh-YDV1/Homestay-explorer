import React from 'react';

const ATTRACTIONS = [
  { id:1, title:'Kanaka Durga Temple', desc:'Sacred temple on Indrakeeladri Hill. Best during Dasara.', img:'https://source.unsplash.com/random/400x250/?temple' },
  { id:2, title:'Bhavani Island', desc:'A scenic island on the Krishna River.', img:'https://source.unsplash.com/random/400x250/?island' },
  { id:3, title:'Subbaiah Park', desc:'Relaxing greens and local food stalls.', img:'https://source.unsplash.com/random/400x250/?park' }
];

export default function AttractionsPage(){
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Attractions</h2>
        <div className="row">
          {ATTRACTIONS.map(a => (
            <div className="col-md-4 mb-3" key={a.id}>
              <div className="card">
                <img src={a.img} className="card-img-top" alt={a.title} />
                <div className="card-body">
                  <h5 className="card-title">{a.title}</h5>
                  <p className="card-text">{a.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
