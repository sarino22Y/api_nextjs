"use client"

import React, { useEffect, useState } from 'react'
import axios from "axios";

// https://dumbstockapi.com/stock?exchanges=NYSE

const url = "https://dumbstockapi.com/stock?exchanges=NYSE";

const page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchData()

    return () => {
      // Nettoyage au demontage du composant
    }

  })
  return (
    <div>
      {loading ? (
        <p>Chargement...</p>
      ) : (
          <ul>
            { data && data.slice(0, 10).map((item: any) => (
                <li key={item.ticker}>
                  {item.ticker} - {item.name}
                </li>
              ))
            }
          </ul>
        )}
    </div>
  )
}

export default page