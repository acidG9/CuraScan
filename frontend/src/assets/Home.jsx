
const Home = () => {
    return (
        <div className="home-container">

            <div className="home-div-1">
                <div className="hd11">
                    <h2>✨ Predict</h2>
                    <h2>🔒 Prevent ⚙️ Prepare</h2>
                    <h3>Your AI Companion for Early Diagnosis</h3>
                    <p>Cura Scan helps you stay one step ahead of your health by using cutting-edge AI to analyze 
                       your symptoms and lab report values. Whether you're checking for early signs or just curious 
                       about your well-being, Cura Scan offers accurate, fast, and informative predictions—empowering 
                       you to make better health decisions before it's too late.
                    </p>
                </div>
                <div></div>
                <div className="hd12">
                    <img className="home_1" src="home_1.jpg" alt="home_1" />
                </div>
            </div>

            <div className="home-div-2">
                <div className="hd21">
                    <h2>🚀 The Future of Diagnosis Is Instant</h2>
                    <h3>Instant Medical Insights, Powered by Next-Gen AI</h3>
                    <p>Imagine a hospital where test machines are directly integrated with our AI — the moment a lab test 
                       is completed, Cura Scan analyzes the data and instantly detects possible diseases, eliminating long wait times.<br />
                       Not only that, it suggests the right doctor and treatment path, empowering healthcare providers to take action immediately.
                    </p>
                </div>
                <div className="hd22">
                    <img className="home_2" src="home_2.jpg" alt="home_2" />
                </div>
                <div></div>
            </div>

            <div className="home-div-3">
                <h1>Still Wondering Why CuraScan?</h1>
                <div className="hd31">
                    <div className="hd311">
                        <img src="ai.jpg" alt="ai" />
                    </div>
                    <div className="hd312">
                        <h2>Model Intelligence – Hybrid AI for Maximum Accuracy</h2>
                        <p>
                          Cura Scan uses advanced models for different data types: <br />
                          • Random Forest – For large-scale data and multi-disease prediction. <br />
                          • CNNs – For analyzing image data like X-rays and MRIs. <br />
                          • XGBoost – For fast, accurate classification and regression. <br />
                          Together, they ensure high-speed, high-precision detection of 100+ diseases.
                        </p>
                    </div>
                </div>
                <div className="hd31">
                    <div className="hd311">
                        <img src="prediction.gif" alt="prediction" />
                    </div>
                    <div className="hd312">
                        <h2>AI-powered prediction</h2>
                        <p>At Cura Scan, our AI model is built to streamline healthcare diagnostics at scale. By simply maintaining patient information 
                           and inputting test results, our system takes care of the rest — analyzing data, detecting all possible diseases, and even recommending 
                           the right doctor and treatment path. With powerful data integration and prediction capabilities, Cura Scan delivers high-accuracy results 
                           across large datasets instantly, making diagnosis smarter, faster, and more accessible than ever.
                        </p>
                    </div>
                </div>
                <div className="hd31">
                    <div className="hd311">
                        <img src="data.jpeg" alt="data" />
                    </div>
                    <div className="hd312">
                        <h2>The Data That Powers CuraScan</h2>
                        <p>Our AI is trained on a massive dataset of 100,000+ medical records, covering: <br />
                           • 100+ unique diseases <br />
                           • 50+ types of clinical tests <br />
                           • 1,000+ real patient samples per disease <br />
                           Every data point is based on authentic clinical values, giving Cura Scan real-world insight into complex diagnostic patterns.
                        </p>
                    </div>
                </div>
            </div>

            <div className="home-div-4">
                <div className="hd41">
                    <h2>⏱️ Time to Diagnose</h2>
                    <button>Start Now!</button>
                </div>
                <div></div>
                <div className="hd42">
                    <img className="home_3" src="home_3.jpg" alt="home_3" />
                </div>
            </div>

        </div>
    );
};

export default Home;