import React, { useState }   from 'react';
import './style.css';

export default function GoldCalc() {

        const [goldrate, setGoldrate] = useState();
        const [invalid, setInvalid] = useState(false);
        const [wastage, setWastage] = useState();
        const [goldweight, setGoldweight] = useState();
        const [goldamount, setGoldamount] = useState(0);
        const [wastageamount, setWastageAmount] = useState(0);
        const [gstamount, setGstamount] = useState(0);
        const [totalamount, setTotalamount] = useState(0);
        const [wastageingram, setWastageingram] = useState(0);

        function getGoldAmount(){
            if(goldrate && goldweight){
                const goldAmount = goldrate * goldweight;
                const wastageAmount = (wastage/100)*goldAmount;
                const GSTAmount = 0.03*(goldAmount + wastageAmount);
                const totalAmount = goldAmount + wastageAmount + GSTAmount;
                const wastageinGram = (wastage/100)*goldweight;

                setGoldamount(goldAmount);
                setGstamount(GSTAmount);
                setTotalamount(totalAmount);
                setWastageAmount(wastageAmount);
                setWastageingram(wastageinGram);
            }else{
                setInvalid(true);
            }
        }

            return (
                <div className="App">
                    <h1 className="headerName">Gold Calculator</h1>
                    <form>
                        <div>
                            <label>Gold rate in &#x20b9;</label>
                            <input type="number" id="grate" name="grate" value={goldrate} onChange={e => setGoldrate(+e.target.value)}/>
                        </div>
                        <div>
                            <label>Gold Weight in grams</label>
                            <input type="number" id="gweight" name="gweight" value={goldweight} onChange={e => setGoldweight(+e.target.value)}/>
                        </div>
                        <div>
                            <label>Wastage in %</label>
                            <input type="number" id="wastage" name="wastage" value={wastage} onChange={e => setWastage(+e.target.value)}/>
                        </div>
                        {invalid && <p className="invalidMessage"> ** Invalid input values **</p>}
                    </form>
                    <button className="button" onClick={getGoldAmount}>Calculate</button>

                    <table>
                        <tr>
                            <th>Description</th>
                            <th>Rate</th>
                        </tr>
                        <tr>
                            <td>Actual Gold Rate</td>
                            <td>&#x20b9;{goldamount}</td>
                        </tr>
                        <tr>
                            <td>Wastage in amount ({wastage}%)</td>
                            <td>&#x20b9;{Math.round(wastageamount)}</td>
                        </tr>
                        <tr>
                            <td>GST (3%)</td>
                            <td>&#x20b9;{Math.round(gstamount)}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>&#x20b9;{Math.round(totalamount)}</td>
                        </tr>
                    </table>
                    <div>
                        <p>*Wastage in grams: {wastageingram}</p>
                    </div>
                    <p className="footerNote">Developed based on indian gold market standards by <a href="https://github.com/jayasurya" target="_blank">Jayasurya</a> and <a href="https://github.com/yokesharun" target="_blank">Arun Yokesh</a></p>
                </div>

            );

}
