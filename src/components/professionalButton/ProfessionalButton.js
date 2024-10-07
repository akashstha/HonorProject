import Link from "next/link";

const ProfessionalButton  = () =>{
    return(
        <section className="score-stripe page-layout-stripe">s
            <div className="container pageLayout">
                <div className="score-column2 equal">
                    <div className="score-left">
                        



    <div className="score-section-hero   ">
                                    <div className="score-hero-body">
                <h2 className="text-purple">Care Professional Job Opportunities</h2>
<p>Home is so much more than we think it is. It’s where we make our best memories, feel safe, comfortable and loved. It’s where we want to live out our lives. Join the Home Instead family to give the comfort of home to aging adults and learn what it feels like to help change someone’s life.</p>
            </div>
                    <div className="score-call-to-action">
                


        {/* <a className="btn btn-outline-secondary" title="Search Jobs" href="/home-care-jobs/">
            Search Jobs
        </a> */}
    <Link className="btn btn-outline-secondary" href="/home-care-jobs">Search Jobs</Link>

            </div>
    </div>

                    </div>
                    <div className="score-right">
                        


    <div className="video-player-wrapper video-modal">
        <div className="video-thumbnail w-100">
            <button id="block-937048" className="ytp-large-play-button ytp-button ytp-large-play-button-red-bg" aria-label="Play" data-video-id="E1sEEkqnUdM" data-toggle="modal" data-target="#video-modal" data-video-url="https://www.youtube.com/embed/E1sEEkqnUdM?&amp;rel=0&amp;enablejsapi=1&amp;autoplay=1&amp;origin=https%3A%2F%2Fwww.homeinstead.com" title="Play video">
                <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                    <path className="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                    <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                </svg>
            </button>
        </div>
        {/* <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Do you want fulfilling work? You belong here!",
            "description": "More on a #caregiving career: HomeInstead.com/careers\n\nIf you love caring for others, making an impact, and doing meaningful work, then you belong here at Home Instead.\n\nGrow as a Care Professional with the Home Instead network where you’ll be treated with respect, compensated fairly, and you’ll make a real impact on people’s lives, including your own.\n\nCare Professionals are the heart of each local Home Instead office. You not only provide the very best home care services, but also create a positive aging experience for older adults.",
            "thumbnailUrl": [
              "https://i.ytimg.com/vi/E1sEEkqnUdM/sddefault.jpg"
             ],
            "uploadDate": "2023-02-08T22:27:41Z",
            "embedUrl": "https://www.youtube.com/embed/E1sEEkqnUdM"
          }
        </script> */}
    </div>
    <script src="/Static/dist/YouTubeModal.js?v=4.6.0.26882" defer=""></script>

                    </div>
                </div>
            </div>
    </section>
    )
}

export default ProfessionalButton;