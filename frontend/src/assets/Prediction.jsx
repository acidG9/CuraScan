import React from 'react';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Textarea from '@mui/joy/Textarea';
import API from '../axios';

const Prediction = () => {
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState(null);
  const [freeSymptoms, setFreeSymptoms] = React.useState('');
  const [formData, setFormData] = React.useState({
    "Age": "30",
    "Gender": "Male",
    "Weight (kg)": "70",
    "Height (cm)": "170",
    "Smoking": "No",
    "Alcohol Consumption": "No",
    "Blood Pressure": "120/80",
    "Blood Glucose": "90",
    "Cholesterol": "180",
    "Heart Rate": "72",
    "Body Temperature": "98.6",
    "Urinalysis": "Normal",
    "Liver Function Test": "Normal",
    "Kidney Function Test": "Normal",
    "COVID-19 Test": "Negative",
    "HIV Test": "Negative",
    "ECG": "Normal",
    "X-ray": "Normal"
  });

  const handleChange = (value, name) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBPChange = (part, newValue) => {
    const [systolic = '', diastolic = ''] = formData["Blood Pressure"].split('/');
    const newBP = part === 'systolic'
      ? `${newValue}/${diastolic}`
      : `${systolic}/${newValue}`;
    setFormData(prev => ({ ...prev, "Blood Pressure": newBP }));
  };

  const formConfig = [
    {
      title: "Personal Information",
      fields: [
        { name: "Age", type: "number" },
        { name: "Gender", type: "select", options: ["Male", "Female", "Other"] },
        { name: "Weight (kg)", type: "number" },
        { name: "Height (cm)", type: "number" },
        { name: "Smoking", type: "select", options: ["Yes", "No", "Occasionally"] },
        { name: "Alcohol Consumption", type: "select", options: ["Yes", "No", "Occasionally"] }
      ]
    },
    {
      title: "Vital Signs",
      fields: [
        {
          type: "custom",
          label: "Blood Pressure",
          component: (
            <div className="input-group-slash">
              <Input
                variant="soft"
                type="number"
                value={formData["Blood Pressure"].split('/')[0] || ''}
                onChange={(e) => handleBPChange('systolic', e.target.value)}
              />
              <span>/</span>
              <Input
                variant="soft"
                type="number"
                value={formData["Blood Pressure"].split('/')[1] || ''}
                onChange={(e) => handleBPChange('diastolic', e.target.value)}
              />
            </div>
          )
        },
        { name: "Heart Rate", type: "number" },
        { name: "Body Temperature", type: "number" }
      ]
    },
    {
      title: "Common Lab Tests",
      fields: [
        { name: "Blood Glucose", type: "number" },
        { name: "Cholesterol", type: "number" },
        { name: "Urinalysis", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Liver Function Test", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Kidney Function Test", type: "select", options: ["Normal", "Abnormal"] }
      ]
    },
    {
      title: "Infection Screening",
      fields: [
        { name: "COVID-19 Test", type: "select", options: ["Negative", "Positive"] },
        { name: "HIV Test", type: "select", options: ["Negative", "Positive"] }
      ]
    },
    {
      title: "Imaging & Diagnostics",
      fields: [
        { name: "ECG", type: "select", options: ["Normal", "Abnormal"] },
        { name: "X-ray", type: "select", options: ["Normal", "Abnormal"] }
      ]
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      ...formData,
      Symptoms: freeSymptoms
    };

    try {
      const response = await fetch('https://vaishnavakshansh.pythonanywhere.com/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error:', error);
      setResults({ error: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    const nickname = prompt("Enter a nickname for this diagnosis:");
    if (!nickname) return;

    try {
      await API.post('/history/add', {
        nickname,
        request: {
          ...formData,
          Symptoms: freeSymptoms
        },
        response: results,
        timestamp: new Date().toISOString()
      });

      alert("Diagnosis saved successfully.");
    } catch (err) {
      console.error("Save error:", err);
      alert("Failed to save diagnosis.");
    }
  };

  return (
    <div className="prediction-container">
      <form onSubmit={handleSubmit}>
        {formConfig.map((section) => (
          <div className="form-section" key={section.title}>
            <h3>{section.title}</h3>
            <div className="input-group">
              {section.fields.map((field, index) => (
                <div className="input-item" key={field.name || index}>
                  <label>{field.label || field.name}</label>
                  {field.type === 'select' ? (
                    <Select
                      value={formData[field.name]}
                      onChange={(_, value) => handleChange(value, field.name)}
                      variant="soft"
                    >
                      {field.options.map(option => (
                        <Option key={option} value={option}>{option}</Option>
                      ))}
                    </Select>
                  ) : field.type === 'custom' ? (
                    field.component
                  ) : (
                    <Input
                      variant="soft"
                      type={field.type}
                      value={formData[field.name]}
                      onChange={(e) => handleChange(e.target.value, field.name)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="form-section">
          <h3>Additional Symptoms</h3>
          <div className="input-item">
            <label>Describe any symptoms not listed above:</label>
            <Textarea
              variant="soft"
              minRows={3}
              value={freeSymptoms}
              onChange={(e) => setFreeSymptoms(e.target.value)}
            />
          </div>
        </div>

        <div className="submit-section">
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit All Results"}
          </button>
        </div>
      </form>

      {results && (
        <div className="results-section">
          {results.error ? (
            <p className="error">{results.error}</p>
          ) : (
            <div className="results-content">
              <h3>Health Assessment Results</h3>
              <p>Potential Conditions: <strong>{results.diseases?.length || 0}</strong></p>
              {results.diseases?.length > 0 && (
                <ul className="disease-list">
                  {results.diseases.map((disease, idx) => (
                    <li key={idx}>{disease}</li>
                  ))}
                </ul>
              )}
              {results.recommended_doctor && (
                <p><strong>Recommended Doctor:</strong> {results.recommended_doctor}</p>
              )}
              <button className="save-btn" onClick={handleSave}>
                Save the Data
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Prediction;
