import { useEffect, useState } from 'react';
import axios from '../axiosConfig';

function TruckList() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    const fetchTrucks = async () => {
      try {
        const res = await axios.get('/api/trucks');
        setTrucks(res.data);
      } catch (err) {
        console.error('Error fetching trucks', err);
      }
    };

    fetchTrucks();
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-dark text-warning fw-bold fs-5">
          🚛 All Trucks
        </div>
        <div className="card-body table-responsive">
          {trucks.length === 0 ? (
            <p className="text-muted">No trucks found.</p>
          ) : (
            <table className="table table-striped align-middle">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Truck No</th>
                  <th>Model</th>
                  <th>PUC Expiry</th>
                  <th>Permit Expiry</th>
                  <th>Documents</th>
                  <th>Photo</th>
                  <th>QR Code</th>
                </tr>
              </thead>
              <tbody>
                {trucks.map((truck, index) => (
                  <tr key={truck._id}>
                    <td>{index + 1}</td>
                    <td>{truck.truckNumber}</td>
                    <td>{truck.model}</td>
                    <td>{truck.pucExpiry?.slice(0, 10) || '-'}</td>
                    <td>
                      AI: {truck.allIndiaPermitExpiry?.slice(0, 10) || '-'}<br />
                      GJ: {truck.gujaratPermitExpiry?.slice(0, 10) || '-'}
                    </td>
                    <td>
                      {truck.pucFile && (
                        <a href={`/uploads/${truck.pucFile}`} target="_blank" rel="noopener noreferrer">PUC</a>
                      )}<br />
                      {truck.permitAllIndiaFile && (
                        <a href={`/uploads/${truck.permitAllIndiaFile}`} target="_blank" rel="noopener noreferrer">AI</a>
                      )}<br />
                      {truck.permitGujaratFile && (
                        <a href={`/uploads/${truck.permitGujaratFile}`} target="_blank" rel="noopener noreferrer">GJ</a>
                      )}<br />
                      {truck.thicknessFile && (
                        <a href={`/uploads/${truck.thicknessFile}`} target="_blank" rel="noopener noreferrer">Thick</a>
                      )}
                    </td>
                    <td>
                      {truck.truckPhoto ? (
                        <img src={`/uploads/${truck.truckPhoto}`} alt="Truck" style={{ width: '60px' }} />
                      ) : (
                        <span className="text-muted">No photo</span>
                      )}
                    </td>
                    <td>
                      {truck.qrCode && (
                        <img src={truck.qrCode} alt="QR" style={{ width: '60px' }} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default TruckList;
