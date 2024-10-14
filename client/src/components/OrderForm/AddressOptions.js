import styles from '../../styles/addresses.module.scss';

const AddressOptions = ({ data, onSelect }) => {
  console.log(data);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {data.map((item) => (
          <li
            onClick={() => {
              onSelect(item);
            }}
          >
            {item.Text}{' '}
            <span className={styles.subText}>{item.Description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressOptions;