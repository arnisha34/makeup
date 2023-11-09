import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './partial views/footer.tsx'
import { Desktop } from './partial views/navs/desktop.tsx'
import { New } from './New.tsx';
import { Eyes } from './Eyes.tsx';
import { Nails } from './Nails.tsx';
import { Face } from './Face.tsx';
import { Sale } from './Sale.tsx';
import { Home } from './Home.tsx';

import { DataContext } from './DataContext.tsx'
import { Product } from './partial views/product.tsx'
import { NotFound } from './NotFound.tsx'
import { Mobile } from './partial views/navs/mobile.tsx'

type product_colorsType = {
  hex_value: string,
  colour_name: string,
}

export type dataProps = {
  id: number,
  brand: string,
  name: string,
  price: number,
  api_featured_image: string,
  product_colors: product_colorsType[],
  category: string,
  description: string,
  tag_list: [],
  product_type: string,
  created_at: string;
  updated_at: string;
}

export const App = () => {

  const [makeupData, setMakeupData] = useState<dataProps[]>([])
  
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const url = "http://makeup-api.herokuapp.com/api/v1/products.json";
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(url);
        const data = await response.json();
        setMakeupData(data)
        setIsLoading(false)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
}, []);

  return (
    <DataContext.Provider value={{isLoading, makeupData}}>
      <Desktop/>
      <Mobile />
      <main id="wrapper">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/eyes" element={<Eyes />} />
          <Route path="/nails" element={<Nails />} />
          <Route path="/face" element={<Face />} />
          <Route path="/sale" element={<Sale />} />
          {/* Better way to do this maybe using useRoutes or match params id */}
          <Route path="/:brand/:name" element={<Product />} />
          <Route path="new/:brand/:name" element={<Product />} />
          <Route path="eyes/:brand/:name" element={<Product />} />
          <Route path="nails/:brand/:name" element={<Product />} />
          <Route path="face/:brand/:name" element={<Product />} />
          <Route path="sale/:brand/:name" element={<Product />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </DataContext.Provider>
  )
}
