import React from 'react';

const Badges = () => {
  return ( 
    <footer className="bg-card text-card-foreground py-4 mt-aut mb-3">
      <div className="flex justify-center items-center">          
          <a href="https://stop-war-for-ever.vercel.app" className='display-inline-block m-2'>
            <img
              src="https://img.shields.io/badge/STOP%20WAR%20FOR%20EVER-6d3d9d?logo=alchemy&logoColor=00aced&style=flat"
              alt="STOP-WAR-FOR-EVER"
            />
          </a>
          <a href="https://abusosupremo.vercel.app" className='display-inline-block m-2'>
            <img
              src="https://img.shields.io/badge/ABUSO%20SUPREMO-351d1d?logo=msi&logoColor=6bc175&style=flat"
              alt="ABUSO SUPREMO"
            />
          </a>
          <a href="https://futuroroubado.vercel.app" className='display-inline-block m-2'>
            <img
              src="https://img.shields.io/badge/FUTURO%20ROUBADO-417547?logo=redragon&logoColor=efefef&style=flat"
              alt="FUTURO ROUBADO"
            />
          </a>
          <a href="https://abusofederal.vercel.app" className='display-inline-block m-2'>
            <img
              src="https://img.shields.io/badge/ABUSO%20FEDERAL-00295b?logo=diagramsdotnet&logoColor=bf2b2b&style=flat"
              alt="ABUSO FEDERAL"
            />
          </a>
      </div>
    </footer>   
  );
};

export default Badges;