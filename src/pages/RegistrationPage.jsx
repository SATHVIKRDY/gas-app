import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegistrationPage() {
  const [role, setRole] = useState('Consumer');
  const [formData, setFormData] = useState({
    orgName: '',
    orgType: '',
    orgAddress: '',
    gstNumber: '',
    yourName: '',
    mobileNumber: ''
  });

  const navigate = useNavigate();

  const handleChange = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/success');
  };

  return (
    <div className="container">
      <h2>{role} Registration</h2>
      <p>Fill Following Details to Onboard</p>
      <h3>Are you a ?</h3>

      <div className="role-selector">
        <label>
          <input
            type="radio"
            value="Provider"
            checked={role === 'Provider'}
            onChange={() => setRole('Provider')}
          />
          Gas Provider
        </label>
        <label>
          <input
            type="radio"
            value="Consumer"
            checked={role === 'Consumer'}
            onChange={() => setRole('Consumer')}
          />
          Consumer
        </label>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="orgName">Organization Name</label>
          <input
            id="orgName"
            type="text"
            placeholder="Input text"
            value={formData.orgName}
            onChange={handleChange('orgName')}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="orgType">Organization Type</label>
          <select
            id="orgType"
            value={formData.orgType}
            onChange={handleChange('orgType')}
            required
          >
            <option value="">Organization Type</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
        </div>

        {role === 'Consumer' && (
          <div className="input-group">
            <label htmlFor="orgAddress">Organization Address</label>
            <input
              id="orgAddress"
              type="text"
              placeholder="Input text"
              value={formData.orgAddress}
              onChange={handleChange('orgAddress')}
              required
            />
          </div>
        )}

        {role === 'Provider' && (
          <div className="input-group">
            <label htmlFor="gstNumber">GST Number</label>
            <input
              id="gstNumber"
              type="text"
              placeholder="Input Number"
              value={formData.gstNumber}
              onChange={handleChange('gstNumber')}
              required
            />
          </div>
        )}

        <div className="input-group">
          <label htmlFor="yourName">Your Name</label>
          <input
            id="yourName"
            type="text"
            placeholder="Input text"
            value={formData.yourName}
            onChange={handleChange('yourName')}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            id="mobileNumber"
            type="tel"
            placeholder="Input Number"
            value={formData.mobileNumber}
            onChange={handleChange('mobileNumber')}
            required
          />
        </div>

        <button type="submit" className="primary-btn">Register</button>
      </form>
    </div>
  );
}