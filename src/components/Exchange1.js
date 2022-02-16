import React from 'react'

class Exchange1 extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
          rates: {},
          DataisLoaded: false
        };
    }

        componentDidMount() {        
            fetch(
              "https://v6.exchangerate-api.com/v6/4594ac44a84b4517180410e8/latest/USD"
            )
              .then((res) => res.json())
              .then((data) =>  {
                console.log(data.conversion_rates);
                // const rate = data.conversion_rates[currency_two];
                // rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
                this.setState({
                  rates: data.conversion_rates,
                  DataisLoaded: true
                })
              })
              .catch((error) => {
                  console.log(error)
              })
          }
          render() {
              const {rates, DataisLoaded} = this.state;
              if (!DataisLoaded) return <div> 
                <h4> Data is Loading ...... </h4>  </div>    
              
            //   const currencyEl_one = document.getElementById("currency-one");
            //   const amountEl_one = document.getElementById("amount-one");
            //   const currencyEl_two = document.getElementById("currency-two");
            //   const amountEl_two = document.getElementById("amount-two");
        
            //   const rateEl = document.getElementById("rate");
            //   const swap = document.getElementById("swap");
        
              // Fetch exchange rates and update the DOM
              // function caclulate() {
              //   const currency_one = currencyEl_one.value;
              //   const currency_two = currencyEl_two.value;
              
              //   rateEl.innerText = `1 ${currency_one} = ${this.state.rate} ${currency_two}`;
        
              //   amountEl_two.value = (amountEl_one.value * this.state.rate).toFixed(2);
              // };
        
              // Event listeners
              // currencyEl_one.addEventListener("change", caclulate);
              // amountEl_one.addEventListener("input", caclulate);
              // currencyEl_two.addEventListener("change", caclulate);
              // amountEl_two.addEventListener("input", caclulate);
        
              // function swap2() {
              //   const temp = currencyEl_one.value;
              //   currencyEl_one.value = currencyEl_two.value;
              //   currencyEl_two.value = temp;
              //   // caclulate();
              // }
        
              // caclulate();
            
            //   function showRate() {
        
            //   }
        
              function calculate() {
                // const currencyEl_one = document.getElementById("currency-one");
                // const currencyEl_two = document.getElementById("currency-two");
                // const currency_one = currencyEl_one.value;
                // const currency_two = currencyEl_two.value;
                // const rateEl = document.getElementById("rate");
                // const rate = this.state.rates[currency_two];
                // rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
              }
              
            return (
              <>
                  <div className="App">
                    <img src={require("../images/money.png")} alt="dollar" className="money-img" />
                    <h1>Currency Exchange Rate Calculator</h1>
                    <p>Please choose the currencies and the amounts to get the exchange rate</p>
                  </div>
        
                  <div className="container">
                    <div className="currency">
                            <select id="currency-one">
                              <option value="USD">USD</option>
                            </select>
                            <input type="number" id="amount-one" placeholder="0" value="1" />
                      </div>
                      <div className="swap-rate-container">
                        <button className="btn" id="swap" onChange={((e) => e.target.value)}>
                          Swap
                        </button>
                        <div className="currency" id="rate" onChange={calculate}>{rates.currency_two}</div>
                      </div>
        
                      <div className="currency">
                      <select id="currency-two" value="currency-two" onChange={calculate}>
                              <option value="AED">AED</option>
                              <option value="AFN">AFN</option>
                              <option value="ALL">ALL</option>
                              <option value="AMD">AMD</option>
                              <option value="ANG">ANG</option>
                              <option value="AOA">AOA</option>
                              <option value="ARS">ARS</option>
                              <option value="AUD">AUD</option>
                              <option value="AWG">AWG</option>
                              <option value="AZN">AZN</option>
                              <option value="BAM">BAM</option>
                              <option value="BBD">BBD</option>
                              <option value="BDT">BDT</option>
                              <option value="BGN">BGN</option>
                              <option value="BHD">BHD</option>
                              <option value="BIF">BIF</option>
                              <option value="BMD">BMD</option>
                              <option value="BND">BND</option>
                              <option value="BOB">BOB</option>
                              <option value="BRL">BRL</option>
                              <option value="BSD">BSD</option>
                              <option value="BTN">BTN</option>
                              <option value="BWP">BWP</option>
                              <option value="BYN">BYN</option>
                              <option value="BZD">BZD</option>
                              <option value="CAD">CAD</option>
                              <option value="CDF">CDF</option>
                              <option value="CHF">CHF</option>
                              <option value="CLP">CLP</option>
                              <option value="CNY">CNY</option>
                              <option value="COP">COP</option>
                              <option value="CRC">CRC</option>
                              <option value="CUP">CUP</option>
                              <option value="CVE">CVE</option>
                              <option value="CZK">CZK</option>
                              <option value="DJF">DJF</option>
                              <option value="DKK">DKK</option>
                              <option value="DOP">DOP</option>
                              <option value="DZD">DZD</option>
                              <option value="EGP">EGP</option>
                              <option value="ERN">ERN</option>
                              <option value="ETB">ETB</option>
                              <option value="EUR">EUR</option>
                              <option value="FJD">FJD</option>
                              <option value="FKP">FKP</option>
                              <option value="FOK">FOK</option>
                              <option value="GBP">GBP</option>
                              <option value="GEL">GEL</option>
                              <option value="GGP">GGP</option>
                              <option value="GHS">GHS</option>
                              <option value="GIP">GIP</option>
                              <option value="GMD">GMD</option>
                              <option value="GNF">GNF</option>
                              <option value="GTQ">GTQ</option>
                              <option value="GYD">GYD</option>
                              <option value="HKD">HKD</option>
                              <option value="HNL">HNL</option>
                              <option value="HRK">HRK</option>
                              <option value="HTG">HTG</option>
                              <option value="HUF">HUF</option>
                              <option value="IDR">IDR</option>
                              <option value="ILS">ILS</option>
                              <option value="IMP">IMP</option>
                              <option value="INR">INR</option>
                              <option value="IQD">IQD</option>
                              <option value="IRR">IRR</option>
                              <option value="ISK">ISK</option>
                              <option value="JEP">JEP</option>
                              <option value="JMD">JMD</option>
                              <option value="JOD">JOD</option>
                              <option value="JPY">JPY</option>
                              <option value="KES">KES</option>
                              <option value="KGS">KGS</option>
                              <option value="KHR">KHR</option>
                              <option value="KID">KID</option>
                              <option value="KMF">KMF</option>
                              <option value="KRW">KRW</option>
                              <option value="KWD">KWD</option>
                              <option value="KYD">KYD</option>
                              <option value="KZT">KZT</option>
                              <option value="LAK">LAK</option>
                              <option value="LBP">LBP</option>
                              <option value="LKR">LKR</option>
                              <option value="LRD">LRD</option>
                              <option value="LSL">LSL</option>
                              <option value="LYD">LYD</option>
                              <option value="MAD">MAD</option>
                              <option value="MDL">MDL</option>
                              <option value="MGA">MGA</option>
                              <option value="MKD">MKD</option>
                              <option value="MMK">MMK</option>
                              <option value="MNT">MNT</option>
                              <option value="MOP">MOP</option>
                              <option value="MRU">MRU</option>
                              <option value="MUR">MUR</option>
                              <option value="MVR">MVR</option>
                              <option value="MWK">MWK</option>
                              <option value="MXN">MXN</option>
                              <option value="MYR">MYR</option>
                              <option value="MZN">MZN</option>
                              <option value="NAD">NAD</option>
                              <option value="NGN">NGN</option>
                              <option value="NIO">NIO</option>
                              <option value="NOK">NOK</option>
                              <option value="NPR">NPR</option>
                              <option value="NZD">NZD</option>
                              <option value="OMR">OMR</option>
                              <option value="PAB">PAB</option>
                              <option value="PEN">PEN</option>
                              <option value="PGK">PGK</option>
                              <option value="PHP">PHP</option>
                              <option value="PKR" selected>PKR"</option>
                              <option value="PLN">PLN</option>
                              <option value="PYG">PYG</option>
                              <option value="QAR">QAR</option>
                              <option value="RON">RON</option>
                              <option value="RSD">RSD</option>
                              <option value="RUB">RUB</option>
                              <option value="RWF">RWF</option>
                              <option value="SAR">SAR</option>
                              <option value="SBD">SBD</option>
                              <option value="SCR">SCR</option>
                              <option value="SDG">SDG</option>
                              <option value="SEK">SEK</option>
                              <option value="SGD">SGD</option>
                              <option value="SHP">SHP</option>
                              <option value="SLL">SLL</option>
                              <option value="SOS">SOS</option>
                              <option value="SRD">SRD</option>
                              <option value="SSP">SSP</option>
                              <option value="STN">STN</option>
                              <option value="SYP">SYP</option>
                              <option value="SZL">SZL</option>
                              <option value="THB">THB</option>
                              <option value="TJS">TJS</option>
                              <option value="TMT">TMT</option>
                              <option value="TND">TND</option>
                              <option value="TOP">TOP</option>
                              <option value="TRY">TRY</option>
                              <option value="TTD">TTD</option>
                              <option value="TVD">TVD</option>
                              <option value="TWD">TWD</option>
                              <option value="TZS">TZS</option>
                              <option value="UAH">UAH</option>
                              <option value="UGX">UGX</option>
                              <option value="USD">USD</option>
                              <option value="UYU">UYU</option>
                              <option value="UZS">UZS</option>
                              <option value="VES">VES</option>
                              <option value="VND">VND</option>
                              <option value="VUV">VUV</option>
                              <option value="WST">WST</option>
                              <option value="XAF">XAF</option>
                              <option value="XCD">XCD</option>
                              <option value="XDR">XDR</option>
                              <option value="XOF">XOF</option>
                              <option value="XPF">XPF</option>
                              <option value="YER">YER</option>
                              <option value="ZAR">ZAR</option>
                              <option value="ZMW">ZMW</option>
                              <option value="ZWL">ZWL</option>
                      </select>
                          <input type="number" id="amount-two" placeholder={rates.currency_two} />
                            <div></div>
                         
                      </div>
                    </div>
              </>
            );
          }
        }
    

export default Exchange1;        

