
import {Table} from 'react-bootstrap'
export  const ServiceAreasTbl = [
    {
        id:'1',
        ElectricalInstallation:' Wiring & Cabling ',
        FireSafetyInstallation:'Fire Fighting System',
        MechanicalInstallation:'Machinery ',
        InspectionAndAuditService:'Electrical -Marine ,Oil&Gas',
        EngieeringService:'Electrical Power Design',
        ProductsSupply:'Flame Proof , Wether Proof item',
        CodesAndStandard:'ISO 9001-2015'			
    },
    {
        id: '2',
        ElectricalInstallation: ' Electrical Machinery',
        FireSafetyInstallation: 'Hydrant System',
        MechanicalInstallation: 'Fabrication ',
        InspectionAndAuditService: 'Mechanical-Marine, Oil&Gas',
        EngieeringService: 'Storage Tank Design',
        ProductsSupply: 'Electrical switch boards & Panel',
        CodesAndStandard: 'IS'
    },
    {
        id: '3',
        ElectricalInstallation: 'Flame/Explosion Proof Items ',
        FireSafetyInstallation: 'Fire Sprinkle System',
        MechanicalInstallation: 'Piping',
        InspectionAndAuditService: 'Safety-Marine , Oil&Gas ',
        EngieeringService: 'Pressure Vessels Design',
        ProductsSupply: 'Wires & Cables',
        CodesAndStandard: 'IEC'
    },
    {
        id: '4',
        ElectricalInstallation: ' Panel Boards',
        FireSafetyInstallation: 'Alarm Signals',
        MechanicalInstallation: 'Structural',
        InspectionAndAuditService: '',
        EngieeringService: 'Fire Control Plan  Design	',
        ProductsSupply: 'Multi Cable Transit(MCT)',
        CodesAndStandard: 'EN, ATEX'
    },
    {
        id: '5',
        ElectricalInstallation: ' Instrument System',
        FireSafetyInstallation: 'Public Addressable System',
        MechanicalInstallation: 'Storage Tank ',
        InspectionAndAuditService: '',
        EngieeringService: '',
        ProductsSupply: 'Insulation Matt(LV/MV/HV)	',
        CodesAndStandard: 'NEC,NFPA-70,ANSI/UL1203'
    },
    {
        id: '6',
        ElectricalInstallation: 'Cable Tray Fabrication  ',
        FireSafetyInstallation: 'Fire Extinguishers',
        MechanicalInstallation: 'Pressure Vessel',
        InspectionAndAuditService: '',
        EngieeringService: '',
        ProductsSupply: 'Inverter,UPS,Battery,Solar System',
        CodesAndStandard: 'OSID'
    },
    
    {
        id: '7',
        ElectricalInstallation: ' Earthing  System',
        FireSafetyInstallation: 'Pumping Systems',
        MechanicalInstallation: '',
        InspectionAndAuditService: '',
        EngieeringService: '',
        ProductsSupply: 'Steel Pipes,Angle bar,Cable Tray',
        CodesAndStandard: 'API'
    },
    {
        id: '8',
        ElectricalInstallation: ' ',
        FireSafetyInstallation: 'Automatic Control Panel',
        MechanicalInstallation: '',
        InspectionAndAuditService: '',
        EngieeringService: '',
        ProductsSupply: 'Earthing , Grounding Material',
        CodesAndStandard: 'SOLAS'
    },
    
]

export default function ServiceAreasPdt() {
    return (
        <div>
            <Table id="#marine_sec_hdg" striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>ElectricalInstallation</th>
                        <th>FireSafetyInstallation</th>
                        <th>MechanicalInstallation</th>
                        <th>Inspection&AuditService</th>
                        <th>EngieeringService</th>
                        <th>ProductsSupply</th>
                        <th>Codes&Standard</th>
                    </tr>
                </thead>

                {
                    ServiceAreasTbl.map(servicearea => (
                        <tbody>
                            <tr>
                                <td>{servicearea.ElectricalInstallation}</td>
                                <td>{servicearea.FireSafetyInstallation}</td>
                                <td>{servicearea.MechanicalInstallation}</td>
                                <td>{servicearea.InspectionAndAuditService}</td>
                                <td>{servicearea.EngieeringService}</td>
                                <td>{servicearea.ProductsSupply}</td>
                                <td>{servicearea.CodesAndStandard}</td>
                                

                            </tr>

                        </tbody>
                    ))
                }

            </Table>

        </div>
    )
}
