import React, { useState }   from 'react';
import './style.css';

export default function GoldCalc() {

        const [goldrate, setGoldrate] = useState();
        const [wastage, setWastage] = useState();
        const [goldweight, setGoldweight] = useState();
        const [goldamount, setGoldamount] = useState(0);
        const [wastageamount, setWastageAmount] = useState(0);
        const [gstamount, setGstamount] = useState(0);
        const [totalamount, setTotalamount] = useState(0);
        const [wastageingram, setWastageingram] = useState(0);

        function getGoldAmount(){
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
        }

            return (
                <div className="App">
                    <h2>Gold Calculator</h2>
                    <form>
                        <div>
                            <label>Gold rate</label>
                            <input type="number" id="grate" name="grate" value={goldrate} onChange={e => setGoldrate(+e.target.value)}/>
                        </div>
                        <div>
                            <label>Gold Weight</label>
                            <input type="number" id="gweight" name="gweight" value={goldweight} onChange={e => setGoldweight(+e.target.value)}/>
                        </div>
                        <div>
                            <label>Wastage in %</label>
                            <input type="number" id="wastage" name="wastage" value={wastage} onChange={e => setWastage(+e.target.value)}/>
                        </div>
                    </form>
                    <button className="button" onClick={getGoldAmount}>Calculate</button>

                    <table>
                        <tr>
                            <th>Description</th>
                            <th>Rate</th>
                        </tr>
                        <tr>
                            <td>Actual Gold Rate</td>
                            <td>{goldamount}</td>
                        </tr>
                        <tr>
                            <td>Wastage in amount ({wastage}%)</td>
                            <td>{wastageamount}</td>
                        </tr>
                        <tr>
                            <td>GST (3%)</td>
                            <td>{gstamount}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>{totalamount}</td>
                        </tr>
                    </table>
                    <div>
                        <p>*Wastage in grams: {wastageingram}</p>
                    </div>

                </div>

            );

}
