import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoBicycleSharp, IoTrashOutline } from 'react-icons/io5';
import { BiRun } from "react-icons/bi";

function ProfileItem({course, playername, avatarUrl, deleteCourse, isCurrentPlayer}) {

  const dateObj = new Date(course.created_at);
  const month = dateObj.toLocaleDateString(undefined, { month: 'long' })
  const date = dateObj.toLocaleDateString(undefined, { day: 'numeric' })
  const year = dateObj.toLocaleDateString(undefined, { year: 'numeric' })
  const time = dateObj.toLocaleTimeString("en-Us", {
    hour: "numeric",
    minute: "2-digit",
  });

  function modeIcon() {
    if (course.travel_mode === 'BICYCLING') {
      return <IoBicycleSharp className="mode-icon" />
    }
    return<BiRun className="mode-icon" />
  }

  function allowDelete() {
    if (isCurrentPlayer) {
      return (
        <button 
        className="delete-item"
        onClick={() => deleteCourse(course.id)}
        title="Delete" >
          <IoTrashOutline />
        </button>
      )
    }
  }

  return(
    <li className="profile-item" >
      <div className="profile-item-left" >

        <div className="top-left" >
          <img 
          className="profile-item-avatar"
          src={avatarUrl} />
          <div className="mode-icon-wrapper" >{modeIcon()}</div>
        </div>

        <div className="bottom-left" >
          {allowDelete()}
        </div>

      </div>
      
      <div className="profile-item-center" >
          
        <div className="profile-item-top" >
          <div className="playername" >{playername}</div>
          <div className="created-at" >{`${month} ${date}, ${year} at ${time}`}</div>
        </div>

        <div className="profile-item-mid" >
          <Link 
          to={`/courses/${course.id}`}
          className="this-course-name" >
            {course.course_name}
          </Link>
          <div className="stats" >
            <div className="dist" >{course.distance}</div>
            <div className="time" >{course.time}</div>
          </div>
        </div>

        <div className="profile-item-bottom" >
          <div className="description" >{course.description}</div>
        </div>
      </div>

      <div className="profile-item-right" >
        <img className="static-map" 
        src={`https://maps.googleapis.com/maps/api/staticmap?size=200x200&path=weight:3%7Ccolor:0xfc5200FF%7Cenc:${course.static_map}&key=${window.googleAPIKey}&map_id=2ce121783e577f4a`} />
      </div>
    </li>
  )
}

export default ProfileItem;