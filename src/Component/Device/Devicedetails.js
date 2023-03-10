import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './device.css'

const Devicedetails = () => {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div class="main-panel textcontde" style={{ paddingTop: 10 }}>
          <div class="content-wrapper">
            {/* <div class="page-header">
             
            </div> */}
            <h4 style={{ color: "#763b75", padding: 8, fontSize: 20 }}>Test Numbers</h4>

            <div class="col-lg-12 grid-margin stretch-card">
              <div class="table-responsive-lg">
                <div class="card scroll_dash">
                  <div class="card-body">

                    <div className="tab-cont ">
                      <div class="form-group">
                        <input type="search" placeholder='search' className="form-control" />
                        <button onclick="Export()" class="rbtnde">Verify</button>
                        <button onclick="Export()" class="rbtnde">Delete</button>

                      </div>
                      <table className="table table-striped display" id="example">
                        <thead>
                          <tr style={{ borderTop: "1px solid #cccccc9c !important" }}>
                            <th>
                              <div class="form-check">
                                <label >
                                  <input type="checkbox" class="form-check-input" />
                                </label>
                              </div>
                            </th>
                            {/* <th> Campaign Name <p class="arrow"><i class="icon-long-arrow-up" id="up" style="float: right;"></i></p><p class="arrow"><i class="icon-long-arrow-down" id="up" style="float: right;"></i></p></th>--> */}
                            <th>Mobil Number<span class="sort-by"></span></th>


                            <th> Date<span class="sort-by"></span></th>

                            <th> Status<p class="arrow"><span class="sort-by"></span></p></th>
                          </tr>
                        </thead>



                        <tbody>
                          {/* <tr>
                                        



                                                            <td class="py-1">
                                                                <div class="form-check">
                                                                <label class="form-check-label">
                                                                  <input type="checkbox" class="form-check-input"/>  </label>
                                                              </div>
                                                              
                                                            </td> */}
                          {/* <!--			  <td><?php echo $Campaignid; ?> </td>--> */}
                          {/* <td title="<?php echo $nickname;?>"><p class="textoverlap"><?php echo $nickname; ?></p> </td> */}
                          {/* <td><?php echo $Message_type; ?> </td> */}
                          {/* <td title="<?php echo $title;?>"><p class="textoverlap"><?php echo $title; ?></p></td>
                                          <td title="<?php echo $Message;?>"><p class="textoverlap"><?php echo $Message; ?></p> </td>
                                        <td><?php echo $CDT; ?> </td>
                                                            <td> <?php $sent = "numfmt --to=si ".$SENT_COUNT; echo $s = exec($sent);?></td>
                                          <td> <?php $del = "numfmt --to=si ".$DLVD_COUNT; echo $d = exec($del);?></td>
                                        <td> <?php $red = "numfmt --to=si ".$READ_COUNT; echo $r = exec($red);?></td>
                                          
                                          <td>

                                                <?php 
                                  if ($status == 'Completed') { echo '<label class="badge badge-success">Completed</label>'; } else if ($status == 'In-Process') {echo '<label class="badge badge-gradient-warning">In-Process</label>'; } else if ( $status == 'Scheduled') { echo '<label class="badge badge-gradient-info">Scheduled</label>'; } else if ( $status == 'Rejected') { echo '<label class="badge badge-gradient-danger">Rejected</label>'; }
                                  ?> */}
                          {/* </td> */}
                          {/* </tr>
                                        <?php  } ?> */}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Devicedetails
