import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Content = () => {
  return (
    <div className='h-100 w-100'>
      <div className='row h-50 w-100'>
        <div className='col-8 p-1 h-100'>
          <div className='card bg-light h-100'>
          <div class="card-header bg-light border-0">Project Overview</div>
          <h6 class="card-header bg-light border-0 card-secondary-body">You can check overview of project here</h6>
            <div class="card-body bg-light h-100">
              <div className='row bg-light h-100'>
                <div className='col-3 bg-light h-100'>
                  <div style={{width: '100%', height: '100%'}}>
                    <CircularProgressbar value={50} text={`${50}%`} />  
                  </div>
                </div>
                <div className='col-9 bg-light h-100'>
                  <div className='row h-50'>

                    <div className='col'>
                      <div className='row'>
                        <div><span class="dot" style={{backgroundColor: "#2e90fa"}}></span> Ground Floor</div>
                      </div>
                      <div className='row'>
                        <div className='percentage'><h5>26%</h5></div>
                      </div>
                    </div>

                    <div className='col'>
                      <div className='row'>
                        <div><span class="dot" style={{backgroundColor: "#f79009"}}></span> First Floor</div>
                      </div>
                      <div className='row'>
                        <div className='percentage'><h5>17%</h5></div>
                      </div>
                    </div>

                    <div className='col'>
                      <div className='row'>
                        <div><span class="dot" style={{backgroundColor: "#12b76a"}}></span> Second Floor</div>
                      </div>
                      <div className='row w-50'>
                        <div className='percentage'><h5>5%</h5></div>
                      </div>
                    </div>
                  </div>
                  <div className='row h-50'>
                    <div className='col'>
                      <div className='row'>
                        <div><span class="dot" style={{backgroundColor: "#ee46bc"}}></span> Third Floor</div>
                      </div>
                      <div className='row'>
                        <div className='percentage'><h5>6%</h5></div>
                      </div>
                    </div>

                    <div className='col'>
                      <div className='row'>
                        <div><span class="dot" style={{backgroundColor: "#6172f3"}}></span> Kitchen Floor</div>
                      </div>
                      <div className='row'>
                        <div className='percentage'><h5>4%</h5></div>
                      </div>
                    </div>

                    <div className='col h-100'>
                      <div className='row'>
                        <div><span class="dot" style={{backgroundColor: "#4e5ba6"}}></span> Other</div>
                      </div>
                      <div className='row w-50'>
                        <div className='percentage'><h5>10%</h5></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-4 p-1 h-100'>
          <div className='card bg-light h-100 w-100'>
            <div class="card-header bg-light border-0">Document Repository</div>
            <h6 class="card-header bg-light border-0 card-secondary-body">You can check overview of project here</h6>
              <div className='w-100 p-2 h-20'>
                <button class="btn btn-light w-100 border border-2 font-weight-bold">Upload Document</button>
              </div>
              <div className='w-100 p-2 h-20'>
                <div className='row mx-0'>
                  <h6 className='col-6' style={{fontSize: "14px"}}>First Floor Plan.doc</h6>
                  <div className='col-3' style={{fontSize: "12px"}}>In Progress</div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className='w-100 p-2 h-20'>
                <div className='row mx-0'>
                  <h6 className='col-6' style={{fontSize: "14px"}}>Ground Floor Plan.doc</h6>
                  <div className='col-6' style={{fontSize: "12px"}}>Rejected</div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className='w-100 p-2 h-20'>
                <div className='row mx-0'>
                  <h6 className='col-6' style={{fontSize: "14px"}}>Building Overall Plan.doc</h6>
                  <div className='col-6' style={{fontSize: "12px"}}>Approved</div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className='row h-50  w-100'>
        <div className='col-4 p-1'>
          <div className='card bg-light h-100'>
            <div class="card-header bg-light border-0">Project Timeline</div>
            <h6 class="card-header bg-light border-0 card-secondary-body">You can check timeline of project here</h6>

            <div style={{paddingTop: "3%", paddingLeft: "3%", paddingRight: "3%"}}>
              <div className='card bg-light border-1'>
                <div className='row mx-0'>
                  <div className='col-2'>J</div>
                  <div className='col-10'>
                    <div className='row mx-0' style={{fontWeight: "500"}}>Milestone Name</div>
                    <div className='row mx-0' style={{fontSize: "12px"}}>25 Aug 2022 - 11:30AM</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vl" style={{marginLeft: "10%"}}></div>
            <div style={{paddingLeft: "3%", paddingRight: "3%"}}>
              <div className='card bg-light border-1'>
                <div className='row mx-0 w-100'>
                  <div className='col-2'>J</div>
                  <div className='col-10'>
                    <div className='row mx-0' style={{fontWeight: "500"}}>Milestone Name</div>
                    <div className='row mx-0' style={{fontSize: "12px"}}>25 Aug 2022 - 11:30AM</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vl" style={{marginLeft: "10%"}}></div>
            <div style={{paddingLeft: "3%", paddingRight: "3%"}}>
              <div className='card bg-light border-1'>
                <div className='row mx-0 w-100'>
                  <div className='col-2'>J</div>
                  <div className='col-10'>
                    <div className='row mx-0' style={{fontWeight: "500"}}>Milestone Name</div>
                    <div className='row mx-0' style={{fontSize: "12px"}}>25 Aug 2022 - 11:30AM</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vl" style={{marginLeft: "10%"}}></div>
            <button class="btn btn-light border border-2 font-weight-bold" style={{width: "150px", fontSize: "10px" ,marginLeft: "3%", marginRight: "3%", marginBottom: "3%"}}>Check More</button>
          </div>
        </div>
        <div className='col-8 p-1'>
          <div className='card bg-light h-100'>
            <div className='row mx-0'>
              <div className='col-6 pt-2'>
                <div style={{fontWeight: "500"}}>Compliance Section</div>
                <div style={{fontSize: "12px"}}>You can check overview of project here</div>
              </div>
              <div className='col-4'></div>
              <div className='col-2 pt-2'><span className="badge" style={{color: "rgb(10, 49, 23)"}}>Non-compliant</span></div>
            </div>
            <div className='row mx-0 pt-5'>
              <div className='col-4'>
                <div className='row mx-0 h-50'>
                  <CircularProgressbar 
                  value={25} 
                  circleRatio={0.5} 
                  // text={`${50}%`} 
                  styles={{
                      root: {transform: "rotate(0.75turn)"},
                      path: { stroke: "green" },
                      trailColor: "grey",
                      backgroundColor: "red"
                    }}/>  
                </div>
                <div className='row mx-0 mt-3' style={{position: "relative", fontWeight: "600"}}>Water Effieciency is Low</div>
                <div className='row mx-0 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
              </div>
              <div className='col-2'></div>
              <div className='col-6'>
                <div className='row mx-0' style={{fontWeight: "700"}}>
                  AI-powered compliance check assistant to Improve Water Efficiency Level
                </div>
                <div className='row mx-0 pt-3 mt-2 border border-2' style={{borderRadius: "15px", backgroundColor: "#e8c6a4"}}>
                  <div className='col-2' style={{backgroundColor: "#e8c6a4"}}></div>
                  <div className='col-10' style={{fontWeight: "600", fontSize: "15px", backgroundColor: "#e8c6a4"}}>Follow these steps to fix water efficiency</div>
                </div>
                <div className='row mx-0 pt-3 mt-2 border border-2' style={{borderRadius: "15px", backgroundColor: "#e8c6a4"}}>
                  <div className='col-2' style={{backgroundColor: "#e8c6a4"}}></div>
                  <div className='col-10' style={{fontWeight: "600", fontSize: "15px", backgroundColor: "#e8c6a4"}}>Prevent water Efficiency in future</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content