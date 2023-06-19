import './app.scss';
import React from 'react';
import { Button, Space } from 'antd';
import { AppBar, Toolbar, Typography, Container, Grid, Paper } from '@mui/material';
import {MDCSwitch} from '@material/switch';
import {MDCRipple} from '@material/ripple';
// import {MDCMenu} from '@material/menu';

const Dashboard = () => {
   return 

 
   <div class="mdc-data-table">
   <div class="mdc-data-table__table-container">
     <table class="mdc-data-table__table" aria-label="Dessert calories">
       <thead>
         <tr class="mdc-data-table__header-row">
           <th class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox" role="columnheader" scope="col">
             <div class="mdc-checkbox mdc-data-table__header-row-checkbox mdc-checkbox--selected">
               <input type="checkbox" class="mdc-checkbox__native-control" aria-label="Toggle all rows"/>
               <div class="mdc-checkbox__background">
                 <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                   <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                 </svg>
                 <div class="mdc-checkbox__mixedmark"></div>
               </div>
               <div class="mdc-checkbox__ripple"></div>
             </div>
           </th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Status</th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">compaign name</th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Info</th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Automation</th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Dayparting</th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Budget</th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">BiddingStrategy</th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Spend</th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Revenue</th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Current Bid</th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">ACOS</th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">orders</th> {/* small words la erukanum*/}
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Impression</th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">CTR</th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col">conv rate</th> {/*small letters la erukanum*/}
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col"></th>
           <th class="mdc-data-table__header-cell" role="columnheader" scope="col"></th>
         </tr>
       </thead>
       <tbody class="mdc-data-table__content">
         <tr data-row-id="u0" class="mdc-data-table__row">
           <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
             <div class="mdc-checkbox mdc-data-table__row-checkbox">
               <input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby="u0"/>
               <div class="mdc-checkbox__background">
                 <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                   <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                 </svg>
                 <div class="mdc-checkbox__mixedmark"></div>
               </div>
               <div class="mdc-checkbox__ripple"></div>
             </div>
           </td>
           <th class="mdc-data-table__cell"></th>
           <td class="mdc-data-table__cell" scope="row" id="u0">Maxima Twin</td>
           <td class="mdc-data-table__cell">
            <button class="mdc-button mdc-button--raised">
             <span class="mdc-button__label">M</span>
             </button><button class="mdc-button mdc-button--raised">
             <span class="mdc-button__label">SP</span>
             </button><button class="mdc-button mdc-button--raised">
             <span class="mdc-button__label">KT</span>
             </button></td>
           <td class="mdc-data-table__cell"></td>
           <td class="mdc-data-table__cell"></td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$7,099</td>
           <td class="mdc-data-table__cell">
            <div style={{color : "blue"}}><u>up & down</u></div>
           </td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$7,099</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$7,099</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$9</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">298%</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">34</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.5K</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.5K</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">1.5%</td>
         </tr>
         <tr data-row-id="u1" class="mdc-data-table__row">
           <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
             <div class="mdc-checkbox mdc-data-table__row-checkbox">
               <input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby="u1"/>
               <div class="mdc-checkbox__background">
                 <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                   <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                 </svg>
                 <div class="mdc-checkbox__mixedmark"></div>
               </div>
               <div class="mdc-checkbox__ripple"></div>
             </div>
           </td>
           <th class="mdc-data-table__cell"></th>
           <td class="mdc-data-table__cell" scope="row" id="u1">Aplha Bed Frames</td>
           <td class="mdc-data-table__cell"> <button class="mdc-button mdc-button--raised">
             <span class="mdc-button__label">M</span>
             </button><button class="mdc-button mdc-button--raised">
             <span class="mdc-button__label">SP</span>
             </button><button class="mdc-button mdc-button--raised">
             <span class="mdc-button__label">KT</span>
             </button></td>
           <td class="mdc-data-table__cell"></td>
           <td class="mdc-data-table__cell"></td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$12,805</td>
           <td class="mdc-data-table__cell">
           <div style={{color : "blue"}}><u>up & down</u></div>
           </td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$12,805</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$12,805</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$9</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">145%</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">453</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">12K</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">12K</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.5%</td>
         </tr>
         <tr data-row-id="u2" class="mdc-data-table__row">
           <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
             <div class="mdc-checkbox mdc-data-table__row-checkbox">
               <input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby="u2"/>
               <div class="mdc-checkbox__background">
                 <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                   <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                 </svg>
                 <div class="mdc-checkbox__mixedmark"></div>
               </div>
               <div class="mdc-checkbox__ripple"></div>
             </div>
           </td>
           <th class="mdc-data-table__cell"></th>
           <td class="mdc-data-table__cell" scope="row" id="u2">Mattress</td>
           <td class="mdc-data-table__cell"> <button class="mdc-button mdc-button--raised">
             <span class="mdc-button__label">M</span>
             </button><button class="mdc-button mdc-button--raised">
             <span class="mdc-button__label">SP</span>
             </button><button class="mdc-button mdc-button--raised">
             <span class="mdc-button__label">KT</span>
             </button></td>
           <td class="mdc-data-table__cell"></td>
           <td class="mdc-data-table__cell"></td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$57,804</td>
           <td class="mdc-data-table__cell">
           <div style={{color : "blue"}}><u>up</u></div>
           </td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$57,804</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$57,804</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$9</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">596.45%</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">35</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.6K</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.6K</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">5.5%</td>
         </tr>
         <tr data-row-id="u3" class="mdc-data-table__row">
           <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
             <div class="mdc-checkbox mdc-data-table__row-checkbox">
               <input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby="u3"/>
               <div class="mdc-checkbox__background">
                 <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                   <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                 </svg>
                 <div class="mdc-checkbox__mixedmark"></div>
               </div>
               <div class="mdc-checkbox__ripple"></div>
             </div>
           </td>
           <th class="mdc-data-table__cell"></th>
           <td class="mdc-data-table__cell" scope="row" id="u2">Mattress</td>
           <td class="mdc-data-table__cell"> <button class="mdc-button mdc-button--raised">
             <span class="mdc-button__label">AUTO</span>
             </button>
           </td>
           <td class="mdc-data-table__cell">
           <button id="selected-switch" class="mdc-switch mdc-switch--selected" type="button" role="switch" aria-checked="true"></button>
           </td>
           <td class="mdc-data-table__cell"></td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$57,804</td>
           <td class="mdc-data-table__cell">
           <div style={{color : "blue"}}><u>down</u></div>
           </td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$57,804</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$57,804</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">$9</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">596.45%</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">35</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.6K</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.6K</td>
           <td class="mdc-data-table__cell mdc-data-table__cell--numeric">5.5%</td>
         </tr>
       </tbody>
     </table>
   </div>
 </div>

};

const App = () => {
  return (
    <div className="app">
      <Dashboard />
    </div>
  );
};

export default App;
