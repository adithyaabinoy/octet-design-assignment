import React from 'react';
import { ReactComponent as Correct } from '../../assets/images/correct.svg';
import { ReactComponent as Mail } from '../../assets/images/mail.svg';
import { ReactComponent as Person } from '../../assets/images/person.svg';
import { ReactComponent as Star } from '../../assets/images/star.svg';

import './style.scss';

export default function StatusTab({ name, count }) {
  return (
    <div className="tab">
      <p className="count">{count}</p>
      <div className="tab-title">
        {name === 'Active Jobs' ? <Correct /> : name === 'New Application' ? <Mail /> : name === 'Candidate To Be Reviewed' ? <Person /> : <Star />}
        <p className="name">{name}</p>
      </div>
    </div>
  );
}
