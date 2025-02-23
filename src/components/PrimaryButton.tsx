import PropTypes from 'prop-types';

interface PrimaryButtonProps {
  onClick: any;
  addClassName: string;
  name: string;
}

export default function PrimaryButton({ onClick, name, addClassName }: PrimaryButtonProps) {
  
  return (
    <div>
      <button className={`flex justify-center p-3 text-[16px] text-white cursor-pointer font-medium rounded-[4px] bg-primary hover:bg-[#6ada0e] ${addClassName} `} onClick={onClick} style={{transition: '.2s ease-in-out' }} >
        {name}
      </button>
    </div>
  );
}

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  addClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
}