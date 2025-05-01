import React from 'react';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const Prediction = () => {

  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState(null);
  const [formData, setFormData] = React.useState({
    // Blood Tests
    "CBC (Complete Blood Count)": "12.5",
    "LFT (Liver Function Test)": "25",
    "RFT (Renal Function Test)": "0.9",
    "Blood Glucose Test": "90",
    "Lipid Profile": "170",
    "Thyroid Function Test": "Normal",
    "HbA1c Test": "5.2",
    "PSA Test": "Normal",

    // Imaging
    "X-ray": "Normal",
    "MRI": "Normal",
    "CT Scan": "Normal",
    "Ultrasound": "Normal",
    "PET Scan": "Normal",
    "Mammography": "Normal",
    "Bone Density Test": "Normal",

    // Cardiac Tests
    "BP": "120/80",
    "Echocardiogram": "Normal",
    "ECG": "Normal",
    "Holter Monitor": "Normal",
    "Cardiac Stress Test": "Normal",
    "Angiography": "Normal",

    // Lung Function Tests
    "Pulmonary Function Test": "Normal",
    "COVID-19 Test": "Negative",
    "Mantoux Test (TB Test)": "Normal",
    "Intradermal Test": "Normal",

    // Eye Tests
    "Visual Acuity Test": "20/20",
    "Tonometry": "15 mmHg",
    "Retinal Examination": "Normal",
    "Slit-Lamp Examination": "Normal",

    // Ear Tests
    "Audiometry": "Normal",
    "Tympanometry": "Normal",
    "Otoacoustic Emissions Test": "Normal",
    "Auditory Brainstem Response (ABR)": "Normal",

    // Infectious Disease Tests
    "Blood Culture": "Negative",
    "HIV Test": "Negative",
    "Hepatitis Test": "Negative",
    "Sputum Test": "Negative",

    // Cancer Screenings
    "Pap Smear": "Normal",
    "Skin Biopsy": "Normal",
    "Colonoscopy": "Normal",
    "Endoscopy": "Normal",

    // Other Diagnostics
    "EEG": "Normal",
    "EMG": "Normal",
    "Urinalysis": "Normal",
    "Stool Test": "Normal",
    "Allergy Test": "Normal",
    "Genetic Testing": "Normal"
  });

  const handleChange = (value, name) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBpChange = (part, newValue) => {
    const [systolic = '', diastolic = ''] = formData.BP.split('/');
    const newBP = part === 'systolic' 
      ? `${newValue}/${diastolic}`
      : `${systolic}/${newValue}`;
    setFormData(prev => ({ ...prev, BP: newBP }));
  };

  const handleVisualAcuityChange = (part, newValue) => {
    const [left = '', right = ''] = formData["Visual Acuity Test"].split('/');
    const newVA = part === 'left' 
      ? `${newValue}/${right}`
      : `${left}/${newValue}`;
    setFormData(prev => ({ ...prev, "Visual Acuity Test": newVA }));
  };

  const handleTonometryChange = (e) => {
    const value = e.target.value.replace(/\D/g, '') || '0';
    setFormData(prev => ({ ...prev, "Tonometry": `${value} mmHg` }));
  };

  const formConfig = [
    // Blood Tests Section
    {
      title: "Blood Tests",
      fields: [
        { name: "CBC (Complete Blood Count)", type: "number" },
        { name: "LFT (Liver Function Test)", type: "number" },
        { name: "RFT (Renal Function Test)", type: "number" },
        { name: "Blood Glucose Test", type: "number" },
        { name: "Lipid Profile", type: "number" },
        { name: "Thyroid Function Test", type: "select", options: ["Normal", "Abnormal"] },
        { name: "HbA1c Test", type: "number" },
        { name: "PSA Test", type: "select", options: ["Normal", "Abnormal"] }
      ]
    },
    // Imaging Studies Section
    {
      title: "Imaging Studies",
      fields: [
        { name: "X-ray", type: "select", options: ["Normal", "Abnormal"] },
        { name: "MRI", type: "select", options: ["Normal", "Abnormal"] },
        { name: "CT Scan", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Ultrasound", type: "select", options: ["Normal", "Abnormal"] },
        { name: "PET Scan", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Mammography", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Bone Density Test", type: "select", options: ["Normal", "Abnormal"] }
      ]
    },
    // Cardiac Tests Section
    {
      title: "Cardiac Tests",
      fields: [
        { 
          type: "custom", 
          component: (
            <div className="input-group-slash">
              <Input
                variant="soft"
                type="number"
                value={formData.BP.split('/')[0] || ''}
                onChange={(e) => handleBpChange('systolic', e.target.value)}
              />
              <span>/</span>
              <Input
                variant="soft"
                type="number"
                value={formData.BP.split('/')[1] || ''}
                onChange={(e) => handleBpChange('diastolic', e.target.value)}
              />
            </div>
          ),
          label: "BP"
        },
        { name: "Echocardiogram", type: "select", options: ["Normal", "Abnormal"] },
        { name: "ECG", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Holter Monitor", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Cardiac Stress Test", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Angiography", type: "select", options: ["Normal", "Abnormal"] }
      ]
    },
    // Lung Function Tests Section
    {
      title: "Lung Function Tests",
      fields: [
        { name: "Pulmonary Function Test", type: "select", options: ["Normal", "Abnormal"] },
        { name: "COVID-19 Test", type: "select", options: ["Negative", "Positive"] },
        { name: "Mantoux Test (TB Test)", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Intradermal Test", type: "select", options: ["Normal", "Abnormal"] }
      ]
    },
    // Eye Tests Section
    {
      title: "Eye Tests",
      fields: [
        { 
          type: "custom",
          component: (
            <div className="input-group-slash">
              <Input
                variant="soft"
                type="number"
                value={formData["Visual Acuity Test"].split('/')[0] || ''}
                onChange={(e) => handleVisualAcuityChange('left', e.target.value)}
              />
              <span>/</span>
              <Input
                variant="soft"
                type="number"
                value={formData["Visual Acuity Test"].split('/')[1] || ''}
                onChange={(e) => handleVisualAcuityChange('right', e.target.value)}
              />
            </div>
          ),
          label: "Visual Acuity Test"
        },
        { 
          type: "custom",
          component: (
            <Input
              variant="soft"
              type="number"
              value={formData.Tonometry.replace(' mmHg', '')}
              onChange={handleTonometryChange}
              endDecorator="mmHg"
            />
          ),
          label: "Tonometry"
        },
        { name: "Retinal Examination", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Slit-Lamp Examination", type: "select", options: ["Normal", "Abnormal"] }
      ]
    },
    // Ear Tests Section
    {
      title: "Ear Tests",
      fields: [
        { name: "Audiometry", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Tympanometry", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Otoacoustic Emissions Test", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Auditory Brainstem Response (ABR)", type: "select", options: ["Normal", "Abnormal"] }
      ]
    },
    // Infectious Disease Tests Section
    {
      title: "Infectious Disease Tests",
      fields: [
        { name: "Blood Culture", type: "select", options: ["Negative", "Positive"] },
        { name: "HIV Test", type: "select", options: ["Negative", "Positive"] },
        { name: "Hepatitis Test", type: "select", options: ["Negative", "Positive"] },
        { name: "Sputum Test", type: "select", options: ["Negative", "Positive"] }
      ]
    },
    // Cancer Screenings Section
    {
      title: "Cancer Screenings",
      fields: [
        { name: "Pap Smear", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Skin Biopsy", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Colonoscopy", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Endoscopy", type: "select", options: ["Normal", "Abnormal"] }
      ]
    },
    // Other Diagnostics Section
    {
      title: "Other Diagnostics",
      fields: [
        { name: "EEG", type: "select", options: ["Normal", "Abnormal"] },
        { name: "EMG", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Urinalysis", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Stool Test", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Allergy Test", type: "select", options: ["Normal", "Abnormal"] },
        { name: "Genetic Testing", type: "select", options: ["Normal", "Abnormal"] }
      ]
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Static demo data
    setResults({
      count: 2,
      diseases: ['Hypertension', 'Type 2 Diabetes']
    });
    
    setLoading(false);
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
                      {field.options.map((option) => (
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
        <div className="submit-section">
          <button type="submit">Submit All Results</button>
        </div>
      </form>

      {results || loading ? (
        <div className="results-section">
          {loading ? (
            <div className="shimmer-loading">
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
            </div>
          ) : (
            <div className="results-content">
              <h3>Health Assessment Results</h3>
              <div className="results-summary">
                <p>Potential conditions detected: <strong>{results.count}</strong></p>
                <div className="disease-list">
                  <p>Possible conditions:</p>
                  <ul>
                    {results.diseases.map((disease, index) => (
                      <li key={index}>{disease}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : null}

    </div>
  );
};

export default Prediction;