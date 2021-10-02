import React, { Component } from 'react'
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForMobile = RegExp(/^[7-9][0-9]{9}$/);
const regForName = RegExp(/^[A-Za-z]{2,10}$/);
const regForPass = RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/);
const regForAdd = RegExp(/^[A-Za-z0-9]{3,}$/);
const regForAadhar = RegExp(/^[0-9]{12}$/);
const regForUser = RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}$/);

export class ApplicationForm extends Component {
    constructor(props){
        super(props);
        this.state={
            country:'India',
            errorMsg:'',
            success:'',
            errors:{
                fname:'',
                lname:'',
                age:'',
                add1:'',
                add2:'',
                city:'',
                state:'',
                country:'',
                pin:'',
                mob:'',
                aadhar:'',
                percent:'',
                clg:'',
                clgCity:'',
                dept:'',
                email:'',
                uname:'',
                pass:'',
                cpass:'',
                file:''
            }
        }
    }


    changeHandler=(events)=>{
        const {name,value} = events.target;
        let errors=this.state.errors;

        switch(name){
            case 'fname':  errors.fname= regForName.test(value)?'':'Name should be between 2 and 10 letters';
                break;
            case 'lname':   errors.lname= regForName.test(value)?'':'Name should be between 2 and 10 letters';
                break; 
            case 'age':  errors.age=(value>17 && value<60)?'':'Age Should be between 18 and 60 years';
                break;    
            case 'mob':  errors.mob=regForMobile.test(value)?'':'Enter a Vaild Mobile Number';
               break; 
            case 'email': errors.email=regForEmail.test(value)?'':'Email is not valid';
                break;
            case 'pass': errors.pass=regForPass.test(value)?'':'Password must be between 6 to 16 characters and must contain one number and one special character'
                break;
            case 'cpass': errors.cpass=this.state['pass'] === value?'':'Password do not match';
              break; 
            case 'add1': errors.add1=regForAdd.test(value)?'':'Address should be greater than 3 characters' ;
                break;
            case 'add2': errors.add2=regForAdd.test(value)?'':'Address should be greater than 3 characters' ;
                break; 
            case 'city':errors.city=(value.length>4)?'':'Enter a Valid City';
                break;  
            
            case 'state':errors.state=(value.length>4)?'':'Enter a Valid State';
                break;  
            case 'count':errors.country=(this.state['count'] === this.state.country)?'':'Please Enter country as India';
                break;
            case 'clg': errors.clg=(value.length>0)?'':'Enter the College Name';
                 break;      
            case 'clgcity':errors.clgCity=(value.length>4)?'':'Enter a Valid City';
                break;  
            
            case 'pin':errors.pin=(value.length===6)?'':'Enter a valid 6 digit pincode';
                break;
             
            case 'aadhar':errors.aadhar=regForAadhar.test(value)?'':'Enter a valid 12 digit Aadhar number'
                break;   
            case 'uname':errors.uname=regForUser.test(value)?'':'User name must be between 5 to 10 characters and must contain one number and one special character'
                break;
            case 'percent':errors.percent=(value>59)?'':'Percentage should be greater than 60';
                break; 
            case 'dept': errors.dept=(value.length>0)?'':'Enter the your department';
                break;            
            default:   
        }
        this.setState({errors,[name]:value});
    }

    
    
    formSubmit=(events)=>{
           events.preventDefault();
           if(this.validate(this.state.errors)){     
            this.setState({...this.state,success:"submitted suceessfully"})
            }

           else{
           this.setState({...this.state,errorMsg:'Error!!!'})}  

            
    }

    validate=(errors)=>{
       let valid = true;
       Object.values(errors).forEach((val)=> 
           val.length>0 && (valid = false));
       return valid;
    }




    render() {
        const {errors}=this.state;
        return (
         <>
         <div className="container text-center  mt-5">
            <h2>Application Form</h2>
           <div className="container-fulid">
              <form onSubmit={this.formSubmit}>
              {this.state.errorMsg!=="" && <div className="alert alert-danger">{this.state.errorMsg}</div>}
              {this.state.success!=="" && <div className="alert alert-success">{this.state.success}</div>}




                 <div className="container mt-5">
                    {/* First Name */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>First Name :</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="text" name="fname" className="form-control" onChange={this.changeHandler} />
                            {errors.fname.length>0 &&
                            <span style={{color:"red"}}>{errors.fname}</span>}
                        </div>
                    </div>
                    {/* Last Name */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Last Name :</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="text" name="lname" className="form-control" onChange={this.changeHandler} />
                            {errors.lname.length>0 &&
                            <span style={{color:"red"}}>{errors.lname}</span>}
                        </div>
                    </div>
                    {/* Age */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Age :</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="number" name="age" className="form-control" onChange={this.changeHandler} />
                            {errors.age.length>0 &&
                            <span style={{color:"red"}}>{errors.age}</span>}
                        </div>
                    </div>
                    {/* Address Line 1*/}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Address Line 1 :</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="text" name="add1" className="form-control" onChange={this.changeHandler} />
                            {errors.add1.length>0 &&
                            <span style={{color:"red"}}>{errors.add1}</span>}
                        </div>
                    </div>
                    {/* Address Line 2 */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Address Line 2 :</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="text" name="add2" className="form-control" onChange={this.changeHandler} />
                            {errors.add2.length>0 &&
                            <span style={{color:"red"}}>{errors.add2}</span>}
                        </div>
                    </div>
                    {/* City */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>City :</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="text" name="city" className="form-control" onChange={this.changeHandler} />
                            {errors.city.length>0 &&
                            <span style={{color:"red"}}>{errors.city}</span>}
                        </div>
                    </div>
                    {/* State */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>State :</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="text" name="state" className="form-control" onChange={this.changeHandler} />
                            {errors.state.length>0 &&
                            <span style={{color:"red"}}>{errors.state}</span>}
                        </div>
                    </div>
                    {/* Country */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Country :</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="text" name="count" className="form-control" onChange={this.changeHandler} />
                            {errors.country.length>0 &&
                            <span style={{color:"red"}}>{errors.country}</span>}
                        </div>
                    </div>
                    {/* Pincode */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Pin Code :</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="number" name="pin" className="form-control" onChange={this.changeHandler} />
                        </div>
                        {errors.pin.length>0 &&
                            <span style={{color:"red"}}>{errors.pin}</span>}
                    </div>
                    {/* Mobile */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Mobile :</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="number" name="mob" className="form-control" onChange={this.changeHandler} />
                        </div>
                        {errors.mob.length>0 &&
                            <span style={{color:"red"}}>{errors.mob}</span>}
                    </div>
                    {/* Gender */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Gender :</label>
                        </div>
                        <div className="col-lg-8 form-group text-left">
                          Male:  <input type="radio" name="gen" className="form-radio" defaultChecked  /> &nbsp;
                          Female:  <input type="radio" name="gen" className="form-radio"  />
                        </div>
                    </div>
                    {/* Aadhar Details */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Aadhar Number :</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="number" name="aadhar" className="form-control" onChange={this.changeHandler} />
                            {errors.aadhar.length>0 &&
                            <span style={{color:"red"}}>{errors.aadhar}</span>}
                        </div>
                    </div>
                    {/* Education */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Highest Education :</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <select name="edu" className="form-control" >
                                <option value="Bachelors">BE/BTech</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Bsc/BCA">BSc/BCA</option>
                                <option value="HSC">HSC</option>
                                <option value="SSC">SSC</option>
                                <option value="Post">Post Grdauation</option>

                            </select>
                        </div>
                    </div>
                    {/* Percentage */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Percentage Obtained :</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="number" name="percent" className="form-control" onChange={this.changeHandler} />
                            {errors.percent.length>0 &&
                            <span style={{color:"red"}}>{errors.percent}</span>}
                        </div>
                    </div>
                    {/* College Name */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>College Name:</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="text" name="clg" className="form-control" onChange={this.changeHandler} />
                        </div>
                        {errors.clg.length>0 &&
                            <span style={{color:"red"}}>{errors.clg}</span>}
                    </div>
                    {/* College City */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>College City:</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="text" name="clgcity" className="form-control" onChange={this.changeHandler} />
                            {errors.clgCity.length>0 &&
                            <span style={{color:"red"}}>{errors.clgCity}</span>}
                        </div>
                    </div>
                    {/* Department */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Department:</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="text" name="dept" className="form-control" onChange={this.changeHandler} />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Email Id:</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="text" name="email" className="form-control" onChange={this.changeHandler} />
                        </div>
                        {errors.email.length>0 &&
                            <span style={{color:"red"}}>{errors.email}</span>}
                    </div>
                    
                    {/* User Name */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>User Name:</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="text" name="uname" className="form-control" onChange={this.changeHandler} />
                        </div>
                        {errors.uname.length>0 &&
                            <span style={{color:"red"}}>{errors.uname}</span>}
                    </div>


                    {/* Password */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Password:</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="password" name="pass" className="form-control" onChange={this.changeHandler} />
                            {errors.pass.length>0 &&
                            <span style={{color:"red"}}>{errors.pass}</span>}
                        </div>
                    </div>

                     {/*confirm Password */}
                     <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Confirm Password:</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="password" name="cpass" className="form-control" onChange={this.changeHandler} />
                            {errors.cpass.length>0 &&
                            <span style={{color:"red"}}>{errors.cpass}</span>}
                        </div>
                    </div>
                    {/* Upload Resume */}
                    <div className="row mt-2">
                        <div className="col-lg-3 form-group text-left">
                            <label>Upload Resume:</label>
                        </div>
                        <div className="col-lg-8 form-group">
                            <input type="file" name="file" id="file" className="form-control" required />
                            {errors.file.length>0 &&
                            <span style={{color:"red"}}>{errors.file}</span>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <input type="submit" value="Submit" className="btn btn-success mb-4" />






                  </div>
                </form>
           </div>
         </div>
         </>
        )
    }
}

export default ApplicationForm
