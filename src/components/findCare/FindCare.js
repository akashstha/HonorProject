import Image from "next/image";
const FindCare = () => {
  return (
    <section className="">
      <div className="container pageLayout">
        <div className="score-column2 equal">
          <div className="score-left">

          <Image src="/homeCare.png" width={1000} height ={1050}/>

          </div>
          <div className="score-right">
            <div className="ml-auto p-0 py-lg-3 pl-lg-3 hero-content-container">
              <div className="score-hero pt-0 pb-3   ">
                <div className="score-hero-body">
                  <h1>
                    {/* The care they <em>need</em>.<br>The home they</br>{" "} */}
                    The care they <em>need</em>.
                    {/* <em>love</em>. */}
                  </h1>
                  <p>
                    Home Instead provides safe and consistent care for your
                    loved one as they age, delivered at home with both comfort
                    and transparency.
                  </p>
                </div>
              </div>
              <div
                className="location-search hisc-duo-search-box hisc-career-search-box width: unset; max-width: unset;"
                data-career-result-page="/home-care-jobs/search/"
                data-location-result-page="/locations/search-results/"
                data-api-key="AIzaSyCtKspCWYcWxOpKYmqrd2N-SiYOMOvsbXs"
              >
                <button className="btn btn-secondary location-search-button active">
                  Find Care
                </button>
                <button className="btn btn-secondary career-search-button">
                  Find Jobs
                </button>
                <div className="form-box w-100">
                  <div className="d-inline-block w-100">
                    <input
                      type="text"
                      name="career"
                      id="search-1198285"
                      className="form-control cont duo-search-text career-search-text d-inline"
                      aria-describedby="Postal_Code-help-search-search-1198285"
                      placeholder=" "
                    />
                    <label for="search-1198285">
                      Postal Code or City &amp; State
                    </label>
                    <button
                      className="btn btn-secondary duo-search-button"
                      data-spy-listener=".fixed-bottom-btn"
                    >
                      Find a local office
                    </button>
                  </div>
                  <div className="field-validation-error mt-5">
                    Please enter a valid search
                  </div>
                  <small
                    id="Postal_Code-help-search-search-1198285"
                    className="hiscForm-field-description Postal_Code-help sr-only visually-hidden"
                  >
                    Please enter a valid Postal Code or City and State.
                  </small>
                </div>
                <div className="use-location hisc-use-location position-relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    role="img"
                    aria-label="Current Location"
                  >
                    <path
                      id="target-svg"
                      d="M26.571,12.428H24.205a9.773,9.773,0,0,0-8.135-8.135V1.928h-3V4.293a9.773,9.773,0,0,0-8.135,8.135H2.571v3H4.936a9.773,9.773,0,0,0,8.135,8.135v2.365h3V23.563a9.773,9.773,0,0,0,8.135-8.135h2.365v-3Zm-5.418,0H18.814a4.512,4.512,0,0,0-2.744-2.744V7.346a6.772,6.772,0,0,1,5.082,5.082Zm-6.582,3a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,14.571,15.428Zm-1.5-8.082V9.684a4.512,4.512,0,0,0-2.744,2.744H7.989A6.772,6.772,0,0,1,13.071,7.346ZM7.989,15.428h2.338a4.512,4.512,0,0,0,2.744,2.744V20.51A6.772,6.772,0,0,1,7.989,15.428Zm8.082,5.082V18.172a4.512,4.512,0,0,0,2.744-2.744h2.338A6.772,6.772,0,0,1,16.071,20.51Z"
                      transform="translate(-2.071 -1.428)"
                      fill="#ba135f"
                      stroke="#fff"
                      stroke-width="1"
                    ></path>
                  </svg>
                  <a href="#" title="Use Current Location">
                    Use Current Location
                  </a>
                </div>
              </div>
              <script
                src="/Areas/HomeInstead/Static/dist/CareerManager.js?v=4.6.0.26882"
                defer=""
              ></script>
              <script
                src="/Areas/HomeInstead/Static/dist/LocationManager.js?v=4.6.0.26882"
                defer=""
              ></script>
              <script
                src="/Areas/HomeInstead/Static/dist/DuoSearchBox.js?v=4.6.0.26882"
                defer=""
              ></script>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindCare;
