import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AcknowledgmentPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
  
    const formData = JSON.parse(localStorage.getItem("FormData"));
    if(formData){
      const { name, email, phoneNumber } = formData;
      const message = `Hello, I am ${name}. My email is ${email} and my phone number is ${phoneNumber}.`;
      const encodedURLMessage = encodeURIComponent(message);
      console.log("encodedURLMessage", encodedURLMessage)
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedURLMessage}`
      window.location.href=whatsappUrl;
      localStorage.removeItem("FormData");
    }else{
      navigate('/');
    }
  }, [navigate])
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-2">Thank You!</h1>
      <p>Your submission has been received. You are now being redirected to WhatsApp.</p>
    </div>
  );
};

export default AcknowledgmentPage;
