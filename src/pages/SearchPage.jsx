import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DATA = [
  { id:1, title:'Cozy Vijayawada Retreat', host:'Local Guide', price:50, description:'Near Kanaka Durga Temple', img:'https://source.unsplash.com/random/400x250/?homestay' },
  { id:2, title:'Lakeview Homestay', host:'Host A', price:35, description:'Peaceful lake view', img:'https://source.unsplash.com/random/400x250/?cottage' },
  { id:3, title:'Historic Cottage', host:'Host B', price:60, description:'Traditional decor', img:'https://source.unsplash.com/random/400x250/?historic' }
];

export default function SearchPage(){
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(DATA);

  function handleSearch(e){
    e.preventDefault();
    const q = query.trim().toLowerCase();
    setResults(q ? DATA.filter(d => d.title.toLowerCase().includes(q) || d.description.toLowerCase().includes(q)) : DATA);
  }

  return (
    <section className="py-5 bg-dark">
      <div className="container">
        <h2 className="text-light text-center mb-4">Search Homestays</h2>
        <form onSubmit={handleSearch} className="row g-3 justify-content-center mb-4">
          <div className="col-md-6"><input value={query} onChange={e=>setQuery(e.target.value)} className="form-control" placeholder="Search by title or description..." /></div>
          <div className="col-md-2"><button className="btn btn-primary w-100" type="submit">Search</button></div>
        </form>

        <div className="row">
          {results.map(r => (
            <div className="col-md-4 mb-3" key={r.id}>
              <div className="card">
                <img src={r.img} className="card-img-top" alt={r.title}/>
                <div className="card-body">
                  <h5 className="card-title">{r.title}</h5>
                  <p className="card-text">Hosted by {r.host}. ${r.price}/night</p>
                  <p className="small text-muted">{r.description}</p>
                  <Link to={`/listing/${r.id}`} className="btn btn-outline-light me-2">Details</Link>
                  <Link to={`/host/${r.id}`} className="btn btn-primary">Contact Host</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
