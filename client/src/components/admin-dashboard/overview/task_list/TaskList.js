import './task_list.css'
import {Table} from 'react-bootstrap'

const TaskList = () => {
  return (
    <div className='task-list'>
        <h3>Task List</h3>
        <Table striped hover>
            <thead>
                <th>Task</th>
                <th>Status</th>
                <th>Date To Complete</th>
            </thead>
            <tbody>
                <tr>
                    <td>Complete pending orders</td>
                    <td><span className='completed'>Completed</span></td>
                    <td>15/12/23</td>
                </tr>
                <tr>
                    <td>Update inventory details</td>
                    <td><span className='completed'>Completed</span></td>
                    <td>15/12/23</td>
                </tr>
                <tr>
                    <td>Pick new groceries</td>
                    <td><span className='pending'>Pending</span></td>
                    <td>15/12/23</td>
                </tr>
                <tr>
                    <td>Complete project Motto</td>
                    <td><span className='pending'>Pending</span></td>
                    <td>15/12/23</td>
                </tr>
                <tr>
                    <td>Migrate to new DBMS</td>
                    <td><span className='pending'>Pending</span></td>
                    <td>15/12/23</td>
                </tr>
                <tr>
                    <td>Switch Admin accounts</td>
                    <td><span className='pending'>Pending</span></td>
                    <td>15/12/23</td>
                </tr>
            </tbody>
        </Table>
        
    </div>
  )
}

export default TaskList