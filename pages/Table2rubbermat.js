import {Table2rmat} from '../components/Table2rmat'
import {Table} from 'react-bootstrap'

export default function Table2rubbermat() {
    return (
        <div>
            <Table striped bordered hover variant="dark">

            <thead>
                <tr>
                    <th>Sl.No</th>
                    <th>Specification</th>
                    <th>Class A</th>
                    <th>Class B</th>
                    <th>Class C</th>

                </tr>
            </thead>
        
            {
                Table2rmat.map(mat=>(

                   
                    
                        
                        <tbody>
                            <tr>
                                <td>{mat.SlNo}</td>
                            <td>{mat.Specification}</td>
                            <td>{mat.ClassA}</td>
                            <td>{mat.ClassB}</td>
                            <td>{mat.ClassC}</td>



                            </tr>
                        
                        </tbody>
                    

                ))

            }
            </Table>
        </div>
    )
}
