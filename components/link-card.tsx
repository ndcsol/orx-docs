import { Card, Cards } from "nextra-theme-docs";

const defaultIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

export const LinkCard = ({
  icon = defaultIcon,
  path,
  title,
}: {
  icon?: React.ReactNode;
  path: string;
  title: string;
}) => {
  return (
    <Cards>
      <Card icon={icon} title={title} href={path}>
        <></>
      </Card>
    </Cards>
  );
};
