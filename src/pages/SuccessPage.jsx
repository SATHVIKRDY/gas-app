import { useNavigate } from 'react-router-dom';
import Whatsapp from '/public/whatsapp-logo.png';
import TickImg from '/public/tick.png';

export default function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="container success">
      <div className="checkmark"><img src={TickImg}/></div>
      <h2>Success!</h2>
      <p>Thank you for submitting your request. Our support team will get in touch with you to activate your profile.</p>
      <button className="last-btn" onClick={() => navigate('/')}>Sign In</button>
      <hr className='line'/>
      <p className="contact-us">Contact us on <img src={Whatsapp} alt='whatsapp logo' className="logo"/><span className="whatsapp">WhatsApp</span></p>
      <p className="contact-txt">contact our support team on whatsapp to activate your profile</p>
    </div>
  );
}
