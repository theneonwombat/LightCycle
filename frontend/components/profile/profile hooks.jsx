import React from 'react';
import DashboardItem from '../dashboard/dashboard_item';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      debugger
      return <ul>
        {courses.map((course) => { 
          return <DashboardItem
            course={course}
            deleteCourse={deleteCourse} 
            key={course.id}
          />})}
      </ul>
    }
  }
  
  debugger
  return(
    <div>
      <div>AVATAR</div>
      <h1>{player.playername}</h1>
      <label>Location:
        <h4>{player.location}</h4>
      </label>
      <label>Bio:
        <p>{player.bio}</p>
      </label>
      
      <ul>COURSES
        {playerCourses(player.courses)}
      </ul>
    </div>
    )
  
}

export default PlayerShow;