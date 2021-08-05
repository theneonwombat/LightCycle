import React from 'react';
import DashboardItem from '../dashboard/dashboard_item';
import ProfileItem from './profile_item';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5'
import { BiGhost } from 'react-icons/bi'
import { fetchCourses } from '../../actions/courses_actions';

function PlayerShow({ player, playerId, exact_path,
  isCurrentPlayer, fetchPlayer, fetchCourses, deleteCourse, playerCourses }) {
  
  // const [courses, setCourses] = useState(player.courses);

  useEffect(() => { 
    fetchCourses();
    fetchPlayer(playerId);
  }, [exact_path]);
  
  if (!player) {
    return <h1>LOADING...</h1>
  }

  function mapPlayerCourses(courses) {
    if (courses.length) {
      return <ul>
        {courses.map((course) => { 
          return <ProfileItem
            course={course}
            playername={player.playername}
            avatarUrl={player.avatarUrl}
            isCurrentPlayer={isCurrentPlayer}
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
            <img className="profile-pic" src={player.avatarUrl} />
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

            <div></div>

            <div className="all-time" > 
              <div className="time-began" >Since Forever</div>
              <div className="time-num" >{player.numCourses}</div>
              <div className="after-time" >Total Courses</div>
            </div>
          </div>

        </div>
        
        <div className="profile-feed" >
          {mapPlayerCourses(playerCourses)}
        </div>

      </div>
    </div>
    )
  
}

export default PlayerShow;