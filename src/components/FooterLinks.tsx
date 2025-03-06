import PropTypes from "prop-types";
import { Link } from "react-router-dom";

interface LinkItem {
  linkName: string;
  link: string;
}

interface Group {
  title: string;
  links: LinkItem[];
}

interface LinksProps {
  data: Group[];
}

export default function FooterLinks({ data }: LinksProps) {
  return (
    <div className='flex gap-[50px]'>
      {data.map((group, groupIndex) => (
        <div key={groupIndex} className='flex flex-col gap-[16px]'>
          <h4 className='font-bold'>{group.title}</h4>
          {group.links.map((linkItem, linkIndex) => (
            <Link key={linkIndex} className='flex column gap-[16px] hover:text-green-400 hover:underline' to={`/${linkItem.link}`}>
              {linkItem.linkName}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

FooterLinks.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          linkName: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};