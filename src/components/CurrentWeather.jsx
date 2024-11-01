const CurrentWeather = ({ current, location }) => {
  return (
    <>
      <div className='container text-light rounded'>
        <h3 className='mt-3 mb-3 text-center p-2 '>{`${location.name},${location.region},${location.country}`}</h3>
        {/* after location current city */}

        <div className='container  '>
          <div className='row  align-items-center'>
            {/* conditions */}
            <div className='col-md-3'>
              <div className='card bg-primary text-light'>
                <div className='card-body d-flex justify-content-center align-items-center'>
                  <span>
                    <img
                      className='img-fluid rounded-start'
                      src={current.condition.icon}
                      alt=''
                    />
                  </span>
                  <span className='card-text'>{current.condition.text}</span>
                </div>
              </div>
            </div>

            {/* Temperature in celcious*/}

            <div className='col-md-3 mt-2 mt-md-0'>
              <div className='card bg-primary text-light'>
                <div className='card-body text-center'>
                  <span className='card-text'>
                    {' '}
                    Current Temp in C : {current.temp_c}
                  </span>
                </div>
              </div>
            </div>

            {/* Temperature in fehrenheit*/}

            <div className='col-md-3 mt-2 mt-md-0'>
              <div className='card bg-primary text-light'>
                <div className='card-body text-center'>
                  <span className='card-text'>
                    {' '}
                    Current Temp in f : {current.temp_f}
                  </span>
                </div>
              </div>
            </div>

            {/* Humidity*/}

            <div className='col-md-3 mt-2 mt-md-0'>
              <div className='card bg-primary text-light'>
                <div className='card-body text-center'>
                  <span className='card-text'>
                    {' '}
                    Current Humidity : {current.humidity}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className='container  mt-3'>
          <div className='row  align-items-center'>
            {/* Wind degree: */}
            <div className='col-md-3'>
              <div className='card bg-primary text-light'>
                <div className='card-body d-flex justify-content-center align-items-center'>
                  <span className='card-text'>
                    Wind degree : {current.wind_degree}
                  </span>
                </div>
              </div>
            </div>

            {/* Wind Dir:*/}

            <div className='col-md-3 mt-2 mt-md-0'>
              <div className='card bg-primary text-light'>
                <div className='card-body text-center'>
                  <span className='card-text'>
                    {' '}
                    Wind Dir : {current.wind_dir}
                  </span>
                </div>
              </div>
            </div>

            {/* Wind speed(kph):*/}

            <div className='col-md-3 mt-2 mt-md-0'>
              <div className='card bg-primary text-light'>
                <div className='card-body text-center'>
                  <span className='card-text'>
                    {' '}
                    Wind speed(kph) : {current.wind_kph}
                  </span>
                </div>
              </div>
            </div>

            {/* Wind speed(mph) : */}

            <div className='col-md-3 mt-2 mt-md-0'>
              <div className='card bg-primary text-light'>
                <div className='card-body text-center'>
                  <span className='card-text'>
                    {' '}
                    Wind speed(mph) : {current.wind_mph}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
