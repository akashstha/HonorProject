
const ComfortBlock = (props) => {
  const content = props.content;
  return (
    <section className="score-stripe page-layout-stripe">
    <div className="container pageLayout">
        <div className="score-column1">
            <div className="score-center">
                

<h2 className="text-center text-purple">{content.heading}</h2>
<p className="text-center mx-auto max-width: 37rem;font-size: 1.2rem;">{content.paragraph}</p>
            </div>
        </div>
    </div>
</section>
  );
};

export default ComfortBlock;
