import React from 'react'

export default function SideBar(props) {
  const {handleToggleModel , data} = props

  return (
    <div className='sidebar'>
        <div onClick={handleToggleModel} className='bgOvrerlay'></div>
            <div className="sidebarCOntents">
            <h2>{data?.title}</h2>
            <div className='descriptionContainer'>
                <p className='descriptionTitle' >{data?.date}</p>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={handleToggleModel}>
              <i className='fa-solid fa-arrow-right'></i>
            </button>
        </div>
    </div>
  )
}
