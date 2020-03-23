import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const polyStrappingMachine = [
  {
    power: "Strap Width",
    voltage: "9, 12, 15 mm (adjustable) (6mm option)"
  },
  {
    power: "Strapping Tension",
    voltage: "15 ~ 50 kgs"
  },
  {
    power: "Strapping Speed",
    voltage: "2.0 sec./strap"
  },
  {
    power: "Strapping Size",
    voltage: "Min. : 60 mm, Max. : Any size"
  },
  {
    power: "Table Height",
    voltage: "750 mm"
  },
  {
    power: "Machine Size",
    voltage: "L910 x W580 x H750 mm"
  }
];

const PolyStrappingMachine = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Power</th>
          <th>Voltage</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {polyStrappingMachine.map(data => (
          <tr key={data.power}>
            <td>{data.power}</td>
            <td>{data.voltage}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default PolyStrappingMachine;
