import React, { useState, useEffect } from 'react';

const AllLongestStrings = (props) => {
  const { strings } = props;
  const [maxLength, setMaxLength] = useState(0);
  const [maxStrings, setMaxStrings] = useState([]);

  useEffect(() => {
    let maxLen = 0;
    strings.forEach(str => {
      if (str.length > maxLen) {
        maxLen = str.length;
      }
    });
    setMaxLength(maxLen);
  }, [strings]);

  useEffect(() => {
    const filteredStrings = strings.filter(str => str.length === maxLength);
    setMaxStrings(filteredStrings);
  }, [maxLength, strings]);

  return (
    <div>
      <p>Max length: {maxLength}</p>
      <ul>
        {maxStrings.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllLongestStrings;