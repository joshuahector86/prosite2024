import React from "react";

interface CopyrightProps {
  year: number;
  owner: string;
}

const Copyright: React.FC<CopyrightProps> = ({ year, owner }) => {
  const currentYear = new Date().getFullYear();
  const copyrightText =
    year === currentYear
      ? `${year} ${owner}`
      : `${year}-${currentYear} ${owner}`;

  return <div>&copy; {copyrightText}</div>;
};

export default Copyright;
