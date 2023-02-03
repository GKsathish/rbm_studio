// import Sidebar from '../Sidebar/Sidebar'
// import Header from '../Header/Header'

// import './reports.css';

// const Reports = () => {
//   return (
    
//       <>
//       <Header/>
//       <Sidebar/>
//       <div class="main-panel textcontre">
//           <div class="content-wrapper">
//             {/* <div class="pDescription-header">
             
//             </div> */}
//                               <h4 classNickName='reprottitle' >Reports</h4>

//             <div class="col-lg-12 grid-margin stretch-card">
//                     <div class="table-responsive-lg">
//                             <div class="card scroll_dash">
//                               <div class="card-body">
  
//                                <div classNickName="tab-cont ">
//                                   <div class="form-group">
//                                     <input type="search" placeholder='search' classNickName="form-control" />
//                                     <button onclick="Export()" class="rbtn">Export</button>
//                                   </div> 
//                                <table classNickName="table table-striped display" id="example">
//                                       <thead>
//                                                           <tr style={{borderTop: "1px solid #cccccc9c !important"}}>
//                                           <th> 
//                                           <div class="form-check">
//                                                                 <label class="form-check-label">
//                                                                   <input type="checkbox" class="form-check-input" />  </label>
//                                                               </div>
//                                                         </th>
//                                                                           {/* <th> Campaign NickName <p class="arrow"><i class="icon-long-arrow-up" id="up" style="float: right;"></i></p><p class="arrow"><i class="icon-long-arrow-down" id="up" style="float: right;"></i></p></th>--> */}
//                                                         <th> <p class="arrow sort-by"></p>sNick NickName</th>
//                                                         <th style={{width: "300 !important"}}> <p class="arrow sort-by"></p> MsgType</th>
//                                                         <th> Title <p class="arrow sort-by"></p></th>
//                                                         <th> Descriptionription <p class="arrow sort-by"></p></th>
//                                                         <th> Date <p class="arrow sort-by"></p></th>
//                                                                           <th> Sent <p class="arrow sort-by"></p></th>
//                                                         <th> Delivered <p class="arrow sort-by"></p></th>
//                                                         <th> Read <p class="arrow sort-by"></p></th>
//                                                         <th> Status<p class="arrow sort-by"></p></th>
//                                                                         </tr>
//                                         </thead>



//                                         <tbody>
//                                         {/* <tr>
                                        



//                                                             <td class="py-1">
//                                                                 <div class="form-check">
//                                                                 <label class="form-check-label">
//                                                                   <input type="checkbox" class="form-check-input"/>  </label>
//                                                               </div>
                                                              
//                                                             </td> */}
//                                   {/* <!--			  <td><?php echo $Campaignid; ?> </td>--> */}
//                                           {/* <td title="<?php echo $NickName;?>"><p class="textoverlap"><?php echo $NickName; ?></p> </td> */}
//                                           {/* <td><?php echo $MessDescription_type; ?> </td> */}
//                                           {/* <td title="<?php echo $title;?>"><p class="textoverlap"><?php echo $title; ?></p></td>
//                                           <td title="<?php echo $MessDescription;?>"><p class="textoverlap"><?php echo $MessDescription; ?></p> </td>
//                                         <td><?php echo $CDT; ?> </td>
//                                                             <td> <?php $sent = "numfmt --to=si ".$SENT_COUNT; echo $s = exec($sent);?></td>
//                                           <td> <?php $del = "numfmt --to=si ".$DLVD_COUNT; echo $d = exec($del);?></td>
//                                         <td> <?php $red = "numfmt --to=si ".$READ_COUNT; echo $r = exec($red);?></td>
                                          
//                                           <td>

//                                                 <?php 
//                                   if ($status == 'Completed') { echo '<label class="badge badge-success">Completed</label>'; } else if ($status == 'In-Process') {echo '<label class="badge badge-gradient-warning">In-Process</label>'; } else if ( $status == 'Scheduled') { echo '<label class="badge badge-gradient-info">Scheduled</label>'; } else if ( $status == 'Rejected') { echo '<label class="badge badge-gradient-danger">Rejected</label>'; }
//                                   ?> */}
//                                   {/* </td> */}
//                                         {/* </tr>
//                                         <?php  } ?> */}
//                                         <tr>
//                                         <td>1</td>
//                                         <td>test</td>
//                                         <td>test</td>
//                                         <td>test</td>
//                                         <td>test</td>
//                                         <td>test</td>

//                                         <td>test</td>

//                                         <td>test</td>
//                                         <td>test</td>

//                                         <td>test</td>

//                                         </tr>
//                                         </tbody>
//                                 </table>
//                                </div>
//                               </div>

//                             </div>
//                     </div>
//             </div>
      
//           </div>
//       </div></>
        
        
         
       

    
//   )
// }

// App.js
import {React,useState} from 'react';
import './reports.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {CSVLink, CSVDownload} from 'react-csv';

// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar';
import filterFactory from 'react-bootstrap-table2-filter';

function Reports() {
 

 
  const products = [
    { id: 1, NickName: 'adfgh',MsgType: 'Monkey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' },
    { id: 2, NickName: 'Geosdfrge',MsgType: 'Monkey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' },

    { id: 3, NickName: 'rty',MsgType: 'Mwonkey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' },
    { id: 4, NickName: 'aff',MsgType: 'Monqekey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' },
    { id: 5, NickName: 'sD',MsgType: 'Monkey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' },
    { id: 6, NickName: 'George',MsgType: 'Monkey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' },
    { id: 7, NickName: 'ADAgf',MsgType: 'Monkey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' },
    { id: 8, NickName: 'George',MsgType: 'Mfgashsonkey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' },
    { id: 9, NickName: 'George',MsgType: 'Monkey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' },
    { id: 10, NickName: 'asfgds',MsgType: 'Monkey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' },

    { id: 11, NickName: 'George',MsgType: 'Monkey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' },
    { id: 12, NickName: 'George',MsgType: 'Monkretey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' },
    { id: 13, NickName: 'George',MsgType: 'Monkey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' },
    { id: 14, NickName: 'George',MsgType: 'Monkey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' },

    { id: 15, NickName: 'George',MsgType: 'Monkey',Title: 'Monkey',Description: 'Monkey', ImageUrl: 'Monkey',Date: 'Monkey',Sent: 'Monkey',Delivered: 'Monkey',Read: 'Monkey',Status: 'Monkey' }




  ];

  const columns = [
    { dataField: 'id', text: 'id', sort: true },

    { dataField: 'NickName', text: 'NickName', sort: true },
    { dataField: 'MsgType', text: 'MsgType', sort: true },
    { dataField: 'Title', text: 'Title', sort: true },

    { dataField: 'Description', text: 'Description', sort: true },
    { dataField: 'ImageUrl', text: 'ImageUrl', sort: true },

    { dataField: 'Date', text: 'Date', sort: true },

    { dataField: 'Sent', text: 'Sent', sort: true },
    { dataField: 'Delivered', text: 'Delivered', sort: true },
    { dataField: 'Read', text: 'Read', sort: true },
    { dataField: 'Status', text: 'Status', sort: true }


  ];

  const defaultSorted = [{
    dataField: 'id',
    order: 'Desc'
  }];

  const pagination = paginationFactory({
    pDescription: 1,
    sizePerPDescription: 10,
    lastPDescriptionText: '>>',
    firstPDescriptionText: '<<',
    nextPDescriptionText: '>',
    prePDescriptionText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPDescriptionChange: function (pDescription, sizePerPDescription) {
      console.log('pDescription', pDescription);
      console.log('sizePerPDescription', sizePerPDescription);
    },
    onSizePerPDescriptionChange: function (pDescription, sizePerPDescription) {
      console.log('pDescription', pDescription);
      console.log('sizePerPDescription', sizePerPDescription);
    }
  });

  const { value, setValue } = useState('');
  const { dataSource, setdataSource } = useState(products);
  const [tableFilter,settableFilter]=useState([]);

  const filterData=(e)=>{
    
           if(value !=""){
            setValue(e.target.value); 
            const filterTable=dataSource.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            settableFilter([...filterTable]);
           }else{
            setValue(e.target.value);
            setdataSource([...dataSource]);
           }
  }

  return (
    <>
    <Header/>
    <Sidebar/>
    <div className='textcontre'>
                                <h4 classNickName='reprottitle' >Reports</h4>
                               <div>  
                               <center ><input type="text"  value={value} placeholder="search" onChange={filterData}/></center>

<center style={{textAlign:'end',marginBottom:10}}><CSVLink data={products} className="lin" >Export</CSVLink></center>
                               </div>
  

      <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} defaultSorted={defaultSorted} pagination={pagination}  filter={filterFactory()} />
    </div></>
    
  );
}

export default Reports;


// import React from 'react';
// // import {CSVLink, CSVDownload} from 'react-csv';

// import { MDBDataTable } from 'mdbreact';

// import Header from '../Header/Header';
// import Sidebar from '../Sidebar/Sidebar';

// import './reports.css'
// // import {CSVLink} from 'react-csv';
// import CsvDownloader from 'react-csv-downloader';


// const Reports = () => {
//   const reports = {
//     columns: [
//       {
//         label: 'NickName',
//         field: 'NickName',
//         sort: 'asc',
//         width: 150
//       },
//       {
//         label: 'MsgType',
//         field: 'MsgType',
//         sort: 'asc',
//         width: 270
//       },
//       {
//         label: 'Title',
//         field: 'Title',
//         sort: 'asc',
//         width: 200
//       },
//       {
//         label: 'Description',
//         field: 'Description',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'Imageurl',
//         field: 'Imageurl',
//         sort: 'asc',
//         width: 150
//       },
//       {
//         label: 'date',
//         field: 'date',
//         sort: 'asc',
//         width: 100
//       }
//     ],
//     rows: [
//       {
//         NickName: 'Tiger Nixon',
//         MsgType: 'System Architect',
//         Title: 'Edinburgh',
//         Description: '61',
//         date: '2011/04/25', 
//         Imgurl: '$320'
//       },
//       {
//         NickName: 'Garrett Winters',
//         MsgType: 'Accountant',
//         Title: 'Tokyo',
//         Description: '63',
//         date: '2011/07/25',
//         Imageurl: '$170'
//       },
//       {
//         NickName: 'Ashton Cox',
//         MsgType: 'Junior Technical Author',
//         Title: 'San Francisco',
//         Description: '66',
//         date: '2009/01/12',
//         Imageurl: '$86'
//       },
//       {
//         NickName: 'Cedric Kelly',
//         MsgType: 'Senior Javascript Developer',
//         Title: 'Edinburgh',
//         Description: '22',
//         date: '2012/03/29',
//         Imageurl: '$433'
//       },
//       {
//         NickName: 'Airi Satou',
//         MsgType: 'Accountant',
//         Title: 'Tokyo',
//         Description: '33',
//         date: '2008/11/28',
//         Imageurl: '$162'
//       },
//       {
//         NickName: 'Brielle Williamson',
//         MsgType: 'Integration Specialist',
//         Title: 'New York',
//         Description: '61',
//         date: '2012/12/02',
//         Imageurl: '$372'
//       },
//       {
//         NickName: 'Herrod Chandler',
//         MsgType: 'Sales Assistant',
//         Title: 'San Francisco',
//         Description: '59',
//         date: '2012/08/06',
//         Imageurl: '$137'
//       },
//       {
//         NickName: 'Rhona Davidson',
//         MsgType: 'Integration Specialist',
//         Title: 'Tokyo',
//         Description: '55',
//         date: '2010/10/14',
//         Imageurl: '$327'
//       },
//       {
//         NickName: 'Colleen Hurst',
//         MsgType: 'Javascript Developer',
//         Title: 'San Francisco',
//         Description: '39',
//         date: '2009/09/15',
//         Imageurl: '$205'
//       },
//       {
//         NickName: 'Sonya Frost',
//         MsgType: 'Software Engineer',
//         Title: 'Edinburgh',
//         Description: '23',
//         date: '2008/12/13',
//         Imageurl: '$103'
//       },
//       {
//         NickName: 'Jena Gaines',
//         MsgType: 'Title ManDescriptionr',
//         Title: 'London',
//         Description: '30',
//         date: '2008/12/19',
//         Imageurl: '$90'
//       },
//       {
//         NickName: 'Quinn Flynn',
//         MsgType: 'Support Lead',
//         Title: 'Edinburgh',
//         Description: '22',
//         date: '2013/03/03',
//         Imageurl: '$342'
//       },
//       {
//         NickName: 'Charde Marshall',
//         MsgType: 'Regional Director',
//         Title: 'San Francisco',
//         Description: '36',
//         date: '2008/10/16',
//         Imageurl: '$470'
//       },
//       {
//         NickName: 'Haley Kennedy',
//         MsgType: 'Senior Marketing Designer',
//         Title: 'London',
//         Description: '43',
//         date: '2012/12/18',
//         Imageurl: '$313'
//       },
//       {
//         NickName: 'Tatyana Fitzpatrick',
//         MsgType: 'Regional Director',
//         Title: 'London',
//         Description: '19',
//         date: '2010/03/17',
//         Imageurl: '$385'
//       },
//       {
//         NickName: 'Michael Silva',
//         MsgType: 'Marketing Designer',
//         Title: 'London',
//         Description: '66',
//         date: '2012/11/27',
//         Imageurl: '$198'
//       },
//       {
//         NickName: 'Paul Byrd',
//         MsgType: 'Chief Financial Titler (CFO)',
//         Title: 'New York',
//         Description: '64',
//         date: '2010/06/09',
//         Imageurl: '$725'
//       },
//       {
//         NickName: 'Gloria Little',
//         MsgType: 'Systems Administrator',
//         Title: 'New York',
//         Description: '59',
//         date: '2009/04/10',
//         Imageurl: '$237'
//       },
//       {
//         NickName: 'Bradley Greer',
//         MsgType: 'Software Engineer',
//         Title: 'London',
//         Description: '41',
//         date: '2012/10/13',
//         Imageurl: '$132'
//       },
//       {
//         NickName: 'Dai Rios',
//         MsgType: 'Personnel Lead',
//         Title: 'Edinburgh',
//         Description: '35',
//         date: '2012/09/26',
//         Imageurl: '$217'
//       },
//       {
//         NickName: 'Jenette Caldwell',
//         MsgType: 'Development Lead',
//         Title: 'New York',
//         Description: '30',
//         date: '2011/09/03',
//         Imageurl: '$345'
//       },
//       {
//         NickName: 'Yuri Berry',
//         MsgType: 'Chief Marketing Titler (CMO)',
//         Title: 'New York',
//         Description: '40',
//         date: '2009/06/25',
//         Imageurl: '$675'
//       },
//       {
//         NickName: 'Caesar Vance',
//         MsgType: 'Pre-Sales Support',
//         Title: 'New York',
//         Description: '21',
//         date: '2011/12/12',
//         Imageurl: '$106'
//       },
//       {
//         NickName: 'Doris Wilder',
//         MsgType: 'Sales Assistant',
//         Title: 'Sidney',
//         Description: '23',
//         date: '2010/09/20',
//         Imageurl: '$85'
//       },
//       {
//         NickName: 'Angelica Ramos',
//         MsgType: 'Chief Executive Titler (CEO)',
//         Title: 'London',
//         Description: '47',
//         date: '2009/10/09',
//         Imageurl: '$1'
//       },
//       {
//         NickName: 'Gavin Joyce',
//         MsgType: 'Developer',
//         Title: 'Edinburgh',
//         Description: '42',
//         date: '2010/12/22',
//         Imageurl: '$92'
//       },
//       {
//         NickName: 'Jennifer Chang',
//         MsgType: 'Regional Director',
//         Title: 'Singapore',
//         Description: '28',
//         date: '2010/11/14',
//         Imageurl: '$357'
//       },
//       {
//         NickName: 'Brenden Wagner',
//         MsgType: 'Software Engineer',
//         Title: 'San Francisco',
//         Description: '28',
//         date: '2011/06/07',
//         Imageurl: '$206'
//       },
//       {
//         NickName: 'Fiona Green',
//         MsgType: 'Chief Operating Titler (COO)',
//         Title: 'San Francisco',
//         Description: '48',
//         date: '2010/03/11',
//         Imageurl: '$850'
//       },
//       {
//         NickName: 'Shou Itou',
//         MsgType: 'Regional Marketing',
//         Title: 'Tokyo',
//         Description: '20',
//         date: '2011/08/14',
//         Imageurl: '$163'
//       },
//       {
//         NickName: 'Michelle House',
//         MsgType: 'Integration Specialist',
//         Title: 'Sidney',
//         Description: '37',
//         date: '2011/06/02',
//         Imageurl: '$95'
//       },
//       {
//         NickName: 'Suki Burks',
//         MsgType: 'Developer',
//         Title: 'London',
//         Description: '53',
//         date: '2009/10/22',
//         Imageurl: '$114'
//       },
//       {
//         NickName: 'Prescott Bartlett',
//         MsgType: 'Technical Author',
//         Title: 'London',
//         Description: '27',
//         date: '2011/05/07',
//         Imageurl: '$145'
//       },
//       {
//         NickName: 'Gavin Cortez',
//         MsgType: 'Team Leader',
//         Title: 'San Francisco',
//         Description: '22',
//         date: '2008/10/26',
//         Imageurl: '$235'
//       },
//       {
//         NickName: 'Martena Mccray',
//         MsgType: 'Post-Sales support',
//         Title: 'Edinburgh',
//         Description: '46',
//         date: '2011/03/09',
//         Imageurl: '$324'
//       },
//       {
//         NickName: 'Unity Butler',
//         MsgType: 'Marketing Designer',
//         Title: 'San Francisco',
//         Description: '47',
//         date: '2009/12/09',
//         Imageurl: '$85'
//       },
//       {
//         NickName: 'Howard Hatfield',
//         MsgType: 'Title ManDescriptionr',
//         Title: 'San Francisco',
//         Description: '51',
//         date: '2008/12/16',
//         Imageurl: '$164'
//       },
//       {
//         NickName: 'Hope Fuentes',
//         MsgType: 'Secretary',
//         Title: 'San Francisco',
//         Description: '41',
//         date: '2010/02/12',
//         Imageurl: '$109'
//       },
//       {
//         NickName: 'Vivian Harrell',
//         MsgType: 'Financial Controller',
//         Title: 'San Francisco',
//         Description: '62',
//         date: '2009/02/14',
//         Imageurl: '$452'
//       },
//       {
//         NickName: 'Timothy Mooney',
//         MsgType: 'Title ManDescriptionr',
//         Title: 'London',
//         Description: '37',
//         date: '2008/12/11',
//         Imageurl: '$136'
//       },
//       {
//         NickName: 'Jackson Bradshaw',
//         MsgType: 'Director',
//         Title: 'New York',
//         Description: '65',
//         date: '2008/09/26',
//         Imageurl: '$645'
//       },
//       {
//         NickName: 'Olivia Liang',
//         MsgType: 'Support Engineer',
//         Title: 'Singapore',
//         Description: '64',
//         date: '2011/02/03',
//         Imageurl: '$234'
//       },
//       {
//         NickName: 'Bruno Nash',
//         MsgType: 'Software Engineer',
//         Title: 'London',
//         Description: '38',
//         date: '2011/05/03',
//         Imageurl: '$163'
//       },
//       {
//         NickName: 'Sakura Yamamoto',
//         MsgType: 'Support Engineer',
//         Title: 'Tokyo',
//         Description: '37',
//         date: '2009/08/19',
//         Imageurl: '$139'
//       },
//       {
//         NickName: 'Thor Walton',
//         MsgType: 'Developer',
//         Title: 'New York',
//         Description: '61',
//         date: '2013/08/11',
//         Imageurl: '$98'
//       },
//       {
//         NickName: 'Finn Camacho',
//         MsgType: 'Support Engineer',
//         Title: 'San Francisco',
//         Description: '47',
//         date: '2009/07/07',
//         Imageurl: '$87'
//       },
//       {
//         NickName: 'Serge Baldwin',
//         MsgType: 'Data Coordinator',
//         Title: 'Singapore',
//         Description: '64',
//         date: '2012/04/09',
//         Imageurl: '$138'
//       },
//       {
//         NickName: 'Zenaida Frank',
//         MsgType: 'Software Engineer',
//         Title: 'New York',
//         Description: '63',
//         date: '2010/01/04',
//         Imageurl: '$125'
//       },
//       {
//         NickName: 'Zorita Serrano',
//         MsgType: 'Software Engineer',
//         Title: 'San Francisco',
//         Description: '56',
//         date: '2012/06/01',
//         Imageurl: '$115'
//       },
//       {
//         NickName: 'Jennifer Acosta',
//         MsgType: 'Junior Javascript Developer',
//         Title: 'Edinburgh',
//         Description: '43',
//         date: '2013/02/01',
//         Imageurl: '$75'
//       },
//       {
//         NickName: 'Cara Stevens',
//         MsgType: 'Sales Assistant',
//         Title: 'New York',
//         Description: '46',
//         date: '2011/12/06',
//         Imageurl: '$145'
//       },
//       {
//         NickName: 'Hermione Butler',
//         MsgType: 'Regional Director',
//         Title: 'London',
//         Description: '47',
//         date: '2011/03/21',
//         Imageurl: '$356'
//       },
//       {
//         NickName: 'Lael Greer',
//         MsgType: 'Systems Administrator',
//         Title: 'London',
//         Description: '21',
//         date: '2009/02/27',
//         Imageurl: '$103'
//       },
//       {
//         NickName: 'Jonas Alexander',
//         MsgType: 'Developer',
//         Title: 'San Francisco',
//         Description: '30',
//         date: '2010/07/14',
//         Imageurl: '$86'
//       },
//       {
//         NickName: 'Shad Decker',
//         MsgType: 'Regional Director',
//         Title: 'Edinburgh',
//         Description: '51',
//         date: '2008/11/13',
//         Imageurl: '$183'
//       },
//       {
//         NickName: 'Michael Bruce',
//         MsgType: 'Javascript Developer',
//         Title: 'Singapore',
//         Description: '29',
//         date: '2011/06/27',
//         Imageurl: '$183'
//       },
//       {
//         NickName: 'Donna Snider',
//         MsgType: 'Customer Support',
//         Title: 'New York',
//         Description: '27',
//         date: '2011/01/25',
//         Imageurl: '$112'
//       }
//     ]
//   };

//   return (
//     <>
//     <Header/>
//     <Sidebar/>
//     <div className="textcontre">

//                                    <h4 className='reprottitle' >Reports</h4>
//                                    <CsvDownloader reports={reports} />

//                                                                 {/* <CSVLink data={reports} className="lin" >Export</CSVLink> */}
//     <MDBDataTable
//       striped
//       bordered
//       small
      
//       data={reports}
//       className="tablecont"
//     />
//                                                                      </div>

//     </>
    
//   );
// }

// export default Reports;