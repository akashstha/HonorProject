import Image from "next/image";
const LeftImage = () =>{
    return(
        <section class="score-stripe page-layout-stripe">
            <div class="container pageLayout">
                <div class="score-column2 wide-right">
                    <div class="score-left">
                        

<div class="d-flex mb-neg-2 veges-image">
    <Image src="/co-home_vegetables_2x.png" alt="co-home_vegetables_@2X.webp" height="930" width="1060" class="img-fluid mx-auto" loading="lazy"/></div>
                    </div>
                    <div class="score-right">
                        

<div class="h-100 d-flex flex-column justify-content-center got-you-covered-text">
<h2 class="text-purple">And, we've got you covered for tomorrow</h2>
<p>With our ongoing assessments and care professionals in their home, we can adjust and add services over the long term and work with other care providers to ensure holistic care.</p>
</div>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default LeftImage;