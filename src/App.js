import React,{useState}  from 'react';
import { IntlProvider, FormattedMessage } from "react-intl";

const messages = {
  en: {
    greeting: "Hello {name}! How are you?",
    time: "The time is {t, time, short}.",
    date: "The date is {d, date}."
  },
  es: {
    greeting: "¡Hola {name}! ¿Cómo estás?",
    time: "La hora es {t, time, short}.",
    date: "La fecha es {d, date}."
  },
}


export default function App(){
 
  const [locale, setLocale] = useState("en");
 
  const handleSelect = e => {
    setLocale(e.target.value);
  };
 

  return (
    <>
    
      <select onChange={handleSelect} defaultValue={locale}>
        {["en", "es"].map(l => (
          <option key={l}>{l}</option>
        ))}
      </select>

      <IntlProvider locale={locale} messages={messages[locale]}>
        <p>
          <FormattedMessage id="greeting" />
         
         
        </p>
      </IntlProvider>
    </>
  )
}