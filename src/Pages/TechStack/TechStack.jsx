import React from 'react'
import './TechStack.css'
import { TechstackList } from '../../utils/TechStackList';
// function TechStack() {
//   return (
//     <div>
//       <div className='container tech-stack'>
//         <h2 className='col-12 mt-3 mb-1 text-center '>Technologies stack</h2>
//         <hr />
//         <p className='pb-3 text-center'>👉 Including programming languages, frameworks, databse, front-end and back-end-tools and Apis</p>
//       </div>
//       <div className="row">
//         {TechStackList.map(tech=>(
//           <h1>{tech.name}</h1>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default TechStack;
function TechStack() {
  return (
    <div>
      <div className='container tech-stack'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technologies stack</h2>
        <hr />
        <p className='pb-3 text-center'>👉 Including programming languages, frameworks, database, front-end and back-end tools and APIs</p>
      </div>
      <div className="row">
        {TechstackList.map(tech => (
          <div key={tech._id} className="col-md-3">
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className='media d-flex justify-content-center'>
                    <div className="align-slf-center">
                    <tech.icon className='tech-icon'></tech.icon>
                    </div>
                    <div className="mesia-body">
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
