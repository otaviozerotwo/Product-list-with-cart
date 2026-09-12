import './styles.css';

const PrimaryButton = ({ onClick, children }) => (
  <button 
    className='button' 
    onClick={onClick}
  >
    {children}
  </button>
);

export default PrimaryButton;