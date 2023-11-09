import { useEffect } from "react";

export const NotFound = () => {

  useEffect(() => {
    const oops = setTimeout(() => {
      window.location.replace("/");
    }, 5000);
    clearTimeout(oops);

  },[])
  
  return (
    <div className="error">
      <h1>404</h1>
      <h2>You Rocked a bit too hard!</h2>
      <p>Redirecting you to the homepage</p>
    </div>
  )
}