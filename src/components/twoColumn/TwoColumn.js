import Image from 'next/image';


const TwoColumn = () => {
  return (
    <section class="score-stripe page-layout-stripe">
      <div class="container pageLayout">
        <div class="score-column2 equal">
          <div class="score-left">
            <div class="h-100 d-flex flex-column justify-content-center got-you-covered-today">
              <h2 class="text-purple">We've got you covered for today</h2>
              <p>We can help with:</p>
              <ul class="list-unstyled">
                <li class="med-reminders">Medication reminders</li>
                <li class="transit">Transitioning home from the hospital</li>
                <li class="transpo">
                  Transportation to and from the doctor's office
                </li>
                <li class="healthy-diet-and-nutrition">
                  Healthy diet and nutrition
                </li>
              </ul>
            </div>
            <style></style>
          </div>
          <div class="score-right">
            <p>
              <Image
                src="/co-home_medicine-clock_2x.png"
                alt="Days of the week pillbox"
                height="930"
                width="1060"
                class="img-fluid med-clock-image"
                loading="lazy"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumn;