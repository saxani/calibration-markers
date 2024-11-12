import Modal from 'react-modal';

import Button from '../Button';

const SubmitModal = ({
  handleModal,
  open,
  addMarkers,
  addEnvelopes,
  loading,
  handleSubmit,
}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#eee',
    },
  };

  const markers = addMarkers ? addMarkers : 0;
  const envelopes = addEnvelopes ? addEnvelopes : 0;

  function closeModal() {
    handleModal();
  }

  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Comfirm Inventory'
      ariaHideApp={false}
    >
      <p>Are you sure you want to confirm this inventory update?</p>
      <p>
        You want to add <b>{markers}</b> markers and <b>{envelopes} </b>{' '}
        envelopes.
      </p>
      <span style={{ marginRight: '20px' }}>
        <Button text='Cancel' handleClick={handleModal} secondary={true} />
      </span>

      <Button
        text='Confirm'
        handleClick={handleSubmit}
        submit={true}
        loading={loading}
      />
    </Modal>
  );
};

export default SubmitModal;
