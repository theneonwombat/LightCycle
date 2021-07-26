import React from 'react';
import DashboardItem from '../dashboard/dashboard_item';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5'

function PlayerShow({ player, playerId, exact_path,
  currentPlayerId, fetchPlayer, deleteCourse }) {

  useEffect(() => { 
    fetchPlayer(playerId) 
  }, [exact_path]);
  
  if (!player) {
    return <h1>LOADING...</h1>
  }

  function playerCourses(courses) {
    if (courses) {
      return <ul>
        {courses.map((course) => { 
          return <DashboardItem
            course={course}
            deleteCourse={deleteCourse} 
            key={course.id}
          />})}
      </ul>
    }
    return <div>This Player Has No Courses... Yet...</div>
  }

  return(
    <div className="profile" >

      <div className="profile-content" >
        <img src={player.avatarUrl} alt="" />
        <h1>{player.playername}</h1>
          <IoLocationOutline />
          <h4>{player.location}</h4>
        <label>Bio:
          <p>{player.bio}</p>
        </label>
      </div>
      
      <div className="profile-feed" >
        COURSES
        {playerCourses(player.courses)}
      </div>

    </div>
    )
  
}

export default PlayerShow;