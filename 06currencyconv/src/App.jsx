import { useState } from 'react'
import InputBox from './components/Inputbox'
import UseCurrencyInfo from './hooks/UseCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0)
  const[from,setFrom] = useState('usd')
  const[to,setTo] = useState('inr')
  const[convertedAmount, setConvertedAmount] = useState(0)

  const CurrencyInfo = UseCurrencyInfo(from)

  const options = Object.keys(CurrencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
  }

  const convert = () => {
  setConvertedAmount(amount* CurrencyInfo[to])}

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
              backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D)`,
      }}
   >
    <div className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                   e.preventDefault();
                       convert();    
                       
                  }}
            >
              <div className="w-full mb-1">
              <InputBox
                  label="From"
                     amount={amount}
                     currencyOptions={options}
                     onCurrencyChange={(currency) => setFrom(currency)} 
                     onAmountChange={(amount) => setAmount(amount)}    
                     selectedCurrency={from}    
               />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                         type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button> 
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}   
                                selectedCurrency={to}
                                amountDisabled={true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert { from } to { to }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
