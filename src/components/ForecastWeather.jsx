import React from 'react';

const ForecastWeather = ({ forecast, location }) => {
  return (
    <>
      <div className='container text-light '>
        <h3 className='mt-3 mb-3 text-center p-2 '>
          Weather forecast of{' '}
          {`${location.name},${location.region},${location.country}`}
        </h3>
        {forecast.forecastday.map((data, index) => {
          return (
            <div className='container mt-2' key={index}>
              <div
                className='accordion accordion-flush '
                id='accordionFlushExample'
              >
                <div className='accordion-item'>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target={`#${index}`}
                      aria-expanded='false'
                      aria-controls={index}
                    >
                      <div className='d-flex justify-content-center align-items-center'>
                        <span className='me-3'> Day : {data.date}</span>
                        <span>
                          <img
                            src={data.day.condition.icon}
                            alt={data.day.condition.text}
                            style={{ height: '3rem', width: '3rem' }}
                          />
                        </span>
                        <span className='ms-3 me-3'>
                          {' '}
                          Min Temp : {data.day.mintemp_c + 'c'}
                        </span>
                        <span className='me-3'>
                          {' '}
                          Max Temp : {data.day.maxtemp_c + 'c'}
                        </span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id={index}
                    className='accordion-collapse collapse'
                    data-bs-parent={`#${index}`}
                  >
                    <div className='accordion-body'>
                      <div className='container'>
                        {data.hour.map((data, index) => {
                          return (
                            <div
                              className='container text-center mb-2'
                              key={index}
                            >
                              {`Hrs : ${index}.00`} /{' '}
                              {`Temp : ${data.temp_c}c `}/{' '}
                              {
                                <img
                                  src={`${data.condition.icon}`}
                                  style={{ height: '3rem', width: '3rem' }}
                                />
                              }
                              <div
                                className='progress'
                                role='progressbar'
                                aria-label='Default striped example'
                                aria-valuenow='10'
                                aria-valuemin='0'
                                aria-valuemax='100'
                                value={data.temp_c}
                              >
                                <div
                                  className='progress-bar progress-bar-striped'
                                  style={{ width: `${data.temp_c}%` }}
                                >
                                  {`${data.temp_c}%`}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Footer Credit */}

        {
          <h6 className='text-center text-white mt-3'>
            Created By <span style={{ color: '#2ecc71' }}>Devendhiran</span>
          </h6>
        }
      </div>
    </>
  );
};

export default ForecastWeather;
