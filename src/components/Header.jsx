import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <p>
          Certify <span>Block</span>
        </p>
      </div>
      <div>
        <ul className="flex gap-2">
            <li>Idea</li>
            <li>Solution</li>
            <li>Process Flow</li>
            <li>Tech Stack</li>
            <li>Use Case</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
