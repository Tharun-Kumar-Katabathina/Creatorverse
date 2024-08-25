import React, { useEffect, useState } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';
import { Link } from 'react-router-dom';

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from('creators').select('*');
      setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-4">
      <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="bg-green-400 text-4xl font-extrabold text-gray-900 text-center mb-8">Creatorverse</h1>
        <div className="flex justify-end mb-6">
          <Link
            to="/add"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out"
          >
            Add New Creator
          </Link>
        </div>
        <div className="bg-yellow-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {creators.length > 0 ? (
            creators.map(creator => (
              <CreatorCard key={creator.id} creator={creator} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">No creators found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowCreators;
