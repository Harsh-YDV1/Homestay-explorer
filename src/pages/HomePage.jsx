import React from 'react';
import Hero from '../components/Hero';
import Roles from '../components/Roles';
import AttractionsPreview from './_AttractionsPreview';
import SearchPreview from './_SearchPreview';

export default function HomePage(){
  return (
    <>
      <Hero />
      <Roles />
      <SearchPreview />
      <AttractionsPreview />
    </>
  );
}
