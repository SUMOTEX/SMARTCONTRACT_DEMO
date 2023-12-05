// WalletButton.js
const WalletButton = () => {
    return (
        <button style={buttonStyle}>
            Create Wallet
        </button>
    );
};

const buttonStyle = {
    backgroundColor: '#4CAF50', // Green background
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '8px', // Rounded corners
};

export default WalletButton;
