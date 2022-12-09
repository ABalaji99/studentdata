import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee, getEmployeeById } from '../service/localstorage';
import { useForm } from './../hooks/useForm';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { editEmployee } from './../service/localstorage';

export const EmployeeForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        roll:'',
        name: '',
        grade:'',
        email: '',
        address:'',
        phone: ''
    });

    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id);
            setForm(employee);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editEmployee(id, inputValues) : addEmployee({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 1500);
    };

    return (
        <div>

            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="" onClick={() => navigate(-1)}>Go Back</button>
                <h1 className="text-center">{id ? "Edit" : "Add new"} Student</h1>
                <div />
            </div> 

            <div className="cards">
            {
                showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success">
                            <strong>Well done!</strong> {id ? "edited" : "added a new"} Student.
                        </div>
                    </div>
                )
            }
                <form onSubmit={handleSubmit}>

                <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Roll No</label> <br />
                        <input
                            name="roll"
                           
                            type="number"
                            value={inputValues.roll}
                            onChange={handleInputChange}
                            className=""
                            id="inputValid"
                        />
                        {inputValues.roll.length===0?<p className='color-green'>Please enter Values in btweeen 2</p>:<p className='color-red'>Roll No is valid</p>}
                    </div>




                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Name</label> <br />
                        <input
                            name="name"
                            type="text"
                            value={inputValues.name}
                            onChange={handleInputChange}
                            className=""
                            id="inputValid"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Class</label> <br />
                        {/* <input
                            name="name"
                            type="text"
                            value={inputValues.name}
                            onChange={handleInputChange}
                            className=""
                            id="inputValid"
                        /> */}

                        <select name="grade" id="grade" value={inputValues.grade} onChange={handleInputChange}>
                            <option value="1st class">1st class</option>
                            <option value="2nd class">2nd class</option>
                            <option value="3rd class">3rd class</option>
                            <option value="4th class">4th class</option>
                            <option value="5th class">5th class</option>
                            <option value="6th class">6th class</option>
                            <option value="7th class">7th class</option>
                            <option value="8th class">8th class</option>
                            <option value="9th class">9th class</option>
                            <option value="10th class">10th class</option>
                        </select>
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Email</label> <br />
                        <input
                            name="email"
                            type="email"
                            value={inputValues.email}
                            onChange={handleInputChange}
                            className=""
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Address</label> <br />
                        <textarea
                            type="text"
                            name="address"
                            value={inputValues.address}
                            onChange={handleInputChange}
                            className=""n
                            id="inputValid"
                          
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Phone</label> <br />
                        <input
                            name="phone"
                            type="number"
                            value={inputValues.phone}
                            onChange={handleInputChange}
                            className=""
                            id="inputValid"
                        />
                    </div>


                    {/* <div className="d-grid gap-2 mt-3">
                        <button type="submit" onClick={()=>setTimeout(() => {
                            navigate(-1)
                        },1400)} className="btn btn-outline-primary btn-block">{id ? "Edit" : "Add"} Employee</button>
                    </div> */}
  <div className="d-grid gap-2 mt-3">
                    {
                       
                        (inputValues.phone&&inputValues.address&&inputValues.email&&inputValues.grade&&inputValues.name&&inputValues.roll)===''?
                     
                         <button type="submit" onClick={()=>alert('Please enter all inputs')} className="btn btn-outline-primary btn-block">{id ? "Edit" : "Add"} Employee</button>
                        : <button type="submit" onClick={()=>setTimeout(() => {
                            navigate(-1)
                        },1400)} className="btn btn-outline-primary btn-block">{id ? "Edit" : "Add"} Employee</button>
                       
                    }
                     </div>

                
<<<<<<< HEAD
                onClick={() => setInputAlert(true)}
                className="btn btn-outline-primary btn-block"
              >
                {id ? "Edit" : "Add"} Employee
              </button>
            ) : (
              <button
                type="submit"
                onClick={() =>
                  setTimeout(() => {
                    navigate(-1);
                  }, 1500)
                }
                className="btn btn-outline-primary btn-block"
              >
                {id ? "Edit" : "Add"} Employee
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
=======
                </form>
            </div>

           

        </div >
    )
}
>>>>>>> parent of c8df677 (Final changes)
