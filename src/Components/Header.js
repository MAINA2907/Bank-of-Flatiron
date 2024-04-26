import React from 'react';

function Header(){
    return(
                
    <form className="" style={{ border: "1px solid lightgrey" }}>
        <div className="container-fluid" style={{ background: "linear-gradient( #4B0082, #700080)", color: "#FFFFFF"}}>
            <p className="display-4 text-center font-weight-bold p-0">The Royal Bank of Flatiron</p>
       
        
            <div class="input-group">
            <input type="text" class="form-control m-2" placeholder="Recent Transactions"></input>
            </div>


            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <div className="col-md-3 p-1 ">
                <input type="text" className="form-control" placeholder="Description" name="description" value="description" required />
            </div>

            <div className="col-md-3 p-1">
                <input type="text" className="form-control" placeholder="Category" name="category" value="category" required />
            </div>

            <div className="col-md-3 p-1">
                <input type="number" className="form-control" placeholder="Amount" name="amount" value="amount" required />
            </div>

            <div className="col-md-3 d-flex align-items-center">
                <label className="me-2"></label>
                <input type="date" className="form-control" name="date" value="date" required />
            </div>
            </div>


            <button type="submit" className="btn btn-secondary col-md-2 mx-auto d-block mt-3">
            Add Transaction
            </button>



        </div>
    </form>   
    
    )
    
    

}

export default Header;