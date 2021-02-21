import React from 'react';
import { Card } from '@instinct-prj/frontend';

export function PraiseLouis() {
  return (
    <Card header="Praise thy Louis">
      <div className="row">
        <div className="col">
          <img
            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/123101589_200544045004051_661697117931562526_o.jpg?_nc_cat=100&ccb=3&_nc_sid=174925&_nc_ohc=Z_LznRXH3XIAX_55KH4&_nc_ht=scontent-ort2-2.xx&oh=675f6ec33dbd61b9ee05262680e1ffc2&oe=605801E1"
            style={{borderRadius: '100%', padding: 5, background: 'white', width: 250, height: 250}}
          />
        </div>
        <div className="col">
          <h3>If you see a Louis in need...</h3>
          <p>Please give him compliments.</p>
        </div>
      </div>
    </Card>
  )
}
