import './newemployee.css'

export default function Newemployee() {
  return (
      <div className="newEmployee">
         <h1 className="newEmployeeTitle">New Employee</h1>
            <form className='newEmployeeForm'>
                <div className="newEmployeeItem">
                    <label>UserName</label>
                    <input type='text' placeholder='Nandan' />
                </div>
              <div className="newEmployeeItem">
                  <label>Full Name</label>
                  <input type='text' placeholder='Nandan Kumar' />
              </div>
              <div className="newEmployeeItem">
                  <label>Email</label>
                  <input type='text' placeholder='Nandankumar@gmail.com' />
              </div>
              <div className="newEmployeeItem">
                  <label>Password</label>
                  <input type='password' placeholder='password' />
              </div>
              <div className="newEmployeeItem">
                  <label>Phone</label>
                  <input type='number' placeholder='+91 0000000000' />
              </div>
              <div className="newEmployeeItem">
                  <label>Address</label>
                  <input type='text' placeholder='Bengalore, India' />
              </div>
              <div className="newEmployeeItem">
                  <label>Gender</label>
                  <div className="newEmployeeGender">
                  <input type='radio' placeholder='gender' id='male' value='male' />
                  <label for='male'>Male</label>
                  <input type='radio' placeholder='gender' id='female' value='female' />
                  <label for='female'>Female</label>                 
                  <input type='radio' placeholder='gender' id='other' value='other' />
                  <label for='other'>Other</label>  
                  </div>
              </div>
              <div className="newEmployeeItem">
                  <label>Active</label>
                  <select className='newEmployeeSelect' name='active' id='active'>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <button className="newEmployeeButton">Create</button>
            </form>
      </div>
  )
}
