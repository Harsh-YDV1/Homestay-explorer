import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SAMPLE = {
  1: { id:1, title:'Cozy Vijayawada Retreat', host:'Local Guide', price:50, description:'Near Kanaka Durga Temple. Great for families.', img:'https://source.unsplash.com/random/800x450/?homestay' },
  2: { id:2, title:'Lakeview Homestay', host:'Host A', price:35, description:'Peaceful lake view. Breakfast included.', img:'https://source.unsplash.com/random/800x450/?lakehouse' },
  3: { id:3, title:'Historic Cottage', host:'Host B', price:60, description:'Traditional decor with modern comfort.', img:'https://source.unsplash.com/random/800x450/?cottage' }
};

export default function ListingDetails(){
  const { id } = useParams();
  const listing = SAMPLE[id];
  if(!listing) return <div className="container py-5"><h3>Listing not found</h3></div>;

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img src={listing.img} alt={listing.title} style={{ width:'100%', borderRadius:12 }} />
          </div>
          <div className="col-md-5">
            <h2>{listing.title}</h2>
            <p className="text-muted">Hosted by <Link to={`/host/${listing.id}`}>{listing.host}</Link></p>
            <h4>${listing.price}/night</h4>
            <p>{listing.description}</p>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
