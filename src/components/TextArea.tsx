import PropTypes from "prop-types"

interface TextAreaProps {
  id: string;
  placeholder: string;
}

export default function TextArea({ id, placeholder }: TextAreaProps) {
  return (
    <textarea
      className="md:w-[45.3rem] outline-none border-[1px] rounded-[3px] resize-none text-body w-[14rem] h-[7rem] p-3"
      id={id}
      placeholder={placeholder}
    >
    </textarea>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
}