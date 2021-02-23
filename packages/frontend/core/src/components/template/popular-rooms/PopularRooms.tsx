import React from 'react';
import {Link} from 'wouter';
import {Card} from '../../generic/card';
import {Loading} from '../../generic/loading';
import {useFetchPopularRooms} from '../../../hooks/room';

export function PopularRooms() {
  const rooms = useFetchPopularRooms();

  return (
    <Card header="Popular Rooms">
      <Loading isLoading={rooms === undefined}>
        <table className="rooms table table-striped">
          <tbody>
            {rooms?.map(room => (
              <tr key={room.id}>
                <td style={{textAlign: 'center'}}>
                  <img src="/img/icons/room/1.gif" />
                </td>
                <td style={{textAlign: 'justify', wordBreak: 'break-word'}}>
                  {room.name}
                  <br />
                  <i style={{fontSize: 11, wordBreak: 'break-word'}} />
                </td>
                <td>
                  <img src="/img/icons/room/visitors.gif" />
                  <b style={{marginLeft: 5}}>0</b>
                </td>
                <td style={{width: 150, paddingLeft: 20}}>
                  <Link className="button" to={`/rooms/${room.id}`}>
                    Visit Room
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Loading>
    </Card>
  );
}
