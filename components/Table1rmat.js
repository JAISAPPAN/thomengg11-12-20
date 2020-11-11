 
 import {Table} from 'react-bootstrap'
 const Table1rmat1 =[
 {
        ItemCode:'Vcl0',
        Class:'0',
        TextureOnTop:'Cloth Texture',
        StdWidth: '0.6m/0.9m/1.0m/1.2m',
        StdLength:'1m/2m/5m/10m',
        StdThickness:'3.0mm',
        MaxUseVoltage: '1000',
        ProofVoltage:'5000',
        WithstandVoltage:'10000',
 }, 
 
    {
        ItemCode: 'Vcl1',
        Class: '1',
        TextureOnTop: 'Cloth Texture',
        StdWidth: '0.6m/0.9m/1.0m/1.2m',
        StdLength: '1m/2m/5m/10m',
        StdThickness: '3.0mm',
        MaxUseVoltage: '7500',
        ProofVoltage: '10000',
        WithstandVoltage: '20000',
    }, 

       {
        ItemCode: 'Vcl2',
        Class: '2',
        TextureOnTop: 'Cloth Texture',
        StdWidth: '0.6m/0.9m/1.0m/1.2m',
        StdLength: '1m/2m/5m/10m',
        StdThickness: '3.0mm/6.0mm',
        MaxUseVoltage: '17000',
        ProofVoltage: '20000',
        WithstandVoltage: '30000',
    }, 

    
    {
        ItemCode: 'Vcl3',
        Class: '3',
        TextureOnTop: 'Cloth Texture',
        StdWidth: '0.6m/0.9m/1.0m/1.2m',
        StdLength: '1m/2m/5m/10m',
        StdThickness: '3.0mm/4.0mm/6.0mm ',
        MaxUseVoltage: '26500',
        ProofVoltage: '40000',
        WithstandVoltage: '40000',
    }, 
    
    {
        ItemCode: 'Vcl4',
        Class: '4',
        TextureOnTop: 'Cloth Texture',
        StdWidth: '0.6m/0.9m/1.0m/1.2m',
        StdLength: '1m/2m/5m/10m',
        StdThickness: '4.0mm/6.0mm',
        MaxUseVoltage: '3600',
        ProofVoltage: '40000',
        WithstandVoltage: '50000',
    }, 

 
 
 

]


export default function Table1rmat() {
    return (
        <div>
            <Table striped bordered hover variant="dark">

                <thead>
                    <tr>
                        <th>Item Code</th>
                        <th>Class</th>
                        <th>Texture On Top</th>
                        <th>Std. Width</th>
                        <th>Std. Length</th>
                        <th>Std. Thickness </th>
                        <th>Max Voltage</th>
                        <th>Proof Voltage</th>
                        <th>Withstand Voltage</th>

                    </tr>
                </thead>

                {
                    Table1rmat1.map(mat => (




                        <tbody>
                            <tr>
                                <td>{mat.ItemCode}</td>
                                <td>{mat.Class}</td>
                                <td>{mat.TextureOnTop}</td>
                                <td>{mat.StdWidth}</td>
                                <td>{mat.StdLength}</td>
                                <td>{mat.StdThickness}</td>
                                <td>{mat.MaxUseVoltage}</td>
                                <td>{mat.ProofVoltage}</td>
                                <td>{mat.WithstandVoltage}</td>
                            </tr>

                        </tbody>
                    ))

                }
            </Table>
        </div>
    )
}


