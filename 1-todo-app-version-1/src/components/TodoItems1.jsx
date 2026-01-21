function TodoItems1(){

 let todoName ='Buy Milk';
 let todoDate = '10/12/2006';


    return <div class="container">

        <div class="row kg-row">
          <div class="col-6">{todoName}</div>
          <div class="col-4">{todoDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger bpbutton">
              Delete
            </button>
          </div>
        </div>

    </div>
}
export default TodoItems1;