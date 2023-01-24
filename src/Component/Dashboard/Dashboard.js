import React from 'react'
import './dashboard.css'

const Dashboard = () => {
  return (
    



<div class="main-panel">
    <div class="content-wrapper" >
        <div class="page-header">
            <h3 class="page-title">
                Dashboard
            </h3>
        </div>
        <div class="row" id="mystyle">
            <div class="col-md-3 stretch-card grid-margin">
                <div class="card bg-gradient-danger card-img-holder text-white">
                    <div class="card-body">

                        <h4 class="font-weight-normal mb-3">Total Campaigns<i class="mdi mdi-chart-line mdi-24px float-right"></i>
                        </h4>
                        <h2 class="mb-5">count</h2>

                    </div>
                </div>
            </div>

            <div class="col-md-3 stretch-card grid-margin">
                <div class="card bg-gradient-warning  card-img-holder text-white">
                    <div class="card-body">
{/* 
                        <h4 class="font-weight-normal mb-3">Sent</i>
                        </h4> */}
                        <h2 class="mb-5">Sent</h2>

                    </div>
                </div>
            </div>


            <div class="col-md-3 stretch-card grid-margin">
                <div class="card bg-gradient-info card-img-holder text-white">
                    <div class="card-body">

                        <h4 class="font-weight-normal mb-3">Delivered<i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                        </h4>
		  
 		 
                    </div>
                </div>
            </div>

   

      

   


               
        </div>

    </div>

</div>

  )
}

export default Dashboard