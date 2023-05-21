export {fetchCountries};
import Notiflix from 'notiflix';

async function fetchCountries(name) {
 try {
     const countries = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,flags,capital,population,languages`);
     if (!countries.ok) {
          throw new Error (Notiflix.Notify.failure("Oops, there is no country with that name"));
        }
   
     return countries.json();
 } catch (error) {
     console.log(error);
 }
};