import React from 'react';
import { Digest } from '@js-machine-app/models';
import { Link } from 'react-router-dom';

export const NewsPresentation: React.FC<Digest> = (props) => {
  const newsDate: number = new Date(props.date).getDate();
  const newsMonth: string = new Date(props.date)
    .toLocaleString('ru', { month: 'short' })
    .toUpperCase();

  return (
    <div className="news__wrapper">
      <Link to={`/digest/${props.id}`} className="digest-link">
        <div className="news__read">
          <div className="news__read-content">{'ЧИТАТЬ >'}</div>
        </div>

        <div className="news__content">
          <div>
            <p className="news__day">
              {newsDate} {newsMonth}
            </p>
          </div>
          <div>
            <p className="news__title">{props.title}</p>
          </div>
          <div>
            <p className="news__description">{props.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
