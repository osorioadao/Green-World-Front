import PropTypes from "prop-types"

interface TextAreaProps {
  id: string;
  placeholder: string;
}

export default function TextArea({ id, placeholder }: TextAreaProps) {
  return (
    <textarea
      className="outline-none border-[1px] rounded-[3px] resize-none text-body w-full h-[30vh] p-3"
      id={id}
      placeholder={placeholder}
    >
    </textarea>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}