import React from 'react';
import {uniq} from 'lodash';
import {Avatar} from '@instinct-web/core';
import {FigureSelectorProps} from './FigureSelector.types';

export function FigureSelector({figures}: FigureSelectorProps) {
  const groups = uniq(figures.map(_ => _.group));

  function getGroup(group: string) {
    const groupFigures = figures.filter(_ => _.group === group);
    return (
      <>
        <label className="form-label" htmlFor={`${group}_row`}>
          {group}
        </label>
        <div className="row" id={`${group}_row`}>
          {groupFigures.map((_, figureIndex) => (
            <div
              className="col-3 ng-star-inserted"
              key={`group_${group}_figure_${figureIndex}`}
            >
              <div className="d-flex justify-content-center w-100">
                <Avatar look={_.look} headOnly />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      {groups.map((group, groupIndex) => (
        <div key={`group_${groupIndex}`}>{getGroup(group)}</div>
      ))}
    </>
  );
}
