import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select('*').eq('id', id).single();
      setCreator(data);
    };
    fetchCreator();
  }, [id]);

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        {creator ? (
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{creator.name}</h1>
            <p className="text-gray-800 mb-4 text-lg">{creator.description}</p>
            <a
              href={creator.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-lg"
            >
              Visit {creator.name}'s page
            </a>
            {creator.imageURL && (
              <img
                src={creator.imageURL}
                alt={`${creator.name}`}
                className="w-full h-auto rounded-lg mt-4 border border-gray-200"
              />
            )}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default ViewCreator;
