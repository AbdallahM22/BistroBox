import Faq from "./Faq";
import styles from "./Faqs.module.css";
import Heading from "./Heading";

const Faqs = () => {
  return (
    <div className={styles.faqs}>
      <div className="container">
        <Heading>
          Frequently asked
          <br /> questions
        </Heading>
        <div className={styles["faqs-container"]}>
          <div>
            <Faq
              question="What de I need to apply for the account?"
              answer="Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est. Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et."
            />
            <Faq
              question="How the subscription process works?"
              answer="Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est. Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et."
              initialState="open"
            />
          </div>
          <div>
            <Faq
              question="What de I need to apply for the account?"
              answer="Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est. Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et."
            />
            <Faq
              question="What de I need to apply for the account?"
              answer="Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est. Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et."
            />
            <Faq
              question="What de I need to apply for the account?"
              answer="Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est. Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et."
            />
            <Faq
              question="What de I need to apply for the account?"
              answer="Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est. Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
