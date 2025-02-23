import  { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postapi'
import Loader from '../UI/Loader'
import { CountryCard } from '../layout/Countrycard'
import SearchFilter from '../UI/SearchFilter'

const Country = () => {
  const [isPending, startTransition] = useTransition()
  const [country,setcountry]=useState([])
  const [search,setSearch]=useState()
  const [filter,setFilter]=useState("all")

  useEffect(()=>{
    startTransition(async()=>{
      const res=await getCountryData();
      setcountry(res.data)
      
    });
  },[]);
  if(isPending) return <Loader/>

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = country.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );
  

  return (
    <section className='country-section'>
      <SearchFilter
      search={search}
      setSearch={setSearch}
      filter={filter}
      setFilter={setFilter}/>
      <ul className='grid grid-four-cols'>
        {filterCountries.map((curcountry,index)=>{
          return <CountryCard country={curcountry} key={index}/>
        })}
      </ul>
    </section>
  )
}

export default Country
