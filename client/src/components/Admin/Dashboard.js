import { useEffect, useState } from 'react';

import SubmitModal from './SubmitModal';
import Input from '../OrderForm/Input';
import Button from '../Button';

import inputStyles from '../../styles/input.module.scss';

const Dashboard = () => {
  const [inventory, setInventory] = useState({
    markers: '',
    envelopes: '',
  });
  const [addMarkers, setAddMarkers] = useState('');
  const [addEnvelopes, setAddEnvelopes] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/inventory'
      : '/inventory';

  async function getData() {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    setInventory({
      markers: data.lastRecord.markers,
      envelopes: data.lastRecord.envelopes,
    });
  }

  useEffect(() => {
    getData();
  }, []);

  const handleMarkers = (data) => {
    setAddMarkers(data['markers']);
  };

  const handleEnvelopes = (data) => {
    setAddEnvelopes(data['envelopes']);
  };

  const handleSubmit = async () => {
    setLoading(true);

    const url =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/set-inventory'
        : '/set-inventory';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        markers: parseInt(addMarkers),
        envelopes: parseInt(addEnvelopes),
      }),
    });

    const data = await response.json();
    if (data.success != true) {
      setError(true);
    } else {
      setSuccess(true);
    }

    setLoading(false);
    handleModal();
  };

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <p>
        Current Marker Inventory: <b>{inventory.markers}</b>
      </p>
      <p>
        Current Envelope Inventory: <b>{inventory.envelopes}</b>
      </p>
      <h4>Update inventory</h4>
      <div className={`${inputStyles.row} ${inputStyles.halves}`}>
        <Input
          name='Quantity of Markers to add to inventory:'
          value={addMarkers}
          param='markers'
          handleChange={handleMarkers}
        />
        <Input
          name='Quantity of Envelopes to add to inventory:'
          value={addEnvelopes}
          param='envelopes'
          handleChange={handleEnvelopes}
        />
      </div>
      <div>
        <Button text='Update' handleClick={handleModal} />
      </div>
      <SubmitModal
        open={open}
        handleModal={handleModal}
        addMarkers={addMarkers}
        addEnvelopes={addEnvelopes}
        loading={loading}
        handleSubmit={handleSubmit}
      />
      {error && (
        <p style={{ color: 'red' }}>There was an error submitting inventory.</p>
      )}

      {success && (
        <p style={{ color: 'red' }}>Inventory updated successfully!</p>
      )}
    </div>
  );
};

export default Dashboard;
