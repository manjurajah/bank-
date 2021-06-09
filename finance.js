class Invest {
  constructor(accountNumber, amount,maturityAmount,startDate, maturityDate,period,interestRate, interestDetail,payoutFrequency,autoreinvestment,productName,joint) {
   this.accountNumber = accountNumber;
    this.amount =amount;
    this.maturityAmount = maturityAmount;
    this.startDate =startDate;
    this.maturityDate =maturityDate;
    this.periodOfDeposit =period;
    this.interestRate=interestRate ;
    this.interestDetail =interestDetail;
    this.payoutFrequency =payoutFrequency
    this.autoreinvestment =autoreinvestment;
    this.productName =productName;
    this.modeOfOperation= joint;
  }
}


// PMVY - lIC monthly scheme
// console.log(upDate);
// console.log(matDate);
// console.log(toGoForMaturity);


// console.log(daysToGo);




const pmvy = new Invest('Policy Number :914720518', 1445783, 1445783,'12-Apr-2019', '11/04/2034' ,'5 years, Not Known' ,'NA','annuly', 'False', 'PMVVY Option F', 'solo')

const pmvvy = document.getElementById('pmvy');
const pmvvyBtn = document.getElementById('pmvvy1');

pmvvyBtn.addEventListener('click', detailPMVVY)

function detailPMVVY(){
mainDisplay.innerHTML =` PMVVY -LIC  : A/C No. ${pmvy.accountNumber},<br> Iniital Amount (Rs.): ${pmvy.amount}<br> Maturity Amt (Rs.) : ${pmvy.maturityAmount} <br> Start Date : ${pmvy.startDate}, <br>End Date : ${pmvy.maturityDate}, <br>Auto Reinvest:  ${pmvy.payoutFrequency} ; Amount to Received : Rs.1,20,000 per Year ,Investment Plan : ${pmvy.productName}` 
}

pmvvy.innerHTML= ` PMVYY ${pmvy.maturityDate}  Rs.${pmvy.amount}`


// ==============================

 const updateDate = document.getElementById('update')
 var upDate = new Date(2020,11,12,23,15)
updateDate.innerHTML = `${upDate}`
updateDate.style.color = 'red'

//  var matDate = pmvy.maturityDate;
//  var toGoForMaturity = (matDate-upDate)
//  var daysToGo =Math.round((toGoForMaturity)/1000/3600/24);

// function alarm (){
//   var p = pmvy.maturityDate
//   if(p.amount>11130){
//     updateDate.innerText= ` :Days to Go for maturity wath a : ${daysToGo}`
    
//   }else
//   updateDate.innerText+= ` Else  happening:Days to Go for matu  rity: ${daysToGo}`
//   updateDate.style.color= 'red'
// }
// alarm()
// setInterval(alarm,20000)














// ========================






 //jana fixed deposits
 
var jana = new Invest( 457301002039044, 100000,117198,'2020-10-6','2020-11-22','734 Days', '8.00%','cumulative','At Maturity',true,' FD Cumulative' );


 const janaBank =document.getElementById("jana");
 const janaBtn = document.querySelector('#jana1')
const mainDisplay = document.querySelector('.billboard')


 janaBank.innerHTML = `Jana: Mat : ${jana.maturityDate}<br>  Rs.: ${jana.maturityAmount}`
 janaBank.style.color= 'green'

 
 janaBtn.addEventListener('click', detailJana)


 function detailJana (){
 
mainDisplay.innerHTML= `Jana bank :  A/c  No: ${jana.accountNumber} ,<br> Amount  in Rs.${jana.amount}<br> The Maturity Amount in Rs: ${jana.maturityAmount}<br>Start Date ${jana.startDate} <br> Mat. Dt: ${jana.maturityDate} <br>PperiodOfDeposit: ${jana.periodOfDeposit}  <br>
and the  interest Rate is :  ${jana.interestRate}  `
janaBank.style.color= 'green'
janaBank.style.border= `4px solid red`

}

// setInterval(hidejana, 10000)

// function hidejana(){
// //  mainDisplay.innerHTML = `Bill-Board `
// //  mainDisplay.style.color = 'green'
//   janaBank.innerHTML = `Jana: M Date : ${jana.maturityDate}<br> M. Amt in Rs.: ${jana.maturityAmount}`
//  janaBank.style.color= 'green'
//  }
 
// console.log(jana);





// ICICI 1 FD first Account
// icici investment
 var icici1 = new Invest('038313004730', 71906,73531,'2020-10-17','2021-04-17', ' 6 months', '4.00%', 'cumulative','At Maturity',true,' FD Cumulative')

 var icici2 = new Invest ('038313005512',30000,31731, ' 2020-06-22', '2021-06-22', '12 month', '5.65%','cumulative','At Maturity',true,' FD Cumulative' )
 var icici3 = new  Invest ('038313003992', 538124,581251,'2019-04-10' , '2021-04-10' , '24 months','7.60%','cumulative','At Maturity',true,' FD Cumulative')
 


 const iciciBank = document.getElementById('icici1')
 const iciciBtn = document.querySelector('#icici')


 iciciBtn.addEventListener('click', detailicici1)


function detailicici1 (){
mainDisplay.innerHTML= `ICICI 1 : A/c No: ${icici1.accountNumber} ,<br>  Rs.${icici1.amount}<br> The Maturity Amount in Rs: ${icici1.maturityAmount}<br>Start Date :${icici1.startDate} <br> Mturity Date: ${icici1.maturityDate} <br>PperiodOfDeposit: ${icici1.periodOfDeposit}  <br>
and the  interest Rate is :  ${icici1.interestRate}  `
mainDisplay.style.color ='red'
iciciBank.innerHTML =` <H1>ICICI FD 1  </H1>`
// iciciBank.innerHTML.style.color = 'red'
}
iciciBank.innerHTML= `ICICI 1:  ${icici1.maturityDate} <br> Rs.: ${icici1.maturityAmount} `
 
// setInterval( hideicici1, 10000)
// function hideicici1(){
//   // mainDisplay.innerHTML = `Bill-Board `
//  mainDisplay.style.color = 'green'
//   iciciBank.innerHTML= `ICICI 1: M Dt : ${icici1.maturityDate} <br>M Amt in Rs.: ${icici1.maturityAmount} `
//   iciciBank.style.color ='red'
// }


// ICICI FD second Account

const icici2Bank = document.getElementById('icici2')
 const icici2Btn = document.querySelector('#icici22')
 icici2Btn.addEventListener('click', detailicici2)
 
 function detailicici2 (){
  
mainDisplay.innerHTML= `ICICI 2 :  A/c  No: ${icici2.accountNumber} ,<br> Amount  in Rs.${icici2.amount}<br> The Maturity Amount in Rs: ${icici2.maturityAmount}<br>Start Date :${icici2.startDate} <br> Mturity Date: ${icici2.maturityDate} <br>PperiodOfDeposit: ${icici2.periodOfDeposit}  <br>
and the  interest Rate is :  ${icici2.interestRate}  `
icici2Bank.style.color ='blue'
mainDisplay.style.color = 'blue'
icici2Bank.innerHTML = `<h1> ICICI FD 2`
}
 icici2Bank.innerHTML= `ICICI 2:  ${icici2.maturityDate} <br>Rs.: ${icici2.maturityAmount} `
// setInterval( hideicici2, 10000)
// function hideicici2(){
//   icici2Bank.innerHTML= `ICICI 2:  M Dt : ${icici2.maturityDate} <br>M Amt in Rs.: ${icici2.maturityAmount} `
//   icici2Bank.style.color ='blue'
// }

//icici Third FD account

const icici3Bank = document.getElementById('icici3')
 const icici3Btn = document.querySelector('#icici33')

 icici3Btn.addEventListener('click', detailicici3)

function detailicici3 (){
mainDisplay.innerHTML= `ICICI  3 : </b> A/c  No: ${icici3.accountNumber} ,<br> Amount  in Rs.${icici3.amount}<br> The Maturity Amount in Rs: ${icici3.maturityAmount}<br>Start Date :${icici3.startDate} <br> Mturity Date: ${icici3.maturityDate} <br>PperiodOfDeposit: ${icici3.periodOfDeposit}  <br>
and the  interest Rate is :  ${icici3.interestRate}  `
icici3Bank.innerHTML = `<h1> ICICI FD 3`
mainDisplay.style.color ='purple'
}
// setInterval( hideicici3, 10000)
// function hideicici3(){
//   icici3Bank.innerHTML= `ICICI 3: M Dt : ${icici3.maturityDate}<br>M Amt in Rs.: ${icici3.maturityAmount} `
//   icici3Bank.style.color ='purple'
// }
icici3Bank.innerHTML= `ICICI 3:  ${icici3.maturityDate}<br> Rs.: ${icici3.maturityAmount} `


//sbi first FD account
var sbi1 =  new  Invest('00000039279579353',50000,53453,'25-Apr-20',' 26-May-21',' 396 Days','6.2%', 'cumulative','At Maturity',true,' FD Cumulative')
 

const sbi1Bank = document.getElementById('sbi1')
 const sbi1Btn = document.querySelector('#sbi11')

 sbi1Btn.addEventListener('click', detailsbi1)

function detailsbi1 (){
mainDisplay.innerHTML = `  SBI 1 :   A/c  No: ${sbi1.accountNumber} ,<br> Amount  in Rs.${sbi1.amount}<br> The Maturity Amount in Rs: ${sbi1.maturityAmount}<br>Start Date :${sbi1.startDate} <br> Mturity Date: ${sbi1.maturityDate} <br>PperiodOfDeposit: ${sbi1.periodOfDeposit}  <br>
and the  interest Rate is :  ${sbi1.interestRate}  `
mainDisplay.style.color = 'violet'
sbi1Bank.innerHTML = `<h1> SBI FD 1</h1>`;
}
// setInterval( hidesbi1, 10000)
// function hidesbi1(){}
sbi1Bank.innerHTML= `SBI FD 1: ${sbi1.maturityDate}<br> Rs.${sbi1.maturityAmount} `
sbi1Bank.style.color ='violet'

//sbi second FD account
var sbi2 = new Invest('00000038860449794',60000,68595,'21-Oct-19 ','21-Oct-21',' 2 years','6.75%','Cummulative', 'At Maturity','Not known', 'SBI FD');


const sbi2Bank = document.getElementById('sbi2')
 const sbi2Btn = document.querySelector('#sbi22')

 sbi2Btn.addEventListener('click', detailsbi2)

function detailsbi2 (){
mainDisplay.innerHTML= ` <b>SBI 2 : </b>  A/c  No: ${sbi2.accountNumber} ,<br> Amount  in Rs.${sbi2.amount}<br> The Maturity Amount in Rs: ${sbi2.maturityAmount}<br>Start Date :${sbi2.startDate} <br> Mturity Date: ${sbi2.maturityDate} <br>PperiodOfDeposit: ${sbi2.periodOfDeposit}  <br>
and the  interest Rate is :  ${sbi2.interestRate}  `
mainDisplay.style.color ='#0084ff';
sbi2Bank.innerHTML = `<h1> SBI FD 2`
}
// setInterval( hidesbi2, 10000)
// function hidesbi2(){}
sbi2Bank.innerHTML= ` SBI  FD 2: ${sbi2.maturityDate}<br>Rs. ${sbi2.maturityAmount} `
sbi2Bank.style.color ='#0084ff'

//sbi third FD account
var sbi3 = new Invest('00000038408400915' ,2000000,2000000,'22-Apr-19','22-Apr-22', '3 years','7.3%','Monthly',false, 'SBI FD')

const sbi3Bank = document.getElementById('sbi3')
 const sbi3Btn = document.querySelector('#sbi33')

 sbi3Btn.addEventListener('click', detailsbi3)



function detailsbi3 (){
mainDisplay.innerHTML= ` SBI FD 3 : A/c  No: ${sbi3.accountNumber} ,<br> Amount  in Rs.${sbi3.amount}<br> The Maturity Amount in Rs: ${sbi3.maturityAmount}<br>Start Date :${sbi3.startDate} <br> Mturity Date: ${sbi3.maturityDate} <br>PperiodOfDeposit: ${sbi3.periodOfDeposit}  <br>and the  interest Rate is :  ${sbi3.interestRate}  `
mainDisplay.style.color ='#3524eb';
sbi3Bank.innerHTML = ` <h1> SBI FD 3</h1>`
}
// setInterval( hidesbi3, 10000)
// function hidesbi3(){
// }
sbi3Bank.innerHTML= ` SBI FD 3:  ${sbi3.maturityDate} <br> Rs. ${sbi3.maturityAmount}`
sbi3Bank.style.color ='#3524eb'



//  Bajaj Finance Deposti 1

var bajajFinance = new Invest('425768',50000,50000,'15-Nov-19','	15-Nov-21','24 months','8.23%',' Interest','6 month',
'Non cummulative' )
var bajaj1 = document.getElementById('bajaj1')
var bajaj1Btn = document.querySelector('#bajaj11')



 bajaj1Btn.addEventListener('click', detailbajaj1)

function detailbajaj1 (){
mainDisplay.innerHTML= ` <b>BajajFinace  : </b>  A/c  No: ${bajajFinance.accountNumber} ,<br> Amount  in Rs.${bajajFinance.amount}<br> The Maturity Amount in Rs: ${bajajFinance.maturityAmount}<br>Start Date :${bajajFinance.startDate} <br> Mturity Date: ${bajajFinance.maturityDate} <br>PperiodOfDeposit: ${bajajFinance.periodOfDeposit}  <br>and the  interest Rate is :  ${bajajFinance.interestRate}  `
mainDisplay.style.color ='#4d0f0f';
bajaj1.innerHTML = `<h1> BAJAJ FIN</h1>`
}
// setInterval( hidebajaj1, 10000)
// function hidebajaj1(){}
bajaj1.innerHTML= ` Baj Fin:  ${bajajFinance.maturityDate}<br>  Rs.: ${bajajFinance.maturityAmount} `
bajaj1.style.color ='#4d0f0f'
// ===============================
// HDFC Saving Bank

var hdfcSB= new Invest('1234', 4500, 2400,'23/2/23')
var hdfcSaving = document.getElementById('hdfcsb')
var hdfcSBBtn = document.getElementById('hdfc')
hdfcSBBtn.addEventListener('click' , detailhdfcsb)
function detailhdfcsb(){
  console.log(' good keep  going');
}
hdfcSaving.innerHTML = 'we are  the best coder'
// ===============================

//  HDCF Fixed Deposti 1

var hdfc = new Invest('50300420367907',58000,61745,'22-Apr-20','23-Apr-21','12 months 1 days','6.30%','1Redeem Principal + Interest','Redeem on maturity',
'Conventional' )
var hdfc1 = document.getElementById('hdfcSBFD1')
var hdfc1Btn = document.querySelector('#hdfc11')

 hdfc1Btn.addEventListener('click', detailhdfc)


function detailhdfc (){
mainDisplay.innerHTML= ` HDFC FB FD  :   A/c  No: ${hdfc.accountNumber} ,<br> Amount  in Rs.${hdfc.amount}<br> The Maturity Amount in Rs: ${hdfc.maturityAmount}<br>Start Date :${hdfc.startDate} <br> Mturity Date: ${hdfc.maturityDate} <br>PperiodOfDeposit: ${hdfc.periodOfDeposit}  <br>and the  interest Rate is :  ${hdfc.interestRate}  `
hdfc1.innerHTML = ` <h1>HDFC SB FD </h1> `
mainDisplay.style.color = `#a12424`
}
// setInterval( hidehdfc, 10000)
// function hidehdfc(){}
hdfc1.innerHTML= ` HDFC SB FD:${hdfc.maturityDate} <br> Rs.:<b> ${hdfc.maturityAmount} `
hdfc1.style.color ='#a12424'

//  HDFC  Deopsit FD 1

var hdfcFD1 = new Invest('425768',500000,500000,'15-Nov-19','	15-Nov21','24 months','8.23%',' Interest','6 month',
'Non cummulative' )
var hdfcBankFD1 = document.getElementById('hdfcFD1')
var hdfcFD1Btn = document.querySelector('#hdfcFD11')

 hdfcFD1Btn.addEventListener('click', detailhdfcFD1)

function detailhdfcFD1 (){
mainDisplay.innerHTML= ` <b>HDFC FD 1  : </b>  A/c  No: ${hdfcFD1.accountNumber} ,<br> Amount  in Rs.${hdfcFD1.amount}<br> The Maturity Amount in Rs: ${hdfcFD1.maturityAmount}<br>Start Date :${hdfcFD1.startDate} <br> Mturity Date: ${hdfcFD1.maturityDate} <br>PperiodOfDeposit: ${hdfcFD1.periodOfDeposit}  <br>and the  interest Rate is :  ${hdfcFD1.interestRate}  `
hdfcBankFD1.innerHTML =`<h1>HDFC FD1</h1>`
mainDisplay.style.color ='#f70a0a';
}
// setInterval( hidehdfcFD1, 10000)
// function hidehdfcFD1(){}
hdfcBankFD1.innerHTML= ` HDFC FD1:  ${hdfcFD1.maturityDate}<br>Rs. ${hdfcFD1.maturityAmount} ` 
hdfcBankFD1.style.color ='#f70a0a'



//  HDFC FD 2

var hdfcFD2= new Invest('CM/1212035',1500000,1500000,'25-Apr-19','	25-Jan-22','33 months','8.20%',' Interest','monthly',false,'SR CITIZEN DEPOSIT Montly Income Plan' )
var hdfcBankFD2 = document.getElementById('hdfcFD2')
var hdfcFD2Btn = document.querySelector('#hdfcFD22')

 hdfcFD2Btn.addEventListener('click', detailhdfcFD2)

function detailhdfcFD2 (){
mainDisplay.innerHTML= ` HDFC FD2 Bank:  A/c  No: ${hdfcFD2.accountNumber} ,<br> Amount  in Rs.${hdfcFD2.amount}<br> The Maturity Amount in Rs: ${hdfcFD2.maturityAmount}<br>Start Date :${hdfcFD2.startDate} <br> Mturity Date: ${hdfcFD2.maturityDate} <br>PperiodOfDeposit: ${hdfcFD2.periodOfDeposit}  <br>and the  interest Rate is :  ${hdfcFD2.interestRate}  `
mainDisplay.style.color ='#d65b5b';
hdfcBankFD2.innerHTML =`<h1>HDFC FD2 </h1>`
}
// // setInterval( hidehdfcFD2, 10000)
// function hidehdfcFD2(){}
  hdfcBankFD2.innerHTML= ` HDFC FD2 : ${hdfcFD2.maturityDate}<br>  Rs.: ${hdfcFD2.maturityAmount}`
  hdfcBankFD2.style.color ='#d65b5b'



//  HDFC FD 3

var hdfcFD3= new Invest('CM/1239227',500000,500000,'16-Oct-19','	25-Jan-22','66 months','7.90%',' Interest','Quaterly',false,'SR CITIZEN DEPOSIT Non-Cumm. Quarterly')
var hdfcBankFD3 = document.getElementById('hdfcFD3')
var hdfcFD3Btn = document.querySelector('#hdfcFD33')



 hdfcFD3Btn.addEventListener('click', detailhdfcFD3)


function detailhdfcFD3 (){
mainDisplay.innerHTML= ` HDFC FD3 Bank:  A/c  No: ${hdfcFD3.accountNumber} <br> Amount  in Rs.${hdfcFD3.amount}<br> The Maturity Amount in Rs: ${hdfcFD3.maturityAmount}<br>Start Date :${hdfcFD3.startDate} <br> Mturity Date: ${hdfcFD3.maturityDate} <br>PperiodOfDeposit: ${hdfcFD3.periodOfDeposit}  <br>and the  interest Rate is :  ${hdfcFD3.interestRate}  `
hdfcBankFD3.innerHTML =` <h1>HDFC FD 3<h1>`
mainDisplay.style.color ='#6d3d3d';
}
// setInterval( hidehdfcFD3, 10000)
// function hidehdfcFD3(){}
hdfcBankFD3.innerHTML= ` HDFC FD3 : ${hdfcFD3.maturityDate}<br>Rs. ${hdfcFD3.maturityAmount} `
hdfcBankFD3.style.color =`#6d3d3d`;


//  Post offic SB Mahul Road

var postOfficeSB= new Invest('4417026370',50000,'NA','02 May 2019' ,'NA','NOT KNOWN',' NOT KNOWN','NOT KNOWN','NA','SAVINGS BANK -GENERAL')
var postOffice = document.getElementById('postoffice')
var postOfficeBtn = document.querySelector('#postoffice11')

 postOfficeBtn.addEventListener('click', detailpostOfficeSB)

function detailpostOfficeSB (){
mainDisplay.innerHTML= ` P O SB : A/c  No: ${postOfficeSB.accountNumber} ,<br> Amt  in Rs.${postOfficeSB.amount}<br> M Amt in Rs: ${postOfficeSB.maturityAmount}<br>Start Date :${postOfficeSB.startDate} <br> Mturity Date: ${postOfficeSB.maturityDate} <br>PperiodOfDeposit: ${postOfficeSB.periodOfDeposit}  <br>and the  interest Rate is :  ${postOfficeSB.interestRate}  `
postOffice.innerHTML =` <h1> PO SB </h1>`;
mainDisplay.style.color = `#0afc43`
}
// setInterval( hidepostOfficeSB, 10000)
// function hidepostOfficeSB(){}
  // postOffice.style.color =` #0afc43`
  //  Post office MIS Mahul Road
// postOffice.innerText = " Pos"
 postOffice.innerHTML= ` PO SB Mahul: ${postOfficeSB.maturityDate} <br> Rs. ${postOfficeSB.maturityAmount} `

var postOfficeMIS= new Invest('4417427941',900000,900000,'12-Apr-19' ,'NA','VALID TILL CLOSURE','NOT KNOWN',' NOT KNOWN','NOT KNOWN','NA','MONTLY INCOME SCHEME')
var postMIS = document.getElementById('postofficeMIS')
var postOfficeBtn = document.querySelector('#postofficeMIS11')

 postOfficeBtn.addEventListener('click', detailpostOfficeMIS)

function detailpostOfficeMIS (){
mainDisplay.innerHTML= `POST OFFICE  MIS: A/c  No: ${postOfficeMIS.accountNumber}<br> Amount  in Rs.${postOfficeMIS.amount}<br> The Mat Amt in Rs: ${postOfficeMIS.maturityAmount}<br>St Date :${postOfficeMIS.startDate} <br> Mturity Date: ${postOfficeMIS.maturityDate} <br>PperiodOfDeposit: ${postOfficeMIS.periodOfDeposit}  <br>and the  interest Rate is :  ${postOfficeMIS.interestRate} <br> Mode of Operation: Joint `
postMIS.innerHTML = `<h1> PO MIS</h1>`
mainDisplay.style.color ='#309c49';
}
// setInterval( hidepostOfficeMIS, 10000)
// function hidepostOfficeMIS(){}
  postMIS.innerHTML= ` PO  MIS: ${postOfficeMIS.maturityDate} <br>Rs.: ${postOfficeMIS.maturityAmount} `
  // postMIS.style.color ='#309c49'




//  Government Securityies I 

var govtsecurities1= new Invest('TBICI007006106',1000000,1000000,'18/04/2019' ,'18/04/2026','84 Months','7.75%' ,' interest Payable ','Half yearly', false,'',' Corporate FD 7.75% Savings (Taxable) Bonds, 2018 (Tenure: 7 Years)')
var govtsecuritesI = document.getElementById('govtsecurities1')
var govrsecuritie11Btn = document.querySelector('#govtsecurites11')



 govrsecuritie11Btn .addEventListener('click', detailgovtsecurities1)


function detailgovtsecurities1 (){
mainDisplay.innerHTML= ` <b>Govt.Securities I: </b>  A/c  No: ${govtsecurities1.accountNumber} ,<br> Amount  in Rs.${govtsecurities1.amount}<br> The Maturity Amount in Rs: ${govtsecurities1.maturityAmount}<br>Start Date :${govtsecurities1.startDate} <br> Mturity Date: ${govtsecurities1.maturityDate} <br>PperiodOfDeposit: ${govtsecurities1.periodOfDeposit}  <br>and the  interest Rate is :  ${govtsecurities1.interestRate}  `
govtsecuritesI.innerHTML =`<h1> G-Sec. -1</h1>`;
mainDisplay.style.color =`red`;
}
// setInterval( hidegovtsecurities1, 10000)
// function hidegovtsecurities1(){
// }
govtsecuritesI.innerHTML= ` G-Sec I:${govtsecurities1.maturityDate} <br> Rs. ${govtsecurities1.maturityAmount} `
// govtsecuritesI.style.color =`red`;


//  Government Securityies2  

var govtsecurities2= new Invest('TBICI007029652',200000,200000,'28/05/2020' ,'28/05/2027','84 Months','7.75%' ,' interest Payable ','Half yearly', false,' Corporate FD 7.75% Savings (Taxable) Bonds, 2018 (Tenure: 7 Years)')
var govtsecuritesII = document.getElementById('govtsecurities2')
var govrsecurities22Btn = document.querySelector('#govtsecurites22')



 govrsecurities22Btn .addEventListener('click', detailgovtsecurities2)


function detailgovtsecurities2 (){
mainDisplay.innerHTML= ` Govt.Securities 2:  A/c  No: ${govtsecurities2.accountNumber} ,<br> Amount  in Rs.${govtsecurities2.amount}<br> The Maturity Amount in Rs: ${govtsecurities2.maturityAmount}<br>Start Date :${govtsecurities2.startDate} <br> Mturity Date: ${govtsecurities2.maturityDate} <br>PperiodOfDeposit: ${govtsecurities2.periodOfDeposit}  <br>and the  interest Rate is :  ${govtsecurities2.interestRate}  `
govtsecuritesII.innerHTML =`<h1> G-Sec. -1</h1>`;
mainDisplay.style.color =`red`;
}
// setInterval( hidegovtsecurities2, 10000)
// function hidegovtsecurities2(){}
  govtsecuritesII.innerHTML= ` G-Sec I: ${govtsecurities2.maturityDate} <br> Rs. ${govtsecurities2.maturityAmount} `
  govtsecuritesII.style.color =`red`;


//sbi saving Bank Govandi for Manju

var sbimanju=new Invest('00000010896011348',13500,13500,'appx. 10 year back','NA',' 2.7%','SAVINGS BANK -GENERAL','SOLO')
var sbiManju = document.getElementById('sbigovandimanju')
var sbiBtn = document.querySelector('#sbimanju')

 sbiBtn.addEventListener('click', detailsbimanju)

function detailsbimanju(){
mainDisplay.innerHTML= ` SBI SB Manju: A/c No:${sbimanju.accountNumber} ,<br> Amt  in Rs.${sbianju.amount}<br> M Amt in Rs: ${sbimanju.maturityAmount}<br>Start Date :${sbimanju.startDate} <br> Mturity Date: ${sbimanju.maturityDate} <br>PperiodOfDeposit: ${sbimanju.periodOfDeposit}  <br>and the  interest Rate is :  ${sbimanju.interestRate}  `
sbiManju.innerHTML =` <h1> SBI SB GO. MANJU </h1>`;
mainDisplay.style.color = `#0afc43`
}
// setInterval( hidesbimanju, 10000)
// function hidesbimanju(){}
  sbiManju.innerHTML= ` SBI SB MANJU: ${sbimanju.startDate}<br>Rs. ${sbimanju.amount} `




//sbi first FD account - manju  ;  sbi1BankManju  sbi1BtnManju   id for buttton 
const  sbi1Manju= new Invest('00000039831343831',260000,287815,'27-Nov-2020' ,'29-Nov-22','732 days','5.1%' ,' interest Payable ','On Maturity', false,' STD-PUB IND UNI 181D-10YRS - FD)')

const sbi1BankManju = document.getElementById('sbi1manju')
const sbi1BtnManju  = document.querySelector('#sbi11manju')

 sbi1BtnManju.addEventListener('click', detailsbi1Manju)

function detailsbi1Manju (){
mainDisplay.innerHTML= ` SBI FD 1 Manju:   A/c  No: ${sbi1Manju.accountNumber} ,<br> Amount  in Rs.${sbi1Manju.amount}<br> The Maturity Amount in Rs: ${sbi1Manju.maturityAmount} <br>Start Date :${sbi1Manju.startDate} <br> Mturity Date: ${sbi1Manju.maturityDate} <br>PperiodOfDeposit: ${sbi1Manju.periodOfDeposit}  <br>and the  interest Rate is :  ${sbi1Manju.interestRate} `
sbi1BankManju.innerHTML = ` <h1> SBI FD1 MANJU</h1>`
mainDisplay.style.color = `#da02f7`
}
// setInterval( hidesbi1Manju, 10000)
  // function hidesbi1Manju(){
  sbi1BankManju.innerHTML= `SBI FD 1 M: ${sbi1Manju.maturityDate}<br>Rs. ${sbi1Manju.maturityAmount} `
  sbi1BankManju.style.color ='#da02f7'
  

 //Second FD account - manju  ;  sbi1BankManju  sbi1BtnManju   id for buttton 
const sbi2Manju = new Invest ('00000039746131493',50000,55341,'20-Oct-20 ',' 21-Oct-22','2 Years','5.1%',' interest Payable ','On Maturity', false,' STD-PUB IND UNI 181D-10YRS - FD)')


const sbi2BankManju = document.getElementById('sbi2manju')
const sbi2BtnManju  = document.querySelector('#sbi22manju')

 sbi2BtnManju.addEventListener('click', detailsbi2Manju)


function detailsbi2Manju (){
mainDisplay.innerHTML= ` SBI FD 2 Manju: A/c  No: ${sbi2Manju.accountNumber} ,<br> Amount  in Rs.${sbi2Manju.amount}<br> The Maturity Amount in Rs: ${sbi1Manju.maturityAmount} <br>Start Date :${sbi2Manju.startDate} <br> Mturity Date: ${sbi2Manju.maturityDate} <br>PperiodOfDeposit: ${sbi2Manju.periodOfDeposit}  <br>and the  interest Rate is :  ${sbi2Manju.interestRate} `
sbi2BankManju.style.color ='#da02f7';
sbi2BankManju.innerHTML = ` <h1> SBI FD2 MANJU</h1>`
}
// setInterval( hidesbi2Manju, 10000)
// function hidesbi2Manju(){}
  sbi2BankManju.innerHTML= `SBI FD 2 M: : ${sbi2Manju.maturityDate}<br>Rs. ${sbi2Manju.maturityAmount} `
  sbi2BankManju.style.color ='#da02f7'
 


//  SBI FD 3 and 4 - Manju
const sbi3Manju = new Invest ('00000038616016546',319542,336153,'19-Jul-19','19-Jul-21','1 year','5.1%',' interest Payable ','On Maturity', false,' STD-PUB IND UNI 181D-10YRS - FD)')
const sbi4Manju = new Invest ('00000038233036065',534304, 55341,'03-Feb-19',' 03-Feb-21','1 year','6.1%',' interest Payable ','On Maturity', false,' STD-PUB IND UNI 181D-10YRS - FD)')


const sbi3BankManju = document.getElementById('sbi3manju')
const sbi3BtnManju  = document.querySelector('#sbi33manju')

 sbi3BtnManju.addEventListener('click', detailsbi3Manju)


function detailsbi3Manju (){
mainDisplay.innerHTML= `SBI FD 2 Manju: </b>  A/c  No: ${sbi3Manju.accountNumber} ,<br> Amount  in Rs.${sbi3Manju.amount}<br> The Maturity Amount in Rs: ${sbi3Manju.maturityAmount} <br>Start Date :${sbi3Manju.startDate} <br> Mturity Date: ${sbi3Manju.maturityDate} <br>PperiodOfDeposit: ${sbi3Manju.periodOfDeposit}  <br>and the  interest Rate is :  ${sbi3Manju.interestRate} `
sbi3BankManju.style.color ='#da02f7';
sbi3BankManju.innerHTML = ` <h1> SBI FD3 MANJU</h1>`
}
// setInterval( hidesbi3Manju, 10000)
// function hidesbi3Manju(){}
sbi3BankManju.innerHTML= `SBI 3 M: ${sbi3Manju.maturityDate}<br> Rs.${sbi3Manju.maturityAmount} `
sbi3BankManju.style.color ='#da02f7'

// ===========

const sbi4BankManju = document.getElementById('sbi4manju')
const sbi4BtnManju  = document.querySelector('#sbi44manju')

 sbi4BtnManju.addEventListener('click', detailsbi4Manju)

//  icici2Bank.innerHTML = ` ICICI 2:</h1> <h3>Maturiy Date: ${icici2.maturityDate}<br> <br>Maturity Amt in Rs.: ${icici2.maturityAmount}<h3> `
function detailsbi4Manju (){
mainDisplay.innerHTML= ` SBI FD 4 MANJU:   A/c  No: ${sbi4Manju.accountNumber} ,<br> Amount  in Rs.${sbi4Manju.amount}<br> The Maturity Amount in Rs: ${sbi4Manju.maturityAmount} <br>Start Date :${sbi4Manju.startDate} <br> Mturity Date: ${sbi4Manju.maturityDate} <br>PperiodOfDeposit: ${sbi4Manju.periodOfDeposit}  <br>and the  interest Rate is :  ${sbi4Manju.interestRate} `
mainDisplay.style.color ='#da02f7';
sbi4BankManju.innerHTML = ` <h1> SBI FD4 MANJU</h1>`
}
// setInterval( hidesbi4Manju, 10000)
// function hidesbi4Manju(){}
   sbi4BankManju.innerHTML= `SBI SD 4 M: ${sbi4Manju.maturityDate}<br>  Rs. ${sbi4Manju.maturityAmount} `
   sbi4BankManju.style.color ='#da02f7'


//Jana Bank FD for Manju

var janaManju = new Invest('1234', 100000,107500, '10-Dec-2020','10-Dec -2023' ,'3 years', '7.3%','interest payable','annualy', false, 'FD yearly interest plan')
//  Standard Charted Saving Bank Access Plus for Richard

const  scRichard= new Invest('00000039831343831',34500,34500,'27-Nov-2020' ,'Till Closure','NA','Not Known' ,' Payable ','as per Bank', false,' access Plus)')


const scBankRichard = document.getElementById('scrichard')
const sc1BtnRichard  = document.querySelector('#sc11richard')

 sc1BtnRichard.addEventListener('click', detailscBankRichard)

function detailscBankRichard (){
mainDisplay.innerHTML= ` SC  SB Bank Richard:   A/c  No: ${scRichard.accountNumber} ,<br> Amount  in Rs.${scRichard.amount}<br> The Maturity Amount in Rs: ${scRichard.maturityAmount}<br>Start Date :${scRichard.startDate} <br> Mturity Date: ${scRichard.maturityDate} <br>PperiodOfDeposit: ${scRichard.periodOfDeposit}  <br>and the  interest Rate is :  ${scRichard.interestRate}  `
scBankRichard.innerHTML =`<h1>SC A/C RICH</h1>`;
mainDisplay.style.color = `#2a07d8`
}
// setInterval( hidesRichard, 10000)
// function hidesRichard(){
// }
scBankRichard.innerHTML= `SC SB Rich: ${scRichard.amount}<br>Rs. ${scRichard.maturityAmount} `
scBankRichard.style.color ='#2a07d8'

// caro  ICICI band and SBI bank common heading 

// caroline  ICICI  Saving Account ========

const iciciCaroline = new Invest ('118301514389',479,479,'Not availabe',' N A','life','Not known',' interest Payable ','SC policy pe', 'not applicablefalse' ,'	ICICI Saving A/c ')

const iciciBankCaroline = document.getElementById('icicicaroline')
const iciciBtnCaroline  = document.querySelector('#icicicaro')

 iciciBtnCaroline.addEventListener('click', detailiciciBankCaroline)

function detailiciciBankCaroline (){
mainDisplay.innerHTML= ` ICICI SB CARO :   A/c  No: ${iciciCaroline.accountNumber} ,<br> Amount  in Rs.${iciciCaroline.amount}<br> The Maturity Amount in Rs: ${iciciCaroline.maturityAmount}<br>Start Date :${iciciCaroline.startDate} <br> Mturity Date: ${iciciCaroline.maturityDate} <br>PperiodOfDeposit: ${iciciCaroline.periodOfDeposit}  <br>and the  interest Rate is :  ${iciciCaroline.interestRate}  `
iciciBankCaroline.innerHTML =`<h1>ICICI  A/C CARO</h1>`;
mainDisplay.style.color = `#2a07d8`
}
// setInterval( hidescRichard, 10000)
// function hidescRichard(){
// }
iciciBankCaroline.innerHTML= ` ICICI SB CARO: ${iciciCaroline.maturityDate}<br>Rs.: ${iciciCaroline.maturityAmount} `
iciciBankCaroline.style.color ='#2a07d8'


// ICICI FD1 for Caroline

const iciciFD1Caroline = new Invest('118313010677',106870,112315, '23/08/20','23/08/21','1 year','5.0%' ,' interest Payable ','On Maturity', false,' Fixed Deposit)')
var icici1Caroline = document.getElementById('icici1caroline')
var icici1Btn = document.querySelector('#icici11caro')
 icici1Btn.addEventListener('click', detailicici1Caroline)

function detailicici1Caroline (){
mainDisplay.innerHTML= ` ICICI FD 1 Caro:   A/c  No: ${iciciFD1Caroline.accountNumber} ,<br> Amt  in Rs.${iciciFD1Caroline.amount}<br> M Amt in Rs: ${iciciFD1Caroline.maturityAmount}<br>Start Date :${iciciFD1Caroline.startDate} <br> Mturity Date: ${iciciFD1Caroline.maturityDate} <br>PperiodOfDeposit: ${iciciFD1Caroline.periodOfDeposit}  <br>and the  interest Rate is :  ${iciciFD1Caroline.interestRate}  `;
icici1Caroline.innerHTML =` <h1> ICICI FD1 CARO </h1>`;
mainDisplay.style.color = `#0afc43`;
}

// setInterval(hideFD1Caro, 10000);
// function hideFD1Caro(){}
icici1Caroline.innerHTML= `ICICI FD1 C : ${iciciFD1Caroline.maturityDate}<br>Rs. ${iciciFD1Caroline.maturityAmount} `
icici1Caroline.style.color =` #0afc43`



//ICIC FD2 for Caroline00000010896011348
const iciciFD2Caroline = new Invest('118313010677',208745,230228, '23/08/19','23/08/21','2 years','7.1%' ,' interest Payable ','On Maturity', false,' Fixed Deposit)');

var icici2Caroline = document.getElementById('icici2caroline')
var icici2CaroBtn = document.querySelector('#icici22caro')
 icici2CaroBtn.addEventListener('click', detailicici2Caroline)

function detailicici2Caroline (){
mainDisplay.innerHTML= ` ICICI FD 2 Caro:   A/c  No: ${iciciFD2Caroline.accountNumber} ,<br> Amt  in Rs.${iciciFD2Caroline.amount}<br> M Amt in Rs: ${iciciFD2Caroline.maturityAmount}<br>Start Date :${iciciFD1Caroline.startDate} <br> Mturity Date: ${iciciFD2Caroline.maturityDate} <br>PperiodOfDeposit: ${iciciFD2Caroline.periodOfDeposit}  <br>and the  interest Rate is :  ${iciciFD2Caroline.interestRate}  `
icici2Caroline.innerHTML =` <h1> ICICI FD 2 CARO </h1>`;
mainDisplay.style.color = `#0afc43`
}
// setInterval( hideFD2Caroline, 10000)
// function hideFD2Caroline(){ }
icici2Caroline.innerHTML= ` ICICI FD 2  C: ${iciciFD2Caroline.maturityDate}<br>Rs. ${iciciFD2Caroline.maturityAmount} `
icici2Caroline.style.color =` #0afc43`

// caroline FD1 SBI Mahul Branch

const sbi1Caroline = new Invest('123445', 10500,10000,' interest Payable ','NA', false,'Saving Account')
  
  var sbi1Caro = document.getElementById('sbi1caroline')
  var sbi1CaroBtn = document.querySelector('#sbi11caro')
  
   sbi1CaroBtn.addEventListener('click', detailsbi1Caro)
  
  function detailsbi1Caro (){


  mainDisplay.innerHTML= ` SBI FD CARO:   A/c  No: ${sbi1Caroline.accountNumber} ,<br> Amt  in Rs.${sbi1Caroline.amount}<br> M Amt in Rs: ${sbi1Caroline.maturityAmount}<br>Start Date :${sbi1Caroline.startDate} <br> Mturity Date: ${sbi1Caroline.maturityDate} <br>PperiodOfDeposit: ${sbi1Caroline.periodOfDeposit}  <br>and the  interest Rate is :  ${sbi1Caroline.interestRate}  `
  sbi1Caro.innerHTML =` <h1> SBI FD1 CARO </h1>`;
  mainDisplay.style.color = `#0afc43`
  }
  // setInterval( hideFD1Caroline, 10000)
  // function hideFD1Caroline(){ }
  sbi1Caro.innerHTML= ` SBI FD1 C:  ${sbi1Caroline.startDate} <br> Rs.${sbi1Caroline.amount} `
  sbi1Caro.style.color =` #0afc43`

  //caroline sbi Saving Account in SBI Mahul Road
  const sbiCaro = new Invest('123445',1234, 1234,'12-Mar-13','NA', )
  
  var sbiSBCaro = document.getElementById('sbicaroline')
  var sbiCaroBtn = document.querySelector('#sbicaro')
  
   sbiCaroBtn.addEventListener('click', detailsbiCaro)
  
  function detailsbiCaro (){


  mainDisplay.innerHTML= ` SBI SB CARO:   A/c  No: ${sbiCaro.accountNumber} ,<br> Amt  in Rs.${sbiCaro.amount}<br> M Amt in Rs: ${sbiCaro.maturityAmount}<br>Start Date :${sbiCaro.startDate} <br> Mturity Date: ${sbiCaro.maturityDate} <br>PperiodOfDeposit: ${sbiCaro.periodOfDeposit}  <br>and the  interest Rate is :  ${sbiCaro.interestRate}  `
  sbiSBCaro.innerHTML =` <h1> SBI FD1 CARO </h1>`;
  mainDisplay.style.color = `#0afc43`
  }
  // setInterval( hideCaroline, 10000)
  // function hideCaroline(){ }
  sbiSBCaro.innerHTML= ` SBI SB C: ${sbiCaro.maturityDate}<br>M Amt in Rs.: ${sbi1Caroline.maturityAmount} `
  sbiSBCaro.style.color =` #0afc43`

// my pesnion 

const penSAC =new Invest('TH/VSH0008522/000/0002944', 2850 ,2850,'23-DEC-2018' ,'till life', 'pension','NA','Montly',  'PENSION')
  
  var pension = document.getElementById('pension')
  var penBtn = document.querySelector('#pension11')
  
   penBtn.addEventListener('click', detailpen)
  
  function detailpen (){
  mainDisplay.innerHTML= ` PF A/C. No:${penSAC.accountNumber} Monthly  payment: ${penSAC.amount} }  `
  pension.innerHTML =` <h1> PENSION EPF</h1>`;
  mainDisplay.style.color = `#0afc43`
  }
  // setInterval( hidepension, 10000)
  // function hidepension(){  }
  pension.innerHTML= ` PENSION:  Rs.2850/month  `
  pension.style.color =` #0afc43`







// over all result Display

var CashIcicicCarolne = 479
var CashSBICaroline   = 1000
var cashinITtimesinvestment =50000

//TEst area

var result = pmvy.amount+ jana.amount+icici1.amount + icici2.amount +icici3.amount +sbi1.amount+  sbi2.amount +sbi3.amount +hdfc.amount +bajajFinance.amount + hdfcFD1.amount +hdfcFD2.amount +hdfcFD3.amount +postOfficeSB.amount +postOfficeMIS.amount +govtsecurities1.amount +govtsecurities2.amount +cashinITtimesinvestment;
// 55555 is for 50000 invested n IT times

document.getElementById('two').innerHTML =` Total Amount in Rs.  ${result}`;
 

var resultCaro =  iciciCaroline.amount +  iciciFD1Caroline.amount +iciciFD2Caroline.amount +sbi1Caroline.amount +CashSBICaroline +CashIcicicCarolne;

document.getElementById('one').innerHTML = ` Total Amount in Rs. ${resultCaro} `
var resultmanju = +janaManju.amount +sbi1Manju.amount +sbi2Manju.amount + sbi3Manju.amount + sbi4Manju.amount ;

document.getElementById('three').innerHTML =`Total Amount in Rs. ${resultmanju}`

var resultRich =  scRichard.amount

document.getElementById('four').innerHTML = ` Total Amount in Rs. ${resultRich}`
