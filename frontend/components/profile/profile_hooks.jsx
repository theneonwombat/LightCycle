import React from 'react';
import DashboardItem from '../dashboard/dashboard_item';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5'
import { BiGhost } from 'react-icons/bi'

function PlayerShow({ player, playerId, exact_path,
  isCurrentPlayer, fetchPlayer, deleteCourse }) {

  useEffect(() => { 
    fetchPlayer(playerId) 
  }, [exact_path]);
  
  if (!player) {
    return <h1>LOADING...</h1>
  }

  function playerCourses(courses) {
    if (courses.length) {
      return <ul>
        {courses.map((course) => { 
          return <DashboardItem
            course={course}
            deleteCourse={deleteCourse} 
            key={course.id}
          />})}
      </ul>
    }
    return <div className="no-courses-yet" >This Player Has No Courses... Yet...</div>
  }

  function locationCheck(location) {
    if (location) {
      return location
    }

    return "Location Unkown..."
  }

  function bioCheck(player) {
    if (player.bio) {
      return player.bio
    }

    return(
      <>
        {`Not much is known about ${player.playername} right now... `}
        <BiGhost/>
      </>
    )
  }

  // function allowEdit(boolean) {
  //   if (boolean) {
  //     <Link>Edit Profile</Link>
  //   }
  // }

  return(
    <div className="profile-container" >
      <div className="profile" >

        <div className="profile-head" >

          <div className="profile-content" >
            <img src={player.avatarUrl} alt="" />
            <h1>{player.playername}</h1>
            <div className="location-container flexrow" >
              <IoLocationOutline />
              <div className="location-tag" >{locationCheck(player.location)}</div>
            </div>

            <div className="bio" >
                <p>{bioCheck(player)}</p>
            </div>
          </div>

          <div className="profile-right" >

            <div>Edit?</div>

            <div className="all-time" > 
              <div className="time-began" >Since Forever</div>
              <div className="time-num" >{player.numCourses}</div>
              <div className="after-time" >Total Courses</div>
            </div>
          </div>

        </div>
        
        <div className="profile-feed" >
          {playerCourses(player.courses)}
        </div>

      </div>
    </div>
    )
  
}

export default PlayerShow;